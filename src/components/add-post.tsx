import Image from "next/image"

const AddPost = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md flex gap-4 justify-between text-sm">
      {/* avatar */}
      <Image
        src="https://images.pexels.com/photos/28271529/pexels-photo-28271529/free-photo-of-palm-trees-and-the-sky-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
        alt="Avatar Image"
        className="w-12 h-12 object-cover rounded-full"
        width={48}
        height={48}
      />
      {/* POST */}
      <div className="flex-1">
        {/* text input */}
        <div className="flex gap-4">
            <textarea placeholder="What's on your mind ?" className="flex-1 bg-slate-200 rounded-lg p-2"></textarea>
            <Image 
                src="/emoji.png"
                alt="emoji"
                width={20}
                height={20}
                className="w-5 h-5 cursor-pointer self-end"
            />
        </div>
        {/* post options */}
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
            <div className="flex items-center gap-2 cursor-pointer">
                <Image 
                    src="/addImage.png"
                    alt="add image"
                    width={20}
                    height={20}
                />
                Photo
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
                <Image 
                    src="/addVideo.png"
                    alt="add video"
                    width={20}
                    height={20}
                />
                Video
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
                <Image 
                    src="/addEvent.png"
                    alt="add event"
                    width={20}
                    height={20}
                />
                Event
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
                <Image 
                    src="/poll.png"
                    alt="add poll"
                    width={20}
                    height={20}
                />
                Poll
            </div>
        </div>
      </div>
    </div>
  );
}
export default AddPost