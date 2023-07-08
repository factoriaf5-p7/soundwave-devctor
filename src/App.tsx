import { BrowserRouter } from 'react-router-dom'
import Router from './router/router'

function App (): JSX.Element {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default App
