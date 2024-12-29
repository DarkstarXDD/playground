import React from "react"

import { range } from "../utils"

function Grid({ numRows, numCols }: { numRows: number; numCols: number }) {
  console.log("Grid Rendered!")

  return (
    <div className="flex flex-col gap-1">
      {range(numRows).map((rowIndex) => (
        <div key={rowIndex} className="flex gap-1">
          {range(numCols).map((colIndex) => (
            <div
              key={colIndex}
              className="aspect-square flex-1 bg-slate-400"
            ></div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default React.memo(Grid)
