import {motion, AnimatePresence} from 'framer-motion'
import FeedbackItem from './FeedbackItem'

import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList() {

    const {feedback} = useContext(FeedbackContext)


    if(!feedback || feedback.lenght === 0) {
        return <p>No feedback.</p>
    }


    return (
        <div className="feedback-list">
            <AnimatePresence>
            {feedback.map( (item) => (
                <motion.div key={item.id} initial={{opacity: 1}} animtate={{opacity: 0}} exit={{opacity: 0}}>
                    <FeedbackItem key={item.id} item={item}/>
                </motion.div>
            ))}
            </AnimatePresence>
        </div>
    )
}

export default FeedbackList
