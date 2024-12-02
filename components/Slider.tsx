"use client";

import * as RadixSlider from "@radix-ui/react-slider";

interface SliderProps {
  value?: number;
  onChange?: (value: number) => void;
}
export default function Slider({ value, onChange }: SliderProps) {
  const handleChange = (newValue: number[]) => {
    onChange?.(newValue[0]);
  };

  return (
    <RadixSlider.Root
      className="relative flex items-center select-none touch-none w-full h-10"
      defaultValue={[1]}
      onValueChange={handleChange}
      max={1}
      step={0.1}
      value={[value || 0]}
      aria-label="volume"
    >
      <RadixSlider.Track className="bg-neutral-600 relative grow rounded-full h-[3px]">
        <RadixSlider.Range className="absolute rounded-full h-full bg-white" />
      </RadixSlider.Track>
    </RadixSlider.Root>
  );
}
