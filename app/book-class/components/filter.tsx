import { classAvailability } from '@/constants/data';
import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

type Props = {
  filters: string[];
  setFilters: (f: string[]) => void;
};

const classNames = Object.keys(classAvailability);

const FilterDropdown: React.FC<Props> = ({ filters, setFilters }) => {
  const toggleFilter = (name: string) => {
    if (filters.includes(name)) {
      setFilters(filters.filter(f => f !== name));
    } else {
      setFilters([...filters, name]);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <p className="cursor-pointer">
          Filter by: Service ({filters.length ? filters.length : 'All'})
        </p>
      </PopoverTrigger>

      <PopoverContent className="w-64 bg-[#5A582F] border border-white shadow-lg rounded text-white">
        <div className="space-y-2">
          {classNames.map(name => (
            <div key={name} className="flex items-center space-x-2">
              <Checkbox
                id={name}
                checked={filters.includes(name)}
                onCheckedChange={() => toggleFilter(name)}
              />
              <Label htmlFor={name} className="text-sm text-white">
                {classAvailability[name].label}
              </Label>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default FilterDropdown;
