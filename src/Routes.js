import React from 'react'
import { Switch, Route } from 'react-router-dom';
import {
  Articles,
  Article,
  PageNotFound
} from './Pages/';


const routes = [
  {
    path: '/',
    exact: true,
    component: Articles,
  },
  {
    path: '/articles/:title',
    exact: true,
    component: Article,
  },
  {
    path: '*',
    component: PageNotFound,
  }
];


export default function RouteHandler() {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route 
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  )
}
