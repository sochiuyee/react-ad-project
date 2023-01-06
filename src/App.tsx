import React, { Component } from 'react';

interface Props {}

class App extends Component<Props> {
    render() {
        return (
            <div>
                Hello React
                <span style={{ color: 'red' }}>this is a box text</span>
            </div>
        );
    }
}

export default App;
