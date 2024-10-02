"use client"
import React from "react";
import Sidebar from "@components/Sidebar";
import Chat from "@components/Chat";
import { useChat } from "@context/ChatContext"
import { useSession } from "next-auth/react";

function Home() {
  const { chats, loadChats } = useChat();
  const { data: session } = useSession();

  React.useEffect(() => {
    if (session?.user?.id) {
      loadChats(session.user.id);
    }
  }, []);

  return (
    <div className="h-screen flex flex-row gap-4">
      {chats && <Sidebar chats={chats} />}
      <Chat messages={[]} />
    </div>
  );
}

export default Home;
