import create from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { INotification } from '~/models/INotification';
import { getMyNotifications } from '~/repositories/notification';

interface NotificationStore {
    notifications: INotification[];
    setNotifications: (list: INotification[]) => void;
    setSeen: (id: string) => void;
    refetch: () => void;
}

const useNotificationStore = create<NotificationStore>()(
    devtools(
        immer((set, get) => ({
            notifications: [],
            setNotifications: (list) => {
                set((state) => {
                    state.notifications = list;
                });
            },
            setSeen: (id: string) => {
                set((state) => {
                    const index = state.notifications.findIndex((item) => item.id === id);
                    if (index === -1) return;
                    state.notifications[index].seen = 1;
                });
            },
            refetch: async () => {
                try {
                    const data = await getMyNotifications();
                    set((state) => {
                        if (!data) return;
                        state.notifications = data;
                    });
                } catch (e) {
                    console.log(e);
                }
            },
        })),
    ),
);
export default useNotificationStore;
