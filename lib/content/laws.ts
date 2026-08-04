import type { GovernmentDocument } from '@/lib/types'

export const legalCategories = [
  { key: 'law', labelKm: 'ច្បាប់', labelEn: 'Laws' },
  { key: 'sub-decree', labelKm: 'អនុក្រឹត្យ', labelEn: 'Sub-Decrees' },
  { key: 'prakas', labelKm: 'ប្រកាស', labelEn: 'Prakas' },
  { key: 'announcement', labelKm: 'សេចក្តីជូនដំណឹង', labelEn: 'Announcements' },
  { key: 'other', labelKm: 'ឯកសារច្បាប់ផ្សេងទៀត', labelEn: 'Other Legal Documents' },
] as const

/**
 * Legal document library.
 *
 * Each entry records the SUBJECT of a document published on the current
 * Business Registration website. Complete official Khmer titles, document
 * numbers and dates must be copied verbatim from the official publications —
 * they are never abbreviated, summarised or invented here.
 *
 * TODO: paste the complete official title, document number, date and file paths
 * for each entry, then set `official: true` and `lastVerifiedAt`.
 */
const TITLE_REQUIRED_KM = '[ចំណងជើងផ្លូវការពេញលេញត្រូវបញ្ចូល — មិនត្រូវសង្ខេបឡើយ]'

export const legalDocuments: GovernmentDocument[] = [
  {
    id: 'prakas-brd-organization',
    category: 'prakas',
    titleKm: TITLE_REQUIRED_KM,
    titleEn:
      'Prakas on the organization and operation of the Business Registration Department',
    fileType: 'PDF',
    official: false,
  },
  {
    id: 'prakas-moc-public-services',
    category: 'prakas',
    titleKm: TITLE_REQUIRED_KM,
    titleEn:
      'Inter-ministerial Prakas on public services provided by the Ministry of Commerce',
    fileType: 'PDF',
    official: false,
  },
  {
    id: 'prakas-company-changes',
    category: 'prakas',
    titleKm: TITLE_REQUIRED_KM,
    titleEn: 'Prakas on the registration of company changes and amendments',
    fileType: 'PDF',
    official: false,
  },
  {
    id: 'prakas-automated-re-registration',
    category: 'prakas',
    titleKm: TITLE_REQUIRED_KM,
    titleEn: 'Prakas on automated re-registration',
    fileType: 'PDF',
    official: false,
  },
  {
    id: 'prakas-annual-declaration',
    category: 'prakas',
    titleKm: TITLE_REQUIRED_KM,
    titleEn: 'Prakas on annual declaration filing',
    fileType: 'PDF',
    official: false,
  },
  {
    id: 'prakas-legal-representatives',
    category: 'prakas',
    titleKm: TITLE_REQUIRED_KM,
    titleEn:
      'Prakas on the recognition and training of legal representatives',
    fileType: 'PDF',
    official: false,
  },
  {
    id: 'prakas-company-naming',
    category: 'prakas',
    titleKm: TITLE_REQUIRED_KM,
    titleEn: 'Prakas on company and enterprise naming',
    fileType: 'PDF',
    official: false,
  },
  {
    id: 'prakas-financial-penalties',
    category: 'prakas',
    titleKm: TITLE_REQUIRED_KM,
    titleEn:
      'Inter-ministerial Prakas on financial penalties administered by the Ministry of Commerce',
    fileType: 'PDF',
    official: false,
  },
]

export function getLegalDocument(id: string) {
  return legalDocuments.find((doc) => doc.id === id)
}
