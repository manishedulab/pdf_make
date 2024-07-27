import { PDF } from "./constant";
import { IMaksRemarksType, IResult, IsubjectDetails } from "./types";
import { intToRoman } from "./utiles";



function generateFooter(data: IResult[]) {
  let table6;
  for (let i = 0; i < data.length; i++) {
    let principalSignature;
  if (data[i].collegeCode === 8) {
    principalSignature = `${process.cwd()}/public/collegeLogo/defaultLogo.png`
  } else {
    principalSignature = `${data[i].principalSign ? data[i].principalSign : `${process.cwd()}/public/collegeLogo/defaultLogo.png`}`;
  }
    table6 = {
      widths: [185, 135, 150, 193, 160],
      headerRows: 1,
      body: [
        [
          {
            text: `Place : ${data[i].place}`,
            bold: true,
            margin: [0, -80.69, 0, 0],
          },
          "",
          "",
          {
            image: principalSignature,
            width: 93,
            height: 20,
            alignment: "center",
            margin: [10, -87, 0, 0],
          },
          {
            image: `${data[i].directorSign}`
              ? `${data[i].directorSign}`
              : `${process.cwd()}/public/collegeLogo/defaultLogo.png`,
            width: 93,
            height: 20,
            alignment: "center",
            margin: [0, -87, 0, 0],
          },
        ],
        [
          {
            text: `Date : ${data[i].date}`,
            bold: true,
            margin: [0, -65.69, 0, 0],
          },
          {
            text: "Seal of the University",
            bold: true,
            margin: [0, -65.69, 0, 0],
          },
          {
            text: "Checked By",
            bold: true,
            alignment: "center",
            margin: [0, -65.69, 0, 0],
          },
          {
            text: "Principal/Director/Dean",
            bold: true,
            alignment: "center",
            margin: [0, -65.69, 0, 0],
          },
          {
            text: "Director BOEE",
            bold: true,
            alignment: "center",
            margin: [0, -65.69, 0, 0],
          },
        ],
        [
          {
            text: `/ : Female, F : Fail, AB:Absent, '' : Not Applicable, @ : O.2020/04/(e), O.2020/04/(f), O.2020/04/(d), * : O.2020/04/(g), ~ : A.C/4.29/11.05.2017`,
            colSpan: 4,
            fontSize: 9,
            margin: [0, -50, 0, 0],
          },
          "",
          "",
          "",
          "",
        ],
      ],
    };
  }
  return table6;
}

function result(data: IResult[]) {
  // console.log(data[0]);
  const contentDefinition: any = {
    pageSize: {
      width: 912.982, //322.08mm
      height: 666.708, //235.20,
    },
    pageMargins: [0, 0, 0, 0],
    content: [],
    footer: {
      margin: [31.94, -22, 20, 10],
      table: generateFooter(data), // Call generateTable6 with the data array
      fontSize: 10,
      layout: "noBorders", // Optional: Use this to remove footer table borders
    },
  };

  for (let i = 0; i < data.length; i++) {
    function pdf() {
      const numRows = data[i].subjects.length;
      const sgpi = data[i].sgpi === '0.00' ? '-' : data[i].sgpi;
      const NSSSGPI = data[i].NSSSGPI === '0.00' ? '-' : data[i].NSSSGPI;

      const table3 = {
        headerRows: 1,
        // widths: [ 59.38, 198.79, 38.211, 36.396, 47.99, 38.211, 36.396, 47.99, 38.211, 36.396, 47.99, 41.244, 48.472, 44.759, 40.762, 41.357],
        widths: [
          45, 180, 35, 30.13, 28.13, 37, 30.13, 28.13, 37, 30.13, 28.13,
              35, 30, 33, 30, 32.13, 30,
        ],
        // widths: [80, 260, 44, 44, 50, 44, 44, 50, 44, 44, 50, 43, 40, 40, 35, 40],
        body: [
          ...data[i].subjects.map((value: IsubjectDetails, index: number) => [
            {
              text: value.subjectCode || "-",
              margin: [0, 1, 0, 1],
              border: [true, false, true, true],
              alignment: "center",
            },
            {
              text: value.subjectName || "-",
              margin: [0, 1, 0, 1],
              border: [true, false, true, true],
              //   alignment: "center",
            },
            {
              text: value.passingMonthYear || "-",
              margin: [0, 1, 0, 1],
              border: [true, false, true, true],
                alignment: "center",
            },
            {
              text: value.internalMax || "-",
              margin: [0, 1, 0, 1],
              border: [true, false, true, true],
              alignment: "center",
            },
            {
              text: value.internalMin || "-",
              margin: [0, 1, 0, 1],
              border: [true, false, true, true],
              alignment: "center",
            },
            {
              text: value.subjectRemarkInternal === IMaksRemarksType.PRESENT && value.internalObt === 0 ? 0 : (value.internalObt || "-"),
              // text: (value.internalObt === 0 ? 0 : value.internalObt) || "-",
              margin: [0, 1, 0, 1],
              border: [true, false, true, true],
              alignment: "center",
            },
            {
              text: value.externalMax || "-",
              margin: [0, 1, 0, 1],
              border: [true, false, true, true],
              alignment: "center",
            },
            {
              text: value.externalMin || "-",
              margin: [0, 1, 0, 1],
              border: [true, false, true, true],
              alignment: "center",
            },
            {
              text: value.subjectRemarkExternal === IMaksRemarksType.PRESENT && value.externalObt === 0 ? 0 : (value.externalObt || "-"),
              // text: value.externalObt === 0 ? 0 :( value.externalObt|| "-" ),
              margin: [0, 1, 0, 1],
              border: [true, false, true, true],
              alignment: "center",
            },
            {
              text: value.totalMax || "-",
              margin: [0, 1, 0, 1],
              border: [true, false, true, true],
              alignment: "center",
            },
            {
              text: value.totalMin || "-",
              margin: [0, 1, 0, 1],
              border: [true, false, true, true],
              alignment: "center",
            },
            {
              text: (value.externalObt == 'AB' && !value.internalObt) ? 'AB' : (value.internalObt == 'AB' && !value.externalObt) ? 'AB' : (value.internalObt == 'AB' && value.externalObt == 'AB') ? 'AB' : value.totalObt || "-",
              // text: value.totalObt || "-",
              margin: [0, 1, 0, 1],
              border: [true, false, true, true],
              alignment: "center",
            },
            {
              text: value.grade || "-",
              alignment: "center",
              margin: [0, 1, 0, 1],
              border: [true, false, true, true],
            },
            {
              text: value.gradePoint || "-",
              alignment: "center",
              margin: [0, 1, 0, 1],
              border: [true, false, true, true],
            },
            {
              text: value.creditPoint || "-",
              alignment: "center",
              margin: [0, 1, 0, 1],
              border: [true, false, true, true],
            },
            {
              text: value.cg || "-",
              alignment: "center",
              margin: [0, 1, 0, 1],
              border: [true, false, true, true],
            },
            {
              text: sgpi || "-",
              alignment: "center",
              rowSpan: numRows,
              bold: true,
              margin: [0, numRows * 10, 0, 0],
              border: [true, false, true, true],
            },
          ]),
        ],
      };

      const table4 = {
        headerRows: 1,
        widths: [
          120, 120, 39.5, 20, 40, 30, 40, 50, 20, 35.7, 37.5, 37, 26, 30, 32.13, 30,
        ],
        body: [
          [
            {
              text: `Remarks : ${data[i].result || "-"}`,
              margin: [0, 5, 0, 0],
              border: [true, false, true, true],
              // alignment: "center",
              bold: true,
            },
            {
              text: `Grade : ${data[i].totalGrade === "F" ? "FAIL/ATKT" : data[i].totalGrade || "-"}`,
              margin: [0, 5, 0, 0],
              border: [true, false, true, true],
              //   alignment: "center",
              colSpan: 7,
              bold: true,
            },
            {
              text: "",
              margin: [0, 7, 0, 0],
              border: [true, false, true, true],
              alignment: "center",
            },
            {
              text: "",
              margin: [0, 7, 0, 0],
              border: [true, false, true, true],
              alignment: "center",
            },
            {
              text: "",
              margin: [0, 7, 0, 0],
              border: [true, false, true, true],
              alignment: "center",
            },
            {
              text: "",
              margin: [0, 7, 0, 0],
              border: [true, false, true, true],
              alignment: "center",
            },
            {
              text: "",
              margin: [0, 7, 0, 0],
              border: [true, false, true, true],
              alignment: "center",
            },
            {
              text: "",
              margin: [0, 7, 0, 0],
              border: [true, false, true, true],
              alignment: "center",
            },
            {
              text: `Total : ${data[i].outOfTotal || "-"}/${data[i].totalOfTotal || "-"
                }`,
              margin: [0, 5, 0, 0],
              border: [true, false, true, true],
              alignment: "center",
              bold: true,
              colSpan: 3,
            },
            {
              text: "",
              // margin: [0, 7, 0, 0],
              border: [true, false, true, true],
              alignment: "center",
            },
            {
              text: "",
              // margin: [0, 7, 0, 0],
              border: [true, false, true, true],
              alignment: "center",
            },
            {
              text: " ",
              // margin: [0, 7, 0, 0],
              border: [true, false, true, true],
              alignment: "center",
              colSpan: 2,
            },
            {
              text: "",
              alignment: "center",
              // margin: [0, 7, 0, 0],
              border: [true, false, true, true],
            },
            {
              text: `ΣC=\n${data[i].totalCredit || "-"}`,
              alignment: "center",
              // margin: [0, 7, 0, 0],
              border: [true, false, true, true],
              bold: true,
            },
            {
              text: `ΣCG=\n${data[i].cg || "-"}`,
              alignment: "center",
              // margin: [0, 7, 0, 0],
              border: [true, false, true, true],
              bold: true,
            },

            {
              text: NSSSGPI || "-",
              alignment: "center",
              margin: [0, 5, 0, 0],
              border: [true, false, true, true],
              bold: true,
            },
          ],
        ],
      };

      const table10 = {
        widths: [133, 282, 185, 216],
        // widths: ["*", "*", "*", "*"],
        headerRows: 1,
        body: [
          [
            {
              text: `PROGRAMME : ${data[i].courseName || "-"}`,
              colSpan: 2,
              border: [true, true, false, false],
              // alignment:'center',
              margin: [0, 5, 0, 0],
              // lineHeight: 1.5,
              bold: true,
            },
            {
              text: "",
              border: [false, false, false, false],
            },
            {
              text: `SEMESTER : ${data[i].semName || "-"}`,
              // alignment: "center",
              margin: [0, 5, 0, 0],
              border: [false, true, true, false],
              bold: true,
            },
            {
              text: `ACADEMIC YEAR : ${data[i].acadamicYear || "-"}`,
              alignment: "center",
              margin: [0, 5, 0, 0],
              border: [false, true, true, false],
              bold: true,
            },
          ],
        ],
      };


      const table2 = {
        widths: [133, 162, 305, 216],
        // widths: ["*", "*", "*", "*"],
        headerRows: 1,
        body: [
          // [
          //   {
          //     text: `PROGRAMME : ${data[i].courseName || "-"}`,
          //     colSpan: 2,
          //     border: [true, true, false, true],
          //     // alignment:'center',
          //     margin: [0, 5, 0, 0],
          //     // lineHeight: 1.5,
          //     bold: true,
          //   },
          //   {
          //     text: "",
          //   },
          //   {
          //     text: `SEMESTER : ${data[i].semName || "-"}`,
          //     alignment: "center",
          //     margin: [0, 5, 0, 0],
          //     border: [false, true, true, true],
          //     bold: true,
          //   },
          //   {
          //     text: `ACADEMIC YEAR : ${data[i].acadamicYear || "-"}`,
          //     alignment: "center",
          //     margin: [0, 5, 0, 0],
          //     bold: true,
          //   },
          // ],
          [
            {
              text: "PRN",
              alignment: "center",
              bold: true,
            },
            {
              text: "Examination Seat No.",
              alignment: "center",
              bold: true,
            },
            {
              text: "Name of the Student",
              alignment: "center",
              bold: true,
            },
            {
              text: "ABC Number",
              alignment: "center",
              bold: true,
            },
          ],
          [
            {
              text: `${data[i].prnNo || "-"}`,
              alignment: "center",
              margin: [0, 5, 0, 0],
              // lineHeight:1.2,
            },
            {
              // text: `${data[i].seatNumber || "-"}`,
              text: `${data[i].rollNo || "-"}`,
              alignment: "center",
              margin: [0, 5, 0, 0],
            },
            {
              text: `${data[i].studentName || "-"}`,
              alignment: "center",
              margin: [0, 5, 0, 0],
            },
            {
              text: `${data[i].abcNo || "-"}`,
              alignment: "center",
              margin: [0, 5, 0, 0],
            },
          ],
        ],
      };

      const numSemesters = data[i].numberOfSem;

      let width = [140, 68];
      if (numSemesters === 4 || numSemesters > 6) {
        width = [(72 * 275) / 100, (28 * 275) / 100];
      }
      // Initialize the table body
      const tableBody = [];
      const data2 = data[i];

      // Convert data2 to an array if it's not already an array
      const dataArray = Array.isArray(data2) ? data2 : [data2];
      // Create data rows for each student
      for (const result of dataArray) {
        const dataRow: any = [];
        let rowIndex = 0;
        const isNumSemestersEven = numSemesters % 2 === 0;
        const isNumSemestersGreaterThan6 = numSemesters > 6;
        for (let i = 0; i < numSemesters; i += 2) {
          const semester1Data = result.credits[i] || {};
          const semester2Data = result.credits[i + 1] || {};

          dataRow.push({
            stack: [
              {
                table: {
                  widths: width,
                  body: [
                    [
                      {
                        text: `${semester1Data.semName || "Sem-" + intToRoman(i + 1)
                          } : Credits Earned = ${semester1Data.creditEarned || "-"
                          }`,
                        // alignment: "center",
                        bold: true,
                      },
                      {
                        text: `  SGPA = ${semester1Data.sgpi == '0.00' ? '-' : semester1Data.sgpi || "-"}`,//
                        // alignment: "center",
                        bold: true,
                      },
                    ],
                  ],
                },
                layout: "noBorders",
              },
            ],
            border: [true, false, true, true],
          });
          if (isNumSemestersEven || i < numSemesters - 2) {
            dataRow[rowIndex].stack.push({
              table: {
                widths: width,
                body: [
                  [
                    {
                      text: `${semester2Data.semName || "Sem-" + intToRoman(i + 2)
                        }: Credits Earned = ${semester2Data.creditEarned || "-"}`,
                      bold: true,
                    },
                    {
                      text: `SGPA = ${semester2Data.sgpi == '0.00' ? '-' : semester2Data.sgpi || "-"}`,//
                      bold: true,
                    },
                  ],
                ],
              },
              layout: "noBorders",
            });
          }
          rowIndex++;
        }

        if (isNumSemestersGreaterThan6) {
          // Add the CGPA data for the student at the 4th position
          dataRow.splice(3, 0, {
            stack: [
              {
                text: [
                  {
                    text: `CGPA = ${result.cgpa || "-"}`,
                    // alignment: "center",
                    bold: true,
                    width: 200,
                  },
                  "\n",
                  {
                    text: `Final Grade = ${result.finalGrade || "-"}`,
                    // alignment: "center",
                    bold: true,
                    width: 200,
                  },
                ],
              },
            ],
            border: [true, false, true, true],
          });
        }
        if (isNumSemestersGreaterThan6 && numSemesters === 10) {
          // Add the CGPA data for the student at the 4th position
          dataRow.splice(6, 0, {
            stack: [
              {
                text: [
                  {
                    text: `CGPA = ${result.cgpa || "-"}`,
                    // alignment: "center",
                    bold: true,
                    width: 200,
                  },
                  "\n",
                  {
                    text: `Final Grade = ${result.finalGrade || "-"}`,
                    // alignment: "center",
                    bold: true,
                    width: 200,
                  },
                ],
              },
            ],
            border: [true, false, true, true],
          });
        }
        if (isNumSemestersGreaterThan6 && numSemesters === 8) {
          // Add the CGPA data for the student at the 4th position
          dataRow.splice(5, 0, {
            stack: [
              {
                text: [
                  {
                    text: `CGPA = ${result.cgpa || "-"}`,
                    // alignment: "center",
                    bold: true,
                    width: 200,
                  },
                  "\n",
                  {
                    text: `Final Grade = ${result.finalGrade || "-"}`,
                    // alignment: "center",
                    bold: true,
                    width: 200,
                  },
                ],
              },
            ],
            border: [true, false, true, true],
          });
        }
        if (!isNumSemestersGreaterThan6) {
          // Add the CGPA data for the student at the end for numSemesters being 2 or 4
          dataRow.push({
            stack: [
              {
                text: [
                  {
                    text: `CGPA = ${result.cgpa || "-"}`,
                    // alignment: "center",
                    bold: true,
                    lineHeight: 1.5,
                    width: 200,
                  },
                  "\n",
                  {
                    text: `Final Grade = ${result.finalGrade || "-"}`,
                    // alignment: "center",
                    bold: true,
                    width: 200,
                  },
                ],
              },
            ],
            border: [true, false, true, true],
          });
        }
        let numBlanks = 4 - (dataRow.length % 4);

        // Special case for numSemesters being 4 or 2
        if (
          (numSemesters === 4 || numSemesters === 3) &&
          dataRow.length === 3
        ) {
          numBlanks = 5;
        }
        if (
          (numSemesters === 2 || numSemesters === 1) &&
          dataRow.length === 2
        ) {
          numBlanks = 6;
        }

        // Add the necessary blank objects to dataRow
        for (let i = 0; i < numBlanks; i++) {
          if (numSemesters < 7) {
            dataRow.push({ stack: [], border: [false, false, false, false] });
          }
          if (numSemesters > 6) {
            dataRow.push({ stack: [], border: [false, false, true, true] });
          }
        }


        tableBody.push(dataRow);
      }
      const columnWidth = 200;
      const numColumns = numSemesters * 3; // Calculate the total number of columns
      const widths = Array(numColumns).fill(columnWidth);
      let table5;
      if (numSemesters === 1) {
        table5 = {
          widths: widths,
          headerRows: 1,
          body: [
            tableBody[0].slice(0, numColumns), // Use numColumns to slice the correct number of columns
          ],
        };
      } else if (numSemesters === 4) {
        table5 = {
          widths: [275, 275, 275],
          headerRows: 1,
          body: [
            tableBody[0].slice(0, 3),
            // tableBody[0].slice(4, tableBody[0].length),
          ],
        };
      } else if (numSemesters > 6 && numSemesters < 11) {
        table5 = {
          widths: [275, 275, 275],
          headerRows: 1,
          body: [
            tableBody[0].slice(0, 3),
            tableBody[0].slice(4, tableBody[0].length - 1),
          ],
        };
      } else {
        table5 = {
          widths: [224, 224, 224, 144],
          headerRows: 1,
          body: [
            tableBody[0].slice(0, 4),
            tableBody[0].slice(4, tableBody[0].length),
          ],
        };
      }

      const table = [
        {
          table: {
            // widths: [80, 80, 590, 70],
            widths: [230, 500, 150],
            headerRows: 1,
            body: [
              [
                {
                  // D:\pdf\pdfmake gu\img\KCC_Mumbai_logo.svg.png
                  // image: data[i].collegeLogo
                  //   ? data[i].collegeLogo
                  //   : PDF.defaultPhoto,
                  // margin: [148.42, 28.4, 0, 0],
                  // // alignment: "right",
                  // width: 76,
                  // height: 85.03,
                  text: ''
                },
                {
                  // text: [
                  // {
                  //   text: "HSNC UNIVERSITY, MUMBAI",
                  //   fontSize: 20,
                  //   alignment: "center",
                  //   bold: true,
                  //   color: "#1E6332",
                  //   margin: [0, 50, 0, 0],
                  // },
                  // "\n",
                  // {
                  //   text: "A STATE CLUSTER UNIVERSITY",
                  //   //   fontSize: 14,
                  //   color: "#BD9C47",
                  //   alignment: "center",
                  //   bold: true,
                  // },
                  // "\n",
                  // {
                  //   text: "47, Dr. R. G. Thadani Marg, Worli, Mumbai – 400 018.",
                  //   alignment: "center",
                  //   fontSize: 8,
                  //   bold: true,
                  //   lineHeight: 1.5,
                  // },
                  // "\n",
                  // {
                  // text: data[i].collegeName || "-",
                  // //   fontSize: 14,
                  // color: "#344B9E",
                  // alignment: "center",
                  // bold: true,
                  // },
                  // "\n",
                  // {
                  //   text: "A CONSTITUENT COLLEGE OF HSNC UNIVERSITY, MUMBAI",
                  //   fontSize: 8,
                  //   alignment: "center",
                  //   bold: true,
                  //   margin: [0, 0, 0, 0],
                  // },
                  // ],
                  // margin: [-100, 72.7, 0, 0],
                  text: ''
                },
                {
                  image: data[i].studentPhoto
                    ? data[i].studentPhoto
                    : PDF.defaultPhoto,
                  width: 62.36,
                  height: 59.52,
                  margin: [54, 29.5, 36.99, 3],
                  // fillColor: 'red'
                  // absolutePosition: { x: 0, y: 30 },
                },
              ],
            ],
          },
          layout: "noBorders",
        },
        {
          margin: [29.87, 0, 30.5, 0],
          table: table10,
          fontSize: 10,
          //   layout:{  hLineWidth: function(i:number, node:any) { return (i === 0 || i === node.table.body.length) ? 10 : 1;},
          //   vLineWidth: function(i:number, node:any) { return (i === 0 || i === node.table.widths.length) ? 10 : 1; },
          //   hLineColor: function(i:number, node:any) {return (i === 0 || i === node.table.body.length) ? 'black' : 'gray'; },
          //   vLineColor: function(i:number, node:any) { return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';}
          // }
          // layout: "noBorders",
        },
        {
          margin: [29.87, 0, 30.5, 0],
          table: table2,
          fontSize: 10,
          //   layout:{  hLineWidth: function(i:number, node:any) { return (i === 0 || i === node.table.body.length) ? 10 : 1;},
          //   vLineWidth: function(i:number, node:any) { return (i === 0 || i === node.table.widths.length) ? 10 : 1; },
          //   hLineColor: function(i:number, node:any) {return (i === 0 || i === node.table.body.length) ? 'black' : 'gray'; },
          //   vLineColor: function(i:number, node:any) { return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';}
          // }
          // layout: "noBorders",
        },
        {
          margin: [29.87, 0, 30.5, 0],
          table: {
            widths: [843],
            headerRows: 1,
            body: [
              [
                {
                  text: "",
                  border: [true, false, true, false],
                },
              ],
            ],
          },
        },
        {
          margin: [29.87, 0, 30.5, 0],
          table: {
            // widths: [ 59.38, 198.79, 38.211, 36.396, 47.99, 38.211, 36.396, 47.99, 38.211, 36.396, 47.99, 41.244, 48.472, 44.759, 40.762, 41.357],
            widths: [
              45, 180, 35, 30.13, 28.13, 37, 30.13, 28.13, 37, 30.13, 28.13,
              35, 30, 33, 30, 32.13, 30,
            ],
            // widths: [80, 260, 44, 44, 50, 44, 44, 50, 44, 44, 50, 43, 40, 40, 35, 40],
            headerRows: 2,
            // heights: [65.53, '*'],
            body: [
              [
                {
                  text: `Subject Code`,
                  alignment: "center",
                  bold: true,
                  margin: [0, 5, 0, 0],

                  rowSpan: 2,
                },
                {
                  text: `Subject Name`,
                  alignment: "center",
                  bold: true,
                  margin: [0, 5, 0, 0],
                  rowSpan: 2,
                },
                {
                  text: `Applied in
                  MM/YY`,
                  alignment: "center",
                  bold: true,
                  margin: [0, 5, 0, 0],
                  rowSpan: 2,
                },
                {
                  text: `Internal Examination`,
                  alignment: "center",
                  bold: true,
                  //   lineHeight: 1.2,
                  colSpan: 3,
                  margin: [0, 5, 0, 0],
                },
                {
                  text: "",
                },
                {
                  text: "",
                },
                {
                  text: `Semester End Examination`,
                  alignment: "center",
                  bold: true,
                  colSpan: 3,
                  //   lineHeight: 1.2,
                  margin: [0, 5, 0, 0],
                },
                {
                  text: "",
                },
                {
                  text: "",
                },
                {
                  text: `Total Marks`,
                  alignment: "center",
                  colSpan: 3,
                  bold: true,
                  //   lineHeight: 1.2,
                  margin: [0, 5, 0, 0],
                },
                {
                  text: "",
                },
                {
                  text: "",
                },
                {
                  text: `Grade`,
                  alignment: "center",
                  verticalAlignment: "bottom",
                  bold: true,
                  rowSpan: 2,
                  // lineHeight: 3,
                  margin: [0, 5, 0, 0],
                },
                {
                  text: `Grade Point\n(G)`,
                  alignment: "center",
                  verticalAlignment: "bottom",
                  bold: true,
                  rowSpan: 2,
                  //   lineHeight: 1.2,
                  margin: [0, 5, 0, 0],
                },
                {
                  text: `Credit Point\n(C)`,
                  alignment: "center",
                  verticalAlignment: "bottom",
                  bold: true,
                  rowSpan: 2,
                  //   lineHeight: 1.2,
                  margin: [0, 5, 0, 0],
                },

                {
                  text: `CG =  \n C*G`,
                  alignment: "center",
                  bold: true,
                  rowSpan: 2,
                  margin: [0, 5, 0, 0],
                },
                {
                  text: `SGPA= ΣCG/\nΣC`,
                  alignment: "center",
                  bold: true,
                  rowSpan: 2,
                  margin: [0, 5, 0, 0],
                },
              ],
              [
                "", //margin: [10, 2, 0, 0],
                "",
                "",
                { text: "Max Marks", bold: true, alignment: "center" },
                { text: "Min Marks", bold: true, alignment: "center" },
                { text: "Marks Obtained", bold: true, alignment: "center" },
                { text: "Max Marks", bold: true, alignment: "center" },
                { text: "Min Marks", bold: true, alignment: "center" },
                { text: "Marks Obtained", bold: true, alignment: "center" },
                { text: "Max Marks", bold: true, alignment: "center" },
                { text: "Min Marks", bold: true, alignment: "center" },
                { text: "Marks Obtained", bold: true, alignment: "center" },
                "",
                "",
                "",
                "",
                "",
              ],
            ],
          },
          fontSize: 8,
          // layout: "noBorders",
        },
        {
          margin: [29.87, 0, 30.5, 0],
          table: table3,
          fontSize: 8,
          // layout: "noBorders",
        },
        {
          margin: [29.87, 0, 30.5, 0],
          table: table4,
          fontSize: 9,
        },
        {
          table: table5,
          margin: [29.87, 0, 30.5, 0],
          fontSize: 10,
        },
        // {
        //     table: table6,
        //     fontSize: 10,
        //     layout: "noBorders",
        // },
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
export default result;
