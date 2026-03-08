import type { ReactFlowInstance } from "@xyflow/react";
import { atom } from "jotai";

export const editAtom=atom<ReactFlowInstance | null>(null) 