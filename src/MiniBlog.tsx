import React,{useState} from 'react';
import PostList from './components/Posts/PostsList';
import AuthorInfo from './components/AuthorInfo/AuthorInfo';
import styles from './MiniBlog.module.css'


interface IData {
  authorID:null | number
}

const MiniBlog = () => {
  const [data,setData] = useState<IData>({
    authorID:null
  });

    const postSelect = (id:number):void => {
      setData({...data, authorID:id})
    }
  return (
    <div className={styles.miniBlog}>
      <PostList onSelect={postSelect} />
       {data.authorID && <AuthorInfo authorId={data.authorID}/> }
    </div>
  );
}

export default MiniBlog;
