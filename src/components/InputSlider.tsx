import { useId, type ComponentProps } from "react"
import * as Slider from "@radix-ui/react-slider"

type SliderProps = {
  value: number
  onValueChange: (value: number[]) => void
} & ComponentProps<typeof Slider.Root>

export default function InputSlider({
  value,
  onValueChange,
  ...props
}: SliderProps) {
  const id = useId()

  return (
    <div className="grid gap-3">
      <label htmlFor={id} className="flex items-center justify-between">
        Character Length
        <span aria-hidden className="text-preset-2 text-neon-green">
          {value}
        </span>
      </label>

      <Slider.Root
        value={[value]}
        onValueChange={onValueChange}
        {...props}
        className="relative flex h-5 w-52 items-center"
      >
        <Slider.Track className="relative h-1 w-full rounded bg-gray-300">
          <Slider.Range className="absolute h-full rounded bg-red-500" />
        </Slider.Track>
        <Slider.Thumb
          aria-label="Volume"
          className="block h-4 w-4 rounded-full bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
      </Slider.Root>
    </div>
  )
}
