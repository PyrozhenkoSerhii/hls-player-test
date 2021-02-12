import React from 'react';
import ReactDOM from 'react-dom';
import { HLSPlayerComponent } from './HLSPlayer';

const App = () => (
  <div>
    <HLSPlayerComponent url="https://rpc.codeda.com/hls/40075fa9-5be9-48a3-aa8e-218ed9c0cae7/master.m3u8" />
  </div>
)

ReactDOM.render(
  <div>
    <App /> 
  </div>,
  document.getElementById('root')
);

