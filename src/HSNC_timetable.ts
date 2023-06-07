// import { TimeTable } from "../types/pdf";

function examTimeTable(data2: any[]) {

  const table2 = {
    headerRows: 1,
    widths: [30, 80, 90, 150, 130, 270],
    body: [
      ...data2.map((value: any) => [
        {
          text: value.srno,
          margin: 7,
          border: [true, false, true, true],
        },
        {
          text: value.date,
          margin: 7,
          border: [true, false, true, true],
        },
        {
          text: value.Day,
          margin: 7,
          border: [true, false, true, true],
        },
        {
          text: value.time,
          alignment: 'center',
          margin: 7,
          border: [true, false, true, true],
        },
        {
          text: value['subjectCode'],
          alignment: 'center',
          margin: 7,
          border: [true, false, true, true],
        },
        {
          text: value['subjectName'],
          margin: 7,
          border: [true, false, true, true],
        },
      ]),
    ],
  };

  let collegeLogo="";


// console.log('first',value.collegeName)

  if(data2[0].collegeName){
    switch (data2[0].collegeName) {
      case "Hassaram Rijhumal College":
        collegeLogo = `${process.cwd()}/public/collegeLogo/HR.png`;
        break;
      case "Kishinchand Chellaram College":
        collegeLogo = `${process.cwd()}/public/collegeLogo/KCC Logo final.png`;
        break;
      case "Bombay Teachers' Training College":
        collegeLogo = `${process.cwd()}/public/collegeLogo/BTTC golden.png`;
        break;
      case "School of Applied Sciences":
        collegeLogo = `${process.cwd()}/public/collegeLogo/SAS_Logo_final.png`;
        break;
      case "Niranjan Hiranandani School of Management and Real Estate":
        collegeLogo = `${process.cwd()}/public/collegeLogo/NHSMRE_Logo_2.png`;
        break;
      case "D.M. Harish School of Law":
        collegeLogo = `${process.cwd()}/public/collegeLogo/DMHSL.png`;
        break;
      case  "School of Humanities and Social Sciences":
        collegeLogo = `${process.cwd()}/public/collegeLogo/SHS LOGO.png`;
        break;
      case  "School of Performing Arts":
        collegeLogo = `${process.cwd()}/public/collegeLogo/SOPA_Logo.png`;
        break;
      case  "Chellaram School of Yoga and Wellness":
        collegeLogo = `${process.cwd()}/public/collegeLogo/SOY_final.png`;
        break;
      default:
        collegeLogo = "";
    }
    
  }



  function timeTablePdf() {


    const table = [
      // main heading
      {
        table: {
          widths: [150, 520, 150],
          headerRows: 1,
          body: [
            [
              {
                image: `${process.cwd()}/public/collegeLogo/HSNCULogo.png`,
                margin: [0, 0, 20, 0],
                alignment: 'center',
                width: 70,
              },
              {
                text: [
                  {
                    bold: true,
                    lineHeight: 1.2,
                    text: 'HSNC University Mumbai',
                    fontSize: 18,
                    alignment: 'center',
                    margin: [0, 50, 0, 0],
                  },
                  '\n',
                  {
                    lineHeight: 1.2,
                    // data2.length > 0 and has collegeName ? collegeName : null,
                    text: data2.length > 0 ? data2[0].collegeName : null,
                    fontSize: 18,
                    alignment: 'center',
                    margin: [0, 50, 0, 0],
                    bold: true,
                  },
                  '\n',
                  {
                    lineHeight: 1.5,
                    text: '',
                    alignment: 'center',
                    fontSize: 12,
                  },
                ],
              },
              {
                image: `${collegeLogo}`,
                margin: [20, 0, 20, 0],
                alignment: 'center',
                width: 70,
              },
            ],
          ],
        },
        layout: 'noBorders',
      },
      {
        canvas: [
          {
            type: 'line', x1: 0, y1: 0, x2: 805, y2: 0, lineWidth: 1,
          },
        ],
      },
      {
        margin: [0, 5, 0, 0],
        table: {
          widths: [150, 520, 150],
          headerRows: 1,
          body: [
            [
              {
                text: '',
              },
              {
                text: [
                  {
                    bold: true,
                    lineHeight: 1.6,
                    text: 'EXAM SCHEDULE - EVEN-2022-23',
                    alignment: 'center',
                    // decoration: "underline"
                  },
                  '\n',
                ],
              },
              {
                text: '',
              },
            ],
          ],
        },
        layout: 'noBorders',
      },
      {
        // text: [
        //   {
        //     text: 'Exam Name',
        //     alignment: 'center',
        //   },
        //   {
        //     text: ':  EXTERNAL',
        //     bold: true,
        //   },
        // ],
        // margin: [30, 0, 0, 0],
        text:""
      }, '\n',
      {
        table: {
          widths: [550, 230],
          headerRows: 1,
          body: [
            [
              {
                text: [
                  {
                    text: 'Programme ',
                  },
                  {
                    text: ':  B.SC.(COMPUTER SCIENCE) - BSC(CS)',
                    bold: true,
                  },
                ],
                margin: [10, 0, 0, 0],
              },
              {
                text: [
                  {
                    text: 'Semester ',
                  },
                  {
                    text: `:  ${data2.length > 0 ? data2[0].semesterName : null}`,
                    bold: true,
                  },
                ],
                alignment: 'right',
              },
            ],
          ],
        },
        layout: 'noBorders',
      }, '\n\n',
      {
        table: {
          widths: [30, 80, 90, 150, 130, 270],
          headerRows: 1,
          body: [
            [
              {
                text: 'S.No',
                bold: true,
                alignment: 'center',
                lineHeight: 1.5,
                margin: [0, 5, 0, 0],
              },
              {
                text: 'Date',
                bold: true,
                alignment: 'center',
                margin: [0, 5, 0, 0],
              },
              {
                text: 'Day',
                bold: true,
                alignment: 'center',
                margin: [0, 5, 0, 0],
              },
              {
                text: 'Session',
                bold: true,
                alignment: 'center',
                margin: [0, 5, 0, 0],
              },
              {
                text: 'Subject Code',
                bold: true,
                alignment: 'center',
                margin: [0, 5, 0, 0],
              },
              {
                text: 'Subject Name',
                bold: true,
                alignment: 'center',
                margin: [0, 5, 0, 0],
              },
            ],
          ],
        },
      },
      {
        table: table2,
      },
    ];
    return table;
  }
  const date = new Date();
  const currentDate = date.toLocaleString().replace(/,/g, '');
  const hsncTimeTable: any = {
    pageSize: 'A3',
    pageMargins: [20, 20, 20, 20],
    footer(currentPage: number, pageCount: number) {
      return [
        {
          canvas: [
            {
              type: 'line', x1: 0, y1: 0, x2: 805, y2: 0, lineWidth: 1,
            },
          ],
          margin: [20, -20, 20, 20],
        }, '\n',
        {
          columns: [
            {
              // alignment: 'right',
              text: `Date : ${currentDate}`,
            },
            {
              text: `Page${currentPage.toString()} of ${pageCount.toString()}`,
              alignment: 'right',
            },
          ],
          margin: [20, -25, 20, 20],
        }];
    },
    content: [],
  };
  for (let i = 0; i < 1; i++) {
    const hallTicket = JSON.parse(JSON.stringify(timeTablePdf()));
    hsncTimeTable.content.push(hallTicket);
    // Insert a page break after each hall ticket except the last one
    if (i < 0) {
      hsncTimeTable.content.push({ text: '', pageBreak: 'after' });
    }
  }
  return hsncTimeTable
}
export default examTimeTable;