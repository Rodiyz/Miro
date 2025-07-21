import { useState } from "react";

type NodeBase = {
  id: string;
  type: string;
};

type StickerNode = NodeBase & {
  type: "sticker";
  x: number;
  y: number;
  text: string;
};

type Node = StickerNode;

export function useNodes() {
  
  const [nodes] = useState<Node[]>([
    {
      id: "1",
      type: "sticker",
      x: 100,
      y: 100,
      text: "Hello",
    },
    {
      id: "2",
      type: "sticker",
      x: 200,
      y: 200,
      text: "Hello",
    },
  ]);

  return {
    nodes,
  }
}