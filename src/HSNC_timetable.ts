import { TDocumentDefinitions } from "pdfmake/interfaces";
import data from "./MOCK_DATA (3).json"
import { table } from "console";

interface HallticketItem {
  name: string;
  seatNo: number;
  studentId: number;
  gender: string;
  course: string;
  dateOfBirth: string;
  medium: string;
}

interface PageSize{
  width: number,
  height: number
}

const data2 = [
    { "srno": 1, "date": "2023-05-15","Day":"Saturday", "time": "08:30 AM TO 10:30 AM", "Subject Code": "US-PCS-201", "subject name": "Introduction to Computer Science cbhschs  d bhdu  h  bb h yhh bh j bg " },
    { "srno": 2, "date": "2023-05-17","Day":"Monday", "time": "08:30 AM TO 10:30 AM", "Subject Code": "US-PCS-202", "subject name": "Data Structures and Algorithms" },
    { "srno": 3, "date": "2023-05-20","Day":"Tuesday", "time": "08:30 AM TO 10:30 AM", "Subject Code": "US-PCS-203", "subject name": "Database Management Systems" },
    { "srno": 4, "date": "2023-05-22","Day":"Wendnesday", "time": "08:30 AM TO 10:30 AM", "Subject Code": "US-PCS-204", "subject name": "Operating Systems" },
    { "srno": 5, "date": "2023-05-25","Day":"Thursday", "time": "08:30 AM TO 10:30 AM", "Subject Code": "US-PCS-205", "subject name": "Computer Networks" },
    { "srno": 6, "date": "2023-05-28","Day":"Friday", "time": "08:30 AM TO 10:30 AM", "Subject Code": "US-PCS-206", "subject name": "Software Engineering" },
    { "srno": 7, "date": "2023-05-30","Day":"Monday", "time": "08:30 AM TO 10:30 AM", "Subject Code": "US-PCS-207", "subject name": "Software Engineering" }
  ]

  const table2 = {
    headerRows: 1,
    widths: [30,80,90,150,130,270],
    body: [
      ...data2.map((value) => [
        {
          text: value.srno,
          margin: 7,
        //   lineHeight: 2,
          border: [true, false, true, true],

        },
        {
          text: value.date,
          margin: 7,
        //   lineHeight: 2,
          border: [true, false, true, true],
        },
        {
            text: value.Day,
            margin: 7,
            // lineHeight: 2,
            border: [true, false, true, true],
          },
        {
          text: value.time,
          alignment: "center",
          margin: 7,
        //   lineHeight: 2,
          border: [true, false, true, true],
        },
        {
          text: value["Subject Code"],
          alignment: "center",
          margin: 7,
        //   lineHeight: 2,
          border: [true, false, true, true],
        },
        {
          text: value["subject name"],
        //   alignment: "center",
          margin: 7,
          border: [true, false, true, true],
        },
      ]),
    ],
  };

  

function hallTicketPdf( {name, seatNo, studentId, gender, course, dateOfBirth, medium }:HallticketItem){
    const table=[
      //main heading
      { 
        table: {
          widths: [150,520,150],
          headerRows: 1,
          body: [
            [
                {
                    image: "img/Hsnc-university-logo.png",
                    margin: [0, 0, 20, 0],
                    alignment: "center",
                    width: 70,
                },
              {
                text: [
                  { 
                    bold: true,
                    lineHeight: 1.2,
                    text: "HSNC University Mumbai",
                    fontSize: 18,
                    alignment: "center",
                    margin: [0, 50, 0, 0],
                  },
                  "\n",
                  { 
                    lineHeight: 1.2,
                    text: "Kishinchand Chellaram College",
                    fontSize: 18,
                    alignment: "center",
                    margin: [0, 50, 0, 0],
                    bold:true,
                  },
                  "\n",
                  { 
                    lineHeight: 1.5,
                    text: "Vidyasagar Principal K.M. Kundnani Chowk, 124, Dinshaw Vacha Rd, Churchgate, Mumbai Maharashtra 400020",
                    alignment: "center",
                    fontSize: 12,
                  }
                ],
              },
              {
                image: "img/KCC_Mumbai_logo.svg.png",
                margin: [20, 0, 20, 0],
                alignment: "center",
                width: 70,
            },
            ],
          ],
        },
        layout: "noBorders"
      },
      {
        canvas: [
          { type: 'line', x1: 0, y1:0 , x2:805, y2: 0, lineWidth: 1 }
        ]
      },
      { 
        margin:[0,5,0,0],
        table: {
          widths: [150,520,150],
          headerRows: 1,
          body: [
            [
                {
                    text:""
                },
              {
                text: [
                  { 
                    bold: true,
                    lineHeight: 1.6,
                    text: "EXAM SCHEDULE - EVEN-2022-23",
                    alignment: "center",
                    // decoration: "underline"
                  },
                  "\n",
                ],
              },
              {
                text:""
              },
            ],
          ],
        },
        layout: "noBorders"
      },
      {
        text:[
            {
                text:"Exam Name",
                alignment:"center", 
            },
            {
                text:":  EXTERNAL",
                bold:true,
            }
        ],
        margin:[30,0,0,0]
      },"\n",
      {
        table: {
            widths: [550,230],
            headerRows: 1,
            body: [
              [
                  {
                      text:[
                        {
                            text:"Programme ",
                            
                        },
                        {
                            text:":  B.SC.(COMPUTER SCIENCE) - BSC(CS)",
                            bold:true
                        }
                      ],
                      margin:[10,0,0,0]
                  },
                {
                  text:[
                    {
                        text:"Semester "
                    },
                    {
                        text:":  II",
                        bold:true
                    }
                  ],
                  alignment:"right"
                },
              ],
            ],
          },
          layout: "noBorders"
      },"\n\n",
      {
            table: {
                widths: [30,80,90,150,130,270],
                headerRows: 1,
                body: [
                    [
                        {
                            text:"S.No",
                            bold:true,
                            alignment:"center",
                            lineHeight:1.5,
                            margin:[0,5,0,0],
                        },
                        {
                            text:"Date",
                            bold:true,
                            alignment:"center",
                            margin:[0,5,0,0],
                        },
                        {
                            text:"Day",
                            bold:true,
                            alignment:"center",
                            margin:[0,5,0,0],
                        },
                        {
                            text:"Session",
                            bold:true,
                            alignment:"center",
                            margin:[0,5,0,0],
                        },
                        {
                            text:"Subject Code",
                            bold:true,
                            alignment:"center",
                            margin:[0,5,0,0],
                        },
                        {
                            text:"Subject Name",
                            bold:true,
                            alignment:"center",
                            margin:[0,5,0,0],
                        },
                    ]
                ],
            },
      },
      {
        table:table2,
      }
    ]
    return table;
}

const date = new Date()
const currentDate = date.toLocaleString().replace(/,/g, '');
// console.log('first',currentDate)

const HSNC_timetable:any = {
  pageSize: "A3",
  pageMargins: [20, 20, 20, 20],
  footer: function(currentPage: number, pageCount: number) {
    return[
        {canvas: [
            { type: 'line', x1: 0, y1:0 , x2:805, y2: 0, lineWidth: 1 },
          ],
          margin:[20,-20,20,20]  
        },"\n",
        {
        
        columns:[
            
            { 
                // alignment: 'right',
                text: `Date : ${currentDate}`
            },
            {
                text:'Page'+ currentPage.toString() + ' of ' + pageCount.toString(),
                alignment: 'right',  
            },
          ],
          margin:[20,-25,20,20]  
    }]
    
    },
  content: [] as HallticketItem[],
};


for (let i = 0; i <1; i++) {
  const name = data[i]['student_name']
  const seatNo = data[i]['exam_seat_number']
  const studentId = data[i]['student_id']
  const gender = data[i]['gender']
  const course = data[i]['course']
  const dateOfBirth = data[i]['date_of_birth']
  const medium = data[i]['language']

  const hallTicket = JSON.parse(JSON.stringify(hallTicketPdf({ name, seatNo, studentId, gender, course, dateOfBirth, medium })));
  HSNC_timetable.content.push(hallTicket);

  // Insert a page break after each hall ticket except the last one
  if (i < 0) {
    HSNC_timetable.content.push({ text: '', pageBreak: 'after' });
  }
}

export default HSNC_timetable;