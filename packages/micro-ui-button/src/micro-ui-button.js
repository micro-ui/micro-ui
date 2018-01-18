import Component from 'inferno-component'
import { MDCRipple } from '@material/ripple'

const BASE_CLASS = 'mdc-button'
const STATE_INFO = 'mdc-button-info'
const STATE_SUCCESS = 'mdc-button-success'
const STATE_DANGER = 'mdc-button-danger'
const TYPE_PRIMARY = 'mdc-button-primary'
const TYPE_SECONDARY = 'mdc-button-secondary'
const TYPE_TERTIARY = 'mdc-button-tertiary'
const MODIFIER_INVERSE = 'mdc-button--inverse'
const MODIFIER_ICON_ONLY = 'mdc-button--icon-only'
const MODIFIER_ELEVATED = 'mdc-button--raised'

export class MCButton extends Component {

    componentDidMount() {
        this.attachRipple()
    }

    componentDidUnmount() {
        this.removeRipple()
    }

    render({ children }) {
        if (this.props.leftIcon) this.props.icon = this.props.leftIcon

        return (
            <button
                className={ this.getClassNames() }
                disabled={ this.props.disabled }
                ref={ element => this.element = element }>

                { this.props.icon &&
                    <i class="material-icons mdc-button__icon">{ this.props.icon }</i>
                }

                { children }

                { this.props.rightIcon &&
                    <i class="material-icons mdc-button__icon">{ this.props.rightIcon }</i>
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

    getClassNames() {
        let classNames = [BASE_CLASS]
        let iconOnly = !this.props.text && (this.props.icon || this.props.leftIcon || this.props.rightIcon)

        if (iconOnly) classNames.push(MODIFIER_ICON_ONLY)
        if (this.props.info) classNames.push(STATE_INFO)
        if (this.props.success) classNames.push(STATE_SUCCESS)
        if (this.props.danger) classNames.push(STATE_DANGER)
        if (this.props.primary) classNames.push(TYPE_PRIMARY)
        if (this.props.secondary) classNames.push(TYPE_SECONDARY)
        if (this.props.tertiary) classNames.push(TYPE_TERTIARY)
        if (this.props.elevated) classNames.push(MODIFIER_ELEVATED)
        if (this.props.inverse) classNames.push(MODIFIER_INVERSE)

        return classNames.join(' ')
    }

}
