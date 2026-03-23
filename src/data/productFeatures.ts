export interface IProductFeature {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  gradient: {
    from: string;
    to: string;
  };
}

export const productFeatures: IProductFeature[] = [
  {
    id: "dashboard",
    title: "Complete Job Visibility",
    description: "See every active job, upcoming appointments, and overdue tasks in one real-time dashboard. Know exactly what's happening across your entire operation at a glance.",
    imageSrc: "/images/product/dashboard-overview.webp",
    imageAlt: "Opscel Dashboard showing active jobs, schedule, and recent activity",
    gradient: {
      from: "#304fff",
      to: "#8b5cf6"
    }
  },
  {
    id: "jobs-kanban",
    title: "Visual Pipeline Management",
    description: "Move jobs through your workflow with drag-and-drop kanban. Track every job from scheduled through completion. Filter by status, service type, or assigned engineer.",
    imageSrc: "/images/product/jobs-kanban.webp",
    imageAlt: "Jobs kanban board showing scheduled, in progress, and completed jobs",
    gradient: {
      from: "#8b5cf6",
      to: "#ec4899"
    }
  },
  {
    id: "quote-pipeline",
    title: "Quote-to-Cash Tracking",
    description: "Track every quote from draft to converted. See your revenue pipeline at a glance. Know exactly which quotes need attention and what's already in the bank.",
    imageSrc: "/images/product/quote-pipeline.webp",
    imageAlt: "Quote pipeline showing draft, sent, accepted, and converted quotes",
    gradient: {
      from: "#ec4899",
      to: "#f97316"
    }
  },
  {
    id: "team-utilisation",
    title: "Optimize Team Workload",
    description: "Balance engineer schedules automatically. See who's overloaded and who has capacity. Prevent burnout while maximizing billable hours across your team.",
    imageSrc: "/images/product/team-utilisation.webp",
    imageAlt: "Team utilisation showing engineer workload and capacity",
    gradient: {
      from: "#f97316",
      to: "#FED835"
    }
  },
  {
    id: "remedial-quotes",
    title: "Never Miss Critical Work",
    description: "Instant alerts for jobs with critical defects. Turn compliance issues into revenue opportunities. Automatically generate quotes for remedial work before customers even ask.",
    imageSrc: "/images/product/remedial-quotes.webp",
    imageAlt: "Jobs pending remedial quotes with critical and major defects highlighted",
    gradient: {
      from: "#FED835",
      to: "#16a34a"
    }
  }
];
