import { IResult, ISubjectTypePdf } from "./types";

function generateFooter(data: IResult[]) {
    // Define the table6 content
    let table6;

    for (let i = 0; i < data.length; i++) {
     table6 = {
        widths: [135, 135, 137, 120, 137, 137, 137],
        headerRows: 1,
        body: [
          [
            { text: `Place : ${data[i].place}`, bold:true },
            "",
            "",
            { image: `${data[i].universityLogo}`, rowSpan: 3, width:50, alignment:'' },
            { image: `${data[i].principalSign}`, width:80, height:20, alignment:'center' },
            { image: `${data[i].directorSign}`, width:80, height:20, alignment:'center' },
          ],
          [
            { text: `Date : ${data[i].date}`,bold:true },
            {text: 'Seal of the Univesity', bold:true},
            {text: 'Checked By', bold:true},
            "",
            {text: 'Principal/Director/Dean', bold:true},
            {text: 'Director BOEE', bold:true, alignment:'center'},
          ],
          [
            { text: `f : Female, F : Fail, AB:Absent, '' : Not Applicable, @ : O 2020, # : O 2020, $ : Carry Forword`, colSpan:3, fontSize:9 },
            "",
            "",
            "",
            "",
            ""
          ],
        ],
      };
}
    return table6;
  }
  

function result(data: IResult[]) {
  const contentDefinition: any = {
    pageSize: {
      width: 900,
      height: 580,
    },
    background: [
        {
            image: 'img/Hsnc-university-logo.png',
            width: 200,
            alignment:'center',
            margin:[0,180,0,0],
            opacity:0.2
        },
        {
            text:'NOT FOR PRINT',
            opacity:0.2,
            fontSize:35,
            absolutePosition: { x: 180, y: 150 },
        }
      ],
    pageMargins: [20, 10, 20, 10],
    content: [],
    footer: {
        margin:[20,-60,20,10],
        table:  generateFooter(data), // Call generateTable6 with the data array
        layout: "noBorders", // Optional: Use this to remove footer table borders
      },

  };

  for (let i = 0; i < 1; i++) {
    function pdf() {
      const table3 = {
        headerRows: 1,
        widths: [
          50, 180, 35, 35, 42, 35, 35, 42, 35, 35, 41, 35, 30, 30, 25, 30,
        ],
        body: [
          ...data[i].subjectDetails.map((value: any) => [
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
              text: data[i].sgpi || "-",
              alignment: "center",
              margin: [0, 7, 0, 0],
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
              text: `Remarks :${data[i].remarks || "-"}`,
              margin: [0, 7, 0, 0],
              border: [true, false, true, true],
              alignment: "center",
              bold: true,
            },
            {
              text: `Grade :${data[i].totalGrade || "-"}`,
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
              text: `Total :${data[i].totalMarks || "-"}`,
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
              text: `IC=\n${data[i].totalCredit || "-"}`,
              alignment: "center",
              // margin: [0, 7, 0, 0],
              border: [true, false, true, true],
              bold: true,
            },
            {
              text: `ICG=\n${data[i].icg || "-"}`,
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
              text: `SEMESTER : ${data[i].semester || "-"}`,
              alignment: "center",
              margin: [0, 2, 0, 0],
              border: [false, true, true, true],
              bold: true,
            },
            {
              text: `ACADEMIC YEAR : ${data[i].AcadamicYear || "-"}`,
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
              text: `${data[i].seatNo || "-"}`,
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

      const table5 = {
        widths: [225, 225, 225, 148],
        headerRows: 2,
        body: [
          [
            {
              text: [
                {
                  text: `SEM I : Credits Earned = ${
                    data[i].semOneCredit || "-"
                  }`,
                  //   alignment: "center",
                },
                "\t\t\t",
                {
                  text: ` SGPI= ${data[i].semOneSgpi || "-"}`,
                  //   alignment: "center",
                },
              ],
              border: [true, false, true, false],
              bold: true,
            },
            {
              text: [
                {
                  text: `SEM III : Credits Earned = ${
                    data[i].semThreeCredit || "-"
                  }`,
                  // alignment: "center",
                },
                "\t\t\t",
                {
                  text: `SGPI= ${data[i].semThreeSgpi || "-"}`,
                  // alignment: "center",
                },
              ],
              border: [true, false, true, false],
              bold: true,
            },
            {
              text: [
                {
                  text: ` SEM V : Credits Earned = ${
                    data[i].semFiveCredit || "-"
                  }`,
                  // alignment: "center",
                },
                "\t\t\t",
                {
                  text: `SGPI= ${data[i].semFiveSgpi || "-"}`,
                  // alignment: "center",
                },
              ],
              border: [true, false, true, false],
              bold: true,
            },
            {
              text: `CGPA = ${data[i].cgpa || "-"}`,
              // alignment: "center",
              border: [true, false, true, false],
              bold: true,
            },
          ],
          [
            {
              text: [
                {
                  text: `SEM II : Credits Earned = ${
                    data[i].semTwoCredit || "-"
                  }`,
                  // alignment: "center",
                },
                "\t\t\t",
                {
                  text: `SGPI= ${data[i].semTwoSgpi || "-"}`,
                  // alignment: "center",
                },
              ],
              border: [true, false, true, true],
              bold: true,
            },
            {
              text: [
                {
                  text: `SEM IV : Credits Earned = ${
                    data[i].semTwoCredit || "-"
                  }`,
                  // alignment: "center",
                },
                "\t\t\t",
                {
                  text: `SGPI= ${data[i].semTwoSgpi || "-"}`,
                  // alignment: "center",
                },
              ],
              border: [true, false, true, true],
              bold: true,
            },
            {
              text: [
                {
                  text: `SEM VI : Credits Earned = ${
                    data[i].semSixCredit || "-"
                  }`,
                  // alignment: "center",
                },
                "\t\t\t",
                {
                  text: `SGPI= ${data[i].semSixSgpi || "-"}`,
                  // alignment: "center",
                },
              ],
              border: [true, false, true, true],
              bold: true,
            },
            {
              text: `Final Grade = ${data[i].finalGrade || "-"}`,
              // alignment: "center",
              border: [true, false, true, true],
              bold: true,
            },
          ],
        ],
      };

    //   const table6 = {
    //     widths: [137, 137, 137, 137, 137, 180, 117],
    //     headerRows: 1,
    //     body: [
    //       [
    //         { text: `Place : ${data[i].place}`, bold:true },
    //         "",
    //         "",
    //         { image: `img/Hsnc-university-logo.png`, rowSpan: 3, width:50 },
    //         { image: `img/xyz.png`, width:80, height:20,  },
    //         { image: `img/xyz.png`, width:80, height:20, },
    //       ],
    //       [
    //         { text: `Date : ${data[i].date}`,bold:true },
    //         {text: 'Seal of the Univesity', bold:true},
    //         {text: 'Checked By', bold:true},
    //         "",
    //         {text: 'Principal/Director/Dean', bold:true},
    //         {text: 'Director BOEE', bold:true},
    //       ],
    //       [
    //         { text: `f : Female, F : Fail, AB:Absent, '' : Not Applicable, @ : O 2020, # : O 2020, $ : Carry Forword`, colSpan:3 },
    //         "",
    //         "",
    //         "",
    //         "",
    //         ""
    //       ],
    //     ],
    //   };

      const table = [
        {
          table: {
            widths: [80, 80, 590, 70],
            headerRows: 1,
            body: [
              [
                {
                  image: data[i].universityLogo,
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
                      margin: [0, 50, 0, 0],
                    },
                    "\n",
                    {
                      text: "A STATE CULSTER UNIVERSITY",
                      //   fontSize: 14,
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
                      text: data[i].collegeName || '-',
                      //   fontSize: 14,
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
                  text: `SGPI= ICG/\nIC`,
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
        },'\n\n\n\n\n\n',
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
