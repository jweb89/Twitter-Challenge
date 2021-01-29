import React, { useState, useEffect, useRef } from 'react';
import Tweet from './Tweet';
import { fetchTweets } from '../apiService';

const TweetList = ({ isActive }) => {
  const [tweets, setTweets] = useState([]);
  const [counter, setCounter] = useState(0);
  const loader = useRef(null);

  const callFetchTweets = async () => {
    const newTweets = await fetchTweets(isActive, counter, tweets);
    setTweets(tweets.concat(newTweets));
  };

  useEffect(() => {
    if (counter && isActive) callFetchTweets();
  }, [counter]);

  useEffect(() => {
    setTweets([]);
    setCounter(0);
    if (isActive && tweets.length === 0) {
      callFetchTweets();
    }
  }, [isActive]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '500px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current);
    }
  }, []);

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setCounter((num) => num + 1);
    }
  };

  return (
    <>
      {tweets
        ? tweets.map((item) => (
            <Tweet
              date={item.created_at}
              text={item.full_text}
              hashtags={item.entities.hashtags}
              key={item.id}
              profileImage={item.user.profile_image_url}
              name={item.user.screen_name}
            />
          ))
        : null}
      <div ref={loader} />
    </>
  );
};

export default TweetList;

// Copy of tweets object used for reference
// {
//     "created_at": "Sat Jan 23 22:33:03 +0000 2021",
//     "id": 1353108511610204200,
//     "id_str": "1353108511610204160",
//     "full_text": "@teslascope We’re switching to a more sensible FSD version numbering to distinguish between major &amp; minor updates. Current build is FSD 8.1. It drove me to an unfamiliar location in LA &amp; back last night with no interventions!",
//     "truncated": false,
//     "display_text_range": [
//       12,
//       233
//     ],
//     "entities": {
//       "hashtags": [],
//       "symbols": [],
//       "user_mentions": [
//         {
//           "screen_name": "teslascope",
//           "name": "Teslascope",
//           "id": 1115375020782436400,
//           "id_str": "1115375020782436353",
//           "indices": [
//             0,
//             11
//           ]
//         }
//       ],
//       "urls": []
//     },
//     "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
//     "in_reply_to_status_id": 1353030988025090000,
//     "in_reply_to_status_id_str": "1353030988025090048",
//     "in_reply_to_user_id": 1115375020782436400,
//     "in_reply_to_user_id_str": "1115375020782436353",
//     "in_reply_to_screen_name": "teslascope",
//     "user": {
//       "id": 44196397,
//       "id_str": "44196397",
//       "name": "Elon Musk",
//       "screen_name": "elonmusk",
//       "location": "",
//       "description": "",
//       "url": null,
//       "entities": {
//         "description": {
//           "urls": []
//         }
//       },
//       "protected": false,
//       "followers_count": 42864667,
//       "friends_count": 105,
//       "listed_count": 59450,
//       "created_at": "Tue Jun 02 20:12:29 +0000 2009",
//       "favourites_count": 7886,
//       "utc_offset": null,
//       "time_zone": null,
//       "geo_enabled": false,
//       "verified": true,
//       "statuses_count": 13375,
//       "lang": null,
//       "contributors_enabled": false,
//       "is_translator": false,
//       "is_translation_enabled": false,
//       "profile_background_color": "C0DEED",
//       "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
//       "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
//       "profile_background_tile": false,
//       "profile_image_url": "http://pbs.twimg.com/profile_images/1295975423654977537/dHw9JcrK_normal.jpg",
//       "profile_image_url_https": "https://pbs.twimg.com/profile_images/1295975423654977537/dHw9JcrK_normal.jpg",
//       "profile_banner_url": "https://pbs.twimg.com/profile_banners/44196397/1576183471",
//       "profile_link_color": "0084B4",
//       "profile_sidebar_border_color": "C0DEED",
//       "profile_sidebar_fill_color": "DDEEF6",
//       "profile_text_color": "333333",
//       "profile_use_background_image": true,
//       "has_extended_profile": true,
//       "default_profile": false,
//       "default_profile_image": false,
//       "following": null,
//       "follow_request_sent": null,
//       "notifications": null,
//       "translator_type": "none"
//     },
//     "geo": null,
//     "coordinates": null,
//     "place": null,
//     "contributors": null,
//     "is_quote_status": false,
//     "retweet_count": 112,
//     "favorite_count": 1359,
//     "favorited": false,
//     "retweeted": false,
//     "lang": "en"
//   },
