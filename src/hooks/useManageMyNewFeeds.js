import { useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';

import API from '~/network/API';
import { useMutation, useQuery } from 'react-query';

export default function useManageMyNewFeeds() {
    const [listPost, setListPost] = useState();
    const originData = useRef(null);
    let location = useLocation();
    const { pathname } = location;
    const classId = +pathname.split('/')[2];
    const { data } = useQuery(
        'getPost',
        async () => {
            const res = await API.get(`/v1/classes/${classId}/posts`);
            return res.data;
        },
        {
            onSuccess(data) {
                data.data.reverse();
                setListPost(data.data);
                originData.current = data.data;
            },
        },
    );
    const { mutate: mutateP } = useMutation(
        'addPost',
        async (data) => {
            const response = await API.post('/v1/posts', data);
            return response.data.data;
        },
        {
            async onSuccess(post) {
                toast.success('Thêm Bài viết thành công');
                if (!post.comments) {
                    post.comments = [];
                }
                originData.current = [post, ...originData.current];
                setListPost(originData.current);
            },
            onError(err) {
                console.log(err);
                toast.error('Thêm bài viết thất bại vui lòng thử lại');
            },
        },
    );
    const { mutate: mutateC } = useMutation(
        'addComment',
        async (data) => {
            const response = await API.post('/v1/comments', data);
            return response.data.data;
        },
        {
            async onSuccess(comment) {
                toast.success('Thêm comment thành công');
                originData.current.find((item) => {
                    if (item.id === comment.postId) {
                        item?.comments.unshift(comment);
                    }
                });

                setListPost(originData.current);
            },
            onError(err) {
                console.log(err);
                toast.error('Thêm comment thất bại vui lòng thử lại');
            },
        },
    );

    return {
        listPost,
        setListPost,
        mutateP,
        mutateC,
        classId,
    };
}
