import { useEffect, useState } from "react";
import ListTweets from "Components/ListTweets";
import { v4 as uuidv4 } from "uuid";
import { getLocalNames } from "./ProfileView";

// const names = getLocalNames();

export const HomeView = () => {
  const [isLoading, setIsloading] = useState(false);

  const [tweets, setTweet] = useState([
    {
      id: uuidv4(),
      name: "yonatan",
      date: "2019-12-15T14:40:58.340Z",
      text: "On the technical side, Microsoft says the Xbox Series X can handle 4K visuals at 60 frames per second, and potentially up to 120FPS.",
    },
    {
      id: uuidv4(),
      name: "yonatan",
      date: "2019-12-15T14:40:11.083Z",
      text: "hello there",
    },
    {
      id: uuidv4(),
      name: "yonatan",
      date: "2019-12-15T14:40:58.340Z",
      text: "another tweet text",
    },
  ]);

  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://644fe918b61a9f0c4d2ea1c6.mockapi.io/Tweets`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        setTweet([...data.reverse(), ...tweets]);
      });
  }, []);

  const addTweet = (text) => {
    setIsloading(true);
    const date = new Date();
    const newTweet = {
      id: uuidv4(),
      name: "yonatan",
      date: date.toJSON(),
      text: text,
    };
    fetch(`https://644fe918b61a9f0c4d2ea1c6.mockapi.io/Tweets`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newTweet),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
        const newTweets = [data, ...tweets];
        setTweet(newTweets);
        setIsloading(false);
      })
      .catch((error) => {
        console.log("error:", error.message);
        setError(error.message);
        setIsloading(false);
      });
  };

  return (
    <div className="containerTweets">
      <ListTweets
        tweets={tweets}
        handleAddTweet={addTweet}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
};
