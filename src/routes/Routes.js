import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from '../view/home/Home'
import RoutingPath from './RoutingPath'

export const Routes = ({ children }) => {


	return (
		<BrowserRouter>
			{children}
			<Switch>
				<Route exact path={RoutingPath.Home} component={Home} />
			</Switch>
		</BrowserRouter>
	)
}
