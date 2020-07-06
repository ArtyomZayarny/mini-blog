import React, {useState} from 'react';
import styles from './PostItem.module.css';

type PostItemProps = {
    title:string,
    body:string,
    userId:number,
    onSelect:(id:number) => void
}

const PostItem:React.FC<PostItemProps>  = (props) => {
    const {title,body,onSelect} = {...props};
    const [showBody,setShowBody] = useState(false);

    const handleSelect = () => {
        setShowBody(!showBody);
        onSelect(props.userId)
    }
    return (
        <li className={styles.postItem} onClick={ () => {handleSelect()}} >
            <h3>{title}</h3>
            <div className={ showBody ? styles.show : styles.none }>
                {body}
            </div>
        </li>
    )
}

export default PostItem 
 