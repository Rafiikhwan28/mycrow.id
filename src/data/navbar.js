import {
  ShoppingCart,
  Utensils,
  Factory,
  HeartPulse,
  Building2,
  Boxes,
  Briefcase,
  Layers,

  TrendingUp,
  BarChart3,
  Truck,
  Megaphone,
  Globe,
  Users,
  Headphones,

  Search,
  DollarSign,
  Share2,
  UserCheck,
  FileText,
  Palette,
  BookOpen,
  Video,

  Eye,
  Target,
  Gem,
  Phone,
  Lightbulb,
} from "lucide-react";

export const navbarData = {
  solutions: {
    label: "Solutions",
    basePath: "/solutions",
    sections: [
      {
        title: "By Stages",
        sectionPath: "stages",
        items: [
          {
            title: "Small & Medium Business",
            slug: "smb",
            explore: "Streamline, Scale, and Succeed With a Smarter All‑in‑One ERP",
            icon: TrendingUp,
          },
          {
            title: "Enterprise",
            slug: "enterprise",
            explore: "A Scalable ERP Platform Built to Power Global Business Growth",
            icon: Building2,
          },
        ],
      },
      {
        title: "Industry",
        sectionPath: "industry",
        items: [
          { title: "Retail", slug: "retail", explore: "Deliver Seamless Omnichannel Experiences and Accelerate Retail Growth", icon: ShoppingCart },
          { title: "Food & Beverage", slug: "foodBeverage", explore: "Run lean kitchens and outlets with perfect stock, speedy POS, and FEFO compliance", icon: Utensils },
          { title: "Manufacture", slug: "manufacturing", explore: "Plan smarter, make faster, and scale production without chaos", icon: Factory },
          { title: "Health & Fitness", slug: "healthFitness", explore: "Sell memberships, book classes, and bill services without juggling apps", icon: HeartPulse },
          { title: "Real Estate", slug: "realEstate", explore: "From listings to leases to invoices, manage your portfolio in one system", icon: Building2 },
          { title: "Consultant", slug: "consulting", explore: "Quote, deliver, timesheet, and invoice, confidently and on time", icon: Briefcase },
          { title: "Trading", slug: "trading", explore: "Buy better, stock smarter, and fulfill faster across warehouses and channels", icon: Boxes },
          { title: "Customize solutions", slug: "customize", explore: "Composable apps + low‑code customization = a system that fits your business", icon: Layers },
        ],
      },
    ],
  },

  products: {
    label: "Products",
    basePath: "/products",
    sections: [
      {
        title: "ERP",
        sectionPath: "erp",
        items: [
          { title: "What is ERP?", slug: "whatErp", explore: "The integrated system that unifies your business in real time", icon: TrendingUp },
          { title: "What is Odoo?", slug: "whatOdoo", explore: "All your business on one simple platform, efficient, and affordable", icon: BarChart3 },
        ],
      },
      {
        title: "Odoo App",
        sectionPath: "odooApp",
        items: [
          { title: "Finance", slug: "finance", explore: "Close faster, stay compliant, and see cash clearly across your business", icon: BarChart3 },
          { title: "Sales", slug: "sales", explore: "Quote faster, win more deals, and hand off to delivery without friction", icon: TrendingUp },
          { title: "Human Resources", explore: "Centralize people data, streamline payroll, and elevate employee experience", slug: "humanResources", icon: Users },
          { title: "Marketing", slug: "marketing", explore: "Launch campaigns faster with email, social, and automation in one place", icon: Megaphone },
          { title: "Website", slug: "website", explore: "Design, publish, and sell online no plugins, no patchwork", icon: Globe },
          { title: "Supply Chain", slug: "supplyChain", explore: "Plan smarter, stock right, and fulfill faster across every warehouse", icon: Truck },
          { title: "Service", slug: "service", explore: "From request to resolution, deliver, track, and bill with confidence", icon: Headphones },
          { title: "Productivity", slug: "productivity", explore: "Work faster together with chat, documents, approvals, and knowledge", icon: Search },
        ],
      },
    ],
  },

  services: {
    label: "Services",
    basePath: "/services",
    sections: [
      {
        title: "App Development",
        sectionPath: "AppDevelopment",
        items: [
          {
            title: "Build solution using Odoo platform",
            slug: "buildSolutionOdoo",
            explore: "Launch fast, automate more, and scale on one integrated platform",
            icon: Search,
          },
          {
            title: "Build solution from scratch",
            slug: "buildSolutionScratch",
            explore: "When your process is the product, we design and build it end‑to‑en",
            icon: DollarSign,
          },
        ],
      },
      {
        title: "Marketing",
        sectionPath: "marketing",
        items: [
          {
            title: "Digital Marketing Solutions",
            slug: "digitalMarketingSolutions",
            explore: "Strategy, content, and analytics amplified by AI",
            icon: Search,
          },
          {
            title: "Social Media Solutions",
            slug: "socialMediaSolutions",
            explore: "Governed, scalable, and ROI‑driven social media programs",
            icon: Share2,
          },
        ],
      },
      {
        title: "Graphic Design",
        sectionPath: "grapicDesign",
        items: [
          {
            title: "Brand Identity",
            slug: "brandIdentity",
            explore: "Position, name, design, and codify your brand for consistency and growth",
            icon: FileText,
          },
          {
            title: "Annual Report",
            slug: "annualReport",
            explore: "From compliance to compelling investor narratives",
            icon: Palette,
          },
          {
            title: "Video Motion Graphic",
            slug: "videoGraphic",
            explore: "Explainers, brand films, product demos, social cut‑downs",
            icon: Video,
          },
          {
            title: "Publications",
            slug: "publications",
            explore: "Company profiles, brochures, magazines, catalogs, investor kits",
            icon: BookOpen,
          },
          {
            title: "UI/UX Design",
            slug: "UiUxDesign",
            explore: "Research‑driven design for web and product experiences",
            icon: UserCheck,
          },
          {
            title: "Portfolio",
            slug: "portfolio",
            explore: "Works that we have been successfully help our partners",
            icon: FileText,
          },
        ],
      },
    ],
  },

  knowledge: {
    label: "Knowledge",
    basePath: "/knowledge",
    sections: [
      {
        title: "Knowledge Artikel",
        items: [
          {
            title: "Digital Marketing",
            slug: "digitalMarketing",
            icon: Lightbulb,
          },
          {
            title: "Tell Us Your Problem",
            slug: "tellUs",
            icon: Target,
          },
          {
            title: "Careers",
            slug: "careers",
            icon: Gem,
          },
          {
            title: "Contact Us",
            slug: "contact",
            icon: Phone,
          },
        ],
      },
    ],
  },

  company: {
    label: "Company",
    basePath: "/company",
    sections: [
      {
        title: "About Us",
        items: [
          { title: "About mycrow.id", slug: "about", icon: Eye },
          { title: "Tell Us Your Problem", slug: "tellUs", icon: Target },
          { title: "Careers", slug: "careers", icon: Gem },
          { title: "Contact Us", slug: "contact", icon: Phone },
        ],
      },
    ],
  },
};
