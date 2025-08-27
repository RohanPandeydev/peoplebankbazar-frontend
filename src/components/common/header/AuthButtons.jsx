import React from "react";
import Button from "../../ui/Button";
import { MdWifiCalling3 } from "react-icons/md";

const AuthButtons = ({ setActiveModal }) => {
  return (
    <div className="flex space-x-4">
      <Button className="border border-[#007AFF] p-2 text-sm bg-transparent flex items-center gap-2 text-[#007AFF] rounded-lg"
        onClick={() => setActiveModal("register")} icon={MdWifiCalling3}>
        Talk To Expert
      </Button>

      <Button className="border border-[#007AFF] py-2 px-4 text-sm bg-transparent flex items-center gap-2 text-[#007AFF] rounded-lg"
        onClick={() => setActiveModal("signin")}>
        Sign In
      </Button>
    </div>
  );
};

export default AuthButtons;
