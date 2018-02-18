import { Selector } from 'testcafe'

fixture `micro-ui-image`
    .page `http://localhost:8080/images`
    .before(async ctx => {
        ctx.images = Selector('img')
        ctx.firstImage = ctx.images.nth(0)
        ctx.secondImage = ctx.images.nth(1)
    })

test('should be included and rendered', async t => {
    await t
        .expect(t.fixtureCtx.images.exists).ok()
})

test('should not load images by default', async t => {
    await t
        .expect(t.fixtureCtx.firstImage.hasClass('loaded')).notOk()
        .expect(t.fixtureCtx.firstImage.getAttribute('src')).eql(undefined)
        .expect(t.fixtureCtx.secondImage.hasClass('loaded')).notOk()
        .expect(t.fixtureCtx.secondImage.getAttribute('src')).eql(undefined)
})

test('should only load above the fold images', async t => {
    await t
        .wait(2000)  // wait for first image to load

        // first image should be loaded
        .expect(t.fixtureCtx.firstImage.hasClass('loaded')).ok()
        .expect(t.fixtureCtx.firstImage.getAttribute('src')).notEql(undefined)

        // second image should not be loaded
        .expect(t.fixtureCtx.secondImage.hasClass('loaded')).notOk()
        .expect(t.fixtureCtx.secondImage.getAttribute('src')).eql(undefined)
})

test('should load image when it is scroll to', async t => {
    await t
        .hover(t.fixtureCtx.secondImage)    // scrolls to when hovered
        .wait(2000)                         // wait for image to load
        .expect(t.fixtureCtx.secondImage.hasClass('loaded')).ok()
        .expect(t.fixtureCtx.secondImage.getAttribute('src')).notEql(undefined)
})