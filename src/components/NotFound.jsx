import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div>
            Sorry that page not found , try to home page <Link to='./'>Home</Link>
        </div>
    )
}