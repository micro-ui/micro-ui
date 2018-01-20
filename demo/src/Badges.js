import { Link } from 'inferno-router'
import { MCBadge } from '../../packages/micro-ui-badge/dist/'

export default function Badges() {
    return (
		<div>
            <p><Link to="/">Back to component list</Link></p>

            <h2>Badges</h2><hr />

            <div>
                <MCBadge number="2">
                    Regular badge
                </MCBadge>
            </div>

            <div>
                <MCBadge primary number="57">
                    Primary badge
                </MCBadge>
            </div>

            <div>
                <MCBadge secondary number="80">
                    Secondary badge
                </MCBadge>
            </div>

            <div>
                <MCBadge tertiary number="80">
                    Tertiary badge
                </MCBadge>
            </div>

            <div>
                <MCBadge primary number="1000">
                    Large number badge
                </MCBadge>
            </div>
		</div>
    )
}
