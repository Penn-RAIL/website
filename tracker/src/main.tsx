import React from 'react';
import {createRoot} from 'react-dom/client';
import Tracker from './tracker';
import './style.css';
createRoot(document.getElementById('root')!).render(<Tracker/>);
