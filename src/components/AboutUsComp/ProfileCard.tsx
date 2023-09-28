import SocialLinks from "./SocialLinks";

const ProfileCard = () => {
  return (
    <div className="panel col-span-full mb-3">
      <div className="relative h-28 p-4  mb-20">
        <div className="absolute w-full h-full top-0 left-0 will-change-transform backfacevisibility overflow-hidden bg-cover bg-center bg-no-repeat z-0 bg-[url('/sunrise.jpg')]"></div>
        <div className="absolute bottom-0 h-40 w-40 translate-y-1/2 inline-block">
          <img
            className="w-full h-full object-cover overflow-hidden rounded-full p-1 block bg-white border border-spacing-1"
            width={600}
            height={600}
            src="profile2.png"
            alt=""
          />
        </div>
      </div>
      <div className="grid gap-3 grid-rows-1 grid-cols-1 md:grid-cols-3 p-4">
        <div className="inline-block md:col-start-1 md:col-end-3 col-span-full pb-5">
          <div className="text-2xl font-medium">BAISETTY BHARATH KUMAR</div>
          <div className="text-lg font-normal">Senior UI Developer at IBM</div>
          <div className="text-xl font-thin text-gray-500">
            Hyderabad, India
          </div>
          <div className="text-gray-400">Email address</div>
          <a
            href="mailto:bharath.baisetty@gmail.com"
            className="text-blue-800 hover:underline"
          >
            bharath.baisetty@gmail.com
          </a>
          <div className="font-normal text-blue-800">
            <div className="text-gray-400">Phone number</div>
            +91 9391431530
          </div>
        </div>
        <hr className="pb-5 md:hidden" />
        <SocialLinks />
      </div>
    </div>
  );
};

export default ProfileCard;
