import Records from "./Records";
import { formatTime } from "./formatTime";
import useTimer from "./useTimer";

function App() {
  const { time, timeDiff, isRunning, records, toggleTimer, record, reset } =
    useTimer(0);

  return (
    <div className="App container">
      <h1>Coder Timer</h1>
      <div className="timer__wrapper">
        <div className="timer__display">
          <p>{formatTime(time)}</p>
        </div>
        {!!records.length && (
          <Records
            records={records}
            formatTime={formatTime}
            timeDiff={timeDiff}
          />
        )}
        <div className="button__wrapper">
          <button className="button" onClick={toggleTimer}>
            {isRunning ? "Stop" : time ? "Resume" : "Start"}
          </button>

          {!isRunning && time ? (
            <button className="button" onClick={reset}>
              Reset
            </button>
          ) : (
            <button className="button" disabled={!time} onClick={record}>
              Lap
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
