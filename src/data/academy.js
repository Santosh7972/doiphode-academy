// Central place to update academy details.
export const academy = {
  name: 'Doiphode Academy',
  teacher: 'Dnyaneshwar Devidas Doiphode',
  phones: ['7620536090', '8485831470'],
  whatsapp: '917620536090',
  mapUrl: 'https://www.google.com/maps/place/Ranisawargaon,+Maharashtra+431536/data=!4m2!3m1!1s0x3bcfc25c4e1d2683:0x41973ac70f265367!18m1!1e1?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESBzI2LjQyLjEYACDXggEsOTQyNjc3MjcsOTQyOTIxOTUsOTQyOTk1MzIsMTAwNzk2NDk4LDEwMDc5Nzc2MSwxMDA3OTc3NjEsMTAwNzk2NTM1LDk0MjgwNTc2LDk0MjA3Mzk0LDk0MjA3NTA2LDk0MjA4NTA2LDk0MjE4NjUzLDk0MjI5ODM5LDk0Mjc1MTY4LDk0Mjc5NjE5LDEwMDgzNTcxMCwxMDA4MzUwMjUsMTAwODIwMjM3LDEwMDgyMjQ5NCwxMDA4Mjc5NzUsMTAwODM4MzU5LDEyMTgxNjQ2MUIJJU4%3D%3D&g_st=aw'
}
export function waLink(lang, course) {
  const msgs = {
    en: course
      ? `Hello Doiphode Academy, I would like to know more about the course: ${course}. Please share the batch timings, fees, and admission process.`
      : 'Hello Doiphode Academy, I would like to know more about your courses, batch timings, fees, and admission process. Please share the details.',
    mr: course
      ? `नमस्कार दोईफोडे अकॅडमी, मला या कोर्सबद्दल माहिती हवी आहे: ${course}. कृपया बॅचच्या वेळा, फी आणि प्रवेश प्रक्रिया सांगा.`
      : 'नमस्कार दोईफोडे अकॅडमी, मला तुमच्या कोर्सेस, बॅचच्या वेळा, फी आणि प्रवेश प्रक्रियेबद्दल माहिती हवी आहे. कृपया तपशील सांगा.'
  }
  return `https://wa.me/${academy.whatsapp}?text=${encodeURIComponent(msgs[lang])}`
}
