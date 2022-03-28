import React from 'react';
import { db } from '../firebase'
import { useCollection } from 'react-firebase-hooks/firestore';

import Post from './Post';
import { collection, orderBy } from 'firebase/firestore';

const Posts = () => {
    const [realtimePosts] = useCollection(
        collection(db, "posts"),orderBy('timestamp', 'desc')
    );

  return (
    <div>
      {realtimePosts?.docs.map((post) => (
          <Post
          key={post.id}
          name={post.data().name}
          message={post.data().message}
          email={post.data().email}
          timestamp={post.data().timestamp}
          image={post.data().image}
          postImage={post.data().postImage}
          />
      ))}
    </div>
  );
}

export default Posts;
