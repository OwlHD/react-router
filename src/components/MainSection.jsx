import { Route, Routes } from 'react-router-dom'
import Blue from './Blue'
import Red from './Red'
import Silver from './Silver'
import Gold from './Gold'
import Home from './Home'

export default function MainSection() {
    return (
        <div id="main-section">
          <Routes>
            <Route path='/react-router' element={<Home />} />
            <Route path="/react-router/blue" element={<Blue />} />
            <Route path="/react-router/red" element={<Red />} />
            <Route path="/react-router/silver" element={<Silver />} />
            <Route path="/react-router/gold" element={<Gold />} />
          </Routes>
        </div>
    )
}