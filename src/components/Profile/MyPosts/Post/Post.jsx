import React from 'react';
import s from './Post.module.css';


const Post = () => {

    return  (
            <div className={s.item}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbDf4B89vMGRRiOi__KrTWyRwD2rRFlyOT7Q&usqp=CAU'/>
                Post1
                <div>
                    <span>Like</span>
                </div>
                
            </div>
    )       
}


export default Post;