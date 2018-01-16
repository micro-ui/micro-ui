import Component from 'inferno-component'

const BASE_CLASS = 'mdc-button'
const RAISED_CLASS = 'mdc-button--raised'
const UNELEVATED_CLASS = 'mdc-button--unelevated'
const STROKED_CLASS = 'mdc-button--stroked'
const DENSE_CLASS = 'mdc-button--dense'
const COMPACT_CLASS = 'mdc-button--compact'
const ICON_ONLY_CLASS = 'mdc-button--icon-only'

export class MCButton extends Component {

    render({ children }) {
        if (this.props.leftIcon) this.props.icon = this.props.leftIcon

        return (
            <button
                className={this.getClassNames()}
                disabled={this.props.disabled}>

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

    getClassNames() {
        let classNames = [BASE_CLASS]
        let iconOnly = !this.props.text && (this.props.icon || this.props.leftIcon || this.props.rightIcon)

        if (iconOnly) classNames.push(ICON_ONLY_CLASS)
        if (this.props.raised) classNames.push(RAISED_CLASS)
        if (this.props.unelevated) classNames.push(UNELEVATED_CLASS)
        if (this.props.stroked) classNames.push(STROKED_CLASS)
        if (this.props.dense) classNames.push(DENSE_CLASS)
        if (this.props.compact) classNames.push(COMPACT_CLASS)

        return classNames.join(' ')
    }

}
