import { useState } from "react";

const CommentsPage = () => {
  const [comments, setComments] = useState([]);
  const [inputComment, setInputComment] = useState("");

  const fetchComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setComments(data);
  };

  const handleChange = (event) => {
    setInputComment(event.target.value);
  };

  const addComment = async () => {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ inputComment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <input type="text" onChange={handleChange} value={inputComment} />
      <button onClick={addComment}>Add comment</button>
      <br />
      <br />
      <button onClick={fetchComments}>Load comments</button>
      {comments.map((comment) => {
        return (
          <ul key={comment.id}>
            <li>
              {comment.id} {comment.text}
            </li>
          </ul>
        );
      })}
    </>
  );
};

export default CommentsPage;
