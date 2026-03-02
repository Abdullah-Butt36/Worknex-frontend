import React, { useState } from "react";
import NavbarMessages from "./NavbarMessages";
import MessageSidebar from "./MessageSidebar";
import ChatWindow from "./ChatWindow";

const MessageCenterPage = () => {
  // Chat data array
  const conversations = [
    {
      id: 1,
      title: "Desarrollo Web E-commerce",
      client: "Carlos M.",
      status: "Conversación activa",
      msg: "Hola, adjunto los archivos...",
      time: "10:42 AM",
    },
    {
      id: 2,
      title: "Diseño de Logo Corporativo",
      client: "Lucía G.",
      status: "Pendiente",
      msg: "¿Podemos agendar una call?",
      time: "09:15 AM",
    },
    {
      id: 3,
      title: "Consultoría SEO - Organic",
      client: "Marcos R.",
      status: "En pausa",
      msg: "Excelente, quedamos a la espera...",
      time: "Ayer",
    },
  ];

  // Selection states
  const [selectedChat, setSelectedChat] = useState(conversations[0]);
  const [showChatMobile, setShowChatMobile] = useState(false);

  const handleChatSelect = (chat) => {
    setSelectedChat(chat);
    setShowChatMobile(true);
  };

  return (
    <div className="h-screen bg-[#060B15] flex flex-col font-sans text-white overflow-hidden">
      <NavbarMessages />

      <div className="flex flex-1 overflow-hidden relative">
        <aside
          className={`${showChatMobile ? "hidden md:flex" : "flex"} w-full md:w-[350px] lg:w-[400px] border-r border-gray-800/50 bg-[#0B1221]/20`}
        >
          <MessageSidebar
            conversations={conversations}
            activeId={selectedChat.id}
            onSelectChat={handleChatSelect}
          />
        </aside>

        <main
          className={`${showChatMobile ? "flex" : "hidden md:flex"} flex-1 flex-col`}
        >
          <ChatWindow
            chatData={selectedChat}
            onBack={() => setShowChatMobile(false)}
          />
        </main>
      </div>
    </div>
  );
};

export default MessageCenterPage;
