import React, { useState } from 'react';

import Article from "../components/article";

export default function App() {

  let [ articles, setArticles ] = useState([
    {
      id: 4,
      title: 'Introduction to Javascript',
      thumbnail: 'https://placebear.com/400/400',
      author: 'William McGonagle',
      course: 'Introduction to Javascript'
    },
    {
      id: 4,
      title: 'Introduction to Javascript',
      thumbnail: 'https://placebear.com/400/400',
      author: 'William McGonagle',
      course: 'Introduction to Javascript'
    },
    {
      id: 4,
      title: 'Introduction to Javascript',
      thumbnail: 'https://placebear.com/400/400',
      author: 'William McGonagle',
      course: 'Introduction to Javascript'
    },
    {
      id: 4,
      title: 'Introduction to Javascript',
      thumbnail: 'https://placebear.com/400/400',
      author: 'William McGonagle',
      course: 'Introduction to Javascript'
    },
    {
      id: 4,
      title: 'Introduction to Javascript',
      thumbnail: 'https://placebear.com/400/400',
      author: 'William McGonagle',
      course: 'Introduction to Javascript'
    },
  ]);

  return (
    <>
      <h1>Articles</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', columnGap: "5px", rowGap: "5px" }}>
        {
          articles.map((element) => {

            return <Article key={ element } title={ element.title } course={ element.course } author={ element.author } thumbnail={ element.thumbnail } />;

          })
        }
      </div>
    </>
  );
}