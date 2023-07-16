import { useState } from "react";
import classes from "./comment.module.css";
import CommentList from "./CommentList";
import Reply from "./Reply";

export default function Comment({ comment }) {
  const [showNestedComments, setShowNestedComments] = useState(false);
  const [likes, setLikes] = useState(comment.likes);
  const [dislikes, setDislikes] = useState(comment.dislikes);
  const [hoverLike, setHoverLike] = useState(false);
  const [hoverDislike, setHoverDislike] = useState(false);
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [nestedComments, setNestedComments] = useState(comment.comments || []);

  const newReplyHandler = (message) => {
    const newComment = {
      id: 1000,
      avatar: comment.avatar,
      user: comment.user,
      time: "10 seconds ago",
      comment: message,
      likes: 0,
      dislikes: 0,
    };

    setNestedComments([...nestedComments, newComment]);
  };

  console.log(nestedComments);
  return (
    <div key={comment.id} className={classes.sectionContainer}>
      <div className={classes.avatar}>{comment.avatar}</div>
      <div className={classes.commentContainer}>
        <div className={classes.usernameContainer}>
          <div className="username">@{comment.user}</div>
          <div className="timestamp">{comment.time}</div>
        </div>
        <div className="comment">{comment.comment}</div>
        <div className={classes.actionPanel}>
          <div className={classes.likesContainer}>
            <i
              className="fa fa-thumbs-up"
              aria-hidden="true"
              onClick={() => setLikes((prev) => prev + 1)}
              onMouseEnter={() => setHoverLike(true)}
              onMouseLeave={() => setHoverLike(false)}
            ></i>
            <span className="count">{likes}</span>
            {hoverLike && <div className={`${classes.likeItem} `}>Like</div>}
          </div>
          <div className={classes.likesContainer}>
            <i
              className="fa fa-thumbs-down"
              aria-hidden="true"
              onClick={() => setDislikes((prev) => prev + 1)}
              onMouseEnter={() => setHoverDislike(true)}
              onMouseLeave={() => setHoverDislike(false)}
            ></i>
            <span className="count">{dislikes}</span>
            {hoverDislike && (
              <div className={`${classes.likeItem} `}>Dislike</div>
            )}
          </div>
          <button
            className={classes.replyCta}
            onClick={() => setShowReplyInput(true)}
          >
            Reply
          </button>
        </div>

        {showReplyInput && (
          <Reply
            onSubmit={newReplyHandler}
            onCancel={() => setShowReplyInput(false)}
          />
        )}

        {nestedComments && nestedComments.length > 0 && (
          <div>
            <i
              className={`fa ${
                showNestedComments ? "fa-chevron-down" : "fa-chevron-up"
              } `}
            ></i>
            <button
              className={classes.repliesCta}
              onClick={() => setShowNestedComments((prev) => !prev)}
            >
              {nestedComments.length} replies
            </button>
            <div className={classes.repliesComments}>
              {nestedComments && showNestedComments && (
                <CommentList comments={nestedComments} />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
