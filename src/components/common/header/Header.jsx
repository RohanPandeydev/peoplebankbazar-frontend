import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import SignInModal from "../auth/SignInModal";
import OtpModal from "../auth/OtpModal";
import RegistrationModal from "../auth/RegistrationModal";
import RoutesPath from "../../../routes";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  // Prevent body scroll when mobile menu or modal open
  useEffect(() => {
    document.body.style.overflow =
      isMobileMenuOpen || activeModal ? "hidden" : "auto";
  }, [isMobileMenuOpen, activeModal]);

  return (
    <header className="shadow-md bg-white fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Logo />

        {/* Desktop Navigation */}
        <DesktopNav
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
          setActiveModal={setActiveModal}
        />

        {/* Mobile Navigation */}
        <MobileNav
          isOpen={isMobileMenuOpen}
          setIsOpen={setIsMobileMenuOpen}
          setActiveModal={setActiveModal}
        />
      </div>

      {/* Modals */}
      {activeModal === "signin" && (
        <SignInModal
        onSubmitPhone={() => setActiveModal("otp")}
         onClose={() => setActiveModal(null)} />
      )}
      {activeModal === "otp" && (
        <OtpModal
          onClose={() => setActiveModal(null)}
          phoneNumber={userPhone}
          onSuccess={() => navigate(RoutesPath.HOME)} // ✅ central control
        />
      )}
      {activeModal === "register" && (
        <RegistrationModal onClose={() => setActiveModal(null)} />
      )}
    </header>
  );
};

export default Header;
