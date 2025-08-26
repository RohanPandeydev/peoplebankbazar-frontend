import { createRoot } from 'react-dom/client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/styles/global.css"
import "./assets/styles/scrollbar.css"
import "./assets/styles/animations.css"
import App from './App.jsx'
import { ContextWrapper } from './contexts/Context.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ContextWrapper>
      <App />
    </ContextWrapper>
  </BrowserRouter>,
)
