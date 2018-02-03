import Component from 'inferno-component'
import './micro-ui-badge.scss'

export class MCBadge extends Component {

    render({ children }) {
        let number = parseInt(this.props.number) > 99 ? '99+' : this.props.number

        return (
            <div
                className={ 'mc-badge ' + (this.props.class ? this.props.class : '') }
                { ...this.props }>

                { children }

                <div class="mc-badge-content">
                    { number }
                </div>

            </div>
        )
    }

}
