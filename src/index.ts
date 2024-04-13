import express, { Request, Response } from "express";
import pdfMake from "pdfmake";
import Certificate from "./certificate";
import Notice from "./noticePdf";
// import MarkSheet from './marksheet';
import StatementOfMark from "./StatementOfMark(KT)";
import MarkStatement from "./markStatement";
import examTimeTable from "./HSNC_timetable";
import photoNomial from "./hallTicket";
import challan from "./pdf";
import barCode from "./barCode";
import feeRes from "./feeRes";
import IdCard from "./idCard";
import markSheet from "./markStatement";
import puppeteer from 'puppeteer';
import ms from "./MOCK_DATA (5).json";
import ms1 from "./MOCK_DATA (1).json";
import marksheet from "./markStatement";
import hsncMarksheet from "./hsncMarksheet";
import result from "./result";
import admissionForm from "./admission";
import { IAddmission, IReassessmentFeeSlip, ISolMarksheet } from "./types";
import HallTicket from './HSNC_hallticket'
import mockDataResult from "./marksheetdata";
import reassessmentReceipt from "./reassessment-recipt";
import generatePDF from "./questionPaper";
import htmlContent from "./question-paper-using-puppeteer";
import solMarksheet from "./solMarksheet";
import { getBarcodeByPrnNo } from "./utiles";
import solLedger from "./solapur_ledger";
// const contentDefinition = require('./pdf');
// const Hallticket = require('./hallTicket');
// const Certificate = require('./certificate');
const app = express();

const fonts = {
  Roboto: {
    normal: "roboto/Roboto-Regular.ttf",
    bold: "roboto/Roboto-Bold.ttf",
    italics: "roboto/Roboto-Italic.ttf",
    bolditalics: "roboto/Roboto-MediumItalic.ttf",
  },
};

let pdfmake = new pdfMake(fonts);

const mockChallan = [
  {
    clientCode: "",
    collegeName: "ABC College",
    collegeCode: "CC001",
    year: "06/2023",
    courseName: "Computer Science",
    semName: "II",
    mode: "",
    modeOfPayment: "Cash",
    bankName: "XYZ Bank",
    bankBranch: "",
    no: "CH001",
    bankDate: "06/10/2023",
    mobileNo: "",
    feeDetails: [
      {
        examFeeLable: "Exam Fee",
        examFee: "1000",
        studentCount: 8,
        amount: 8000,
      },
      {
        examFeeLable: "Late Fee",
        examFee: "7",
        studentCount: 5,
        amount: 3500,
      },
    ],
  },
];

//* Define the endpoint that generates and returns the PDF document
app.get("/generate-pdf", (req: Request, res: Response) => {
  const pdfDocGenerator = pdfmake.createPdfKitDocument(challan(mockChallan));
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", 'attachment; filename="filename.pdf"');
  pdfDocGenerator.pipe(res);
  pdfDocGenerator.end();
});

const mockData = [
  {
    enRollmentNo: "14528",
    studentName: "John Doe",
    birthDate: "1995-08-15",
    gender: "Male",
    medium: "English",
    category: "General",
    studentPhoto: "",
    sign: "",
    course: "Bachelor of Science",
    year: "DEC-2023",
    semester: "2",
    appearingSubject: [
      {
        subjectCode: "ABC101",
        subjectType: "",
        subjectName: "Introduction to Programming",
      },
      {
        subjectCode: "DEF201",
        subjectType: "Practical",
        subjectName: "Database Management",
      },
      {
        subjectCode: "GHI301",
        subjectType: "TH",
        subjectName: "Data Structures and Algorithms",
      },
      {
        subjectCode: "ABC101",
        subjectType: "",
        subjectName: "Introduction to Programming",
      },
      {
        subjectCode: "DEF201",
        subjectType: "Practical",
        subjectName: "Database Management",
      },
      {
        subjectCode: "GHI301",
        subjectType: "Theory",
        subjectName: "Data Structures and Algorithms",
      },
      {
        subjectCode: "ABC101",
        subjectType: "",
        subjectName: "Introduction to Programming",
      },
      {
        subjectCode: "DEF201",
        subjectType: "Practical",
        subjectName: "Database Management",
      },
      {
        subjectCode: "GHI301",
        subjectType: "Theory",
        subjectName: "Data Structures and Algorithms",
      },
      {
        subjectCode: "JKL401",
        subjectType: "Practical",
        subjectName: "Web Development",
      },
      {
        subjectCode: "MNO501",
        subjectType: "Internal",
        subjectName: "Artificial Intelligence",
      },
    ],
  },
];

//* Define the endpoint that generates and returns the PDF document
app.get("/generate-hallticket-pdf", (req: Request, res: Response) => {
  const pdfDocGenerator = pdfmake.createPdfKitDocument(photoNomial(mockData));
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "inline");
  pdfDocGenerator.pipe(res);
  pdfDocGenerator.end();
});

//* Define the endpoint that generates and returns the PDF document
app.get("/generate-certificate", (req: Request, res: Response) => {
  const pdfDocGenerator = pdfmake.createPdfKitDocument(Certificate);
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "inline");
  pdfDocGenerator.pipe(res);
  pdfDocGenerator.end();
});

//* Define the endpoint that generates and returns the PDF document
app.get("/generate-notice", (req: Request, res: Response) => {
  const pdfDocGenerator = pdfmake.createPdfKitDocument(Notice);
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "inline");
  pdfDocGenerator.pipe(res);
  pdfDocGenerator.end();
});

// //* Define the endpoint that generates and returns the PDF document
// app.get('/generate-marksheet', (req:Request, res:Response) => {
//   const pdfDocGenerator = pdfmake.createPdfKitDocument(MarkSheet);
//   res.setHeader('Content-Type', 'application/pdf');
//   res.setHeader('Content-Disposition', 'inline');
//   pdfDocGenerator.pipe(res);
//   pdfDocGenerator.end();
// });

//* Define the endpoint that generates and returns the PDF document
app.get("/generate-markstatement-kt", (req: Request, res: Response) => {
  const pdfDocGenerator = pdfmake.createPdfKitDocument(StatementOfMark);
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "inline");
  pdfDocGenerator.pipe(res);
  pdfDocGenerator.end();
});

//* Define the endpoint that generates and returns the PDF document
app.get("/generate-markstatement", (req: Request, res: Response) => {
  const pdfDocGenerator = pdfmake.createPdfKitDocument(marksheet(ms));
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "inline");
  pdfDocGenerator.pipe(res);
  pdfDocGenerator.end();
});

// //* Define the endpoint that generates and returns the PDF document
// app.get('/markstatement', (req:Request, res:Response) => {
//   const pdfDocGenerator = pdfmake.createPdfKitDocument(hsncMarksheet(ms));
//   res.setHeader('Content-Type', 'application/pdf');
//   res.setHeader('Content-Disposition', 'inline');
//   pdfDocGenerator.pipe(res);
//   pdfDocGenerator.end();
// });

// const mockResult = [{
//   collegeName: "H.R. COLLEGE OF COMMERCE AND ECONOMICS",
//   collegeLogo: "img/KCC_Mumbai_logo.svg.png",
//   studentPhoto: "img/cds.jpg",
//   universityLogo:'img/Hsnc-university-logo.png',
//   courseName: "Computer Science",
//   semester: "III",
//   AcadamicYear: "2022-2023",
//   prnNo: "1234567890",
//   seatNo: "A123",
//   studentName: "John Doe",
//   monthAndYear: "June 2023 BACKLOG",
//   sgpi: "8.25",
//   remarks: "Successful",
//   totalGrade: "A",
//   totalMarks: "421/700",
//   totalCredit: "20.00",
//   icg: "8.10",
//   semOneCredit: 4.00,
//   semTwoCredit: "4.00",
//   semThreeCredit: "4.00",
//   semFourCredit: "4.00",
//   semFiveCredit: "4.00",
//   semSixCredit: "4.00",
//   semOneSgpi: "8.25",
//   semTwoSgpi: "8.40",
//   semThreeSgpi: "8.50",
//   semFourSgpi: "8.60",
//   semFiveSgpi: "8.70",
//   semSixSgpi: "8.80",
//   cgpa:'',
//   finalGrade:'',
//   principalSign: "img/xyz.png",
//   directorSign: "img/xyz.png",
//   date: "July 15, 2023",
//   place: "City XYZ",
//   subjectDetails: [
//     {
//       subjectCode: "CS101",
//       subjectName: "Programming Fundamentals",
//       internalMax: "50",
//       internalMin: "20",
//       internalObt: "45",
//       externalMax: "100",
//       externalMin: "40",
//       externalObt: "85",
//       totalMax: "150",
//       totalMin: "60",
//       totalObt: "130",
//       grade: "A+",
//       gradePoint: "4.00",
//       creditPoint: "4.00",
//       cg: "8.25",
//     },
//     {
//       subjectCode: "CS101",
//       subjectName: "Programming Fundamentals",
//       internalMax: "50",
//       internalMin: "20",
//       internalObt: "45",
//       externalMax: "100",
//       externalMin: "40",
//       externalObt: "85",
//       totalMax: "150",
//       totalMin: "60",
//       totalObt: "130",
//       grade: "A+",
//       gradePoint: "4.00",
//       creditPoint: "4.00",
//       cg: "8.25",
//     },
//     {
//       subjectCode: "CS102",
//       subjectName: "Database Management Systems",
//       internalMax: "50",
//       internalMin: "20",
//       internalObt: "42",
//       externalMax: "100",
//       externalMin: "40",
//       externalObt: "78",
//       totalMax: "150",
//       totalMin: "60",
//       totalObt: "120",
//       grade: "A",
//       gradePoint: "3.75",
//       creditPoint: "4.00",
//       cg: "8.25",
//     },
//     {
//       subjectCode: "CS101",
//       subjectName: "Programming Fundamentals",
//       internalMax: "50",
//       internalMin: "20",
//       internalObt: "45",
//       externalMax: "100",
//       externalMin: "40",
//       externalObt: "85",
//       totalMax: "150",
//       totalMin: "60",
//       totalObt: "130",
//       grade: "A+",
//       gradePoint: "4.00",
//       creditPoint: "4.00",
//       cg: "8.25",
//     },
//     {
//       subjectCode: "CS101",
//       subjectName: "Programming Fundamentals",
//       internalMax: "50",
//       internalMin: "20",
//       internalObt: "45",
//       externalMax: "100",
//       externalMin: "40",
//       externalObt: "85",
//       totalMax: "150",
//       totalMin: "60",
//       totalObt: "130",
//       grade: "A+",
//       gradePoint: "4.00",
//       creditPoint: "4.00",
//       cg: "8.25",
//     },
//     {
//       subjectCode: "CS101",
//       subjectName: "Programming Fundamentals",
//       internalMax: "50",
//       internalMin: "20",
//       internalObt: "45",
//       externalMax: "100",
//       externalMin: "40",
//       externalObt: "85",
//       totalMax: "150",
//       totalMin: "60",
//       totalObt: "130",
//       grade: "A+",
//       gradePoint: "4.00",
//       creditPoint: "4.00",
//       cg: "8.25",
//     },
//   ]
// }];

const mockResult = [
  {
    collegeName: "H.R. COLLEGE OF COMMERCE AND ECONOMICS",
    collegeLogo: "img/KCC_Mumbai_logo.svg.png",
    studentPhoto: "img/cds.jpg",
    courseName: "Computer Science Engineering",
    semName: "V",
    acadamicYear: "2022-2023",
    prnNo: "1234567890",
    seatNumber: 1234,
    studentName: "John Doe",
    monthAndYear: "June 2023 BACKLOG",
    sgpi: "8.75",
    result: "successful",
    totalGrade: "A",
    totalOfTotal: 700,
    outOfTotal: 324,
    totalCredit: 20.0,
    numberOfSem: 12,
    cg: "8.50",
    credits: [
      {
        creditEarned: 4,
        semName: "Sem I",
        sgpi: 9.0,
      },
      {
        creditEarned: 4,
        semName: "Sem II",
        sgpi: 9.0,
      },
      {
        creditEarned: 4,
        semName: "Sem III",
        sgpi: 9.0,
      },
      {
        creditEarned: 4,
        semName: "Sem IV",
        sgpi: 9.0,
      },
      
    ],
    cgpa: 8.7,
    finalGrade: "A+",
    principalSign: "img/xyz.png",
    directorSign: "img/xyz.png",
    date: "27th July 2023",
    place: "City, Country",
    universityLogo: "img/Hsnc-university-logo.png",
    subjects: [
      {
        subjectCode: "UH-FMM-103",
        subjectName: "Introduction to Programming of computer programming",
        internalMax: 30,
        internalMin: 10,
        internalObt: 25,
        externalMax: 70,
        externalMin: 30,
        externalObt: 65,
        totalMax: 100,
        totalMin: 40,
        totalObt: 90,
        grade: "A+",
        gradePoint: 4.0,
        creditPoint: 16.0,
        cg: 6.4,
      },
      {
        subjectCode: "UH-FMM-103",
        subjectName: "Data Structures",
        internalMax: 30,
        internalMin: 10,
        internalObt: 28,
        externalMax: 70,
        externalMin: 30,
        externalObt: 60,
        totalMax: 100,
        totalMin: 40,
        totalObt: 88,
        grade: "A",
        gradePoint: 3.67,
        creditPoint: 12.0,
        cg: 4.8,
      },
      {
        subjectCode: "UH-FMM-103",
        subjectName: "Introduction to Programming",
        internalMax: 30,
        internalMin: 10,
        internalObt: 25,
        externalMax: 70,
        externalMin: 30,
        externalObt: 65,
        totalMax: 100,
        totalMin: 40,
        totalObt: 90,
        grade: "A+",
        gradePoint: 4.0,
        creditPoint: 16.0,
        cg: 6.4,
      },
      {
        subjectCode: "UH-FMM-103",
        subjectName: "Data Structures",
        internalMax: 30,
        internalMin: 10,
        internalObt: 28,
        externalMax: 70,
        externalMin: 30,
        externalObt: 60,
        totalMax: 100,
        totalMin: 40,
        totalObt: 88,
        grade: "A",
        gradePoint: 3.67,
        creditPoint: 12.0,
        cg: 4.8,
      },
      {
        subjectCode: "UH-FMM-103",
        subjectName: "Introduction to Programming",
        internalMax: 30,
        internalMin: 10,
        internalObt: 25,
        externalMax: 70,
        externalMin: 30,
        externalObt: 65,
        totalMax: 100,
        totalMin: 40,
        totalObt: 90,
        grade: "A+",
        gradePoint: 4.0,
        creditPoint: 16.0,
        cg: 6.4,
      },
      {
        subjectCode: "UH-FMM-103",
        subjectName: "Data Structures",
        internalMax: 30,
        internalMin: 10,
        internalObt: 28,
        externalMax: 70,
        externalMin: 30,
        externalObt: 60,
        totalMax: 100,
        totalMin: 40,
        totalObt: 88,
        grade: "A",
        gradePoint: 3.67,
        creditPoint: 12.0,
        cg: 4.8,
      },
      {
        subjectCode: "UH-FMM-103",
        subjectName: "Introduction to Programming",
        internalMax: 30,
        internalMin: 10,
        internalObt: 25,
        externalMax: 70,
        externalMin: 30,
        externalObt: 65,
        totalMax: 100,
        totalMin: 40,
        totalObt: 90,
        grade: "A+",
        gradePoint: 4.0,
        creditPoint: 16.0,
        cg: 6.4,
      },
      // Add more subjects here if needed...
    ],
  },
];

//* Define the endpoint that generates and returns the PDF document
app.get("/result", (req: Request, res: Response) => {
  const pdfDocGenerator = pdfmake.createPdfKitDocument(result([mockDataResult]));
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "inline");
  pdfDocGenerator.pipe(res);
  pdfDocGenerator.end();
});

const data3 = [
  {
    fullName: "manish vishwakarma",
    enrollmentNo: "12334678765",
    seatNumber: 23456765432,
    courseName: "bsc it computerscience",
    semName: "sem 1",
    collegeId: 2343554,
    year: "2023-24",
    examType: "EXTERNAL",
    registrationNo: "4953459002",
    collegeLogo: `${process.cwd()}/img/KCC_Mumbai_logo.svg.png`,
    collegeName: "Kishinchand Chellaram College",
    timeTable: [
      {
        srno: 1,
        examDate: "2023-05-15",
        examTime: "08:30 AM TO 10:30 AM",
        semester: "VI",
        subjectName: "Introduction to Computer Science",
      },
      {
        srno: 2,
        examDate: "2023-05-17",
        examTime: "08:30 AM TO 10:30 AM",
        semester: "VI",
        subjectName: "Data Structures and Algorithms",
      },
      {
        srno: 3,
        examDate: "2023-05-20",
        examTime: "08:30 AM TO 10:30 AM",
        semester: "VI",
        subjectName: "Database Management Systems",
      },
      {
        srno: 4,
        examDate: "2023-05-22",
        examTime: "08:30 AM TO 10:30 AM",
        semester: "VI",
        subjectName: "Operating Systems",
      },
      {
        srno: 5,
        examDate: "2023-05-25",
        examTime: "08:30 AM TO 10:30 AM",
        semester: "VI",
        subjectName: "Computer Networks",
      },
      {
        srno: 6,
        examDate: "2023-05-28",
        examTime: "08:30 AM TO 10:30 AM",
        semester: "VI",
        subjectName: "Software Engineering",
      },
    ],
  },
  {
    fullName: "manish vishwakarma",
    enrollmentNo: "12334678765",
    seatNumber: 23456765432,
    courseName: "bsc it ",
    semName: "sem 1",
    collegeId: 2343554,
    year: "2023-24",
    registrationNo: "463747378379",
    collegeLogo: `${process.cwd()}/img/KCC_Mumbai_logo.svg.png`,
    collegeName: "Kishinchand Chellaram College",
    timeTable: [
      {
        srno: 1,
        examDate: "2023-05-15",
        examTime: "08:30 AM TO 10:30 AM",
        semester: "VI",
        subjectName: "Introduction to Computer Science cd",
      },
      {
        srno: 2,
        examDate: "2023-05-17",
        examTime: "08:30 AM TO 10:30 AM",
        semester: "VI",
        subjectName: "Data Structures and Algorithms",
      },
      {
        srno: 3,
        examDate: "2023-05-20",
        examTime: "08:30 AM TO 10:30 AM",
        semester: "VI",
        subjectName: "Database Management Systems",
      },
      {
        srno: 4,
        examDate: "2023-05-22",
        examTime: "08:30 AM TO 10:30 AM",
        semester: "VI",
        subjectName: "Operating Systems",
      },
      {
        srno: 5,
        examDate: "2023-05-25",
        examTime: "08:30 AM TO 10:30 AM",
        semester: "VI",
        subjectName: "Computer Networks",
      },
      {
        srno: 6,
        examDate: "2023-05-28",
        examTime: "08:30 AM TO 10:30 AM",
        semester: "VI",
        subjectName: "Software Engineering",
      },
    ],
  },
];

//* Define the endpoint that generates and returns the PDF document
// const data3= [
//   {
//       "fullName": "dsfds dsfdsf",
//       "enrollmentNo": "9685758998",
//       "seatNumber": 1000001,
//       "courseName": "BAMMC(bachelor of arts multimedia and mass communication)",
//       "semName": "I",
//       "collegeId": 2,
//       "collegeName": "Patakr Varde College",
//       "collegeLogo": "D:\\guExam\\guExamServer\\uploads\\collegeLogo\\1686294294177-57379385.jpg",
//       "timeTable": [
//           {
//               "examDate": null,
//               "subjectName": "Computers Multimedia -I",
//               "examTime": "11:00 AM TO 02:00 PM"
//           },
//           {
//               "examDate": null,
//               "subjectName": "Introduction to Economics for Media ",
//               "examTime": "11:00 AM TO 01:00 PM"
//           }
//       ]
//   },
//   {
//       "fullName": "dsfds dsfdsf",
//       "enrollmentNo": "9685758992",
//       "seatNumber": 1000002,
//       "courseName": "BAMMC(bachelor of arts multimedia and mass communication)",
//       "semName": "I",
//       "collegeId": 2,
//       "collegeName": "Patakr Varde College",
//       "collegeLogo": "D:\\guExam\\guExamServer\\uploads\\collegeLogo\\1686294294177-57379385.jpg",
//       "timeTable": [
//           {
//               "examDate": null,
//               "subjectName": "Computers Multimedia -I",
//               "examTime": "11:00 AM TO 02:00 PM"
//           },
//           {
//               "examDate": null,
//               "subjectName": "Introduction to Economics for Media ",
//               "examTime": "11:00 AM TO 01:00 PM"
//           }
//       ]
//   },
//   {
//       "fullName": "dsfds dsfdsf",
//       "enrollmentNo": "9685758995",
//       "seatNumber": 1000003,
//       "courseName": "BAMMC(bachelor of arts multimedia and mass communication)",
//       "semName": "I",
//       "collegeId": 2,
//       "collegeName": "Patakr Varde College",
//       "collegeLogo": "D:\\guExam\\guExamServer\\uploads\\collegeLogo\\1686294294177-57379385.jpg",
//       "timeTable": [
//           {
//               "examDate": null,
//               "subjectName": "Computers Multimedia -I",
//               "examTime": "11:00 AM TO 02:00 PM"
//           },
//           {
//               "examDate": null,
//               "subjectName": "Introduction to Economics for Media ",
//               "examTime": "11:00 AM TO 01:00 PM"
//           }
//       ]
//   },
//   {
//       "fullName": "dsfds dsfdsf",
//       "enrollmentNo": "9685758994",
//       "seatNumber": 1000004,
//       "courseName": "BAMMC(bachelor of arts multimedia and mass communication)",
//       "semName": "I",
//       "collegeId": 2,
//       "collegeName": "Patakr Varde College",
//       "collegeLogo": "D:\\guExam\\guExamServer\\uploads\\collegeLogo\\1686294294177-57379385.jpg",
//       "timeTable": [
//           {
//               "examDate": null,
//               "subjectName": "Computers Multimedia -I",
//               "examTime": "11:00 AM TO 02:00 PM"
//           },
//           {
//               "examDate": null,
//               "subjectName": "Introduction to Economics for Media ",
//               "examTime": "11:00 AM TO 01:00 PM"
//           }
//       ]
//   }
// ]
// console.log("first",data)
app.get('/hsnc', (req:Request, res:Response) => {
  const pdfDocGenerator = pdfmake.createPdfKitDocument(HallTicket(data3));
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'inline');
  pdfDocGenerator.pipe(res);
  pdfDocGenerator.end();
});

const data2: any = [
  {
    course: "sdnsjcejo",
    semesterName: "Sem-1",
    collegeName: "Kishinchand Chellaram College",
    examId: 1,
    year: "2023-24",
    subjectData: [
      {
        srno: 1,
        date: "2023-05-15",
        Day: "Saturday",
        time: "08:30 AM TO 10:30 AM",
        subjectCode: "US-PCS-201",
        subjectName: "Introduction to Computer Science",
      },
      {
        srno: 2,
        date: "2023-05-17",
        Day: "Monday",
        time: "08:30 AM TO 10:30 AM",
        subjectCode: "US-PCS-202",
        subjectName: "Data Structures and Algorithms",
      },
      {
        srno: 3,
        date: "2023-05-20",
        Day: "Tuesday",
        time: "08:30 AM TO 10:30 AM",
        subjectCode: "US-PCS-203",
        subjectName: "Database Management Systems",
      },
      {
        srno: 4,
        date: "2023-05-22",
        Day: "Wendnesday",
        time: "08:30 AM TO 10:30 AM",
        subjectCode: "US-PCS-204",
        subjectName: "Operating Systems",
      },
      {
        srno: 5,
        date: "2023-05-25",
        Day: "Thursday",
        time: "08:30 AM TO 10:30 AM",
        subjectCode: "US-PCS-205",
        subjectName: "Computer Networks",
      },
      {
        srno: 6,
        date: "2023-05-28",
        Day: "Friday",
        time: "08:30 AM TO 10:30 AM",
        subjectCode: "US-PCS-206",
        subjectName: "Software Engineering",
      },
      {
        srno: 7,
        date: "2023-05-30",
        Day: "Monday",
        time: "08:30 AM TO 10:30 AM",
        subjectCode: "US-PCS-207",
        subjectName: "Software Engineering",
      },
    ],
  },
  {
    course: "asbc",
    semesterName: "Sem-1",
    collegeName: "Kishinchand Chellaram College",
    examId: 1,
    year: "2023-24",
    subjectData: [
      {
        srno: 1,
        date: "2023-05-15",
        Day: "Sunday",
        time: "08:30 AM TO 10:30 AM",
        subjectCode: "US-PCS-201",
        subjectName: "Introduction to Computer Science",
      },
      {
        srno: 2,
        date: "2023-05-17",
        Day: "Monday",
        time: "08:30 AM TO 10:30 AM",
        subjectCode: "US-PCS-202",
        subjectName: "Data Structures and Algorithms",
      },
      {
        srno: 3,
        date: "2023-05-20",
        Day: "Tuesday",
        time: "08:30 AM TO 10:30 AM",
        subjectCode: "US-PCS-203",
        subjectName: "Database Management Systems",
      },
      {
        srno: 4,
        date: "2023-05-22",
        Day: "Wendnesday",
        time: "08:30 AM TO 10:30 AM",
        subjectCode: "US-PCS-204",
        subjectName: "Operating Systems",
      },
      {
        srno: 5,
        date: "2023-05-25",
        Day: "Thursday",
        time: "08:30 AM TO 10:30 AM",
        subjectCode: "US-PCS-205",
        subjectName: "Computer Networks",
      },
      {
        srno: 6,
        date: "2023-05-28",
        Day: "Friday",
        time: "08:30 AM TO 10:30 AM",
        subjectCode: "US-PCS-206",
        subjectName: "Software Engineering",
      },
      {
        srno: 7,
        date: "2023-05-30",
        Day: "Monday",
        time: "08:30 AM TO 10:30 AM",
        subjectCode: "US-PCS-207",
        subjectName: "Software Engineering",
      },
    ],
  },
];

//* Define the endpoint that generates and returns the PDF document
app.get("/hsnc-time", (req: Request, res: Response) => {
  const pdfDocGenerator = pdfmake.createPdfKitDocument(examTimeTable(data2));
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "inline");
  pdfDocGenerator.pipe(res);
  pdfDocGenerator.end();
});

const reassessmentFeeSlip: IReassessmentFeeSlip = {
  receiptNo: 123456,
  courseName: 'Computer Science',
  studentName: 'John Doe',
  semester: 'Sem-1',
  feeDetails: [
    {
      subjectName: 'Programming Fundamentals',
      amount: 50,
    },
    {
      subjectName: 'Database Management',
      amount: 75,
    },
    {
      subjectName: 'Web Development',
      amount: 60,
    },
  ],
};

//* Define the endpoint that generates and returns the PDF document
app.get("/reassessment", (req: Request, res: Response) => {
  const pdfDocGenerator = pdfmake.createPdfKitDocument(reassessmentReceipt([reassessmentFeeSlip]));
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "inline");
  pdfDocGenerator.pipe(res);
  pdfDocGenerator.end();
});


const mockBarCodeData = [
  {
    enrollmentNo: 1234567891012,
    block: 1,
    seatNo: 10,
    ansNo: 1,
    subjectType: "Theory",
    courseName: "Computer Science",
    examDate: "2023-06-15",
    subjectName: "Data Structures",
    courseCode: 101,
    subjectCode: 201,
  },
];
//* Define the endpoint that generates and returns the PDF document
app.get("/bar-code", (req: Request, res: Response) => {
  const pdfDocGenerator = pdfmake.createPdfKitDocument(
    barCode(mockBarCodeData)
  );
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "inline");
  pdfDocGenerator.pipe(res);
  pdfDocGenerator.end();
});

const mockData5 = [
  {
    receiptNo: 12345,
    courseName: "Computer Science",
    studentName: "John Doe",
    // Quota: "General",
    feeDetails: [
      {
        subjectName: "Mathematics",
        semester: "First",
        amount: 1000,
      },
      {
        subjectName: "Physics",
        semester: "First",
        amount: 800,
      },
      {
        subjectName: "Chemistry",
        semester: "Second",
        amount: 900,
      },
      {
        subjectName: "Computer Programming",
        semester: "Second",
        amount: 1200,
      },
      {
        subjectName: "Data Structures",
        semester: "Third",
        amount: 1500,
      },
    ],
  },
];

//* Define the endpoint that generates and returns the PDF document
app.get("/generate", (req: Request, res: Response) => {
  const pdfDocGenerator = pdfmake.createPdfKitDocument(feeRes(mockData5));
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "inline");
  pdfDocGenerator.pipe(res);
  pdfDocGenerator.end();
});

const IdmockData=[
  {
    studentId: 17059,
    abcNo: '',
    prnNo: '23032031073',
    courseId: 5,
    collegeCode: 11,
    registrationNo: 801279,
    gender: 'Female',
    courseName: 'M. A. Entertainment, Media and Advertising',
    collegeName: 'School of Interdisciplinary Studies',
    collegeLogo: '',
    studentName: 'Mohammed Osaid Mohammed Salim Sopariwala',
    fullName: 'DESAI KHUSHI JITESH SONALI',
    bloodGroup: '',
    address: '8/F/76, 4TH FLOOR, SONAWALA BUILDING, SLEATER ROAD, TARDEO, , MUMBAI, 400007',
    parentPhone: '9821023263',
    dob: 'Invalid date',
    studentEmail: 'desaikhushi135@gmail.com',
    studentPhoto: 'D:\\guExam\\guExamServer1\\guExamServer\\uploads\\compressed_studentPhotoAndSignature\\801279_p.jpeg',
    studentSign: null,
    collegeId: 11,
    currentSem: 'Sem-1',
    principalSignature: 'D:\\guExam\\guExamServer1\\guExamServer\\uploads\\PrincipalSignature\\1697609420913-173439590.png',
    primaryColor: '#292C57',
    filename: '',
    abbrevation: 'M.A.E.M.A\r\n',
    issuingAuthority: 'D:\\guExam\\guExamServer1\\guExamServer\\uploads\\PrincipalSignature\\1697609420913-173439590.png',
    Program: 'M.A.E.M.A\r\n',
    yearPrefix: 'FY',
    contactNo: '9821023263',
    email: 'desaikhushi135@gmail.com',
    barcode: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAAAYCAYAAAAiR3l8AAAAHnRFWHRTb2Z0d2FyZQBid2lwLWpzLm1ldGFmbG9vci5jb21Tnbi0AAAA4ElEQVR4nO2RQYpCUQwEc/9L60bENF1xZinUQmxCp14+NTPzeP3m438+5tesZWIlY47Zf98k1l/ezfwYfpPepR7N2s6378lves8UuLMCgZWMduTVVyDsKXBnBQIrGe3Iq69A2FPgzgoEVjLakVdfgbCnwJ0VCKxktCOvvgJhT4E7KxBYyWhHXn0Fwp4Cd1YgsJLRjrz6CoQ9Be6sQGAlox159RUIewrcWYHASkY78uorEPYUuLMCgZWMduTVVyDsKXBnBQIrGe3Iq69A2FPgzgoEVjLakVdfgbCnwJ1/SuATzbzKfN7vJjIAAAAASUVORK5CYII='
  }
]

//* Define the endpoint that generates and returns the PDF document
app.get("/idcard", (req: Request, res: Response) => {
  const pdfDocGenerator = pdfmake.createPdfKitDocument(IdCard(IdmockData));
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "inline");
  pdfDocGenerator.pipe(res);
  pdfDocGenerator.end();
});

const mockAddmission: IAddmission[] = [{
  collegeName: "ABC College",
  universityLogo:"img/Hsnc-university-logo.png",
  studentName: "John Doe",
  studentPhoto: "img/cds.jpg",
  courseName: "Computer Science",
  semName: "Fall 2023",
  prnNo: 1234567890,
  rollNumber: 101,
  gender: "Male",
  dob: "1998-05-15",
  contactNo: "123-456-7890",
  address: "123 Main St, Cityville",
  email: "john.doe@example.com",
  aadharNumber: 987654321012,
  firstName: "John",
  middleName: "Jacob",
  lastName: "Doe",
  motherName: "Jane Doe",
  bloodGroup: "A+",
  city: "Cityville",
  state: "Stateville",
  pincode: "12345",
  studentSignature: "img/xyz.png",
  subjects: [
    {
      subjectCode: "CS101",
      subjectName: "Introduction to Computer Science",
    },
    {
      subjectCode: "MAT101",
      subjectName: "Mathematics for Computer Science",
    },
    {
      subjectCode: "PHY101",
      subjectName: "Physics Fundamentals",
    },
  ],
}];


//* Define the endpoint that generates and returns the PDF document
app.get("/admission", (req: Request, res: Response) => {
  const pdfDocGenerator = pdfmake.createPdfKitDocument(admissionForm(mockAddmission));
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "inline");
  pdfDocGenerator.pipe(res);
  pdfDocGenerator.end();
});

const questions = [
  {
      "id": 57,
      "setName": "D",
      "assessmentId": 175,
      "quePaperUploadId": null,
      "ansPaperUploadId": null,
      "createdAt": "2024-03-13T01:55:54.105Z",
      "updatedAt": "2024-03-30T07:16:28.000Z",
      "assessmentCode": "1000R",
      "questions": [
          {
              "marks": 10,
              "questions": [
                  {
                      "marks": 5,
                      "questions": [
                          {
                              "marks": 1,
                              "questions": [],
                              "questionId": "01d372b4-8310-4bad-bc6e-19d24bc81613",
                              "questionText": "<h3>What are the various data types that exist in JavaScript?</h3>",
                              "questionIndex": "1.A.i",
                              "subQuestionsAllowed": false,
                              "maxSubQuestionsAttempt": 0
                          }
                      ],
                      "questionId": "db428ae2-ee16-4835-a888-acf0f973360b",
                      "questionText": "<h3>What's the difference between JavaScript and Java?</h3>",
                      "questionIndex": "1.A",
                      "subQuestionsAllowed": true,
                      "maxSubQuestionsAttempt": "5"
                  }
              ],
              "questionId": "ce22b09d-299b-44ec-9d3f-9dccf6cc1c0a",
              "questionText": "<h3>What do you understand about JavaScript?</h3>",
              "questionIndex": "1",
              "subQuestionsAllowed": true,
              "maxSubQuestionsAttempt": 2
          },
          {
              "marks": 4,
              "questions": [
                  {
                      "marks": 2,
                      "questions": [
                          {
                              "marks": 2,
                              "questions": [],
                              "questionId": "019d7df5-a9d1-4722-b689-edb6d2c64c2d",
                              "questionText": "<h3>What are the various data types that exist in JavaScript?</h3><p><br></p>",
                              "questionIndex": "2.A.i",
                              "subQuestionsAllowed": false,
                              "maxSubQuestionsAttempt": 0
                          }
                      ],
                      "questionId": "de3e1819-792b-4eb9-abbc-084bd75da1cf",
                      "questionText": "<h3>What are the various data types that exist in JavaScript?</h3>",
                      "questionIndex": "2.A",
                      "subQuestionsAllowed": true,
                      "maxSubQuestionsAttempt": 1
                  },
                  {
                      "marks": 2,
                      "questions": [
                          {
                              "marks": 2,
                              "questions": [],
                              "questionId": "0be2dd56-638b-468b-85be-ad1555c00394",
                              "questionText": "<h3>What's the difference between JavaScript and Java?</h3>",
                              "questionIndex": "2.B.i",
                              "subQuestionsAllowed": false,
                              "maxSubQuestionsAttempt": 0
                          }
                      ],
                      "questionId": "3fe73336-ff57-4e52-8038-c6e8cbe4b457",
                      "questionText": "<h3>What do you understand about JavaScript?</h3>",
                      "questionIndex": "2.B",
                      "subQuestionsAllowed": true,
                      "maxSubQuestionsAttempt": 1
                  }
              ],
              "questionId": "fa972711-747c-4989-abde-c45729d07beb",
              "questionText": "<h3>What's the difference between JavaScript and Java?</h3><p><br></p>",
              "questionIndex": "2",
              "subQuestionsAllowed": true,
              "maxSubQuestionsAttempt": 2
          }
      ],
      "subjectName": "Writing for Visual Media – I",
      "courseName": "B.A (FILMS TELEVISION AND NEW MEDIA PRODUCTION)",
      "year": 2023,
      "semName": "Sem-1",
      "totalMark": 40
  }
]
//* Define the endpoint that generates and returns the PDF document
app.get("/questions-1", (req: Request, res: Response) => {
  const pdfDocGenerator = pdfmake.createPdfKitDocument(generatePDF(questions));
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "inline");
  pdfDocGenerator.pipe(res);
  pdfDocGenerator.end();
});

app.get('/questions', async (req, res) => {
  
  const browser = await puppeteer.launch({
    headless: true, // Set to true to run in headless mode
  });

  const page = await browser.newPage();

  await page.setContent(htmlContent);

  // Generate PDF
  const pdfBuffer = await page.pdf({
    format: 'A4', // Paper format
    printBackground: true // Include background graphics
  });

  await browser.close();

  // Send PDF as response
  res.set({
    'Content-Type': 'application/pdf',
    'Content-Disposition': 'attachment; filename="output.pdf"' // Force download
  });
  res.send(pdfBuffer);
});

const mockDataSolMarksheet = [{
  barcode: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJEAAAAYCAYAAAD6Zx8zAAAAHnRFWHRTb2Z0d2FyZQBid2lwLWpzLm1ldGFmbG9vci5jb21Tnbi0AAAA4klEQVR4nO3SQQ7CQBADwfn/p+GCUGTtZNv3PiCUxQQ71MzM5/eax/s8zk9nA/Lb9e2zLUs6bJ2avpnN+2+/ufU4bb49h7f/43RNn9HWgWw5fed/JqL3rIhEJCLQgWwRUdE3syISkYhAB7JFREXfzIpIRCICHcgWERV9MysiEYkIdCBbRFT0zayIRCQi0IFsEVHRN7MiEpGIQAeyRURF38yKSEQiAh3IFhEVfTMrIhGJCHQgW0RU9M2siEQkItCBbBFR0TezIhKRiEAHskVERd/MikhEIgIdyBYRFX0zK6ILoi/cSkkaIkg+AAAAAABJRU5ErkJggg==",
  studentName: "BHURALE ONKAR VIDYACHANDRA (VIJAYA)",
  studentPhoto: '',
  DBOEESignature: '',
  specialization: "Science & Technology",
  prnNo: "202301102076388 ",
  collegeName: "School of Life Sciences",
  examCenter: "Solapur University",
  seatNo: "202201102",
  courseName: "Ph.D Course Work",
  examination: "Part-1",
  ECAMark: "Nil(Balance - Nil Marks)",
  totalCredit: "14",
  totalEgp: "20",
  sgpa: "1.43",
  status: "ATKT",
  examMonthAndYear: 'Oct-2022',
  ordinance: "Not Applied",
  statementNo: "202015869435",
  subjects: [
      {
          paperCode: "1000999",
          paperName: "Research Methodology",
          credits: "4",
          gradeObtained: "C+",
          gradePoint: "5",
          earnedGRPoints: "20",
          remarks: "E,C"
      },
      {
          paperCode: "1001111",
          paperName: "Information & Computer Technology",
          credits: "2",
          gradeObtained: "F",
          gradePoint: "0.00",
          earnedGRPoints: "0.00",
          remarks: "FR,C"
      },
      {
          paperCode: "1002222",
          paperName: "Research & Publication Ehics",
          credits: "2",
          gradeObtained: "F",
          gradePoint: "0.00",
          earnedGRPoints: "0.00",
          remarks: "FR,C"
      },
      {
          paperCode: "1003333",
          paperName: "Advanced Knowledge in Core domain of concered subject",
          credits: "6",
          gradeObtained: "F",
          gradePoint: "0.00",
          earnedGRPoints: "0.00",
          remarks: "FC,C"
      }
  ],
  credits: [{
      semesterName: "Part-I",
      credits: "14",
      egp: "20",
      sgpa: "1.43",
      status: "ATKT",
      seatNo: "202201102",
      examEvent: "Part-I"
  }]
}];


const mockDataSolLedger = [{
  collegeName: "Example College",
  faculty: 'Example Faculty',
  collegeCode: "XYZ",
  semesterName:'Sem-1',
  courseName: "Example Course",
  courseCode: "CSE101",
  modeOfLearning: "Online",
  pattern: "Semester",
  branch: "Computer Science",
  coursePart: "Part 1",
  coursePartTerm: "Term 1",
  event: "Semester Examination",
  abbreviation: "ABCD",
  students: [
    {
      elig: "Eligible",
      studentName: "John Doe",
      semesterName: "Spring 2023",
      prnNo: "123456",
      seatNo: "A123",
      totalCredit: "25",
      totalEgp: "850",
      percentage: "85%",
      totalOfTotal: "500",
      totalOfTotalObt: "450",
      egp: "850",
      sgpa: "8.5",
      status: "Pass",
      collegeCode: "XYZ",
      statementNo: "001",
      ECAMark: "85",
      ordinance: "Ordinance XYZ",
      marks: [
        {
          code: "CSE101",
          assessmentMethod: "TH",
          universityAssessmentMin: "40",
          universityAssessmentObt: "45",
          collegeAssessmentMin: "20",
          collegeAssessmentObt: "25",
          totalMax: "100",
          totalMin: "40",
          totalObt: "70",
          grade: "A",
          credits: "4",
          gradePoint: "9",
          egp: "90",
          status: "Pass",
          remark: "Good"
        },
        {
          code: "CSE101",
          assessmentMethod: "TH",
          universityAssessmentMin: "40",
          universityAssessmentObt: "45",
          collegeAssessmentMin: "20",
          collegeAssessmentObt: "25",
          totalMax: "100",
          totalMin: "40",
          totalObt: "70",
          grade: "A",
          credits: "4",
          gradePoint: "9",
          egp: "90",
          status: "Pass",
          remark: "Good"
        },
        {
          code: "CSE101",
          assessmentMethod: "TH",
          universityAssessmentMin: "40",
          universityAssessmentObt: "45",
          collegeAssessmentMin: "20",
          collegeAssessmentObt: "25",
          totalMax: "100",
          totalMin: "40",
          totalObt: "70",
          grade: "A",
          credits: "4",
          gradePoint: "9",
          egp: "90",
          status: "Pass",
          remark: "Good"
        },
      ]
    },
    {
      elig: "Eligible",
      studentName: "ms",
      semesterName: "Spring 2023",
      prnNo: "123456",
      seatNo: "A123",
      totalCredit: "25",
      totalEgp: "850",
      percentage: "85%",
      totalOfTotal: "500",
      totalOfTotalObt: "450",
      egp: "850",
      sgpa: "8.5",
      status: "Pass",
      collegeCode: "XYZ",
      statementNo: "001",
      ECAMark: "85",
      ordinance: "Ordinance XYZ",
      marks: [
        {
          code: "456",
          assessmentMethod: "TH",
          universityAssessmentMin: "40",
          universityAssessmentObt: "45",
          collegeAssessmentMin: "20",
          collegeAssessmentObt: "25",
          totalMax: "100",
          totalMin: "40",
          totalObt: "70",
          credits: "4",
          grade: "A",
          gradePoint: "9",
          egp: "90",
          status: "Pass",
          remark: "Good"
        },
        {
          code: "CSE101",
          assessmentMethod: "TH",
          universityAssessmentMin: "40",
          universityAssessmentObt: "45",
          collegeAssessmentMin: "20",
          collegeAssessmentObt: "25",
          totalMax: "100",
          totalMin: "40",
          totalObt: "70",
          credits: "4",
          grade: "A",
          gradePoint: "9",
          egp: "90",
          status: "Pass",
          remark: "Good"
        },
        {
          code: "CSE101",
          assessmentMethod: "TH",
          universityAssessmentMin: "40",
          universityAssessmentObt: "45",
          collegeAssessmentMin: "20",
          collegeAssessmentObt: "25",
          totalMax: "100",
          totalMin: "40",
          credits: "4",
          totalObt: "70",
          grade: "A",
          gradePoint: "9",
          egp: "90",
          status: "Pass",
          remark: "Good"
        },
      ]
    }
  ],
  subjects: [
    {
      code: "CSE101",
      paperName: "Introduction to Computer Science",
      credits: "5",
      gradeTemplateName: "ABC Template",
      assessmentMethod: "Online Exam",
      universityAssessmentMax: "100",
      universityAssessmentMin: "40",
      collegeAssessmentMax: "50",
      collegeAssessmentMin: "20",
      totalMax: "100",
      totalMin: "40"
    },
    // Additional subjects can be added here
  ]
}
];

app.get("/sol-marksheet", async(req: Request, res: Response) => {
  const pdfDocGenerator = pdfmake.createPdfKitDocument(solMarksheet(mockDataSolMarksheet));
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "inline");
  pdfDocGenerator.pipe(res);
  pdfDocGenerator.end();
});

app.get("/sol-ledger", async(req: Request, res: Response) => {
  const pdfDocGenerator = pdfmake.createPdfKitDocument(solLedger(mockDataSolLedger));
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "inline");
  pdfDocGenerator.pipe(res);
  pdfDocGenerator.end();
});


//* Start the server
app.listen(3001, () => {
  console.log("Server started on port 3001");
});
