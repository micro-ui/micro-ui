import { Selector } from 'testcafe'

fixture `micro-ui-toolbar`
    .page `http://localhost:8080/toolbars`

test('should render a toolbar', async t => {
    await t
        .expect(Selector('.mc-toolbar').exists).ok()
})

// TODO: add more extensive testing when toolbar implementation is more flushed out
