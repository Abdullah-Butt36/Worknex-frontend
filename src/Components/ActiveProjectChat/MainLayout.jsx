import React, { useState } from "react";
import Sidebar from "./Sidebar";
import ChatWindow from "./ChatWindow";
import CommunicationPopup from "./CommunicationPopup";

const MainLayout = () => {
  const [showNotice, setShowNotice] = useState(true);

  return (
    <div className="flex h-screen w-full bg-[#06110D] overflow-hidden relative">
      <Sidebar />

      <main className="flex-1 flex flex-col min-w-0 bg-[#06110D] relative">
        <ChatWindow />

        {showNotice && (
          <div className="absolute inset-0 z-[80] bg-black/60 pointer-events-auto" />
        )}

        <CommunicationPopup
          isOpen={showNotice}
          onClose={() => setShowNotice(false)}
        />
      </main>
    </div>
  );
};

export default MainLayout;
