import baner1 from "../../assets/01. Landing Page/banner-01.png";
import baner2 from "../../assets/01. Landing Page/banner-02.png";

//icon
import icon1 from "../../assets/Solution/Stages/02. Small and Medium Enterprise/Quick_deployment.png";
import icon2 from "../../assets/Solution/Stages/02. Small and Medium Enterprise/revenue.png";
import icon3 from "../../assets/Solution/Stages/02. Small and Medium Enterprise/allin.png";
import icon4 from "../../assets/Solution/Stages/02. Small and Medium Enterprise/expert_support.png";

//grapics
import graphic1 from "../../assets/Solution/Stages/02. Small and Medium Enterprise/Business operations.jpg";
import graphic2 from "../../assets/Solution/Stages/02. Small and Medium Enterprise/flexible.jpg";
import graphic3 from "../../assets/Solution/Stages/02. Small and Medium Enterprise/dashboard.jpg";
import graphic4 from "../../assets/Solution/Stages/02. Small and Medium Enterprise/guided_implementation.jpg";

export const stagesData = {
  byStages: {
    smb: {
      slug: "smb",
      hero: {
        badge: "Odoo Solutions for Small & Medium Enterprises",
        title: "Streamline, Scale, and Succeed With a Smarter All‑in‑One ERP",
        description:
          "Running a growing business often means juggling disconnected tools, manual processes, and operational bottlenecks. With Odoo, you can unify everything sales, finance, inventory, operations, and more into one powerful platform built to help SMEs accelerate growth.",
        primaryButton: {
          label: "Meet Our Experts",
          link: "https://wa.me/628139300683?text=Halo%20Admin,%20saya%20ingin%20MeetOurExpert",
        },
        heroImage:
          baner1,
      },

      reasons: {
        title: "The Reasons Why SMEs Choose Our Odoo Solutions",
        items: [
          {
            icon:
              icon1,
            title: "Quick Deployment",
            description:
              "Get your system live in weeks not months so you can start seeing ROI faster.",
          },
          {
            icon:
              icon2,
            title: "Cost-Effective and Modular",
            description:
              "Start with essential apps and expand as your business grows. No expensive overhauls.",
          },
          {
            icon:
              icon3,
            title: "​True All‑in‑One System",
            description:
              "From CRM and accounting to inventory and project management—everything works seamlessly together.",
          },
          {
            icon:
              icon4,
            title: "Expert Support at Every Step",
            description:
              "Our professional consultants guide you through implementation, optimization, and continuous growth.",
          },
        ],
      },

      benefits: {
        title: "What You Get With Our Odoo Implementation",
        description:
          "The right ERP isn’t just software, it's a catalyst for transformation. While most SMEs still struggle with fragmented tools and manual processes, the 30% that adopt an ERP enjoy productivity gains of up to 25%. Our Odoo solutions are purpose built to eliminate operational chaos and empower SMEs to scale smarter, faster, and with confidence.",
        items: [
          {
            title: "Unified Business Operations",
            description:
              "Connect your sales, inventory, CRM, accounting, and more to eliminate data silos and manual work.",
            image:
              graphic1,
          },
          {
            title: "Scalable and Flexible Architecture",
            description:
              "Start small, customize as needed, and expand seamlessly as your business grows. Choose cloud or on‑premise deployment.",
            image:
              graphic2,
          },
          {
            title: "Real‑Time Dashboards and Analytics",
            description:
              "Make informed decisions using dynamic dashboards integrated across departments.",
            image:
              graphic3,
          },
          {
            title: "Smooth and Guided Implementation",
            description:
              "Our certified team supports you through setup, data migration, training, and ongoing optimization.",
            image:
              graphic4,
          },
        ],
      },
    },

    enterprise: {
      slug: "enterprise",
      hero: {
        badge: "Odoo for Large Enterprises",
        title: "A Scalable ERP Platform Built to Power Global Business Growth",
        description:
          "In a fast‑moving global landscape, enterprises need more than a traditional ERP, they need a centralized, intelligent platform that can simplify complexity, accelerate decision‑making, and support continuous expansion. Odoo Enterprise delivers exactly that: a flexible, unified ERP designed to manage large-scale operations with speed, reliability, and precision.",
        primaryButton: {
          label: "Meet Our Experts",
          link:"https://wa.me/628139300683?text=Halo%20Admin,%20saya%20ingin%20MeetOurExpert",
        },
        heroImage:
          baner2,
      },

      reasons: {
        title: "Why Industry Leaders Choose Odoo Enterprise",
        items: [
          {
            icon:
              icon1,
            title: "Centralized Operations Across the Entire Organization",
            description:
              "Replace multiple legacy tools with one connected system. Odoo unifies sales, inventory, HR, finance, supply chain, and more eliminating data silos and reducing the cost of managing fragmented systems.",
          },
          {
            icon:
              icon2,
            title: "Built for Enterprise-Level Scale",
            description:
              "Whether you manage multiple subsidiaries, business units, or international branches, Odoo’s modular architecture ensures fast, efficient scaling without infrastructure headaches.",
          },
          {
            icon:
              icon3,
            title: "Robust Security & High Performance",
            description:
              "Designed for large enterprises handling heavy data loads and high transaction volumes, Odoo delivers consistent performance and enterprise-grade security to protect mission-critical operations.",
          },
          {
            icon:
              icon4,
            title: "Seamless Integration with Existing Systems",
            description:
              "Odoo effortlessly connects with your current software ecosystem, allowing you to modernize without disrupting core operations or compromising data integrity.",
          },
        ],
      },

      benefits: {
        title: "Transforming Enterprise Operations with Odoo",
        description:
          "The right ERP isn’t just a system—it’s the backbone of enterprise performance. As organizations grow, disconnected platforms, data silos, and legacy systems slow everything down. With Odoo Enterprise, global companies replace complexity with a unified, scalable solution built to handle high-volume operations, multi‑company structures, strict security, and enterprise‑grade performance. Our Odoo implementations empower industry leaders to centralize operations, reduce overhead, and scale without limits.",
        items: [
          {
            title: "Integrated, End-to-End Business Processes",
            description:
              "Consolidate everything—from master data and procurement to financial reporting—under one digital ecosystem. Odoo streamlines even the most complex workflows, helping you eliminate operational friction and improve organizational clarity.",
            image:
              graphic1,
          },
          {
            title: "Future-Ready Scalability for Global Growth",
            description:
              "Unlike rigid traditional ERPs, Odoo evolves alongside your business. Its modular design enables you to expand capabilities, support new markets, and onboard new teams with zero disruptions.",
            image:
              graphic2,
          },
          {
            title: "Enterprise-Grade Reliability",
            description:
              "Handle high-volume workloads with confidence. Odoo ensures data consistency, strong system performance, and unified reporting across every business function and location.",
            image:
              graphic3,
          },
          {
            title: "Smooth, Structured Implementation",
            description:
              "Our proven enterprise implementation methodology ensures a seamless transition—from change management to system deployment—minimizing risk and maximizing long-term adoption.",
            image:
              graphic4,
          },
        ],
      },
    },
  },
};
