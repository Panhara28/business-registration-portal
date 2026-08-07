import type { HotlineOption } from '@/lib/types'

/**
 * Editable configuration.
 *
 * Administrators can update hotline numbers, office hours and links here without
 * changing any component code. TODO: move to a CMS / environment configuration
 * before production.
 */
export const siteConfig = {
  kingdom: {
    km: 'ព្រះរាជាណាចក្រកម្ពុជា',
    en: 'Kingdom of Cambodia',
  },
  ministry: {
    km: 'ក្រសួងពាណិជ្ជកម្ម',
    en: 'Ministry of Commerce',
  },
  department: {
    km: 'នាយកដ្ឋានចុះបញ្ជីពាណិជ្ជកម្ម',
    en: 'Business Registration Department',
  },
  systemName: {
    km: 'ប្រព័ន្ធស្វ័យប្រវត្តកម្មចុះបញ្ជី',
    en: 'Automated Registration System',
  },
  /** Hotline numbers published on the current Business Registration website. */
  hotlines: ['1266'],
  /**
   * Office hours are not published as a verified value in this prototype.
   * TODO: replace with the official published office hours.
   */
  officeHours: {
    km: 'ម៉ោងធ្វើការ៖ [ត្រូវបញ្ចូលព័ត៌មានផ្លូវការ]',
    en: 'Office hours: [official information required]',
  },
  /**
   * Office address is intentionally a placeholder — no address is invented here.
   * TODO: replace with the official department address.
   */
  address: {
    km: '[អាសយដ្ឋានផ្លូវការត្រូវបញ្ចូល]',
    en: '[Official address required]',
  },
  links: {
    ministry: 'https://www.moc.gov.kh',
    registry: 'https://businessregistration.moc.gov.kh/kh',
    login: '/login',
    register: '/services/register-new-user',
    search: '/search',
  },
} as const

/** Hotline menu published on the current homepage. */
export const hotlineOptions: HotlineOption[] = [
  {
    press: '1',
    labelKm: 'ចុច ១ សម្រាប់ព័ត៌មានអំពីការចុះបញ្ជីពាណិជ្ជកម្ម',
    labelEn: 'Press 1 for business-registration information',
  },
  {
    press: '2',
    labelKm: 'ចុច ២ សម្រាប់ព័ត៌មានអំពីការកែប្រែក្រុមហ៊ុន',
    labelEn: 'Press 2 for company-amendment information',
  },
  {
    press: '3',
    labelKm: 'ចុច ៣ សម្រាប់ព័ត៌មានអំពីការប្រកាសព័ត៌មានប្រចាំឆ្នាំ',
    labelEn: 'Press 3 for annual-declaration information',
  },
  {
    press: '4',
    labelKm: 'ចុច ៤ សម្រាប់ព័ត៌មានអំពីលិខិតអនុញ្ញាតពាណិជ្ជកម្មតាមប្រព័ន្ធអេឡិចត្រូនិក ឬអាជ្ញាបណ្ណអាជីវកម្ម',
    labelEn: 'Press 4 for e-commerce permit or business-license information',
  },
  {
    press: '0',
    labelKm: 'ចុច ០ សម្រាប់ព័ត៌មានផ្សេងៗ',
    labelEn: 'Press 0 for other information',
  },
]
