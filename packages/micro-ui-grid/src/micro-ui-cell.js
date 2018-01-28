import Component from 'inferno-component'

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
