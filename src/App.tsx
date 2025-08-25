import { HashRouter, Route, Routes } from 'react-router'
import HomePage from './pages/Home'
import { ThemeProvider } from './hooks/useTheme'

export default function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  )
}
