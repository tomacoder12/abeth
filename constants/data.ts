import { Availability } from "@/types";

export const classAvailability: Record<string, Availability> = {
  ASHTANGA: {
    label: "Ashtanga Yoga",
    type: "Traditional",
    description: "A dynamic and physically demanding yoga practice.",
    price: 15,
    duration: "1 hr",
    location: "San Francisco",
    instructor: "Staff Member #1",
    capacity: 20,
    tags: ["Intermediate", "Indoor", "Traditional"],
    timeZone: "America/Los_Angeles",
    weeklyHours: {
      Monday: [{ open: "09:00", close: "10:00" }],
      Wednesday: [{ open: "09:00", close: "10:00" }],
      Friday: [{ open: "09:00", close: "10:00" }],
    },
    overrides: [{ date: "2025-07-19", timeRanges: [], isClosed: true }],
  },

  VINYASA: {
    label: "Vinyasa Flow",
    type: "Flow",
    description: "A smooth flow between poses using breath as a guide.",
    price: 18,
    duration: "1 hr",
    location: "San Francisco",
    instructor: "Staff Member #2",
    capacity: 15,
    tags: ["Beginner-friendly", "Flow"],
    timeZone: "America/Los_Angeles",
    weeklyHours: {
      Tuesday: [{ open: "10:00", close: "11:00" }],
      Thursday: [{ open: "10:00", close: "11:00" }],
    },
  },

  BIKRAM: {
    label: "Bikram Yoga",
    type: "Hot Yoga",
    description: "A series of 26 poses practiced in a heated room.",
    price: 20,
    duration: "90 minutes",
    location: "San Francisco",
    instructor: "Staff Member #3",
    capacity: 10,
    tags: ["Hot", "Advanced"],
    timeZone: "America/Los_Angeles",
    weeklyHours: {
      Saturday: [{ open: "08:00", close: "09:30" }],
      Thursday: [{ open: "17:00", close: "18:30" }],
    },
  },

  FOCUSED: {
    label: "Focused Practice",
    type: "Specialty",
    description: "A focused session on alignment and precision.",
    price: 22,
    duration: "1 hr",
    location: "San Francisco",
    instructor: "Staff Member #4",
    capacity: 12,
    tags: ["Alignment", "Indoor"],
    timeZone: "America/Los_Angeles",
    weeklyHours: {
      Monday: [{ open: "11:00", close: "12:00" }],
      Wednesday: [{ open: "16:00", close: "17:00" }],
    },
  },

  MANTRA: {
    label: "Mantra Meditation",
    type: "Meditation",
    description: "Guided meditation with sacred chants.",
    price: 12,
    duration: "1 hr",
    location: "San Francisco",
    instructor: "Staff Member #5",
    capacity: 25,
    tags: ["Spiritual", "Meditation", "Calm"],
    timeZone: "America/Los_Angeles",
    weeklyHours: {
      Friday: [
        { open: "08:00", close: "09:00" },
        { open: "14:00", close: "15:00" }
      ],
      Wednesday: [{ open: "17:00", close: "18:00" }],
    },
  },

  BREATHWORK: {
    label: "Breathwork Session",
    type: "Healing",
    description: "Deep breathing practices for healing and balance.",
    price: 14,
    duration: "1 hr",
    location: "San Francisco",
    instructor: "Staff Member #6",
    capacity: 18,
    tags: ["Healing", "Breathwork"],
    timeZone: "America/Los_Angeles",
    weeklyHours: {
      Sunday: [{ open: "07:00", close: "08:00" }],
      Tuesday: [{ open: "16:00", close: "17:00" }],
    },
  },

  KUNDALINI: {
    label: "Kundalini Awakening",
    type: "Spiritual",
    description: "Chanting, breath, and poses to awaken kundalini energy.",
    price: 19,
    duration: "1 hr",
    location: "San Francisco",
    instructor: "Staff Member #7",
    capacity: 14,
    tags: ["Chakras", "Meditation", "Energy"],
    timeZone: "America/Los_Angeles",
    weeklyHours: {
      Thursday: [{ open: "08:00", close: "09:00" }],
      Saturday: [{ open: "10:00", close: "11:00" }],
    },
  },

  RESTORATIVE: {
    label: "Restorative Yoga",
    type: "Gentle",
    description: "Passive stretches and deep rest for recovery.",
    price: 16,
    duration: "1 hr",
    location: "San Francisco",
    instructor: "Staff Member #8",
    capacity: 20,
    tags: ["Beginner", "Recovery", "Gentle"],
    timeZone: "America/Los_Angeles",
    weeklyHours: {
      Tuesday: [{ open: "09:00", close: "10:00" }],
      Sunday: [{ open: "16:00", close: "17:00" }],
    },
  },

  POWERFLOW: {
    label: "Power Flow",
    type: "Fitness",
    description: "Fast-paced flow to build heat and strength.",
    price: 17,
    duration: "1 hr",
    location: "San Francisco",
    instructor: "Staff Member #9",
    capacity: 18,
    tags: ["Strength", "Sweat", "Advanced"],
    timeZone: "America/Los_Angeles",
    weeklyHours: {
      Monday: [{ open: "17:00", close: "18:00" }],
      Wednesday: [{ open: "18:00", close: "19:00" }],
    },
  },

  YIN: {
    label: "Yin Yoga",
    type: "Deep Stretch",
    description: "Slow poses held longer to open fascia and joints.",
    price: 14,
    duration: "1 hr",
    location: "San Francisco",
    instructor: "Staff Member #10",
    capacity: 16,
    tags: ["Stretch", "Slow", "Deep"],
    timeZone: "America/Los_Angeles",
    weeklyHours: {
      Friday: [{ open: "12:00", close: "13:00" }],
      Sunday: [{ open: "18:00", close: "19:00" }],
    },
  },
};
