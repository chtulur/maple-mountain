import {StrictMode} from 'react'
import {BrowserRouter} from 'react-router-dom'
import {StyledApp} from './styles/App-styled'
import GlobalStyles from './styles/GlobalStyles'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <GlobalStyles $darkMode={true} />
      <StyledApp />
    </BrowserRouter>
  </StrictMode>
)
