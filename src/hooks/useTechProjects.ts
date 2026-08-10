import { useMemo } from 'react';
import type { Project } from '../types/types';

export const useTechProjects = (data: Project[] , techId: string): Project[] => {
  return useMemo(() => {
    return data.filter((project) => project.technologyIds.includes(techId));
  }, [data, techId]);
};