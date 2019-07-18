import React, {Component} from 'react';

import Header from './components/Header.js';

import './App.css';

class App extends React.Component {
    componentDidMount() {
    console.log('Component DID MOUNT');
    }

    render() {
    const name = "chanhyuk";
    const foo = "foo";

        return (
        <div className="App">
              <Header name = {name}/>
        </div>
        );
    }

}

export default App;

/*ES6 이전버전
function App() {
  return (

  );
}
*/

