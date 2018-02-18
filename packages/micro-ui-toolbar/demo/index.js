import { Link } from 'inferno-router'
import { MCToolbar, MCToolbarSection, MCToolbarRow } from '../dist/'
import { MCIcon } from '../../micro-ui-icon/dist/'

export default function Toolbars() {
    return (
		<div>
            <p><Link to="/">Back to component list</Link></p>

            <h2>Toolbars</h2><hr />

            <MCToolbar class="mb7">
                <MCToolbarRow>
                    <MCToolbarSection align-left class="ph5">
                        <span class="title">Header</span>
                    </MCToolbarSection>
                </MCToolbarRow>
            </MCToolbar>

            <MCToolbar class="mb7">
                <MCToolbarRow>
                    <MCToolbarSection align-left class="pl5">
                        <a href="#">
                            <MCIcon class="pr5">menu</MCIcon>
                        </a>

                        <span class="title">Toolbar</span>
                    </MCToolbarSection>

                    <MCToolbarSection align-right class="pr5">
                        <a href="#" class="pl5">
                            <MCIcon>file_download</MCIcon>
                        </a>

                        <a href="#" class="pl5">
                            <MCIcon>print</MCIcon>
                        </a>

                        <a href="#" class="pl5">
                            <MCIcon>bookmark</MCIcon>
                        </a>
                    </MCToolbarSection>
                </MCToolbarRow>
            </MCToolbar>
		</div>
    )
}
