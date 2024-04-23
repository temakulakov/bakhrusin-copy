import React, {useEffect} from 'react';
import './styles/App.css';
import {AnimatePresence} from "framer-motion";
import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/HomePage/HomePage";
import EventPage from "./pages/EventPage/EventPage";
import ExcursionPage from "./pages/ExcursionPage/ExcursionPage";
import ExhibitionPage from "./pages/ExhibitionPage/ExhibitionPage";
import ExpositionPage from "./pages/ExpositionPage/ExpositionPage";
import NewPage from "./pages/NewPage/NewPage";
import StorePage from "./pages/StorePage/StorePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import BuildingPage from "./pages/BuildingPage/BuildingPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import VisitorsPage from "./pages/VisitorsPage/VisitorsPage";

function AnimationRouter() {
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const location = useLocation();
    return <AnimatePresence mode={'wait'}>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Layout/>}>
                <Route index element={<HomePage/>}/>
                <Route path={'/event/:id'} element={<EventPage />} />
                <Route path={'/events'} element={<EventPage />} />
                <Route path={'/excursion/:id'} element={<ExcursionPage/>}/>
                <Route path={'/excursions'} element={<ExcursionPage/>}/>
                <Route path={'/exhibition/:id'} element={<ExhibitionPage/>}/>
                <Route path={'/exhibitions'} element={<ExhibitionPage/>}/>
                <Route path={'/exposition/:id'} element={<ExpositionPage/>}/>
                <Route path={'/expositions'} element={<ExpositionPage/>}/>
                <Route path={'/news/:id'} element={<NewPage/>}/>
                <Route path={'/news'} element={<NewPage/>}/>
                <Route path={'/store/:id'} element={<StorePage/>}/>
                <Route path={'/building/:id'} element={<BuildingPage/>}/>
                <Route path={'/about/:id'} element={<AboutPage/>}/>
                <Route path={'/about'} element={<AboutPage/>}/>
                <Route path={'/visitors/:id'} element={<VisitorsPage/>}/>
                <Route path={'/visitors'} element={<VisitorsPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    </AnimatePresence>
}

function App() {
    return <BrowserRouter>
                <AnimationRouter/>
            </BrowserRouter>
}

export default App;
