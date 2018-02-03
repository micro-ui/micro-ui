import * as infernoStuff from 'inferno'
import Component from 'inferno-component'
import { onScrollTo, delay, debug } from '../../micro-ui-shared/utilities'
import './micro-ui-image.scss'

const SCROLL_THRESHOLD = 200
const IMAGE_LOAD_DELAY = 100

export class MCImage extends Component {

    componentDidMount() {
        this.handleMissingDimensions()

        delay(IMAGE_LOAD_DELAY)
            .then(() => onScrollTo(this._vNode.dom, SCROLL_THRESHOLD))
            .then(() => this.loadImage(this.props.src))
            .then(() => this.setState(() => this.props.loadedImage = this.props.src))
    }

    render() {
        return (
            <img
                className={ 'mc-image ' + (this.props.class ? this.props.class : '') + (this.props.loadedImage ? ' loaded' : '') }
                src={ this.props.loadedImage }
                width={ this.props.width }
                height={ this.props.height } />
        )
    }

    loadImage(src) {
        return new Promise(resolve => {
            let image = new Image()
            image.onload = resolve
            image.src = src
        })
    }

    handleMissingDimensions() {
        if (!this.props.width || !this.props.height) {
            debug.warn(`If possible, add a width/height attribute to the image: ${this.props.src}.`)
            debug.warn('This provides a better user experience as it stops content from moving around as images load in.')
        }
    }

}
