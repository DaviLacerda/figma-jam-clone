import { useState } from "react";
import { NodeProps } from "reactflow";
import { StyledNodeResizer } from "../StyledNodeResizer";
import { Default } from "./Default";

export function Square({ selected}: NodeProps) {
    const [text, setText] = useState("Square");
    
    return (
        <div className="flex items-center justify-center bg-violet-500 rounded w-full h-full min-w-[128px] min-h-[128px]">
            <Default />
            <StyledNodeResizer selected={selected} />
            
        </div>
    )
}
