import { useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import Logo from '../assets/svg/out-logo.svg'
import Profile from '../assets/svg/profile.svg'

function VideoHeader() {
  const navigate = useNavigate();
  return (
    <div className="container flex items-center justify-between px-8 md:px-20 py-3">
      <div
        className="cursor-pointer -ml-5 md:-ml-0"
        onClick={() => navigate("/")}
      >
        <img src={Logo} alt="logo" />
      </div>
      <div className="flex items-center gap-2">
        <div>
          <img src={Profile} alt="profile-circle-icon" />
        </div>
        <div className="flex items-center gap-2">
          <p className="feat-four font-normal text-base text-[#141414]">
            John Mark
          </p>
          <div className="cursor-pointer">
            <IoIosArrowDown size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoHeader;