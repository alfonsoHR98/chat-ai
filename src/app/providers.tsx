"use client";
import { SessionProvider } from "next-auth/react";
import { NextUIProvider } from "@nextui-org/react";
import { ReactNode } from "react";
import { ChatProvider } from "@context/ChatContext";

interface ProvidersProps {
  children: ReactNode;
}

function Providers({ children }: ProvidersProps) {
  return (
    <SessionProvider>
      <NextUIProvider>
        <ChatProvider>{children}</ChatProvider>
      </NextUIProvider>
    </SessionProvider>
  );
}

export default Providers;
