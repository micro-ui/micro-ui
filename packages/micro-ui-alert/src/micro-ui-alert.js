import Component from 'inferno-component'

const ICON_SUCCESS = 'check_circle'
const ICON_ERROR = 'error'
const ICON_WARNING = 'warning'
const ICON_INFO = 'info'

export class MCAlert extends Component {

    render({ children }) {
        let icon = this.getIcon()

        return (
            <div
                className={ 'mc-alert ' + (this.props.class ? this.props.class : '') }
                { ...this.props }>

                <i class="material-icons">{ icon }</i>
                { children }

            </div>
        )
    }

    getIcon() {
        if (this.props.success) return ICON_SUCCESS
        if (this.props.error) return ICON_ERROR
        if (this.props.warning) return ICON_WARNING
        return ICON_INFO
    }

}
