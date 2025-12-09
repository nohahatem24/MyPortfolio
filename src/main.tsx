import { createRoot } from 'react-dom/client';
import './shadcn.css';
import App from './App';
import { measureImageLoadTime, reportWebVitals } from './lib/performance';

// Performance monitoring (dev only)
if (process.env.NODE_ENV === 'development') {
  measureImageLoadTime();
  reportWebVitals();
}

const root = createRoot(document.getElementById('app')!);
root.render(<App />);
