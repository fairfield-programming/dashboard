import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
import Topbar from "../components/topbar";

export default function Views() {
    return (
        <>
            <Topbar />
            <Sidebar />
            <main>
                <div className="inner">
                    <Outlet />
                </div>
            </main>
        </>
    );
}