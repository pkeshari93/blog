import React from 'react'
import { IndexRoute, Router, Route, hashHistory} from 'react-router'
import About from './components/About'
import App from './components/App'
import Blog from './components/Blog'
import BlogPost from './components/BlogPost'




export default(

	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Blog}/>
			<Route path={"blog"} component={Blog}/>
			<Route path={"/post/:id"} component={BlogPost}/>
			<Route path={"about"} component={About}/>
		</Route>
	</Router>
)

