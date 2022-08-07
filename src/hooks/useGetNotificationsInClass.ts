import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { INotification } from '~/models/INotification';
import { getNotificationsFromTeacherToClass } from '~/repositories/notification';
import useNewsfeedStore from '~/store/useNewsfeedStore';

export default function useGetNotificationsInClass() {
    const { id } = useParams();

    const count = useNewsfeedStore((state) => state.count);
    return useQuery<any, any, INotification[]>(['notifications', id, count], () =>
        getNotificationsFromTeacherToClass(Number(id)),
    );
}
