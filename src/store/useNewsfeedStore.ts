import create from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

interface NewsFeedStore {
    count: number;
    trigger: () => void;
}

const useNewsfeedStore = create<NewsFeedStore>()(
    devtools(
        immer((set, get) => ({
            count: 0,
            trigger: () => {
                set((state) => {
                    state.count++;
                });
            },
        })),
    ),
);

export default useNewsfeedStore;
