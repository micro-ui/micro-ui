import Component from 'inferno-component'
import './micro-ui-toolbar.scss'

export class MCToolbarSection extends Component {

    render({ children }) {
        return (
            <section
                className={ 'mc-toolbar-section mdc-toolbar__section ' + (this.props.class ? this.props.class : '') }
                { ...this.props }>

                { children }

            </section>
        )
    }

}
