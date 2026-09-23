'use client';

import React from 'react';

import EngineerJourney from './EngineerJourney';
import VisitPlanCard from './VisitPlanCard';
import CoveragePanel from './CoveragePanel';

export type DocMockupName = 'engineer-journey' | 'engineer-journey-devices' | 'visit-plan-card' | 'coverage-panel';

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
    default:
      return null;
  }
};

export default DocMockup;
