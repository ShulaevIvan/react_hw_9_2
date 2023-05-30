import React from "react";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Post from "./Post";

const HomePage = () => {
    const initialState = {posts: undefined, loading: true};
    const [postsState, setPostsState] = useState(initialState);
    
    useEffect(() => {

        const fetchFunc = async () => {
            await fetch(`${process.env.REACT_APP_TEST_URL}posts`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                },
            })
            .then((response) => response.ok ? response.json() : new Error('error geting data'))
            .then((dataObj) => {
                if (dataObj) {
                    setPostsState(prevState => ({
                        ...prevState,
                        posts: prevState.posts = dataObj,
                        loading: prevState.loading = false,
                    }));
                }
            });
        }
        fetchFunc();
    });

    useEffect(() => {
        if (!postsState.loading) {
            console.log(postsState.posts)
        }
    }, [postsState.loading])

    return (
        <div className="main-container">
            <div className="btn-container">
                <div className="post-btn-wrap">
                    <Link className="post-btn" to="/posts/new">Создать Пост</Link>
                </div>
            </div>
            <div className="posts-wrapper">
                <Post></Post>
            </div>
        </div>
    );
};

export default HomePage;