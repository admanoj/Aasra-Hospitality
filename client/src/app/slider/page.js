"use client";

import { CustomDatePicker } from "@/components/custom-date-picker";

export default function Slider() {
  return (
    <main>
      <div className="w-full max-w-md  p-6 rounded-lg shadow-lg">
        <CustomDatePicker />
      </div>
    </main>
  );
}
