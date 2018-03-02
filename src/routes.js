import React from 'react'
import { IndexRoute, Router, Route, browserHistory} from 'react-router'
import Home from './components/Home'
import App from './components/App'
import Blog from './components/Blog'
import BlogPost from './components/BlogPost'




export default(

	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home}/>
			<Route path={"home"} component={Home}/>
			<Route path={"/blog"} component={Blog}/>
			<Route path={"/post/:id"} component={BlogPost}/>
		</Route>
	</Router>
)

