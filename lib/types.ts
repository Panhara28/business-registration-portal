/**
 * CMS-ready content model.
 *
 * Every editable content entity is typed here so the data files in `lib/content`
 * can later be replaced by a CMS / API response without touching components.
 *
 * `lastVerifiedAt` records the date an administrator last checked the entry
 * against the official publications of the Ministry of Commerce.
 */

export type Locale = 'km' | 'en'

/** A short string that exists in Khmer and, when officially available, English. */
export interface BilingualText {
  km: string
  /** Omit when no official English wording exists. */
  en?: string
}

export interface GovernmentDocument {
  id: string
  titleKm: string
  titleEn?: string
  documentNumber?: string
  category: string
  publicationDate?: string
  fileKm?: string
  fileEn?: string
  fileType?: 'PDF' | 'DOCX' | 'XLSX'
  /** Marks entries confirmed against an official Ministry publication. */
  official?: boolean
  lastVerifiedAt?: string
}

export interface NavChild {
  href: string
  labelKm: string
  labelEn: string
  descriptionKm?: string
  descriptionEn?: string
}

export interface NavItem {
  href: string
  labelKm: string
  labelEn: string
  children?: NavChild[]
}

export type ServiceIconName =
  | 'user-plus'
  | 'bookmark'
  | 'building'
  | 'search'
  | 'file-pen'
  | 'calendar-check'
  | 'award'
  | 'key-round'

export interface OnlineService {
  slug: string
  icon: ServiceIconName
  titleKm: string
  titleEn: string
  summaryKm: string
  summaryEn: string
  loginRequired?: boolean
  /** Grouping used by the service filters. */
  group: 'account' | 'registration' | 'maintenance' | 'search'
  lastVerifiedAt?: string
}

export interface ServiceDetail extends OnlineService {
  whoCanApplyKm: string[]
  whoCanApplyEn: string[]
  conditionsKm: string[]
  conditionsEn: string[]
  requiredInformationKm: string[]
  requiredInformationEn: string[]
  requiredDocumentsKm: string[]
  requiredDocumentsEn: string[]
  stepsKm: string[]
  stepsEn: string[]
  whatHappensNextKm: string[]
  whatHappensNextEn: string[]
  relatedFormIds?: string[]
  relatedLawIds?: string[]
  relatedFaqIds?: string[]
  /** Fee information is never calculated in the interface. */
  feeNoteKm: string
  feeNoteEn: string
}

export interface Announcement {
  id: string
  slug: string
  category: string
  categoryKm: string
  titleKm: string
  titleEn?: string
  excerptKm: string
  excerptEn?: string
  bodyKm?: string[]
  bodyEn?: string[]
  publicationDate?: string
  hasAttachment?: boolean
  attachmentName?: string
  image?: string
  /** True only when the wording has been confirmed against the official notice. */
  verified?: boolean
  lastVerifiedAt?: string
}

export interface ProcessStep {
  order: number
  titleKm: string
  titleEn: string
  descriptionKm: string
  descriptionEn: string
}

export interface ApplicationStatus {
  key: string
  labelKm: string
  labelEn: string
  descriptionKm: string
  descriptionEn: string
  tone: 'neutral' | 'progress' | 'positive' | 'attention' | 'negative'
}

export interface MaintenanceService {
  slug: string
  titleKm: string
  titleEn: string
  descriptionKm: string
  descriptionEn: string
}

export interface DepartmentFunction {
  titleKm: string
  titleEn: string
  descriptionKm: string
  descriptionEn: string
  icon: 'clipboard' | 'refresh' | 'calendar' | 'scale'
}

export interface FaqItem {
  id: string
  category: string
  categoryKm: string
  questionKm: string
  questionEn: string
  answerKm: string
  answerEn: string
  /** Set when the answer is an editorial placeholder awaiting official wording. */
  placeholder?: boolean
  lastVerifiedAt?: string
}

export interface HotlineOption {
  press: string
  labelKm: string
  labelEn: string
}

export interface DemoRegistryRecord {
  id: string
  nameKm: string
  nameEn: string
  registrationNumber: string
  type: string
  status: string
  registeredOn: string
}
