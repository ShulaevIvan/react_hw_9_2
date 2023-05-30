import React from "react";
import { useState, useRef, useEffect } from "react";

const CreatePost = () => {
    const initialState = {
        tagRef: useRef(null),
        inputValid: false,
        data: undefined,
    };
    const [postState, setPostState] = useState(initialState);

    const publishHandler = () => {
        const textAreaValue = postState.tagRef.current.value.trim();
        if (textAreaValue !== '') {
            setPostState(prevState => ({
                ...prevState,
                inputValid: prevState.inputValid = true,
                data: {"id": 0, "content": textAreaValue},
            }));
        }
        
    }
    useEffect(()=> {
        if (postState.inputValid) {
            const fetchFunc = async () => {
                await fetch(`${process.env.REACT_APP_TEST_URL}posts`, {
                    'method': 'POST',
                    body: JSON.stringify(postState.data),
                })
                .then(() => {
                    postState.tagRef.current.value = '';
                })
            };
            fetchFunc();
            setPostState(prevState => ({
                ...prevState,
                inputValid: prevState.inputValid = false,
            }));
        };
        
    }, [postState.inputValid]);

    return (
        <div className="main-container">
            <span className="close-form-btn"></span>
            <div className="content-add-input-wrap">
                <textarea ref={postState.tagRef}  />
            </div>
            <div className="btn-container">
                <a className="publish-btn" onClick={publishHandler}>Опубликовать</a>
            </div>
        </div>
    );
};

export default CreatePost