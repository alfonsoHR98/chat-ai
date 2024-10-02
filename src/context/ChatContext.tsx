"use client"
import { createContext, useState, useContext, useEffect } from "react";
import { Message, Chat } from "@prisma/client";
import axios from "axios";

export const ChatContext = createContext<{
  chats: Chat[];
  loadChats: (id: string) => Promise<void>;
  createChat: (chat: Chat) => Promise<void>;
  deleteChat: (id: string) => Promise<void>;
}>({
  chats: [],
  loadChats: async () => { },
  createChat: async () => { },
  deleteChat: async () => { },
});

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
}

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  const [chats, setChats] = useState<Chat[]>([]);
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);

  async function loadChats(id: string) {
    const res = await axios.get("/api/chat/" + id);
    setChats(res.data);
  }

  async function createChat(chat: Chat) {
    const res = await axios.post("/api/chat", chat);
    setChats([...chats, res.data]);
  }

  async function deleteChat(id:string) {
    const res = await axios.delete("/api/chat/" + id)
    console.log(res)
    setChats(chats.filter((chat) => chat.id !== id))
  }

  return (
    <ChatContext.Provider value={{
      chats,
      loadChats,
      createChat,
      deleteChat
    }}>
      {children}
    </ChatContext.Provider>
  )
}