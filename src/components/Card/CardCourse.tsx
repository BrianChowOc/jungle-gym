export interface CardCourseProps {
  title: string;
  description: string;
  image: string;
}

function CardCourse({ title, description, image }: CardCourseProps) {
  return (
    <div className="relative text-white bg-black w-28 h-20 sm:w-40 sm:h-60 flex flex-col justify-end">
      <div className="flex flex-col justify-center items-center h-full w-full z-50">
        <span className="flex flex-col justify-center h-full w-full font-fredoka text-md font-bold sm:justify-end sm:items-start sm:mb-3 sm:pl-4 sm:text-left">
          {title}
        </span>
        <span className="hidden">{description}</span>
      </div>
      <img
        className="absolute opacity-50 z-10 w-full h-full object-cover object-top"
        src={image}
        alt="Card image"
      />
    </div>
  );
}

export default CardCourse;
