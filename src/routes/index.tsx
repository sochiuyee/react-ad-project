import React, { Component } from 'react';

// 将router组件包裹进withRouter里，可以获取history、location、match自动注入到props里
import { HashRouter as Router, withRouter } from 'react-router-dom';

import { renderRoutes } from 'react-router-config';

import LoginPage from '../pages/login/index';
import IndexPage from '../pages/index/index';
import App from '../App';

const allRoutes = [
    {
        path: '/index',
        exact: false,
        title: '',
        component: IndexPage,
    },
    {
        path: '/login',
        exact: false,
        title: '',
        component: LoginPage,
    },
];

const AppWrap = withRouter(App);

class AppRoute extends Component {
    render() {
        return (
            <div>
                <Router>
                    <AppWrap>
                        {
                            renderRoutes(allRoutes.map((item) => ({ ...item, key: item.path })))
                        }
                    </AppWrap>
                </Router>
            </div>
        );
    }
}

export default AppRoute;
