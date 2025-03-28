"use client";
import React, { useState } from "react";
import FileUpload from "../components/FileUpload";
import PDFViewer from "@/components/PDFViewer";
import AnnotationToolbar from "@/components/AnnotationToolbar";
import { exportPDF } from "@/utils/exportPDF";
import { ToolType, Annotation } from "../app/types";

export default function Home() {
  const [file, setFile] = useState<string | null>(null);
  const [annotations, setAnnotations] = useState<Annotation[]>([]);
  const [selectedTool, setSelectedTool] = useState<ToolType>("highlight");

  const handleFileUpload = (pdf: File) => {
    setFile(URL.createObjectURL(pdf));
  };

  const handleExport = () => {
    if (file && annotations.length > 0) {
      exportPDF(file, annotations);
    } else {
      console.warn("No annotations to export!");
    }
  };

  const handleAddAnnotation = (newAnnotation: Annotation) => {
    setAnnotations((prevAnnotations) => [...prevAnnotations, newAnnotation]);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Document Signer & Annotation Tool</h1>

      {/* File Upload Component */}
      <FileUpload onFileUpload={handleFileUpload} />

      {/* Annotation Toolbar */}
      <AnnotationToolbar onSelectTool={setSelectedTool} />

      {/* PDF Viewer with Annotation Capability */}
      {file && <PDFViewer file={file} onAddAnnotation={handleAddAnnotation} selectedTool={selectedTool} />}

      {/* Export Button */}
      <button
        onClick={handleExport}
        className="mt-6 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all"
      >
        Export PDF
      </button>
    </div>
  );
}
