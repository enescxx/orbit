import React from "react";

interface IListProps<T> {
    data: T[];
    title?: string;
    item?: React.FC<{ data: T }>;
}

function List<T extends {}>({ data, title, item: Item }: IListProps<T>) {
    return (
        <>
            {title && <div className="font-bold text-md">{title}</div>}
            {data.map((item, index) => (
                <Item key={index} data={item} />
            ))}
        </>
    );
}

export default List;
