import React from "react";
import { useAllPostsQuery } from "generated/graphql";
import { useHistory } from "react-router-dom";

export const AllPosts = () => {
  const history = useHistory();
  const { data } = useAllPostsQuery();

  return (
    <div>
      <button onClick={() => history.push("/add-post")}>Add a post</button>
      <ul>
        {data?.AllPosts.length === 0 ? (
          <h6>No posts yet</h6>
        ) : (
          data?.AllPosts.map((post) => <li>{post.body}</li>)
        )}
      </ul>
    </div>
  );
};
