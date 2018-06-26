import React from 'react';
import { render } from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

render(<App cat={5} txt="this is the prop value"/>, document.getElementById('root'));
registerServiceWorker();
