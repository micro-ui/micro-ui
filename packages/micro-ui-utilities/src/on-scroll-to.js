const THROTTLE_MILLIS = 100
let lastThrottledEventTime = Date.now()
let subscribers = []

function handleScroll() {
    subscribers.forEach(subscriber => resolveSubscriberIfInViewport(subscriber))
    subscribers = getUnresolvedSubscribers()

    if (!subscribers.length) removeScrollListener()
}

function addSubscriber({ element, threshold, resolve, }) {
    if (!subscribers.length) createScrollListener()

    subscribers.push({ element, threshold, resolve, })
}

function createScrollListener() {
    window.addEventListener('scroll', throttleHandleScroll)
}

function removeScrollListener() {
    window.removeEventListener('scroll', throttleHandleScroll)
}

function resolveSubscriberIfInViewport(subscriber) {
    let viewportHeight = window.scrollY + window.innerHeight
    let elementTop = subscriber.element.getBoundingClientRect().top

    if (elementTop <= viewportHeight + subscriber.threshold) {
        subscriber.resolve()
        subscriber.resolved = true
    }
}

function getUnresolvedSubscribers() {
    return subscribers.filter(subscriber => !subscriber.resolved)
}

function throttleHandleScroll() {
    if ((lastThrottledEventTime + THROTTLE_MILLIS - Date.now()) < 0) {
        handleScroll()
        lastThrottledEventTime = Date.now()
    }
}

export function onScrollTo(element, threshold) {
    return new Promise(resolve => {
        addSubscriber({ element, threshold, resolve, })
        handleScroll()
    })
}
