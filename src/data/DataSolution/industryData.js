import image1 from "../../assets/Graphics/ERP.png";

//grapics
import graphic1 from "../../assets/Graphics/operations.png";
import graphic2 from "../../assets/Graphics/scalable.png";
import graphic3 from "../../assets/Graphics/dashboard.png";
import graphic4 from "../../assets/Graphics/implementation.png";

//Manufacture
//Banner
import bannerManufacture from "../../assets/Solution/Industri/06. Manufacture/manufacture_banner.png"
//icon
import icon1c from "../../assets/Solution/Industri/06. Manufacture/manufacture.png"
import icon2c from "../../assets/Solution/Industri/06. Manufacture/control2.png"
import icon3c from "../../assets/Solution/Industri/06. Manufacture/quality2.png"
import icon4c from "../../assets/Solution/Industri/06. Manufacture/maintenance2.png"
//img 
import img1c from "../../assets/Solution/Industri/06. Manufacture/process.jpg"
import img2c from "../../assets/Solution/Industri/06. Manufacture/track.jpg"
import img3c from "../../assets/Solution/Industri/06. Manufacture/quality-control-improvement-development-concept.jpg"
import img4c from "../../assets/Solution/Industri/06. Manufacture/integrated.jpg"


//F&B
//Banner
import bannerFNB from "../../assets/Solution/Industri/05. Food and Beverages/Food_Beverage_banner.png"
//icon 
import icon1b from "../../assets/Solution/Industri/05. Food and Beverages/speed.png"
import icon2b from "../../assets/Solution/Industri/05. Food and Beverages/inventory.png"
import icon3b from "../../assets/Solution/Industri/05. Food and Beverages/channel.png"
import icon4b from "../../assets/Solution/Industri/05. Food and Beverages/barcode.png"
//img 
import img1b from "../../assets/Solution/Industri/05. Food and Beverages/speedfast.jpg"
import img2b from "../../assets/Solution/Industri/05. Food and Beverages/control.jpg"
import img3b from "../../assets/Solution/Industri/05. Food and Beverages/stock.jpg"
import img4b from "../../assets/Solution/Industri/05. Food and Beverages/barcodepayment.jpg"



//Retail
//Banner
import bannerRetail from "../../assets/Solution/Industri/04. Retail/banner.png"
//icon 
import icon1a from "../../assets/Solution/Industri/04. Retail/Inventory.png"
import icon2a from "../../assets/Solution/Industri/04. Retail/POS.png"
import icon3a from "../../assets/Solution/Industri/04. Retail/omnichannelpng.png"
import icon4a from "../../assets/Solution/Industri/04. Retail/supply-chain.png"
//img 
import img1a from "../../assets/Solution/Industri/04. Retail/transaction.jpg"
import img2a from "../../assets/Solution/Industri/04. Retail/inventory.jpg"
import img3a from "../../assets/Solution/Industri/04. Retail/customer_interactions.jpg"
import img4a from "../../assets/Solution/Industri/04. Retail/payment.jpg"



const industryData = {
  customize: {
    slug: "customize",
    hero: {
      badge: "Don’t see your industry? Odoo adapts to you",
      title:
        "Composable apps + low‑code customization = a system that fits your business",
      description:
        "Odoo covers CRM, Sales, Inventory, Accounting, HR, Helpdesk, and more—and with Odoo Studio you can tailor data, screens, and approvals without code debt. ",
      primaryButton: {
        label: "Meet Our Experts",
        link: "https://wa.me/628139300683?text=Halo%20Admin,%20saya%20ingin%20MeetOurExpert",
      },
      heroImage: image1,
    },

    video: {
      thumbnail:
        "https://fairmapsarizona.org/wp-content/uploads/2026/01/Design-Ideas-Blogs-Icecat-10.png",
      url: "https://youtu.be/IRbj-SzTcrY",
    },

    reasons: {
      title: "Why Odoo is the smart choice across industries",
      items: [
        {
          icon: "https://img.icons8.com/color/96/pos-terminal.png",
          title: "Low‑code agility",
          description:
            "Add fields, views, automations, and approval rules with upgrade‑safe Studio.",
        },
        {
          icon: "https://img.icons8.com/color/96/combo-chart.png",
          title: "Omnichannel sales",
          description:
            "Run POS, eCommerce, and CRM on one database for a single customer view.",
        },
        {
          icon: "https://img.icons8.com/color/96/cloud.png",
          title: "Appointments & portals",
          description:
            "Let clients self‑book, confirm, and self‑serve through your website.",
        },
        {
          icon: "https://img.icons8.com/color/96/settings.png",
          title: "Operate globally",
          description:
            "Use multi‑company/multi‑currency and localizations as you scale.",
        },
      ],
    },

    benefits: {
      title: "Maximize fit‑to‑process with Odoo Studio",
      description:
        "When your process is your edge, Odoo Studio extends apps, automates workflows, and standardizes documents—without long custom projects.",
      items: [
        {
          title: "Low‑Code Builder",
          description: "Drag‑and‑drop data models, forms, and lists.",
          image: graphic1,
        },
        {
          title: "Automations & Approvals",
          description:
            "Trigger emails, tasks, and multi‑step approvals on conditions.",
          image: graphic2,
        },
        {
          title: "Client Self‑Service",
          description: "Appointments and portals reduce back‑and‑forth.",
          image: graphic3,
        },
        {
          title: "Global Finance Ready",
          description:
            "Multi‑currency and country localizations keep you compliant.",
          image: graphic4,
        },
      ],
    },
  },

  trading: {
    slug: "trading",
    hero: {
      badge: "Odoo for Trading & Distribution",
      title:
        "Buy better, stock smarter, and fulfill faster across warehouses and channels",
      description:
        "Orchestrate purchasing, reordering, routes, barcode execution, and global finance in one platform that scales from local wholesale to cross‑border trade. ",
      primaryButton: {
        label: "MMeet Our Experts",
        link: "https://wa.me/628139300683?text=Halo%20Admin,%20saya%20ingin%20MeetOurExpert",
      },
      heroImage: image1,
    },

    video: {
      thumbnail:
        "https://fairmapsarizona.org/wp-content/uploads/2026/01/Design-Ideas-Blogs-Icecat-10.png",
      url: "https://youtu.be/yZdcmAApq-0",
    },

    reasons: {
      title: "Why Odoo is the smart choice for traders & distributors",
      items: [
        {
          icon: "https://img.icons8.com/color/96/pos-terminal.png",
          title: "Automated replenishment",
          description:
            "Min/Max reordering rules raise RFQs exactly when stock hits thresholds.",
        },
        {
          icon: "https://img.icons8.com/color/96/combo-chart.png",
          title: "Routes & dropshipping",
          description:
            "Define push/pull rules and ship supplier‑to‑customer for special orders.",
        },
        {
          icon: "https://img.icons8.com/color/96/cloud.png",
          title: "Barcode operations",
          description:
            "Use scanners and GS1 to receive, pick, and count quickly and accurately.",
        },
        {
          icon: "https://img.icons8.com/color/96/settings.png",
          title: "Multi‑currency finance",
          description:
            "Invoice and reconcile in foreign currencies with automatic FX differences.",
        },
      ],
    },

    benefits: {
      title: "Maximize fulfillment speed with Odoo Inventory + Purchase",
      description:
        "Odoo’s routes automate internal moves and staging while reordering keeps shelves ready; when needed, the dropship route links SO, PO, and delivery directly to the customer without touching your warehouse.",
      items: [
        {
          title: "Smart Replenishment",
          description: "Rules order to Max and respect multiples and vendors.",
          image: graphic1,
        },
        {
          title: "Dropship Flow",
          description:
            "Supplier POs and partner‑to‑partner deliveries are fully linked.",
          image: graphic2,
        },
        {
          title: "Barcode Picking",
          description:
            "Operations are faster and more accurate with scan‑to‑process.",
          image: graphic3,
        },
        {
          title: "Global Accounting",
          description: "Ledger, journals, and gains/losses handle FX cleanly.",
          image: graphic4,
        },
      ],
    },
  },

  consulting: {
    slug: "consulting",
    hero: {
      badge: "Odoo for Consulting & Professional Services",
      title: "Quote, deliver, timesheet, and invoice confidently and on time",
      description:
        "Connect CRM, Projects, Timesheets, Sales, and Accounting so your firm prices accurately, staffs efficiently, and bills without leakage.",
      primaryButton: {
        label: "Meet Our Experts",
        link: "https://wa.me/628139300683?text=Halo%20Admin,%20saya%20ingin%20MeetOurExpert",
      },
      heroImage: image1,
    },

    video: {
      thumbnail:
        "https://fairmapsarizona.org/wp-content/uploads/2026/01/Design-Ideas-Blogs-Icecat-10.png",
      url: "https://youtu.be/T45Jo3s_Pt4",
    },

    reasons: {
      title: "Why Odoo is the smart choice for service firms",
      items: [
        {
          icon: "https://img.icons8.com/color/96/pos-terminal.png",
          title: "Project + Timesheets",
          description:
            "Log hours by task and role with approvals and analytic accounts for clean WIP.",
        },
        {
          icon: "https://img.icons8.com/color/96/combo-chart.png",
          title: "Flexible billing",
          description:
            "Invoice time & materials, fixed price, or retainers directly from the project.",
        },
        {
          icon: "https://img.icons8.com/color/96/cloud.png",
          title: "CRM‑to‑delivery handoff",
          description:
            "Convert won deals into projects with scope, budgets, and deliverables intact.",
        },
        {
          icon: "https://img.icons8.com/color/96/settings.png",
          title: "Engagement profitability",
          description:
            "Tie hours, expenses, and POs to each project to see margins in real time.",
        },
      ],
    },

    benefits: {
      title: "Maximize utilization with Odoo Projects + Timesheets",
      description:
        "Odoo captures work where it happens, rolls approved entries into periodic invoices, and gives partners clarity on capacity, realization, and collections.",
      items: [
        {
          title: "Timesheet → Invoice",
          description:
            "Bill weekly, monthly, or milestone periods with one click.",
          image: graphic1,
        },
        {
          title: "Role‑Based Rates",
          description:
            "Price by skill or seniority to reflect value delivered.",
          image: graphic2,
        },
        {
          title: "Deal → Project",
          description: "Start delivery the moment the proposal is accepted.",
          image: graphic3,
        },
        {
          title: "Cost & Expense Link",
          description:
            "Attach expenses and vendor bills to keep margins honest.",
          image: graphic4,
        },
      ],
    },
  },

  healthFitness: {
    slug: "healthFitness",
    hero: {
      badge: "Odoo for Health, Wellness & Fitness",
      title:
        "Sell memberships, book classes, and bill services without juggling apps",
      description:
        "Bring memberships, recurring billing, class scheduling, trainer calendars, POS, and member portals into one client‑friendly journey.",
      primaryButton: {
        label: "Meet Our Experts",
        link: "https://wa.me/628139300683?text=Halo%20Admin,%20saya%20ingin%20MeetOurExpert",
      },
      heroImage: image1,
    },

    video: {
      thumbnail:
        "https://fairmapsarizona.org/wp-content/uploads/2026/01/Design-Ideas-Blogs-Icecat-10.png",
      url: "https://youtu.be/4Rko1UHuDWU",
    },

    reasons: {
      title: "Why Odoo is the smart choice for gyms & studios",
      items: [
        {
          icon: "https://img.icons8.com/color/96/pos-terminal.png",
          title: "Subscription memberships",
          description:
            "Automate sign‑up, renewals, and dunning while tracking MRR and churn by plan.",
        },
        {
          icon: "https://img.icons8.com/color/96/combo-chart.png",
          title: "Online booking",
          description:
            "Publish services and schedules, then auto‑sync appointments to staff calendars.",
        },
        {
          icon: "https://img.icons8.com/color/96/cloud.png",
          title: "Member management",
          description:
            "Track status and fees, and publish directories or benefits when needed.",
        },
        {
          icon: "https://img.icons8.com/color/96/settings.png",
          title: "Front‑desk retail",
          description:
            "Sell merchandise and add‑ons via POS that settles to Accounting automatically.",
        },
      ],
    },

    benefits: {
      title: "Maximize member LTV with Odoo Subscriptions + Appointments",
      description:
        "Odoo reduces no‑shows with reminders, connects bookings to memberships and invoices, and gives managers real‑time insight into utilization, add‑on revenue, and plan performance.",
      items: [
        {
          title: "Recurring Plans",
          description: "Self‑service portals simplify upgrades and renewals.",
          image: graphic1,
        },
        {
          title: "Calendar Integration",
          description:
            "Coordinate trainers, rooms, and equipment with resource‑based slots.",
          image: graphic2,
        },
        {
          title: "Member Records",
          description: "Payments, history, and communications in one place.",
          image: graphic3,
        },
        {
          title: "POS & Accounting",
          description:
            "Transparent revenue with automated posting and reconciliation.",
          image: graphic4,
        },
      ],
    },
  },

  foodBeverage: {
    slug: "foodBeverage",
    hero: {
      badge: "Odoo for Food & Beverage",
      title:
        "Perfect stock, fast POS, and FEFO compliance across kitchen and floor",
      description:
        "Odoo links POS, Inventory, Purchase, and Accounting to keep menus moving, prevent overselling, and rotate perishables by FEFO to cut waste.",
      primaryButton: {
        label: "Meet Our Experts",
        link: "https://wa.me/628139300683?text=Halo%20Admin,%20saya%20ingin%20MeetOurExpert",
      },
      heroImage: bannerFNB,
    },

    video: {
      thumbnail:
        "https://fairmapsarizona.org/wp-content/uploads/2026/01/Design-Ideas-Blogs-Icecat-10.png",
      url: "https://youtu.be/5Bl60GkEa50",
    },

    reasons: {
      title: "Why Odoo is the smart choice for F&B operators",
      items: [
        {
          icon: icon1b,
          title: "POS built for speed",
          description:
            "Serve quickly with offline mode, split bills, tips, and integrated payments that post to Accounting.",
        },
        {
          icon: icon2b,
          title: "Perishable‑ready inventory",
          description:
            "Track lots and expiration dates, enforce FEFO, and display expiry data on slips.",
        },
        {
          icon: icon3b,
          title: "One inventory, many channels",
          description:
            "Sync stock across outlets and online so availability is always accurate.",
        },
        {
          icon: icon4b,
          title: "Barcode precision",
          description:
            "Scan to receive, pick, and count so every movement is correct the first time.",
        },
      ],
    },

    benefits: {
      title: "Maximize outlet efficiency with Odoo POS + Inventory",
      description:
        "High‑velocity service demands real‑time visibility; Odoo ties checkout, stock moves, and replenishment together while FEFO prioritizes soonest‑to‑expire lots, protecting margins and compliance.",
      items: [
        {
          title: "Fast, Flexible POS",
          description:
            "Web‑based, device‑agnostic, and easy for staff to learn.",
          image: img1b,
        },
        {
          title: "FEFO & Expiry Control",
          description: "Prevent waste and never ship or serve expired items.",
          image: img2b,
        },
        {
          title: "Unified Stock",
          description: "All outlets.",
          image: img3b,
        },
        {
          title: "Barcode Operations",
          description:
            "GS1 supports speeds receiving and counts with fewer errors.",
          image: img4b,
        },
      ],
    },
  },

  realEstate: {
    slug: "realEstate",
    hero: {
      badge: "Odoo for Real Estate & Property Rentals",
      title:
        "From listings to leases to invoices, manage your portfolio in one system",
      description:
        "Centralize property data, CRM leads, contract templates, availability calendars, and automated recurring billing to keep occupancy high and operations lean.",
      primaryButton: {
        label: "Meet Our Experts",
        link: "https://wa.me/628139300683?text=Halo%20Admin,%20saya%20ingin%20MeetOurExpert",
      },
      heroImage: image1,
    },

    video: {
      thumbnail:
        "https://fairmapsarizona.org/wp-content/uploads/2026/01/Design-Ideas-Blogs-Icecat-10.png",
      url: "https://youtu.be/qkbVGUyIExk",
    },

    reasons: {
      title: "Why Odoo is the smart choice for property teams",
      items: [
        {
          icon: "https://img.icons8.com/color/96/pos-terminal.png",
          title: "Lead‑to‑Lease in one flow",
          description:
            "Capture inquiries on your website, progress them in CRM, and convert to lease agreements seamlessly.",
        },
        {
          icon: "https://img.icons8.com/color/96/combo-chart.png",
          title: "Automated contracts & billing",
          description:
            "Define terms, meter readings, and billing dates so rent invoices go out on time—every time.",
        },
        {
          icon: "https://img.icons8.com/color/96/cloud.png",
          title: "Availability at a glance",
          description:
            "Use Gantt views to see vacancies, overlaps, and renewals so you act before revenue slips.",
        },
        {
          icon: "https://img.icons8.com/color/96/settings.png",
          title: "Operational follow‑through",
          description:
            "Create tasks for inspections and maintenance to protect NOI and tenant satisfaction.",
        },
      ],
    },

    benefits: {
      title: "Maximize portfolio performance with Odoo Estate Management",
      description:
        "Replace scattered spreadsheets with a single system for listings, contracts, recurring rent, and accounting, so you can track occupancy, receivables, and profitability per property in real time.",
      items: [
        {
          title: "Listings & CRM",
          description:
            "Publish properties and manage inquiries in one pipeline.",
          image: graphic1,
        },
        {
          title: "Gantt Scheduling",
          description:
            "Plan move‑ins, renewals, and turnarounds without clashes.",
          image: graphic2,
        },
        {
          title: "Recurring Invoicing",
          description:
            "Contracts drive rent invoices and reminders automatically.",
          image: graphic3,
        },
        {
          title: "Maintenance Tasks",
          description:
            "Track inspections and repairs to keep units market‑ready.",
          image: graphic4,
        },
      ],
    },
  },

  manufacturing: {
    slug: "manufacturing",

    hero: {
      badge: "Odoo for Manufacturing",
      title: "Plan smarter, make faster, and scale production without chaos",
      description:
        "Odoo unifies MRP, MES, PLM, Quality, Maintenance, Inventory, and Accounting so planners, engineers, and operators work from one real‑time system shortening lead times, cutting scrap, and boosting throughput.",
      primaryButton: {
        label: "Meet Our Experts",
        link: "https://wa.me/628139300683?text=Halo%20Admin,%20saya%20ingin%20MeetOurExpert",
      },
      heroImage: bannerManufacture,
    },

    video: {
      thumbnail:
        "https://fairmapsarizona.org/wp-content/uploads/2026/01/Design-Ideas-Blogs-Icecat-10.png",
      url: "https://youtu.be/3BUQjNCl9bs",
    },

    reasons: {
      title: "Why Odoo is the smart choice for modern manufacturers",
      items: [
        {
          icon: icon1c,
          title: "End‑to‑end MRP + MES",
          description:
            "Plan multi‑level BOMs with finite capacity, then execute barcode‑driven work orders that update availability and costs in real time.",
        },
        {
          icon: icon2c,
          title: "PLM & ECO control",
          description:
            "Version products, route ECO approvals, and sync instructions to the shop floor without juggling external tools.",
        },
        {
          icon: icon3c,
          title: "Quality & traceability",
          description:
            "Use control points, alerts, and lot/serial tracking to meet standards and simplify audits and recalls.",
        },
        {
          icon: icon4c,
          title: "Proactive maintenance",
          description:
            "Schedule preventive work and raise requests from workcenters to reduce downtime and lift OEE.",
        },
      ],
    },

    benefits: {
      title: "Maximize shop‑floor efficiency with Odoo MRP",
      description:
        "As production grows, spreadsheets and disconnected apps create delays and errors; Odoo connects sales, MPS, materials, routings, work centers, and costs so teams know exactly what to make, when to start, and where to run it.",
      items: [
        {
          title: "Real‑Time Work Orders",
          description:
            "Tablet UIs capture time, scrap, and by‑products as operators work.",
          image: img1c,
        },
        {
          title: "Traceability",
          description:
            "Lots/serials track every move from components to finished goods.",
          image: img2c,
        },
        {
          title: "In‑process Quality",
          description:
            "Control points and CAPA keep defects from flowing downstream.",
          image: img3c,
        },
        {
          title: "Integrated Maintenance",
          description:
            "Requests and schedules live next to workcenters to prevent breakdowns.",
          image: img4c,
        },
      ],
    },
  },

  retail: {
    slug: "retail",

    hero: {
      badge: "Odoo for Retail Industry",
      title:
        "Deliver Seamless Omnichannel Experiences and Accelerate Retail Growth",
      description:
        "Today’s retail customers expect consistency, speed, and personalization across every channel. Odoo gives retailers the powerful all‑in‑one platform they need to unify online and offline operations, boost efficiency, and maximize sales. From POS and e‑commerce to inventory and finance, Odoo brings every part of your retail business together in one smart ecosystem.",
      primaryButton: {
        label: "Meet Our Experts",
        link: "https://wa.me/628139300683?text=Halo%20Admin,%20saya%20ingin%20MeetOurExpert",
      },
      heroImage: bannerRetail,
    },

    video: {
      thumbnail:
        "https://fairmapsarizona.org/wp-content/uploads/2026/01/Design-Ideas-Blogs-Icecat-10.png",
      url: "https://youtu.be/pctpdVurqRc",
    },

    reasons: {
      title: "Why Odoo Is the Smart Choice for Modern Retailers",
      items: [
        {
          icon: icon1a,
          title: "Smarter Inventory Control, Less Waste",
          description:
            "Odoo helps retailers optimize stock levels, minimize overstocking, and streamline replenishment workflows ensuring the right products are always available when customers need them.",
        },
        {
          icon: icon2a,
          title: "Integrated POS for Faster, Smoother Checkouts",
          description:
            "Process transactions instantly, track stock in real time, and maintain customer profiles effortlessly through a fully integrated Point of Sale system.",
        },
        {
          icon: icon3a,
          title: "A True Omnichannel Experience",
          description:
            "Deliver a consistent and unified shopping journey whether customers shop online, in-store, or via mobile. Odoo syncs all channels to enhance satisfaction, loyalty, and repeat purchases.",
        },
        {
          icon: icon4a,
          title: "Total Supply Chain Visibility",
          description:
            "Track warehouses, SKUs, serial numbers, lot numbers, purchasing, routes, and fulfillment with complete clarity giving retailers control over margins, stock movement, and operational costs.",
        },
      ],
    },

    benefits: {
      title: "Maximize Retail Efficiency with Odoo’s Modern POS",
      description:
        "As retail businesses grow, managing separate POS systems, inventory tools, and online channels creates friction, slows service, and impacts profitability. With Odoo’s fully integrated retail and POS ecosystem, retailers replace operational complexity with a unified, scalable platform built to support fast transactions, real-time inventory visibility, omnichannel consistency, and seamless customer experiences.",
      items: [
        {
          title: "Lightning-Fast Transactions",
          description:
            "Ensure quick, seamless checkout experiences that minimize queues and boost customer satisfaction.",
          image: img1a,
        },
        {
          title: "Real-Time Stock Sync",
          description:
            "Your POS is always connected to your inventory—stopping overselling and improving stock accuracy.",
          image: img2a,
        },
        {
          title: "Personalized Customer Interaction",
          description:
            "Capture customer data and purchase history to deliver targeted offers and memorable service.",
          image: img3a,
        },
        {
          title: "Flexible Payment Options",
          description:
            "Support multiple payment methods, making transactions smoother for every shopper.",
          image: img4a,
        },
      ],
    },
  },
};

export default industryData;
