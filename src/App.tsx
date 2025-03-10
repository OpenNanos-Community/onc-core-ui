import { BrowserRouter as Router } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { IStaticMethods } from "flyonui/flyonui";

import "./App.css";
import Base from "@/modules/base/Base";
import CharacterCreator from "@/modules/character-creator/CharacterCreator";

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

function App() {
  const location = useLocation();

  useEffect(() => {
    const loadFlyonui = async () => {
      await import("flyonui/flyonui");
      window.HSStaticMethods.autoInit();
    };
    loadFlyonui();
  }, [location.pathname]);

  return (
    <>
      <Base />
      <CharacterCreator />
    </>
  );
}

export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}