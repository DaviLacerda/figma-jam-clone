import { useCallback } from "react";
import ReactFlow, {
    Controls,
    Background,
    useEdgesState,
    Connection,
    addEdge,
    ConnectionMode,
    useNodesState,
} from "reactflow";
import * as Toolbar from "@radix-ui/react-toolbar";
import * as Tooltip from "@radix-ui/react-tooltip";
import { Default } from "../Edges/Default";
import { Square } from "../Nodes/Square";
import { Circle } from "../Nodes/Circle";

import "reactflow/dist/style.css";
import { Triangle } from "../Nodes/Triangle";

const dotColor = "#E6E6E6";

const NODE_TYPES = {
    square: Square,
    circle: Circle,
    triangle: Triangle,
};

const EDGE_TYPES = {
    default: Default,
};

type nodeTypes = keyof typeof NODE_TYPES;

export function Canvas() {
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const [nodes, setNodes, onNodesChange] = useNodesState([]);

    const onConnect = useCallback((connection: Connection) => {
        return setEdges((edges) => addEdge(connection, edges));
    }, []);

    const handleAddNode = (type: nodeTypes) => {
        const centerOfScreen = {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
        };

        setNodes((nodes) => [
            ...nodes,
            {
                id: crypto.randomUUID(),
                type,
                position: centerOfScreen,
                data: {  },
            },
        ]);
    };

    return (
        <>
            <ReactFlow
                nodeTypes={NODE_TYPES}
                nodes={nodes}
                edgeTypes={EDGE_TYPES}
                edges={edges}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onNodesChange={onNodesChange}
                connectionMode={ConnectionMode.Loose}
                defaultEdgeOptions={{
                    type: "default",
                }}
                fitView={true}
                fitViewOptions={{
                    maxZoom: 0.75,
                }}
            >
                <Background gap={12} size={2} color={dotColor} />
                <Controls />
            </ReactFlow>
            <Toolbar.Root className="flex gap-4 fixed bottom-20 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-lg border border-zinc-300 px-8 h-20 w-fit">
                <Tooltip.Provider>
                    <Tooltip.Root>
                        <Tooltip.Trigger asChild>
                            <div className="w-fit overflow-hidden">
                                <Toolbar.Button
                                    className="w-32 h-32 bg-violet-500 rounded mt-6 transition-transform hover:-translate-y-2"
                                    onClick={() => handleAddNode("square")}
                                />
                            </div>
                        </Tooltip.Trigger>

                        <Tooltip.Content className="relative -top-5 bg-zinc-800 text-zinc-300 rounded-lg p-2">
                            Square
                        </Tooltip.Content>
                    </Tooltip.Root>
                </Tooltip.Provider>
                <Tooltip.Provider>
                    <Tooltip.Root>
                        <Tooltip.Trigger asChild>
                            <div className="overflow-hidden">
                                <Toolbar.Button
                                    className="w-32 h-32 bg-violet-500 rounded-full mt-6 transition-transform hover:-translate-y-2"
                                    onClick={() => handleAddNode("circle")}
                                />
                            </div>
                        </Tooltip.Trigger>

                        <Tooltip.Content className="relative -top-5 bg-zinc-800 text-zinc-300 rounded-lg p-2">
                            Circle
                        </Tooltip.Content>
                    </Tooltip.Root>
                </Tooltip.Provider>
                <Tooltip.Provider>
                    <Tooltip.Root>
                        <Tooltip.Trigger asChild>
                            <div className="overflow-hidden">
                                <Toolbar.Button
                                    className="w-32 h-32 bg-violet-500 mt-6 transition-transform hover:-translate-y-2"
                                    style={{
                                        clipPath:
                                            "polygon(50% 0%, 0 50%, 100% 50%)",
                                    }}
                                    onClick={() => handleAddNode("triangle")}
                                />
                            </div>
                        </Tooltip.Trigger>

                        <Tooltip.Content className="relative -top-5 bg-zinc-800 text-zinc-300 rounded-lg p-2">
                            Triangle
                        </Tooltip.Content>
                    </Tooltip.Root>
                </Tooltip.Provider>
            </Toolbar.Root>
        </>
    );
}
