import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps {}

class App extends Component<Props> {
    // 判断路径自动去首页
    handleRoute = () => {
        // App 通过withRouter包裹后，可以通过props获取到路由信息：history、location、match
        const { history, location } = this.props;
        const { pathname } = location;
        if (pathname === '/') {
            history.push('index');
            return false;
        }
        return true;
    }

    render() {
        const { children } = this.props;
        return (
            <div>
                {
                    this.handleRoute() ? children : 'other'
                }
            </div>
        );
    }
}

export default App;
