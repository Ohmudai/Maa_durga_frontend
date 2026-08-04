import {ReactNode} from "react";

export default function Container({children}: {children: React.ReactNode}) {
    return (
        <div className="max-w-7xl mx-auto px-4 mt-20">
            {children}
        </div>
    );
}