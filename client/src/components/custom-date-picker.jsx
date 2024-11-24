"use client";

import { useState } from "react";
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

export function CustomDatePicker() {
  const [date, setDate] = useState({
    from: new Date(),
    to: new Date(),
  });

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal",
              !date.from && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            <div className="flex flex-col items-start">
              <span className="text-sm font-semibold">Check in</span>
              {date.from ? (
                format(date.from, "EEE, MMM d")
              ) : (
                <span className="text-xs text-muted-foreground">Add date</span>
              )}
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="single"
            defaultMonth={date.from}
            selected={date.from}
            onSelect={(newDate) =>
              setDate((prev) => ({ ...prev, from: newDate }))
            }
          />
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal",
              !date.to && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            <div className="flex flex-col items-start">
              <span className="text-sm font-semibold">Check out</span>
              {date.to ? (
                format(date.to, "EEE, MMM d")
              ) : (
                <span className="text-xs text-muted-foreground">Add date</span>
              )}
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="single"
            defaultMonth={date.to}
            selected={date.to}
            onSelect={(newDate) =>
              setDate((prev) => ({ ...prev, to: newDate }))
            }
            disabled={(day) =>
              (date.from && day < date.from) || day <= new Date()
            }
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
