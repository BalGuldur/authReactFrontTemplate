import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FilterableTable from './containers/FilterableTable';
import Users from './containers/Users';
import About from './components/About';

export default (
	<Switch>
		<Route exact path="/" component={FilterableTable} />
		<Route path="/about" component={About} />
		<Route path="/test" component={FilterableTable} />
		<Route path="/users" component={Users} />
	</Switch>
);
