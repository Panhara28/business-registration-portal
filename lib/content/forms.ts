import type { GovernmentDocument } from '@/lib/types'

export const formCategories = [
  { key: 'new-registration', labelKm: 'បែបបទចុះបញ្ជីអាជីវកម្មថ្មី', labelEn: 'New Business Registration Forms' },
  { key: 'amendment', labelKm: 'បែបបទកែប្រែក្រុមហ៊ុន', labelEn: 'Company Amendment Forms' },
  { key: 'annual-declaration', labelKm: 'បែបបទប្រកាសព័ត៌មានប្រចាំឆ្នាំ', labelEn: 'Annual Declaration Forms' },
  { key: 'e-commerce', labelKm: 'ពាក្យស្នើសុំពាណិជ្ជកម្មតាមប្រព័ន្ធអេឡិចត្រូនិក', labelEn: 'E-commerce Permit Applications' },
  { key: 'training', labelKm: 'វគ្គបណ្តុះបណ្តាលតំណាងច្បាប់', labelEn: 'Legal Representative Training' },
  { key: 'account', labelKm: 'បែបបទគណនី និងសិទ្ធិគ្រប់គ្រងក្រុមហ៊ុន', labelEn: 'Account and Company Authority Forms' },
  { key: 'fees', labelKm: 'តារាងថ្លៃសេវាសាធារណៈ', labelEn: 'Public Service Fee Tables' },
  { key: 'guides', labelKm: 'មគ្គុទ្ទេសក៍ចុះបញ្ជី', labelEn: 'Registration Guides' },
] as const

/**
 * Downloadable forms and templates listed on the current website.
 *
 * NOTE: no downloadable file is fabricated. Every `fileKm` below is a clearly
 * marked placeholder path.
 *
 * TODO: replace each placeholder path with the official file supplied by the
 * department, add the official Khmer title, publication or revision date, then
 * set `official: true` and `lastVerifiedAt`.
 */
const FILE_TODO = '/documents/TODO-official-file-not-yet-supplied.pdf'
const TITLE_TODO_KM = '[ចំណងជើងផ្លូវការជាភាសាខ្មែរត្រូវបញ្ចូល]'

export const formDocuments: GovernmentDocument[] = [
  // New business registration forms
  {
    id: 'form-enterprise-declaration',
    category: 'new-registration',
    titleKm: TITLE_TODO_KM,
    titleEn: 'Declaration or guarantee form for an enterprise',
    fileKm: FILE_TODO,
    fileType: 'PDF',
    official: false,
  },
  {
    id: 'form-company-declaration',
    category: 'new-registration',
    titleKm: TITLE_TODO_KM,
    titleEn: 'Declaration or guarantee form for a company',
    fileKm: FILE_TODO,
    fileType: 'PDF',
    official: false,
  },
  {
    id: 'form-branch-declaration',
    category: 'new-registration',
    titleKm: TITLE_TODO_KM,
    titleEn: 'Branch or representative-office declaration',
    fileKm: FILE_TODO,
    fileType: 'PDF',
    official: false,
  },
  {
    id: 'form-name-authorisation',
    category: 'new-registration',
    titleKm: TITLE_TODO_KM,
    titleEn: 'Authorization to use a business name',
    fileKm: FILE_TODO,
    fileType: 'PDF',
    official: false,
  },

  // Company amendment forms
  {
    id: 'form-change-office',
    category: 'amendment',
    titleKm: TITLE_TODO_KM,
    titleEn: 'Change registered office',
    fileKm: FILE_TODO,
    fileType: 'PDF',
    official: false,
  },
  {
    id: 'form-change-office-and-articles',
    category: 'amendment',
    titleKm: TITLE_TODO_KM,
    titleEn: 'Change registered office and file updated articles',
    fileKm: FILE_TODO,
    fileType: 'PDF',
    official: false,
  },
  {
    id: 'form-change-representative',
    category: 'amendment',
    titleKm: TITLE_TODO_KM,
    titleEn: 'Change company representative or board composition',
    fileKm: FILE_TODO,
    fileType: 'PDF',
    official: false,
  },
  {
    id: 'form-increase-capital',
    category: 'amendment',
    titleKm: TITLE_TODO_KM,
    titleEn: 'Increase capital',
    fileKm: FILE_TODO,
    fileType: 'PDF',
    official: false,
  },
  {
    id: 'form-change-activities',
    category: 'amendment',
    titleKm: TITLE_TODO_KM,
    titleEn: 'Add or remove business activities',
    fileKm: FILE_TODO,
    fileType: 'PDF',
    official: false,
  },
  {
    id: 'form-change-company-name',
    category: 'amendment',
    titleKm: TITLE_TODO_KM,
    titleEn: 'Change company name',
    fileKm: FILE_TODO,
    fileType: 'PDF',
    official: false,
  },
  {
    id: 'form-change-company-form',
    category: 'amendment',
    titleKm: TITLE_TODO_KM,
    titleEn: 'Change company form',
    fileKm: FILE_TODO,
    fileType: 'PDF',
    official: false,
  },
  {
    id: 'form-transfer-shares',
    category: 'amendment',
    titleKm: TITLE_TODO_KM,
    titleEn: 'Transfer shares',
    fileKm: FILE_TODO,
    fileType: 'PDF',
    official: false,
  },
  {
    id: 'form-change-enterprise-address',
    category: 'amendment',
    titleKm: TITLE_TODO_KM,
    titleEn: 'Change enterprise address',
    fileKm: FILE_TODO,
    fileType: 'PDF',
    official: false,
  },

  // Account and authority
  {
    id: 'form-company-authority',
    category: 'account',
    titleKm: TITLE_TODO_KM,
    titleEn: 'Request company authority',
    fileKm: FILE_TODO,
    fileType: 'PDF',
    official: false,
  },
  {
    id: 'form-online-account',
    category: 'account',
    titleKm: TITLE_TODO_KM,
    titleEn: 'Open an online company account',
    fileKm: FILE_TODO,
    fileType: 'PDF',
    official: false,
  },

  // Annual declaration
  {
    id: 'form-annual-declaration',
    category: 'annual-declaration',
    titleKm: TITLE_TODO_KM,
    titleEn: 'Annual declaration request form',
    fileKm: FILE_TODO,
    fileType: 'PDF',
    official: false,
  },

  // E-commerce
  {
    id: 'form-ecommerce-permit',
    category: 'e-commerce',
    titleKm: TITLE_TODO_KM,
    titleEn: 'E-commerce permit application documents',
    fileKm: FILE_TODO,
    fileType: 'PDF',
    official: false,
  },

  // Training
  {
    id: 'form-training-application',
    category: 'training',
    titleKm: TITLE_TODO_KM,
    titleEn: 'Legal representative training application',
    fileKm: FILE_TODO,
    fileType: 'PDF',
    official: false,
  },

  // Fees
  {
    id: 'doc-public-service-fee-table',
    category: 'fees',
    titleKm: TITLE_TODO_KM,
    titleEn: 'Public service fee table',
    fileKm: FILE_TODO,
    fileType: 'PDF',
    official: false,
  },

  // Guides
  {
    id: 'guide-registration',
    category: 'guides',
    titleKm: TITLE_TODO_KM,
    titleEn: 'Business registration guide',
    fileKm: FILE_TODO,
    fileType: 'PDF',
    official: false,
  },
]

export function getForm(id: string) {
  return formDocuments.find((doc) => doc.id === id)
}
