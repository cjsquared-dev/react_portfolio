import {Link} from "react-router-dom";
import Header from "../components/Header";


export default function HomePage() {
    return (
        <div>
            <Header />
            <h1>Home Page</h1>
            <p>Welcome to my portfolio</p>
            <p>Click on the links above to navigate</p>
        </div>
    )
}