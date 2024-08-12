"use client";

import {
  AUTOCOMPLETE_COMMANDS,
  InputCommand,
  TerminalContext,
} from "@/contexts/TerminalContext";
import React, { useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";

function getSuggestion(input: string): string | null {
  const matches = AUTOCOMPLETE_COMMANDS.filter((cmd) =>
    cmd.toLowerCase().startsWith(input.toLowerCase()),
  );
  return matches.length > 0 ? matches[0] : null;
}

export default function TerminalInput() {
  const { register, handleSubmit, resetField, watch, setValue } =
    useForm<InputCommand>();
  const { command, setCommand } = useContext(TerminalContext);
  const [suggestion, setSuggestion] = useState<string | null>(null);

  const currentCommand = watch("command") || "";

  useEffect(() => {
    setSuggestion(getSuggestion(currentCommand));
  }, [currentCommand]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit((data) => {
        setCommand([...(command ?? []), data.command]);
        resetField("command");
      })();
    } else if (e.key === "Tab" && suggestion) {
      e.preventDefault();
      setValue("command", suggestion);
    }
  };

  return (
    <div className="relative font-mono">
      <input
        {...register("command", { required: true })}
        onKeyDown={handleKeyDown}
        autoFocus
        autoComplete="off"
        className="w-full bg-transparent outline-none"
      />
      {suggestion && suggestion !== currentCommand && (
        <div
          className="pointer-events-none absolute left-0 top-0 text-gray-500"
          style={{
            paddingLeft: `${currentCommand.length}ch`,
          }}
        >
          {suggestion.slice(currentCommand.length)}
        </div>
      )}
    </div>
  );
}
