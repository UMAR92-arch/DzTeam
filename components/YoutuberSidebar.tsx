
import React from 'react';
import { YOUTUBERS } from '../constants';

const YoutuberSidebar: React.FC = () => {
  return (
    <aside className="fixed right-0 top-24 bottom-0 w-64 p-4 hidden lg:flex flex-col gap-4 overflow-y-auto">
      <h3 className="font-minecraft text-[10px] text-green-400 mb-2 uppercase tracking-tighter">
        Team YouTubers
      </h3>
      {YOUTUBERS.map((yt) => (
        <a
          key={yt.id}
          href={yt.channelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="glass group p-3 rounded-lg flex items-center gap-3 transition-all hover:scale-105 hover:bg-white/10 border-l-4 border-green-500 hover:border-l-8"
        >
          <img
            src={yt.avatar}
            alt={yt.name}
            className="w-10 h-10 rounded-full border border-white/20"
          />
          <div className="flex flex-col overflow-hidden">
            <span className="text-sm font-bold truncate group-hover:text-green-400 transition-colors">
              {yt.name}
            </span>
            <span className="text-[10px] text-gray-400">
              {yt.subscribers} Subscribers
            </span>
          </div>
        </a>
      ))}
      <div className="mt-4 p-4 glass rounded-lg border border-yellow-500/30">
        <p className="text-[10px] text-yellow-500 font-minecraft leading-relaxed">
          JOIN THE LEGENDARY TEAM TODAY!
        </p>
      </div>
    </aside>
  );
};

export default YoutuberSidebar;
