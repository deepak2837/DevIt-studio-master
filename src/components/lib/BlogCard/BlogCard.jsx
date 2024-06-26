// import image from "../../../assets/blogImage.webp";
import { Link } from "react-router-dom";

function BlogCard({ title, span , value, image}) {
  console.log(value)
  return (
    <Link to={`/blog/${"12" + value}`}>
      <div className="col-span-1 w-full rounded overflow-hidden shadow-md bg-white">
        <div className="group cursor-pointer overflow-hidden">
          <img
            className="w-full object-cover ease-in-out duration-700 group-hover:scale-110"
            src={image}
            alt=""
          />
        </div>
        <div className="px-6 pt-4 text-start">
          <span className="inline-block uppercase bg-indigo-50 rounded px-3  py-1 text-xs font-semibold text-gray-700 mr-2">
            {span}
          </span>
        </div>
        <div className="px-6 py-4 text-start">
          <div className="font-bold text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl mb-2">
            {title}
          </div>
          <p className="text-gray-700 text-sm ">
           
          </p>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
