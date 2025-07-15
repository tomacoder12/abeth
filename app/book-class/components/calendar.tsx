import React, { useMemo, useState } from 'react';
import { format, addDays, startOfWeek, parseISO } from 'date-fns';
import { motion } from 'framer-motion';
import { classAvailability } from '@/constants/data';
import FilterDropdown from './filter';
import { Separator } from '@/components/ui/separator';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useRouter } from 'next/navigation';
import { routes } from '@/constants';

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const timeSlots = ["08:00", "09:00", "10:00", "11:00", "12:00", "16:00", "17:00", "18:00"];

type ClassEntry = {
  name: string;
  time: string;
  data: typeof classAvailability[keyof typeof classAvailability];
};

const CalendarView = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [filters, setFilters] = useState<string[]>([]);
  const router = useRouter()

  const weekDays = useMemo(() => {
    const start = startOfWeek(selectedDate, { weekStartsOn: 0 });
    return Array.from({ length: 7 }, (_, i) => addDays(start, i));
  }, [selectedDate]);

  const getClassesForDay = (date: Date): ClassEntry[] => {
    const dayName = daysOfWeek[date.getDay()];
    const todayISO = format(date, 'yyyy-MM-dd');

    return Object.entries(classAvailability).flatMap(([name, data]) => {
      const override = data.overrides?.find(o => o.date === todayISO);
      if (override?.isClosed) return [];

      const hours = override?.timeRanges?.length ? override.timeRanges : data.weeklyHours[dayName];
      if (!hours) return [];

      return hours.map(range => ({
        name,
        time: range.open,
        data,
      }));
    });
  };

  const filteredClassList = (date: Date): Record<string, ClassEntry[]> => {
    if (daysOfWeek[date.getDay()] === 'Sunday') return {};

    const allClasses = getClassesForDay(date).filter(c =>
      filters.length === 0 || filters.includes(c.name)
    );

    const grouped: Record<string, ClassEntry[]> = {};
    for (const slot of timeSlots) {
      grouped[slot] = allClasses.filter(c => c.time === slot);
    }
    return grouped;
  };

  return (
    <section className="bg-[#5A582F] py-28 px-10 min-h-screen text-white">
      <h1 className="text-4xl font-bold text-center mb-8">Book a Class</h1>
      <Separator />

      {/* Filter */}
      <div className="flex justify-end mb-4">
        <FilterDropdown filters={filters} setFilters={setFilters} />
      </div>

      {/* Week Navigation */}
      <div className="flex justify-between items-center mb-4">
        <button onClick={() => setSelectedDate(addDays(selectedDate, -7))}><IoIosArrowBack /></button>
        <h2 className="text-xl font-medium">{format(selectedDate, 'MMMM yyyy')}</h2>
        <button onClick={() => setSelectedDate(addDays(selectedDate, 7))}><IoIosArrowForward /></button>
      </div>

      {/* Weekday Header (no border) */}
      <div className="grid grid-cols-7 text-center font-semibold mb-0">
        {weekDays.map((date, idx) => (
          <div key={idx} className="py-2">
            {format(date, 'EEE')} <br />
            {format(date, 'd')}
          </div>
        ))}
      </div>

      {/* Calendar Grid (border starts here) */}
      <div className="grid grid-cols-7 gap-0 border border-white border-t-0">
        {weekDays.map((date, idx) => {
          const dayName = daysOfWeek[date.getDay()];
          const dayClasses = filteredClassList(date);

          return (
            <div
              key={idx}
              className="border-l border-t border-white last:border-r first:border-l bg-[#5A582F] flex flex-col"
            >
              {dayName === 'Sunday' ? (
                <div className="flex-1 flex items-center justify-center text-sm text-gray-300 border-t border-white">
                  Closed
                </div>
              ) : (
                timeSlots.map((time) => (
                  <div key={time} className="border-t border-white px-2 py-2 min-h-[80px]">
                    <p className="text-xs text-gray-300 mb-1">
                      {format(parseISO(`2025-01-01T${time}`), 'h a')}
                    </p>

                    {dayClasses[time] && dayClasses[time].length > 0 ? (
                      dayClasses[time].map((c, i) => (
                        <motion.div
                          key={`${c.name}-${i}`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="bg-olive-900 p-2 rounded mb-1"
                        >
                          <p className="text-sm font-bold">{c.time}</p>
                          <p className="text-sm uppercase">{c.data.label}</p>
                          <p className="text-xs">{c.data.instructor}</p>
                          <p className="text-xs">{c.data.duration}</p>
                          <p className="text-xs">{c.data.capacity} spots left</p>
                          <button onClick={() => router.push(`/classes/${c.name}`)} className="mt-1 w-full border border-white py-1 text-sm hover:bg-white hover:text-black cursor-pointer transition">
                            Book
                          </button>
                        </motion.div>
                      ))
                    ) : (
                      <p className="text-xs italic">No class</p>
                    )}
                  </div>
                ))
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CalendarView;
