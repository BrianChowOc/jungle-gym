import { useState } from "react";

export interface CardCourseProps {
  title: string;
  description: string;
  image: string;
}

function CardCourse({ title, description, image }: CardCourseProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative text-white bg-black w-28 h-20 sm:w-40 sm:h-60 flex flex-col justify-end"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div className="h-full flex flex-col justify-center opacity-100 text-white gap-3 z-50 ">
          <div className="font-fredoka font-bold">{title}</div>
          <div className="text-xs">{description}</div>
        </div>
      )}
      {!isHovered && (
        <div className="flex flex-col justify-center items-center h-full w-full z-50 bg-red">
          <span className="flex flex-col justify-center h-full w-full font-fredoka text-md font-bold sm:justify-end sm:items-start sm:mb-3 sm:pl-4 sm:text-left">
            {title}
          </span>
        </div>
      )}
      <img
        className="absolute opacity-50 z-10 w-full h-full object-cover object-top"
        src={image}
        alt="Card image"
      />
    </div>
  );
}

export default CardCourse;
