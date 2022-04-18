import { Outlet, Link } from "react-router-dom";
import Sidebar from "../components/sidebar";

export default function Views() {
    return (
        <>
            <Sidebar />
            <main>
                <div className="inner">
                    <Outlet />
                </div>
            </main>
        </>
    );
}