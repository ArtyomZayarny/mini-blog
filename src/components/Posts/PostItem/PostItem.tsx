import React, {useState,useEffect} from 'react';
import styles from './PostItem.module.css';
import useData from '../../Hooks/useData';
import  {Dimmer,Loader} from 'semantic-ui-react'
import axios from 'axios';

type PostItemProps = {
    postId:number,
    title:string,
    body:string,
    userId:number,
    onSelect:(id:number) => void
}

const PostItem:React.FC<PostItemProps>  = (props) => {
    const {title,body,postId,onSelect} = {...props};
    const [showBody,setShowBody] = useState(false);
    const [loading,setLoading] = useState(false);
    const [comments,setComments] = useState([]);
    // const [comments,isFetching] = useData('/posts/${postId}/comments');

    // useEffect( () => {
    //   //  console.log(comments)

    // },[isFetching]);

    const handleSelect = () => {
        setShowBody(!showBody);
        setLoading(true)
        onSelect(props.userId);
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`).
        then( (res) => { 
            setComments(res.data);
            setLoading(false);
            }
        );
    }
    return (
        <li className={styles.postItem} onClick={ () => {handleSelect()}} >
            <h3>{title}</h3>
            <div className={ showBody ? styles.show : styles.none }>
                {body}
                <Dimmer active={loading === true} inverted>
                    <Loader>Loading...</Loader>
                </Dimmer>
                { comments.length > 0 && 
                <>
                    <ul>
                    <h3>Comments:</h3>
                    {comments.map( (comment:{name:string,body:string,id:number}) => {
                            return <li key={comment.id}>
                                <p>{comment.name}</p>
                                <p>{comment.body}</p>
                            </li>
                    } )}
                    </ul>
                </> }
            </div>
        </li>
    )
}

export default PostItem 
 