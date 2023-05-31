import React from "react";
import moment from "moment";
import "moment/locale/ru";
import { useNavigate } from "react-router-dom";

const Post = ({postData}) => {
    const date = moment(postData.created).fromNow();
    const navigate = useNavigate();

    const viewPostHandler = () => {
        navigate(`/posts/${postData.id}`)
    };

    return (
        <React.Fragment>
            <div className="post-wrapper" id={postData.id} onClick={viewPostHandler}>
                <div className="post-author-wrapper">
                    <div className="post-author-img"><img src="https://imgholder.ru/50x50/8493a8/adb9ca&text=IMAGE+HOLDER&font=kelson" alt="#" /></div>
                    <div className="post-autgor-name">
                        <span className="post-author">Author</span>
                        <span className="post-createted">{date}</span>
                    </div>
                </div>
                <div className="post-content">
                    {postData.content}
                </div>
            </div>
        </React.Fragment>
    );
};

export default Post;