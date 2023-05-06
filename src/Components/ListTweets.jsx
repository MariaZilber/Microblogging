import Tweet from "./Tweet";
import AddTweet from "./AddTweet";
import SpinnerSrc from "../Assets/spinner.svg";

const ListTweets = ({ tweets, handleAddTweet, isLoading }) => {
  const styleCss = {
    width: "48px",
  };
  return (
    <div className="tweetList">
      <AddTweet handleAddTweet={handleAddTweet} isLoading={isLoading} />
      {isLoading && (
        <div className="spinner">
          <img src={SpinnerSrc} alt="spinner" style={styleCss} />
        </div>
      )}
      {tweets.map((tweet) => (
        <Tweet
          key={tweet.id}
          id={tweet.id}
          name={tweet.name}
          date={tweet.date}
          text={tweet.text}
        />
      ))}
    </div>
  );
};
export default ListTweets;
