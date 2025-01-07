import { useState } from "react"
import InputSlider from "./components/InputSlider"

export type PasswordParams = {
  length: number
  options: {
    uppercase: boolean
    lowercase: boolean
    numbers: boolean
    symbols: boolean
  }
}

const defaultPasswordParams: PasswordParams = {
  length: 12,
  options: {
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: false,
  },
}

export default function App() {
  const [passwordParams, setPasswordParams] = useState<PasswordParams>(
    defaultPasswordParams
  )

  function onSliderChange(value: number[]) {
    const newParams = {
      ...passwordParams,
      length: value[0],
    }
    setPasswordParams(newParams)
  }

  return (
    <main>
      <InputSlider
        name="length"
        min={8}
        max={32}
        value={passwordParams.length}
        onValueChange={onSliderChange}
      />
    </main>
  )
}
