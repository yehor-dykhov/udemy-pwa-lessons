import { urlBase64ToUint8Array } from './helpers';

export const register = (config) => {
    if ('serviceWorker' in navigator) {
        const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
        console.log('==>swUrl', swUrl);
        navigator.serviceWorker.register('./service-worker.js', { ...config }).then(registration => {
            const publicKey = "BB4Y_52cv6MlEijSC6cC3KBdKY0OAvjSmyGg8D7aQg7RJ-MfWgupFhGvUKrK-K6MDye1rGDvHSV3mxvmBljgds4";

            registration.pushManager.getSubscription()
                .then(sub => {
                    if (sub) return sub;

                    const applicationServerKey = urlBase64ToUint8Array(publicKey);

                    return registration.pushManager.subscribe({
                        userVisibleOnly: true,
                        applicationServerKey,
                    })
                })
                .then(sub => sub.toJSON())
                .then(console.log)
                .catch(console.log);

            if (registration.active) {
                registration.active.postMessage("Hi from client")
            }
        })

        navigator.serviceWorker.addEventListener("message", e => {
            console.log('==>Client get message: ', e.data);
        })
    }
};

export const unregister = () => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready
            .then((registration) => {
                registration.unregister();
            })
            .catch((error) => {
                console.error(error.message);
            });
    }
};
