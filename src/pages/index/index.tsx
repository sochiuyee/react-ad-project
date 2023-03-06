import React, { Component } from 'react';
import utilsIndex from '@utils/index';

import Header from '@components/Header';

class IndexPage extends Component {
    componentDidMount() {
        const id = utilsIndex.getUrlParam('id');
        console.log('id---', id);
    }

    render() {
        return (
            <div>
                <Header />
            </div>
        );
    }
}

export default IndexPage;
