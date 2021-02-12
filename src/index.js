import React from 'react';
import ReactDOM from 'react-dom';
import { HLSPlayerComponent } from './HLSPlayer';

const App = () => (
  <div>
    <HLSPlayerComponent url="https://rpc.codeda.com/hls/4d00fb26-866a-4e50-ac5a-07f76a27abe3/master.m3u8" />
  </div>
)

ReactDOM.render(
  <div>
    <App /> 
  </div>,
  document.getElementById('root')
);

