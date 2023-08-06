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
            <Route path='/' element={<Home />} />
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
            <Route path="/silver" element={<Silver />} />
            <Route path="/gold" element={<Gold />} />
          </Routes>
        </div>
    )
}