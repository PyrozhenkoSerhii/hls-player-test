import React from 'react';
import ReactDOM from 'react-dom';
import { HLSPlayerComponent } from './HLSPlayer';

const App = () => (
  <div>
    <HLSPlayerComponent url="https://cdn.codeda.com/hls/552b0f62-c7c6-4e16-868a-f2f7a4048b32/master.m3u8" />
  </div>
)

ReactDOM.render(
  <div>
    <App /> 
  </div>,
  document.getElementById('root')
);

