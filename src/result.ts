import { IResult, ISubjectTypePdf, IsubjectDetails } from "./types";
import { intToRoman } from "./utiles";

function generateFooter(data: IResult[]) {
  // Define the table6 content
  let table6;

  for (let i = 0; i < data.length; i++) {
    table6 = {
      widths: [130, 130, 120, 120, 137, 137, 137],
      headerRows: 1,
      body: [
        [
          { text: `Place : ${data[i].place}`, bold: true },
          "",
          "",
          {
            image: data[i].universityLogo
              ? `${data[i].universityLogo}`
              : `${process.cwd()}/img/xyz.png`,
            rowSpan: 3,
            width: 50,
            alignment: "",
          },
          {
            image: `${data[i].principalSign}`,
            width: 80,
            height: 20,
            alignment: "center",
          },
          {
            image: `${data[i].directorSign}`,
            width: 80,
            height: 20,
            alignment: "center",
          },
        ],
        [
          { text: `Date : ${data[i].date}`, bold: true },
          { text: "Seal of the Univesity", bold: true },
          { text: "Checked By", bold: true, alignment: "center" },
          "",
          { text: "Principal/Director/Dean", bold: true },
          { text: "Director BOEE", bold: true, alignment: "center" },
        ],
        [
          {
            text: `f : Female, F : Fail, AB:Absent, '' : Not Applicable, @ : O 2020, # : O 2020, $ : Carry Forword`,
            colSpan: 3,
            fontSize: 9,
          },
          "",
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

type PageSize = {
  width: number;
  height: number;
};

function result(data: IResult[]) {
  const contentDefinition: any = {
    pageSize: {
      width: 900,
      height: 600,
    },
    background: function (currentPage: number, pageSize: PageSize) {
      return [
        {
          canvas: [
            {
              type: "line",
              x1: 5,
              y1: 10,
              x2: pageSize.width - 5,
              y2: 10,
              lineWidth: 10,
              lineColor: "#BD9C47",
            }, // Up line
            {
              type: "line",
              x1: 10,
              y1: 10,
              x2: 10,
              y2: pageSize.height - 10,
              lineWidth: 10,
              lineColor: "#BD9C47",
            }, // Left line
            {
              type: "line",
              x1: 5,
              y1: pageSize.height - 10,
              x2: pageSize.width - 5,
              y2: pageSize.height - 10,
              lineWidth: 10,
              lineColor: "#BD9C47",
            }, // Bottom line
            {
              type: "line",
              x1: pageSize.width - 10,
              y1: 10,
              x2: pageSize.width - 10,
              y2: pageSize.height - 10,
              lineWidth: 10,
              lineColor: "#BD9C47",
            }, // Right line
          ],
        },
        {
          image: "img/Hsnc-university-logo.png",
          width: 200,
          alignment: "center",
          // margin: [0, 180, 0, 0],
          opacity: 0.2,
          absolutePosition: { x: 0, y: 180 },
        },
        {
          text: "NOT FOR PRINT",
          opacity: 0.2,
          fontSize: 35,
          absolutePosition: { x: 120, y: 150 },
          // absolutePosition: { x1: 120, y1: 150, x2:150, y2:40 },
        },
      ];
    },
    pageMargins: [20, 20, 20, 20],
    content: [],
    footer: {
      margin: [20, -60, 20, 10],
      table: generateFooter(data), // Call generateTable6 with the data array
      layout: "noBorders", // Optional: Use this to remove footer table borders
    },
  };

  for (let i = 0; i < data.length; i++) {
    function pdf() {
      const numRows = data[i].subjects.length;
      const table3 = {
        headerRows: 1,
        widths: [
          50, 180, 35, 35, 42, 35, 35, 42, 35, 35, 41, 35, 30, 30, 25, 30,
        ],
        body: [
          ...data[i].subjects.map((value: IsubjectDetails, index: number) => [
            {
              text: value.subjectCode || "-",
              margin: [0, 7, 0, 0],
              border: [true, false, true, true],
              alignment: "center",
            },
            {
              text: value.subjectName || "-",
              margin: [0, 7, 0, 0],
              border: [true, false, true, true],
              //   alignment: "center",
            },
            {
              text: value.internalMax || "-",
              margin: [0, 7, 0, 0],
              border: [true, false, true, true],
              alignment: "center",
            },
            {
              text: value.internalMin || "-",
              margin: [0, 7, 0, 0],
              border: [true, false, true, true],
              alignment: "center",
            },
            {
              text: value.internalObt || "-",
              margin: [0, 7, 0, 0],
              border: [true, false, true, true],
              alignment: "center",
            },
            {
              text: value.externalMax || "-",
              margin: [0, 7, 0, 0],
              border: [true, false, true, true],
              alignment: "center",
            },
            {
              text: value.externalMin || "-",
              margin: [0, 7, 0, 0],
              border: [true, false, true, true],
              alignment: "center",
            },
            {
              text: value.externalObt || "-",
              margin: [0, 7, 0, 0],
              border: [true, false, true, true],
              alignment: "center",
            },
            {
              text: value.totalMax || "-",
              margin: [0, 7, 0, 0],
              border: [true, false, true, true],
              alignment: "center",
            },
            {
              text: value.totalMin || "-",
              margin: [0, 7, 0, 0],
              border: [true, false, true, true],
              alignment: "center",
            },
            {
              text: value.totalObt || "-",
              margin: [0, 7, 0, 0],
              border: [true, false, true, true],
              alignment: "center",
            },
            {
              text: value.grade || "-",
              alignment: "center",
              margin: [0, 7, 0, 0],
              border: [true, false, true, true],
            },
            {
              text: value.gradePoint || "-",
              alignment: "center",
              margin: [0, 7, 0, 0],
              border: [true, false, true, true],
            },
            {
              text: value.creditPoint || "-",
              alignment: "center",
              margin: [0, 7, 0, 0],
              border: [true, false, true, true],
            },
            {
              text: value.cg || "-",
              alignment: "center",
              margin: [0, 7, 0, 0],
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
          130, 100, 35, 35, 42, 35, 35, 42, 35, 35, 41, 35, 30, 30, 25, 30,
        ],
        body: [
          [
            {
              text: `Remarks : ${data[i].result || "-"}`,
              margin: [0, 7, 0, 0],
              border: [true, false, true, true],
              alignment: "center",
              bold: true,
            },
            {
              text: `Grade : ${data[i].totalGrade || "-"}`,
              margin: [0, 7, 0, 0],
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
              margin: [0, 7, 0, 0],
              border: [true, false, true, true],
              alignment: "center",
              bold: true,
              colSpan: 3,
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
              text: " ",
              margin: [0, 7, 0, 0],
              border: [true, false, true, true],
              alignment: "center",
              colSpan: 2,
            },
            {
              text: "",
              alignment: "center",
              margin: [0, 7, 0, 0],
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
              margin: [0, 7, 0, 0],
              border: [true, false, true, true],
              bold: true,
            },
          ],
        ],
      };

      const table2 = {
        widths: [180, 180, 283, 180],
        headerRows: 1,
        body: [
          [
            {
              text: `PROGRAMME : ${data[i].courseName || "-"}`,
              colSpan: 2,
              border: [true, true, false, true],
              // alignment:'center',
              margin: [0, 2, 0, 0],
              lineHeight: 2,
              bold: true,
            },
            {
              text: "",
            },
            {
              text: `SEMESTER : ${data[i].semName || "-"}`,
              alignment: "center",
              margin: [0, 2, 0, 0],
              border: [false, true, true, true],
              bold: true,
            },
            {
              text: `ACADEMIC YEAR : ${data[i].acadamicYear || "-"}`,
              alignment: "center",
              margin: [0, 2, 0, 0],
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
            },
            {
              text: `${data[i].seatNumber || "-"}`,
              alignment: "center",
            },
            {
              text: `${data[i].studentName || "-"}`,
              alignment: "center",
            },
            {
              text: `${data[i].monthAndYear || "-"}`,
              alignment: "center",
            },
          ],
        ],
      };

      const numSemesters = data[i].numberOfSem;
      // const numSemesters = 2 as const;

      // Initialize the table body
      const tableBody = [];
      const data2 = data[i];

      // Convert data2 to an array if it's not already an array
      const dataArray = Array.isArray(data2) ? data2 : [data2];
      // Create data rows for each student
      for (const result of dataArray) {
        const dataRow: any = [];
        const isNumSemestersEven = numSemesters % 2 === 0;
        const isNumSemestersGreaterThan6 = numSemesters > 6;
        for (let i = 0; i < numSemesters; i += 2) {
          const semester1Data = result.credits[i] || {};
          const semester2Data = result.credits[i + 1] || {};

          dataRow.push({
            stack: [
              {
                text: [
                  {
                    text: `${
                      semester1Data.semName || "Sem" + intToRoman(i + 1)
                    } : Credits Earned = ${semester1Data.creditEarned || "-"}`,
                    // alignment: "center",
                    bold: true,
                  },
                  "\t\t\t",
                  {
                    text: `SGPI = ${semester1Data.sgpi || "-"}`,
                    // alignment: "center",
                    bold: true,
                  },
                  "\n",
                ],
                
              },
              {
                text: [
                  {
                    text: `${
                      semester2Data.semName || "Sem" + intToRoman(i + 2)
                    }: Credits Earned = ${semester2Data.creditEarned || "-"}`,
                    // alignment: "center",
                    bold: true,
                  },
                  "\t\t\t",
                  {
                    text: `SGPI = ${semester2Data.sgpi || "-"}`,
                    // alignment: "center",
                    bold: true,
                  },
                  "\n",
                ],
              },
            ],
            border:[true,false,true,true]
          });
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
            border:[true,false,true,true]
          });
        } else if (isNumSemestersEven && !isNumSemestersGreaterThan6) {
          // Add the CGPA data for the student at the end for numSemesters being 2 or 4
          dataRow.push({
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
            border:[true,false,true,true]
          });
        }
        console.log("length", dataRow.length);
        let numBlanks = 4 - (dataRow.length % 4);
        
        // Special case for numSemesters being 4 or 2
        if (numSemesters === 4 && dataRow.length === 3) {
          numBlanks = 5;
        } else if (numSemesters === 2 && dataRow.length === 2) {
          numBlanks = 6;
        }
        

        console.log("numBlanks", numBlanks);
        // Add the necessary blank objects to dataRow
        for (let i = 0; i < numBlanks; i++) {
          dataRow.push({ stack: [], border: [false, false, false, false] });
        }

        tableBody.push(dataRow);
      }

      const columnWidth = 205.77;
      // Calculate the total number of columns in the table
      const table5 = {
        widths: Array(numSemesters * 3).fill(columnWidth),
        headerRows: 1,
        body: [
          tableBody[0].slice(0, 4),
          tableBody[0].slice(4, tableBody[0].length),
        ],
      };

      const table = [
        {
          table: {
            widths: [80, 80, 590, 70],
            headerRows: 1,
            body: [
              [
                {
                  image: data[i].universityLogo
                    ? `${data[i].universityLogo}`
                    : `${process.cwd()}/img/xyz.png`,
                  //   margin: [0, 0, 0, 0],
                  width: 70,
                },
                {
                  // D:\pdf\pdfmake gu\img\KCC_Mumbai_logo.svg.png
                  image: data[i].collegeLogo,
                  //   margin: [0, 0, 20, 0],
                  alignment: "right",
                  width: 70,
                },
                {
                  text: [
                    {
                      text: "HSNC UNIVERSITY, MUMBAI",
                      fontSize: 20,
                      alignment: "center",
                      bold: true,
                      color: "#1E6332",
                      margin: [0, 50, 0, 0],
                    },
                    "\n",
                    {
                      text: "A STATE CULSTER UNIVERSITY",
                      //   fontSize: 14,
                      color: "#BD9C47",
                      alignment: "center",
                      bold: true,
                    },
                    "\n",
                    {
                      text: "47, Dr. R. G. Thadani Marg, Worli, Mumbai – 400 018.",
                      alignment: "center",
                      fontSize: 10,
                      bold: true,
                    },
                    "\n\n",
                    {
                      text: data[i].collegeName || "-",
                      //   fontSize: 14,
                      color: "#344B9E",
                      alignment: "center",
                      bold: true,
                    },
                    "\n",
                    {
                      text: "A CONSTITUENT COLLEGE OF HSNC UNIVERSITY, MUMBAI",
                      fontSize: 9,
                      alignment: "center",
                      bold: true,
                    },
                  ],
                  margin: [-50, 0, 0, 0],
                },
                {
                  image: data[i].studentPhoto,
                  margin: [0, 0, 20, 0],
                  width: 70,
                },
              ],
            ],
          },
          layout: "noBorders",
        },
        "\n",
        {
          table: table2,
          fontSize: 10,
        },
        {
          table: {
            widths: ["*"],
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
          table: {
            widths: [
              50, 180, 35, 35, 42, 35, 35, 42, 35, 35, 41, 35, 30, 30, 25, 30,
            ],
            headerRows: 2,
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
                  //   lineHeight: 1.2,
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
          fontSize: 10,
        },
        {
          table: table3,
          fontSize: 10,
        },
        {
          table: table4,
          fontSize: 10,
        },
        {
          table: table5,
          fontSize: 10,
        },
        "\n\n\n\n\n\n",
        // {
        //     table: table6,
        //     fontSize: 10,
        //     layout: "noBorders",
        // },
      ];

      return table;
    }

    contentDefinition.content.push(...pdf());

    // Insert a page break after each hall ticket except the last one
    if (i < data.length - 1) {
      contentDefinition.content.push({ text: "", pageBreak: "after" });
    }
  }

  return contentDefinition;
}
export default result;
