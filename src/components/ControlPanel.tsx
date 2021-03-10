import React from 'react';
import { PanelProps } from '../types';

const ControlPanel: React.FC<PanelProps> = (
  { started, toggle, reset, setHeight, setWidth, width, height }) => (<div>
  <span>width</span>
  <input
    type="digit"
    min="5"
    max="1000"
    value={width}
    onChange={e => setWidth(e.target.value)}
  />
  <span>height</span>
  <input
    type="digit"
    min="5"
    max="1000"
    value={height}
    onChange={e => setHeight(e.target.value)}
  />

  <button className="btn" onClick={reset}>
    reset
  </button>
  <button className="btn" onClick={toggle}>
    {started ? 'stop' : 'start️'}
  </button>
</div>)

export default ControlPanel;