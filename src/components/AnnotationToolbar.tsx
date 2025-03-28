import React from "react";
import { ToolType } from "../app/types";

interface AnnotationToolbarProps {
  onSelectTool: (tool: ToolType) => void;
}

export default function AnnotationToolbar({ onSelectTool }: AnnotationToolbarProps) {
  return (
    <div className="flex space-x-4 bg-white p-2 rounded-lg shadow-md">
      {(["highlight", "underline", "comment", "signature"] as ToolType[]).map((tool) => (
        <button
          key={tool}
          onClick={() => onSelectTool(tool)}
          className="px-3 py-1 bg-gray-200 text-black rounded-md shadow-md hover:bg-gray-300 transition-all"
        >
          {tool.charAt(0).toUpperCase() + tool.slice(1)}
        </button>
      ))}
    </div>
  );
}
