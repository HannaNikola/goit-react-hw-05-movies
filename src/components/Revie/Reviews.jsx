import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetcReview } from "components/Api"; 



export const Reviews = () => {

    const [review, setReview] = useState('');
    const params = useParams();


    useEffect(() => {
   
        async function getReviewDeteils() {
            try { 
                const reviewDeteils = await fetcReview(params.movieId);
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
        {/* <p>{review}</p> */}
        </div>
    )
}