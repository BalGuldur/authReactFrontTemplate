import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Users from './containers/Users';
import Home from './components/Home';

export default (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route path="/users" component={Users} />
	</Switch>
);
