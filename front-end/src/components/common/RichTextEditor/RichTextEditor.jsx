import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles

const RichTextEditor = ({ value, onChange, placeholder }) => {
  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike"],
      [{ align: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image", "video"],
      ["clean"], // Clear formatting
    ],
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "align",
    "list",
    "bullet",
    "link",
    "image",
    "video",
  ];

  return (
    <div
      style={{
        borderRadius: "8px",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
        overflow: "hidden", // Ensures rounded corners for Quill content
      }}
    >
      <ReactQuill
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        modules={modules}
        formats={formats}
        style={{
          height: "300px",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          color: "#1D3557", // Matches text color to your design
        }}
      />
    </div>
  );
};

export default RichTextEditor;
