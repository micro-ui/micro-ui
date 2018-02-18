import { Selector } from 'testcafe'

fixture `micro-ui-badge`
    .page `http://localhost:8080/badges`

test('should render a badge', async t => {
    let badge = Selector('.mc-badge[number="2"]')

    await t
        .expect(badge.exists).ok()
        .expect(badge.find('.mc-badge-content').innerText).eql('2')
})

test('should output any number greater than 99 as 99+', async t => {
    let badge = Selector('.mc-badge[number="1000"]')

    await t
        .expect(badge.exists).ok()
        .expect(badge.find('.mc-badge-content').innerText).eql('99+')
})