import { v4 as uuidv4 } from 'uuid'
import { createContext, useState } from "react";

const FeedbackContext = createContext()

export const FeedbackProvider = ( {children} ) => {

    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This is feedback item 1',
            rating: 10
        },
        {
            id: 2,
            text: 'This is feedback item 2',
            rating: 7
        }
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })


    // Delete feedback
    const deleteFeedback = (id) => {
        setFeedback(feedback.filter( (item) => item.id !== id))
    }

    // Add feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    // Set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

     const stopEditFeedback = () => {
        setFeedbackEdit({
            item: {},
            edit: false
        })
    }

    // Update item
    const updateFeedback = (id, newItem) => {
        
        setFeedback(
            feedback.map((item) => item.id === id ? { ...item, ...newItem} : item)
        )
    }


    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
        stopEditFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext