import express, { Request, Response } from 'express';
import pdfMake from 'pdfmake';
import contentDefinition from './pdf';
import Hallticket from './hallTicket';
import Certificate from './certificate'
import Notice from './noticePdf';
import MarkSheet from './marksheet';
import StatementOfMark from './StatementOfMark(KT)';
import MarkStatement from './markStatement';
import exam from './HSNC_timetable';
import HallTicket from './HSNC_hallticket';

// const contentDefinition = require('./pdf');
// const Hallticket = require('./hallTicket');
// const Certificate = require('./certificate');
const app = express();

const fonts = {
    Roboto: {
        normal: 'roboto/Roboto-Regular.ttf',
        bold: 'roboto/Roboto-Bold.ttf',
        italics: 'roboto/Roboto-Italic.ttf',
        bolditalics: 'roboto/Roboto-MediumItalic.ttf'
    },
};


let pdfmake = new pdfMake(fonts);

//* Define the endpoint that generates and returns the PDF document
app.get('/generate-pdf', (req:Request, res:Response) => {
  const pdfDocGenerator = pdfmake.createPdfKitDocument(contentDefinition);
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'inline');
  pdfDocGenerator.pipe(res);
  pdfDocGenerator.end();
});

//* Define the endpoint that generates and returns the PDF document
app.get('/generate-hallticket-pdf', (req:Request, res:Response) => {
  const pdfDocGenerator = pdfmake.createPdfKitDocument(Hallticket);
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'inline');
  pdfDocGenerator.pipe(res);
  pdfDocGenerator.end();
});

//* Define the endpoint that generates and returns the PDF document
app.get('/generate-certificate', (req:Request, res:Response) => {
  const pdfDocGenerator = pdfmake.createPdfKitDocument(Certificate);
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'inline');
  pdfDocGenerator.pipe(res);
  pdfDocGenerator.end();
});

//* Define the endpoint that generates and returns the PDF document
app.get('/generate-notice', (req:Request, res:Response) => {
  const pdfDocGenerator = pdfmake.createPdfKitDocument(Notice);
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'inline');
  pdfDocGenerator.pipe(res);
  pdfDocGenerator.end();
});

//* Define the endpoint that generates and returns the PDF document
app.get('/generate-marksheet', (req:Request, res:Response) => {
  const pdfDocGenerator = pdfmake.createPdfKitDocument(MarkSheet);
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'inline');
  pdfDocGenerator.pipe(res);
  pdfDocGenerator.end();
});

//* Define the endpoint that generates and returns the PDF document
app.get('/generate-markstatement-kt', (req:Request, res:Response) => {
  const pdfDocGenerator = pdfmake.createPdfKitDocument(StatementOfMark);
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'inline');
  pdfDocGenerator.pipe(res);
  pdfDocGenerator.end();
});

//* Define the endpoint that generates and returns the PDF document
app.get('/generate-markstatement', (req:Request, res:Response) => {
  const pdfDocGenerator = pdfmake.createPdfKitDocument(MarkStatement);
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'inline');
  pdfDocGenerator.pipe(res);
  pdfDocGenerator.end();
});

const data3 =[{
  fullName:"manish vishwakarma",
  enrollmentNo:"12334678765",
  seatNumber:23456765432,
  courseName:"bsc it computerscience",
  semName:"sem 1",
  collegeId:2343554,
  collegeName:"Kishinchand Chellaram College",
   timeTable: [
      { "srno": 1, "examDate": "2023-05-15", "examTime": "08:30 AM TO 10:30 AM", "semester": "VI", "subjectName": "Introduction to Computer Science" },
      { "srno": 2, "examDate": "2023-05-17", "examTime": "08:30 AM TO 10:30 AM", "semester": "VI", "subjectName": "Data Structures and Algorithms" },
      { "srno": 3, "examDate": "2023-05-20", "examTime": "08:30 AM TO 10:30 AM", "semester": "VI", "subjectName": "Database Management Systems" },
      { "srno": 4, "examDate": "2023-05-22", "examTime": "08:30 AM TO 10:30 AM", "semester": "VI", "subjectName": "Operating Systems" },
      { "srno": 5, "examDate": "2023-05-25", "examTime": "08:30 AM TO 10:30 AM", "semester": "VI", "subjectName": "Computer Networks" },
      { "srno": 6, "examDate": "2023-05-28", "examTime": "08:30 AM TO 10:30 AM", "semester": "VI", "subjectName": "Software Engineering" }
    ]
  }]

//* Define the endpoint that generates and returns the PDF document
app.get('/hsnc', (req:Request, res:Response) => {
  const pdfDocGenerator = pdfmake.createPdfKitDocument(HallTicket(data3));
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'inline');
  pdfDocGenerator.pipe(res);
  pdfDocGenerator.end();
});

const data2 = [
  { "srno": 1, "date": "2023-05-15","Day":"Saturday", "time": "08:30 AM TO 10:30 AM", "Subject Code": "US-PCS-201", "subject name": "Introduction to Computer Science", "college":"abc", },
  { "srno": 2, "date": "2023-05-17","Day":"Monday", "time": "08:30 AM TO 10:30 AM", "Subject Code": "US-PCS-202", "subject name": "Data Structures and Algorithms", "college":"sed" },
  { "srno": 3, "date": "2023-05-20","Day":"Tuesday", "time": "08:30 AM TO 10:30 AM", "Subject Code": "US-PCS-203", "subject name": "Database Management Systems", "college":"bfc" },
  { "srno": 4, "date": "2023-05-22","Day":"Wendnesday", "time": "08:30 AM TO 10:30 AM", "Subject Code": "US-PCS-204", "subject name": "Operating Systems", "college":"wpd" },
  { "srno": 5, "date": "2023-05-25","Day":"Thursday", "time": "08:30 AM TO 10:30 AM", "Subject Code": "US-PCS-205", "subject name": "Computer Networks", "college":"abcd" },
  { "srno": 6, "date": "2023-05-28","Day":"Friday", "time": "08:30 AM TO 10:30 AM", "Subject Code": "US-PCS-206", "subject name": "Software Engineering", "college":"abcr" },
  { "srno": 7, "date": "2023-05-30","Day":"Monday", "time": "08:30 AM TO 10:30 AM", "Subject Code": "US-PCS-207", "subject name": "Software Engineering", "college":"Chellaram School of Yoga and Wellness" }
]

//* Define the endpoint that generates and returns the PDF document
app.get('/hsnc-time', (req:Request, res:Response) => {
  const pdfDocGenerator = pdfmake.createPdfKitDocument(exam(data2));
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'inline');
  pdfDocGenerator.pipe(res);
  pdfDocGenerator.end();
});

//* Start the server
app.listen(3001, () => {
  console.log('Server started on port 3001');
});
