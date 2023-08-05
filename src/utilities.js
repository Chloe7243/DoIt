import { FaBookOpen, FaCode, FaUser } from "react-icons/fa";

export const collectionsList = [
  {
    icon: FaCode,
    id: "0",
    title: "Code",
    color: "#ad6cdd",
    todo: [
      {
        title: "Finish Personal Projects",
        due_date: "2023-05-06",
        due_time: "20:10",
        isChecked: false,
      },
      {
        title: "Post Personal Project on Github",
        due_date: "2023-08-13",
        due_time: "20:10",
        isChecked: false,
      },
      {
        title: "Finish React course",
        due_date: "2023-08-13",
        due_time: "20:10",
        isChecked: true,
      },
      {
        title: "Start Node Course",
        due_date: "2023-08-13",
        due_time: "20:10",
        isChecked: false,
      },
    ],
  },
  {
    icon: FaBookOpen,
    id: "1",
    title: "School",
    color: "#fb77a1",
    todo: [
      {
        title: "Do Alx projects",
        due_date: "2023-08-13",
        due_time: "20:10",
        isChecked: false,
      },
      {
        title: "Read up on Alx concepts",
        due_date: "2023-08-13",
        due_time: "20:10",
        isChecked: false,
      },
      {
        title: "Read up on react concepts",
        due_date: "2023-08-13",
        due_time: "20:10",
        isChecked: false,
      },
    ],
  },
  {
    icon: FaUser,
    id: "2",
    title: "Personal",
    color: "#70c3bd",
    todo: [
      {
        title: "Go to market",
        due_date: "2023-08-13",
        due_time: "20:10",
        isChecked: false,
      },
      {
        title: "Pay debts",
        due_date: "2023-08-13",
        due_time: "20:10",
        isChecked: false,
      },
      {
        title: "Collect money",
        due_date: "2023-08-13",
        due_time: "20:10",
        isChecked: false,
      },
    ],
  },
];
