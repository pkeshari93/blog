import React from 'react'
import { IndexRoute, Router, Route, browserHistory} from 'react-router'
import Home from './components/Home'
import App from './components/App'

export default(

	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home}/>
		</Route>
	</Router>
)

