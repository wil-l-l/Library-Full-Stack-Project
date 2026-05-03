import { useContext, useRef, useState } from "react";
import { UserContext } from "../../../contexts/UserContext";
import "./RatingBox.css";
import { useNavigate } from "react-router";

const RatingBox = ({ id }) => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const ratingRef = useRef(null);

  const [ratingResponse, setRatingResponse] = useState(null);

  return (
    <form
      action=""
      className="book-page__rating-form"
      onClick={() => user === null && navigate("/login")}
      onSubmit={async (e) => {
        e.preventDefault();

        let response = await fetch(`/api/user/rate/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: user._id,
            rating: Number(ratingRef.current.value),
          }),
        });

        response = await response.json();
        setRatingResponse(response);
      }}
    >
      <p>How would you rate this book?</p>
      <input
        type="number"
        step={0.5}
        min={0}
        max={5}
        ref={ratingRef}
        className="book-page__rating-input"
      />
      {ratingResponse && ratingResponse.success && (
        <p>Response submitted, thank you!</p>
      )}
    </form>
  );
};

export default RatingBox;
