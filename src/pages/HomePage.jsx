import Header from "../cmps/Header"

import FeedbackList from "../cmps/FeedbackList"
import FeedbackStats from '../cmps/FeedbackStats'
import FeedbackForm from '../cmps/FeedbackForm'
import AboutIconLink from '../cmps/AboutIconLink'

function HomePage() {
    
    return (
        <div>
            <Header/>
            <div className="container">
                <FeedbackForm/>
                <FeedbackStats/>
                <FeedbackList/>
            </div>
            <AboutIconLink/>
        </div>
    )
}

export default HomePage
