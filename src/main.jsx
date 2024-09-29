import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import MovieProvider from './providers/MovieProvider.jsx';
import App from './components/App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<MovieProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</MovieProvider>
	</StrictMode>
);
