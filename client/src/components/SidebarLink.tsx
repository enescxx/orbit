interface ISidebarLinkProps {
    data: {
        icon: React.ElementType;
        text: string;
        active?: boolean;
    };
    onClick?: () => void;
}

function SidebarLink({ data, onClick }: ISidebarLinkProps) {
    const { icon: Icon, text, active } = data;
    return (
        <div
            className={`flex items-center gap-1 px-2 py-0.5 mb-0.5 rounded-2xl ${active ? "font-bold text-[#515055] bg-white shadow" : "text-sm text-[#515055]"}`}
        >
            <Icon
                strokeWidth={1.5}
                className={`w-4 h-4 ${active && "text-[#745CF4]"}`}
            />
            <div>{text}</div>
        </div>
    );
}

export default SidebarLink;
