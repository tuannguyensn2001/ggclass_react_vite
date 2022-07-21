import Post from '~/components/Post';
import PostEditor from '~/components/PostEditor';
import styles from './style.module.css';
import NewsfeedHeader from '~/components/NewsfeedHeader';
import NewsfeedSiderBarRight from '~/components/NewsfeedSiderBarRight';
import NewsfeedContent from '~/components/NewsfeedContent';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import API from '~/network/API';
import { useMutation, useQuery } from 'react-query';
const defaultData = [
    {
        id: 1,
        content:
            'Level up your understanding of React Router with the concepts, vocabulary, and design principles of React Router and routing in general. A must read for would-be contributors.',
        createdBy: 3,
        createdByUser: {
            id: 4,
            username: 'Võ Mạnh Cường',
        },
        comments: [
            {
                id: 2,
                content: 'Bạn thật tuyệt vời',
                createdByUser: {
                    id: 3,
                    username: 'Phùng ánh',
                },
                createdAt: 1234,
            },
            {
                id: 2,
                content: 'Bạn thật tuyệt vời',
                createdByUser: {
                    id: 3,
                    username: 'Phùng ánh',
                },
                createdAt: 1234,
            },
            {
                id: 2,
                content: 'Bạn thật tuyệt vời',
                createdByUser: {
                    id: 3,
                    username: 'Phùng ánh',
                },
                createdAt: 1234,
            },
        ],
    },
    {
        id: 1,
        content: 'alo xinh',
        createdBy: 3,
        createdByUser: {
            id: 4,
            username: 'Võ Mạnh Cường',
        },
        comments: [
            {
                id: 2,
                content: 'Bạn thật tuyệt vời',
                createdByUser: {
                    id: 3,
                    username: 'Phùng ánh',
                },
                createdAt: 1234,
            },
            {
                id: 2,
                content: 'Bạn thật tuyệt vời',
                createdByUser: {
                    id: 3,
                    username: 'Phùng ánh',
                },
                createdAt: 1234,
            },
            {
                id: 2,
                content: 'Bạn thật tuyệt vời',
                createdByUser: {
                    id: 3,
                    username: 'Phùng ánh',
                },
                createdAt: 1234,
            },
        ],
    },
    {
        id: 1,
        content: 'alo xinh',
        createdBy: 3,
        createdByUser: {
            id: 4,
            username: 'Võ Mạnh Cường',
        },
        comments: [
            {
                id: 2,
                content: 'Bạn thật tuyệt vời',
                createdByUser: {
                    id: 3,
                    username: 'Phùng ánh',
                },
                createdAt: 1234,
            },
            {
                id: 2,
                content: 'Bạn thật tuyệt vời',
                createdByUser: {
                    id: 3,
                    username: 'Phùng ánh',
                },
                createdAt: 1234,
            },
            {
                id: 2,
                content: 'Bạn thật tuyệt vời',
                createdByUser: {
                    id: 3,
                    username: 'Phùng ánh',
                },
                createdAt: 1234,
            },
        ],
    },
];

function Newsfeed() {
    let location = useLocation();
    const [listPost, setListPost] = useState(defaultData);
    const { pathname } = location;
    console.log('id', +pathname.split('/')[2]);
    const classId = +pathname.split('/')[2];

    // const { data } = useQuery(
    //     'getPost',
    //     async () => {
    //         const res = await API.get(`/v1/classes/:${classId}/posts`);
    //         return res.data;
    //     },
    //     {
    //         onSuccess(data) {
    //             console.log('data', data);
    //             setListPost(data.data);
    //         },
    //     },
    // );

    const { mutate: mutateP } = useMutation(
        'addPost',
        async (data) => {
            const response = await API.post('/v1/posts', data);
            return response.data;
        },
        {
            async onSuccess(data) {
                toast.success('Thêm Bài viết thành công');
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
            return response.data;
        },
        {
            async onSuccess(data) {
                toast.success('Thêm comment thành công');
            },
            onError(err) {
                console.log(err);
                toast.error('Thêm comment thất bại vui lòng thử lại');
            },
        },
    );
    const handleCreatePost = (data) => {
        mutateP({
            ...data,
            classId: classId,
        });
        console.log({
            ...data,
            classId: classId,
        });
    };
    const handleCreateComment = (data) => {
        console.log(typeof data.postId);
        mutateC(data);
    };
    return (
        <div className={styles.wrap}>
            <div className={styles.content}>
                <NewsfeedHeader />
                <NewsfeedContent
                    handleCreateComment={handleCreateComment}
                    handleCreatePost={handleCreatePost}
                    data={listPost}
                />
            </div>
            <NewsfeedSiderBarRight />
        </div>
    );
}

export default Newsfeed;
