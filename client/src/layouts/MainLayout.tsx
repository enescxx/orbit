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
        { icon: LayoutDashboard, active: false },
        { icon: MessageCircleMore, active: true },
        { icon: CalendarDays, active: false },
        { icon: CircleCheckBig, active: false },
        { icon: NotebookPen, active: false }
    ];

    const bottomNavBarItems = [{ icon: Settings2 }, { icon: Settings }];

    const quickAccessItems = [
        { icon: AtSign, text: "Mentions", active: false },
        { icon: SendHorizontal, text: "Draft and Sent", active: false },
        { icon: CalendarClock, text: "Events", active: false }
    ];

    const favoriteItems = [
        { icon: Hash, text: "Favorite 1", active: false },
        { icon: Hash, text: "Favorite 2", active: true }
    ];

    const channelsItems = [
        { icon: Hash, text: "Channel 1", active: false },
        { icon: Hash, text: "Channel 2", active: false },
        { icon: Hash, text: "Channel 3", active: false },
        { icon: Hash, text: "Channel 4", active: false },
        { icon: Hash, text: "Channel 5", active: false },
        { icon: Plus, text: "Add Channel" }
    ];

    const directMessageItems = [
        { icon: CircleUserRound, text: "Person 1", active: false },
        { icon: CircleUserRound, text: "Person 2", active: false },
        { icon: CircleUserRound, text: "Person 3", active: false },
        { icon: CircleUserRound, text: "Person 4", active: false },
        { icon: Plus, text: "Invite People" }
    ];

    const teamMembersItems = [
        { icon: CircleUserRound, text: "Person 1", active: false },
        { icon: CircleUserRound, text: "Person 2", active: false },
        { icon: CircleUserRound, text: "Person 3", active: false },
        { icon: CircleUserRound, text: "Person 4", active: false },
        { icon: Plus, text: "Invite People" }
    ];

    const filesItems = [
        { icon: FileText, text: "File 1" },
        { icon: FileText, text: "File 2" },
        { icon: Image, text: "Image 1" },
        { icon: Image, text: "Image 2" },
        { icon: FileText, text: "File 3" }
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
            {/* ---LEFT SIDEBAR--- */}
            <aside className="w-64 p-2">
                <div className="flex items-centers justify-between px-4 py-2 rounded-2xl bg-[#F2F2F2] border border-[#E7E7E7] font-bold mb-4 text-[#515055]">
                    <div>Workspace1</div>
                    <ChevronsUpDown
                        strokeWidth={1.5}
                        className="text-[#B1B2B6]"
                    />
                </div>
                <List data={quickAccessItems} item={SidebarLink} />
                <div className="h-0.5 bg-[#F2F2F2] my-2" />
                <div className="ml-2 text-sm font-bold text-[#B1B2B6] mb-2">
                    FAVORITES
                </div>
                <List data={favoriteItems} item={SidebarLink} />
                <div className="h-0.5 bg-[#F2F2F2] my-2" />
                <div className="ml-2 text-sm font-bold text-[#B1B2B6] mb-2">
                    CHANNELS
                </div>
                <List data={channelsItems} item={SidebarLink} />
                <div className="h-0.5 bg-[#F2F2F2] my-2" />
                <div className="ml-2 text-sm font-bold text-[#B1B2B6] mb-2">
                    DIRECT MESSAGES
                </div>
                <List data={directMessageItems} item={SidebarLink} />
            </aside>
            {/* ---MAIN CONTENT--- */}
            <main className="flex-1 h-full rounded-2xl bg-[#FDFDFD] shadow-2xl">
                <Outlet />
            </main>
            {/* ---RIGHT SIDEBAR--- */}
            <aside className="w-72 p-2">
                <div className="flex items-center justify-between gap-2 items-stretch h-12">
                    <input
                        className="bg-[#F2F2F2] focus:outline-none border-2 border-[#E7E7E7] rounded-full px-4 py-2 mb-2 text-[#515055] flex-1 max-w-[225px]"
                        placeholder="Search..."
                    />
                    <div className="bg-[#745CF4] rounded-full mb-2 flex-none aspect-square" />
                </div>

                <div className="h-0.5 bg-[#F2F2F2] my-2" />
                <div className="ml-2 text-sm font-bold text-[#B1B2B6] mb-2">
                    TEAM MEMBERS
                </div>
                <List data={teamMembersItems} item={SidebarLink} />
                <div className="h-0.5 bg-[#F2F2F2] my-2" />
                <div className="ml-2 text-sm font-bold text-[#B1B2B6] mb-2">
                    FILES
                </div>
                <List data={filesItems} item={SidebarLink} />
            </aside>
        </div>
    );
}

export default MainLayout;
