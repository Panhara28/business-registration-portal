import type { DemoRegistryRecord, FaqItem } from '@/lib/types'

/**
 * Frequently asked questions.
 *
 * Answers marked `placeholder: true` await official wording. Answers without
 * that flag restate procedural information published on the current website.
 */
export const faqs: FaqItem[] = [
  {
    id: 'faq-new-user',
    category: 'User Account',
    categoryKm: 'គណនីអ្នកប្រើប្រាស់',
    questionKm: 'តើខ្ញុំចុះឈ្មោះជាអ្នកប្រើប្រាស់អនឡាញថ្មីដោយរបៀបណា?',
    questionEn: 'How do I register as a new online user?',
    answerKm:
      'បំពេញទម្រង់ចុះឈ្មោះអ្នកប្រើប្រាស់ថ្មី ផ្ទៀងផ្ទាត់អាសយដ្ឋានអ៊ីមែលរបស់អ្នក បន្ទាប់មកធ្វើឲ្យគណនីដំណើរការ ដើម្បីអាចប្រើប្រាស់សេវាកម្មអនឡាញ។',
    answerEn:
      'Complete the new user registration form, verify your email address, then activate the account to access the online services.',
  },
  {
    id: 'faq-activate',
    category: 'User Account',
    categoryKm: 'គណនីអ្នកប្រើប្រាស់',
    questionKm: 'តើខ្ញុំធ្វើឲ្យគណនីរបស់ខ្ញុំដំណើរការដោយរបៀបណា?',
    questionEn: 'How do I activate my account?',
    answerKm:
      'ការធ្វើឲ្យគណនីដំណើរការត្រូវអនុវត្តតាមនីតិវិធីដែលបានផ្សព្វផ្សាយក្នុងសេវាកម្ម “ដំណើរការគណនី”។',
    answerEn:
      'Account activation follows the procedure published under the Account Activation service.',
  },
  {
    id: 'faq-reserve-name',
    category: 'Business Name Reservation',
    categoryKm: 'ការបម្រុងទុកនាមករណ៍',
    questionKm: 'តើខ្ញុំបម្រុងទុកនាមករណ៍អាជីវកម្មដោយរបៀបណា?',
    questionEn: 'How do I reserve a business name?',
    answerKm:
      'ជ្រើសរើសប្រភេទអាជីវកម្ម ឬអង្គភាពដែលពាក់ព័ន្ធ បញ្ចូលនាមករណ៍ស្នើសុំជាភាសាខ្មែរ និងអង់គ្លេស បញ្ចូលឯកសារគាំទ្រ (ប្រសិនបើតម្រូវ) និងបង់ថ្លៃសេវាដែលពាក់ព័ន្ធ។',
    answerEn:
      'Select the relevant business or entity type, enter the proposed name in Khmer and English, upload supporting documents where applicable, and pay the applicable fee.',
  },
  {
    id: 'faq-name-validity',
    category: 'Business Name Reservation',
    categoryKm: 'ការបម្រុងទុកនាមករណ៍',
    questionKm: 'តើនាមករណ៍ដែលបានអនុម័តមានសុពលភាពរយៈពេលប៉ុន្មាន?',
    questionEn: 'How long is an approved name reservation valid?',
    answerKm:
      'នាមករណ៍ដែលបានអនុម័តមានសុពលភាពរយៈពេលបីខែ ហើយអាចត្រូវបានបន្តរយៈពេលបីខែបន្ថែមទៀត តាមនីតិវិធី និងការបង់ថ្លៃសេវាដែលពាក់ព័ន្ធ។',
    answerEn:
      'An approved name reservation remains valid for three months and may be extended for another three months through the applicable process and payment.',
  },
  {
    id: 'faq-register-business',
    category: 'New Registration',
    categoryKm: 'ការចុះបញ្ជីថ្មី',
    questionKm: 'តើខ្ញុំចុះបញ្ជីអាជីវកម្មថ្មីដោយរបៀបណា?',
    questionEn: 'How do I register a new business?',
    answerKm:
      'ចូលប្រើគណនីរបស់អ្នក ជ្រើសរើសសេវាកម្មចុះបញ្ជី បំពេញព័ត៌មានអាជីវកម្ម អាសយដ្ឋាន កម្មសិទ្ធិ អភិបាល និងសកម្មភាព បញ្ចូលឯកសារគាំទ្រ បង់ថ្លៃសេវា និងដាក់ស្នើសម្រាប់ការពិនិត្យផ្ទៃក្នុង។',
    answerEn:
      'Log in, select the registration service, complete the business, address, ownership, director and activity information, upload supporting documents, pay the fee, and submit for internal review.',
  },
  {
    id: 'faq-application-result',
    category: 'New Registration',
    categoryKm: 'ការចុះបញ្ជីថ្មី',
    questionKm: 'តើខ្ញុំដឹងអំពីលទ្ធផលពាក្យស្នើសុំដោយរបៀបណា?',
    questionEn: 'How will I know whether my application was approved?',
    answerKm:
      'អ្នកនឹងទទួលបានអ៊ីមែលនៅពេលពាក្យស្នើសុំត្រូវបានអនុម័ត ត្រឡប់មកវិញដើម្បីកែតម្រូវ ឬត្រូវបានបដិសេធ។',
    answerEn:
      'You receive an email when the application is approved, returned for correction, or rejected.',
  },
  {
    id: 'faq-returned-application',
    category: 'New Registration',
    categoryKm: 'ការចុះបញ្ជីថ្មី',
    questionKm: 'តើខ្ញុំគួរធ្វើអ្វី ប្រសិនបើពាក្យស្នើសុំរបស់ខ្ញុំត្រូវបានត្រឡប់មកវិញ?',
    questionEn: 'What should I do if my application is returned?',
    answerKm:
      'ពាក្យស្នើសុំដែលត្រឡប់មកវិញអាចតម្រូវឲ្យមានការកែតម្រូវ និងការដាក់ស្នើឡើងវិញ។ រយៈពេលកំណត់ត្រូវអនុវត្តតាមឯកសារផ្លូវការ។',
    answerEn:
      'A returned application may require correction and resubmission. Applicable deadlines are those set out in the official document.',
    placeholder: true,
  },
  {
    id: 'faq-update-company',
    category: 'Company Changes',
    categoryKm: 'ការកែប្រែក្រុមហ៊ុន',
    questionKm: 'តើខ្ញុំធ្វើបច្ចុប្បន្នភាពព័ត៌មានក្រុមហ៊ុនដែលបានចុះបញ្ជីដោយរបៀបណា?',
    questionEn: 'How can I update registered company information?',
    answerKm:
      'ដើម្បីដាក់ស្នើការកែប្រែក្រុមហ៊ុន អ្នកប្រើប្រាស់ត្រូវចូលប្រើគណនី ត្រូវមានសិទ្ធិគ្រប់គ្រងដែលតម្រូវ ហើយក្រុមហ៊ុនត្រូវបំពេញលក្ខខណ្ឌចុះបញ្ជីដែលពាក់ព័ន្ធ។',
    answerEn:
      'To submit company changes, users must log in, have the required authority, and the company must meet the applicable registration conditions.',
  },
  {
    id: 'faq-annual-declaration',
    category: 'Annual Declaration',
    categoryKm: 'ការប្រកាសព័ត៌មានប្រចាំឆ្នាំ',
    questionKm: 'តើខ្ញុំដាក់ប្រកាសព័ត៌មានប្រចាំឆ្នាំដោយរបៀបណា?',
    questionEn: 'How do I submit an annual declaration?',
    answerKm:
      'ចូលប្រើគណនីរបស់អ្នក ជ្រើសរើសក្រុមហ៊ុន បំពេញព័ត៌មានប្រកាសប្រចាំឆ្នាំ បង់ថ្លៃសេវាដែលពាក់ព័ន្ធ និងដាក់ស្នើ។',
    answerEn:
      'Log in, select the company, complete the annual declaration information, pay the applicable fee, and submit.',
  },
  {
    id: 'faq-certificate',
    category: 'Certificates and Extracts',
    categoryKm: 'វិញ្ញាបនបត្រ និងសម្រង់',
    questionKm: 'តើខ្ញុំស្នើសុំវិញ្ញាបនបត្រ ឬសម្រង់ដោយរបៀបណា?',
    questionEn: 'How do I request a certificate or extract?',
    answerKm:
      'ស្នើសុំតាមសេវាកម្មវិញ្ញាបនបត្រ និងសម្រង់។ វិញ្ញាបនបត្រអេឡិចត្រូនិកអាចមានត្រាអេឡិចត្រូនិក លេខកូដ QR និងហត្ថលេខា។',
    answerEn:
      'Request it through the Certificates and Extracts service. Electronic certificates may contain an electronic stamp, QR code, and signature.',
  },
  {
    id: 'faq-search-entity',
    category: 'Registry Searching',
    categoryKm: 'ការស្វែងរកក្នុងបញ្ជី',
    questionKm: 'តើខ្ញុំស្វែងរកអង្គភាពដែលបានចុះបញ្ជីដោយរបៀបណា?',
    questionEn: 'How can I search for a registered entity?',
    answerKm:
      'ប្រើមុខងារស្វែងរកជាសាធារណៈ ដោយជ្រើសរើសប្រភេទស្វែងរក បន្ទាប់មកបញ្ចូលឈ្មោះ ឬលេខចុះបញ្ជី។',
    answerEn:
      'Use the public search, select the search type, then enter a name or registration number.',
  },
  {
    id: 'faq-verify-document',
    category: 'Registry Searching',
    categoryKm: 'ការស្វែងរកក្នុងបញ្ជី',
    questionKm: 'តើខ្ញុំផ្ទៀងផ្ទាត់លេខកូដឯកសារដោយរបៀបណា?',
    questionEn: 'How can I verify a document code?',
    answerKm: 'ប្រើមុខងារ “ផ្ទៀងផ្ទាត់លេខកូដឯកសារ” ក្នុងទំព័រស្វែងរក។',
    answerEn: 'Use the Verify Document Code option on the search page.',
  },
  {
    id: 'faq-fee-table',
    category: 'Fees and Payments',
    categoryKm: 'ថ្លៃសេវា និងការបង់ប្រាក់',
    questionKm: 'តើខ្ញុំរកឃើញតារាងថ្លៃសេវាផ្លូវការនៅឯណា?',
    questionEn: 'Where can I find the official service-fee table?',
    answerKm:
      'តារាងថ្លៃសេវាសាធារណៈត្រូវផ្សព្វផ្សាយជាឯកសារផ្លូវការរបស់ក្រសួងពាណិជ្ជកម្ម។ ថ្លៃសេវាមិនត្រូវប៉ាន់ស្មាន ឬគណនាក្នុងចំណុចប្រទាក់នេះឡើយ។',
    answerEn:
      'The public service fee table is published as an official Ministry of Commerce document. Fees are never estimated or calculated in this interface.',
  },
  {
    id: 'faq-technical-support',
    category: 'Technical Support',
    categoryKm: 'ជំនួយបច្ចេកទេស',
    questionKm: 'តើខ្ញុំទទួលបានជំនួយបច្ចេកទេសដោយរបៀបណា?',
    questionEn: 'How do I get technical support?',
    answerKm: 'សូមទាក់ទងលេខទូរស័ព្ទបម្រើសេវាកម្មដែលបានផ្សព្វផ្សាយនៅលើគេហទំព័រនេះ។',
    answerEn: 'Contact the customer-service hotline numbers published on this website.',
  },
]

export function getFaqs(ids?: string[]) {
  if (!ids) return faqs
  return faqs.filter((faq) => ids.includes(faq.id))
}

export const faqCategories = Array.from(
  new Map(faqs.map((f) => [f.category, { key: f.category, labelKm: f.categoryKm, labelEn: f.category }])).values(),
)

export const searchTypes = [
  { key: 'entity', labelKm: 'អង្គភាព', labelEn: 'Entity' },
  { key: 'role', labelKm: 'តួនាទី', labelEn: 'Role' },
  { key: 'reserved-name', labelKm: 'ឈ្មោះដែលបានបម្រុងទុក', labelEn: 'Reserved Name' },
  { key: 'document-code', labelKm: 'ផ្ទៀងផ្ទាត់លេខកូដឯកសារ', labelEn: 'Verify Document Code' },
] as const

/**
 * Interface demonstration data only. These records are NOT registry results and
 * must never be presented as legally valid.
 * TODO: replace with results from the official Ministry registry API.
 */
export const demoRegistryRecords: DemoRegistryRecord[] = [
  {
    id: 'demo-1',
    nameKm: '[ឈ្មោះគំរូ ១]',
    nameEn: '[Demonstration Entity One]',
    registrationNumber: 'DEMO-0000001',
    type: 'Private Limited Company',
    status: 'Active',
    registeredOn: '—',
  },
  {
    id: 'demo-2',
    nameKm: '[ឈ្មោះគំរូ ២]',
    nameEn: '[Demonstration Entity Two]',
    registrationNumber: 'DEMO-0000002',
    type: 'Sole Proprietorship',
    status: 'Active',
    registeredOn: '—',
  },
  {
    id: 'demo-3',
    nameKm: '[ឈ្មោះគំរូ ៣]',
    nameEn: '[Demonstration Entity Three]',
    registrationNumber: 'DEMO-0000003',
    type: 'Branch',
    status: 'Active',
    registeredOn: '—',
  },
]
