import Component from 'inferno-component'
import './micro-ui-button.scss'

export class MCButtonGroup extends Component {

    render({ children }) {
        return (
            <div
                className={ 'mc-button-group ' + (this.props.class ? this.props.class : '') }
                { ...this.props }>

                { children }

            </div>
        )
    }

}
