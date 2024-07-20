import React, { useState, useEffect } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import styled from "styled-components";

const PDFContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
`;

const PDFViewer = styled.div`
  width: 80%;
  height: 80%;
  border: 2px solid #dee2e6;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const LoadingMessage = styled.div`
  font-size: 1.5em;
  color: #343a40;
`;

const ErrorMessage = styled.div`
  font-size: 1.5em;
  color: #e3342f;
`;

const App = () => {
  const [pdfUrl, setPdfUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Replace this with your Google Drive PDF link
    const googleDriveLink =
      "https://drive.google.com/file/d/107bUsaCrJiRgwj4VVA-mO2gjNgDnHHRl/view";

    // Simulate fetching the PDF URL
    setTimeout(() => {
      setPdfUrl(googleDriveLink);
      setLoading(false);
    }, 1000); // Adjust the delay as needed

    // Handle errors (example purpose)
    if (!googleDriveLink) {
      setError(true);
      setLoading(false);
    }
  }, []);

  return (
    <PDFContainer>
      {loading ? (
        <LoadingMessage>Loading PDF...</LoadingMessage>
      ) : error ? (
        <ErrorMessage>Error loading PDF</ErrorMessage>
      ) : (
        <PDFViewer>
          <Worker
            workerUrl={`https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js`}
          >
            <Viewer fileUrl={pdfUrl} />
          </Worker>
        </PDFViewer>
      )}
    </PDFContainer>
  );
};

export default App;
