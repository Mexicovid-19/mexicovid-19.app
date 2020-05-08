import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { config } from "../config";
import { gql } from "apollo-boost";
import { useHistory } from "react-router-dom";

const useBlog = () => {
  const [posts, setPosts] = React.useState([]);
  const history = useHistory();
  const GET_POSTS = gql`{
      repository(owner: "${config.githubUserName}", name: "${config.githubRepo}") {
        issues(first: 100, states: OPEN, filterBy: { labels: "blog" }) {
          nodes {
            title
            body
            bodyHTML
            bodyText
            number
            labels(first: 100) {
              nodes {
                color
                name
                id
              }
            }
            author {
              url
              avatarUrl
              login
            }
            updatedAt
            id
          }
        }
      }
    }
    `
    
  const { loading, error, data } = useQuery(GET_POSTS);

  React.useEffect(() => {
      if (!loading) {
          if (error) {
              console.error(error)
          }

          if (data) {
              setPosts(data?.repository?.issues?.nodes)
          }
      }
  }, [loading, error, data]);

    
  const openBlog = (title, number) => {
    history.push(`/blog/${title}/${number}`);
  }
    
  return {
    posts,
    loading,
    openBlog
  }
}

export default useBlog;