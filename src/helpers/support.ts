export const createSupportMailToLink = (
  userId: User['uid'],
  caseId: string,
  version: string,
  buildNumber: string | number,
  OSName: string,
  OSVersion: string | number,
) => {
  return `mailto:hello@damithg.dev?subject=Hey FuelQ&body=Please describe your case:\r\n\r\n\r\n\r\nSupport Information\r\nFuelQ: ${version} (${buildNumber}) OS [${OSName} ${OSVersion}]\r\n[${caseId}] [${userId}]`;
};
