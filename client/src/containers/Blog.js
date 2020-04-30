import React, { useState, useEffect } from "react";
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';

import { config } from "../config";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Loader } from '../components/Common'
import { BlogContainer } from '../components/Blog'
import { Card } from '../components/Blog/Card'

const GET_POSTS = gql`
{
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

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const { loading, error, data } = useQuery(GET_POSTS);

  useEffect(() => {
    if (!loading) {
      if (error) {
        console.error(error)
      }

      if (data) {
        setPosts(data?.repository?.issues?.nodes)
        console.log("ya cargo los datos")
      }
    }
  }, [loading, error, data]);

  return (
    <>
      <Header fixed={true}/>
        <BlogContainer>
          {
            loading
            ? <Loader />
            : posts.map((v, i) => {
                return <Card blog={v} key={i} />;
              })
          }
        </BlogContainer>
      <Footer/>
    </>
  );
}

export default Blog;
