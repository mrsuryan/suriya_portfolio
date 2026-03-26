import { PERSONAL } from "../data";

/**
 * Animated download button with bouncing arrow icon.
 * Update PERSONAL.resumePath in data.js to point to your PDF.
 *
 * @param {string} label     - button text
 * @param {string} className - CSS class(es) to apply
 */
export default function DownloadBtn({ label = "Resume", className = "dl-btn" }) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href     = PERSONAL.resumePath;
    link.download = "Suriya_Resume.pdf";
    link.click();
  };

  return (
    <button className={className} onClick={handleDownload}>
      {label}
    </button>
  );
}
