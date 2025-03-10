interface Player {
  id: number;
  name: string;
  rank: string;
  job: string;
  avatar: string;
  ping: number;
}

type Events = {
  "ONC::UpdateAmmo": [number, number];
  "ONC::UpdateHealth": [number];
  "ONC::UpdateArmor": [number];
  "ONC::UpdateMoney": [number];
  "ONC::UpdateName": [string];
  "ONC::UpdateHunger": [number];
  "ONC::UpdateThirst": [number];
  "ONC::UpdateStamina": [number];
  "ONC::CreateCharacter": [string, string, string];
  "ONC::ToggleCharacterCreator": [];
  "ONC::UpdateScoreboard": [Player[]];
  "ONC::UpdatePlayerScoreboard": [number, string, string, string, string, number];
  "ONC::InitScoreboard": [string];
  "ONC::ToggleScoreboard": [boolean];
};

interface EventsType {
  Call<K extends keyof Events>(sEventName: K, ...args: Events[K]): void;
  Subscribe<K extends keyof Events>(
    sEventName: K,
    callback: (...args: Events[K]) => void
  ): void;
}

declare global {
  interface Window {
    Events: EventsType;
  }
}

const Events: EventsType = {
  Call(sEventName, ...args) {
    if (typeof window.Events === "undefined") return;
    window.Events.Call(sEventName, ...args);
  },
  Subscribe(sEventName, callback) {
    if (typeof window.Events === "undefined") return;
    window.Events.Subscribe(sEventName, callback);
  },
};

export default Events;
