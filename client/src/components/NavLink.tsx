import React from "react";
import { Link, useLocation } from "react-router-dom";

interface INavLinkProps {
    data: {
        icon: React.ElementType;
        to?: string;
        onClick?: () => void;
    };
}

function NavLink({ data }: INavLinkProps) {
    const { icon: Icon, to, onClick } = data;

    const location = useLocation();
    const isActive = to ? location.pathname.startsWith(to) : false;

    if (!Icon) return null;
    return (
        <Link to={to}>
            <div
                onClick={onClick}
                className={`w-8 h-8 rounded-2xl mb-2 flex items-center justify-center ${isActive ? "shadow text-[#745CF4] bg-white" : "text-[#515055]"}`}
            >
                <Icon strokeWidth={1.5} className="w-4 h-4" />
            </div>
        </Link>
    );
}

export default NavLink;
