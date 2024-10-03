"use client"
import { createContext, useState, useContext, useEffect } from "react";
import { Message, Chat } from "@prisma/client";
import axios from "axios";

export const ChatContext = createContext<{
  chats: Chat[];
  selectedChat: Chat | null;
  loadChats: (id: string) => Promise<void>;
  createChat: (chat: Chat) => Promise<void>;
  deleteChat: (id: string) => Promise<void>;
  selectChat: (id: string) => void;
  sendMessage: (idChat: string, message: Message) => void;
}>({
  chats: [],
  selectedChat: null,
  loadChats: async () => { },
  createChat: async () => { },
  deleteChat: async () => { },
  selectChat: () => { },
  sendMessage: async () => { },
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

  async function selectChat(id: string) {
    setSelectedChat(chats.find((chat) => chat.id === id) || null);
  }

  async function sendMessage(idChat: string,message: Message) {
    const res = await axios.post("/api/message/"+idChat, message);
    setSelectedChat({
      ...selectedChat,
      messages: [...selectedChat?.messages, res.data]
    });
  }

  return (
    <ChatContext.Provider value={{
      chats,
      selectedChat,
      loadChats,
      createChat,
      deleteChat,
      selectChat,
      sendMessage,
    }}>
      {children}
    </ChatContext.Provider>
  )
}