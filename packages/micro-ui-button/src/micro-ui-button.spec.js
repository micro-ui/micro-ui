import { Selector } from 'testcafe'

fixture `micro-ui-button`
    .page `http://localhost:8080/buttons`
    .before(async ctx => {
        ctx.button = Selector('.mc-button').nth(0)
        ctx.buttonWithIcon = Selector('.mc-button[icon]').nth(0)
        ctx.buttonWithLoading = Selector('.mc-button[loading]').nth(0)
    })

test('should render a button', async t => {
    await t
        .expect(t.fixtureCtx.button.exists).ok()
})

test('should not have an icon by default', async t => {
    await t
        .expect(t.fixtureCtx.button.find('.mc-button__icon').exists).notOk()
})

test('should show an icon in icon buttons', async t => {
    await t
        .expect(t.fixtureCtx.buttonWithIcon.find('.mc-button__icon').exists).ok()
})

test('should not have a loading icon by default', async t => {
    await t
        .expect(t.fixtureCtx.button.find('svg.mc-spinner').exists).notOk()
})

test('should show a loading icon for loading buttons', async t => {
    await t
        .expect(t.fixtureCtx.buttonWithLoading.find('svg.mc-spinner').exists).ok()
})
