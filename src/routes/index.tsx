import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from "../components/Header"
import { Home } from "../pages/home"
import { Footer } from "../components/Footer"

export const RoutesApp = () => {
    return (
        <BrowserRouter basename="/">
        <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        <Footer/>
        </BrowserRouter>
    )
}

export const RoutesPosts = () => {
    return (
        <BrowserRouter basename="/postagens">
            <Header/>
            <Routes>
                <Route/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}