import { certificates, CertificateKey } from '@/assets/certificates';

/**
 * Downloads a certificate file
 * @param certificateKey - The key of the certificate to download
 * @param filename - Optional custom filename for the download
 */
export const downloadCertificate = (certificateKey: CertificateKey, filename?: string) => {
  const certificateUrl = certificates[certificateKey];
  const link = document.createElement('a');
  link.href = certificateUrl;
  link.download = filename || `${certificateKey}-certificate`;
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

/**
 * Opens a certificate in a new tab
 * @param certificateKey - The key of the certificate to open
 */
export const openCertificate = (certificateKey: CertificateKey) => {
  const certificateUrl = certificates[certificateKey];
  window.open(certificateUrl, '_blank', 'noopener,noreferrer');
};

/**
 * Gets the URL for a certificate
 * @param certificateKey - The key of the certificate
 * @returns The certificate URL
 */
export const getCertificateUrl = (certificateKey: CertificateKey): string => {
  return certificates[certificateKey];
};
