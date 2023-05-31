import React from "react";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { Context } from "../../context";
import Post from "./Post";

const HomePage = () => {
    const context = useContext(Context);

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
                if (dataObj && JSON.stringify(context.state.posts) !== JSON.stringify(dataObj)) {
                    context.setState(prevState => ({
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
        if (!context.state.loading) {
            // console.log(context.state.posts)
        }
    }, [context.state.loading]);

    return (
        <div className="main-container">
            <div className="btn-container">
                <div className="post-btn-wrap">
                    <Link className="post-btn" to="/posts/new">Создать Пост</Link>
                </div>
            </div>
            <div className="posts-wrapper">
                {context.state.posts.map((item) => {
                    return (
                        <React.Fragment key={item.id}>
                            <Post postData={item}></Post>
                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    );
};

export default HomePage;