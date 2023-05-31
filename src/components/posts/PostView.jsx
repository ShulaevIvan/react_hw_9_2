import React from "react";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../context";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import "moment/locale/ru";


const PostView = () => {
    const initialState = { editMode: false };
    const [viewState, setViewState] = useState(initialState);
    const param = useParams();
    const id = param.id;
    const context = useContext(Context);
    const navigate = useNavigate()
    let targetPost;
    
    context.state.posts.map((item) => {
        if (item.id === Number(id)) {
            targetPost = item;
        }
        return targetPost;
    });

    const rmPostHandler = () => {
        const fetchFunc = async () => {
            await fetch(`${process.env.REACT_APP_TEST_URL}posts/${targetPost.id}`, {method: 'DELETE'})
            .then(() => {
                navigate('/');
            });
        }
        fetchFunc();
    };
    
    const editPostHandler = () => {
        setViewState(prevState => ({
            ...prevState,
            editMode: prevState.editMode = true,
        }))
    };

    if (viewState.editMode) {
        return (
            <React.Fragment>
                Edit mode
            </React.Fragment>
        )
    }
    else {
        return (
            <React.Fragment>
                <div className="post-wrapper">
                    <div className="post-author-wrapper">
                        <div className="post-author-img"><img src="https://imgholder.ru/50x50/8493a8/adb9ca&text=IMAGE+HOLDER&font=kelson" alt="#" /></div>
                        <div className="post-autgor-name">
                            <span className="post-author">Author</span>
                            <span className="post-createted">{targetPost ? moment(targetPost.created).fromNow() : null}</span>
                        </div>
                    </div>
                    <div className="post-content">
                        {targetPost ? targetPost.content : null}
                    </div>
                    <div className="post-controls-wrapper">
                        <a href="#" className="post-control-edit-btn" onClick={editPostHandler}>Изменить</a>
                        <a href="#" className="post-control-rm-btn" onClick={rmPostHandler}>Удалить</a>
                    </div>
                </div>
            </React.Fragment>
        );
    }
    
    
};

export default PostView;