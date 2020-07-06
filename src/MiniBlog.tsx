import React,{useState} from 'react';
import PostList from './components/Posts/PostsList';
import Comment from './components/Comments/Comment';
import styles from './MiniBlog.module.css'


interface IData {
  authorID:null | number
}

const MiniBlog = () => {
  const [data,setData] = useState<IData>({authorID:null});

    const postSelect = (id:number):void => {
      setData({...data, authorID:id})
    }
  return (
    <div className={styles.miniBlog}>
      <PostList onSelect={postSelect} />
      <Comment />
    </div>
  );
}

export default MiniBlog;
