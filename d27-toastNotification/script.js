const button = document.getElementsById('button');
const toasts = document.getElementsById('toasts');

// To check random messages
const messages = [
  'Notification 1',
  'Notification 2',
  'Notification 3',
  'Notification 4',
];

button.addEventListener('click', () => createNotification());

function createNotification() {
  messages.forEach((message) => {
    const message = document.createElement('div');
  });
}
