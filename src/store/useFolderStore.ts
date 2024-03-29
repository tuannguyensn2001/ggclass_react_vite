import create from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

interface FolderStore {
    id: number | null;
    setId: (id: number) => void;
}

const useFolderStore = create<FolderStore>()(
    devtools(
        immer((set, get) => ({
            id: null,
            setId: (id: number) => {
                set((state) => {
                    state.id = id;
                });
            },
        })),
    ),
);

export default useFolderStore;
