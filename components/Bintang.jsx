import React, { useState } from 'react';
import StarRateIcon from '@mui/icons-material/StarRate';

const Bintang = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        // console.log(ratingValue);

        return (
          <div>
            <label>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                className="hidden"
                onClick={() => setRating(ratingValue)}
              />

              <StarRateIcon
                color={ratingValue <= (hover || rating) ? 'warning' : ''}
                key={i}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          </div>
        );
      })}
      <p>
        {rating && (
          <div className="flex items-center space-x-1">
            ({rating}
            <StarRateIcon color="warning" />)
          </div>
        )}
      </p>
    </div>
  );
};

export default Bintang;
