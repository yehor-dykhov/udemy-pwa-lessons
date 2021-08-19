import './App.css';
import { showNotification } from './helpers';

const App = () => {
    if (window.Notification) {
        console.log('==>Notification.permission', Notification.permission);
        if (Notification.permission === 'granted') {
            showNotification();
        } else if (Notification.permission !== 'denied') {
            Notification.requestPermission().then(e => {
                console.log('==>Permission', e);
            });
        }
    }

    return (
        <div className="App">
            PWA
        </div>
    );
};

export default App;
