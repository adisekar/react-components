import Comment from "./Comment";

export default function CommentList({ comments }) {
  return comments.map((comment) => {
    return <Comment comment={comment} key={comment.id} />;
  });
}
