export * from './case-study';
import { vsipRealWorld } from './vsip-real-world';
import { vsipTurnTaking } from './vsip-turn-taking';
import { vsipAccessibility } from './vsip-accessibility';
import { CaseStudyMeta } from './case-study';

export const CASE_STUDIES: CaseStudyMeta[] = [
  vsipRealWorld,
  vsipTurnTaking,
  vsipAccessibility,
];
