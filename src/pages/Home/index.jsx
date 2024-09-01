import "./styles.css"

import Header from "../../components/Header"
import Card from "../../components/Card"
import Footer from "../../components/Footer"

export default function Home() {
    return (
        <div className="container-home">
            <Header />
            
            <div className="container-cards">
                <Card />
                <Card />
            </div>
            
            <Footer />
        </div>
    )
}