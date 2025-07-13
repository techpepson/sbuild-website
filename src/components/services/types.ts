import { ReactNode } from "react";

export interface ServiceType {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
  gradient: string;
  features: string[];
  image: string;
  detailedContent?: {
    overview: string;
    benefits: string[];
    process: string[];
    tools: string[];
    caseStudies?: string[];
  };
}
