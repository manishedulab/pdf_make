import express,{Request,Response,NextFunction,Application} from 'express';
const app = express();
const contentDefinition =require('./pdf')
const Hallticket = require('./hallTicket')
const pdfMake = require('pdfmake');
const Certificate = require('./certificate');

var fonts = {
    Roboto: {
        normal: 'roboto/Roboto-Regular.ttf',
        bold: 'roboto/Roboto-Bold.ttf',
        italics: 'roboto/Roboto-Italic.ttf',
        bolditalics: 'roboto/Roboto-MediumItalic.ttf'
    },
};


let pdfmake = new pdfMake(fonts);

// Define the endpoint that generates and returns the PDF document
app.get('/generate-pdf', (req, res) => {
  const pdfDocGenerator = pdfmake.createPdfKitDocument(contentDefinition);
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'inline');
  pdfDocGenerator.pipe(res);
  pdfDocGenerator.end();
});

// Define the endpoint that generates and returns the PDF document
app.get('/generate-hallticket-pdf', (req, res) => {
  const pdfDocGenerator = pdfmake.createPdfKitDocument(Hallticket);
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'inline');
  pdfDocGenerator.pipe(res);
  pdfDocGenerator.end();
});

// Define the endpoint that generates and returns the PDF document
app.get('/generate-certificate', (req, res) => {
  const pdfDocGenerator = pdfmake.createPdfKitDocument(Certificate);
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'inline');
  pdfDocGenerator.pipe(res);
  pdfDocGenerator.end();
});

// Start the server
app.listen(3001, () => {
  console.log('Server started on port 3001');
});
