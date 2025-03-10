import React, { useState } from "react";
import Events from "@/Events";
import { Player } from "@/types/Player";
import { Icon } from "@iconify/react";

const getPingStatus = (ping: number) => {
  if (ping <= 100) return "text-green-500";
  if (ping <= 300) return "text-orange-500";
  return "text-red-500";
};

const Scoreboard: React.FC = () => {
  const [show, setShow] = useState(false);
  const [players, setPlayers] = useState<Player[]>([]);
  const [serverName, setServerName] = useState<string>("Server Name");

  Events.Subscribe("ONC::ToggleScoreboard", (shouldShow: boolean) => {
    setShow(shouldShow);
  });

  Events.Subscribe("ONC::InitScoreboard", (serverName: string) => {
    setServerName(serverName);
  });

  Events.Subscribe("ONC::UpdatePlayerScoreboard", (id: number, name: string, rank: string, job: string, avatar: string, ping: number) => {
    const updatedPlayer = { id, name, rank, job, avatar, ping };
    setPlayers((prevPlayers) => {
      const index = prevPlayers.findIndex((p) => p.id === id);
      if (index === -1) {
        return [...prevPlayers, updatedPlayer];
      }

      return prevPlayers.map((p) => (p.id === id ? updatedPlayer : p));
    });
  });

  if (!show) {
    return null;
  }

  return (
    <div className="fixed top-10 left-1/2 transform -translate-x-1/2 bg-neutral-800 text-white p-6 rounded-lg shadow-lg w-full max-w-4xl font-inter opacity-80">
      <p className="text-3xl font-bold mb-4">{serverName}</p>
      <table className="w-full text-left border-separate border-spacing-y-4">
        <thead>
          <tr>
            <th className="py-2 px-4"></th>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Rank</th>
            <th className="py-2 px-4">Job</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.id} className="bg-black overflow-hidden">
              <td className="py-2 px-4 rounded-l-xl">
                <img
                  src={player.avatar}
                  alt={`${player.name}'s avatar`}
                  className="w-10 h-10 rounded-full"
                />
              </td>
              <td className="py-2 px-4">{player.name}</td>
              <td className="py-2 px-4">{player.rank}</td>
              <td className="py-2 px-4">{player.job}</td>
              <td className="py-2 px-4 rounded-r-xl">
                <div className="tooltip [--placement:bottom]">
                  <button
                    type="button"
                    className="tooltip-toggle btn btn-square"
                    aria-label="Tooltip"
                  >
                    <Icon
                      icon="tabler:antenna-bars-5"
                      className={`w-6 h-6 ${getPingStatus(player.ping)}`}
                    />
                  </button>
                  <span className="tooltip-content tooltip-shown:visible hidden translate-y-2">
                    <span className="tooltip-body py-1 px-2 bg-app-bg text-white rounded-sm">
                      {player.ping}
                    </span>
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Scoreboard;