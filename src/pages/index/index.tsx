import React, { Component } from 'react';
import utilsIndex from '@utils/index';

class IndexPage extends Component {
    componentDidMount() {
        const id = utilsIndex.getUrlParam('id');
        console.log('id---', id);
    }

    render() {
        return (
            <div>
                hello pages index
            </div>
        );
    }
}

export default IndexPage;
