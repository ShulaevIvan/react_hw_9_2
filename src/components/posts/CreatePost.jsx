import React from "react";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
    const initialState = {
        tagRef: useRef(null),
        inputValid: false,
        data: undefined,
    };
    const navigate = useNavigate();
    const [postState, setPostState] = useState(initialState);

    const publishHandler = () => {
        const textAreaValue = postState.tagRef.current.value.trim();
        if (textAreaValue !== '') {
            setPostState(prevState => ({
                ...prevState,
                inputValid: prevState.inputValid = true,
                data: {"id": 0, "content": textAreaValue},
            }));
            setTimeout(() => {
                navigate('/');
            }, 100);
        }
    }

    const rmBtnHandler = () => {
        navigate('/');
    };

    useEffect(()=> {
        if (postState.inputValid) {
            const fetchFunc = async () => {
                await fetch(`${process.env.REACT_APP_TEST_URL}posts`, {
                    'method': 'POST',
                    body: JSON.stringify(postState.data),
                })
                .then(() => {
                    if (postState.tagRef.current) postState.tagRef.current.value = '';
                })
            };
            fetchFunc();
            setPostState(prevState => ({
                ...prevState,
                inputValid: prevState.inputValid = false,
            }));
        };
        // eslint-disable-next-line
    }, [postState.inputValid]);

    return (
        <div className="main-container">
            <div className="post-edit-title">
                <h4>Создать пост</h4>
                <span className="close-form-btn" onClick={rmBtnHandler}></span>
            </div>
            <div className="content-add-input-wrap">
                <textarea ref={postState.tagRef}  />
            </div>
            <div className="btn-container">
                {/*  eslint-disable-next-line */}
                <a className="publish-btn" onClick={publishHandler}>Опубликовать</a>
            </div>
        </div>
    );
};

export default CreatePost