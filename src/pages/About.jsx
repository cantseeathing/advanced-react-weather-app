import Header from "../components/Header";

export default function About({ showSettings, setShowSettings }) {
  return (
    <div>
      <Header showSettings={showSettings} setShowSettings={setShowSettings} />

      <p>About</p>
      <h1>YOOOO</h1>
    </div>
  );
}
