export type TimeRange = {
  open: string;  // "09:00"
  close: string; // "10:00"
};

export type DateSpecificHours = {
  date: string; // "2025-07-12"
  timeRanges: TimeRange[];
  isClosed: boolean;
};

export type Availability = {
  label: string;             // "Ashtanga Yoga"
  type?: string;             // "Restorative", "Hot", etc.
  description?: string;      // Full sentence or two
  price: number;             // 15
  duration: string;          // "1 hr" or "90 minutes"
  location?: string;         // "San Francisco"
  instructor?: string;       // Optional default instructor
  capacity?: number;         // Max number of attendees
  tags?: string[];           // ["Beginner", "Indoor"]
  timeZone: string;
  weeklyHours: Record<string, TimeRange[]>;
  overrides?: DateSpecificHours[];
};
