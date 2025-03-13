import { FaHeart } from "react-icons/fa6";
import { FaComment } from "react-icons/fa";

export interface CardInstagramProps {
  href: string;
  image: string;
  description: string;
  likes: string;
  comments: string;
}

function CardInstagram({
  href,
  image,
  description,
  likes,
  comments
}: CardInstagramProps) {
  return (
    <a href={href} className="text-white no-underline" target="_blank">
      <div className="flex flex-col w-[179px]">
        <img src={image} height={179} width={179} />
        <div className="truncate">{description}</div>
        <div className="flex justify-around">
          <div className="flex items-center">
            {/* <FaHeart />  */}
            {likes}
          </div>
          <div className="flex items-center">
            {/* <FaComment /> */}
            {comments}
          </div>
        </div>
      </div>
    </a>
  );
}

export default CardInstagram;
