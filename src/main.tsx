import {StrictMode} from 'react'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import GlobalStyles from './styles/GlobalStyles'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <GlobalStyles $darkMode={true} />
      <App />
    </BrowserRouter>
  </StrictMode>
)
