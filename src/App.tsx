import './App.css';
import Base from '@/modules/base/Base';
import CharacterCreator from '@/modules/character-creator/CharacterCreator';

function App() {
  return (
    <>
      <div className="hud-container">
        <div className="flex flex-col md:flex-row px-5 md:px-10 py-5 md:py-10 text-app-text font-inter font-bold">
          <Base />
        </div>
      </div>
        <CharacterCreator />
    </>
  );
}

export default App;