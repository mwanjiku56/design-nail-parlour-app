import React from "react";
import './Review.css'

function Review() {
  return (
    <div className="review-form">
      <h1>Leave Us A Review</h1>
      <form>
        <label htmlFor="name"></label>
        <input type="text" name="review" placeholder="review" />
        
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default Review;
