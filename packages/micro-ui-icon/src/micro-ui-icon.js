import Component from 'inferno-component'
import './micro-ui-icon.scss'

export class MCIcon extends Component {

    render() {
        return (
            <i
                className={ 'mc-icon material-icons ' + (this.props.class ? this.props.class : '') }
                { ...this.props }>

                { this.props.icon }

            </i>
        )
    }

}
