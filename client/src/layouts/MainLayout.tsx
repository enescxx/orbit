import { Outlet } from "react-router-dom";

import {
    LayoutDashboard,
    MessageCircleMore,
    CalendarDays,
    CircleCheckBig,
    NotebookPen,
    Settings,
    Settings2,
    ChevronsUpDown,
    AtSign,
    SendHorizontal,
    CalendarClock,
    Hash,
    CircleUserRound,
    Plus,
    FileText,
    Image
} from "lucide-react";

import List from "../components/List";
import NavLink from "../components/NavLink";
import SidebarLink from "../components/SidebarLink";

function MainLayout() {
    const topNavBarItems = [
        { icon: LayoutDashboard, to: "/dashboard" },
        { icon: MessageCircleMore, to: "/channels/1/1" },
        { icon: CalendarDays, to: "/calendar" },
        { icon: CircleCheckBig, to: "/tasks" },
        { icon: NotebookPen, to: "/notes" }
    ];

    const bottomNavBarItems = [
        {
            icon: Settings2,
            onClick: () => {}
        },
        { icon: Settings, to: "/settings" }
    ];

    return (
        <div className="bg-[#F7F7F7] w-full h-dvh flex overflow-hidden p-2 gap-1">
            {/* ---NAVBAR--- */}
            <aside className="w-[40px] flex-none flex flex-col items-center">
                <div className="flex-1 flex flex-col items-center">
                    <div className="w-8 h-8 bg-[#745CF4] rounded-lg mb-4" />
                    <List data={topNavBarItems} item={NavLink} />
                </div>
                <List data={bottomNavBarItems} item={NavLink} />
            </aside>
            {/* ---MAIN CONTENT--- */}
            <main className="flex-1 h-full">
                <Outlet />
            </main>
        </div>
    );
}

export default MainLayout;
