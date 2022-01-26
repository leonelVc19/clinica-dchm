import {Route, Routes } from "react-router-dom";

//Aparatdo donde se importaran las rutas de los componentes
import Home from './pages/Home';
import Tratamientos from './pages/Treatments/index'
import Login from './pages/Login/login'
import Register from './pages/Register/register'

//Definición de router

const Routers = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />}/>
        <Route path="/treatments" element={<Tratamientos />}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
    </Routes>
);

//exportación de mismo.

export default Routers;