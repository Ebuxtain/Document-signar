"use client";

import React, { useState } from "react";
import FileUpload from "../components/FileUpload";
import AnnotationToolbar from "../components/AnnotationToolbar";
import { ToolType } from "../app/types";

export default function Home() {
  const [file, setFile] = useState<string | null>(null);
  const [selectedTool, setSelectedTool] = useState<ToolType>("highlight");

  const handleFileUpload = (pdf: File) => {
    setFile(URL.createObjectURL(pdf));
  };

  const handleExport = () => {
    if (file) {
      const link = document.createElement("a");
      link.href = file;
      link.download = "exported.pdf";
      link.click();
    } else {
      console.warn("No PDF file to export!");
    }
  };

  return (
    <div className="p-4 sm:p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 text-center">
        Document Signer & Annotation Tool
      </h1>

      {/* File Upload Component */}
      <div className="w-full max-w-lg">
        <FileUpload onFileUpload={handleFileUpload} />
      </div>

      {/* Annotation Toolbar */}
      {file && (
        <div className="w-full flex justify-center mt-4 px-2 sm:px-4">
          <AnnotationToolbar onSelectTool={setSelectedTool} />
        </div>
      )}

      {/* Display the PDF in viewport */}
      {file && (
        <iframe
          src={file}
          className="w-full max-w-4xl h-[500px] sm:h-[600px] mt-4 border rounded-lg shadow-md bg-white"
        ></iframe>
      )}

      {/* Export PDF Button */}
      {file && (
        <button
          onClick={handleExport}
          className="mt-6 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all w-full max-w-xs sm:max-w-sm"
        >
          Export PDF
        </button>
      )}
    </div>
  );
}
