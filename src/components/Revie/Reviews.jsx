import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchReview } from "components/Api";



export const Reviews = () => {

    const [review, setReview] = useState([]);
    console.log(review);
    const params = useParams();



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
        <div> {review &&
            <>
                <Link >
                <h1>Review</h1>
                </Link>
            <ul>
                {review.map((item) => (
                    <li key={item.id}>
                        <p>{item.results.author_details.username}</p>
                        <p>{item.results.content}</p>
                    </li>
                ))}
                </ul>
            </>
        }    </div>
    )
}