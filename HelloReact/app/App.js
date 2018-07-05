import React, { Component } from 'react';
import {Button}  from 'antd';
import {render} from 'react-dom';

class App extends Component {
  render(){
    return (
        <div>
            <h1>Hello World</h1>
            <Button type="primary">Primary</Button>
            <Button>Default</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="danger">Danger</Button>
        </div>

    );
  }
}

render(<App />, document.getElementById('root'));
