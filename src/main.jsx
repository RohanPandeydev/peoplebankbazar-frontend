import { createRoot } from 'react-dom/client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/styles/global.css"
import "./assets/styles/scrollbar.css"
import "./assets/styles/animations.css"
import "./index.css"
import App from './App.jsx'
import { ContextWrapper } from './contexts/Context.jsx';
import { AlertProvider } from './components/ui/AlertModal.jsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AlertProvider>
      <ContextWrapper>
        <App />
      </ContextWrapper>
    </AlertProvider>
  </BrowserRouter>,
)
