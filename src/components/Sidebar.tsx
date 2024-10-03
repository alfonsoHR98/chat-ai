"use client";
import React from "react";
import { FaTrash } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import { Button, User } from "@nextui-org/react";
import { UserInt } from "@interfaces/chat";
import { useSession } from "next-auth/react";
import { useChat } from "@context/ChatContext";

function Sidebar() {
  const { data } = useSession();
  const user = data?.user as UserInt | undefined;
  const { chats, loadChats, deleteChat } = useChat();

  React.useEffect(() => {
    loadChats(user?.id as string);
  }, []);
  
  return (
    <aside className="h-full w-64 flex flex-col gap-3 shadow-md shadow-neutral-600 bg-white">
      <div className="h-auto flex flex-col justify-center items-center py-3">
        <h1 className="text-xl font-bold ">Niuko Consultores</h1>
        <h2 className="text-sm font-semibold text-neutral-500">Chat Bot</h2>
      </div>
      <nav className="h-full w-full flex-1 flex flex-col items-center justify-start overflow-y-auto">
        <ul className="w-full">
          {chats ? (
            chats.map((chat) => (
              <li key={chat.id} className="border border-neutral-200 rounded-md flex justify-between items-center m-2 p-2 text-neutral-800">
                <h3 className="text-xl font-semibold">{chat.name}</h3>
                <button onClick={async() => deleteChat(chat.id)}><FaTrash /></button>
              </li>
            ))
          ) : (
            <p>No hay chats</p>
          )}
        </ul>
      </nav>
      <div className="flex justify-between items-center mx-2 my-2">
        <User
          name={user?.name}
          description={user?.email}
          avatarProps={{ src: user?.image }}
        />
        <Button isIconOnly variant="light" color="danger">
          <TbLogout />
        </Button>
      </div>
    </aside>
  );
}

export default Sidebar;
