import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useMemo, useRef, useState } from 'react';
import { toast } from 'react-toastify';

import API from '~/network/API';
import { useMutation, useQuery } from 'react-query';

export default function useManageMyNewFeeds() {
    const [listPost, setListPost] = useState();
    const { id } = useParams();
    const classId = useMemo(() => {
        return Number(id);
    }, [id]);
    const { data } = useQuery(
        'getPost',
        async () => {
            const res = await API.get(`/v1/classes/${classId}/posts`);
            return res.data;
        },
        {
            onSuccess(data) {
                data.data.reverse();
                data.data.forEach((item) => {
                    if (!Boolean(item?.comments)) {
                        item.comments = [];
                    }
                });
                setListPost(data.data);
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
                if (!Boolean(post?.comments)) {
                    post.comments = [];
                }

                setListPost((prevState) => [post, ...prevState]);
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
                const clone = structuredClone(listPost);

                const post = clone.find((item) => Number(item?.id) === Number(comment?.postId));
                if (!post) return;
                post?.comments?.unshift(comment);

                setListPost(clone);
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
