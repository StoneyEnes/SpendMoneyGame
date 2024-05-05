import PersonInfoImage from "../Assets/personimage.jpg"

export default function PersonInfo() {
    return (
        <div className="w-[60rem] min-h-80 bg-white mt-6 gap-y-8 items-center flex-col justify-center flex">
            <img src={PersonInfoImage} className="w-32 h-32 rounded-full" alt=""/>
            <p className="text-3xl font-bold">Spend Bill Gates&apos;s Money</p>
        </div>
    );
}