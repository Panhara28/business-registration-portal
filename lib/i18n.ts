import type { Locale } from '@/lib/types'

export const locales: Locale[] = ['km', 'en']
export const defaultLocale: Locale = 'km'
export const LOCALE_STORAGE_KEY = 'brd-locale'

/**
 * Picks the correct field from a bilingual pair.
 *
 * Khmer is the authoritative language of the register. When an English string is
 * missing we fall back to Khmer rather than showing an empty element.
 */
export function pick(locale: Locale, km: string, en?: string): string {
  if (locale === 'en') return en && en.length > 0 ? en : km
  return km
}

/** `lang` attribute for a rendered string, so screen readers switch voices. */
export function langAttr(locale: Locale, en?: string): 'km' | 'en' {
  return locale === 'en' && en ? 'en' : 'km'
}

/**
 * Interface labels (chrome, buttons, section headings).
 *
 * Content that comes from official publications lives in `lib/content`; this
 * dictionary holds only wording the interface itself owns.
 */
const dictionary = {
  km: {
    skipToContent: 'ទៅកាន់ខ្លឹមសារសំខាន់',
    officialBannerTitle: 'នេះជាគេហទំព័រផ្លូវការនៃព្រះរាជាណាចក្រកម្ពុជា',
    officialBannerBody: 'ព័ត៌មានផ្លូវការ និងសេវាកម្មចុះបញ្ជីពាណិជ្ជកម្មតាមប្រព័ន្ធអេឡិចត្រូនិក។',
    hotline: 'លេខទូរស័ព្ទទាន់ហេតុការណ៍',
    language: 'ភាសា',
    khmer: 'ខ្មែរ',
    english: 'English',
    switchToEnglish: 'ប្តូរទៅភាសាអង់គ្លេស',
    switchToKhmer: 'ប្តូរទៅភាសាខ្មែរ',
    logIn: 'ចូលប្រើប្រាស់',
    registerNewUser: 'ចុះឈ្មោះអ្នកប្រើប្រាស់ថ្មី',
    openMenu: 'បើកម៉ឺនុយ',
    closeMenu: 'បិទម៉ឺនុយ',
    menu: 'ម៉ឺនុយ',
    mainNavigation: 'ម៉ឺនុយមេ',
    searchTheRegister: 'ស្វែងរកក្នុងបញ្ជីពាណិជ្ជកម្ម',
    searchPlaceholder: 'ឈ្មោះអាជីវកម្ម ឬលេខចុះបញ្ជី',
    search: 'ស្វែងរក',
    heroEyebrow: 'ថ្នាលចុះបញ្ជីពាណិជ្ជកម្មតាមប្រព័ន្ធឌីជីថល',
    heroTitleLead: 'ចុះបញ្ជីពាណិជ្ជកម្មរបស់អ្នក',
    heroTitleAccent: 'តាមថ្នាលឌីជីថលរបស់ក្រសួងពាណិជ្ជកម្ម',
    heroBody:
      'ថ្នាលចុះបញ្ជីពាណិជ្ជកម្មឌីជីថល ជួយសម្រួលដល់ម្ចាស់អាជីវកម្មគ្រប់ប្រភេទ ក្នុងការចាប់ផ្តើមអាជីវកម្មស្របច្បាប់បាន យ៉ាងឆាប់រហ័ស និងសុវត្ថិភាព។',
    startRegistration: 'ចាប់ផ្តើមចុះបញ្ជី',
    howItWorks: 'របៀបដំណើរការ',
    quickLinks: 'ទំនាក់ទំនងរហ័ស',
    servicesEyebrow: 'សេវាកម្មឌីជីថល',
    servicesTitleLead: 'សេវាកម្មចុះបញ្ជីពាណិជ្ជកម្ម',
    servicesTitleAccent: 'តាមថ្នាលឌីជីថល',
    servicesBody: 'ជ្រើសរើសសេវាកម្មដែលអ្នកត្រូវការ ដើម្បីមើលលក្ខខណ្ឌ ឯកសារ និងជំហានលម្អិត។',
    viewAllServices: 'មើលសេវាកម្មទាំងអស់',
    loginRequired: 'តម្រូវឲ្យចូលប្រើប្រាស់',
    aboutEyebrow: 'អំពីប្រព័ន្ធ',
    aboutTitleLead: 'ហេតុអ្វីត្រូវប្រើ',
    aboutTitleAccent: 'ប្រព័ន្ធស្វ័យប្រវត្តិ',
    learnMoreAboutRegistry: 'អានបន្ថែមអំពីប្រព័ន្ធ',
    processEyebrow: 'នីតិវិធី',
    processTitleLead: 'ជំហានចុះបញ្ជី',
    processTitleAccent: 'ពីដើមដល់ចប់',
    processBody: 'នីតិវិធីខាងក្រោមអនុវត្តតាមការពិពណ៌នានៅលើគេហទំព័រចុះបញ្ជីពាណិជ្ជកម្មបច្ចុប្បន្ន។',
    step: 'ជំហាន',
    viewFullProcedure: 'មើលនីតិវិធីទាំងស្រុង',
    resourcesEyebrow: 'ឯកសារ និងច្បាប់',
    resourcesTitleLead: 'ច្បាប់ បទប្បញ្ញត្តិ',
    resourcesTitleAccent: 'និងបែបបទ',
    resourcesBody: 'ឯកសារផ្លូវការសម្រាប់ទាញយក។ ឯកសារដែលមិនទាន់ផ្ទៀងផ្ទាត់ត្រូវបានដាក់សម្គាល់។',
    lawsCardTitle: 'ច្បាប់ និងបទប្បញ្ញត្តិ',
    formsCardTitle: 'បែបបទ និងឯកសារ',
    viewAllLaws: 'មើលច្បាប់ទាំងអស់',
    viewAllForms: 'មើលបែបបទទាំងអស់',
    download: 'ទាញយក',
    unverified: 'រង់ចាំការផ្ទៀងផ្ទាត់',
    official: 'ឯកសារផ្លូវការ',
    announcementsEyebrow: 'សេចក្តីជូនដំណឹង',
    announcementsTitleLead: 'ព័ត៌មាន និងសេចក្តី',
    announcementsTitleAccent: 'ជូនដំណឹងថ្មីៗ',
    viewAllAnnouncements: 'មើលទាំងអស់',
    readMore: 'អានបន្ថែម',
    dateNotEntered: 'កាលបរិច្ឆេទផ្លូវការមិនទាន់បញ្ចូល',
    attachment: 'ឯកសារភ្ជាប់',
    faqEyebrow: 'សំណួរញឹកញាប់',
    faqTitleLead: 'សំណួរដែលសួរ',
    faqTitleAccent: 'ញឹកញាប់',
    viewAllFaqs: 'មើលសំណួរទាំងអស់',
    supportTitle: 'ត្រូវការជំនួយ?',
    supportBody: 'ទូរស័ព្ទមកលេខទាន់ហេតុការណ៍ ឬទំនាក់ទំនងមកនាយកដ្ឋាន។',
    contactUs: 'ទំនាក់ទំនងមកយើង',
    footerAbout:
      'នាយកដ្ឋានចុះបញ្ជីពាណិជ្ជកម្ម ក្រសួងពាណិជ្ជកម្ម ព្រះរាជាណាចក្រកម្ពុជា។',
    footerServices: 'សេវាកម្មអនឡាញ',
    footerStarting: 'ចាប់ផ្តើមអាជីវកម្ម',
    footerResources: 'ឯកសារ',
    footerContact: 'ព័ត៌មានទំនាក់ទំនង',
    ministryWebsite: 'គេហទំព័រក្រសួងពាណិជ្ជកម្ម',
    allRightsReserved: 'រក្សាសិទ្ធិគ្រប់បែបយ៉ាង',
    placeholderBadge: 'ព័ត៌មានផ្លូវការត្រូវបញ្ចូល',
  },
  en: {
    skipToContent: 'Skip to main content',
    officialBannerTitle: 'An official website of the Kingdom of Cambodia',
    officialBannerBody: 'Official information and online business registration services.',
    hotline: 'Hotline',
    language: 'Language',
    khmer: 'ខ្មែរ',
    english: 'English',
    switchToEnglish: 'Switch to English',
    switchToKhmer: 'Switch to Khmer',
    logIn: 'Log In',
    registerNewUser: 'Register New User',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    menu: 'Menu',
    mainNavigation: 'Main navigation',
    searchTheRegister: 'Search the business register',
    searchPlaceholder: 'Business name or registration number',
    search: 'Search',
    heroEyebrow: 'Automated Business Registration System',
    heroTitleLead: 'Register Your Business',
    heroTitleAccent: 'Online',
    heroBody:
      'Apply, reserve a name, file updates, and obtain certificates through a single interface.',
    startRegistration: 'Start Registration',
    howItWorks: 'How It Works',
    quickLinks: 'Quick links',
    servicesEyebrow: 'Online Services',
    servicesTitleLead: 'Business Registration Services',
    servicesTitleAccent: 'Delivered Online',
    servicesBody:
      'Choose the service you need to see its conditions, required documents, and steps.',
    viewAllServices: 'View All Services',
    loginRequired: 'Login required',
    aboutEyebrow: 'About the System',
    aboutTitleLead: 'Why Use the',
    aboutTitleAccent: 'Automated Registry',
    learnMoreAboutRegistry: 'Learn More About the Registry',
    processEyebrow: 'The Procedure',
    processTitleLead: 'Registration Steps',
    processTitleAccent: 'From Start to Finish',
    processBody:
      'The steps below follow the procedure described on the current Business Registration website.',
    step: 'Step',
    viewFullProcedure: 'View the Full Procedure',
    resourcesEyebrow: 'Laws and Forms',
    resourcesTitleLead: 'Laws, Regulations',
    resourcesTitleAccent: 'and Forms',
    resourcesBody:
      'Official documents available for download. Entries not yet verified are marked.',
    lawsCardTitle: 'Laws and Regulations',
    formsCardTitle: 'Forms and Documents',
    viewAllLaws: 'View All Laws',
    viewAllForms: 'View All Forms',
    download: 'Download',
    unverified: 'Awaiting verification',
    official: 'Official document',
    announcementsEyebrow: 'Announcements',
    announcementsTitleLead: 'News and Public',
    announcementsTitleAccent: 'Announcements',
    viewAllAnnouncements: 'View All',
    readMore: 'Read more',
    dateNotEntered: 'Official date not entered',
    attachment: 'Attachment',
    faqEyebrow: 'FAQ',
    faqTitleLead: 'Frequently Asked',
    faqTitleAccent: 'Questions',
    viewAllFaqs: 'View All Questions',
    supportTitle: 'Need help?',
    supportBody: 'Call the hotline or contact the department directly.',
    contactUs: 'Contact Us',
    footerAbout:
      'Business Registration Department, Ministry of Commerce, Kingdom of Cambodia.',
    footerServices: 'Online Services',
    footerStarting: 'Starting a Business',
    footerResources: 'Resources',
    footerContact: 'Contact Information',
    ministryWebsite: 'Ministry of Commerce website',
    allRightsReserved: 'All rights reserved',
    placeholderBadge: 'Official content required',
  },
} as const

export type UiKey = keyof (typeof dictionary)['km']

export function t(locale: Locale, key: UiKey): string {
  return dictionary[locale][key]
}
