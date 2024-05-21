import React from 'react'
import Header from './Components/Header.jsx';
import Maincontent from './Components/Main.jsx';
import Footer from './Components/Footer.jsx';

const App = () => (
    <div>
        <Header />
        <Maincontent />
        <Footer />
    </div>
);

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(<App />);