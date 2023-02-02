import { Handle, NodeProps, Position } from "reactflow";
import { StyledNodeResizer } from "../StyledNodeResizer";

export function Triangle({ selected }: NodeProps) {
    return (
        <>
            <div 
                className="bg-violet-500 w-full h-full min-w-[128px] min-h-[128px]"
                style={{clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)"}}
            />
            <Handle
                type="source"
                id="top"
                position={Position.Top}
                className="-top-5 w-2 h-2 bg-white border border-blue-400"
            />
            <Handle
                type="source"
                id="right"
                position={Position.Right}
                className="right-3 w-2 h-2 bg-white border border-blue-400"
            />
            <Handle
                type="source"
                id="bottom"
                position={Position.Bottom}
                className="-bottom-5 w-2 h-2 bg-white border border-blue-400"
            />
            <Handle
                type="source"
                id="left"
                position={Position.Left}
                className="left-3 w-2 h-2 bg-white border border-blue-400"
            />
            <StyledNodeResizer selected={selected} />
        </>
    )
}
