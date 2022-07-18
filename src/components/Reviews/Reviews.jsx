import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../Services/Services';

function Reviews() {
  const [reviews, setReviews] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    getMovieReviews(id).then(res => setReviews([...res]));
  }, [id]);

  return (
    <>
      {reviews === null ? (
        ''
      ) : (
        <ul>
          {reviews.map(item => {
            return (
              <li key={item.id}>
                <h2>AUTHOR: {item.author}</h2>
                <p>{item.content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
export default Reviews;
