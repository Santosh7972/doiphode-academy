import { ref, computed } from 'vue'
let saved = 'en'
try { saved = sessionStorage.getItem('lang') || 'en' } catch (e) {}
export const lang = ref(saved === 'mr' ? 'mr' : 'en')
export function setLang(l) {
  lang.value = l
  try { sessionStorage.setItem('lang', l) } catch (e) {}
  document.documentElement.lang = l
}
document.documentElement.lang = lang.value

export const translations = {
  en: {
    nav: { home: 'Home', about: 'About Us', courses: 'Courses', contact: 'Contact Us' },
    menu: 'Menu', mainNav: 'Main navigation', langLabel: 'Language', wa: 'WhatsApp', waLong: 'Contact Us on WhatsApp', waEnquire: 'Enquire on WhatsApp',
    open: 'Opening Soon', opening: 'Planned Opening: 1 November 2026', openingDate: '1 November 2026 (planned)',
    heroTitle: 'Build Your Knowledge. Shape Your Future.',
    heroText: 'Coaching for Maharashtra State Board students, Classes 6–10, Classes 11–12 Science, and Competitive Examination Preparation.',
    heroArt: 'Illustration of books and a graduation cap. Not a photograph of the academy.',
    explore: 'Explore Courses', aboutBtn: 'About Our Academy', contactBtn: 'Contact Us', learnMore: 'Learn more',
    features: [
      ['Classes 6–12', 'Maharashtra State Board', 'book'], ['Competitive Exams', 'MPSC, UPSC and more', 'target'],
      ['Experienced Guidance', '5 years of teaching', 'cap'], ['Learning Modes', 'Offline and online, subject to availability', 'screen'],
      ['Batch Options', 'Morning and evening', 'clock']
    ],
    featuresLabel: 'Academy highlights',
    previewAbout: 'Guidance from an experienced teacher', previewAboutText: 'Doiphode Academy is led by Dnyaneshwar Devidas Doiphode, B.Sc. and B.A., with 5 years of teaching experience.',
    previewCourses: 'Courses for school and beyond', previewCoursesText: 'School coaching for Classes 6–10, Science for Classes 11–12, and competitive exam preparation.',
    previewContact: 'Talk to us before we open', previewContactText: 'Message us on WhatsApp or call to ask about courses, batches, fees and admission.',
    aboutTitle: 'About Us', aboutHead: 'Doiphode Academy',
    aboutIntro: 'Doiphode Academy is a coaching academy in Ranisawargaon for Maharashtra State Board students and for those preparing for competitive examinations. Classes are planned in English and Marathi, offline and online (subject to availability), in morning and evening batches.',
    teacherLabel: 'Teacher', qualLabel: 'Qualifications', qual: 'B.Sc. and B.A.', expLabel: 'Teaching experience', exp: '5 Years of Teaching Experience',
    addressLabel: 'Address', address: 'Shinde Complex, Gunjegaon Road, Ranisawargaon, Maharashtra, India',
    boardLabel: 'Board', board: 'Maharashtra State Board', langsLabel: 'Teaching languages', langs: 'English and Marathi',
    aboutArt: 'Illustration of books and a graduation cap. Not a photograph of the teacher or academy.',
    coursesTitle: 'Our Courses', coursesIntro: 'Choose a course category and enquire on WhatsApp. Fees, timings and durations will be shared on enquiry.',
    courses: [
      { id: 'school', icon: 'book', name: 'School Coaching: Classes 6–10', desc: 'Concept-focused coaching for Maharashtra State Board students.', info: ['Mathematics', 'Science', 'English', 'Maharashtra State Board'] },
      { id: 'hs', icon: 'cap', name: 'Higher Secondary: Classes 11–12', desc: 'Coaching for Classes 11–12 in the Science stream.', info: ['Science stream', 'Maharashtra State Board'] },
      { id: 'comp', icon: 'target', name: 'Competitive Examination Preparation', desc: 'Preparation for a range of competitive examinations.', info: ['MPSC', 'UPSC', 'Police Bharti', 'Talathi', 'Banking examinations', 'Railway examinations', 'Other competitive examinations'] }
    ],
    contactTitle: 'Contact Us', contactIntro: 'WhatsApp is the quickest way to reach us.',
    phoneLabel: 'Telephone', batchLabel: 'Batch availability', batch: 'Morning and evening batches. Exact timings will be announced.', openLabel: 'Planned opening',
    mapTitle: 'Find us', mapNote: 'This map link shows the general Ranisawargaon area. The exact pin for Shinde Complex is yet to be confirmed.', directions: 'Get Directions',
    footerText: 'Coaching for Maharashtra State Board Classes 6–12 and competitive examinations in Ranisawargaon.', quick: 'Quick links', contactHead: 'Contact', rights: 'All rights reserved.',
    nfTitle: 'Page not found', nfText: 'The page you are looking for does not exist.', goHome: 'Go to Home'
  },
  mr: {
    nav: { home: 'मुख्यपृष्ठ', about: 'आमच्याबद्दल', courses: 'कोर्सेस', contact: 'संपर्क' },
    menu: 'मेनू', mainNav: 'मुख्य नेव्हिगेशन', langLabel: 'भाषा', wa: 'व्हॉट्सअ‍ॅप', waLong: 'व्हॉट्सअ‍ॅपवर संपर्क करा', waEnquire: 'व्हॉट्सअ‍ॅपवर चौकशी करा',
    open: 'लवकरच सुरू', opening: 'नियोजित प्रारंभ: १ नोव्हेंबर २०२६', openingDate: '१ नोव्हेंबर २०२६ (नियोजित)',
    heroTitle: 'ज्ञान वाढवा. भविष्य घडवा.',
    heroText: 'महाराष्ट्र राज्य मंडळाच्या विद्यार्थ्यांसाठी इयत्ता ६ ते १०, इयत्ता ११–१२ विज्ञान आणि स्पर्धा परीक्षांची तयारी यासाठी मार्गदर्शन.',
    heroArt: 'पुस्तके आणि पदवी टोपीचे चित्र. अकॅडमीचे प्रत्यक्ष छायाचित्र नाही.',
    explore: 'कोर्सेस पहा', aboutBtn: 'आमच्या अकॅडमीबद्दल', contactBtn: 'संपर्क करा', learnMore: 'अधिक जाणून घ्या',
    features: [
      ['इयत्ता ६–१२', 'महाराष्ट्र राज्य मंडळ', 'book'], ['स्पर्धा परीक्षा', 'MPSC, UPSC आणि इतर', 'target'],
      ['अनुभवी मार्गदर्शन', '५ वर्षांचा अध्यापन अनुभव', 'cap'], ['शिकवण्याचे प्रकार', 'ऑफलाइन आणि ऑनलाइन, उपलब्धतेनुसार', 'screen'],
      ['बॅच पर्याय', 'सकाळ आणि संध्याकाळ', 'clock']
    ],
    featuresLabel: 'अकॅडमीची वैशिष्ट्ये',
    previewAbout: 'अनुभवी शिक्षकांचे मार्गदर्शन', previewAboutText: 'दोईफोडे अकॅडमीचे संचालन ज्ञानेश्वर देविदास दोईफोडे (B.Sc., B.A.) करतात. त्यांना ५ वर्षांचा अध्यापन अनुभव आहे.',
    previewCourses: 'शालेय आणि पुढील शिक्षणासाठी कोर्सेस', previewCoursesText: 'इयत्ता ६–१० शालेय मार्गदर्शन, इयत्ता ११–१२ विज्ञान आणि स्पर्धा परीक्षांची तयारी.',
    previewContact: 'सुरू होण्यापूर्वी आमच्याशी बोला', previewContactText: 'कोर्सेस, बॅच, फी आणि प्रवेशाबद्दल विचारण्यासाठी व्हॉट्सअ‍ॅप करा किंवा फोन करा.',
    aboutTitle: 'आमच्याबद्दल', aboutHead: 'दोईफोडे अकॅडमी',
    aboutIntro: 'दोईफोडे अकॅडमी ही रानीसावरगाव येथील कोचिंग अकॅडमी आहे. महाराष्ट्र राज्य मंडळाचे विद्यार्थी आणि स्पर्धा परीक्षांची तयारी करणाऱ्यांसाठी ती आहे. वर्ग इंग्रजी व मराठीत, ऑफलाइन व ऑनलाइन (उपलब्धतेनुसार), सकाळ व संध्याकाळ बॅचमध्ये नियोजित आहेत.',
    teacherLabel: 'शिक्षक', qualLabel: 'पात्रता', qual: 'B.Sc. आणि B.A.', expLabel: 'अध्यापन अनुभव', exp: '५ वर्षांचा अध्यापन अनुभव',
    addressLabel: 'पत्ता', address: 'शिंदे कॉम्प्लेक्स, गुंजेगाव रोड, रानीसावरगाव, महाराष्ट्र, भारत',
    boardLabel: 'मंडळ', board: 'महाराष्ट्र राज्य मंडळ', langsLabel: 'शिकवण्याच्या भाषा', langs: 'इंग्रजी आणि मराठी',
    aboutArt: 'पुस्तके आणि पदवी टोपीचे चित्र. शिक्षकांचे किंवा अकॅडमीचे प्रत्यक्ष छायाचित्र नाही.',
    coursesTitle: 'आमचे कोर्सेस', coursesIntro: 'कोर्स निवडा आणि व्हॉट्सअ‍ॅपवर चौकशी करा. फी, वेळा आणि कालावधी चौकशीवेळी कळवले जातील.',
    courses: [
      { id: 'school', icon: 'book', name: 'शालेय मार्गदर्शन: इयत्ता ६–१०', desc: 'महाराष्ट्र राज्य मंडळाच्या विद्यार्थ्यांसाठी संकल्पनांवर भर देणारे मार्गदर्शन.', info: ['गणित', 'विज्ञान', 'इंग्रजी', 'महाराष्ट्र राज्य मंडळ'] },
      { id: 'hs', icon: 'cap', name: 'उच्च माध्यमिक: इयत्ता ११–१२', desc: 'इयत्ता ११–१२ विज्ञान शाखेसाठी मार्गदर्शन.', info: ['विज्ञान शाखा', 'महाराष्ट्र राज्य मंडळ'] },
      { id: 'comp', icon: 'target', name: 'स्पर्धा परीक्षांची तयारी', desc: 'विविध स्पर्धा परीक्षांची तयारी.', info: ['MPSC', 'UPSC', 'पोलीस भरती', 'तलाठी', 'बँकिंग परीक्षा', 'रेल्वे परीक्षा', 'इतर स्पर्धा परीक्षा'] }
    ],
    contactTitle: 'संपर्क', contactIntro: 'व्हॉट्सअ‍ॅप हा आमच्याशी संपर्क करण्याचा सर्वात जलद मार्ग आहे.',
    phoneLabel: 'दूरध्वनी', batchLabel: 'बॅच उपलब्धता', batch: 'सकाळ आणि संध्याकाळ बॅच. नेमक्या वेळा लवकरच जाहीर केल्या जातील.', openLabel: 'नियोजित प्रारंभ',
    mapTitle: 'आम्हाला शोधा', mapNote: 'ही नकाशा लिंक रानीसावरगावचा सर्वसाधारण परिसर दाखवते. शिंदे कॉम्प्लेक्सचे अचूक ठिकाण अजून निश्चित व्हायचे आहे.', directions: 'दिशा मिळवा',
    footerText: 'रानीसावरगाव येथे महाराष्ट्र राज्य मंडळ इयत्ता ६–१२ आणि स्पर्धा परीक्षांसाठी मार्गदर्शन.', quick: 'जलद दुवे', contactHead: 'संपर्क', rights: 'सर्व हक्क राखीव.',
    nfTitle: 'पृष्ठ सापडले नाही', nfText: 'तुम्ही शोधत असलेले पृष्ठ अस्तित्वात नाही.', goHome: 'मुख्यपृष्ठावर जा'
  }
}
export const t = computed(() => translations[lang.value])
