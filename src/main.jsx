import { createRoot } from 'react-dom/client';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import 'modern-normalize';
import './index.css';
import { App } from './App';

const isDevMode = import.meta.env.DEV;

if (!isDevMode) disableReactDevTools();

createRoot(document.getElementById('root')).render(<App />);
