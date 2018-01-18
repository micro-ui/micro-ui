import { Link } from 'inferno-router'
import { MCButton } from '../../packages/micro-ui-button/dist/'

export default function Buttons() {
    return (
		<div>
            <p><Link to="/">Back to component list</Link></p>

            <h2>Buttons</h2><hr />

            <h3>Types</h3>

            <h4>Primary Button</h4>

            <MCButton primary>
                Primary
            </MCButton>
		</div>
    )
}
