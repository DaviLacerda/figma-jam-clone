import { Handle, NodeProps, Position } from "reactflow";
import { StyledNodeResizer } from "../StyledNodeResizer";
import { Default } from "./Default";

export function Circle({ selected }: NodeProps) {
    return (
        <div className="bg-violet-500 rounded-full w-full h-full min-w-[128px] min-h-[128px]">
            <Default />
            <StyledNodeResizer selected={selected} />
        </div>
    )
}
