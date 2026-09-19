export interface ServiceItem {
  id: string; // e.g. '01'
  index: string; // e.g. '01/07'
  sheetCode?: string;
  title: string;
  titleEn?: string;
  shortDesc: string;
  shortDescEn?: string;
  fullDesc: string;
  fullDescEn?: string;
  scope: string[];
  scopeEn?: string[];
  specTag: string;
  specTagEn?: string;
}

export interface ProjectItem {
  id: string;
  code: string; // e.g. 'PRJ-PL-01'
  title: string;
  titleEn?: string;
  category: 'pool' | 'landscape' | 'fountain' | 'hospitality';
  categoryLabel: string;
  categoryLabelEn?: string;
  location: string;
  locationEn?: string;
  area: string;
  year: string;
  description: string;
  descriptionEn?: string;
  features: string[];
  featuresEn?: string[];
  blueprintType: 'villa_pool' | 'landscape_plan' | 'fountain_plan' | 'resort_outdoor';
}

export interface ProcessStage {
  step: string;
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
  deliverables: string;
  deliverablesEn?: string;
}

export interface WhyPillar {
  number: string;
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
  keyAspect: string;
  keyAspectEn?: string;
}
