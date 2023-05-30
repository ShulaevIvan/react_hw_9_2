import React from "react";

const Post = () => {
    return (
        <React.Fragment>
            <div className="post-wrapper">
                <div className="post-author-wrapper">
                    <div className="post-author-img"><img src="https://imgholder.ru/50x50/8493a8/adb9ca&text=IMAGE+HOLDER&font=kelson" alt="#" /></div>
                    <div className="post-autgor-name">
                        <span className="post-author">Author</span>
                        <span className="post-createted">4 мин назад</span>
                    </div>
                </div>
                <div className="post-content">
                    Content
                </div>
            </div>
        </React.Fragment>
    );
};

export default Post;