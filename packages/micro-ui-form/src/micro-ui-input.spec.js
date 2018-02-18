import { Selector } from 'testcafe'

const LABEL_TEXT = 'First Name'
const PLACEHOLDER_TEXT = 'Enter your first name'

fixture `micro-ui-input`
    .page `http://localhost:8080/form`
    .before(async ctx => {
        ctx.inputField = Selector('.mc-form-input[name="firstName1"]')
        ctx.inputFieldWithError = Selector('.mc-form-input[name="firstName2"]')
        ctx.inputFieldWithCaption = Selector('.mc-form-input[name="firstName3"]')
        ctx.inputFieldWithLeftLabel = Selector('.mc-form-input[name="firstName4"]')
    })

test('should be included and rendered', async t => {
    await t
        .expect(t.fixtureCtx.inputField.exists).ok()
        .expect(t.fixtureCtx.inputFieldWithError.exists).ok()
        .expect(t.fixtureCtx.inputFieldWithCaption.exists).ok()
        .expect(t.fixtureCtx.inputFieldWithLeftLabel.exists).ok()
})

test('should have a label', async t => {
    let input = t.fixtureCtx.inputField.find('input')
    let label = t.fixtureCtx.inputField.find('label')
    let inputName = await input.getAttribute('name')

    await t
        .expect(label.exists).ok()
        .expect(label.textContent).eql(LABEL_TEXT)
        .expect(input.getAttribute('id')).eql(inputName)
        .expect(label.getAttribute('for')).eql(inputName)
})

test('should have an aria-label', async t => {
    let input = t.fixtureCtx.inputField.find('input')

    await t
        .expect(input.getAttribute('aria-label')).eql(LABEL_TEXT)
})

test('should have a placeholder', async t => {
    let input = t.fixtureCtx.inputField.find('input')

    await t
        .expect(input.getAttribute('placeholder')).eql(PLACEHOLDER_TEXT)
})

test('should not have a label caption by default', async t => {
    let label = t.fixtureCtx.inputField.find('label')

    await t
        .expect(label.find('span').exists).notOk()
})

test('should have a label caption if one is provided', async t => {
    let label = t.fixtureCtx.inputFieldWithCaption.find('label')

    await t
        .expect(label.find('span').exists).ok()
})

test('should not have an error by default', async t => {
    let error = t.fixtureCtx.inputField.find('.mc-form-error-message')

    await t
        .expect(error.exists).notOk()
})

test('should show an error if provided', async t => {
    let error = t.fixtureCtx.inputFieldWithError.find('.mc-form-error-message')

    await t
        .expect(error.exists).ok()
})
