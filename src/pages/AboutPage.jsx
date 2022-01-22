import Header from "../cmps/Header"
import Card from "../cmps/shared/Card"
import AboutIconLink from '../cmps/AboutIconLink'
import { Link } from "react-router-dom"

export default function AboutPage() {
    return (
        <div>
            <Header/>
            <div className="container">
                <Card>
                    <div className="about">
                        <h1>About This Project</h1>
                        <p>This is a React app to leave feedback for a product or service.</p>
                        <p>Version: 1.0.1</p>

                        <p>
                            <Link to="/">Back To Home</Link>
                        </p>
                    </div>
                </Card>
                
            </div>
            <AboutIconLink/>
        </div>
    )
}
