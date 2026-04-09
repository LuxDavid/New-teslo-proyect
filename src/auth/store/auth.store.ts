import type { User } from '@/interfaces/user.interface'
import { create } from 'zustand'
import { loginAction } from '../actions/login.action';

// type Store = {
//     count: number;
//     inc: () => void;
//     dec: () => void;
//     incBy: (value:number) => void;
// }

// export const useCounterStore = create<Store>()((set) => ({
//     count: 100,
//     inc: () => set((state) => ({ count: state.count + 1 })),
//     dec:() => set((state) => ({count: state.count - 1})),
//     incBy:(value: number) => set((state) => ({count: state.count  + value}))
// }))

type AuthState = {
    // Properties
    user: User | null;
    token: string | null;

    //Getters

    //Actions
    login: (email: string, password: string) => Promise<boolean>
}

export const useAuthStore = create<AuthState>()((set) => ({
    //Implementacion del Store

    user: null,
    token: null,

    //Actions
    login: async (email: string, password: string) => {
        console.log({ email, password });

        try {

            const data = await loginAction(email, password);
            localStorage.setItem('token', data.token);

            set({user: data.user, token: data.token});
            return true;

        } catch (error) {
            localStorage.removeItem('token');
            set({ user: null, token: null });
            return false
        }

    }
}))

