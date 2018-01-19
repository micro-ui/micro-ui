import { Link } from 'inferno-router'
import { MCAlert } from '../../packages/micro-ui-alert/dist/'

export default function Alerts() {
    return (
		<div>
            <p><Link to="/">Back to component list</Link></p>

            <h2>Alerts</h2><hr />

            <MCAlert class="mb3" success>
                You successfully did that
            </MCAlert>

            <MCAlert class="mb3" info>
                This is an informative alert
            </MCAlert>

            <MCAlert class="mb3" warning>
                Be careful, this is dangerous
            </MCAlert>

            <MCAlert class="mb3" error>
                You didn't listen! It broke!
            </MCAlert>
		</div>
    )
}
