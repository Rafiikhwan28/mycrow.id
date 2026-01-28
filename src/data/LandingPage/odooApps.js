
//iconSales
import CRM from "../../assets/Application Icons/01. Icon Sales/CRM.png"
import Sales from "../../assets/Application Icons/01. Icon Sales/Sales.png"
import Members from "../../assets/Application Icons/01. Icon Sales/members.png"
import Pos from "../../assets/Application Icons/01. Icon Sales/Pos.png"
import Rental from "../../assets/Application Icons/01. Icon Sales/Rental.png"

//icon Finance
import Accounting from "../../assets/Application Icons/04. Finance/Accounting.png"
import Invoicing from "../../assets/Application Icons/04. Finance/Invoicing.png"
import Expenses from "../../assets/Application Icons/04. Finance/Expense.png"
import Document from "../../assets/Application Icons/04. Finance/Dicument.png"
import Sign from "../../assets/Application Icons/04. Finance/Sign.png"

//Supply Chain
import Inventory from "../../assets/Application Icons/03. Icon Supply Chain/Inventory.png"
import Manufacture from "../../assets/Application Icons/03. Icon Supply Chain/Manufacturing.png"
import Purchasing from "../../assets/Application Icons/03. Icon Supply Chain/Purchase.png"
import Quality from "../../assets/Application Icons/03. Icon Supply Chain/Quality.png"
import PLM from "../../assets/Application Icons/03. Icon Supply Chain/PLM.png"
import Maintenance from "../../assets/Application Icons/03. Icon Supply Chain/Maintenance.png"

//icon Website
import Website from "../../assets/Application Icons/02. Icon Website/website.png"
import Ecommerce from "../../assets/Application Icons/02. Icon Website/e-commerces.png"
import Blog from "../../assets/Application Icons/02. Icon Website/blog.png"
import Forum from "../../assets/Application Icons/02. Icon Website/form.png"
import LiveChat from "../../assets/Application Icons/02. Icon Website/live Chat.png"
import Elearning from "../../assets/Application Icons/02. Icon Website/E-learning.png"

//Marketing
import SocialMarketing from "../../assets/Application Icons/05. Marketing/Social_Marketing.png"
import EmailMarketing from "../../assets/Application Icons/05. Marketing/email_marketing.png"
import SMSMarketing from "../../assets/Application Icons/05. Marketing/SMS_Marketing.png"
import Event from "../../assets/Application Icons/05. Marketing/Event.png"
import MarketingAutomation from "../../assets/Application Icons/05. Marketing/marketing_authomation.png"
import Survey from "../../assets/Application Icons/05. Marketing/Survey.png"

//Human Resource
import Recruitment from "../../assets/Application Icons/06. Human Resources/Recruitment.png"
// import TimeOff from "../../assets/Application Icons/06. Human Resources/.png"
import Appraisal from "../../assets/Application Icons/06. Human Resources/Aprecials.png"
import Referral from "../../assets/Application Icons/06. Human Resources/Referals.png"
import Fleet from "../../assets/Application Icons/06. Human Resources/Fleet.png"

//Service
import Project from "../../assets/Application Icons/07. Service/Project.png"
import Timesheet from "../../assets/Application Icons/07. Service/Timesheet.png"
import FieldService from "../../assets/Application Icons/07. Service/Field_Service.png"
import Heldesk from "../../assets/Application Icons/07. Service/helpdesk.png"
import Planning from "../../assets/Application Icons/07. Service/planning.png"
import Appointment from "../../assets/Application Icons/07. Service/appointment.png"

//Productivity
import Discussion from "../../assets/Application Icons/08. Productivity/Discuss.png"
import Approval from "../../assets/Application Icons/08. Productivity/approval.png"
import IoT from "../../assets/Application Icons/08. Productivity/IoT.png"
import VoIP from "../../assets/Application Icons/08. Productivity/Voip.png"
import Knowledge from "../../assets/Application Icons/08. Productivity/Knowledge.png"

// src/data/odooTabs.js
export const odooTabs = [
  "All",
  "Sales",
  "Finance",
  "Supply Chain",
  "Website",
  "Marketing",
  "Human Resources",
  "Service",
  "Productivity"
];

export const odooApps = [
  {
    /*Sales */
  },
  {
    id: 1,
    title: "CRM",
    category: "Sales",
    image: CRM,
    deskripsi:
      "Manage all sales activities by consolidating customer data, generating accurate forecasts, and creating real-time reports.",
  },
  {
    id: 2,
    title: "Sales",
    category: "Sales",
    image: Sales,
    deskripsi:
      "Create quotations and invoices online that automatically sync with email, Odoo Finance, and the Website once an order is confirmed.",
  },
  {
    id: 3,
    title: "Members",
    category: "Sales",
    image: Members,
    deskripsi:
      "Automatically generate invoices for subscription-based transactions and use Odoo’s built-in analytics features to boost sales.",
  },
  {
    id: 4,
    title: "POS",
    category: "Sales",
    image: Pos,
    deskripsi:
      "Process transactions through an intelligent interface compatible with all devices and integrated with Odoo Inventory for real-time stock control.",
  },
  {
    id: 5,
    title: "Rental",
    category: "Sales",
    image: Rental,
    deskripsi:
      "Simplify the rental process from scheduling to billing. Designed to work seamlessly with other Odoo apps to complete your business cycle.",
  },
  {
    /*Finance */
  },
  {
    id: 6,
    title: "Accounting",
    category: "Finance",
    image: Accounting,
    deskripsi:
      "Easily manage finances with bank synchronization, automatic reconciliation, flexible fiscal localization options, and customizable reporting.",
  },
  {
    id: 7,
    title: "Invoicing",
    category: "Finance",
    image: Invoicing,
    deskripsi:
      "Streamline accounting with automatic billing for orders, deliveries, contracts, and even timesheets. Create custom analytical reports using data from other Odoo applications.",
  },
  {
    id: 8,
    title: "Expenses",
    category: "Finance",
    image: Expenses,
    deskripsi:
      "Monitor budgets and simplify the submission, validation, and rejection of reimbursements. Filter expense reports to track each team member’s budget.",
  },
  {
    id: 9,
    title: "Document",
    category: "Finance",
    image: Document,
    deskripsi:
      "Save time and improve efficiency by going paperless. Record bills, scan contracts, and approve electronic documents.",
  },
  {
    id: 10,
    title: "Sign",
    category: "Finance",
    image: Sign,
    deskripsi:
      "Avoid human error when writing, filling out, and signing contracts online with the drag-and-drop feature.",
  },
  {
    /*Supply Chain */
  },
  {
    id: 11,
    title: "Inventory",
    category: "Supply Chain",
    image: Inventory,
    deskripsi:
      "Control stock from purchasing through sales with a double-entry system, real-time reporting, and automated data processing integrated with accounting.",
  },
  {
    id: 12,
    title: "Manufacture",
    category: "Supply Chain",
    image: Manufacture,
    deskripsi:
      "Improve production efficiency with comprehensive tracking, production planning, work order management, and more.",
  },
  {
    id: 13,
    title: "Purchasing",
    category: "Supply Chain",
    image: Purchasing,
    deskripsi:
      "Automate purchasing workflows and track every detail and approval from quotations to purchase orders to secure the best offers.",
  },
  {
    id: 14,
    title: "Quality",
    category: "Supply Chain",
    image: Quality,
    deskripsi:
      "Set QC checkpoints and receive quality alerts directly from the work center dashboard in the Manufacturing app.",
  },
  {
    id: 15,
    title: "PLM",
    category: "Supply Chain",
    image: PLM,
    deskripsi:
      "Effectively manage and update product development history for all relevant teams in real time.",
  },
  {
    id: 16,
    title: "Maintenance",
    category: "Supply Chain",
    image: Maintenance,
    deskripsi:
      "Track, schedule, and initiate maintenance procedures with automatically generated statistics, including MTBF and MTTR, for optimal performance.",
  },
  {
    /*Website */
  },
  {
    id: 17,
    title: "Website",
    category: "Website",
    image: Website,
    deskripsi:
      "Create a complete and attractive website using simple drag-and-drop blocks for text, images, and more.",
  },
  {
    id: 18,
    title: "Ecommerce",
    category: "Website",
    image: Ecommerce,
    deskripsi:
      "Any business can sell online, turn website visitors into customers! Fully integrated with the Website and supporting apps such as Sales, Inventory, and Accounting.",
  },
  {
    id: 19,
    title: "Blog",
    category: "Website",
    image: Blog,
    deskripsi:
      "Publish articles on a mobile-friendly blog platform using an easy drag-and-drop feature.",
  },
  {
    id: 20,
    title: "Forum",
    category: "Website",
    image: Forum,
    deskripsi:
      "Attract more visitors to your website, anticipate customer needs, foster collaboration, and grow your community.",
  },
  {
    id: 21,
    title: "Live Chat",
    category: "Website",
    image: LiveChat,
    deskripsi:
      "Interact directly with website visitors to provide real-time assistance and answers.",
  },
  {
    id: 22,
    title: "E-Learning",
    category: "Website",
    image: Elearning,
    deskripsi:
      "Build a Learning Management System (LMS) with a knowledge-sharing approach to create a collaborative learning community.",
  },
  {
    /*Marketing */
  },
  {
    id: 23,
    title: "Social Marketing",
    category: "Marketing",
    image: SocialMarketing,
    deskripsi:
      "Plan, manage, and monitor all social media, web push notifications, and live chat from a single application.",
  },
  {
    id: 24,
    title: "Email Marketing",
    category: "Marketing",
    image: EmailMarketing,
    deskripsi:
      "Run campaigns using ready-made templates or content blocks and track real-time analytics on link tracking, ROI, and other advanced features.",
  },
  {
    id: 25,
    title: "SMS Marketing",
    category: "Marketing",
    image: SMSMarketing,
    deskripsi:
      "Deliver marketing campaign messages directly to the right prospects.",
  },
  {
    id: 26,
    title: "Event",
    category: "Marketing",
    image: Event,
    deskripsi:
      "Manage the entire event planning process, from website creation and ticket sales to promotion and search engine visibility.",
  },
  {
    id: 27,
    title: "Marketing Automation",
    category: "Marketing",
    image: MarketingAutomation,
    deskripsi:
      "Boost sales performance with intelligent, data-driven automated campaigns to manage the end-to-end customer journey more efficiently.",
  },
  {
    id: 28,
    title: "Survey",
    category: "Marketing",
    image: Survey,
    deskripsi:
      "Automatically manage employee reviews, customer satisfaction surveys, suggestion forms, and more to gather feedback for better business strategy decisions.",
  },
  {
    /*Human Resources */
  },
  {
    id: 29,
    title: "Recruitment",
    category: "Human Resources",
    image: Recruitment,
    deskripsi:
      "Post job openings with various tracking features that make it easier for HR to review incoming applications.",
  },
  {
    id: 30,
    title: "Time off",
    category: "Human Resources",
    // image: TimeOff,
    deskripsi:
      "Manage employee leave in a calendar view updated in real time, with easy-to-generate statistical reports.",
  },
  {
    id: 31,
    title: "Appraisal",
    category: "Human Resources",
    image: Appraisal,
    deskripsi:
      "Simplify employee evaluations with appraisal timelines, automatic reminders, and self-assessment features.",
  },
  {
    id: 32,
    title: "Referral",
    category: "Human Resources",
    image: Referral,
    deskripsi:
      "Encourage employees to refer their connections to join your team through an engaging interface.",
  },
  {
    id: 33,
    title: "Fleet",
    category: "Human Resources",
    image: Fleet,
    deskripsi:
      "Centralize the management of contracts, costs, insurance, and company vehicle usage with data automatically pulled from integrations with the Sales and Finance modules.",
  },
  {
    /*Service*/
  },
  {
    id: 34,
    title: "Project",
    category: "Service",
    image: Project,
    deskripsi:
      "Design, schedule, and analyze both internal and external projects to enhance team collaboration.",
  },
  {
    id: 35,
    title: "Timesheet",
    category: "Service",
    image: Timesheet,
    deskripsi:
      "Track productivity to generate invoices based on working time and forecast project performance as well as employee availability using data from other integrated apps.",
  },
  {
    id: 36,
    title: "Field Service",
    category: "Service",
    image: FieldService,
    deskripsi:
      "Enable field staff to work from anywhere, on any device, while continuing to deliver the best service.",
  },
  {
    id: 37,
    title: "Heldesk",
    category: "Service",
    image: Heldesk,
    deskripsi:
      "Get real-time visibility into client questions and complaints and deliver timely service based on SLAs to improve productivity.",
  },
  {
    id: 38,
    title: "Planning",
    category: "Service",
    image: Planning,
    deskripsi:
      "Organize schedules in a calendar view and simplify coordination for employee shift assignments or cancellations.",
  },
  {
    id: 39,
    title: "Appointment",
    category: "Service",
    image: Appointment,
    deskripsi:
      "Manage online meetings and automate scheduling with easily customizable appointment forms.",
  },
  {
    /*Productivity*/
  },
  {
    id: 40,
    title: "Discussion",
    category: "Productivity",
    image: Discussion,
    deskripsi:
      "Communicate and collaborate with your team from any Odoo application.",
  },
  {
    id: 41,
    title: "Approval",
    category: "Productivity",
    image: Approval,
    deskripsi:
      "Manage employee requests from a centralized dashboard with easily customizable approval rules.",
  },
  {
    id: 42,
    title: "IoT",
    category: "Productivity",
    image: IoT,
    deskripsi:
      "Connect and integrate all external devices with the Odoo database to improve productivity.",
  },
  {
    id: 43,
    title: "VoIP",
    category: "Productivity",
    image: VoIP,
    deskripsi:
      "Explore more ways to connect with customers through phone calls, with activities logged directly in the Odoo database.",
  },
  {
    id: 44,
    title: "Knowledge",
    category: "Productivity",
    image: Knowledge,
    deskripsi:
      "Collaborate on shared notes that can be accessed from other integrated Odoo applications.",
  },
];
