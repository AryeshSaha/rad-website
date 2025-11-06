import { localSeoData } from "@/constants/data/solutionData/digital-marketing/local-seo";
import {
  MARKETING_SOLUTIONS,
  SOLUTION_ROUTES,
} from "@/constants/navigation-data/URLs";
import { SectionData } from "@/types/solutionSectionTypes";

// Data map
const marketingMap = {
  [MARKETING_SOLUTIONS.LOCAL_SEO]: localSeoData,
} as const;

const webDesignMap = {} as const;

const webDevMap = {} as const;

const cmsEcomMap = {} as const;

const mobileMap = {} as const;

const hiringMap = {} as const;

const industriesMap = {} as const;

const solutionDataMap = {
  [SOLUTION_ROUTES.MARKETING]: marketingMap,
  [SOLUTION_ROUTES.WEB_DESIGN]: webDesignMap,
  [SOLUTION_ROUTES.WEB_DEV]: webDevMap,
  [SOLUTION_ROUTES.CMS_ECOM]: cmsEcomMap,
  [SOLUTION_ROUTES.MOBILE]: mobileMap,
  [SOLUTION_ROUTES.HIRING]: hiringMap,
  [SOLUTION_ROUTES.INDUSTRIES]: industriesMap,
} as const;

export async function getSolutionData(
  parent: string,
  solution: string
): Promise<SectionData[] | null> {
  const categoryData = solutionDataMap[parent as keyof typeof solutionDataMap];
  if (!categoryData) return null;

  const data = categoryData[solution as keyof typeof categoryData];
  return data ?? null;
}
