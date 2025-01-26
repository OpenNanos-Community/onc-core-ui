import "./App.css";
import heartbeat from "./assets/heartbeat.svg";
import armor from "./assets/shield.svg";

function App() {
  return (
    <div className="hud-container">
      <div className="flex flex-col md:flex-row aspect-16/9 px-5 md:px-10 py-5 md:py-10 text-app-text font-inter font-bold">
        <div className="flex flex-col md:flex-row justify-baseline items-end content-end gap-10 md:gap-30">
          <div className="flex flex-col-reverse">
            {/* Heartbeat Icon and Health Bar */}
            <div className="flex flex-col justify-evenly w-full md:w-60">
              <div className="flex items-center">
                <div className="icon">
                  <img src={heartbeat} alt="Heartbeat" />
                </div>
                <span className="text-xl ml-auto self-end">50%</span>
              </div>

              <div className="w-full bg-app-bg rounded-full h-2.5">
                <div
                  className="bg-app-health h-2.5 rounded-full"
                  style={{ width: "50%" }}
                ></div>
              </div>
            </div>
            <div className="flex flex-col justify-evenly w-full md:w-60">
              <div className="flex items-center">
                <div className="icon">
                  <img src={armor} alt="Armor" />
                </div>
                <span className="text-xl ml-auto self-end">50%</span>
              </div>

              <div className="w-full bg-app-bg rounded-full h-2.5">
                <div
                  className="bg-app-armor h-2.5 rounded-full"
                  style={{ width: "50%" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5 md:gap-10"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
