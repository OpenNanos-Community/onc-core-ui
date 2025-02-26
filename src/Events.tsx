interface EventsType {
    Call: (sEventName: string, ...args: any[]) => void;
    Subscribe: (sEventName: string, callback: (...args: any[]) => void) => void;
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