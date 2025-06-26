import { StateCompliance, AustralianState } from '../types';

export const stateComplianceData: Record<AustralianState, StateCompliance> = {
  NSW: {
    state: 'NSW',
    coolingOffPeriod: 5,
    requiredDisclosures: [
      'Section 66W Certificate',
      'Contract for Sale of Land',
      'Vendor Statement',
      'Planning Certificate (Section 10.7)',
      'Building Certificate',
      'Pest Inspection Report'
    ],
    mandatoryInspections: [
      'Building Inspection',
      'Pest Inspection',
      'Pool Safety Inspection (if applicable)'
    ],
    contractRequirements: [
      'Contract must be in writing',
      'Must include all prescribed warranties',
      'Cooling-off period disclosure',
      'GST disclosure if applicable'
    ],
    governmentResources: [
      { name: 'NSW Fair Trading', url: 'https://www.fairtrading.nsw.gov.au' },
      { name: 'Property Exchange Australia', url: 'https://www.pexa.com.au' }
    ],
    commissionRates: { min: 1.8, max: 2.5 }
  },
  VIC: {
    state: 'VIC',
    coolingOffPeriod: 3,
    requiredDisclosures: [
      'Section 32 Vendor Statement',
      'Certificate of Title',
      'Planning Certificate',
      'Building Permit',
      'Owners Corporation Certificate (if applicable)'
    ],
    mandatoryInspections: [
      'Building Inspection',
      'Pest Inspection',
      'Electrical Safety Check'
    ],
    contractRequirements: [
      'Section 32 must be provided',
      'Cooling-off period applies',
      'Deposit bond or cash deposit required'
    ],
    governmentResources: [
      { name: 'Consumer Affairs Victoria', url: 'https://www.consumer.vic.gov.au' },
      { name: 'State Revenue Office', url: 'https://www.sro.vic.gov.au' }
    ],
    commissionRates: { min: 2.0, max: 2.8 }
  },
  QLD: {
    state: 'QLD',
    coolingOffPeriod: 5,
    requiredDisclosures: [
      'Property Disclosure Statement',
      'Contract for Sale of Land',
      'Title Search',
      'Survey Plan',
      'Body Corporate Information (if applicable)'
    ],
    mandatoryInspections: [
      'Building and Pest Inspection',
      'Pool Safety Certificate (if applicable)',
      'Smoke Alarm Compliance'
    ],
    contractRequirements: [
      'Contract must comply with Property Occupations Act 2014',
      'Cooling-off period disclosure',
      'Finance clause standard'
    ],
    governmentResources: [
      { name: 'Office of Fair Trading QLD', url: 'https://www.qld.gov.au/law/fair-trading' },
      { name: 'Queensland Revenue Office', url: 'https://www.revenue.qld.gov.au' }
    ],
    commissionRates: { min: 2.0, max: 3.0 }
  },
  WA: {
    state: 'WA',
    coolingOffPeriod: 5,
    requiredDisclosures: [
      'Vendor Disclosure Statement',
      'Contract of Sale',
      'Certificate of Title',
      'Planning Certificate'
    ],
    mandatoryInspections: [
      'Building Inspection',
      'Pest Inspection',
      'Pool Barrier Inspection (if applicable)'
    ],
    contractRequirements: [
      'Contract must be in prescribed form',
      'Cooling-off period applies to off-the-plan sales',
      'Settlement period disclosure'
    ],
    governmentResources: [
      { name: 'Department of Commerce WA', url: 'https://www.commerce.wa.gov.au' },
      { name: 'Landgate', url: 'https://www.landgate.wa.gov.au' }
    ],
    commissionRates: { min: 2.2, max: 3.5 }
  },
  SA: {
    state: 'SA',
    coolingOffPeriod: 2,
    requiredDisclosures: [
      'Vendor Statement',
      'Contract of Sale',
      'Certificate of Title',
      'Planning Certificate'
    ],
    mandatoryInspections: [
      'Building Inspection',
      'Pest Inspection'
    ],
    contractRequirements: [
      'Contract must include all material facts',
      'Cooling-off period disclosure',
      'GST implications disclosure'
    ],
    governmentResources: [
      { name: 'Consumer and Business Services SA', url: 'https://www.cbs.sa.gov.au' },
      { name: 'RevenueSA', url: 'https://www.revenuesa.sa.gov.au' }
    ],
    commissionRates: { min: 1.8, max: 2.5 }
  },
  TAS: {
    state: 'TAS',
    coolingOffPeriod: 5,
    requiredDisclosures: [
      'Vendor Statement',
      'Contract for Sale',
      'Certificate of Title',
      'Planning Certificate'
    ],
    mandatoryInspections: [
      'Building Inspection',
      'Pest Inspection'
    ],
    contractRequirements: [
      'Contract must be in writing',
      'All material facts disclosed',
      'Cooling-off period applies'
    ],
    governmentResources: [
      { name: 'Consumer, Building and Occupational Services', url: 'https://www.cbos.tas.gov.au' },
      { name: 'State Revenue Office TAS', url: 'https://www.sro.tas.gov.au' }
    ],
    commissionRates: { min: 2.0, max: 3.0 }
  },
  ACT: {
    state: 'ACT',
    coolingOffPeriod: 5,
    requiredDisclosures: [
      'Vendor Statement',
      'Contract for Sale',
      'Certificate of Title',
      'Planning Certificate'
    ],
    mandatoryInspections: [
      'Building Inspection',
      'Pest Inspection'
    ],
    contractRequirements: [
      'Contract must comply with Civil Law Act',
      'Cooling-off period disclosure',
      'All encumbrances disclosed'
    ],
    governmentResources: [
      { name: 'Access Canberra', url: 'https://www.accesscanberra.act.gov.au' },
      { name: 'ACT Revenue Office', url: 'https://www.revenue.act.gov.au' }
    ],
    commissionRates: { min: 1.8, max: 2.5 }
  },
  NT: {
    state: 'NT',
    coolingOffPeriod: 5,
    requiredDisclosures: [
      'Vendor Statement',
      'Contract of Sale',
      'Certificate of Title',
      'Planning Certificate'
    ],
    mandatoryInspections: [
      'Building Inspection',
      'Pest Inspection'
    ],
    contractRequirements: [
      'Contract must be in writing',
      'Material facts disclosure',
      'Cooling-off period applies'
    ],
    governmentResources: [
      { name: 'NT Consumer Affairs', url: 'https://consumeraffairs.nt.gov.au' },
      { name: 'Territory Revenue Office', url: 'https://revenue.nt.gov.au' }
    ],
    commissionRates: { min: 2.5, max: 4.0 }
  }
};

export const getStateCompliance = (state: AustralianState): StateCompliance => {
  return stateComplianceData[state];
};

export const calculateCommissionSavings = (propertyPrice: number, state: AustralianState): number => {
  const compliance = getStateCompliance(state);
  const averageCommission = (compliance.commissionRates.min + compliance.commissionRates.max) / 2;
  return (propertyPrice * averageCommission) / 100;
};