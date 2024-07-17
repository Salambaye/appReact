
import ReactDOM from 'react-dom'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme.ts'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);