import { HiOutlineDownload } from "react-icons/hi";

const DownloadCV = () => {
  return (
    <div className="download-cv">
      <a
        href="/public/cv/Md_Sajib_Shikder.pdf"
        download={"Md_Sajib_Shikder.pdf"}
        className="flex justify-center items-center gap-2 bg-green-400"
      >
        <span>Download CV</span>
        <span>
          <HiOutlineDownload />
        </span>
      </a>
    </div>
  );
};

export default DownloadCV;
