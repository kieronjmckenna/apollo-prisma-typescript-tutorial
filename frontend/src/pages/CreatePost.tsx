import React, { FormEvent, useState } from "react";
import { useAddPostMutation } from "generated/graphql";
import { useHistory } from "react-router";

export const CreatePost = () => {
  const history = useHistory();
  const [body, setBody] = useState<string>("");

  const [createPost] = useAddPostMutation({
    variables: {
      body,
    },
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createPost();
  };

  return (
    <div>
      <button onClick={() => history.push("/")}>Back to All Posts</button>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label>Post Body</label>
        <input
          value={body}
          onChange={(change) => setBody(change.target.value)}
        ></input>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};
