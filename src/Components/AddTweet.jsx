import { useState } from "react";
import { Button } from "UIKit";

const AddTweet = ({ handleAddTweet, isLoading }) => {
  const [tweetText, setTweetText] = useState("");

  const handleChange = (e) => {
    setTweetText(e.target.value);
  };
  const handleTweetClick = () => {
    if (tweetText.trim().length > 0 && !isLoading) {
      handleAddTweet(tweetText);
      setTweetText("");
    }
  };

  const isDisabled = tweetText.length > 140 || isLoading;

  return (
    <div className="tweet new">
      <textarea
        rows="6"
        cols="6"
        value={tweetText}
        placeholder="What you have in mind..."
        onChange={handleChange}
      ></textarea>
      <div className="tweetFooter">
        <div className="errMessageChars">
          {tweetText.length > 140
            ? "The tweet can't contain more then 140 chars."
            : null}
        </div>
        <div>
          <Button onClick={handleTweetClick} disabled={isDisabled}>
            Tweet
          </Button>
        </div>
      </div>
    </div>
  );
};
export default AddTweet;
