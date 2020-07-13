import React,{useState, useEffect} from 'react';
import PostItem from './PostItem/PostItem';
import useData from '../Hooks/useData'
import { Container, Dimmer, Loader } from 'semantic-ui-react';
 
type PostListProps = {
    onSelect:(id:number) => void
}
//userId
interface IPost {
    id:number,
    title:string,
    body:string,
    userId:number
}


const PostList:React.FC<PostListProps> = (props) => {
    const [data,isFetching] = useData('/posts');
    const [list,setList] = useState([]);

    useEffect(() => {
        setList(data)
    }, [data,isFetching]) 
    return (  
        <Container>
           <Dimmer active={isFetching.fetch} inverted>
                        <Loader >Loading</Loader>
                    </Dimmer>
            { list.length > 0 && 
            <>
            <h2>Post List</h2>
                {list.map( (post:IPost) => {
                    return <PostItem 
                                    key={post.id}
                                    postId={post.id}   
                                    title={post.title} 
                                    body={post.body}
                                    userId={post.userId}
                                    onSelect={props.onSelect}
                                    /> }) }
            </>
             }
        </Container>
    )
}
 
export default PostList