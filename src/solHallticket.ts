import { PDF } from "./constant";
import { SolapurPdf } from "./constant/constant";
import { IHallticketSemesters, ISolapurHallticketPdf, ISolMarksheet } from "./types";
import moment from "moment";

function solHallticket(data: ISolapurHallticketPdf[]) {
  // console.log('data',data[0])

  const contentDefinition: any = {
    pageSize: 'A4',
    pageMargins: [10, 10, 10, 20],
    content: [],
  };

  for (let i = 0; i < data.length; i++) {
    
    const table1 = {
        widths: [90, 365, 90],
        headerRows: 1,
        body: [
          [
            {
                image: SolapurPdf.universityLogo,
                width: 70,
                alignment: 'center',
            },
            [ 
                {
                    stack:[
                        {
                            text: SolapurPdf.universityName,
                            fontSize:9.5,
                            margin:[0, 5, 0, 0],
                            bold:true,
                        },
                        {
                            text: SolapurPdf.universityAddress,
                            fontSize:9,
                        },
                        {
                            text: ' Maharashtra(India)',
                            fontSize:9,
                        },
                    ],
                    alignment: 'center',
                },
                {
                    table: {
                        widths: ['100%'],
                        body:[[{text: '', border: [false, true, false, false]}]]
                    },
                    margin: [-5, 5, -5, 0],
                    // layout: "noBorders"
                },
                {
                    text: `Examination Hall Ticket ${data[i].examMonthAndYear}`,
                    fontSize:9,
                    alignment: 'center',
                    bold: true,
                },
                {
                    table: {
                        widths: ['100%'],
                        body:[[{text: '', border: [false, true, false, false]}]]
                    },
                    margin: [-5, 5, -5, 0],
                    // layout: "noBorders"
                },
                {
                    table: {
                        widths: ['100%'],
                        body:[[{text: '', border: [false, true, false, false]}]]
                    },
                    margin: [-5, 5, -5, 0],
                    // layout: "noBorders"
                },
                {
                    text: `College: ${data[i].collegeName}`,
                    fontSize:9,
                    alignment: 'center',
                    bold: true,
                }
            ],
            {
                image: data[i].studentPhoto || PDF.defaultPhoto,
                width: 70,
                alignment: 'center',
            }
          ]
        ]
    }

    const table2 = {
        widths: [150, 90, 117, 80, 90],
        headerRows: 1,
        body: [
          [
            {
              text: [
                {
                    text: 'Name of Student:'
                },
                {
                    text: ` ${data[i].studentName || "-"}`,
                    bold: true,
                }
              ],
              colSpan: 2,
              border: [true, true, true, true],
              margin: [0, 0, 0, 0],
            },
            {
              text: "",
            },
            {
              text: [
                {
                    text: "Father's Name:"
                },
                {
                    text: ` ${data[i].fatherName || "-"}`,
                    bold: true,
                }
              ],
              colSpan: 2,
              border: [true, true, true, true],
              margin: [0, 0, 0, 0],
            },
            {
                text: "",
            },
            {
                image: data[i].studentSignature || PDF.defaultPhoto,
                width: 60,
                height: 22,
                alignment: 'center',
                rowSpan: 2,
            }
          ],
          [
            {
              text: `PRN: ${data[i].prnNo || '-'}`,
            },
            {
              text: [
                {
                    text: 'Gender:'
                },
                {
                    text: ` ${data[i].gender || "-"}`,
                    bold: true,
                }
              ],
            },
            {
              text: [
                {
                    text: 'Phy. Challenged:'
                },
                {
                    text: ` ${data[i].physicallyChallenged || '-'}`,
                    bold: true,
                }
              ],
            },
            {
              text: [
                {
                    text: 'Medium:'
                },
                {
                    text: ` ${data[i].medium || 'English'}`,
                    bold: true,
                }
              ],
            },
            {
                text: ''
            }
          ],
        ],
    };

    const table4 = {
        widths: [19, 60, 131, 30, 35, 65, 65, 95],
        // headerRows: 1, // Repeats the main header row at the top of each page
        body: [
          // Add semester-specific headers and data
          ...data[i].semesters.flatMap((semester: IHallticketSemesters, semesterIndex: number) => [
            // Semester-specific header row
            [
                      {
                        text: [
                          {
                              text: `${semester.examName}`,
                              bold: true,
                          },
                        ],
                        colSpan:4,
                        border: [true, true, true, true],
                        margin: [0, 0, 0, 0],
                      },
                      {},{},{},
                      {
                        text:[
                          {
                              text: 'Division:'
                          },
                          {
                              text: ` ${data[i].division || " "}, `,
                              bold: true,
                          },
                          {
                              text: 'RollNo:'
                          },
                          {
                              text: ` ${data[i].rollNumber || " "}`,
                              bold: true,
                          }
                        ],
                        colSpan:4
                      },
                      {},{},{}
                    ],
                    [
                      {
                        text: [
                          {
                              text: 'Seat Number:'
                          },
                          {
                              text: ` ${data[i].seatNumber || "-"}`,
                              bold: true,
                          }
                        ],
                        colSpan:4
                      },
                      {},{},{},
                      {
                          text:  [
                              {
                                  text: 'Exam Center:'
                              },
                              {
                                  text: ` ${data[i].examCenter || "-"}`,
                                  bold: true,
                              },
                            ],
                            colSpan:4
                      },
                      {},{},{},
                    ],
            // Repeat the main headers for the semester
            [
              { text: "Sr. No.", alignment: "center", bold: true, border: [true, true, true, true] },
              { text: "Paper Code", alignment: "center", bold: true, border: [true, true, true, true] },
              { text: "Paper Name", alignment: "center", bold: true, border: [true, true, true, true] },
              { text: "Subject Type", alignment: "center", bold: true, border: [true, true, true, true] },
              { text: "Assessment", alignment: "center", bold: true, border: [true, true, true, true] },
              { text: "Date", alignment: "center", bold: true, border: [true, true, true, true] },
              { text: "Time", alignment: "center", bold: true, border: [true, true, true, true] },
              { text: "Jr. Supervisor's Sign", alignment: "center", bold: true, border: [true, true, true, true] }
            ],
            // Subject rows for the semester
            ...semester.subjects.map((subject: any, subjectIndex: number) => [
              {
                text: subjectIndex + 1,
                alignment: "center",
                border: [true, false, true, true],
              },
              {
                text: subject.paperCode || '-',
                alignment: "center",
                border: [true, false, true, true],
              },
              {
                text: subject.paperName || '-',
                alignment: "left",
                border: [true, false, true, true],
              },
              {
                text: subject.subjectType || '-',
                alignment: "center",
                border: [true, false, true, true],
              },
              {
                text: subject.assessment || '-',
                alignment: "center",
                border: [true, false, true, true],
              },
              {
                text: subject.date || '-',
                alignment: "center",
                border: [true, false, true, true],
              },
              {
                text: subject.time || '-',
                alignment: "center",
                border: [true, false, true, true],
              },
              {
                text: '',
                alignment: "center",
                border: [true, false, true, true],
              },
            ])
          ])
        ]
      };

    function pdf() {
        const table = [
            {
                table: table1
            },
            {
                table: table2,
                fontSize: 7,
            },
            {
                table: table4,
                fontSize: 7,
            },
            {
                table: {
                    widths: [267, 109, 169],
                    headerRows: 1,
                    body: [
                      [
                        {
                            text: ``,
                            alignment: "center",
                            bold: true,
                            border: [true, false, true, true],
                        },
                        {
                          text: ``,
                          alignment: "center",
                          bold: true,
                          border: [true, false, true, true],
                        },
                        {
                          text:  `Seal & Sign of Principal`,
                          bold: true,
                          margin: [0, 40, 0, 0],
                          border: [true, false, true, true],
                          alignment: "center",
                        },
                      ],
                    ],
                  },
                fontSize: 7,
            },
            {
                table: {
                    widths: [563],
                    body: [
                     [
                        {
                            text: `Note. For All Students: Please Keep any ID Proof with you While Entering the Examination Hall.
                            Note. For All Students: Refer the Time-Table of Respective PATTERN for Date and Time of Exam Available on Website.
                            Note. UA-University Assessment, CA-College Assessment, ISE - In Semester Exam, ESE - End Semester Exam, ICA - Internal Continuous Assessment, POE - Practical Online Examination`,
                            border: [false, false, false, true],
                            bold: true
                        }
                     ]
                    ],
                  },
                  fontSize: 7,
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
export default solHallticket;
