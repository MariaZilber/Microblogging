const Tweet = ({ id, name, date, text }) => {
  return (
    <div className="tweet">
      <div className="upperTweet">
        <div>{name}</div>
        <div>{date}</div>
      </div>
      <br />
      <div>
        <span>{text}</span>
      </div>
    </div>
  );
};
export default Tweet;
