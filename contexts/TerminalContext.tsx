"use client";

import { useRouter } from "next/navigation";
import React, { ReactNode, createContext, useEffect, useState } from "react";

export type InputCommand = {
  command: string;
};

export const AUTOCOMPLETE_COMMANDS = [
  "cd",
  "cd /",
  "cd about",
  "cd projects",
  "cd articles",
  "cd contact",
  "clear",
  "man",
  "ls",
  "lang",
  "lang cn",
];

interface TerminalContextState {
  command: string[] | null;
  output: string | null;
  setCommand: React.Dispatch<React.SetStateAction<string[] | null>>;
}

export const TerminalContext = createContext<TerminalContextState>({
  command: [],
  output: null,
  setCommand: () => {},
});

export default function TerminalContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();

  const [output, setOutput] = useState<string | null>(null);
  const [command, setCommand] = useState<string[] | null>(null);

  useEffect(() => {
    const lastCommand = command?.[command.length - 1];

    console.log(lastCommand);

    if (lastCommand === "clear") {
      setCommand([]);
      setOutput(null);
    } else if (lastCommand === "ls") {
      setOutput("/ \n/about \n/projects \n/articles \n/contact");
    } else if (lastCommand !== undefined && lastCommand.includes("cd")) {
      if (lastCommand === "cd /") {
        router.push("/");
      } else if (lastCommand === "cd about") {
        router.push("/#about");
      } else if (lastCommand === "cd projects") {
        router.push("/projects");
      } else if (lastCommand === "cd articles") {
        router.push("/articles");
      } else if (lastCommand === "cd contact") {
        router.push("/contact");
      } else {
        setOutput(`cd: no such file or directory: ${lastCommand}`);
      }
    } else if (lastCommand === "man") {
      setOutput("cd [dir] \nls \nclear \nman \n");
    } else if (
      lastCommand !== undefined &&
      !AUTOCOMPLETE_COMMANDS.includes(lastCommand || "")
    ) {
      setOutput(`an: command not found: ${lastCommand}`);
    }
  }, [command, router]);

  return (
    <TerminalContext.Provider value={{ command, output, setCommand }}>
      {children}
    </TerminalContext.Provider>
  );
}
