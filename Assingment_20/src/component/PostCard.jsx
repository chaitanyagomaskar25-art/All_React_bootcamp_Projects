import React from "react";

const PostCard = React.forwardRef(({ post, onLike }, ref) => {
  return (
    <div className="card" ref={ref}>
      <h2>{post.title}</h2>

      <h4>{post.author}</h4>

      <p>{post.description}</p>

      <button onClick={() => onLike(post)}>
        ❤️ {post.likes}
      </button>
    </div>
  );
});

export default PostCard;