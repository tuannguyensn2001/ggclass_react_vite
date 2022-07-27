import Pusher from 'pusher-js';
const pusher = new Pusher('26bdb6fd186156c41fe6', {
    cluster: 'ap1',
});

export default pusher;
