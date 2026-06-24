"use client";

import { useEffect, useMemo, useState } from "react";
import { heroCommands } from "@/lib/data";

export function TypingConsole() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const activeLine = heroCommands[lineIndex];
  const rendered = useMemo(() => activeLine.slice(0, charIndex), [activeLine, charIndex]);

  useEffect(() => {
    if (charIndex < activeLine.length) {
      const id = window.setTimeout(() => setCharIndex((value) => value + 1), 38);
      return () => window.clearTimeout(id);
    }

    const id = window.setTimeout(() => {
      setCharIndex(0);
      setLineIndex((value) => (value + 1) % heroCommands.length);
    }, 1250);

    return () => window.clearTimeout(id);
  }, [activeLine.length, charIndex]);

  return (
    <div className="terminal-edge circuit-panel overflow-hidden rounded-md">
      <div className="flex items-center justify-between border-b border-cyan/15 bg-black/30 px-4 py-3 font-mono text-xs text-muted">
        <span>azops@vishal-rao:~</span>
        <span className="text-neon">ONLINE</span>
      </div>
      <div className="min-h-44 p-5 font-mono text-sm leading-7 md:text-base">
        <p className="text-cyan">vishal@cloud-node:~$ ./portfolio --boot</p>
        <p className="text-muted">loading modules: azure.networking linux.ops terraform.automation</p>
        <p className="mt-3 text-neon">
          &gt; {rendered}
          <span className="ml-1 inline-block h-5 w-2 translate-y-1 bg-neon animate-blink" />
        </p>
        <div className="mt-5 grid grid-cols-2 gap-2 text-xs text-muted md:grid-cols-4">
          {["VNET", "AKS", "IaC", "DR"].map((item) => (
            <span key={item} className="border border-cyan/15 bg-cyan/5 px-3 py-2 text-center text-cyan">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
