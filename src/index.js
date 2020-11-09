import reactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app';

setTimeout(() => {
  reactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('root')
  );
}, 1000);
