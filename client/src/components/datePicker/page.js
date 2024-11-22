"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DatePickerWithRange({ className }) {
  const [fromDate, setFromDate] = React.useState(null);
  const [toDate, setToDate] = React.useState(null);

  return (
    <div className={cn("flex gap-6", className)}>
      {/* From Date Picker */}
      <div className="flex flex-col w-1/2">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-between text-left font-normal p-4 border border-gray-300 rounded-md",
                !toDate && "text-muted-foreground"
              )}
            >
              {fromDate ? format(fromDate, "MMM dd, yyyy") : "Check-in"}
              <CalendarIcon className="ml-3 h-4 w-4 shrink-0" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={fromDate}
              onSelect={setFromDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
      
      <span className="text-lg font-bold">-</span>
      {/* To Date Picker */}
      <div className="flex flex-col w-1/2">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-between text-left font-normal",
                !toDate && "text-muted-foreground"
              )}
            >
              {toDate ? format(toDate, "MMM dd, yyyy") : "Check-out"}
              <CalendarIcon className="ml-2 h-4 w-4 shrink-0" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={toDate}
              onSelect={setToDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
