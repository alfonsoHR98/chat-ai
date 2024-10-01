"use client";
import React from "react";
import { FaPlus } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import { Button, User } from "@nextui-org/react";
import { SidebarProps, UserInt } from "@interfaces/chat";
import { useSession } from "next-auth/react";

function Sidebar({ chats }: SidebarProps) {
  const { data } = useSession();
  const user = data?.user as UserInt | undefined;

  return (
    <aside className="h-full w-64 flex flex-col gap-3 shadow-md shadow-neutral-600 bg-white">
      <div className="h-auto flex flex-col justify-center items-center py-3">
        <h1 className="text-xl font-bold ">Niuko Consultores</h1>
        <h2 className="text-sm font-semibold text-neutral-500">Chat Bot</h2>
      </div>
      <Button
        className="mx-3"
        variant="bordered"
        color="default"
        startContent={<FaPlus />}
      >
        Nuevo chat
      </Button>
      <nav className="h-full flex-1 flex flex-col items-center justify-start">
        <ul>
          {chats ? (
            chats.map((chat) => (
              <li key={chat.id} className="p-3 border-b border-neutral-200">
                <h3 className="text-lg font-semibold">{chat.name}</h3>
                <p className="text-sm text-neutral-500">Último mensaje</p>
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
