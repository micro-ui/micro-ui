import { linkEvent } from 'inferno'
import { Link } from 'inferno-router'
import { MCButton, MCButtonGroup, } from '../../packages/micro-ui-button/dist/'

export default function Buttons() {
    return (
		<div>
            <p><Link to="/">Back to component list</Link></p>

            <h2>Buttons</h2><hr />

            <h3>Types</h3>

            <div class="mb5 ph5">
                <MCButton small class="mr3">
                    Normal
                </MCButton>

                <MCButton class="mr3">
                    Normal
                </MCButton>

                <MCButton disabled class="mr3">
                    Normal
                </MCButton>
            </div>

            <div class="mb5 ph5">
                <MCButton small primary class="mr3">
                    Primary
                </MCButton>

                <MCButton primary class="mr3">
                    Primary
                </MCButton>

                <MCButton primary disabled class="mr3">
                    Primary
                </MCButton>
            </div>

            <div class="mb5 ph5">
                <MCButton small secondary class="mr3">
                    Secondary
                </MCButton>

                <MCButton secondary class="mr3">
                    Secondary
                </MCButton>

                <MCButton secondary disabled class="mr3">
                    Secondary
                </MCButton>
            </div>

            <div class="mb5 ph5">
                <MCButton small tertiary class="mr3">
                    Tertiary
                </MCButton>

                <MCButton tertiary class="mr3">
                    Tertiary
                </MCButton>

                <MCButton tertiary disabled class="mr3">
                    Tertiary
                </MCButton>
            </div>

            <div class="mb5 ph5">
                <MCButton small danger class="mr3">
                    Danger
                </MCButton>

                <MCButton danger class="mr3">
                    Danger
                </MCButton>

                <MCButton danger disabled class="mr3">
                    Danger
                </MCButton>
            </div>

            <div class="mb5 pa5" style="background-color: #222">
                <MCButton small inverse class="mr3">
                    Inverse
                </MCButton>

                <MCButton inverse class="mr3">
                    Inverse
                </MCButton>

                <MCButton inverse disabled class="mr3">
                    Inverse
                </MCButton>
            </div>

            <h3>Icon buttons</h3>

            <div class="mb5 ph5">
                <MCButton icon="phone" class="mr3">
                    Icon
                </MCButton>

                <MCButton rightIcon="keyboard_arrow_right" class="mr3">
                    Icon
                </MCButton>

                <MCButton tertiary icon="favorite" class="mr3" />
            </div>

            <h3>Raised buttons</h3>

            <div class="mb5 ph5">
                <MCButton primary raised class="mr3">
                    Elevated
                </MCButton>

                <MCButton danger raised circle icon="email" />
            </div>

            <h3>Button groups</h3>

            <div class="mb5 ph5">
                <MCButtonGroup>
                    <MCButton primary>
                        One
                    </MCButton>

                    <MCButton primary>
                        Two
                    </MCButton>

                    <MCButton primary>
                        Three
                    </MCButton>
                </MCButtonGroup>
            </div>

            <div class="mb5 ph5">
                <MCButtonGroup>
                    <MCButton primary>
                        One
                    </MCButton>

                    <MCButton secondary>
                        Two
                    </MCButton>

                    <MCButton disabled>
                        Three
                    </MCButton>
                </MCButtonGroup>
            </div>

            <h3>Loading buttons</h3>

            <div class="mb5 ph5">
                <MCButton loading class="mr3">
                    Loading
                </MCButton>

                <MCButton loading primary class="mr3">
                    Loading
                </MCButton>

                <MCButton loading secondary class="mr3">
                    Loading
                </MCButton>

                <MCButton loading tertiary class="mr3">
                    Loading
                </MCButton>

                <MCButton loading danger class="mr3">
                    Loading
                </MCButton>

                <div class="pa3 mt2" style="background: #222; width: 150px">
                    <MCButton loading inverse class="mr3">
                        Loading
                    </MCButton>
                </div>
            </div>
		</div>
    )
}
