/** @format */

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { connect } from "react-redux";

const FrontPosts = ({
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
  addLike,
  removeLike,
  deletePost,
  showActions,
}) => (
  <div class='post bg-white p-1 my-1'>
    <div>
      <Link to={`/profile/${user}`}>
        <img class='round-img' src={avatar} alt='' />
        <h4>{name}</h4>
      </Link>
    </div>
    <div>
      <p class='my-1'>{text}</p>
      <p class='post-date'>
        Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
      </p>

      <button type='button' class='btn btn-light'>
        <i class='fas fa-thumbs-up' />{" "}
        <span> {likes.length > 0 && <span>{likes.length}</span>}</span>
      </button>
      <button type='button' class='btn btn-light'>
        <i class='fas fa-thumbs-down' />
      </button>
      <Link to={`/posts/${_id}`} className='btn btn-primary'>
        Discussion
        {comments.length > 0 && (
          <span className='comment-count'>{comments.length}</span>
        )}
      </Link>
    </div>
  </div>
);

FrontPosts.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(FrontPosts);
