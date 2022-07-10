import create from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import API from "~/network/API";

const useAuthStore = create()(
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
        localStorage.removeItem("accessToken");
      },
      fetchUser: async () => {
        set((state) => {
          state.isLoading = true;
        });

        try {
          const response = await API.get("/v1/auth/me");
          set((state) => {
            state.user = response.data.data;
          });
        } catch (e) {
          localStorage.removeItem("accessToken");
        } finally {
          set((state) => {
            state.isLoading = false;
            state.isFetchedUser = true;
          });
        }
      },
    }))
  )
);

export default useAuthStore;
