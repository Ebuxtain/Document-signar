

'useclient'

import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Annotation, ToolType } from "../app/types";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface PDFViewerProps {
  file: string | File | null;
  onAddAnnotation?: (annotation: Annotation) => void;
  selectedTool: ToolType;
}

export default function PDFViewer({ file, onAddAnnotation, selectedTool }: PDFViewerProps) {
  return (
    <div className="w-full h-[500px] overflow-auto border rounded-lg shadow-md bg-white p-4">
      {file && (
        <Document file={file}>
          <Page pageNumber={1} />
        </Document>
      )}
    </div>
  );
}
