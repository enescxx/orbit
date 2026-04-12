import React from "react";

interface INavLinkProps {
    data: {
        icon?: React.ElementType;
        active?: boolean;
    };
    onClick?: () => void;
}

function NavLink({ data, onClick }: INavLinkProps) {
    const { icon: Icon, active } = data;

    if (!Icon) return null;
    return (
        <div
            className={`w-8 h-8 rounded-2xl mb-2 flex items-center justify-center ${active ? "shadow text-[#745CF4] bg-white" : "text-[#515055]"}`}
        >
            <Icon strokeWidth={1.5} className="w-4 h-4" />
        </div>
    );
}

export default NavLink;
