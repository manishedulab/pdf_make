import express, { Request, Response } from 'express';
import pdfMake from 'pdfmake';
import contentDefinition from './pdf';
import Hallticket from './hallTicket';
import Certificate from './certificate'
import Notice from './noticePdf';
import MarkSheet from './marksheet';
import StatementOfMark from './StatementOfMark(KT)';
import MarkStatement from './markStatement';
import HSNC_Hallticket from './HSNC_hallticket';
import HSNC_timetable from './HSNC_timetable';

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

//* Define the endpoint that generates and returns the PDF document
app.get('/hsnc', (req:Request, res:Response) => {
  const pdfDocGenerator = pdfmake.createPdfKitDocument(HSNC_Hallticket);
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'inline');
  pdfDocGenerator.pipe(res);
  pdfDocGenerator.end();
});

//* Define the endpoint that generates and returns the PDF document
app.get('/hsnc-time', (req:Request, res:Response) => {
  const pdfDocGenerator = pdfmake.createPdfKitDocument(HSNC_timetable);
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'inline');
  pdfDocGenerator.pipe(res);
  pdfDocGenerator.end();
});

//* Start the server
app.listen(3001, () => {
  console.log('Server started on port 3001');
});
