import {render} from 'inferno'
import { Router, Link, Route, IndexRoute } from 'inferno-router'
import createBrowserHistory from 'history/createBrowserHistory'
import Alerts from './Alerts'
import Badges from './Badges'
import Buttons from './Buttons'
import Form from './Form'
import Grid from './Grid'
import Icons from './Icons'
import Images from './Images'
import { MCToolbar, MCToolbarRow, MCToolbarSection } from '../../packages/micro-ui-toolbar/dist/'
import './index.scss'

const browserHistory = createBrowserHistory()

function App({ children }) {
    return (
        <div>
            <MCToolbar>
                <MCToolbarRow>
                    <MCToolbarSection align-left class="ph4">
                        <span class="title">Micro UI</span>
                    </MCToolbarSection>
                </MCToolbarRow>
            </MCToolbar>

            <div class="pa4">
                { children }
            </div>
        </div>
    )
}

function ComponentList() {
    return (
        <div>
            <h3>Micro UI Components:</h3>

            <p><Link to="/alerts">Alerts</Link></p>
            <p><Link to="/badges">Badges</Link></p>
            <p><Link to="/buttons">Buttons</Link></p>
            <p><Link to="/form">Form</Link></p>
            <p><Link to="/grid">Grid</Link></p>
            <p><Link to="/icons">Icons</Link></p>
            <p><Link to="/images">Images</Link></p>
        </div>
    )
}

const routes = (
	<Router history={ browserHistory }>
		<Route component={ App }>
			<IndexRoute component={ ComponentList } />
            <Route path="/alerts" component={ Alerts } />
            <Route path="/badges" component={ Badges } />
            <Route path="/buttons" component={ Buttons } />
            <Route path="/form" component={ Form } />
            <Route path="/grid" component={ Grid } />
            <Route path="/icons" component={ Icons } />
            <Route path="/images" component={ Images } />
			<Route path="*" component={ ComponentList } />
		</Route>
	</Router>
)

render(routes, document.getElementById('app'))
