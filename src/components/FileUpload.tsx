import React from "react";
import { useDropzone } from "react-dropzone";

interface FileUploadProps {
  onFileUpload: (file: File) => void;
}

export default function FileUpload({ onFileUpload }: FileUploadProps) {
  const { getRootProps, getInputProps } = useDropzone({
    accept: { "application/pdf": [".pdf"] },
    onDrop: (acceptedFiles) => {
      onFileUpload(acceptedFiles[0]);
    },
  });

  return (
    <div
      {...getRootProps()}
      className="border-2 border-dashed p-4 rounded-md cursor-pointer text-center w-full max-w-md mx-auto bg-white shadow-md hover:bg-gray-50 transition-all"
    >
      <input {...getInputProps()} />
      <p className="text-gray-600 text-sm sm:text-base">Drag & Drop a PDF or click to select one</p>
    </div>
  );
}