import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {

    const {feedback} = useContext(FeedbackContext)
    
    let reviews = Object.keys(feedback).length

    let average = feedback.reduce((acc, cur) => {
        return acc + cur.rating
    }, 0) / reviews
    average = average.toFixed(1).replace(/[.,]0$/, '')

    return (
        <div className="feedback-stats">
            <h4>{reviews} Reviews</h4>
            <h4>
                Average Rating: {isNaN(average) ? 0 : average}
            </h4>
        </div>
    )
}


export default FeedbackStats
