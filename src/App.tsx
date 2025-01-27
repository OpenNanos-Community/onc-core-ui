import "./App.css";
import heartbeat from "../public/assets/heartbeat.svg";
import armor from "../public/assets/shield.svg";
import hunger from "../public/assets/hamburger.svg";
import thirst from "../public/assets/bottle.svg";
import stamina from "../public/assets/run.svg";

function App() {
  return (
    <div className="hud-container">
      <div className="flex flex-col md:flex-row aspect-16/9 px-5 md:px-10 py-5 md:py-10 text-app-text font-inter font-bold">
        <div className="flex flex-col md:flex-row justify-between items-end content-end md:gap-15">
          <div className="flex flex-col-reverse">
            {/* Health Bar */}
            <div className="flex flex-col justify-evenly w-full md:w-60">
              <div className="flex items-center">
                <div className="icon">
                  <img src={heartbeat} alt="Health" />
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
            {/* Armor Bar */}
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
          <div className="flex flex-col md:flex-row gap-5 md:gap-10">
            {/* Vertical Bars */}
            <div className="flex items-center">
              <div className="relative flex items-center w-3 h-20 bg-app-bg rounded-full">
                <div
                  className="absolute bottom-0 bg-app-hunger w-3 rounded-full"
                  style={{ height: "80%" }}
                ></div>
              </div>
              <div className="flex items-center justify-center h-20 ml-2">
                <img src={hunger} alt="Hunger" className="w-6 h-6" />
              </div>
            </div>
            <div className="flex items-center">
              <div className="relative flex items-center w-3 h-20 bg-app-bg rounded-full">
                <div
                  className="absolute bottom-0 bg-app-thirst w-3 rounded-full"
                  style={{ height: "60%" }}
                ></div>
              </div>
              <div className="flex items-center justify-center h-20 ml-2">
                <img src={thirst} alt="Thirst" className="w-6 h-6" />
              </div>
            </div>
            <div className="flex items-center">
              <div className="relative flex items-center w-3 h-20 bg-app-bg rounded-full">
                <div
                  className="absolute bottom-0 bg-app-text w-3 rounded-full"
                  style={{ height: "40%" }}
                ></div>
              </div>
              <div className="flex items-center justify-center h-20 ml-2">
                <img src={stamina} alt="Stamina" className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
