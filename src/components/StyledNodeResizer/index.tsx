import { NodeResizer } from "@reactflow/node-resizer";

interface StyledNodeResizerProps {
    selected: boolean;
}

export function StyledNodeResizer({ selected }: StyledNodeResizerProps){
    if(selected){
        return (
            <NodeResizer
                minWidth={128}
                minHeight={128}
                lineClassName="border-blue-400"
                handleClassName="h-3 w-3 bg-white border-2 rounded border-blue-400"
            />
        )
    }

    return null;
}