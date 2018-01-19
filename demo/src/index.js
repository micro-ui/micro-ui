import {render} from 'inferno'
import { Router, Link, Route, IndexRoute } from 'inferno-router'
import createBrowserHistory from 'history/createBrowserHistory'
import Alerts from './Alerts'
import Buttons from './Buttons'
import Icons from './Icons'
import './index.scss'

const browserHistory = createBrowserHistory()

function App({ children }) {
    return ( <div>{children}</div> )
}

function ComponentList() {
    return (
        <div>
            <h3>Micro UI Components:</h3>

            <p><Link to="/alerts">Alerts</Link></p>
            <p><Link to="/buttons">Buttons</Link></p>
            <p><Link to="/icons">Icons</Link></p>
        </div>
    )
}

const routes = (
	<Router history={ browserHistory }>
		<Route component={ App }>
			<IndexRoute component={ ComponentList } />
            <Route path="/alerts" component={ Alerts } />
            <Route path="/buttons" component={ Buttons } />
            <Route path="/icons" component={ Icons } />
			<Route path="*" component={ ComponentList } />
		</Route>
	</Router>
)

render(routes, document.getElementById('app'))
