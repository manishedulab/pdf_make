import { IResult } from "./types";
import { intToRoman } from "./utiles";

function generateFooter(data: any[]) {
  let table6;
  for (let i = 0; i < data.length; i++) {
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
            image: `${data[i].principalSign}`
              ? `${data[i].principalSign}`
              : `${process.cwd()}/public/collegeLogo/defaultLogo.png`,
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
            text: "Seal of the Univesity",
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
            text: `f : Female, F : Fail, AB:Absent, '' : Not Applicable, @ : O 2020, # : O 2020, $ : Carry Forword`,
            colSpan: 3,
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

function result(data: any[]) {
  const contentDefinition: any = {
    pageSize: {
      width: 912.982, //322.08mm
      height: 666.708, //235.20,
    },
    background: function (currentPage: any, pageSize: any) {
      // Constants for text, font size, and opacity
      const abcText = "HSNCU UNIVERSITY";
      const abcFontSize = 10;
      const abcOpacity = 0.05;
    
      // Grid settings
      const gridSpacing = 97; // Adjust this value based on your preference
      const columns = 9;
      const rows = 7
    
      // Array to store ABC elements
      const abcElements = [];
    
      // Loop to create ABC elements
      for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
          let xPosition = i * gridSpacing;
          let yPosition = j * gridSpacing;
    
          
          // Pushing ABC elements with different y positions
          for (let k = 0; k < 9; k++) {
           if(j === rows-1 && k > 4)
           {
            break;
           } else {
             abcElements.push({
               text: abcText,
               opacity: abcOpacity,
               fontSize: abcFontSize,
               absolutePosition: { x: xPosition + 20, y: yPosition + 18 + k * 10, },
             });
           }
            
          }
        }
      }
    
      // Canvas elements for border lines
      const borderLines = [
        { type: "line", x1: 5, y1: 9, x2: pageSize.width, y2: 9, lineWidth: 18, lineColor: "#BD9C47" }, // Up line
        { type: "line", x1: 9, y1: 0, x2: 9, y2: pageSize.height, lineWidth: 18, lineColor: "#BD9C47" }, // Left line
        { type: "line", x1: 5, y1: pageSize.height - 8, x2: pageSize.width, y2: pageSize.height - 8, lineWidth: 18, lineColor: "#BD9C47" }, // Bottom line
        { type: "line", x1: pageSize.width - 9, y1: 10, x2: pageSize.width - 9, y2: pageSize.height - 10, lineWidth: 18, lineColor: "#BD9C47" }, // Right line
      ];
    
      // Adding canvas elements and ABC elements to the final array
      const resultArray = [
        { canvas: borderLines },
        {
          image: data[0].universityLogo ? `${data[0].universityLogo}` : `${process.cwd()}/public/collegeLogo/HSNCULogo.png`,
          width: 200,
          alignment: "center",
          opacity: 0.2,
          absolutePosition: { x: 0, y: 180 },
        },
        { text: "NOT FOR PRINT", opacity: 0.2, fontSize: 35, absolutePosition: { x: 120, y: 200 } },
        ...abcElements,
      ];
    
      return resultArray;
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
      const table3 = {
        headerRows: 1,
        // widths: [ 59.38, 198.79, 38.211, 36.396, 47.99, 38.211, 36.396, 47.99, 38.211, 36.396, 47.99, 41.244, 48.472, 44.759, 40.762, 41.357],
        widths: [
          51.13, 190.13, 30.13, 28.13, 39.13, 30.13, 28.13, 39.13, 30.13, 28.13,
          39.13, 33.13, 40.13, 36.13, 32.13, 33.13,
        ],
        // widths: [80, 260, 44, 44, 50, 44, 44, 50, 44, 44, 50, 43, 40, 40, 35, 40],
        body: [
          ...data[i].subjects.map((value: any, index: number) => [
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
              text: value.internalObt || "-",
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
              text: value.externalObt || "-",
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
              text: value.totalObt || "-",
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
              text: data[i].sgpi,
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
          120, 120, 16, 20, 40, 30, 40, 50, 20, 40, 37.5, 37, 36.3, 36.13,
          32.13, 33.13,
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
              text: `Grade : ${data[i].totalGrade || "-"}`,
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
              text: `Total : ${data[i].outOfTotal || "-"}/${
                data[i].totalOfTotal || "-"
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
              text: data[i].sgpi || "-",
              alignment: "center",
              margin: [0, 5, 0, 0],
              border: [true, false, true, true],
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
          [
            {
              text: `PROGRAMME : ${data[i].courseName || "-"}`,
              colSpan: 2,
              border: [true, true, false, true],
              // alignment:'center',
              margin: [0, 5, 0, 0],
              // lineHeight: 1.5,
              bold: true,
            },
            {
              text: "",
            },
            {
              text: `SEMESTER : ${data[i].semName || "-"}`,
              alignment: "center",
              margin: [0, 5, 0, 0],
              border: [false, true, true, true],
              bold: true,
            },
            {
              text: `ACADEMIC YEAR : ${data[i].acadamicYear || "-"}`,
              alignment: "center",
              margin: [0, 5, 0, 0],
              bold: true,
            },
          ],
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
              text: "Month & Year of Examination",
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
              text: `${data[i].seatNumber || "-"}`,
              alignment: "center",
              margin: [0, 5, 0, 0],
            },
            {
              text: `${data[i].studentName || "-"}`,
              alignment: "center",
              margin: [0, 5, 0, 0],
            },
            {
              text: `${data[i].monthAndYear || "-"}`,
              alignment: "center",
              margin: [0, 5, 0, 0],
            },
          ],
        ],
      };

      const numSemesters = data[i].numberOfSem;
      let width = [150, 58];
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
                        text: `${
                          semester1Data.semName || "Sem-" + intToRoman(i + 1)
                        } : Credits Earned = ${
                          semester1Data.creditEarned || "-"
                        }`,
                        // alignment: "center",
                        bold: true,
                      },
                      {
                        text: `  SGPI = ${semester1Data.sgpi || "-"}`,
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
                      text: `${
                        semester2Data.semName || "Sem-" + intToRoman(i + 2)
                      }: Credits Earned = ${semester2Data.creditEarned || "-"}`,
                      bold: true,
                    },
                    {
                      text: `SGPI = ${semester2Data.sgpi || "-"}`,
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
          if(numSemesters < 7)
          {
          dataRow.push({ stack: [], border: [false, false, false, false] });
          }
          if(numSemesters > 6)
          {
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
            tableBody[0].slice(4, tableBody[0].length-1),
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
                  //   : `${process.cwd()}/public/collegeLogo/defaultLogo.png`,
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
                  text:''
                },
                {
                  image: data[i].studentPhoto
                    ? data[i].studentPhoto
                    : `${process.cwd()}/public/collegeLogo/123.png`,
                  // alignment: "right",
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
              51.13, 190.13, 30.13, 28.13, 39.13, 30.13, 28.13, 39.13, 30.13,
              28.13, 39.13, 33.13, 40.13, 36.13, 32.13, 33.13,
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
                  height: 65.53,
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
                  text: `SGPI= ΣCG/\nΣC`,
                  alignment: "center",
                  bold: true,
                  rowSpan: 2,
                  margin: [0, 5, 0, 0],
                },
              ],
              [
                "", //margin: [10, 2, 0, 0],
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
          fontSize: 9,
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
