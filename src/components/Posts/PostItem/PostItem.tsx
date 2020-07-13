import React, {useState,useEffect} from 'react';
import styles from './PostItem.module.css';
import useData from '../../Hooks/useData';
import  {Dimmer,Loader, Item, Container,Comment} from 'semantic-ui-react'
import axios from 'axios';

type PostItemProps = {
    postId:number,
    title:string,
    body:string,
    userId:number,
    onSelect:(id:number) => void
}
type CommentType = {
    id:number, 
    email:string,
    body:string
}

const PostItem:React.FC<PostItemProps>  = (props) => {
    const {title,body,postId,onSelect} = {...props};
    const [showBody,setShowBody] = useState(false);
    const [loading,setLoading] = useState(false);
    const [showComments,setShowComments] = useState(false);
    const [comments,setComments] = useState([]);
 
    const handleSelect = () => {
        setShowBody(!showBody);
        setLoading(true)
        onSelect(props.userId);
    }
    const handleComments = ():void => {
        if (comments.length === 0) {
            setLoading(true);
            axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`).
        then( (res) => { 
            setComments(res.data);
            setLoading(false);
            setShowComments(true)
            });
        } else {
            setShowComments(!showComments);
        }    
    }
    return (
        <Item.Group>
            <Item>
                <Item.Content>
                    <Item.Header onClick={ () => {handleSelect()}} as='a'>{title}</Item.Header>
                    <Item.Description className={showBody ? 'show' : ''}>
                    {body}
                    </Item.Description>
                    <p><a onClick={() => { handleComments()} }>Comments</a></p>
                    <Item.Extra className={showComments ? 'show' : ''}>
                        
                            <Dimmer active={loading} inverted>
                                <Loader inverted>Loading...</Loader>
                            </Dimmer>
                            <Comment.Group>
                            {comments.length > 0 && 
                              comments.map( (item:CommentType) => {
                                  return (
                                    <Comment key={item.id}>
                                    <Comment.Avatar src='https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png' />
                                    <Comment.Content>
                                        <Comment.Author as='a'>{item.email}</Comment.Author>
                                        <Comment.Text className={showBody ? 'show' : ''}>{item.body}</Comment.Text>
                                        <Comment.Actions>
                                            <Comment.Action>Reply</Comment.Action>
                                        </Comment.Actions>
                                    </Comment.Content>
                                  </Comment>
                                  )
                              })
                            }
                            </Comment.Group>
                                         
                    </Item.Extra>
                </Item.Content>
            </Item>
        </Item.Group>
        // <li className={styles.postItem} onClick={ () => {handleSelect()}} >
            
        //     <div className={ showBody ? styles.show : styles.none }>
                
        //         <Dimmer active={loading === true} inverted>
        //             <Loader>Loading...</Loader>
        //         </Dimmer>
        //         { comments.length > 0 && 
        //         <>
        //             <ul>
        //             <h3>Comments:</h3>
        //             {comments.map( (comment:{name:string,body:string,id:number}) => {
        //                     return <li key={comment.id}>
        //                         <p>{comment.name}</p>
        //                         <p>{comment.body}</p>
        //                     </li>
        //             } )}
        //             </ul>
        //         </> }
        //     </div>
        // </li>
    )
}

export default PostItem 
 