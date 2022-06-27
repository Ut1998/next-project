import { useEffect, useState } from "react";

const CommentsPage = () => {
  const [comments, setComments] = useState([]);
  const [inputComment, setInputComment] = useState("");

  useEffect(() => {
    const fetchComments = async () => {
      const response = await fetch("/api/comments");
      const data = await response.json();
      setComments(data);
    };
    fetchComments();
  }, [comments]);

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
    console.log("new comment data", data);
    comments.push(data);
    console.log(comments);
    setComments(comments);
  };

  const deleteComment = async (commentId) => {
    const response = await fetch(`/api/comments/${commentId}`, {
      method: "DELETE",
    });
    const data = response.json();
    console.log("delete request", data);
  };

  return (
    <>
      <input type="text" onChange={handleChange} value={inputComment} />
      <button onClick={addComment}>Add comment</button>
      <br />
      <br />
      <button>Load comments</button>
      {comments.map((comment) => {
        return (
          <ul key={comment.id}>
            <li>
              {comment.id} {comment.text}
              &nbsp;&nbsp;
              <button onClick={() => deleteComment(comment.id)}>
                Delete comment
              </button>
            </li>
          </ul>
        );
      })}
    </>
  );
};

export default CommentsPage;
