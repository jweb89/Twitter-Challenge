import React from 'react';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo('en-US');

const Tweet = ({ date, text, hashtags, profileImage, name }) => (
  <div className="card border-light mb-3" data-cy="tweet">
    <div className="card-header">
      <img src={profileImage} alt="profile" className="rounded-circle" />
      <div className=" ">
        {' '}
        <h3 className="">{name}</h3>
      </div>
    </div>
    <div className="card-body">
      {/* <h5 className="card-title">Light card title</h5> */}
      <p className="card-text">{text}</p>
      {hashtags
        ? hashtags.map((hashtag) => (
            <a className="link" key={hashtag.text}>
              #{hashtag.text}{' '}
            </a>
          ))
        : null}
      <p className="card-text">
        <small className="text-muted">{timeAgo.format(Date.parse(date))}</small>
      </p>
    </div>
  </div>
);

export default Tweet;
