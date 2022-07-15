import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from '../routes/Auth'
import Main from '../routes/Main'

const MyRouter = ({ isLogin }) => {
    return (
        <Router>
            <Routes>
                {
                    isLogin ? <Route path="/" element={<Main />}></Route>
                        : <Route path="/" element={<Auth />}></Route>
                }
            </Routes>
        </Router>
    )
}

export default MyRouter;