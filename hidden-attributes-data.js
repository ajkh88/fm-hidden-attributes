/* eslint-disable max-lines */
export { personalityData, mediaHandlingData }

const personalityData = {
  "Ambitious": {
    "professionalism": {
      "min": 1,
      "max": 20
    },
    "determination": {
      "min": 1,
      "max": 17
    },
    "ambition": {
      "min": 16,
      "max": 19
    },
    "pressure": {
      "min": 1,
      "max": 20
    },
    "temperament": {
      "min": 1,
      "max": 20
    },
    "loyalty": {
      "min": 7,
      "max": 9
    },
    "sportsmanship": {
      "min": 1,
      "max": 20
    },
    "cases_determination": ["1_9_professionalism"],
    "cases_not": [
      "temperamental",
      "professional"
    ]
  },
  "Balanced": {
    "professionalism": {
      "min": 1,
      "max": 14
    },
    "determination": {
      "min": 1,
      "max": 14
    },
    "ambition": {
      "min": 1,
      "max": 14
    },
    "pressure": {
      "min": 1,
      "max": 20
    },
    "temperament": {
      "min": 1,
      "max": 20
    },
    "loyalty": {
      "min": 1,
      "max": 14
    },
    "sportsmanship": {
      "min": 1,
      "max": 14
    },
    "cases_determination": [
      "1_5_ambition",
      "1_9_professionalism",
      "1_9_pressure",
      "11_20_sportsmanship"
    ],
    "cases_not": [
      "temperamental",
      "unambitious",
      "spirit_or_jovial"
    ]
  },
  "Born Leader": {
    "professionalism": {
      "min": 1,
      "max": 20
    },
    "determination": {
      "min": 20,
      "max": 20
    },
    "ambition": {
      "min": 1,
      "max": 20
    },
    "pressure": {
      "min": 1,
      "max": 20
    },
    "temperament": {
      "min": 1,
      "max": 20
    },
    "loyalty": {
      "min": 1,
      "max": 20
    },
    "sportsmanship": {
      "min": 1,
      "max": 20
    },
    "cases_determination": [],
    "cases_not": []
  },
  "Casual": {
    "professionalism": {
      "min": 2,
      "max": 4
    },
    "determination": {
      "min": 1,
      "max": 9
    },
    "ambition": {
      "min": 1,
      "max": 20
    },
    "pressure": {
      "min": 1,
      "max": 20
    },
    "temperament": {
      "min": 5,
      "max": 20
    },
    "loyalty": {
      "min": 1,
      "max": 20
    },
    "sportsmanship": {
      "min": 1,
      "max": 20
    },
    "cases_determination": [],
    "cases_not": []
  },
  "Charismatic Leader": {
    "professionalism": {
      "min": 1,
      "max": 20
    },
    "determination": {
      "min": 1,
      "max": 20
    },
    "ambition": {
      "min": 1,
      "max": 20
    },
    "pressure": {
      "min": 1,
      "max": 20
    },
    "temperament": {
      "min": 18,
      "max": 20
    },
    "loyalty": {
      "min": 1,
      "max": 20
    },
    "sportsmanship": {
      "min": 18,
      "max": 20
    },
    "cases_determination": [],
    "cases_not": []
  },
  "Determined": {
    "professionalism": {
      "min": 1,
      "max": 20
    },
    "determination": {
      "min": 18,
      "max": 20
    },
    "ambition": {
      "min": 1,
      "max": 11
    },
    "pressure": {
      "min": 1,
      "max": 20
    },
    "temperament": {
      "min": 1,
      "max": 20
    },
    "loyalty": {
      "min": 1,
      "max": 20
    },
    "sportsmanship": {
      "min": 1,
      "max": 20
    },
    "cases_determination": [],
    "cases_not": [
      "professional",
      "perfectionist"
    ]
  },
  "Devoted": {
    "professionalism": {
      "min": 1,
      "max": 20
    },
    "determination": {
      "min": 6,
      "max": 17
    },
    "ambition": {
      "min": 6,
      "max": 7
    },
    "pressure": {
      "min": 1,
      "max": 20
    },
    "temperament": {
      "min": 1,
      "max": 20
    },
    "loyalty": {
      "min": 20,
      "max": 20
    },
    "sportsmanship": {
      "min": 1,
      "max": 20
    },
    "cases_determination": [],
    "cases_not": []
  },
  "Driven": {
    "professionalism": {
      "min": 1,
      "max": 20
    },
    "determination": {
      "min": 18,
      "max": 20
    },
    "ambition": {
      "min": 12,
      "max": 20
    },
    "pressure": {
      "min": 1,
      "max": 20
    },
    "temperament": {
      "min": 1,
      "max": 20
    },
    "loyalty": {
      "min": 1,
      "max": 20
    },
    "sportsmanship": {
      "min": 1,
      "max": 20
    },
    "cases_determination": [],
    "cases_not": [
      "professional",
      "perfectionist"
    ]
  },
  "Easily discouraged": {
    "professionalism": {
      "min": 5,
      "max": 20
    },
    "determination": {
      "min": 1,
      "max": 1
    },
    "ambition": {
      "min": 1,
      "max": 9
    },
    "pressure": {
      "min": 1,
      "max": 20
    },
    "temperament": {
      "min": 1,
      "max": 20
    },
    "loyalty": {
      "min": 1,
      "max": 20
    },
    "sportsmanship": {
      "min": 1,
      "max": 17
    },
    "cases_determination": [],
    "cases_not": [
      "temperamental",
      "professional",
      "unambitious"
    ]
  },
  "Fairly Ambitious": {
    "professionalism": {
      "min": 1,
      "max": 14
    },
    "determination": {
      "min": 1,
      "max": 14
    },
    "ambition": {
      "min": 15,
      "max": 20
    },
    "pressure": {
      "min": 1,
      "max": 20
    },
    "temperament": {
      "min": 1,
      "max": 20
    },
    "loyalty": {
      "min": 1,
      "max": 20
    },
    "sportsmanship": {
      "min": 1,
      "max": 20
    },
    "cases_determination": [
      "1_9_professionalism",
      "1_9_pressure",
      "1_9_sportsmanship",
      "11_20_sportsmanship"
    ],
    "cases_not": [
      "temperamental",
      "ambitious",
      "spirit_or_jovial"
    ]
  },
  "Fairly Determined": {
    "professionalism": {
      "min": 1,
      "max": 14
    },
    "determination": {
      "min": 15,
      "max": 17
    },
    "ambition": {
      "min": 1,
      "max": 20
    },
    "pressure": {
      "min": 1,
      "max": 16
    },
    "temperament": {
      "min": 1,
      "max": 20
    },
    "loyalty": {
      "min": 1,
      "max": 20
    },
    "sportsmanship": {
      "min": 5,
      "max": 20
    },
    "cases_determination": ["18_20_ambition"],
    "cases_not": [
      "temperamental",
      "ambitious",
      "unambitious",
      "loyal",
      "spirit_or_jovial"
    ]
  },
  "Fairly Loyal": {
    "professionalism": {
      "min": 1,
      "max": 14
    },
    "determination": {
      "min": 1,
      "max": 14
    },
    "ambition": {
      "min": 6,
      "max": 14
    },
    "pressure": {
      "min": 1,
      "max": 20
    },
    "temperament": {
      "min": 1,
      "max": 20
    },
    "loyalty": {
      "min": 15,
      "max": 20
    },
    "sportsmanship": {
      "min": 1,
      "max": 20
    },
    "cases_determination": [
      "1_5_ambition",
      "1_9_professionalism",
      "1_9_pressure",
      "1_9_sportsmanship",
      "11_20_sportsmanship"
    ],
    "cases_not": [
      "temperamental",
      "loyal",
      "spirit_or_jovial"
    ]
  },
  "Fairly Professional": {
    "professionalism": {
      "min": 15,
      "max": 20
    },
    "determination": {
      "min": 1,
      "max": 14
    },
    "ambition": {
      "min": 1,
      "max": 20
    },
    "pressure": {
      "min": 1,
      "max": 20
    },
    "temperament": {
      "min": 1,
      "max": 20
    },
    "loyalty": {
      "min": 1,
      "max": 20
    },
    "sportsmanship": {
      "min": 1,
      "max": 20
    },
    "cases_determination": [
      "1_5_ambition",
      "1_9_pressure",
      "1_9_sportsmanship",
      "11_20_sportsmanship"
    ],
    "cases_not": [
      "professional",
      "ambitious",
      "unambitious",
      "loyal",
      "spirit_or_jovial"
    ]
  },
  "Fairly Sporting": {
    "professionalism": {
      "min": 1,
      "max": 14
    },
    "determination": {
      "min": 1,
      "max": 14
    },
    "ambition": {
      "min": 1,
      "max": 14
    },
    "pressure": {
      "min": 1,
      "max": 20
    },
    "temperament": {
      "min": 1,
      "max": 20
    },
    "loyalty": {
      "min": 1,
      "max": 14
    },
    "sportsmanship": {
      "min": 15,
      "max": 20
    },
    "cases_determination": [
      "1_5_ambition",
      "1_9_professionalism",
      "1_9_pressure",
      "1_9_sportsmanship"
    ],
    "cases_not": [
      "temperamental",
      "spirit_or_jovial"
    ]
  },
  "Fickle": {
    "professionalism": {
      "min": 1,
      "max": 20
    },
    "determination": {
      "min": 1,
      "max": 17
    },
    "ambition": {
      "min": 16,
      "max": 20
    },
    "pressure": {
      "min": 1,
      "max": 20
    },
    "temperament": {
      "min": 1,
      "max": 20
    },
    "loyalty": {
      "min": 4,
      "max": 6
    },
    "sportsmanship": {
      "min": 1,
      "max": 20
    },
    "cases_determination": [],
    "cases_not": []
  },
  "Honest": {
    "professionalism": {
      "min": 5,
      "max": 20
    },
    "determination": {
      "min": 1,
      "max": 9
    },
    "ambition": {
      "min": 1,
      "max": 20
    },
    "pressure": {
      "min": 1,
      "max": 20
    },
    "temperament": {
      "min": 1,
      "max": 20
    },
    "loyalty": {
      "min": 1,
      "max": 20
    },
    "sportsmanship": {
      "min": 20,
      "max": 20
    },
    "cases_determination": [],
    "cases_not": [
      "temperamental",
      "professional",
      "ambitious",
      "unambitious"
    ]
  },
  "Iron Willed": {
    "professionalism": {
      "min": 1,
      "max": 20
    },
    "determination": {
      "min": 15,
      "max": 17
    },
    "ambition": {
      "min": 1,
      "max": 20
    },
    "pressure": {
      "min": 20,
      "max": 20
    },
    "temperament": {
      "min": 1,
      "max": 20
    },
    "loyalty": {
      "min": 1,
      "max": 20
    },
    "sportsmanship": {
      "min": 5,
      "max": 20
    },
    "cases_determination": ["18_20_ambition"],
    "cases_not": [
      "temperamental",
      "professional",
      "ambitious",
      "unambitious",
      "loyal"
    ]
  },
  "Jovial": {
    "professionalism": {
      "min": 1,
      "max": 10
    },
    "determination": {
      "min": 1,
      "max": 17
    },
    "ambition": {
      "min": 1,
      "max": 20
    },
    "pressure": {
      "min": 15,
      "max": 20
    },
    "temperament": {
      "min": 10,
      "max": 20
    },
    "loyalty": {
      "min": 1,
      "max": 20
    },
    "sportsmanship": {
      "min": 1,
      "max": 14
    },
    "cases_determination": [
      "1_5_ambition",
      "1_9_professionalism",
      "1_9_sportsmanship",
      "11_20_sportsmanship",
      "15_20_pressure",
      "18_20_ambition"
    ],
    "cases_not": [
      "ambitious",
      "unambitious",
      "loyal"
    ]
  },
  "Leader": {
    "professionalism": {
      "min": 1,
      "max": 20
    },
    "determination": {
      "min": 1,
      "max": 20
    },
    "ambition": {
      "min": 1,
      "max": 20
    },
    "pressure": {
      "min": 1,
      "max": 20
    },
    "temperament": {
      "min": 1,
      "max": 20
    },
    "loyalty": {
      "min": 1,
      "max": 20
    },
    "sportsmanship": {
      "min": 1,
      "max": 20
    },
    "cases_determination": [],
    "cases_not": []
  },
  "Light-Hearted": {
    "professionalism": {
      "min": 1,
      "max": 17
    },
    "determination": {
      "min": 1,
      "max": 17
    },
    "ambition": {
      "min": 1,
      "max": 20
    },
    "pressure": {
      "min": 15,
      "max": 20
    },
    "temperament": {
      "min": 10,
      "max": 20
    },
    "loyalty": {
      "min": 1,
      "max": 20
    },
    "sportsmanship": {
      "min": 15,
      "max": 20
    },
    "cases_determination": [
      "1_5_ambition",
      "1_9_professionalism",
      "1_9_sportsmanship",
      "15_20_pressure",
      "18_20_ambition"
    ],
    "cases_not": [
      "ambitious",
      "unambitious",
      "loyal"
    ]
  },
  "Low Determination": {
    "professionalism": {
      "min": 5,
      "max": 20
    },
    "determination": {
      "min": 2,
      "max": 5
    },
    "ambition": {
      "min": 1,
      "max": 9
    },
    "pressure": {
      "min": 1,
      "max": 20
    },
    "temperament": {
      "min": 1,
      "max": 20
    },
    "loyalty": {
      "min": 1,
      "max": 20
    },
    "sportsmanship": {
      "min": 1,
      "max": 17
    },
    "cases_determination": [],
    "cases_not": [
      "temperamental",
      "professional",
      "unambitious"
    ]
  },
  "Low Self-Belief": {
    "professionalism": {
      "min": 5,
      "max": 20
    },
    "determination": {
      "min": 1,
      "max": 9
    },
    "ambition": {
      "min": 1,
      "max": 20
    },
    "pressure": {
      "min": 2,
      "max": 3
    },
    "temperament": {
      "min": 1,
      "max": 20
    },
    "loyalty": {
      "min": 1,
      "max": 20
    },
    "sportsmanship": {
      "min": 1,
      "max": 17
    },
    "cases_determination": ["1_5_ambition"],
    "cases_not": [
      "temperamental",
      "professional",
      "ambitious",
      "unambitious",
      "loyal"
    ]
  },
  "Loyal": {
    "professionalism": {
      "min": 1,
      "max": 20
    },
    "determination": {
      "min": 6,
      "max": 17
    },
    "ambition": {
      "min": 6,
      "max": 7
    },
    "pressure": {
      "min": 1,
      "max": 20
    },
    "temperament": {
      "min": 1,
      "max": 20
    },
    "loyalty": {
      "min": 18,
      "max": 19
    },
    "sportsmanship": {
      "min": 1,
      "max": 20
    },
    "cases_determination": [
      "1_9_professionalism",
      "11_20_sportsmanship"
    ],
    "cases_not": [
      "temperamental",
      "professional"
    ]
  },
  "Mercenary": {
    "professionalism": {
      "min": 1,
      "max": 20
    },
    "determination": {
      "min": 1,
      "max": 17
    },
    "ambition": {
      "min": 16,
      "max": 20
    },
    "pressure": {
      "min": 1,
      "max": 20
    },
    "temperament": {
      "min": 1,
      "max": 20
    },
    "loyalty": {
      "min": 1,
      "max": 3
    },
    "sportsmanship": {
      "min": 1,
      "max": 20
    },
    "cases_determination": [],
    "cases_not": []
  },
  "Model Citizen": {
    "professionalism": {
      "min": 15,
      "max": 20
    },
    "determination": {
      "min": 14,
      "max": 20
    },
    "ambition": {
      "min": 12,
      "max": 20
    },
    "pressure": {
      "min": 14,
      "max": 20
    },
    "temperament": {
      "min": 15,
      "max": 20
    },
    "loyalty": {
      "min": 15,
      "max": 20
    },
    "sportsmanship": {
      "min": 15,
      "max": 20
    },
    "cases_determination": [],
    "cases_not": []
  },
  "Model Professional": {
    "professionalism": {
      "min": 20,
      "max": 20
    },
    "determination": {
      "min": 1,
      "max": 20
    },
    "ambition": {
      "min": 1,
      "max": 20
    },
    "pressure": {
      "min": 1,
      "max": 20
    },
    "temperament": {
      "min": 10,
      "max": 20
    },
    "loyalty": {
      "min": 1,
      "max": 20
    },
    "sportsmanship": {
      "min": 1,
      "max": 20
    },
    "cases_determination": [],
    "cases_not": []
  },
  "Perfectionist": {
    "professionalism": {
      "min": 14,
      "max": 20
    },
    "determination": {
      "min": 14,
      "max": 20
    },
    "ambition": {
      "min": 14,
      "max": 20
    },
    "pressure": {
      "min": 1,
      "max": 20
    },
    "temperament": {
      "min": 1,
      "max": 9
    },
    "loyalty": {
      "min": 1,
      "max": 20
    },
    "sportsmanship": {
      "min": 1,
      "max": 20
    },
    "cases_determination": [],
    "cases_not": []
  },
  "Professional": {
    "professionalism": {
      "min": 18,
      "max": 20
    },
    "determination": {
      "min": 1,
      "max": 20
    },
    "ambition": {
      "min": 1,
      "max": 20
    },
    "pressure": {
      "min": 1,
      "max": 20
    },
    "temperament": {
      "min": 10,
      "max": 20
    },
    "loyalty": {
      "min": 1,
      "max": 20
    },
    "sportsmanship": {
      "min": 1,
      "max": 20
    },
    "cases_determination": [],
    "cases_not": []
  },
  "Realist": {
    "professionalism": {
      "min": 1,
      "max": 20
    },
    "determination": {
      "min": 11,
      "max": 17
    },
    "ambition": {
      "min": 1,
      "max": 20
    },
    "pressure": {
      "min": 1,
      "max": 20
    },
    "temperament": {
      "min": 1,
      "max": 20
    },
    "loyalty": {
      "min": 1,
      "max": 20
    },
    "sportsmanship": {
      "min": 2,
      "max": 4
    },
    "cases_determination": ["18_20_ambition"],
    "cases_not": [
      "temperamental",
      "professional",
      "ambitious",
      "unambitious"
    ]
  },
  "Resilient": {
    "professionalism": {
      "min": 1,
      "max": 20
    },
    "determination": {
      "min": 15,
      "max": 17
    },
    "ambition": {
      "min": 6,
      "max": 20
    },
    "pressure": {
      "min": 17,
      "max": 19
    },
    "temperament": {
      "min": 1,
      "max": 20
    },
    "loyalty": {
      "min": 1,
      "max": 20
    },
    "sportsmanship": {
      "min": 5,
      "max": 20
    },
    "cases_determination": ["18_20_ambition"],
    "cases_not": [
      "temperamental",
      "professional",
      "ambitious",
      "unambitious",
      "loyal"
    ]
  },
  "Resolute": {
    "professionalism": {
      "min": 15,
      "max": 20
    },
    "determination": {
      "min": 15,
      "max": 17
    },
    "ambition": {
      "min": 6,
      "max": 20
    },
    "pressure": {
      "min": 1,
      "max": 16
    },
    "temperament": {
      "min": 1,
      "max": 20
    },
    "loyalty": {
      "min": 1,
      "max": 20
    },
    "sportsmanship": {
      "min": 5,
      "max": 20
    },
    "cases_determination": ["18_20_ambition"],
    "cases_not": [
      "professional",
      "ambitious",
      "unambitious",
      "loyal",
      "spirit_or_jovial"
    ]
  },
  "Slack": {
    "professionalism": {
      "min": 1,
      "max": 1
    },
    "determination": {
      "min": 1,
      "max": 9
    },
    "ambition": {
      "min": 1,
      "max": 20
    },
    "pressure": {
      "min": 1,
      "max": 20
    },
    "temperament": {
      "min": 5,
      "max": 20
    },
    "loyalty": {
      "min": 1,
      "max": 20
    },
    "sportsmanship": {
      "min": 1,
      "max": 20
    },
    "cases_determination": [],
    "cases_not": []
  },
  "Spineless": {
    "professionalism": {
      "min": 5,
      "max": 20
    },
    "determination": {
      "min": 1,
      "max": 9
    },
    "ambition": {
      "min": 1,
      "max": 20
    },
    "pressure": {
      "min": 1,
      "max": 1
    },
    "temperament": {
      "min": 1,
      "max": 20
    },
    "loyalty": {
      "min": 1,
      "max": 20
    },
    "sportsmanship": {
      "min": 1,
      "max": 17
    },
    "cases_determination": ["1_5_ambition"],
    "cases_not": [
      "temperamental",
      "professional",
      "ambitious",
      "unambitious",
      "loyal"
    ]
  },
  "Spirited": {
    "professionalism": {
      "min": 11,
      "max": 17
    },
    "determination": {
      "min": 1,
      "max": 17
    },
    "ambition": {
      "min": 1,
      "max": 20
    },
    "pressure": {
      "min": 15,
      "max": 20
    },
    "temperament": {
      "min": 10,
      "max": 20
    },
    "loyalty": {
      "min": 1,
      "max": 20
    },
    "sportsmanship": {
      "min": 1,
      "max": 14
    },
    "cases_determination": [
      "1_5_ambition",
      "1_9_sportsmanship",
      "11_20_sportsmanship",
      "15_20_pressure",
      "18_20_ambition"
    ],
    "cases_not": [
      "ambitious",
      "unambitious",
      "loyal"
    ]
  },
  "Sporting": {
    "professionalism": {
      "min": 5,
      "max": 20
    },
    "determination": {
      "min": 1,
      "max": 9
    },
    "ambition": {
      "min": 1,
      "max": 20
    },
    "pressure": {
      "min": 1,
      "max": 20
    },
    "temperament": {
      "min": 1,
      "max": 20
    },
    "loyalty": {
      "min": 1,
      "max": 20
    },
    "sportsmanship": {
      "min": 18,
      "max": 19
    },
    "cases_determination": [],
    "cases_not": [
      "temperamental",
      "professional",
      "ambitious",
      "unambitious"
    ]
  },
  "Temperamental": {
    "professionalism": {
      "min": 1,
      "max": 10
    },
    "determination": {
      "min": 1,
      "max": 20
    },
    "ambition": {
      "min": 1,
      "max": 20
    },
    "pressure": {
      "min": 1,
      "max": 20
    },
    "temperament": {
      "min": 1,
      "max": 4
    },
    "loyalty": {
      "min": 1,
      "max": 20
    },
    "sportsmanship": {
      "min": 1,
      "max": 20
    },
    "cases_determination": [],
    "cases_not": []
  },
  "Unambitious": {
    "professionalism": {
      "min": 1,
      "max": 20
    },
    "determination": {
      "min": 1,
      "max": 17
    },
    "ambition": {
      "min": 1,
      "max": 5
    },
    "pressure": {
      "min": 1,
      "max": 20
    },
    "temperament": {
      "min": 1,
      "max": 20
    },
    "loyalty": {
      "min": 11,
      "max": 20
    },
    "sportsmanship": {
      "min": 1,
      "max": 20
    },
    "cases_determination": ["1_9_professionalism"],
    "cases_not": [
      "temperamental",
      "professional"
    ]
  },
  "Unsporting": {
    "professionalism": {
      "min": 1,
      "max": 20
    },
    "determination": {
      "min": 11,
      "max": 17
    },
    "ambition": {
      "min": 1,
      "max": 20
    },
    "pressure": {
      "min": 1,
      "max": 20
    },
    "temperament": {
      "min": 1,
      "max": 20
    },
    "loyalty": {
      "min": 1,
      "max": 20
    },
    "sportsmanship": {
      "min": 1,
      "max": 1
    },
    "cases_determination": ["18_20_ambition"],
    "cases_not": [
      "temperamental",
      "professional",
      "ambitious",
      "unambitious"
    ]
  },
  "Very Ambitious": {
    "professionalism": {
      "min": 1,
      "max": 20
    },
    "determination": {
      "min": 1,
      "max": 17
    },
    "ambition": {
      "min": 20,
      "max": 20
    },
    "pressure": {
      "min": 1,
      "max": 20
    },
    "temperament": {
      "min": 1,
      "max": 20
    },
    "loyalty": {
      "min": 7,
      "max": 9
    },
    "sportsmanship": {
      "min": 1,
      "max": 20
    },
    "cases_determination": ["1_9_professionalism"],
    "cases_not": [
      "temperamental",
      "professional"
    ]
  },
  "Very Loyal": {
    "professionalism": {
      "min": 1,
      "max": 20
    },
    "determination": {
      "min": 6,
      "max": 17
    },
    "ambition": {
      "min": 6,
      "max": 7
    },
    "pressure": {
      "min": 1,
      "max": 20
    },
    "temperament": {
      "min": 1,
      "max": 20
    },
    "loyalty": {
      "min": 20,
      "max": 20
    },
    "sportsmanship": {
      "min": 1,
      "max": 20
    },
    "cases_determination": [
      "1_9_professionalism",
      "11_20_sportsmanship"
    ],
    "cases_not": [
      "temperamental",
      "professional"
    ]
  }
}

const mediaHandlingData = {
  "Out, Unf": {
    "professionalism": {
      "min": 1,
      "max": 20
    },
    "determination": {
      "min": 1,
      "max": 20
    },
    "ambition": {
      "min": 1,
      "max": 20
    },
    "pressure": {
      "min": 15,
      "max": 20
    },
    "temperament": {
      "min": 15,
      "max": 20
    },
    "loyalty": {
      "min": 1,
      "max": 20
    },
    "sportsmanship": {
      "min": 1,
      "max": 20
    },
    "controversy": {
      "min": 15,
      "max": 20
    },
    "cases": []
  },
  "Out, ST, Con": {
    "professionalism": {
      "min": 1,
      "max": 20
    },
    "determination": {
      "min": 1,
      "max": 20
    },
    "ambition": {
      "min": 1,
      "max": 20
    },
    "pressure": {
      "min": 1,
      "max": 20
    },
    "temperament": {
      "min": 1,
      "max": 2
    },
    "loyalty": {
      "min": 1,
      "max": 20
    },
    "sportsmanship": {
      "min": 1,
      "max": 7
    },
    "controversy": {
      "min": 15,
      "max": 20
    },
    "cases": []
  },
  "Out, ST": {
    "professionalism": {
      "min": 1,
      "max": 20
    },
    "determination": {
      "min": 1,
      "max": 20
    },
    "ambition": {
      "min": 1,
      "max": 20
    },
    "pressure": {
      "min": 1,
      "max": 20
    },
    "temperament": {
      "min": 1,
      "max": 2
    },
    "loyalty": {
      "min": 1,
      "max": 20
    },
    "sportsmanship": {
      "min": 8,
      "max": 20
    },
    "controversy": {
      "min": 15,
      "max": 20
    },
    "cases": []
  },
  "Out, Vol, Con": {
    "professionalism": {
      "min": 1,
      "max": 20
    },
    "determination": {
      "min": 1,
      "max": 20
    },
    "ambition": {
      "min": 1,
      "max": 20
    },
    "pressure": {
      "min": 1,
      "max": 20
    },
    "temperament": {
      "min": 3,
      "max": 6
    },
    "loyalty": {
      "min": 1,
      "max": 20
    },
    "sportsmanship": {
      "min": 1,
      "max": 7
    },
    "controversy": {
      "min": 15,
      "max": 20
    },
    "cases": []
  },
  "Out, Vol": {
    "professionalism": {
      "min": 1,
      "max": 20
    },
    "determination": {
      "min": 1,
      "max": 20
    },
    "ambition": {
      "min": 1,
      "max": 20
    },
    "pressure": {
      "min": 1,
      "max": 20
    },
    "temperament": {
      "min": 3,
      "max": 6
    },
    "loyalty": {
      "min": 1,
      "max": 20
    },
    "sportsmanship": {
      "min": 8,
      "max": 20
    },
    "controversy": {
      "min": 15,
      "max": 20
    },
    "cases": []
  },
  "Out, Con": {
    "professionalism": {
      "min": 1,
      "max": 20
    },
    "determination": {
      "min": 1,
      "max": 20
    },
    "ambition": {
      "min": 1,
      "max": 20
    },
    "pressure": {
      "min": 1,
      "max": 20
    },
    "temperament": {
      "min": 7,
      "max": 7
    },
    "loyalty": {
      "min": 1,
      "max": 20
    },
    "sportsmanship": {
      "min": 1,
      "max": 7
    },
    "controversy": {
      "min": 15,
      "max": 20
    },
    "cases": [
      "not_confrontational",
      "not_unflappable"
    ]
  },
  "Out": {
    "professionalism": {
      "min": 1,
      "max": 20
    },
    "determination": {
      "min": 1,
      "max": 20
    },
    "ambition": {
      "min": 1,
      "max": 20
    },
    "pressure": {
      "min": 1,
      "max": 20
    },
    "temperament": {
      "min": 7,
      "max": 20
    },
    "loyalty": {
      "min": 1,
      "max": 20
    },
    "sportsmanship": {
      "min": 1,
      "max": 20
    },
    "controversy": {
      "min": 15,
      "max": 20
    },
    "cases": [
      "not_confrontational",
      "not_unflappable"
    ]
  },
  "Eva, Unf": {
    "professionalism": {
      "min": 15,
      "max": 20
    },
    "determination": {
      "min": 1,
      "max": 20
    },
    "ambition": {
      "min": 1,
      "max": 20
    },
    "pressure": {
      "min": 15,
      "max": 20
    },
    "temperament": {
      "min": 15,
      "max": 15
    },
    "loyalty": {
      "min": 1,
      "max": 20
    },
    "sportsmanship": {
      "min": 1,
      "max": 20
    },
    "controversy": {
      "min": 1,
      "max": 14
    },
    "cases": []
  },
  "Eva, St, Con": {
    "professionalism": {
      "min": 15,
      "max": 20
    },
    "determination": {
      "min": 1,
      "max": 20
    },
    "ambition": {
      "min": 1,
      "max": 20
    },
    "pressure": {
      "min": 15,
      "max": 20
    },
    "temperament": {
      "min": 1,
      "max": 2
    },
    "loyalty": {
      "min": 1,
      "max": 20
    },
    "sportsmanship": {
      "min": 1,
      "max": 7
    },
    "controversy": {
      "min": 1,
      "max": 14
    },
    "cases": []
  },
  "Eva, ST": {
    "professionalism": {
      "min": 15,
      "max": 20
    },
    "determination": {
      "min": 1,
      "max": 20
    },
    "ambition": {
      "min": 1,
      "max": 20
    },
    "pressure": {
      "min": 15,
      "max": 20
    },
    "temperament": {
      "min": 1,
      "max": 2
    },
    "loyalty": {
      "min": 1,
      "max": 20
    },
    "sportsmanship": {
      "min": 8,
      "max": 20
    },
    "controversy": {
      "min": 1,
      "max": 14
    },
    "cases": []
  },
  "Eva, Vol, Con": {
    "professionalism": {
      "min": 15,
      "max": 20
    },
    "determination": {
      "min": 1,
      "max": 20
    },
    "ambition": {
      "min": 1,
      "max": 20
    },
    "pressure": {
      "min": 15,
      "max": 20
    },
    "temperament": {
      "min": 3,
      "max": 6
    },
    "loyalty": {
      "min": 1,
      "max": 20
    },
    "sportsmanship": {
      "min": 1,
      "max": 7
    },
    "controversy": {
      "min": 1,
      "max": 14
    },
    "cases": []
  },
  "Eva, Vol": {
    "professionalism": {
      "min": 15,
      "max": 20
    },
    "determination": {
      "min": 1,
      "max": 20
    },
    "ambition": {
      "min": 1,
      "max": 20
    },
    "pressure": {
      "min": 15,
      "max": 20
    },
    "temperament": {
      "min": 3,
      "max": 6
    },
    "loyalty": {
      "min": 1,
      "max": 20
    },
    "sportsmanship": {
      "min": 8,
      "max": 20
    },
    "controversy": {
      "min": 1,
      "max": 14
    },
    "cases": []
  },
  "Eva, Con": {
    "professionalism": {
      "min": 15,
      "max": 20
    },
    "determination": {
      "min": 1,
      "max": 20
    },
    "ambition": {
      "min": 1,
      "max": 20
    },
    "pressure": {
      "min": 15,
      "max": 20
    },
    "temperament": {
      "min": 7,
      "max": 7
    },
    "loyalty": {
      "min": 1,
      "max": 20
    },
    "sportsmanship": {
      "min": 1,
      "max": 7
    },
    "controversy": {
      "min": 1,
      "max": 14
    },
    "cases": []
  },
  "Eva, Res": {
    "professionalism": {
      "min": 15,
      "max": 20
    },
    "determination": {
      "min": 1,
      "max": 20
    },
    "ambition": {
      "min": 1,
      "max": 20
    },
    "pressure": {
      "min": 15,
      "max": 20
    },
    "temperament": {
      "min": 7,
      "max": 14
    },
    "loyalty": {
      "min": 1,
      "max": 20
    },
    "sportsmanship": {
      "min": 1,
      "max": 20
    },
    "controversy": {
      "min": 1,
      "max": 5
    },
    "cases": [
      "not_confrontational",
      "not_unflappable"
    ]
  },
  "Eva": {
    "professionalism": {
      "min": 15,
      "max": 20
    },
    "determination": {
      "min": 1,
      "max": 20
    },
    "ambition": {
      "min": 1,
      "max": 20
    },
    "pressure": {
      "min": 15,
      "max": 20
    },
    "temperament": {
      "min": 7,
      "max": 14
    },
    "loyalty": {
      "min": 1,
      "max": 20
    },
    "sportsmanship": {
      "min": 1,
      "max": 20
    },
    "controversy": {
      "min": 6,
      "max": 14
    },
    "cases": [
      "not_confrontational",
      "not_unflappable"
    ]
  },
  "Unf": {
    "professionalism": {
      "min": 1,
      "max": 20
    },
    "determination": {
      "min": 1,
      "max": 20
    },
    "ambition": {
      "min": 1,
      "max": 20
    },
    "pressure": {
      "min": 15,
      "max": 20
    },
    "temperament": {
      "min": 15,
      "max": 20
    },
    "loyalty": {
      "min": 11,
      "max": 20
    },
    "sportsmanship": {
      "min": 1,
      "max": 20
    },
    "controversy": {
      "min": 1,
      "max": 14
    },
    "cases": []
  },
  "ST, Con": {
    "professionalism": {
      "min": 13,
      "max": 20
    },
    "determination": {
      "min": 1,
      "max": 20
    },
    "ambition": {
      "min": 1,
      "max": 20
    },
    "pressure": {
      "min": 1,
      "max": 20
    },
    "temperament": {
      "min": 1,
      "max": 2
    },
    "loyalty": {
      "min": 11,
      "max": 20
    },
    "sportsmanship": {
      "min": 1,
      "max": 7
    },
    "controversy": {
      "min": 1,
      "max": 14
    },
    "cases": ["not_evasive"]
  },
  "ST": {
    "professionalism": {
      "min": 1,
      "max": 20
    },
    "determination": {
      "min": 1,
      "max": 20
    },
    "ambition": {
      "min": 1,
      "max": 20
    },
    "pressure": {
      "min": 1,
      "max": 20
    },
    "temperament": {
      "min": 1,
      "max": 2
    },
    "loyalty": {
      "min": 11,
      "max": 20
    },
    "sportsmanship": {
      "min": 8,
      "max": 20
    },
    "controversy": {
      "min": 1,
      "max": 14
    },
    "cases": ["not_evasive"]
  },
  "Vol, Con": {
    "professionalism": {
      "min": 13,
      "max": 20
    },
    "determination": {
      "min": 1,
      "max": 20
    },
    "ambition": {
      "min": 1,
      "max": 20
    },
    "pressure": {
      "min": 1,
      "max": 20
    },
    "temperament": {
      "min": 3,
      "max": 6
    },
    "loyalty": {
      "min": 11,
      "max": 20
    },
    "sportsmanship": {
      "min": 1,
      "max": 7
    },
    "controversy": {
      "min": 1,
      "max": 14
    },
    "cases": ["not_evasive"]
  },
  "Vol": {
    "professionalism": {
      "min": 1,
      "max": 20
    },
    "determination": {
      "min": 1,
      "max": 20
    },
    "ambition": {
      "min": 1,
      "max": 20
    },
    "pressure": {
      "min": 1,
      "max": 20
    },
    "temperament": {
      "min": 3,
      "max": 6
    },
    "loyalty": {
      "min": 11,
      "max": 20
    },
    "sportsmanship": {
      "min": 8,
      "max": 20
    },
    "controversy": {
      "min": 1,
      "max": 14
    },
    "cases": ["not_evasive"]
  },
  "Con": {
    "professionalism": {
      "min": 13,
      "max": 20
    },
    "determination": {
      "min": 1,
      "max": 20
    },
    "ambition": {
      "min": 1,
      "max": 20
    },
    "pressure": {
      "min": 1,
      "max": 20
    },
    "temperament": {
      "min": 7,
      "max": 7
    },
    "loyalty": {
      "min": 11,
      "max": 20
    },
    "sportsmanship": {
      "min": 1,
      "max": 7
    },
    "controversy": {
      "min": 1,
      "max": 14
    },
    "cases": ["not_evasive"]
  },
  "Res": {
    "professionalism": {
      "min": 15,
      "max": 20
    },
    "determination": {
      "min": 1,
      "max": 20
    },
    "ambition": {
      "min": 1,
      "max": 20
    },
    "pressure": {
      "min": 1,
      "max": 14
    },
    "temperament": {
      "min": 7,
      "max": 20
    },
    "loyalty": {
      "min": 11,
      "max": 20
    },
    "sportsmanship": {
      "min": 1,
      "max": 20
    },
    "controversy": {
      "min": 1,
      "max": 5
    },
    "cases": [
      "not_evasive",
      "not_confrontational"
    ]
  },
  "LH": {
    "professionalism": {
      "min": 1,
      "max": 20
    },
    "determination": {
      "min": 1,
      "max": 20
    },
    "ambition": {
      "min": 1,
      "max": 20
    },
    "pressure": {
      "min": 1,
      "max": 20
    },
    "temperament": {
      "min": 7,
      "max": 20
    },
    "loyalty": {
      "min": 11,
      "max": 20
    },
    "sportsmanship": {
      "min": 1,
      "max": 20
    },
    "controversy": {
      "min": 1,
      "max": 14
    },
    "cases": [
      "not_evasive",
      "not_confrontational",
      "not_unflappable",
      "not_reserved"
    ]
  },
  "MF, Unf": {
    "professionalism": {
      "min": 1,
      "max": 20
    },
    "determination": {
      "min": 1,
      "max": 20
    },
    "ambition": {
      "min": 1,
      "max": 20
    },
    "pressure": {
      "min": 15,
      "max": 20
    },
    "temperament": {
      "min": 15,
      "max": 20
    },
    "loyalty": {
      "min": 1,
      "max": 20
    },
    "sportsmanship": {
      "min": 1,
      "max": 20
    },
    "controversy": {
      "min": 1,
      "max": 14
    },
    "cases": ["not_level_headed"]
  },
  "MF, ST, Con": {
    "professionalism": {
      "min": 1,
      "max": 20
    },
    "determination": {
      "min": 1,
      "max": 20
    },
    "ambition": {
      "min": 1,
      "max": 20
    },
    "pressure": {
      "min": 1,
      "max": 20
    },
    "temperament": {
      "min": 1,
      "max": 2
    },
    "loyalty": {
      "min": 1,
      "max": 20
    },
    "sportsmanship": {
      "min": 1,
      "max": 7
    },
    "controversy": {
      "min": 1,
      "max": 14
    },
    "cases": [
      "not_evasive",
      "not_level_headed"
    ]
  },
  "MF, ST": {
    "professionalism": {
      "min": 1,
      "max": 20
    },
    "determination": {
      "min": 1,
      "max": 20
    },
    "ambition": {
      "min": 1,
      "max": 20
    },
    "pressure": {
      "min": 1,
      "max": 20
    },
    "temperament": {
      "min": 1,
      "max": 2
    },
    "loyalty": {
      "min": 1,
      "max": 20
    },
    "sportsmanship": {
      "min": 8,
      "max": 20
    },
    "controversy": {
      "min": 1,
      "max": 14
    },
    "cases": [
      "not_evasive",
      "not_level_headed"
    ]
  },
  "MF, Vol, Con": {
    "professionalism": {
      "min": 1,
      "max": 20
    },
    "determination": {
      "min": 1,
      "max": 20
    },
    "ambition": {
      "min": 1,
      "max": 20
    },
    "pressure": {
      "min": 1,
      "max": 20
    },
    "temperament": {
      "min": 3,
      "max": 6
    },
    "loyalty": {
      "min": 1,
      "max": 20
    },
    "sportsmanship": {
      "min": 1,
      "max": 7
    },
    "controversy": {
      "min": 1,
      "max": 14
    },
    "cases": [
      "not_evasive",
      "not_level_headed"
    ]
  },
  "MF, Vol": {
    "professionalism": {
      "min": 1,
      "max": 20
    },
    "determination": {
      "min": 1,
      "max": 20
    },
    "ambition": {
      "min": 1,
      "max": 20
    },
    "pressure": {
      "min": 1,
      "max": 20
    },
    "temperament": {
      "min": 3,
      "max": 6
    },
    "loyalty": {
      "min": 1,
      "max": 20
    },
    "sportsmanship": {
      "min": 8,
      "max": 20
    },
    "controversy": {
      "min": 1,
      "max": 14
    },
    "cases": [
      "not_evasive",
      "not_level_headed"
    ]
  },
  "MF, Con": {
    "professionalism": {
      "min": 1,
      "max": 20
    },
    "determination": {
      "min": 1,
      "max": 20
    },
    "ambition": {
      "min": 1,
      "max": 20
    },
    "pressure": {
      "min": 1,
      "max": 20
    },
    "temperament": {
      "min": 7,
      "max": 7
    },
    "loyalty": {
      "min": 1,
      "max": 20
    },
    "sportsmanship": {
      "min": 1,
      "max": 7
    },
    "controversy": {
      "min": 1,
      "max": 14
    },
    "cases": [
      "not_evasive",
      "not_level_headed"
    ]
  },
  "MF, Res": {
    "professionalism": {
      "min": 15,
      "max": 20
    },
    "determination": {
      "min": 1,
      "max": 20
    },
    "ambition": {
      "min": 1,
      "max": 20
    },
    "pressure": {
      "min": 1,
      "max": 14
    },
    "temperament": {
      "min": 7,
      "max": 20
    },
    "loyalty": {
      "min": 1,
      "max": 10
    },
    "sportsmanship": {
      "min": 1,
      "max": 20
    },
    "controversy": {
      "min": 1,
      "max": 5
    },
    "cases": [
      "not_confrontational",
      "not_unflappable"
    ]
  },
  "MF": {
    "professionalism": {
      "min": 1,
      "max": 20
    },
    "determination": {
      "min": 1,
      "max": 20
    },
    "ambition": {
      "min": 1,
      "max": 20
    },
    "pressure": {
      "min": 1,
      "max": 20
    },
    "temperament": {
      "min": 7,
      "max": 20
    },
    "loyalty": {
      "min": 1,
      "max": 20
    },
    "sportsmanship": {
      "min": 1,
      "max": 20
    },
    "controversy": {
      "min": 1,
      "max": 14
    },
    "cases": [
      "not_evasive",
      "not_level_headed",
      "not_confrontational",
      "not_unflappable",
      "not_reserved"
    ]
  }
}
