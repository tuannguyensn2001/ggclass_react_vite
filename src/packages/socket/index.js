import io from 'socket.io-client';

let socket = null;

export const bootstrap = () => {
    // socket = io(import.meta.env?.VITE_SOCKET);
    // socket.on('connect', () => {
    //     console.log('connected', socket.id);
    // });
};

export const getSocket = () => socket;
