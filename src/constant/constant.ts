import fs from 'fs';

export const SUBJECT = {
  minSubjects: 5,
  minCredits: 20,
};
export const SEAT_NUMBER = {
  courseCode: 2,
  examCode: 2,
  numberOfRandomDigits: 4,
  genertAfterlastDateWithLateFee: 20,
};

export const PDF = {
  universityName: 'HSNC University, Mumbai',
  universityAddress: 'HSNC University, Mumbai D.M. Harish Building, 47, Dr. R. G. Thadani Marg, Worli, Mumbai – 400 018.',
  DBOEESign: fs.existsSync(`${process.cwd()}/public/collegeLogo/Sol_DBOEE_ANDHARE_SIR.jpeg`) ? `${process.cwd()}/public/collegeLogo/Sol_DBOEE_ANDHARE_SIR.jpeg` : `${process.cwd()}/public/collegeLogo/defaultLogo.png`,
  defaultPhoto: `${process.cwd()}/public/collegeLogo/defaultLogo.png`,
  universityUrl: 'https://example.com/university',
  universityLogo: fs.existsSync(`${process.cwd()}/public/collegeLogo/HSNCULogo.png`) ? `${process.cwd()}/public/collegeLogo/HSNCULogo.png` : `${process.cwd()}/public/collegeLogo/defaultLogo.png`,
};

export const SolapurPdf = {
  universityName: 'Punyashlok Ahilyadevi Holkar Solapur University, Solapur',
  universityAddress: 'Kegaon, Solapur-Pune National Highway, Solapur-413255',
  DBOEESign: fs.existsSync(`${process.cwd()}/public/collegeLogo/Sol_DBOEE_ANDHARE_SIR.jpeg`) ? `${process.cwd()}/public/collegeLogo/Sol_DBOEE_ANDHARE_SIR.jpeg` : `${process.cwd()}/public/collegeLogo/defaultLogo.png`,
  defaultPhoto: `${process.cwd()}/public/collegeLogo/defaultLogo.png`,
  universityUrl: 'https://example.com/university',
  universityLogo: fs.existsSync(`${process.cwd()}/public/collegeLogo/solapurUniversityLogo.jpg`) ? `${process.cwd()}/public/collegeLogo/solapurUniversityLogo.jpg` : `${process.cwd()}/public/collegeLogo/defaultLogo.png`,
}

export const REPEATER = {
  amoutPerSubject: 1,
};

export const CHALLAN = {
  examFeeLabel: 'Exam fees',
  examFee: 500,

  lateExamFeeLabel: 'Late Exam fees',
  lateExamFee: 750,

  practicalFeeLabel: 'Practical Exam fee',
  practicalFee: 0,

  repeterPerSubjectExamFee: 750,
  repeterPerSubjectExamLateFee: 1000,
};

export const TIME_TABLE = {
  generateTimeTableAfterNoOfDays: 20,
};

export const TRANSACTION = {
  finalAmount: 1,
};

// atkkt allowed number for college
export const ATKT = {
  allowedAtkt: 3,
  allowedSubjectFailed: 6,
};

export const MIN_SUBJECT_MARKS = {
  minInternalMarks: 5,
  minExternalMarks: 5,
};

export const REASSESSMENT = {
  reassessmentPerSubject: 1,
  photoCopyPerSubject: 1,
  photoCopyAfterNoOfDay: 10,
  reassessmentAfterNoOfDay: 20,
  generateReassessResult: true,
};

export const MARKSHEET = {
  atkt_for_grace: 1,
  rule_138_max_grace: 3,
  rule_138_max_subject: 1,
  max_grace_marks_percentage: 10,
  minimumPassingPercentage: 40,
  maximumGraceOrdinance20204e: 10,
  maxSubAllowOrdinance20204f: 2,
  cgpaToPercentage: 9.5,
};

export const PUPPETEER = {
  executablePath: process.env.NODE_ENV === 'development' ? '' : '/usr/bin/chromium-browser',
};
export const COLORCODE = {
  defaultColor: '#BD9C47',
};
export const RABBITMQ = {
  queue: {
    sendDocumentGenerate: 'sendDocumentForGeneration',
    receiveDocumentGenerate: 'receiveDocumentGenerate',
  },
  lmsQueue: {
    sendLMSDocumentGenerate: 'sendLMSDocumentGenerate',
    receiveLMSDocumentGenerate: 'receiveLMSDocumentGenerate',
  },
};

export const TIMETAKENFORSUB = {
  lecture_hour: 3.2,
  Lecture_per_Week: 4,
  months_taken: 6,
};

export const DBOEE_SIGN = `${process.cwd()}/public/collegeLogo/DBOEE_Blue_Sign.png`;
