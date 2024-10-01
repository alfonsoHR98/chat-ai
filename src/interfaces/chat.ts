export interface SidebarProps {
  chats: Chat[];
}

export interface Chat {
  id: string;
  userId: string;
  name: string;
  messages: Message[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Message {
  id: string;
  chatId: string;
  content: string;
  role: Role;
  createdAt: Date;
  updatedAt: Date;
}

export enum Role {
  assistant,
  user,
}

export interface UserInt {
  id: string;
  name: string;
  email: string;
  image: string;
}
