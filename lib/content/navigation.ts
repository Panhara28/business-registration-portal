import type { NavItem } from '@/lib/types'

/** Information architecture preserved from the current Business Registration website. */
export const mainNavigation: NavItem[] = [
  { href: '/', labelKm: 'ទំព័រដើម', labelEn: 'Home' },
  {
    href: '/about',
    labelKm: 'អំពីយើង',
    labelEn: 'About Us',
    children: [
      {
        href: '/about/who-we-are',
        labelKm: 'តើយើងជានរណា',
        labelEn: 'Who We Are',
        descriptionKm: 'នាយកដ្ឋានចុះបញ្ជីពាណិជ្ជកម្ម និងតួនាទីរបស់ខ្លួន',
        descriptionEn: 'The department and the role it serves',
      },
      {
        href: '/about/what-we-do',
        labelKm: 'តួនាទី និងភារកិច្ច',
        labelEn: 'What We Do',
        descriptionKm: 'ភារកិច្ចផ្លូវការរបស់នាយកដ្ឋាន',
        descriptionEn: 'Official functions of the department',
      },
      {
        href: '/about/why-online-registry',
        labelKm: 'ហេតុអ្វីប្រើប្រព័ន្ធអនឡាញ',
        labelEn: 'Why Online Registry',
        descriptionKm: 'អត្ថប្រយោជន៍នៃការចុះបញ្ជីតាមប្រព័ន្ធស្វ័យប្រវត្តកម្ម',
        descriptionEn: 'Benefits of the automated registry',
      },
      {
        href: '/about/organizational-chart',
        labelKm: 'រចនាសម្ព័ន្ធស្ថាប័ន',
        labelEn: 'Organizational Chart',
        descriptionKm: 'រចនាសម្ព័ន្ធការងាររបស់នាយកដ្ឋាន',
        descriptionEn: 'Department structure',
      },
    ],
  },
  {
    href: '/starting-a-business',
    labelKm: 'ចាប់ផ្តើមអាជីវកម្ម',
    labelEn: 'Starting a Business',
    children: [
      {
        href: '/services/register-new-user',
        labelKm: 'ចុះឈ្មោះជាអ្នកប្រើប្រាស់ថ្មី',
        labelEn: 'Register as a New User',
        descriptionKm: 'បង្កើតគណនីសម្រាប់ប្រើប្រាស់សេវាកម្មអនឡាញ',
        descriptionEn: 'Create an account to use online services',
      },
      {
        href: '/services/reserve-business-name',
        labelKm: 'បម្រុងទុកនាមករណ៍អាជីវកម្ម',
        labelEn: 'Reserve a Business Name',
        descriptionKm: 'ស្នើសុំបម្រុងទុកឈ្មោះជាភាសាខ្មែរ និងអង់គ្លេស',
        descriptionEn: 'Reserve a proposed Khmer and English name',
      },
      {
        href: '/services/register-business',
        labelKm: 'ចុះបញ្ជីអាជីវកម្មរបស់អ្នក',
        labelEn: 'Register Your Business',
        descriptionKm: 'ដាក់ពាក្យស្នើសុំចុះបញ្ជីថ្មី',
        descriptionEn: 'Submit a new registration application',
      },
      {
        href: '/starting-a-business/how-we-process-your-application',
        labelKm: 'របៀបដែលយើងពិនិត្យពាក្យស្នើសុំ',
        labelEn: 'How We Process Your Application',
        descriptionKm: 'នីតិវិធីពិនិត្យផ្ទៃក្នុង',
        descriptionEn: 'The internal review process',
      },
      {
        href: '/starting-a-business/what-happens-next',
        labelKm: 'បន្ទាប់ពីដាក់ពាក្យ',
        labelEn: 'What Happens Next',
        descriptionKm: 'ស្ថានភាពពាក្យស្នើសុំ និងលទ្ធផល',
        descriptionEn: 'Application statuses and results',
      },
    ],
  },
  {
    href: '/business-services',
    labelKm: 'សេវាកម្មអាជីវកម្ម',
    labelEn: 'Business Services',
    children: [
      {
        href: '/services/change-business-details',
        labelKm: 'កែប្រែព័ត៌មានអាជីវកម្ម',
        labelEn: 'Change Business Details',
        descriptionKm: 'ដាក់ស្នើការកែប្រែសម្រាប់ក្រុមហ៊ុនដែលបានចុះបញ្ជី',
        descriptionEn: 'Submit changes for a registered company',
      },
      {
        href: '/services/annual-declaration',
        labelKm: 'ការប្រកាសព័ត៌មានប្រចាំឆ្នាំ',
        labelEn: 'Annual Declaration',
        descriptionKm: 'ព័ត៌មាន និងសេវាកម្មសម្រាប់ការប្រកាសប្រចាំឆ្នាំ',
        descriptionEn: 'Annual declaration filing information',
      },
      {
        href: '/services/certificates-and-extracts',
        labelKm: 'ស្នើសុំវិញ្ញាបនបត្រ និងសម្រង់',
        labelEn: 'Request Certificates and Extracts',
        descriptionKm: 'ស្នើសុំឯកសារដែលមានផ្តល់ជូន',
        descriptionEn: 'Request available company documents',
      },
      {
        href: '/services/company-authority',
        labelKm: 'សិទ្ធិគ្រប់គ្រងក្រុមហ៊ុន',
        labelEn: 'Company Authority',
        descriptionKm: 'ស្នើសុំសិទ្ធិថែទាំក្រុមហ៊ុនដែលមានស្រាប់',
        descriptionEn: 'Request authority over an existing company',
      },
      {
        href: '/services/account-activation',
        labelKm: 'ដំណើរការគណនី',
        labelEn: 'Account Activation',
        descriptionKm: 'ធ្វើឲ្យគណនីអ្នកប្រើប្រាស់ដំណើរការ',
        descriptionEn: 'Activate a user account',
      },
    ],
  },
  {
    href: '/search',
    labelKm: 'ស្វែងរក',
    labelEn: 'Searching',
    children: [
      {
        href: '/search?type=entity',
        labelKm: 'ស្វែងរកអង្គភាព',
        labelEn: 'Search Entity',
        descriptionKm: 'ស្វែងរកតាមឈ្មោះ ឬលេខចុះបញ្ជី',
        descriptionEn: 'Search by name or registration number',
      },
      {
        href: '/search?type=role',
        labelKm: 'ស្វែងរកតួនាទី',
        labelEn: 'Search Role',
        descriptionKm: 'ស្វែងរកតួនាទីក្នុងអង្គភាព',
        descriptionEn: 'Search roles within an entity',
      },
      {
        href: '/search?type=reserved-name',
        labelKm: 'ស្វែងរកឈ្មោះដែលបានបម្រុងទុក',
        labelEn: 'Search Reserved Name',
        descriptionKm: 'ពិនិត្យឈ្មោះដែលបានបម្រុងទុក',
        descriptionEn: 'Check reserved business names',
      },
      {
        href: '/search?type=document-code',
        labelKm: 'ផ្ទៀងផ្ទាត់លេខកូដឯកសារ',
        labelEn: 'Verify Document Code',
        descriptionKm: 'ផ្ទៀងផ្ទាត់ឯកសារអេឡិចត្រូនិក',
        descriptionEn: 'Verify an electronic document',
      },
    ],
  },
  {
    href: '/fees',
    labelKm: 'ថ្លៃសេវា និងការផាកពិន័យ',
    labelEn: 'Fees and Penalties',
    children: [
      {
        href: '/fees#fee-table',
        labelKm: 'តារាងថ្លៃសេវាសាធារណៈ',
        labelEn: 'Public Service Fee Table',
      },
      {
        href: '/fees#how-to-pay',
        labelKm: 'របៀបបង់ថ្លៃសេវា',
        labelEn: 'How to Pay Fees',
      },
      {
        href: '/fees#penalties',
        labelKm: 'ការផាកពិន័យ',
        labelEn: 'Penalties',
      },
    ],
  },
  {
    href: '/laws',
    labelKm: 'ច្បាប់ និងបទប្បញ្ញត្តិ',
    labelEn: 'Laws and Regulations',
    children: [
      { href: '/laws?type=law', labelKm: 'ច្បាប់', labelEn: 'Laws' },
      { href: '/laws?type=sub-decree', labelKm: 'អនុក្រឹត្យ', labelEn: 'Sub-Decrees' },
      { href: '/laws?type=prakas', labelKm: 'ប្រកាស', labelEn: 'Prakas' },
      { href: '/laws?type=announcement', labelKm: 'សេចក្តីជូនដំណឹង', labelEn: 'Announcements' },
    ],
  },
  {
    href: '/documents',
    labelKm: 'ឯកសារ និងបែបបទ',
    labelEn: 'Documents and Forms',
    children: [
      {
        href: '/documents?category=new-registration',
        labelKm: 'គំរូបែបបទ',
        labelEn: 'Sample Forms',
      },
      {
        href: '/documents?category=e-commerce',
        labelKm: 'ឯកសារស្នើសុំពាណិជ្ជកម្មតាមប្រព័ន្ធអេឡិចត្រូនិក',
        labelEn: 'E-commerce Application Documents',
      },
      {
        href: '/documents?category=annual-declaration',
        labelKm: 'បែបបទប្រកាសព័ត៌មានប្រចាំឆ្នាំ',
        labelEn: 'Annual Declaration Forms',
      },
      {
        href: '/documents?category=training',
        labelKm: 'ពាក្យស្នើសុំវគ្គបណ្តុះបណ្តាល',
        labelEn: 'Training Applications',
      },
      {
        href: '/documents?category=guides',
        labelKm: 'មគ្គុទ្ទេសក៍ចុះបញ្ជី',
        labelEn: 'Registration Guides',
      },
    ],
  },
  { href: '/contact', labelKm: 'ទំនាក់ទំនង', labelEn: 'Contact' },
]

export const footerNavigation = {
  services: [
    { href: '/services/register-new-user', labelKm: 'ចុះឈ្មោះជាអ្នកប្រើប្រាស់ថ្មី', labelEn: 'Register as a New User' },
    { href: '/services/reserve-business-name', labelKm: 'បម្រុងទុកនាមករណ៍', labelEn: 'Reserve a Business Name' },
    { href: '/services/register-business', labelKm: 'ចុះបញ្ជីអាជីវកម្ម', labelEn: 'Register Your Business' },
    { href: '/services/annual-declaration', labelKm: 'ការប្រកាសប្រចាំឆ្នាំ', labelEn: 'Annual Declaration' },
    { href: '/services/certificates-and-extracts', labelKm: 'វិញ្ញាបនបត្រ និងសម្រង់', labelEn: 'Certificates and Extracts' },
  ],
  starting: [
    { href: '/starting-a-business/how-we-process-your-application', labelKm: 'នីតិវិធីពិនិត្យពាក្យ', labelEn: 'How We Process Applications' },
    { href: '/starting-a-business/what-happens-next', labelKm: 'បន្ទាប់ពីដាក់ពាក្យ', labelEn: 'What Happens Next' },
    { href: '/about/why-online-registry', labelKm: 'ហេតុអ្វីប្រើប្រព័ន្ធអនឡាញ', labelEn: 'Why Online Registry' },
    { href: '/search', labelKm: 'ស្វែងរកក្នុងបញ្ជី', labelEn: 'Search the Register' },
  ],
  resources: [
    { href: '/documents', labelKm: 'ឯកសារ និងបែបបទ', labelEn: 'Forms and Downloads' },
    { href: '/laws', labelKm: 'ច្បាប់ និងបទប្បញ្ញត្តិ', labelEn: 'Laws and Regulations' },
    { href: '/announcements', labelKm: 'សេចក្តីជូនដំណឹង', labelEn: 'Announcements' },
    { href: '/fees', labelKm: 'ថ្លៃសេវា និងការផាកពិន័យ', labelEn: 'Fees and Penalties' },
    { href: '/faq', labelKm: 'សំណួរញឹកញាប់', labelEn: 'Frequently Asked Questions' },
  ],
  utility: [
    { href: '/privacy', labelKm: 'ឯកជនភាព', labelEn: 'Privacy' },
    { href: '/terms', labelKm: 'លក្ខខណ្ឌប្រើប្រាស់', labelEn: 'Terms of Use' },
    { href: '/accessibility', labelKm: 'លទ្ធភាពប្រើប្រាស់', labelEn: 'Accessibility' },
    { href: '/sitemap', labelKm: 'ផែនទីគេហទំព័រ', labelEn: 'Sitemap' },
  ],
}

export const quickResourceLinks = [
  { href: '/login', labelKm: 'ចូលប្រើប្រាស់', labelEn: 'Log In' },
  { href: '/services/register-new-user', labelKm: 'ចុះឈ្មោះអ្នកប្រើប្រាស់ថ្មី', labelEn: 'Register New User' },
  { href: '/search', labelKm: 'ស្វែងរកក្នុងបញ្ជី', labelEn: 'Search the Register' },
  { href: '/services/reserve-business-name', labelKm: 'បម្រុងទុកនាមករណ៍', labelEn: 'Reserve a Name' },
  { href: '/services/annual-declaration', labelKm: 'ការប្រកាសប្រចាំឆ្នាំ', labelEn: 'Annual Declaration' },
  { href: '/fees#fee-table', labelKm: 'តារាងថ្លៃសេវា', labelEn: 'Fee Table' },
  { href: '/documents', labelKm: 'គំរូបែបបទ', labelEn: 'Sample Forms' },
  { href: '/announcements', labelKm: 'សេចក្តីជូនដំណឹង', labelEn: 'Announcements' },
]
