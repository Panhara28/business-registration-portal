import type { Announcement } from '@/lib/types'

/**
 * Public announcements.
 *
 * The current website is the source of truth for announcement titles, dates and
 * wording. No date, reference number or notice text is invented here: every
 * entry below carries the official TOPIC published by the department, with the
 * exact title, date and body left as clearly marked editorial placeholders.
 *
 * TODO: an administrator must paste the exact official title, publication date
 * and body for each notice, then set `verified: true` and `lastVerifiedAt`.
 */
const TITLE_PLACEHOLDER_KM = '[ចំណងជើងផ្លូវការត្រូវបញ្ចូលពីសេចក្តីជូនដំណឹងដើម]'
const DATE_PLACEHOLDER = undefined
const EXCERPT_PLACEHOLDER_KM =
  'អត្ថបទផ្លូវការមិនទាន់ត្រូវបានបញ្ចូលនៅក្នុងគំរូនេះទេ។ សូមផ្ទៀងផ្ទាត់ជាមួយសេចក្តីជូនដំណឹងផ្លូវការ។'
const EXCERPT_PLACEHOLDER_EN =
  'The official wording has not been entered in this prototype. Verify against the official notice.'

export const announcements: Announcement[] = [
  {
    id: 'ann-registration-fee-payment',
    slug: 'registration-fee-payment-procedures',
    category: 'Fees and Payments',
    categoryKm: 'ថ្លៃសេវា និងការបង់ប្រាក់',
    titleKm: TITLE_PLACEHOLDER_KM,
    titleEn: 'Notice on registration-fee payment procedures',
    excerptKm: EXCERPT_PLACEHOLDER_KM,
    excerptEn: EXCERPT_PLACEHOLDER_EN,
    publicationDate: DATE_PLACEHOLDER,
    hasAttachment: true,
    attachmentName: '[official-notice.pdf]',
    verified: false,
  },
  {
    id: 'ann-invoice-email-delivery',
    slug: 'email-delivery-of-payment-invoices',
    category: 'Fees and Payments',
    categoryKm: 'ថ្លៃសេវា និងការបង់ប្រាក់',
    titleKm: TITLE_PLACEHOLDER_KM,
    titleEn: 'Notice on email delivery of payment invoices',
    excerptKm: EXCERPT_PLACEHOLDER_KM,
    excerptEn: EXCERPT_PLACEHOLDER_EN,
    publicationDate: DATE_PLACEHOLDER,
    hasAttachment: true,
    attachmentName: '[official-notice.pdf]',
    verified: false,
  },
  {
    id: 'ann-hotline-change',
    slug: 'customer-service-hotline-changes',
    category: 'Customer Service',
    categoryKm: 'សេវាកម្មអតិថិជន',
    titleKm: TITLE_PLACEHOLDER_KM,
    titleEn: 'Notice on customer-service hotline changes',
    excerptKm: EXCERPT_PLACEHOLDER_KM,
    excerptEn: EXCERPT_PLACEHOLDER_EN,
    publicationDate: DATE_PLACEHOLDER,
    hasAttachment: false,
    verified: false,
  },
  {
    id: 'ann-counter-location',
    slug: 'registration-counter-location-changes',
    category: 'Customer Service',
    categoryKm: 'សេវាកម្មអតិថិជន',
    titleKm: TITLE_PLACEHOLDER_KM,
    titleEn: 'Notice on registration-counter location changes',
    excerptKm: EXCERPT_PLACEHOLDER_KM,
    excerptEn: EXCERPT_PLACEHOLDER_EN,
    publicationDate: DATE_PLACEHOLDER,
    hasAttachment: true,
    attachmentName: '[official-notice.pdf]',
    verified: false,
  },
  {
    id: 'ann-annual-declaration-clarification',
    slug: 'annual-declaration-clarification',
    category: 'Annual Declaration',
    categoryKm: 'ការប្រកាសព័ត៌មានប្រចាំឆ្នាំ',
    titleKm: TITLE_PLACEHOLDER_KM,
    titleEn: 'Clarification on annual declaration filing',
    excerptKm: EXCERPT_PLACEHOLDER_KM,
    excerptEn: EXCERPT_PLACEHOLDER_EN,
    publicationDate: DATE_PLACEHOLDER,
    hasAttachment: true,
    attachmentName: '[official-notice.pdf]',
    verified: false,
  },
  {
    id: 'ann-legal-representative-training',
    slug: 'legal-representative-training',
    category: 'Training',
    categoryKm: 'វគ្គបណ្តុះបណ្តាល',
    titleKm: TITLE_PLACEHOLDER_KM,
    titleEn: 'Notice on legal representative training',
    excerptKm: EXCERPT_PLACEHOLDER_KM,
    excerptEn: EXCERPT_PLACEHOLDER_EN,
    publicationDate: DATE_PLACEHOLDER,
    hasAttachment: true,
    attachmentName: '[official-notice.pdf]',
    verified: false,
  },
  {
    id: 'ann-ecommerce-permits',
    slug: 'e-commerce-permits-and-licenses',
    category: 'E-commerce',
    categoryKm: 'ពាណិជ្ជកម្មតាមប្រព័ន្ធអេឡិចត្រូនិក',
    titleKm: TITLE_PLACEHOLDER_KM,
    titleEn: 'Notice on e-commerce permits and licenses',
    excerptKm: EXCERPT_PLACEHOLDER_KM,
    excerptEn: EXCERPT_PLACEHOLDER_EN,
    publicationDate: DATE_PLACEHOLDER,
    hasAttachment: true,
    attachmentName: '[official-notice.pdf]',
    verified: false,
  },
  {
    id: 'ann-delegation',
    slug: 'delegation-to-legal-representatives-or-agents',
    category: 'Legal Representation',
    categoryKm: 'តំណាងច្បាប់',
    titleKm: TITLE_PLACEHOLDER_KM,
    titleEn: 'Notice on delegation to legal representatives or agents',
    excerptKm: EXCERPT_PLACEHOLDER_KM,
    excerptEn: EXCERPT_PLACEHOLDER_EN,
    publicationDate: DATE_PLACEHOLDER,
    hasAttachment: true,
    attachmentName: '[official-notice.pdf]',
    verified: false,
  },
  {
    id: 'ann-penalty-implementation',
    slug: 'penalty-implementation-notices',
    category: 'Penalties',
    categoryKm: 'ការផាកពិន័យ',
    titleKm: TITLE_PLACEHOLDER_KM,
    titleEn: 'Notice on penalty implementation',
    excerptKm: EXCERPT_PLACEHOLDER_KM,
    excerptEn: EXCERPT_PLACEHOLDER_EN,
    publicationDate: DATE_PLACEHOLDER,
    hasAttachment: true,
    attachmentName: '[official-notice.pdf]',
    verified: false,
  },
]

export function getAnnouncement(slug: string) {
  return announcements.find((item) => item.slug === slug)
}
