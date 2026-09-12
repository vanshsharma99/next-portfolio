'use client';

import React, { useState } from 'react';
import { Terminal as TerminalIcon, Send, Sparkles } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

interface HistoryLog {
  command: string;
  output: string | string[];
}

export const TerminalSection: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<HistoryLog[]>([
    {
      command: 'welcome',
      output: 'Type "help" to see available interactive portfolio CLI commands!'
    }
  ]);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCmd = inputVal.trim().toLowerCase();
    if (!cleanCmd) return;

    if (cleanCmd === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    const foundCmd = portfolioData.terminalCommands.find(
      (c) => c.command.toLowerCase() === cleanCmd
    );

    let outputResult: string | string[];
    if (foundCmd) {
      outputResult = foundCmd.output;
    } else {
      outputResult = `Command not recognized: "${cleanCmd}". Type "help" for a list of available commands.`;
    }

    setHistory((prev) => [...prev, { command: cleanCmd, output: outputResult }]);
    setInputVal('');
  };

  return (
    <section id="terminal" className="py-24 px-6 sm:px-12 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-2">
            <TerminalIcon className="w-4 h-4" />
            Interactive CLI
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Developer Terminal Emulator
          </h2>
          <p className="text-sm text-gray-400 mt-2">
            Try typing <code className="text-cyan-400 bg-gray-800 px-1.5 py-0.5 rounded">help</code>, <code className="text-cyan-400 bg-gray-800 px-1.5 py-0.5 rounded">whoami</code>, or <code className="text-cyan-400 bg-gray-800 px-1.5 py-0.5 rounded">skills</code> below.
          </p>
        </div>

        {/* Terminal Container */}
        <div className="glass-card rounded-2xl overflow-hidden border border-gray-700/80 shadow-2xl">
          {/* Header Bar */}
          <div className="bg-gray-900/90 px-4 py-3 flex items-center justify-between border-b border-gray-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="text-xs font-mono text-gray-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              vansh@portfolio:~
            </span>
          </div>

          {/* Console Window */}
          <div className="p-6 font-mono text-xs sm:text-sm min-h-[300px] max-h-[450px] overflow-y-auto space-y-4">
            {history.map((log, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center gap-2 text-cyan-400">
                  <span>vansh@portfolio:~$</span>
                  <span className="text-white font-semibold">{log.command}</span>
                </div>
                <div className="text-gray-300 pl-4 border-l border-indigo-500/30">
                  {Array.isArray(log.output) ? (
                    <ul className="space-y-1">
                      {log.output.map((line, lIdx) => (
                        <li key={lIdx}>{line}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{log.output}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Input Line Form */}
            <form onSubmit={handleCommandSubmit} className="flex items-center gap-2 pt-2">
              <span className="text-cyan-400">vansh@portfolio:~$</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Type command here..."
                className="flex-1 bg-transparent text-white font-mono focus:outline-none placeholder-gray-600"
              />
              <button type="submit" aria-label="Send command" className="text-gray-400 hover:text-cyan-400">
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
