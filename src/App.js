import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createContext, useState } from "react";
import Home from './pages/Home';
import Login from './pages/Login';
import Regist from './pages/Regist'
import ProtectedRoutes from './ProtectedRoutes';

export const UserContext = createContext();

function App() {
    const [user, setUser] = useState({ loggedIn: true });


    return (
        <UserContext.Provider value={{ user, setUser }}>
            <Router>
                <Routes>
                    {/* Public Rpute */}
                    <Route path='/login' element={<Login />} />
                    <Route path='/regist' element={<Regist />} />

                    {/* Private Route */}
                    <Route element={<ProtectedRoutes />}>
                        <Route path="/" element={<Home />} />
                    </Route>
                </Routes>
            </Router>
        </UserContext.Provider>
    );
}

export default App;
