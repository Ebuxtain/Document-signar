import React from "react";
import { ToolType } from "../app/types";

interface AnnotationToolbarProps {
  onSelectTool: (tool: ToolType) => void;
}

export default function AnnotationToolbar({ onSelectTool }: AnnotationToolbarProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 sm:space-x-4 bg-white p-2 rounded-lg shadow-md w-full max-w-md">
      {(["highlight", "underline", "comment", "signature"] as ToolType[]).map((tool) => (
        <button
          key={tool}
          onClick={() => onSelectTool(tool)}
          className="px-3 py-1 bg-gray-200 text-black rounded-md shadow-md hover:bg-gray-300 transition-all text-sm sm:text-base"
        >
          {tool.charAt(0).toUpperCase() + tool.slice(1)}
        </button>
      ))}
    </div>
  );
}
