
import { Agent } from './types';
import { offensiveSecurityAgents } from './offensiveSecurity';
import { vulnerabilityManagementAgents } from './vulnerabilityManagement';
import { cloudSecurityAgents } from './cloudSecurity';
import { applicationSecurityAgents } from './applicationSecurity';
import { governanceRiskComplianceAgents } from './governanceRiskCompliance';
import { securityOperationsAgents } from './securityOperations';
import { identityAccessManagementAgents } from './identityAccessManagement';
import { assetInfraNetworkSecurityAgents } from './assetInfraNetworkSecurity';
import { threatIntelligenceDetectionAgents } from './threatIntelligenceDetection';
import { automationReportingAssistiveAgents } from './automationReportingAssistive';

// Combine all agents into a single array
export const marketplaceAgents: Agent[] = [
  ...offensiveSecurityAgents,
  ...vulnerabilityManagementAgents,
  ...cloudSecurityAgents,
  ...applicationSecurityAgents,
  ...governanceRiskComplianceAgents,
  ...securityOperationsAgents,
  ...identityAccessManagementAgents,
  ...assetInfraNetworkSecurityAgents,
  ...threatIntelligenceDetectionAgents,
  ...automationReportingAssistiveAgents
];

// Create a map of agent types to their respective arrays
export const agentsByType = {
  'Offensive Security & Pentesting': offensiveSecurityAgents,
  'Vulnerability Management': vulnerabilityManagementAgents,
  'Cloud Security': cloudSecurityAgents,
  'Application Security (AppSec)': applicationSecurityAgents,
  'Governance, Risk & Compliance (GRC)': governanceRiskComplianceAgents,
  'Security Operations (SecOps)': securityOperationsAgents,
  'Identity & Access Management (IAM)': identityAccessManagementAgents,
  'Asset, Infrastructure & Network Security': assetInfraNetworkSecurityAgents,
  'Threat Intelligence & Detection': threatIntelligenceDetectionAgents,
  'Automation, Reporting & Assistive Agents': automationReportingAssistiveAgents
};

// Export the agent types as a constant array
export const agentTypes = Object.keys(agentsByType);

// Export individual agent arrays
export {
  offensiveSecurityAgents,
  vulnerabilityManagementAgents,
  cloudSecurityAgents,
  applicationSecurityAgents,
  governanceRiskComplianceAgents,
  securityOperationsAgents,
  identityAccessManagementAgents,
  assetInfraNetworkSecurityAgents,
  threatIntelligenceDetectionAgents,
  automationReportingAssistiveAgents
};

// Export the Agent type for use in other components
export { Agent } from './types';
