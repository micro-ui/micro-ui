import Component from 'inferno-component'

export class MCToolbar extends Component {

    render({ children }) {
        return (
            <header
                className={ 'mc-toolbar mdc-toolbar ' + (this.props.class ? this.props.class : '') }
                { ...this.props }>

                { children }

            </header>
        )
    }

}
