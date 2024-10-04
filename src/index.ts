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
import puppeteer from "puppeteer";
import ms from "./MOCK_DATA (5).json";
import solapurTimeTableData from "./timetable.json";
import marksheet from "./markStatement";
import hsncMarksheet from "./hsncMarksheet";
import result from "./result";
import admissionForm from "./admission";
import {
  IAddmission,
  IAttendanceSheet,
  IExamFormPdf,
  IReassessmentFeeSlip,
  IResultReport,
  ISolapurHallticketPdf,
  ISolLedger,
  ISolMarksheet,
} from "./types";
import HallTicket from "./HSNC_hallticket";
import mockDataResult from "./marksheetdata";
import reassessmentReceipt from "./reassessment-recipt";
import generatePDF from "./questionPaper";
import htmlContent from "./question-paper-using-puppeteer";
import solMarksheet from "./solMarksheet";
import { getBarcodeByPrnNo } from "./utiles";
import solLedger from "./solapur_ledger";
import solHallticket from "./solHallticket";
import solExamForm from "./solapurExamForm";
import attendanceSheet from "./attendance";
import solapurExamTimeTable from "./solapurTimeTable";
import { marksheet202201020041544, marksheet202301020072198, marksheet202301042071717, marksheet202301075074441, solMarksheet202201023042006, solMarksheet202301020072275, solMarksheet202301058070128 } from "./solapur-marksheet-data";
import resultReport from "./resultReport";
// const contentDefinition = require('./pdf');
// const Hallticket = require('./hallTicket');
// const Certificate = require('./certificate');
const app = express();

const fonts = {
  Roboto: {
    normal: `${process.cwd()}/Times New Roman/times new roman.ttf`, // `${__dirname}/roboto/roboto/Roboto-Regular.ttf`
    bold: `${process.cwd()}/Times New Roman/times new roman bold.ttf`, // `${__dirname}/roboto/roboto/Roboto-Medium.ttf
    italics: `${process.cwd()}/Times New Roman/times new roman italic.ttf`, // `${__dirname}/roboto/roboto/Roboto-Italic.ttf`
    bolditalics: `${process.cwd()}/Times New Roman/times new roman bold italic.ttf`, // `${__dirname}/roboto/roboto/Roboto-MediumItalic.ttf
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
    courseName: "Master of Business Administration in Real Estate",
    semName: "I",
    acadamicYear: "2023-2024",
    seatNumber: 23072181004,
    studentName: "/ HARIA ZEEL SHASHIKANT",
    prnNo: "23072181004",
    rollNo: "12",
    collegeName: "Niranjan Hiranandani School of Management and Real Estate",
    collegeCode: 7,
    result: "UNSUCCESSFUL",
    totalGrade: "F",
    abcNo: "667265669922",
    totalCredit: 21,
    totalOfTotal: 700,
    outOfTotal: "500",
    numberOfSem: 4,
    cg: "168",
    monthAndYear: "January 2024 REGULAR",
    sgpi: "0.00",
    NSSSGPI: "0.00",
    subjects: [
      {
        subjectCode: "MBARE-101",
        subjectName: "Real Estate Concepts",
        passingMonthYear: "03/24",
        externalMax: 60,
        externalMin: 24,
        internalMax: 40,
        internalMin: 16,
        externalObt: 30,
        internalObt: 29,
        subjectRemarkExternal: "PRESENT",
        subjectRemarkInternal: "PRESENT",
        totalMax: 100,
        totalMin: 40,
        totalObt: 59,
        grade: "B+",
        gradePoint: 7,
        creditPoint: 3,
        cg: 21,
      },
      {
        subjectCode: "MBARE-102",
        subjectName: "Real Estate Economics (I)- Micro",
        passingMonthYear: "03/24",
        externalMax: 60,
        externalMin: 24,
        internalMax: 40,
        internalMin: 16,
        externalObt: 51,
        internalObt: 36,
        subjectRemarkExternal: "PRESENT",
        subjectRemarkInternal: "PRESENT",
        totalMax: 100,
        totalMin: 40,
        totalObt: 87,
        grade: "O",
        gradePoint: 10,
        creditPoint: 3,
        cg: 30,
      },
      {
        subjectCode: "MBARE-103",
        subjectName: "General Laws",
        passingMonthYear: "03/24",
        externalMax: 60,
        externalMin: 24,
        internalMax: 40,
        internalMin: 16,
        externalObt: 38,
        internalObt: 36,
        subjectRemarkExternal: "PRESENT",
        subjectRemarkInternal: "PRESENT",
        totalMax: 100,
        totalMin: 40,
        totalObt: 74,
        grade: "A+",
        gradePoint: 9,
        creditPoint: 3,
        cg: 27,
      },
      {
        subjectCode: "MBARE-104",
        subjectName: "Real Estate Accounting",
        passingMonthYear: "03/24",
        externalMax: 60,
        externalMin: 24,
        internalMax: 40,
        internalMin: 16,
        externalObt: 48,
        internalObt: 35,
        subjectRemarkExternal: "PRESENT",
        subjectRemarkInternal: "PRESENT",
        totalMax: 100,
        totalMin: 40,
        totalObt: 83,
        grade: "O",
        gradePoint: 10,
        creditPoint: 3,
        cg: 30,
      },
      {
        subjectCode: "MBARE-105",
        subjectName: "Principles & Practices of Management",
        passingMonthYear: "03/24",
        externalMax: 60,
        externalMin: 24,
        internalMax: 40,
        internalMin: 16,
        externalObt: 48,
        internalObt: 35,
        subjectRemarkExternal: "PRESENT",
        subjectRemarkInternal: "PRESENT",
        totalMax: 100,
        totalMin: 40,
        totalObt: 83,
        grade: "O",
        gradePoint: 10,
        creditPoint: 3,
        cg: 30,
      },
      {
        subjectCode: "MBARE-106",
        subjectName: "Marketing Management",
        passingMonthYear: "03/24",
        externalMax: 60,
        externalMin: 24,
        internalMax: 40,
        internalMin: 16,
        externalObt: "AB",
        internalObt: 29,
        subjectRemarkExternal: "ABSENT",
        subjectRemarkInternal: "PRESENT",
        totalMax: 100,
        totalMin: 40,
        totalObt: 29,
        grade: "F",
        gradePoint: 0,
        creditPoint: 3,
        cg: 0,
      },
      {
        subjectCode: "MBARE-107",
        subjectName: "Introduction to Built Environment",
        passingMonthYear: "03/24",
        externalMax: 60,
        externalMin: 24,
        internalMax: 40,
        internalMin: 16,
        externalObt: 52,
        internalObt: 33,
        subjectRemarkExternal: "PRESENT",
        subjectRemarkInternal: "PRESENT",
        totalMax: 100,
        totalMin: 40,
        totalObt: 85,
        grade: "O",
        gradePoint: 10,
        creditPoint: 3,
        cg: 30,
      },
    ],
    credits: [
      {
        semName: "Sem-I",
        creditEarned: "18",
        sgpi: "0.00",
      },
    ],
    cgpa: 0,
    finalGrade: "-",
    collegeLogo:
      "D:\\guExam\\guExamServer1\\guExamServer\\uploads\\collegeLogo\\1691415043348-500354839.png",
    collegeColor: "#1c2950",
    studentPhoto:
      "D:\\guExam\\guExamServer1\\guExamServer/public/collegeLogo/corrupt.jpg",
    principalSign: "",
    directorSign:
      "D:\\guExam\\guExamServer1\\guExamServer/public/collegeLogo/DBOEE_Blue_Sign.png",
    date: "",
    place: "MUMBAI",
    universityLogo: "",
  },
];

//* Define the endpoint that generates and returns the PDF document
app.get("/result", (req: Request, res: Response) => {
  const pdfDocGenerator = pdfmake.createPdfKitDocument(result(mockResult));
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
app.get("/hsnc", (req: Request, res: Response) => {
  const pdfDocGenerator = pdfmake.createPdfKitDocument(HallTicket(data3));
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "inline");
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
  courseName: "Computer Science",
  studentName: "John Doe",
  semester: "Sem-1",
  feeDetails: [
    {
      subjectName: "Programming Fundamentals",
      amount: 50,
    },
    {
      subjectName: "Database Management",
      amount: 75,
    },
    {
      subjectName: "Web Development",
      amount: 60,
    },
  ],
};

//* Define the endpoint that generates and returns the PDF document
app.get("/reassessment", (req: Request, res: Response) => {
  const pdfDocGenerator = pdfmake.createPdfKitDocument(
    reassessmentReceipt([reassessmentFeeSlip])
  );
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

const IdmockData = [
  {
    studentId: 17059,
    abcNo: "",
    prnNo: "23032031073",
    courseId: 5,
    collegeCode: 11,
    registrationNo: 801279,
    gender: "Female",
    courseName: "M. A. Entertainment, Media and Advertising",
    collegeName: "School of Interdisciplinary Studies",
    collegeLogo: "",
    studentName: "Mohammed Osaid Mohammed Salim Sopariwala",
    fullName: "DESAI KHUSHI JITESH SONALI",
    bloodGroup: "",
    address:
      "8/F/76, 4TH FLOOR, SONAWALA BUILDING, SLEATER ROAD, TARDEO, , MUMBAI, 400007",
    parentPhone: "9821023263",
    dob: "Invalid date",
    studentEmail: "desaikhushi135@gmail.com",
    studentPhoto:
      "D:\\guExam\\guExamServer1\\guExamServer\\uploads\\compressed_studentPhotoAndSignature\\801279_p.jpeg",
    studentSign: null,
    collegeId: 11,
    currentSem: "Sem-1",
    principalSignature:
      "D:\\guExam\\guExamServer1\\guExamServer\\uploads\\PrincipalSignature\\1697609420913-173439590.png",
    primaryColor: "#292C57",
    filename: "",
    abbrevation: "M.A.E.M.A\r\n",
    issuingAuthority:
      "D:\\guExam\\guExamServer1\\guExamServer\\uploads\\PrincipalSignature\\1697609420913-173439590.png",
    Program: "M.A.E.M.A\r\n",
    yearPrefix: "FY",
    contactNo: "9821023263",
    email: "desaikhushi135@gmail.com",
    barcode:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAAAYCAYAAAAiR3l8AAAAHnRFWHRTb2Z0d2FyZQBid2lwLWpzLm1ldGFmbG9vci5jb21Tnbi0AAAA4ElEQVR4nO2RQYpCUQwEc/9L60bENF1xZinUQmxCp14+NTPzeP3m438+5tesZWIlY47Zf98k1l/ezfwYfpPepR7N2s6378lves8UuLMCgZWMduTVVyDsKXBnBQIrGe3Iq69A2FPgzgoEVjLakVdfgbCnwJ0VCKxktCOvvgJhT4E7KxBYyWhHXn0Fwp4Cd1YgsJLRjrz6CoQ9Be6sQGAlox159RUIewrcWYHASkY78uorEPYUuLMCgZWMduTVVyDsKXBnBQIrGe3Iq69A2FPgzgoEVjLakVdfgbCnwJ1/SuATzbzKfN7vJjIAAAAASUVORK5CYII=",
  },
];

//* Define the endpoint that generates and returns the PDF document
app.get("/idcard", (req: Request, res: Response) => {
  const pdfDocGenerator = pdfmake.createPdfKitDocument(IdCard(IdmockData));
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "inline");
  pdfDocGenerator.pipe(res);
  pdfDocGenerator.end();
});

const mockAddmission: IAddmission[] = [
  {
    collegeName: "ABC College",
    universityLogo: "img/Hsnc-university-logo.png",
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
  },
];

//* Define the endpoint that generates and returns the PDF document
app.get("/admission", (req: Request, res: Response) => {
  const pdfDocGenerator = pdfmake.createPdfKitDocument(
    admissionForm(mockAddmission)
  );
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "inline");
  pdfDocGenerator.pipe(res);
  pdfDocGenerator.end();
});

const questions = [
  {
    id: 57,
    setName: "D",
    assessmentId: 175,
    quePaperUploadId: null,
    ansPaperUploadId: null,
    createdAt: "2024-03-13T01:55:54.105Z",
    updatedAt: "2024-03-30T07:16:28.000Z",
    assessmentCode: "1000R",
    questions: [
      {
        marks: 10,
        questions: [
          {
            marks: 5,
            questions: [
              {
                marks: 1,
                questions: [],
                questionId: "01d372b4-8310-4bad-bc6e-19d24bc81613",
                questionText:
                  "<h3>What are the various data types that exist in JavaScript?</h3>",
                questionIndex: "1.A.i",
                subQuestionsAllowed: false,
                maxSubQuestionsAttempt: 0,
              },
            ],
            questionId: "db428ae2-ee16-4835-a888-acf0f973360b",
            questionText:
              "<h3>What's the difference between JavaScript and Java?</h3>",
            questionIndex: "1.A",
            subQuestionsAllowed: true,
            maxSubQuestionsAttempt: "5",
          },
        ],
        questionId: "ce22b09d-299b-44ec-9d3f-9dccf6cc1c0a",
        questionText: "<h3>What do you understand about JavaScript?</h3>",
        questionIndex: "1",
        subQuestionsAllowed: true,
        maxSubQuestionsAttempt: 2,
      },
      {
        marks: 4,
        questions: [
          {
            marks: 2,
            questions: [
              {
                marks: 2,
                questions: [],
                questionId: "019d7df5-a9d1-4722-b689-edb6d2c64c2d",
                questionText:
                  "<h3>What are the various data types that exist in JavaScript?</h3><p><br></p>",
                questionIndex: "2.A.i",
                subQuestionsAllowed: false,
                maxSubQuestionsAttempt: 0,
              },
            ],
            questionId: "de3e1819-792b-4eb9-abbc-084bd75da1cf",
            questionText:
              "<h3>What are the various data types that exist in JavaScript?</h3>",
            questionIndex: "2.A",
            subQuestionsAllowed: true,
            maxSubQuestionsAttempt: 1,
          },
          {
            marks: 2,
            questions: [
              {
                marks: 2,
                questions: [],
                questionId: "0be2dd56-638b-468b-85be-ad1555c00394",
                questionText:
                  "<h3>What's the difference between JavaScript and Java?</h3>",
                questionIndex: "2.B.i",
                subQuestionsAllowed: false,
                maxSubQuestionsAttempt: 0,
              },
            ],
            questionId: "3fe73336-ff57-4e52-8038-c6e8cbe4b457",
            questionText: "<h3>What do you understand about JavaScript?</h3>",
            questionIndex: "2.B",
            subQuestionsAllowed: true,
            maxSubQuestionsAttempt: 1,
          },
        ],
        questionId: "fa972711-747c-4989-abde-c45729d07beb",
        questionText:
          "<h3>What's the difference between JavaScript and Java?</h3><p><br></p>",
        questionIndex: "2",
        subQuestionsAllowed: true,
        maxSubQuestionsAttempt: 2,
      },
    ],
    subjectName: "Writing for Visual Media – I",
    courseName: "B.A (FILMS TELEVISION AND NEW MEDIA PRODUCTION)",
    year: 2023,
    semName: "Sem-1",
    totalMark: 40,
  },
];
//* Define the endpoint that generates and returns the PDF document
app.get("/questions-1", (req: Request, res: Response) => {
  const pdfDocGenerator = pdfmake.createPdfKitDocument(generatePDF(questions));
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "inline");
  pdfDocGenerator.pipe(res);
  pdfDocGenerator.end();
});

app.get("/questions", async (req, res) => {
  const browser = await puppeteer.launch({
    headless: true, // Set to true to run in headless mode
  });

  const page = await browser.newPage();

  await page.setContent(htmlContent);

  // Generate PDF
  const pdfBuffer = await page.pdf({
    format: "A4", // Paper format
    printBackground: true, // Include background graphics
  });

  await browser.close();

  // Send PDF as response
  res.set({
    "Content-Type": "application/pdf",
    "Content-Disposition": 'attachment; filename="output.pdf"', // Force download
  });
  res.send(pdfBuffer);
});

app.get("/sol-marksheet", async (req: Request, res: Response) => {
  const pdfDocGenerator = pdfmake.createPdfKitDocument(
    solMarksheet(solMarksheet202301058070128)
  );
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "inline");
  pdfDocGenerator.pipe(res);
  pdfDocGenerator.end();
});

export const mockResultReport: IResultReport = {
  examEvent: "Winter 2023",
  examType: "Semester End",
  course: "BSc Computer Science",
  semester: "Sem-5",
  totalAppearedStudents: "120",
  appearedBoys: "70",
  appearedGirls: "50",
  totalPassStudents: "100",
  passBoys: "60",
  passGirls: "40",
  totalPassPercentageOfStudents: "83.33%",
  passPercentageOfBoys: "85.71%",
  passPercentageOfGirls: "80.00%",
  subjectsDetail: [
    {
      subjectCode: "CS101",
      subjectName: "Data Structures",
      noOfStudentsAsPerSubject: "120",
      noOfStudentsWithGradeO: "10",
      noOfStudentsWithGradeAPlus: "20",
      noOfStudentsWithGradeA: "25",
      noOfStudentsWithGradeBPlus: "30",
      noOfStudentsWithGradeB: "15",
      noOfStudentsWithGradeC: "10",
      noOfStudentsWithGradeD: "5",
      noOfStudentsWithGradeF: "5",
      passPercentageAsPerSubject: "95.83%",
      failPercentageAsPerSubject: "4.17%",
      GPA: "8.5",
    },
    {
      subjectCode: "CS102",
      subjectName: "Algorithms",
      noOfStudentsAsPerSubject: "120",
      noOfStudentsWithGradeO: "12",
      noOfStudentsWithGradeAPlus: "18",
      noOfStudentsWithGradeA: "28",
      noOfStudentsWithGradeBPlus: "25",
      noOfStudentsWithGradeB: "20",
      noOfStudentsWithGradeC: "8",
      noOfStudentsWithGradeD: "4",
      noOfStudentsWithGradeF: "5",
      passPercentageAsPerSubject: "95.83%",
      failPercentageAsPerSubject: "4.17%",
      GPA: "8.3",
    },
    {
      subjectCode: "CS103",
      subjectName: "Operating Systems",
      noOfStudentsAsPerSubject: "120",
      noOfStudentsWithGradeO: "8",
      noOfStudentsWithGradeAPlus: "22",
      noOfStudentsWithGradeA: "30",
      noOfStudentsWithGradeBPlus: "25",
      noOfStudentsWithGradeB: "15",
      noOfStudentsWithGradeC: "10",
      noOfStudentsWithGradeD: "6",
      noOfStudentsWithGradeF: "4",
      passPercentageAsPerSubject: "96.67%",
      failPercentageAsPerSubject: "3.33%",
      GPA: "8.6",
    },
  ],
};


app.get("/result-report", async (req: Request, res: Response) => {
  const pdfDocGenerator = pdfmake.createPdfKitDocument(
    resultReport([mockResultReport])
  );
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "inline");
  pdfDocGenerator.pipe(res);
  pdfDocGenerator.end();
});

const mockDataSolLedger: ISolLedger = {
  faculty: "Engineering",
  courseName: "Computer Science",
  courseCode: "CS101",
  modeOfLearning: "Full-time",
  pattern: "Semester",
  branch: "Computer Science",
  coursePart: "Part A",
  coursePartTerm: "Term 1",
  event: "Final Exam",
  courseAbbreviation: "CS",
  semesterName: "Spring 2024",
  examType: "Regular",
  creditSystem: "CBCS",
  specialization: "Software Engineering",
  currentYear: "I",
  examMonthAndYear: "May 2024",
  subjects: [
    {
      code: "CS101",
      paperName: "Introduction to Programming",
      credits: "4",
      gradeTemplateName: "CBCS",
      theory: [
        {
          AssessmentName: "ESE",
          AssessmentTypeMax: "50",
          AssessmentTypeMin: "18",
        },
        {
          AssessmentName: "POE",
          AssessmentTypeMax: "100",
          AssessmentTypeMin: "40",
        },
        {
          AssessmentName: "ESE",
          AssessmentTypeMax: "50",
          AssessmentTypeMin: "18",
        },
        {
          AssessmentName: "POE",
          AssessmentTypeMax: "100",
          AssessmentTypeMin: "40",
        },
      ],
      practical: [
        {
          AssessmentName: "ISE",
          AssessmentTypeMax: "50",
          AssessmentTypeMin: "18",
        },
        {
          AssessmentName: "ICA",
          AssessmentTypeMax: "100",
          AssessmentTypeMin: "40",
        },
      ],
      total: "140",
    },
    {
      code: "CS101",
      paperName: "Introduction to Programming",
      credits: "4",
      gradeTemplateName: "CBCS",
      theory: [
        {
          AssessmentName: "ESE",
          AssessmentTypeMax: "50",
          AssessmentTypeMin: "18",
        },
        {
          AssessmentName: "POE",
          AssessmentTypeMax: "100",
          AssessmentTypeMin: "40",
        },
        {
          AssessmentName: "ESE",
          AssessmentTypeMax: "50",
          AssessmentTypeMin: "18",
        },
        {
          AssessmentName: "POE",
          AssessmentTypeMax: "100",
          AssessmentTypeMin: "40",
        },
      ],
      practical: [
        {
          AssessmentName: "ISE",
          AssessmentTypeMax: "50",
          AssessmentTypeMin: "18",
        },
        {
          AssessmentName: "ICA",
          AssessmentTypeMax: "100",
          AssessmentTypeMin: "40",
        },
      ],
      total: "180",
    },
    {
      code: "CS101",
      paperName: "Introduction to Programming",
      credits: "4",
      gradeTemplateName: "CBCS",
      theory: [
        {
          AssessmentName: "ESE",
          AssessmentTypeMax: "50",
          AssessmentTypeMin: "18",
        },
        {
          AssessmentName: "POE",
          AssessmentTypeMax: "100",
          AssessmentTypeMin: "40",
        },
        {
          AssessmentName: "ESE",
          AssessmentTypeMax: "50",
          AssessmentTypeMin: "18",
        },
        {
          AssessmentName: "POE",
          AssessmentTypeMax: "100",
          AssessmentTypeMin: "40",
        },
      ],
      practical: [
        {
          AssessmentName: "ISE",
          AssessmentTypeMax: "50",
          AssessmentTypeMin: "18",
        },
        {
          AssessmentName: "ICA",
          AssessmentTypeMax: "100",
          AssessmentTypeMin: "40",
        },
      ],
      total: "200",
    },
    {
      code: "CS101",
      paperName: "Introduction to Programming",
      credits: "4",
      gradeTemplateName: "CBCS",
      theory: [
        {
          AssessmentName: "ESE",
          AssessmentTypeMax: "50",
          AssessmentTypeMin: "18",
        },
        {
          AssessmentName: "POE",
          AssessmentTypeMax: "100",
          AssessmentTypeMin: "40",
        },
        {
          AssessmentName: "ESE",
          AssessmentTypeMax: "50",
          AssessmentTypeMin: "18",
        },
        {
          AssessmentName: "POE",
          AssessmentTypeMax: "100",
          AssessmentTypeMin: "40",
        },
      ],
      practical: [
        {
          AssessmentName: "ISE",
          AssessmentTypeMax: "50",
          AssessmentTypeMin: "18",
        },
        {
          AssessmentName: "ICA",
          AssessmentTypeMax: "100",
          AssessmentTypeMin: "40",
        },
      ],
      total: "100",
    },
  ],
  students: [
    {
      elig: "Eligible",
      studentName: "John Doe",
      semesterName: "Spring 2024",
      collegeName: "ABC College",
      collegeCode: "ABCCOL",
      prnNo: "1234567890",
      seatNo: "S12345",
      totalCredit: "55",
      totalEgp: "340",
      percentage: "85%",
      totalOfTotal: "150",
      totalOfTotalObt: "120",
      finalSgpa: "8.5",
      status: "Pass",
      finalGrade: "A",
      ECAMark: "Excellent",
      balanceMark: "Nil",
      ordinance: "Passed",
      previousYearDetails: [
        {
          year: "B.Tech-IV",
          seatNo: "1558961475963584",
          examEvent: "OCT-2024",
          egp: "125",
          sgpa: "8.7",
          credits: "30",
          status: "pass",
          grade: "E,X",
        },
      ],
      oddSemesterdata: {
        semName: "Sem-V",
        totalCredit: "4",
        egp: "340",
        sgpa: "8.5",
        status: "Pass",
        marks: [
          {
            code: "CS101",
            theory: [
              {
                AssessmentName: "ESE",
                AssessmentTypeObt: "10",
                AssessmentTypeMin: "20",
              },
              {
                AssessmentName: "ICA",
                AssessmentTypeObt: "30",
                AssessmentTypeMin: "40",
              },
              {
                AssessmentName: "ISE",
                AssessmentTypeObt: "25",
                AssessmentTypeMin: "30",
              },
              {
                AssessmentName: "POE",
                AssessmentTypeObt: "50",
                AssessmentTypeMin: "60",
              },
            ],
            practical: [
              {
                AssessmentName: "ESE",
                AssessmentTypeObt: "",
                AssessmentTypeMin: "",
              },
              {
                AssessmentName: "ICA",
                AssessmentTypeObt: "80",
                AssessmentTypeMin: "40",
              },
              {
                AssessmentName: "ISE",
                AssessmentTypeObt: "",
                AssessmentTypeMin: "",
              },
              {
                AssessmentName: "POE",
                AssessmentTypeObt: "80",
                AssessmentTypeMin: "40",
              },
            ],
            theoryTotalMax: "190",
            theoryTotalMin: "72",
            theoryTotalObt: "28",
            practicalTotalMax: "910",
            practicalTotalMin: "83",
            practicalTotalObt: "80",
            totalMax: "110",
            totalMin: "8",
            totalObt: "20",
            grade: "A+",
            gradePoint: "9.5",
            egp: "340",
            status: "Pass",
            remark: "E,X",
          },
        ],
      },
      evenSemesterdata: {
        semName: "Sem-VI",
        totalCredit: "8",
        egp: "30",
        sgpa: "8.0",
        status: "Pass",
        marks: [
          {
            code: "CS101",
            theory: [
              {
                AssessmentName: "ESE",
                AssessmentTypeObt: "10",
                AssessmentTypeMin: "20",
              },
              {
                AssessmentName: "ICA",
                AssessmentTypeObt: "30",
                AssessmentTypeMin: "40",
              },
              {
                AssessmentName: "ISE",
                AssessmentTypeObt: "25",
                AssessmentTypeMin: "30",
              },
              {
                AssessmentName: "POE",
                AssessmentTypeObt: "50",
                AssessmentTypeMin: "60",
              },
            ],
            practical: [
              {
                AssessmentName: "ESE",
                AssessmentTypeObt: "",
                AssessmentTypeMin: "",
              },
              {
                AssessmentName: "ICA",
                AssessmentTypeObt: "80",
                AssessmentTypeMin: "40",
              },
              {
                AssessmentName: "ISE",
                AssessmentTypeObt: "",
                AssessmentTypeMin: "",
              },
              {
                AssessmentName: "POE",
                AssessmentTypeObt: "80",
                AssessmentTypeMin: "40",
              },
            ],
            theoryTotalMax: "120",
            theoryTotalMin: "80",
            theoryTotalObt: "50",
            practicalTotalMax: "10",
            practicalTotalMin: "88",
            practicalTotalObt: "90",
            totalMax: "110",
            totalMin: "8",
            totalObt: "20",
            grade: "A+",
            gradePoint: "9.5",
            egp: "340",
            status: "Pass",
            remark: "E,X",
          },
        ],
      },
    },
    {
      elig: "Eligible",
      studentName: "John Doe",
      semesterName: "Spring 2024",
      collegeName: "ABC College",
      collegeCode: "ABCCOL",
      prnNo: "1234567890",
      seatNo: "S12345",
      totalCredit: "55",
      totalEgp: "340",
      percentage: "85%",
      totalOfTotal: "150",
      totalOfTotalObt: "120",
      finalSgpa: "8.5",
      status: "Pass",
      finalGrade: "A",
      ECAMark: "Excellent",
      balanceMark: "Nil",
      ordinance: "Passed",
      previousYearDetails: [
        {
          year: "B.Tech-IV",
          seatNo: "1558961475963584",
          examEvent: "OCT-2024",
          egp: "125",
          sgpa: "8.7",
          credits: "30",
          status: "pass",
          grade: "E,X",
        },
      ],
      oddSemesterdata: {
        semName: "Sem-V",
        totalCredit: "4",
        egp: "340",
        sgpa: "8.5",
        status: "Pass",
        marks: [
          {
            code: "CS101",
            theory: [
              {
                AssessmentName: "ESE",
                AssessmentTypeObt: "10",
                AssessmentTypeMin: "20",
              },
              {
                AssessmentName: "ICA",
                AssessmentTypeObt: "30",
                AssessmentTypeMin: "40",
              },
              {
                AssessmentName: "ISE",
                AssessmentTypeObt: "25",
                AssessmentTypeMin: "30",
              },
              {
                AssessmentName: "POE",
                AssessmentTypeObt: "50",
                AssessmentTypeMin: "60",
              },
            ],
            practical: [
              {
                AssessmentName: "ESE",
                AssessmentTypeObt: "",
                AssessmentTypeMin: "",
              },
              {
                AssessmentName: "ICA",
                AssessmentTypeObt: "80",
                AssessmentTypeMin: "40",
              },
              {
                AssessmentName: "ISE",
                AssessmentTypeObt: "",
                AssessmentTypeMin: "",
              },
              {
                AssessmentName: "POE",
                AssessmentTypeObt: "80",
                AssessmentTypeMin: "40",
              },
            ],
            theoryTotalMax: "190",
            theoryTotalMin: "72",
            theoryTotalObt: "28",
            practicalTotalMax: "910",
            practicalTotalMin: "83",
            practicalTotalObt: "80",
            totalMax: "110",
            totalMin: "8",
            totalObt: "20",
            grade: "A+",
            gradePoint: "9.5",
            egp: "340",
            status: "Pass",
            remark: "E,X",
          },
          {
            code: "CS101",
            theory: [
              {
                AssessmentName: "ESE",
                AssessmentTypeObt: "10",
                AssessmentTypeMin: "20",
              },
              {
                AssessmentName: "ICA",
                AssessmentTypeObt: "30",
                AssessmentTypeMin: "40",
              },
              {
                AssessmentName: "ISE",
                AssessmentTypeObt: "25",
                AssessmentTypeMin: "30",
              },
              {
                AssessmentName: "POE",
                AssessmentTypeObt: "50",
                AssessmentTypeMin: "60",
              },
            ],
            practical: [
              {
                AssessmentName: "ESE",
                AssessmentTypeObt: "",
                AssessmentTypeMin: "",
              },
              {
                AssessmentName: "ICA",
                AssessmentTypeObt: "80",
                AssessmentTypeMin: "40",
              },
              {
                AssessmentName: "ISE",
                AssessmentTypeObt: "",
                AssessmentTypeMin: "",
              },
              {
                AssessmentName: "POE",
                AssessmentTypeObt: "80",
                AssessmentTypeMin: "40",
              },
            ],
            theoryTotalMax: "190",
            theoryTotalMin: "72",
            theoryTotalObt: "28",
            practicalTotalMax: "910",
            practicalTotalMin: "83",
            practicalTotalObt: "80",
            totalMax: "110",
            totalMin: "8",
            totalObt: "20",
            grade: "A+",
            gradePoint: "9.5",
            egp: "340",
            status: "Pass",
            remark: "E,X",
          },
        ],
      },
      evenSemesterdata: {
        semName: "Sem-VI",
        totalCredit: "8",
        egp: "30",
        sgpa: "8.0",
        status: "Pass",
        marks: [
          {
            code: "CS101",
            theory: [
              {
                AssessmentName: "ESE",
                AssessmentTypeObt: "10",
                AssessmentTypeMin: "20",
              },
              {
                AssessmentName: "ICA",
                AssessmentTypeObt: "30",
                AssessmentTypeMin: "40",
              },
              {
                AssessmentName: "ISE",
                AssessmentTypeObt: "25",
                AssessmentTypeMin: "30",
              },
              {
                AssessmentName: "POE",
                AssessmentTypeObt: "50",
                AssessmentTypeMin: "60",
              },
            ],
            practical: [
              {
                AssessmentName: "ESE",
                AssessmentTypeObt: "",
                AssessmentTypeMin: "",
              },
              {
                AssessmentName: "ICA",
                AssessmentTypeObt: "80",
                AssessmentTypeMin: "40",
              },
              {
                AssessmentName: "ISE",
                AssessmentTypeObt: "",
                AssessmentTypeMin: "",
              },
              {
                AssessmentName: "POE",
                AssessmentTypeObt: "80",
                AssessmentTypeMin: "40",
              },
            ],
            theoryTotalMax: "120",
            theoryTotalMin: "80",
            theoryTotalObt: "50",
            practicalTotalMax: "10",
            practicalTotalMin: "88",
            practicalTotalObt: "90",
            totalMax: "110",
            totalMin: "8",
            totalObt: "20",
            grade: "A+",
            gradePoint: "9.5",
            egp: "340",
            status: "Pass",
            remark: "E,X",
          },
          {
            code: "CS101",
            theory: [
              {
                AssessmentName: "ESE",
                AssessmentTypeObt: "10",
                AssessmentTypeMin: "20",
              },
              {
                AssessmentName: "ICA",
                AssessmentTypeObt: "30",
                AssessmentTypeMin: "40",
              },
              {
                AssessmentName: "ISE",
                AssessmentTypeObt: "25",
                AssessmentTypeMin: "30",
              },
              {
                AssessmentName: "POE",
                AssessmentTypeObt: "50",
                AssessmentTypeMin: "60",
              },
            ],
            practical: [
              {
                AssessmentName: "ESE",
                AssessmentTypeObt: "",
                AssessmentTypeMin: "",
              },
              {
                AssessmentName: "ICA",
                AssessmentTypeObt: "80",
                AssessmentTypeMin: "40",
              },
              {
                AssessmentName: "ISE",
                AssessmentTypeObt: "",
                AssessmentTypeMin: "",
              },
              {
                AssessmentName: "POE",
                AssessmentTypeObt: "80",
                AssessmentTypeMin: "40",
              },
            ],
            theoryTotalMax: "120",
            theoryTotalMin: "80",
            theoryTotalObt: "50",
            practicalTotalMax: "10",
            practicalTotalMin: "88",
            practicalTotalObt: "90",
            totalMax: "110",
            totalMin: "8",
            totalObt: "20",
            grade: "A+",
            gradePoint: "9.5",
            egp: "340",
            status: "Pass",
            remark: "E,X",
          },
        ],
      },
    },
  ],
};

app.get("/sol-ledger", async (req: Request, res: Response) => {
  const pdfDocGenerator = pdfmake.createPdfKitDocument(
    solLedger([mockDataSolLedger])
  );
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "inline");
  pdfDocGenerator.pipe(res);
  pdfDocGenerator.end();
});

const hallticketmockData: ISolapurHallticketPdf = {
  collegeName: "Solapur University",
  examMonthAndYear: "April 2024",
  studentName: "John Doe",
  fatherName: "Michael Doe",
  studentPhoto: `${process.cwd()}/public/collegeLogo/123.png`,
  studentSignature: `${process.cwd()}/public/collegeLogo/xyz.png`,
  prnNo: "1234567890",
  gender: "Male",
  physicallyChallenged: "No",
  medium: "English",
  division: "First",
  rollNumber: "A123",
  seatNumber: "101",
  examCenter: "Solapur",
  courseAbbreviation: "B.com",
  examType: "Regular",
  examPattern: "CBCS Pattern 2022",
  semesterName: "Sem-II",
  subjects: [
    {
      paperCode: "101",
      paperName: "Mathematics",
      date: "15th April 2024",
      time: "10:00 AM - 1:00 PM",
      subjectType: "Theory",
      assessment: "Written",
    },
    {
      paperCode: "102",
      paperName: "Science",
      date: "17th April 2024",
      time: "10:00 AM - 1:00 PM",
      subjectType: "Theory",
      assessment: "Written",
    },
  ],
};

app.get("/sol-hallticket", async (req: Request, res: Response) => {
  const pdfDocGenerator = pdfmake.createPdfKitDocument(
    solHallticket([hallticketmockData])
  );
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "inline");
  pdfDocGenerator.pipe(res);
  pdfDocGenerator.end();
});

const ExamFormPdf: IExamFormPdf = {
  collegeName: "ABC College",
  examMonthAndYear: "May 2024",
  studentName: "John Doe",
  motherName: "Jane Doe",
  studentPhoto: `${process.cwd()}/public/collegeLogo/123.png`,
  studentSignature: `${process.cwd()}/public/collegeLogo/xyz.png`,
  prnNo: "1234567890",
  gender: "Male",
  physicallyChallenged: "No",
  medium: "English",
  eligibility: "Eligible",
  examFormNumber: "EXAM123",
  ABCID: "ABC123",
  nationality: "American",
  courseAbbreviation: "CS",
  examType: "Regular",
  examPattern: "Pattern A",
  semesterName: "Spring 2024",
  address: "123 Main Street",
  city: "Anytown",
  telNo: "0123456789",
  mobileNumber: "9876543210",
  email: "john.doe@example.com",
  dob: "01/01/2000",
  category: "General",
  examFee: "100",
  examFormFee: "1000",
  examLateFee: "10000",
  provisionalCertificateFee: "0",
  subTotalFee: "3000500",
  numberOfSemesters: 8,
  currentSemester: 8,
  isEvenSemester: true,
  oddSemester: {
    semesterName: "Spring 2024",
    examType: "Regular",
    examPattern: "Pattern A",
    collegeRollNo: "CSE123456",
    examAppearanceType: "Regular",
    centerPreference: "Center A",
    venuePreference: "Venue X",
    subjects: [
      {
        paperCode: "CS101",
        paperName: "Introduction to Computer Science",
        AMAT: "Pass",
      },
      {
        paperCode: "CS102",
        paperName: "Programming Fundamentals",
        AMAT: "Pass",
      },
      {
        paperCode: "CS101",
        paperName: "Introduction to Computer Science",
        AMAT: "Pass",
      },
      {
        paperCode: "CS102",
        paperName: "Programming Fundamentals",
        AMAT: "Pass",
      },
    ],
  },

  evenSemester: {
    semesterName: "Fall 2024",
    examType: "Regular",
    examPattern: "Pattern B",
    collegeRollNo: "CSE123457",
    examAppearanceType: "Regular",
    centerPreference: "Center B",
    venuePreference: "Venue Y",
    subjects: [
      {
        paperCode: "CS201",
        paperName: "Data Structures",
        AMAT: "Pass",
      },
      {
        paperCode: "CS202",
        paperName: "Algorithms",
        AMAT: "Pass",
      },
    ],
  },
};

app.get("/sol-examform", async (req: Request, res: Response) => {
  const pdfDocGenerator = pdfmake.createPdfKitDocument(
    solExamForm([ExamFormPdf])
  );
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "inline");
  pdfDocGenerator.pipe(res);
  pdfDocGenerator.end();
});

const attendanceSheetData: IAttendanceSheet[] = [
  {
    collegeName: "Springfield University",
    centerName: "Main Campus",
    courseName: "Bachelor of Science",
    specialization: "Computer Science",
    courseAbbreviation: "BSc",
    examType: "Final",
    examPattern: "Semester",
    courseYear: "BSc-II",
    semesterName: "Semester 4",
    paperCode: "CS204",
    paperName: "Data Structures",
    examDate: "2024-06-15",
    examTime: "10:00 AM - 1:00 PM",
    blockNumber: "Block A",
    generatedBy: "John Doe",
    seatNumbers: ["A01", "A02", "A03", "A04", "A05"],
  },
  {
    collegeName: "Shelby College",
    centerName: "Downtown Campus",
    courseName: "Master of Science",
    specialization: "Biotechnology",
    courseAbbreviation: "MSc",
    examType: "Midterm",
    examPattern: "Trimester",
    courseYear: "MSc-I",
    semesterName: "Trimester 2",
    paperCode: "BT102",
    paperName: "Genetics",
    examDate: "2024-07-10",
    examTime: "2:00 PM - 5:00 PM",
    blockNumber: "Block C",
    generatedBy: "Jane Smith",
    seatNumbers: ["C21", "C22", "C23", "C24", "C25"],
  },
];

app.get("/sol-attendance", async (req: Request, res: Response) => {
  const pdfDocGenerator = pdfmake.createPdfKitDocument(
    attendanceSheet(attendanceSheetData)
  );
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "inline");
  pdfDocGenerator.pipe(res);
  pdfDocGenerator.end();
});

//* Define the endpoint that generates and returns the PDF document
app.get("/sol-time-table", (req: Request, res: Response) => {
  const pdfDocGenerator = pdfmake.createPdfKitDocument(
    solapurExamTimeTable(solapurTimeTableData)
  );
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "inline");
  pdfDocGenerator.pipe(res);
  pdfDocGenerator.end();
});

//* Start the server
app.listen(3001, () => {
  console.log("Server started on port 3001");
});
