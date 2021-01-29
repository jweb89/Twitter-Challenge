import axios from 'axios';

const fetchTweets = async (isActive, counter, tweets) => {
  try {
    let suffix = '';
    let newTweets = [];

    if (counter && tweets.length) {
      suffix = `?max_id=${tweets[tweets.length - 1].id}`;
    }
    const res = await axios.get(`http://localhost:3000/${isActive}/${suffix}`);

    if (suffix) {
      newTweets = res.data;
      newTweets.shift();
    } else {
      newTweets = res.data;
    }

    return newTweets;
  } catch (err) {
    console.log(err);
  }
};

export { fetchTweets };
