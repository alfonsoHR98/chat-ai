"use client";
import React from "react";
import { Input, Button, Select, SelectItem } from "@nextui-org/react";
import { FaPaperclip } from "react-icons/fa";
import { IoSendOutline } from "react-icons/io5";
import { SiOpenai } from "react-icons/si";
import { Message, Role } from "@interfaces/chat";
import { models } from "@interfaces/models";

function ChatComponent({ messages }: { messages: Message[] }) {
  return (
    <div className="w-full flex flex-col my-3 mr-3">
      {/* Selector de modelo que ocupa todo el ancho */}
      <div className="w-full mb-3">
        <Select
          className="max-w-64 w-full"
          variant="faded"
          color="default"
          defaultSelectedKeys={["gpt-4o"]}
          label="Modelo"
          startContent={<SiOpenai />}
        >
          {models.map((model) => (
            <SelectItem key={model.value} textValue={model.name}>
              <p className="font-semibold flex flex-col">
                {model.name}
                <span className="text-xs text-neutral-400">
                  {model.description}
                </span>
              </p>
            </SelectItem>
          ))}
        </Select>
      </div>

      {/* Contenedor de mensajes que ocupa el espacio restante */}
      <div className="flex-1 h-0 overflow-auto mb-3 w-4/5 mx-auto">
        <div className="flex flex-col gap-2">
          {messages
            .slice()
            .reverse()
            .map((message) => (
              <div
                key={message.id}
                className={`p-2 m-2 rounded-lg max-w-xs ${
                  message.role === Role.user
                    ? "self-end bg-blue-500 text-white"
                    : "self-start bg-gray-300 text-black"
                }`}
              >
                {message.content}
              </div>
            ))}
        </div>
      </div>

      {/* Input y botones al final */}
      <div className="flex gap-2 items-end w-4/5 mx-auto">
        <Button isIconOnly color="default" variant="bordered">
          <FaPaperclip />
        </Button>
        <Input
          placeholder="Escribe un mensaje"
          color="default"
          variant="bordered"
          className="flex-grow"
        />
        <Button isIconOnly color="default" variant="bordered">
          <IoSendOutline />
        </Button>
      </div>
    </div>
  );
}

export default ChatComponent;
