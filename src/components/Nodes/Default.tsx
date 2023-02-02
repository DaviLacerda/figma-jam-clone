import { Handle, Position } from "reactflow";
import '@reactflow/node-resizer/dist/style.css';

export function Default() {
    return (
        <>
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
                className="-right-5 w-2 h-2 bg-white border border-blue-400"
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
                className="-left-5 w-2 h-2 bg-white border border-blue-400"
            />
        </>
    );
}
