"use client";

import { FormEvent, KeyboardEvent, useRef, useState } from "react";
import { terminalResponses } from "@/lib/data";

type LogEntry = {
  type: "input" | "output";
  text: string;
};

const initialLog: LogEntry[] = [
  { type: "output", text: "Vishal Rao cloud console. Type help to list commands." }
];

export function InteractiveTerminal() {
  const [command, setCommand] = useState("");
  const [log, setLog] = useState<LogEntry[]>(initialLog);
  const inputRef = useRef<HTMLInputElement>(null);

  function runCommand(rawCommand: string) {
    const normalized = rawCommand.trim().toLowerCase();
    if (!normalized) return;

    if (normalized === "clear") {
      setLog(initialLog);
      setCommand("");
      return;
    }

    const response = terminalResponses[normalized] ?? [
      `Command not found: ${normalized}`,
      "Try help, about, skills, experience, projects, contact, or clear."
    ];

    setLog((entries) => [
      ...entries,
      { type: "input", text: normalized },
      ...response.map((text) => ({ type: "output" as const, text }))
    ]);
    setCommand("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    runCommand(command);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      event.preventDefault();
      runCommand(command);
    }
  }

  return (
    <section className="section-shell py-16">
      <div
        className="terminal-edge circuit-panel rounded-md"
        onClick={() => inputRef.current?.focus()}
        role="application"
        aria-label="Interactive portfolio terminal"
      >
        <div className="flex items-center justify-between border-b border-cyan/15 px-4 py-3 font-mono text-xs text-muted">
          <div className="flex gap-2" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-neon/80" />
          </div>
          <span>console.drawer</span>
          <span className="text-cyan">AUTH: READ_ONLY</span>
        </div>
        <div className="max-h-96 overflow-y-auto p-5 font-mono text-sm leading-7">
          {log.map((entry, index) => (
            <p key={`${entry.text}-${index}`} className={entry.type === "input" ? "text-neon" : "text-muted"}>
              {entry.type === "input" ? `> ${entry.text}` : entry.text}
            </p>
          ))}
          <form onSubmit={handleSubmit} className="mt-2 flex items-center gap-2">
            <label htmlFor="terminal-command" className="text-cyan">
              &gt;
            </label>
            <input
              ref={inputRef}
              id="terminal-command"
              value={command}
              onChange={(event) => setCommand(event.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full bg-transparent text-neon outline-none placeholder:text-muted/60"
              placeholder="help"
              autoComplete="off"
              spellCheck={false}
            />
            <span className="h-5 w-2 bg-neon animate-blink" aria-hidden="true" />
          </form>
        </div>
      </div>
    </section>
  );
}
