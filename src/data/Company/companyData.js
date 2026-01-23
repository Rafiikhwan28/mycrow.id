// src/data/DataCompany/dataCompany.js
import image from "../../assets/Graphics/ERP.png";
const companyData = {
  company: {
    about: {
      slug: "about",

      hero: {
        badge: "mycrow",
        title: "Ideas that scale. Execution that delivers.",
        description:
          "At mycrow.id, we help ambitious teams turn ideas into measurable growth. We blend IT consulting, marketing strategy, and graphic design into one agile, outcomes-first practice.",
        heroImage:
          image,
      },

      missions: [
        {
          label: "Our Mission",
          title: "Make modern business simple.",
          description:
            "We believe growth happens when technology is human-friendly, brand stories are clear, and teams work with real-time data.",
          image:
            image,
        },
        {
          label: "Our Mission",
          title: "Make modern business simple.",
          description:
            "From CRM and accounting to inventory and operations, everything works seamlessly together.",
          image:
            image,
        },
      ],

      values: {
        title: "Our Values",
        items: [
          {
            title: "Integrity",
            description:
              "Get your system live in weeks, not months.",
            icon: "https://img.icons8.com/color/96/security-checked.png",
          },
          {
            title: "Grow",
            description:
              "Start small and expand as your business grows.",
            icon: "https://img.icons8.com/color/96/combo-chart.png",
          },
          {
            title: "Impactful",
            description:
              "From CRM to inventory, everything connects.",
            icon: "https://img.icons8.com/color/96/idea.png",
          },
        ],
      },

      workflow: {
        title: "How We Work",
        items: [
          {
            title: "Discover and Prioritize",
            description:
              "Understand business goals and identify the highest impact opportunities.",
            image:
              image,
          },
          {
            title: "Design the System & the Story",
            description:
              "Align technology with brand narrative and user experience.",
            image:
              image,
          },
          {
            title: "Implement and Enable",
            description:
              "Deploy scalable systems and train teams effectively.",
            image:
              image,
          },
          {
            title: "Measure and Improve",
            description:
              "Track performance and continuously optimize with data.",
            image:
              image,
          },
        ],
      },
    },
  },
};

export default companyData;
