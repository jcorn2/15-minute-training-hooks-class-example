import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hideBox: false
    };
    this.hide = this.hide.bind(this);
  }
  
  hide() {
    this.setState((prevState) => ({ hideBox: !prevState.hideBox}));
  }
  
  componentDidMount() {
    alert(this.state.hideBox ? 'The box is hidden.' : 'The box is not hidden.');
  }
  
  componentDidUpdate() {
    alert(this.state.hideBox ? 'The box is hidden.' : 'The box is not hidden.');
  }
  
  render() {
    return (
      <div>
        <div style={{ height: '250px', width: '250px', backgroundColor: 'green'}} className={this.state.hideBox && 'hide'} />
        <button onClick={this.hide}>Hide</button>
      </div>
    );
  }
}

export default App;
