
import { useParams } from "react-router-dom";

export const MovieDetails = () => {
    const params = useParams();
    console.log(params);
    return (
        <div>MovieDetails</div>
       
    )
}