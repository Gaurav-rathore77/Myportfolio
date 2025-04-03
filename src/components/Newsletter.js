import { useState } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import axios from "axios";

export const Newsletter = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [preview, setPreview] = useState(null);

  // Handle file selection
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile)); // Show image preview
    }
  };

  // Handle file upload
  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      setMessage("Please select an image first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("http://localhost:5000/api/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMessage(res.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || "File upload failed");
    }
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Upload Your Image<br /> & Share with Us</h3>
            {message && <Alert variant={message.includes("success") ? "success" : "danger"}>{message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleUpload}>
              <div className="new-email-bx">
                <input type="file" accept="image/*" onChange={handleFileChange} />
                <button type="submit">Upload</button>
              </div>
            </form>
            {preview && (
              <div className="image-preview">
                <img src={preview} alt="Preview" style={{ width: "100px", marginTop: "10px", borderRadius: "5px" }} />
              </div>
            )}
          </Col>
        </Row>
      </div>
    </Col>
  );
};
