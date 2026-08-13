import { useState } from "react";

type jobStatus =
  | "Ghosted"
  | "HR Interview"
  | "Technical Interview"
  | "Assessment"
  | "ghosted"
  | "Rejected";

type ApplicationFormFileds  = {
  jobTitle: string;
  jobDescription: string;
  jobUrl: string;
  jobStatus: jobStatus;
  company: string;
  notes: string;
  resumeUsed: string;
};
const statusList: string[] = [
  "Ghosted",
  "HR Interview",
  "Technical Interview",
  "Assessment",
  "ghosted",
  "Rejected",
];
const specialFields: string[] = ["jobStatus", "notes", "resumeUsed"];
export default function ApplicationForm() {
  const [data, setData] = useState<ApplicationFormFileds>([
    jobTitle: "",
    jobDescription: "",
    jobUrl: "",
    company: "",
    status: "ghosted",
    notes: "",
    resumeUsed: "",
  ]);
  return <form action="">{data.map}</form>;
}
