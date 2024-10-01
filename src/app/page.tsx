import React from "react";
import Sidebar from "@components/Sidebar";
import Chat from "@components/Chat";

function Home() {
  return (
    <div className="h-screen flex flex-row gap-4">
      <Sidebar chats={[]} />
      <Chat messages={[]} />
    </div>
  );
}

export default Home;
