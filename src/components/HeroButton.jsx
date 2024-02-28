import { HiOutlineDownload } from "react-icons/hi";
import { RiKakaoTalkLine } from "react-icons/ri";

const HeroButton = ({ title, icon, id }) => {
  return (
    <div className="hero-button">
      <div className="buttons">
        {icon === "cv" && (
          <a
            href="/public/cv/Md_Sajib_Shikder.pdf"
            download={"Md_Sajib_Shikder.pdf"}
            className="flex justify-center items-center gap-2 cv-down btn-hover color-1"
          >
            <span>{title}</span>
            <span>
              <HiOutlineDownload />
            </span>
          </a>
        )}
        {icon === "talk" && (
          <a
            href={`#${id}`}
            className={`flex justify-center items-center gap-2 talk-btn btn-hover color-2`}
          >
            <span>{title}</span>
            <span>
              <RiKakaoTalkLine size={25} />
            </span>
          </a>
        )}
      </div>
    </div>
  );
};

export default HeroButton;
