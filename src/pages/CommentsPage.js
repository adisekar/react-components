import CommentList from "../components/comments/CommentList";

const comments = [
  {
    id: 1,
    avatar: "AS",
    user: "adisekar",
    time: "11 hours ago",
    comment:
      "Everyone that lives in Ontario are the same people that try and put square peg into a round one.",
    likes: 148,
    dislikes: 4,
    comments: [
      {
        id: 10,
        avatar: "AS",
        user: "adisekar",
        time: "11 hours ago",
        comment:
          "Everyone that lives in Ontario are the same people that try and put square peg into a round one.",
        likes: 148,
        dislikes: 4,
      },
    ],
  },
  {
    id: 2,
    avatar: "AJ",
    user: "anjali",
    time: "11 hours ago",
    comment:
      "Everyone that lives in Ontario are the same people that try and put square peg into a round one.",
    likes: 100,
    dislikes: 4,
  },
];

export default function CommentPage() {
  return <CommentList comments={comments} />;
}
