import Component from 'inferno-component'

export class MCSelect extends Component {

    state = {
        value: ''
    }

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleFocus = this.handleFocus.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
    }

    componentDidMount() {
        this.positionBorderAndOverlay()
        setTimeout(this.positionBorderAndOverlay.bind(this), 50)
    }

    handleChange(event) {
        console.log('changed ', event)

        this.setState({ value: event.target.value })
        this.props.onChange && this.props.onChange(this.state.value)
    }

    handleFocus(event) {
        this.positionBorderAndOverlay()
        event.target.parentElement.classList.add('mc-focus')
    }

    handleBlur(event) {
        event.target.parentElement.classList.remove('mc-focus')
    }

    positionBorderAndOverlay() {
        this.positionElementOnSelect(this._vNode.dom.querySelector('.mc-form-input-border'))
        this.positionElementOnSelect(this._vNode.dom.querySelector('.mc-form-select-overlay'))
    }

    positionElementOnSelect(el) {
        let selectEl = this._vNode.dom.querySelector('select')
        let rect = selectEl.getBoundingClientRect()

        el.style.left = `${selectEl.offsetLeft}px`
        el.style.top = `${selectEl.offsetTop}px`
        el.style.width = `${rect.width}px`
        el.style.height = `${rect.height}px`
    }

    render({ children }) {
        return (
            <div
                className={ 'mc-form-input mc-form-select ' + (this.props.class ? this.props.class : '') }
                { ...this.props }
            >
                {!this.props.hideLabel &&
                    <label for={ this.props.name }>
                        { this.props.label }

                        {this.props.labelCaption &&
                            <span>
                                { this.props.labelCaption }
                            </span>
                        }
                    </label>
                }

                <select
                    id={ this.props.name }
                    name={ this.props.name }
                    onChange={ this.handleChange }
                    onFocus={ this.handleFocus }
                    onBlur={ this.handleBlur }
                    aria-label={ this.props.label }
                >
                    { children }
                </select>

                <div class="mc-form-select-overlay"></div>
                <div class="mc-form-input-border"></div>

                {this.props.error &&
                    <div class="mc-form-error-message">
                        { this.props.error }
                    </div>
                }
            </div>
        )
    }

}
