import data from "./MOCK_DATA.json";

function marks() {
  const table = [
    [
      {
        text: "GUJARAT UNIVERSITY",
        fontSize: 20,
        alignment: "center",
        lineHeight: 1.3,
      },
      {
        text: "STATEMENT OF MARKS OBTAINED IN EACH SUBJECT AT THE",
        // fontSize:20,
        alignment: "center",
        lineHeight: 1.2,
      },
      {
        text: "Bachelor of Interior Design, Semester-1 Examination-JUL-2021",
        fontSize: 15,
        alignment: "center",
        bold: true,
        lineHeight: 1.2,
      },
    ],
    [
      {
        table: {
          widths: [320, 40, 110, 110, 110, 110, "*", "*"],
          headerRows: 1,
          body: [
            [
              {
                text: `Subject Name`,
                alignment: "center",
                bold: true,
                margin: [0, 15, 0, 0],
              },
              {
                margin: [0, 5, 0, 0],
                text: [
                  {
                    text: `Sub`,
                    valign: "bottom",
                    // lineHeight: 2.5,
                    alignment: "center",
                    bold: true,
                  },
                  "\n",
                  {
                    text: `Type`,
                    valign: "bottom",
                    // lineHeight: 2.5,
                    alignment: "center",
                    bold: true,
                  },
                ],
              },
              {
                margin: [0, 5, 0, 0],
                text: [
                  {
                    text: `Written`,
                    alignment: "center",
                    verticalAlignment: "bottom",
                    bold: true,
                    lineHeight:1.2
                  },
                  "\n",
                  {
                    text: ` Max.\tMin.\tObt `,
                    alignment: "center",
                    verticalAlignment: "bottom",
                    bold: true,
                  },
                ],
              },
              {
                margin: [0, 5, 0, 0],
                text: [
                  {
                    text: `Sessional`,
                    alignment: "center",
                    verticalAlignment: "bottom",
                    bold: true,
                    lineHeight:1.2
                  },
                  "\n",
                  {
                    text: ` Max.\tMin.\tObt `,
                    alignment: "center",
                    verticalAlignment: "bottom",
                    bold: true,
                    lineHeight:1.2
                  },
                ],
              },
              {
                margin: [0, 5, 0, 0],
                text: [
                  {
                    text: `Practical`,
                    alignment: "center",
                    verticalAlignment: "bottom",
                    bold: true,
                    lineHeight:1.2
                  },
                  "\n",
                  {
                    text: ` Max.\tMin.\tObt `,
                    alignment: "center",
                    verticalAlignment: "bottom",
                    bold: true,
                  },
                ],
              },
              {
                margin: [0, 5, 0, 0],
                text: [
                  {
                    text: `Termwork`,
                    alignment: "center",
                    verticalAlignment: "bottom",
                    bold: true,
                    lineHeight:1.2
                  },
                  "\n",
                  {
                    text: ` Max.\tMin.\tObt `,
                    alignment: "center",
                    verticalAlignment: "bottom",
                    bold: true,
                  },
                ],
              },
              {
                margin: [0, 5, 0, 0],
                text: [
                  {
                    text: `Total`,
                    alignment: "center",
                    verticalAlignment: "bottom",
                    bold: true,
                    lineHeight:1.2
                  },
                  "\n",
                  {
                    text: ` Max.\t\tObt `,
                    alignment: "center",
                    verticalAlignment: "bottom",
                    bold: true,
                  },
                ],
              },
              {
                text: `dgfb`,
                alignment: "center",
                bold: true,
              },
            ],
          ],
        },
      },
    ],
    [
        {
            table: {
                widths: [90,"*",120,"*","*","*",],
                headerRows: 1,
                body: [
                    [
                        {
                            text:"Seat No:10001",
                            bold:true,
                        },
                        {
                            text:"Name:SONI ROHAN ALPESHKUMAR",
                            bold:true,
                            colSpan:2
                        },
                        {
                            text:""
                        },
                        {
                            text:"Enroll./Reg No:201616400024",
                            bold:true,
                        },
                        {
                            text:"College: 647-VADTARCH ",
                            bold:true,
                        },
                        {
                            text:"Center:22 - KALOL(GENDHINAGAR)",
                            bold:true,
                        },
                    ]
                ]
            },
            layout: "noBorders",
        }
    ],
    // [
    //     {
    //         table:"gr"
    //     }
    // ]
  ];
  return table;
}

const StatementOfMark: any = {
  pageSize: {
    width: 1100,
    height: 650,
  },
  pageMargins: [20, 10, 20, 10],
  content: marks(),
};

//   for (let i = 0; i <1; i++) {
//     const mobile = data[i]["mobile_no"]
//     const id = data[i]["id"]
//     contentDefinition.content.push(JSON.parse(JSON.stringify(pdf())))
//   }

export default StatementOfMark;
