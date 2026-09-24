'use client';

import React from 'react';

import EngineerJourney from './EngineerJourney';
import VisitPlanCard from './VisitPlanCard';
import CoveragePanel from './CoveragePanel';
import DefectDeleteJourney from './DefectDeleteJourney';
import DefectOfficeCard from './DefectOfficeCard';
import DefectScopeRemoveVsDelete from './DefectScopeRemoveVsDelete';

export type DocMockupName =
  | 'engineer-journey'
  | 'engineer-journey-devices'
  | 'visit-plan-card'
  | 'coverage-panel'
  | 'defect-delete-journey'
  | 'office-defects-card'
  | 'scope-remove-vs-delete';

interface DocMockupProps {
  name: DocMockupName;
}

const DocMockup: React.FC<DocMockupProps> = ({ name }) => {
  switch (name) {
    case 'engineer-journey':
      return <EngineerJourney />;
    case 'engineer-journey-devices':
      return <EngineerJourney initialStep="devices" />;
    case 'visit-plan-card':
      return <VisitPlanCard />;
    case 'coverage-panel':
      return <CoveragePanel />;
    case 'defect-delete-journey':
      return <DefectDeleteJourney />;
    case 'office-defects-card':
      return <DefectOfficeCard />;
    case 'scope-remove-vs-delete':
      return <DefectScopeRemoveVsDelete />;
    default:
      return null;
  }
};

export default DocMockup;
