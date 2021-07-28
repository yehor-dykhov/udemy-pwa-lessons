import './App.css';
import { useEffect } from 'react';

const App = () => {
    useEffect(() => {
        if (navigator.serviceWorker) {
            navigator.serviceWorker.register('./sw.js').then(registration => {
                console.log('REGISTERED', registration);
            });
        }
    }, [])

    return (
        <div className="App">
            PWA
        </div>
    );
};

export default App;
