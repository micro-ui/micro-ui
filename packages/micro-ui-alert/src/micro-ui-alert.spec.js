import { Selector } from 'testcafe'

fixture `micro-ui-alert`
    .page `http://localhost:8080/alerts`
    .before(async ctx => {
        ctx.successAlert = Selector('.mc-alert[success]')
        ctx.infoAlert = Selector('.mc-alert[info]')
        ctx.warningAlert = Selector('.mc-alert[warning]')
        ctx.errorAlert = Selector('.mc-alert[error]')
    })

test('should render success alert with correct icon', async t => {
    let alert = t.fixtureCtx.successAlert
    let icon = alert.find('.material-icons')

    await t
        .expect(alert.exists).ok()
        .expect(icon.innerText).eql('check_circle')
})

test('should render info alert with correct icon', async t => {
    let alert = t.fixtureCtx.infoAlert
    let icon = alert.find('.material-icons')

    await t
        .expect(alert.exists).ok()
        .expect(icon.innerText).eql('info')
})

test('should render warning alert with correct icon', async t => {
    let alert = t.fixtureCtx.warningAlert
    let icon = alert.find('.material-icons')

    await t
        .expect(alert.exists).ok()
        .expect(icon.innerText).eql('warning')
})

test('should render error alert with correct icon', async t => {
    let alert = t.fixtureCtx.errorAlert
    let icon = alert.find('.material-icons')

    await t
        .expect(alert.exists).ok()
        .expect(icon.innerText).eql('error')
})