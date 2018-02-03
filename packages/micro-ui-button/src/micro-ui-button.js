import Component from 'inferno-component'
import { MDCRipple } from '@material/ripple'
import './micro-ui-button.scss'

export class MCButton extends Component {

    componentDidMount() {
        this.attachRipple()
    }

    componentDidUnmount() {
        this.removeRipple()
    }

    render({ children }) {
        if (this.props.leftIcon) this.props.icon = this.props.leftIcon
        if (this.isIconOnlyButton()) this.props['icon-only'] = true

        return (
            <button
                className={ 'mc-button ' + (this.props.class ? this.props.class : '') }
                { ...this.props }
                ref={ element => this.element = element }>

                { this.props.loading &&
                    <svg class="mc-spinner" width="18px" height="18px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                        <circle class="mc-spinner-path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
                    </svg>
                }

                { this.props.icon &&
                    <i class="material-icons mc-button__icon">{ this.props.icon }</i>
                }

                { children }

                { this.props.rightIcon &&
                    <i class="material-icons mc-button__icon">{ this.props.rightIcon }</i>
                }

            </button>
        )
    }

    attachRipple() {
        if (this.ripple) return
        this.ripple = MDCRipple.attachTo(this.element)
    }

    removeRipple() {
        if (!this.ripple) return
        this.ripple.destroy()
    }

    isIconOnlyButton() {
        return !this.props.children && (this.props.icon || this.props.leftIcon || this.props.rightIcon)
    }

}
