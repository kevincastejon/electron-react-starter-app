import { ipcRenderer } from 'electron';
import '../assets/css/App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hostname: '',
    };
  }

  componentDidMount() {
    // App system menu callbacks
    ipcRenderer.on('open', () => {
      console.log('open from menu');
    });
    // Main processes callbacks
    ipcRenderer.on('onHostname', (e, hostname) => {
      this.setState({ hostname });
    });
    ipcRenderer.send('getHostname');
  }

  render() {
    const {
      hostname,
    } = this.state;
    return (
      <div style={{ textAlign: 'center' }}>
        {hostname.length ? `Hello ${hostname}` : 'Loading...'}
      </div>
    );
  }
}

export default App;
