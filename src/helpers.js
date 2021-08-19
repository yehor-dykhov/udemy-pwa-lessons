export const showNotification = () => {
    const options = {
        body: 'Hi, I`m your Notification from PWA!',
        icon: './favicon2.ico'
    }
    const notification = new Notification('HEADER OF YOUR MIND', options);
    notification.onclick = () => {
        console.log('==>Did you click me?!');
    };
};

export const urlBase64ToUint8Array = (base64String) => {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
};
