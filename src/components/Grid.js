import '.././styles/gridStyle.css'
export default function Grid() {
    let rows = 8;
    let columns = 8
    const gridData = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < columns; j++) {
      row.push(0);
    }
    gridData.push(row);
  }

    return (
        <div className="grid">
          {gridData.map((row, rowIndex) => (
            <div key={rowIndex} className="row">
              {row.map((cell, cellIndex) => (
                <div key={cellIndex} className="cell">
                </div>
              ))}
            </div>
          ))}
        </div>
    );
}