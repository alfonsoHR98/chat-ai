"use client";
import React from "react";
import { Input, Button, Select, SelectItem } from "@nextui-org/react";
import { FaPaperclip } from "react-icons/fa";
import { IoSendOutline } from "react-icons/io5";
import { SiOpenai } from "react-icons/si";
import { models } from "@interfaces/models";

function Chat() {
  return (
    <div className="w-full flex flex-col my-3 mr-3">
      <div className="w-full">
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
      <div className="flex-1 overflow-auto">{/* Messages */}</div>
      <div className="flex gap-2 my-2 h-auto items-end">
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

export default Chat;
