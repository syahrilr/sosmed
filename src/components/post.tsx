import Image from "next/image";
import Comments from "./comments";

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/*User*/}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/19458888/pexels-photo-19458888/free-photo-of-view-of-the-bode-museum-and-berliner-fernsehturm-in-berlin-germany.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            alt="User Image"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">Maul Cuki</span>
        </div>
        <Image src="/more.png" width={16} height={16} alt="more" />
      </div>
      {/*Desc*/}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src="https://images.pexels.com/photos/27048758/pexels-photo-27048758/free-photo-of-artistic-photo-of-white-lily-flowers.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            alt="image"
            fill
            className="object-cover rounded-md"
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam enim
          rem magnam culpa non voluptate possimus nihil quidem iste eius
          assumenda mollitia quos ullam doloribus harum qui, sequi libero
          officiis!
        </p>
      </div>
      {/*Interaction*/}
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
            <Image
              src="/like.png"
              width={16}
              height={16}
              alt="like"
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              120<span className="hidden md:inline"> Likes</span>
            </span>
          </div>
          <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
            <Image
              src="/comment.png"
              width={16}
              height={16}
              alt="like"
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              90<span className="hidden md:inline"> Comments</span>
            </span>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
            <Image
              src="/share.png"
              width={16}
              height={16}
              alt="like"
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              89<span className="hidden md:inline"> Shares</span>
            </span>
          </div>
        </div>
      </div>
      <Comments />
    </div>
  );
};
export default Post;
