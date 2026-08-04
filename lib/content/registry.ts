import type {
  ApplicationStatus,
  DepartmentFunction,
  ProcessStep,
} from '@/lib/types'

/**
 * Benefits of the automated registry, taken from the "Why Online Registry"
 * page of the current Business Registration website. No number or percentage
 * is invented here.
 */
export const registryBenefits = [
  {
    km: 'ចំណុចប្រទាក់តែមួយសម្រាប់នីតិវិធីចុះបញ្ជី',
    en: 'A single interface for registration procedures',
  },
  {
    km: 'លេខសម្គាល់សហគ្រាសតែមួយ ដែលត្រូវបានទទួលស្គាល់ដោយស្ថាប័នពាក់ព័ន្ធ',
    en: 'A unique enterprise ID recognized by relevant institutions',
  },
  {
    km: 'សេវាកម្មដែលមានលក្ខណៈស្តង់ដារពេញព្រះរាជាណាចក្រកម្ពុជា',
    en: 'Standardized service across Cambodia',
  },
  {
    km: 'កាត់បន្ថយរយៈពេលចុះបញ្ជី និងការកែប្រែ',
    en: 'Reduced registration and amendment time',
  },
  {
    km: 'ការចូលប្រើតាមប្រព័ន្ធអេឡិចត្រូនិកទៅកាន់ព័ត៌មានសហគ្រាសដែលមានសុពលភាពតាមច្បាប់',
    en: 'Electronic access to legally valid enterprise information',
  },
  {
    km: 'ភាពងាយស្រួលសម្រាប់សាធារណជនក្នុងការទទួលបានព័ត៌មានអាជីវកម្មថ្មីៗ',
    en: 'Easier public access to up-to-date business information',
  },
]

/** Registration procedure as described on the current website. */
export const processSteps: ProcessStep[] = [
  {
    order: 1,
    titleKm: 'ចុះឈ្មោះជាអ្នកប្រើប្រាស់',
    titleEn: 'Register as a User',
    descriptionKm: 'បង្កើត និងធ្វើឲ្យគណនីអនឡាញរបស់អ្នកដំណើរការ។',
    descriptionEn: 'Create and activate an online account.',
  },
  {
    order: 2,
    titleKm: 'ជ្រើសរើសសេវាកម្មអាជីវកម្ម',
    titleEn: 'Select a Business Service',
    descriptionKm: 'ជ្រើសរើសប្រភេទអង្គភាព ឬសេវាកម្មចុះបញ្ជីដែលពាក់ព័ន្ធ។',
    descriptionEn: 'Choose the relevant entity type or registration service.',
  },
  {
    order: 3,
    titleKm: 'បម្រុងទុកនាមករណ៍',
    titleEn: 'Reserve a Name',
    descriptionKm: 'បញ្ចូលនាមករណ៍ស្នើសុំជាភាសាខ្មែរ និងអង់គ្លេស នៅកន្លែងដែលតម្រូវ។',
    descriptionEn: 'Enter the proposed name in Khmer and English where required.',
  },
  {
    order: 4,
    titleKm: 'បំពេញពាក្យស្នើសុំ',
    titleEn: 'Complete the Application',
    descriptionKm:
      'បញ្ចូលព័ត៌មានអាជីវកម្ម អាសយដ្ឋាន កម្មសិទ្ធិ អភិបាល និងសកម្មភាពអាជីវកម្មដែលតម្រូវ។',
    descriptionEn:
      'Enter the required business, address, ownership, director, and activity information.',
  },
  {
    order: 5,
    titleKm: 'បញ្ចូលឯកសារគាំទ្រ',
    titleEn: 'Upload Supporting Documents',
    descriptionKm: 'បន្ថែមឯកសារដែលតម្រូវសម្រាប់ពាក្យស្នើសុំដែលបានជ្រើសរើស។',
    descriptionEn: 'Add documents required for the selected application.',
  },
  {
    order: 6,
    titleKm: 'បង់ថ្លៃសេវាដែលពាក់ព័ន្ធ',
    titleEn: 'Pay the Applicable Fee',
    descriptionKm: 'បន្តតាមនីតិវិធីបង់ប្រាក់អនឡាញដែលបានអនុម័ត។',
    descriptionEn: 'Continue through the approved online payment process.',
  },
  {
    order: 7,
    titleKm: 'ការពិនិត្យពាក្យស្នើសុំ',
    titleEn: 'Application Review',
    descriptionKm: 'ពាក្យស្នើសុំត្រូវបានផ្ញើទៅការពិនិត្យផ្ទៃក្នុង។',
    descriptionEn: 'The application is sent for internal review.',
  },
  {
    order: 8,
    titleKm: 'ទទួលបានលទ្ធផល',
    titleEn: 'Receive the Result',
    descriptionKm:
      'អ្នកនឹងទទួលបានអ៊ីមែលនៅពេលពាក្យស្នើសុំត្រូវបានអនុម័ត ត្រឡប់មកវិញដើម្បីកែតម្រូវ ឬត្រូវបានបដិសេធ។',
    descriptionEn:
      'Receive an email when the application is approved, returned for correction, or rejected.',
  },
]

/**
 * Business name reservation guidance, preserved from the current website.
 */
export const nameReservationGuidance = [
  {
    km: 'នាមករណ៍អាចត្រូវបានបម្រុងទុកមុនពេលបង្កើតអាជីវកម្មថ្មី។',
    en: 'A name may be reserved before establishing a new business.',
  },
  {
    km: 'នាមករណ៍ក៏អាចត្រូវបានបម្រុងទុកមុនពេលផ្លាស់ប្តូរឈ្មោះអាជីវកម្មដែលមានស្រាប់។',
    en: 'A name may also be reserved before changing an existing business name.',
  },
  {
    km: 'អ្នកស្នើសុំត្រូវជ្រើសរើសប្រភេទអាជីវកម្ម ឬអង្គភាពដែលពាក់ព័ន្ធ។',
    en: 'Applicants select the relevant business or entity type.',
  },
  {
    km: 'នាមករណ៍ស្នើសុំត្រូវបញ្ចូលជាភាសាខ្មែរ និងភាសាអង់គ្លេស។',
    en: 'The proposed name is entered in Khmer and English.',
  },
  {
    km: 'ការបញ្ចូលឯកសារគាំទ្រអាចជាជម្រើស។',
    en: 'Supporting-document upload may be optional.',
  },
  {
    km: 'ត្រូវបង់ថ្លៃសេវា។',
    en: 'A fee applies.',
  },
  {
    km: 'នាមករណ៍មិនត្រូវធ្វើឲ្យមានការភាន់ច្រឡំ បំភាន់ ឬប៉ះពាល់សីលធម៌ឡើយ។',
    en: 'A name must not be confusing, misleading, or offensive.',
  },
  {
    km: 'នាមករណ៍ដែលបានអនុម័តមានសុពលភាពរយៈពេលបីខែ។',
    en: 'An approved name reservation remains valid for three months.',
  },
  {
    km: 'វាអាចត្រូវបានបន្តរយៈពេលបីខែបន្ថែមទៀត តាមនីតិវិធី និងការបង់ថ្លៃសេវាដែលពាក់ព័ន្ធ។',
    en: 'It may be extended for another three months through the applicable process and payment.',
  },
]

/** Application statuses used by the online system. */
export const applicationStatuses: ApplicationStatus[] = [
  {
    key: 'completed',
    labelKm: 'ពាក្យស្នើសុំបានបំពេញរួច',
    labelEn: 'Application completed',
    descriptionKm: 'ព័ត៌មាន និងឯកសារដែលតម្រូវត្រូវបានបំពេញ។',
    descriptionEn: 'The required information and documents have been completed.',
    tone: 'neutral',
  },
  {
    key: 'submitted',
    labelKm: 'បានដាក់ស្នើសម្រាប់ការពិនិត្យផ្ទៃក្នុង',
    labelEn: 'Submitted for internal review',
    descriptionKm: 'ពាក្យស្នើសុំត្រូវបានផ្ញើទៅការពិនិត្យផ្ទៃក្នុង។',
    descriptionEn: 'The application has been sent for internal review.',
    tone: 'progress',
  },
  {
    key: 'approved',
    labelKm: 'បានអនុម័ត',
    labelEn: 'Approved',
    descriptionKm:
      'អ្នកប្រើប្រាស់ដែលបានអនុម័តអាចចូលប្រើវិញ្ញាបនបត្រ ឬសម្រង់អេឡិចត្រូនិកដែលមានផ្តល់ជូន។',
    descriptionEn:
      'Approved users can access available electronic certificates or extracts.',
    tone: 'positive',
  },
  {
    key: 'returned',
    labelKm: 'ត្រឡប់មកវិញដើម្បីបញ្ចូលព័ត៌មានបន្ថែម',
    labelEn: 'Returned for additional information',
    descriptionKm:
      'ពាក្យស្នើសុំដែលត្រឡប់មកវិញអាចតម្រូវឲ្យមានការកែតម្រូវ និងការដាក់ស្នើឡើងវិញ។',
    descriptionEn:
      'A returned application may require correction and resubmission.',
    tone: 'attention',
  },
  {
    key: 'rejected',
    labelKm: 'ត្រូវបានបដិសេធ',
    labelEn: 'Rejected',
    descriptionKm: 'អ្នកនឹងទទួលបានការជូនដំណឹងតាមអ៊ីមែលអំពីលទ្ធផល។',
    descriptionEn: 'You receive an email notification about the outcome.',
    tone: 'negative',
  },
]

/**
 * Resubmission deadline is an editable content field. No deadline is invented.
 * TODO: replace with the official published resubmission deadline.
 */
export const resubmissionDeadline = {
  km: '[រយៈពេលកំណត់សម្រាប់ការដាក់ស្នើឡើងវិញ — ត្រូវបញ្ចូលតាមឯកសារផ្លូវការ]',
  en: '[Resubmission deadline — to be entered from the official document]',
}

/** Certificate wording preserved from the current website. */
export const certificateNotes = [
  {
    km: 'អ្នកប្រើប្រាស់ទទួលបានការជូនដំណឹងតាមអ៊ីមែលអំពីវឌ្ឍនភាពនៃពាក្យស្នើសុំ។',
    en: 'Users receive email notifications about application progress.',
  },
  {
    km: 'វិញ្ញាបនបត្រអេឡិចត្រូនិកអាចមានត្រាអេឡិចត្រូនិក លេខកូដ QR និងហត្ថលេខា។',
    en: 'Electronic certificates may contain an electronic stamp, QR code, and signature.',
  },
]

/**
 * Department functions, replacing the reference design's team gallery.
 * Wording follows the "What We Do" page of the current website.
 */
export const departmentFunctions: DepartmentFunction[] = [
  {
    icon: 'clipboard',
    titleKm: 'ការគ្រប់គ្រងការចុះបញ្ជី',
    titleEn: 'Registration Administration',
    descriptionKm:
      'គ្រប់គ្រងបញ្ជីពាណិជ្ជកម្ម តាមដានសកម្មភាពអាជីវកម្ម និងរៀបចំឯកសារចុះបញ្ជីតាមបទដ្ឋាន។',
    descriptionEn:
      'Control business registers, monitor business activities, and prepare standard business-registration documents.',
  },
  {
    icon: 'refresh',
    titleKm: 'ការថែទាំព័ត៌មានក្រុមហ៊ុន',
    titleEn: 'Company Maintenance',
    descriptionKm:
      'គ្រប់គ្រងការធ្វើបច្ចុប្បន្នភាព ការកែប្រែ ការរំលាយ និងទិន្នន័យក្រុមហ៊ុន។',
    descriptionEn:
      'Administer updates, changes, dissolutions, and company data.',
  },
  {
    icon: 'calendar',
    titleKm: 'ការប្រកាសព័ត៌មានប្រចាំឆ្នាំ',
    titleEn: 'Annual Declarations',
    descriptionKm:
      'គ្រប់គ្រងកំណត់ត្រាចុះបញ្ជី ការប្រកាស ឯកសារបុរាណ និងទិន្នន័យក្រុមហ៊ុន។',
    descriptionEn:
      'Manage registration records, declarations, archives, and company data.',
  },
  {
    icon: 'scale',
    titleKm: 'ការគាំទ្រផ្នែកច្បាប់ និងអនុលោមភាព',
    titleEn: 'Legal and Compliance Support',
    descriptionKm:
      'សម្របសម្រួលវិវាទពាក់ព័ន្ធនឹងការចុះបញ្ជី ផ្ទៀងផ្ទាត់ព័ត៌មានអនុលោមភាព និងតាមដានការអនុវត្តបទដ្ឋានចុះបញ្ជីពាណិជ្ជកម្ម។',
    descriptionEn:
      'Coordinate registration-related disputes, verify compliance information, and monitor implementation of commercial-registration rules.',
  },
]

/** "What We Do" list preserved from the current website. */
export const departmentDuties = [
  {
    km: 'គ្រប់គ្រងបញ្ជីពាណិជ្ជកម្ម និងតាមដានសកម្មភាពអាជីវកម្ម',
    en: 'Control business registers and monitor business activities',
  },
  {
    km: 'ពិនិត្យ និងរក្សាទុកការអនុម័តលើនាមករណ៍ក្រុមហ៊ុន និងសហគ្រាស',
    en: 'Assess and retain approvals for company and enterprise names',
  },
  {
    km: 'ផ្តល់ការប្រឹក្សា និងព័ត៌មានអំពីការចុះបញ្ជីពាណិជ្ជកម្ម',
    en: 'Provide business-registration consultation and information',
  },
  {
    km: 'គ្រប់គ្រងកំណត់ត្រាចុះបញ្ជី ការប្រកាស ឯកសារបុរាណ និងទិន្នន័យក្រុមហ៊ុន',
    en: 'Manage registration records, declarations, archives, and company data',
  },
  {
    km: 'រៀបចំឯកសារចុះបញ្ជីពាណិជ្ជកម្មតាមបទដ្ឋាន',
    en: 'Prepare standard business-registration documents',
  },
  {
    km: 'គ្រប់គ្រងការធ្វើបច្ចុប្បន្នភាព ការកែប្រែ ការរំលាយ និងការប្រកាស',
    en: 'Administer updates, changes, dissolutions, and declarations',
  },
  {
    km: 'សម្របសម្រួលវិវាទពាក់ព័ន្ធនឹងការចុះបញ្ជី',
    en: 'Coordinate registration-related disputes',
  },
  {
    km: 'ផ្ទៀងផ្ទាត់ព័ត៌មានអនុលោមភាព',
    en: 'Verify compliance information',
  },
  {
    km: 'ស្រាវជ្រាវ និងផ្តល់ព័ត៌មានពីបញ្ជីពាណិជ្ជកម្ម',
    en: 'Research and provide registry information',
  },
  {
    km: 'ណែនាំ និងតាមដានការអនុវត្តបទដ្ឋានស្តីពីការចុះបញ្ជីពាណិជ្ជកម្ម',
    en: 'Guide and monitor implementation of commercial-registration rules',
  },
]

/** "Who We Are" wording preserved from the current website. */
export const whoWeAre = {
  km: 'នាយកដ្ឋានចុះបញ្ជីពាណិជ្ជកម្ម ស្ថិតនៅក្រោមអគ្គនាយកដ្ឋានពាក់ព័ន្ធនៃក្រសួងពាណិជ្ជកម្ម។',
  en: 'The Business Registration Department serves under the relevant General Department of the Ministry of Commerce.',
}
