import Settings from "./Settings";
import PageNav from "./PageNav";
export default function Header({ showSettings, setShowSettings }) {
  return (
    <>
      {showSettings && <Settings setShowSettings={setShowSettings} />}
      <div className="header">
        <img
          className="settings-icon"
          onClick={() => setShowSettings((setting) => !setting)}
          src="./icons/settings.svg"
          alt="settings"
        />
        <p>The Weather App</p>
        <PageNav />
      </div>
    </>
  );
}
