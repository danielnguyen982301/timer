interface RecordsProps {
  records: { timeDiff: number; time: number }[];
  formatTime: (time: number) => string;
  timeDiff: number;
}

function Records({ records, formatTime, timeDiff }: RecordsProps) {
  return (
    <>
      <div className="second__timer__display">
        <p>{formatTime(timeDiff)}</p>
      </div>

      <table>
        <thead>
          <tr>
            <th>Lap</th>
            <th>Lap times</th>
            <th>Overall Time</th>
          </tr>
        </thead>
        <tbody>
          {records.map(
            (record: { timeDiff: number; time: number }, index: number) => (
              <tr>
                <td>{records.length - index}</td>
                <td>{formatTime(record.timeDiff)}</td>
                <td>{formatTime(record.time)}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </>
  );
}

export default Records;
