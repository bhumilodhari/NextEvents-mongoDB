import { useEffect, useState } from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';

function Comments(props) {
  const { eventId } = props;
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    if (!showComments) {
      fetch('/api/comments/' + eventId)
        .then(response => response.json())
        .then((data) => {
          console.log(data)
          setComments(data.comments);
        })
    }
  }, [showComments]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {
    fetch('/api/comments/' + eventId, {
      method: 'POST',
      body: JSON.stringify(commentData),
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
    // send data to API
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList items={comments} />}
    </section>
  );
}

export default Comments;
