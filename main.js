if (navigator.serviceWorker) {
    navigator.serviceWorker.register('./sw.js').then(registration => {
        console.log('REGISTERED', registration);
    });
}