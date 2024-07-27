import moment from "moment";
import { PDF, SolapurPdf } from "./constant/constant";
import { IAttendanceSheet } from "./types";

function attendanceSheet(data: IAttendanceSheet[]) {

  const date = new Date();
  const newDate = date.toLocaleString().replace(/,/g, "");
  const currentDate = moment(date).format('DD/MM/YYYY');

  const contentDefinition: any = {
    pageSize: "A4",
    pageMargins: [10, 20, 10, 20],
    content: [],
    fontSize: 7,
  };

  for (let i = 0; i < data.length; i++) {
    function pdf() {
      const table1 = {
        widths: [300, 250],
        headerRows: 1,
        body: [
          [
            {
              text: `Paper wise Jr. Supervisor Report`,
              alignment: "center",
              bold: true,
              colSpan: 2,
              fontSize: 11,
              margin: [0, 1, 0, 1]
            },
            {
                text: ''
            }
          ],
          [
            {
              text: `College Name: ${data[i].collegeName || '-'}`,
              alignment: "center",
              bold: true,
              colSpan: 2,
              fontSize: 11,
              margin: [0, 1, 0, 1]
            },
            {
                text: ''
            }
          ],
          [
            {
              text: `Center Name: ${data[i].centerName || '-'}`,
              alignment: "center",
              bold: true,
              colSpan: 2,
              fontSize: 11,
              margin: [0, 1, 0, 1]
            },
            {
                text: ''
            }
          ],
          [
            {
              text: `${data[i].courseName || '-'}`,
              alignment: "center",
              bold: true,
              colSpan: 2,
              fontSize: 11,
              margin: [0, 1, 0, 1]
            },
            {
                text: ''
            }
          ],
          [
            {
              text: `${data[i].specialization || '-'}`,
              alignment: "center",
              bold: true,
              colSpan: 2,
              fontSize: 11,
              margin: [0, 1, 0, 1]
            },
            {
                text: ''
            }
          ],
          [
            {
              text: `${data[i].courseAbbreviation || '-'} - ${data[i].examType || '-'} - ${data[i].examPattern || '-'} - ${data[i].specialization || '-'} - ${data[i].courseYear || '-'} - ${data[i].semesterName || '-'}`,
              alignment: "center",
              bold: true,
              colSpan: 2,
              fontSize: 11,
              margin: [0, 1, 0, 1]
            },
            {
                text: ''
            }
          ],
          [
            {
              text: `Paper Code : ${data[i].paperCode || '-'} - ${data[i].paperName || '-'}`,
            //   alignment: "center",
              bold: true,
            //   colSpan: 2,
              fontSize: 11,
              margin: [0, 1, 0, 1]
            },
            {
                text: `Exam Date: ${data[i].examDate || '-'}  Time: ${data[i].examTime || '-'}`,
                bold: true,
                fontSize: 11,
                margin: [0, 1, 0, 1]
            }
          ],
          [
            {
              text: `Block No: ${data[i].blockNumber || '-'}`,
            //   alignment: "center",
              bold: true,
              colSpan: 2,
              fontSize: 11,
              margin: [0, 1, 0, 1]
            },
            {
                text: ''
            }
          ],
        ],
      };

      const table2 = {
        widths: [20, 90, 90, 100, 114, 100],
        body: [
            [
                {
                    text: 'Sr. No',
                    bold: true,
                    alignment: 'center',
                    border: [true, false, true, true]
                },
                {
                    text: 'Seat No/Desk No',
                    bold: true,
                    alignment: 'center',
                    border: [true, false, true, true]
                },
                {
                    text: 'Main Answer Book No',
                    bold: true,
                    alignment: 'center',
                    border: [true, false, true, true]
                },
                {
                    text: 'Medium of Appearance',
                    bold: true,
                    alignment: 'center',
                    border: [true, false, true, true]
                },
                {
                    text: 'Supplement No/ICR sheet No',
                    bold: true,
                    alignment: 'center',
                    border: [true, false, true, true]
                },
                {
                    text: 'Seat No. of Absent Students',
                    bold: true,
                    alignment: 'center',
                    border: [true, false, true, true]
                },
            ],
            ...data[i].seatNumbers.map((seatNo: string, index:number)=>[
                {
                    text: index,
                    alignment: 'center',
                },
                {
                    text: seatNo || '-',
                    alignment: 'center',
                },
                {
                    text: '',
                },
                {
                    text: '',
                },
                {
                    text: '',
                },
                {
                    text: '',
                },
            ])
        ]
      }
      

      

      const table3 = {
        widths: [170, 170, 201],
        headerRows: 1,
        body: [
          [
            {
              text: [
                {
                    text: `Declaration by Jr. Supervisor: `,
                    bold: true,
                },
                {
                    text: `I have verified the Seat No of all the students on the each answer sheet submitted by each student in the block and tallies with number alloted by the University/College.`,
                    fontSize: 10
                }
              ],
              colSpan: 3,
              border: [true, false, true, false]
            },
            {
                text: '',
                bold: true,
                
            },
            {
                text: '',
                bold: true,
                
            },
          ],
          [
            {
                text: 'Total Present Students:',
                bold: true,
                margin: [0, 10, 10, 10],
                border: [true, false, false, false]
            },
            {
                text: 'Total Absent Students:',
                bold: true,
                margin: [0, 10, 10, 10],
                border: [false, false, false, false]
            },
            {
                text: 'Total No of Students in Block:',
                bold: true,
                margin: [0, 10, 10, 10],
                border: [false, false, true, false]
            },
          ],
        ],
      };

      const table4 = {
        widths: [300, 250],
        headerRows: 1,
        body: [
          [
            {
              text: `Senior Supervisor`,
              alignment: "center",
              fontSize: 11,
              bold: true,
              margin: [0, 5, 5, 5],
            },
            {
              text: 'Jr. Supervisor',
              alignment: "center",
              bold: true,
              margin: [0, 5, 5, 5],
              fontSize: 11,
            }
          ],
          [
            {
              text: `Name:`,
              bold: true,
              margin: [0, 5, 5, 5],
              fontSize: 11,
            },
            {
              text: 'Name:',
              bold: true,
              margin: [0, 5, 5, 5],
              fontSize: 11,
            }
          ],
          [
            {
              text: `Designation:`,
              bold: true,
              margin: [0, 5, 5, 5],
              fontSize: 11,
            },
            {
              text: `Designation:`,
              bold:true,
              margin: [0, 5, 5, 5],
              fontSize: 11,
            }
          ],
          [
            {
              text: `Signature:`,
              bold: true,
              margin: [0, 5, 5, 5],
              fontSize: 11,
            },
            {
              text: `Signature:`,
              bold: true,
              margin: [0, 5, 5, 5],
              fontSize: 11,
            },
          ],
          [
            {
              text: `Report Generated By : ${data[i].generatedBy} on ${newDate}`,
              alignment: "center",
              colSpan: 2,
              fontSize: 11,
              margin: [0, 0, 0, 0],
            },
            {
              text: ``,
            },
          ],
        ],
      };

      const table = [
        {
          table: {
            widths: [80, 460],
            headerRows: 1,
            body: [
              [
                {
                  image: SolapurPdf.universityLogo || PDF.defaultPhoto,
                  width: 80,
                },
                {
                  text: `${SolapurPdf.universityName || '-'}\n${SolapurPdf.universityAddress || '-'}`,
                  alignment: "center",
                  margin: [0, 20, 10, 0],
                  bold: true,
                },
              ],
            ],
          },
          layout: "noBorders",
        },
        {
            text: `Printed on: ${currentDate || '-'}`,
            alignment: "right",
            margin:[0, 0, 10, 0],
            fontSize: 11,
        },
        {
            table: table1,
            margin:[0, 0, 0, 0],
        },
        {
            table: table2,
            fontSize: 10
        },
        {
            table: table3,
            margin:[0, 0, 0, 0],
        },
        {
            table: table4,
            margin:[0, 0, 0, 0],
        }
      ];
      return table;
    }
    contentDefinition.content.push(JSON.parse(JSON.stringify(pdf())));

    // Insert a page break after each hall ticket except the last one
    if (i < data.length - 1) {
      contentDefinition.content.push({ text: "", pageBreak: "after" });
    }
  }

  return contentDefinition;
}
export default attendanceSheet;
