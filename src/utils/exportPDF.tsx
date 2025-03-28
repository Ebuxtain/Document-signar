import { PDFDocument, rgb } from "pdf-lib";
import { Annotation } from "../app/types";

export async function exportPDF(pdfFile: string, annotations: Annotation[]): Promise<void> {
  const existingPdfBytes = await fetch(pdfFile).then((res) => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  const page = pdfDoc.getPages()[0];

  annotations.forEach(({ type, color, position, text }) => {
    if (type === "highlight") {
      page.drawRectangle({
        x: position.x,
        y: position.y,
        width: 100,
        height: 10,
        color: rgb(...color),
        opacity: 0.5,
      });
    }
    if (type === "underline") {
      page.drawLine({
        start: { x: position.x, y: position.y },
        end: { x: position.x + 100, y: position.y },
        thickness: 2,
        color: rgb(...color),
      });
    }
    if (type === "comment" && text) {
      page.drawText(text, {
        x: position.x,
        y: position.y,
        size: 10,
        color: rgb(0, 0, 0),
      });
    }
  });

  const modifiedPdfBytes = await pdfDoc.save();
  const blob = new Blob([modifiedPdfBytes], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "annotated.pdf";
  link.click();
}
