
import { ReactNode } from 'react';

export interface ServiceType {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
  gradient: string;
  features: string[];
  image: string;
}
