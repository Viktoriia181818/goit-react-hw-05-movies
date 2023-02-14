import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesReviews } from 'services/Services';

const Reviews = () => {
    const { movieId } = useParams();

    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const result = await fetchMoviesReviews(movieId);
                setReviews(result);
            } catch(error) {
                setError(error);
            }
        }
        fetchReviews()
    }, [movieId]);

    return (
        <>
        {error && <div>error</div>}
        <ul>
       {reviews.map(review => {
          return (
            <li key={review.id}>
              <p>Author: {review.author}</p>
              <p>{review.content}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Reviews;
