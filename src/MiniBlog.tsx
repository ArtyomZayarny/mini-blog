import React,{useState} from 'react';
import PostList from './components/Posts/PostsList';
import AuthorInfo from './components/AuthorInfo/AuthorInfo';
import styles from './MiniBlog.module.css'
import {Grid} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

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
    <Grid columns={3}>
      <Grid.Row>
          <Grid.Column>
              <PostList onSelect={postSelect} />
          </Grid.Column>
          <Grid.Column>
              {data.authorID && <AuthorInfo authorId={data.authorID}/> }
          </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default MiniBlog;
