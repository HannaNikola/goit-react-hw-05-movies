import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchReview } from "components/Api"; 



export const Reviews = () => {

    const [review, setReview] = useState(null);
    const params = useParams();
    console.log(params);


    useEffect(() => {
        if (!params.movieId) return;
   
        async function getReviewDeteils() {
            try { 
               
                const reviewDeteils = await fetchReview(params.movieId);
                setReview(reviewDeteils);
            } catch (error) {
                console.log('something wrong', error);
          }

        }
        getReviewDeteils();
    }, [params.movieId])
    
return (
    <div>
        <Link >
        <h1>Review</h1>
        </Link>
        <p>{review}</p>
        </div>
    )
}