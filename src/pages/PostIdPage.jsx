import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../api/PostService';
import { useFetching } from '../hooks/useFetch';

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const response = await PostService.getById(params.id);
        setPost(response.data);
    });
    const [fetchComments, isComLoading, comError] = useFetching(async () => {
        const response = await PostService.getCommentsByPostId(params.id);
        setComments(response.data);
    })
    useEffect(() => {fetchPostById();fetchComments()}, [params])
    return (
        <>
            <div>
                <h3>
                    {post.title}
                </h3>
                <p>
                    {post.body}
                </p>
            </div>
            <div>
                <h4>Комментарии</h4>
                {comments.map(comm => 
                    <div>
                        <h5>{comm.email}</h5>
                        <p>{comm.body}</p>
                    </div>
                )}
            </div>
        </>
    );
};

export default PostIdPage;