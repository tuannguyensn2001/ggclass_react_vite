import create from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import API from '~/network/API';
import { IUser } from '~/models/IUser';

interface AuthStore {
    user: IUser | null;
    setUser: (user: IUser) => void;
    isFetchedUser: boolean;
    isLoading: boolean;
    logOut: () => void;
    getAvatar: () => string | undefined;
}

const useAuthStore = create<AuthStore>()(
    devtools(
        immer((set, get) => ({
            user: null,
            setUser: (user) =>
                set((state) => {
                    state.user = user;
                }),
            isFetchedUser: false,
            isLoading: false,
            logOut: () => {
                set((state) => {
                    state.user = null;
                });
                localStorage.removeItem('accessToken');
            },
            fetchUser: async () => {
                if (!localStorage.getItem('accessToken')) {
                    set((state) => {
                        state.isFetchedUser = true;
                    });
                    return;
                }

                set((state) => {
                    state.isLoading = true;
                });

                try {
                    const response = await API.get('/v1/auth/me');
                    set((state) => {
                        state.user = response.data.data;
                    });
                } catch (e) {
                    localStorage.removeItem('accessToken');
                } finally {
                    set((state) => {
                        state.isLoading = false;
                        state.isFetchedUser = true;
                    });
                }
            },
            getAvatar: () => {
                const user = get().user;
                return user?.profile?.avatar;
            },
        })),
    ),
);

export default useAuthStore;
