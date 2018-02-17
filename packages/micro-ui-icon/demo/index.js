import { Link } from 'inferno-router'
import { MCIcon } from '../../micro-ui-icon/dist/'

export default function Icons() {
    return (
		<div>
            <p><Link to="/">Back to component list</Link></p>

            <h2>Icons</h2><hr />

            <div>
                <MCIcon small icon="phone" />
                <MCIcon icon="phone" />
                <MCIcon large icon="phone" />
            </div>
		</div>
    )
}
