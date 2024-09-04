import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "Alfasim Data VTU website",
    description:
      "A functional and elegant virtual top up web app for the purchase of airtime, data, cable subscription, vouchers and payment of electricity bills.",
    tools: [
      "Nextjs",
      "Supabase",
      "Paystack",
      "Tailwind CSS",
      "ASB VTU API",
      "TypeScript",
    ],
    role: "Frontend Developer",
    code: "https://github.com/kingsley-amoke/alfasimdata-vtu",
    demo: "https://alfasimdata.com.ng",
    image: crefin,
  },
  {
    id: 2,
    name: "Alfasim Data Mobile App",
    description:
      "A functional and elegant virtual top up mobile  app for the purchase of airtime, data, cable subscription, vouchers and payment of electricity bills.",
    tools: [
      "React Native",
      "Supabase",
      "React Native Paper",
      "ASB VTU API",
      "TypeScript",
      "Paystack",
    ],
    role: "Frontend Developer",
    code: "https://github.com/kingsley-amoke/alfasimdata-next",
    demo: "",
    image: travel,
  },
  {
    id: 3,
    name: "Newluck Ecommerce Shop",
    description:
      "A single vendor ecommerce shop built with Laravel, Tailwind, Alpine, Livewire. It featues a professional admin dashboard and order tracker, Paystack payment integration and an elegant landing page.",
    tools: [
      "PHP",
      "Laravel",
      "Livewire",
      "Filament",
      "Alpine JS",
      "Blade",
      "Tailwind CSS",
      "Paystack",
      "MySQL",
    ],
    code: "",
    role: "Full Stack Developer",
    demo: "https://newluckglobal.com",
    image: realEstate,
  },
  {
    id: 4,
    name: "MyPlug Job plus Mobile Shopping App",
    description:
      "A job market, CV revies, ecommerce shop all in one app. It features user-user messaging, admin-user messaging, paystack integration for subscriptions etc.",
    tools: ["React Native", "React Native Paper", "Tailwind CSS", "Firebase"],
    code: "",
    demo: "",
    image: ayla,
    role: "Frontend Developer",
  },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
