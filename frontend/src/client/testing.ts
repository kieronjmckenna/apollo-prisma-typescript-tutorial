import { gql } from "@apollo/client";

gql`
  query AllPosts {
    AllPosts {
      id
      user {
        name
      }
      like {
        id
      }
      body
    }
  }

  mutation AddPost($body: String!) {
    AddPost(body: $body) {
      id
      body
      userId
    }
  }
`;
