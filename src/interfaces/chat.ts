export interface SidebarProps {
    chats: Chat[];
}

export interface Chat {
  id: string;
  userId: string;
  name: string;
  Messages: Message[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Message {
  id: string;
  chatId: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserInt {
  id: string;
  name: string;
  email: string;
  image: string;
}