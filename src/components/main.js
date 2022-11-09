import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Main = () => {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    );
};

export default Main;