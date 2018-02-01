import Component from 'inferno-component'

export class MCTextArea extends Component {

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
        this.positionBorder()
        setTimeout(this.positionBorder.bind(this), 50)
    }

    handleChange(event) {
        this.setState({ value: event.target.value })
        this.props.onChange && this.props.onChange(this.state.value)
    }

    handleFocus(event) {
        this.positionBorder()
        event.target.parentElement.classList.add('mc-focus')
    }

    handleBlur(event) {
        event.target.parentElement.classList.remove('mc-focus')
    }

    positionBorder() {
        let textAreaEl = this._vNode.dom.querySelector('textarea')
        let rect = textAreaEl.getBoundingClientRect()
        let border = textAreaEl.nextSibling

        border.style.left = `${textAreaEl.offsetLeft}px`
        border.style.top = `${textAreaEl.offsetTop}px`
        border.style.width = `${rect.width}px`
        border.style.height = `${rect.height}px`
    }

    render({ children }) {
        return (
            <div
                className={ 'mc-form-input ' + (this.props.class ? this.props.class : '') }
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

                <textarea
                    id={ this.props.name }
                    name={ this.props.name }
                    onInput={ this.handleChange }
                    onFocus={ this.handleFocus }
                    onBlur={ this.handleBlur }
                    aria-label={ this.props.label }
                    { ...this.props }
                >
                    { children }
                </textarea>

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
