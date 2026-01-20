// ================= ODOO APPS CMS DATA =================

export const odooTabs = [
  "All Apps",
  "Sales",
  "Finance",
  "Marketing",
  "Human Capital",
  "Productivity",
  "Service",
];

export const odooApps = [
  /* ================= SALES ================= */
  {
    id: "crm",
    name: "CRM",
    category: "Sales",
    icon: "/icons/odoo/crm.svg",
  },
  {
    id: "sales",
    name: "Sales",
    category: "Sales",
    icon: "/icons/odoo/sales.svg",
  },
  {
    id: "point-of-sale",
    name: "Point of Sale",
    category: "Sales",
    icon: "/icons/odoo/pos.svg",
  },

  /* ================= FINANCE ================= */
  {
    id: "accounting",
    name: "Accounting",
    category: "Finance",
    icon: "/icons/odoo/accounting.svg",
  },
  {
    id: "invoicing",
    name: "Invoicing",
    category: "Finance",
    icon: "/icons/odoo/invoicing.svg",
  },

  /* ================= MARKETING ================= */
  {
    id: "email-marketing",
    name: "Email Marketing",
    category: "Marketing",
    icon: "/icons/odoo/email.svg",
  },
  {
    id: "social-marketing",
    name: "Social Marketing",
    category: "Marketing",
    icon: "/icons/odoo/social.svg",
  },

  /* ================= HUMAN CAPITAL ================= */
  {
    id: "employees",
    name: "Employees",
    category: "Human Capital",
    icon: "/icons/odoo/employees.svg",
  },
  {
    id: "recruitment",
    name: "Recruitment",
    category: "Human Capital",
    icon: "/icons/odoo/recruitment.svg",
  },
  {
    id: "time-off",
    name: "Time Off",
    category: "Human Capital",
    icon: "/icons/odoo/timeoff.svg",
  },

  /* ================= PRODUCTIVITY ================= */
  {
    id: "project",
    name: "Project",
    category: "Productivity",
    icon: "/icons/odoo/project.svg",
  },
  {
    id: "documents",
    name: "Documents",
    category: "Productivity",
    icon: "/icons/odoo/documents.svg",
  },

  /* ================= SERVICE ================= */
  {
    id: "helpdesk",
    name: "Helpdesk",
    category: "Service",
    icon: "/icons/odoo/helpdesk.svg",
  },
  {
    id: "field-service",
    name: "Field Service",
    category: "Service",
    icon: "/icons/odoo/field-service.svg",
  },
];
