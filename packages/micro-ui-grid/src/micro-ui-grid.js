import Component from 'inferno-component'

export class MCGrid extends Component {

    render({ children }) {
        return (
            <div
                className={ 'mc-grid ' + (this.props.class ? this.props.class : '') }
                { ...this.props }>

                <div class="mc-grid-inner">
                    { children }
                </div>

            </div>
        )
    }

}
