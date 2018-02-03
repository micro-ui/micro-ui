import Component from 'inferno-component'
import './micro-ui-grid.scss'

export class MCGridCell extends Component {

    render({ children }) {
        return (
            <div
                className={ 'mc-grid-cell ' + (this.props.class ? this.props.class : '') }
                { ...this.props }>

                { children }

            </div>
        )
    }

}
