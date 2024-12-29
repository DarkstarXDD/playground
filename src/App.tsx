import React from "react"

import Grid from "./components/Grid"

export default function App() {
  const id = React.useId()

  const [numRows, setNumRows] = React.useState(12)
  const [numCols, setNumCols] = React.useState(12)

  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 })

  React.useEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      setMousePosition({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <main className="grid w-full max-w-5xl content-start gap-6">
      <div className="flex justify-between">
        <div className="grid gap-2">
          <label htmlFor="">Rows</label>
          <input
            type="range"
            min={5}
            max={40}
            id={`${id}-rows`}
            value={numRows}
            onChange={(event) => setNumRows(Number(event.target.value))}
          />
        </div>

        <p className="text-2xl">
          {mousePosition.x}/{mousePosition.y}
        </p>

        <div className="flex flex-col gap-2">
          <label htmlFor="">Columns</label>
          <input
            type="range"
            min={5}
            max={40}
            id={`${id}-columns`}
            value={numCols}
            onChange={(event) => setNumCols(Number(event.target.value))}
          />
        </div>
      </div>

      <Grid numRows={numRows} numCols={numCols} />
    </main>
  )
}
