import ERP from "../../assets/Graphics/erp.png";
import ERP2 from "../../assets/Home-service-image/89826.png";

//icon
import icon1 from "../../assets/icons/achievement_9746277.png";
import icon2 from "../../assets/icons/revenue_9428460.png";
import icon3 from "../../assets/icons/safebox_1954179.png";
import icon4 from "../../assets/icons/startup_4159353.png";

//grapics
import graphic1 from "../../assets/Graphics/operations.png";
import graphic2 from "../../assets/Graphics/scalable.png";
import graphic3 from "../../assets/Graphics/dashboard.png";
import graphic4 from "../../assets/Graphics/implementation.png";

export const erpData = {
  erp: {
    whatErp: {
      slug: "whatErp",
      hero: {
        badge: "What is ERP?",
        title: "The integrated system that unifies your business in real time",
        description:
          "Enterprise Resource Planning (ERP) is software that consolidates finance, sales, inventory, manufacturing, HR, and more into a single, integrated platform, automating processes, centralizing data, and delivering up‑to‑date visibility across your company, whether deployed in the cloud or on‑premise.",
        primaryButton: {
          label: "Discover More",
          link: "/contact",
        },
        heroImage:
          ERP,
      },

      reasons: {
        title: "Why ERP is the smart choice for growing businesses",
        items: [
          {
            icon:
              icon1,
            title: "One source of truth",
            description:
              "ERP eliminates data silos by centralizing operations and information so teams work from the same, reliable facts.",
          },
          {
            icon:
              icon2,
            title: "Automation that scales",
            description:
              "Standardized workflows and built‑in automation reduce manual tasks, errors, and handoffs across departments.",
          },
          {
            icon:
              icon3,
            title: "Faster, better decisions",
            description:
              "Real‑time reporting and consolidated dashboards help leaders act quickly with a holistic view of performance.",
          },
          {
            icon:
              icon4,
            title: "Flexible deployment",
            description:
              "Modern ERPs offer cloud and on‑premise options to fit your security, cost, and customization needs.",
          },
        ],
      },

      benefits: {
        title: "Maximize business performance with a modern ERP",
        description:
          "As companies expand, juggling separate tools slows execution and blurs accountability; a modern ERP replaces fragmented apps with a modular suite of integrated business applications so you can start where the impact is biggest, add apps as you grow, and keep every process connected end‑to‑end.",
        items: [
          {
            title: "Integrated Operations",
            description:
              "Run sales, inventory, accounting, projects, and more on one platform.",
            image:
              graphic1,
          },
          {
            title: "Automation & Workflows",
            description:
              "Standardize processes to cut cycle times and reduce manual work. ",
            image:
              graphic2,
          },
          {
            title: "Real‑Time Visibility",
            description:
              "Use live data and reports to steer the performance company wide.",
            image:
              graphic3,
          },
          {
            title: "Cloud or On‑Premise",
            description:
              "Deploy the way you want and evolve at your own pace.",
            image:
              graphic4,
          },
        ],
      },
    },

    whatOdoo: {
      slug: "whatOdoo",
      hero: {
        badge: "What is Odoo?",
        title: "All your business on one platform, simple, efficient, and affordable",
        description:
          "Odoo combines an integrated suite of business apps with open‑source flexibility and fair pricing, giving you the power to launch fast, automate more, and scale without the usual ERP complexity.",
        primaryButton: {
          label: "Talk to Our Expert",
          link: "/contact",
        },
        heroImage:
          ERP2,
      },

      reasons: {
        title: "Why Odoo is the smart choice for modern companies",
        items: [
          {
            icon:
              icon1,
            title: "Fully‑integrated apps",
            description:
              "From CRM and Sales to Inventory, Accounting, POS, and MRP, every app works together out of the box.",
          },
          {
            icon:
              icon2,
            title: "Modular & customizable",
            description:
              "Start with a few apps, add more as you grow, and use Odoo Studio to tailor fields, views, and approvals without code.",
          },
          {
            icon:
              icon3,
            title: "Open, portable, no lock‑in",
            description:
              "Own your data, access the source, and host in the cloud or on‑premise with the freedom of Odoo’s open approach.",
          },
          {
            icon:
              icon4,
            title: "Transparent pricing",
            description:
              "Get hundreds of apps under a single, all‑inclusive Enterprise price with hosting, upgrades, and support included.",
          },
        ],
      },

      benefits: {
        title: "Maximize time‑to‑value with Odoo",
        description:
          "Odoo lets you deploy quickly, expand incrementally, and stay compliant as you scale—thanks to localizations like Indonesia e‑Faktur/Coretax and built‑in multi‑currency accounting that keep global operations accurate and audit‑ready.",
        items: [
          {
            title: "Integrated Suite",
            description:
              "One platform for websites, sales, operations, and finance.",
            image:
              graphic1,
          },
          {
            title: "Low‑Code Customization",
            description:
              "Design screens, reports, automations, and approvals in Odoo Studio.",
            image:
              graphic2,
          },
          {
            title: "Global & Local Compliance",
            description:
              "Work across currencies and Indonesian e‑Faktur (Coretax) with official localizations.",
            image:
              graphic3,
          },
          {
            title: "Proven Partner Ecosystem",
            description:
              "Leverage award‑winning Odoo partners like Portcities to deliver at scale.",
            image:
              graphic4,
          },
        ],
      },
    },
  },
};
