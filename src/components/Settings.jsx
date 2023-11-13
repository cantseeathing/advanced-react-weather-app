export default function Settings({ setShowSettings }) {
  var x_end;
  var y_end;
  function controlSettingsWindowMouseDown(e) {
    document.addEventListener("mousemove", moveSettingsWindow);
  }
  function controlSettingsWindowMouseUp(e) {
    x_end = e.clientX;
    y_end = e.clientY;
    const settingsWindow = document.querySelector(".settings-container");
    settingsWindow.style.left = x_end + "px";
    settingsWindow.style.top = y_end + "px";
    document.removeEventListener("mousemove", moveSettingsWindow);
    settingsWindow.style.cursor = "default";
  }
  function moveSettingsWindow(e) {
    const settingsWindow = document.querySelector(".settings-container");
    settingsWindow.style.cursor = "grabbing";
    settingsWindow.style.left = e.clientX + "px";
    settingsWindow.style.top = e.clientY + "px";
  }
  return (
    <div className="settings-overlay">
      <div
        onMouseDown={(e) => controlSettingsWindowMouseDown(e)}
        onMouseUp={(e) => controlSettingsWindowMouseUp(e)}
        className="settings-container"
      >
        <div className="settings-header" draggable="true">
          <p>Settings</p>
          <button onClick={() => setShowSettings(false)}>&times;</button>
        </div>
      </div>
    </div>
  );
}
