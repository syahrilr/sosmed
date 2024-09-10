import Image from "next/image"

const Comments = () => {
  return (
    <div>
      {/* Write */}
      <div className="flex items-center gap-4">
        <Image
          src="https://images.pexels.com/photos/28096451/pexels-photo-28096451/free-photo-of-an-old-man-standing-in-front-of-a-gate.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt=""
          width={32}
          height={32}
          className="w-8 h-8 rounded-full"
        />
        <div className="flex items-center justify-between bg-slate-200 rounded-xl w-full text-sm px-6 py-2 ">
            <input type="text" placeholder="Write a commnet..." className="bg-transparent outline-none"/>
            <Image src="/emoji.png" alt="emoji" width={16} height={16} className="cursor-pointer"/>
        </div>
      </div>
      {/* Comments */}
      <div className="">
        {/* Comment */}
        <div>
            {/* avatar */}
        </div>
      </div>
    </div>
  );
}
export default Comments