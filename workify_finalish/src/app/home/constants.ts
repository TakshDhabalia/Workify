import {
  initialEducation,
  initialProfile,
  initialProject,
  initialWorkExperience,
} from "lib/redux/resumeSlice";
import type { Resume } from "lib/redux/types";
import { deepClone } from "lib/deep-clone";

export const END_HOME_RESUME: Resume = {
  profile: {
    name: "Taksh Dhabalia",
    summary:
      "Software engineer passionate about building exceptional products that solve real-world problems.",
    email: "dhabalia.taksh@gmail.com",
    phone: "+91 7715958053",
    location: "Pune, Maharashtra",
    url: "linkedin.com/in/taksh-dhabalia-2b6969202",
  },
  workExperiences: [
    {
      company: "IIIT-Delhi",
      jobTitle: "System Design and Embedded Software Developer Intern",
      date: "Jan 2024 - Aug 2024",
      descriptions: [
        "Designed and implemented a water management system with app and cloud integration.",
        "Developed hardware architecture, deployed on STM32 microcontrollers.",
        "Built the project app in Dart using Flutter and integrated Firebase backend.",
      ],
    },
    {
      company: "Team Bolt",
      jobTitle: "Vice Lead, Electronics",
      date: "June 2023 - Jan 2024",
      descriptions: [
        "Led the electronics department in the FMAE Moto Student India competition, achieving top rankings.",
        "Developed innovations like GPS tracking and SOS sensors for electric super bike.",
        "Managed electrical systems and circuitry for GLVS and HVS.",
      ],
    },
  ],
  educations: [
    {
      school: "Maharashtra Institute of Technology - Pune",
      degree: "BTech in Computer Science",
      date: "Aug 2022 - June 2026",
      gpa: "7.5",
      descriptions: [
        "Secured 91.7% in 10th ICSE.",
        "Relevant coursework: Embedded Systems, Algorithms, Machine Learning.",
      ],
    },
  ],
  projects: [
    {
      project: "Tarzan",
      date: "Aug 2024 - Present",
      descriptions: [
        "Developing a portable module for autonomous driving in non-ADAS cars using deep learning and sensors.",
        "Implemented steering, acceleration, and braking control with real-time MATLAB simulations.",
      ],
    }
  ],
  skills: {
    featuredSkills: [
      { skill: "Python", rating: 4 },
      { skill: "C++", rating: 4 },
      { skill: "Flutter", rating: 3 },
      { skill: "TensorFlow", rating: 3 },
      { skill: "OpenCV", rating: 3 },
    ],
    descriptions: [
      "Tech: Embedded Systems, MATLAB, Node-RED, ESP-Now, LoRaWAN",
      "Soft: Leadership, Communication, Problem Solving, Team Collaboration",
    ],
  },
  custom: {
    descriptions: ["Led projects across cloud-based embedded systems and autonomous driving modules."],
  },
};

export const START_HOME_RESUME: Resume = {
  profile: deepClone(initialProfile),
  workExperiences: END_HOME_RESUME.workExperiences.map(() =>
    deepClone(initialWorkExperience)
  ),
  educations: [deepClone(initialEducation)],
  projects: [deepClone(initialProject)],
  skills: {
    featuredSkills: END_HOME_RESUME.skills.featuredSkills.map((item) => ({
      skill: "",
      rating: item.rating,
    })),
    descriptions: [],
  },
  custom: {
    descriptions: [],
  },
};
