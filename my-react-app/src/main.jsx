import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import TimerComponent from './Component/Timer.jsx'
import ShowTimer from './Component/ShowTimer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TimerComponent />
    <ShowTimer />
  </StrictMode>,
)
