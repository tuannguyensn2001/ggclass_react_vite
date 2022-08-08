import create from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

interface ExercisesInClassStore {
    id: number | null | undefined;
    setId: (id: number) => void;
}

const useExercisesInClass = create<ExercisesInClassStore>()(
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

export default useExercisesInClass;
