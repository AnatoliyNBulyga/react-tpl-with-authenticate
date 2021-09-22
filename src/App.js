// core
import React, {useEffect} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import {useActions} from "./hooks/useActions";
import {useSelector} from "react-redux";
// styles
import './App.css';

function App() {

    const {isAuth} = useSelector( state => state.auth );
    const {setIsAuth, setUser} = useActions();

    useEffect(() => {
        if(localStorage.getItem('auth')) {
            setUser({username: localStorage.getItem('username' || '')});
            setIsAuth(true);
        }
    }, []);

    return (
    <div>
      <Router>
        <Routes authenticated={isAuth} />
      </Router>
    </div>
    );
}

export default App;
