
export type ToolType = "highlight" | "underline" | "comment" | "signature";

export interface Annotation {
  type: ToolType;
  color: [number, number, number]; 
  position: { x: number; y: number };
  text?: string;
}
