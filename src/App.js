import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'

import {FeedbackProvider} from './context/FeedbackContext'

function App() {

    return (
        <FeedbackProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<HomePage/>} />
                    <Route path="/about" element={<AboutPage/>} />
                </Routes>
            </BrowserRouter>
        </FeedbackProvider>
    )
}

export default App