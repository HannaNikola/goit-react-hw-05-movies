import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { fetchReview } from "components/Api";
import { TitleReview, LinkBack } from "./Review.styled"



export const Reviews = () => {
    const location = useLocation();
    console.log(location)
    const [review, setReview] = useState([]);
    // console.log(review);
    const params = useParams();



    useEffect(() => {
        if (!params.movieId) return;

        async function getReviewDeteils() {
            try {

                const reviewDeteils = await fetchReview(params.movieId);
                setReview(reviewDeteils.results);
                // console.log(reviewDeteils);

            } catch (error) {
                console.log('something wrong', error);
            }

        }
        getReviewDeteils();
        
    }, [params.movieId])

    return (
        <div> {review &&
            <>
            <LinkBack to={`/movies/${params.movieId}` ?? "/movies/"} state={{ from: location }}>Back to .. </LinkBack>
             <TitleReview >Review</TitleReview >
            <ul>
                {review.map((item) => (
                    <li key={item.id} >
                        <p>{item.author}</p>
                        <p>{item.content}</p>
                    </li>
                ))}
                </ul>
            </>
        }    </div>
    )
}