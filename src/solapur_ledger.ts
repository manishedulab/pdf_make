import moment from "moment";
import { PDF } from "./constant/constant";
import { ISolLedger } from "./types";
import { numberToWordsINR } from "./utiles";

function generateFooter(currentPage: number) {
    const date = new Date();
    const currentDate = moment(date).format("DD-MM-YYYY");
    const table6 = {
      widths: [100, 600, 40],
      headerRows: 1,
      body: [
        [
          {
            text: `${currentDate}`,
          },
          {
            text: `PAHSU, Solapur`,
            alignment: "center",
          },
          {
            text: `${currentPage}`,
            alignment: "right",
          },
        ],
      ],
    };
    return table6;
  }
  function solLedger(data: ISolLedger[]) {
    const contentDefinition: any = {
      pageSize: "A4",
      pageMargins: [30, 40, 30, 10],
      pageOrientation: "landscape",
      content: [],
      fontSize: 10,
      footer: function (currentPage: number, pageCount: number) {
        return [
          {
            margin: [31.94, -22, 20, 10],
            table: generateFooter(currentPage),
            fontSize: 10,
            layout: "noBorders",
          },
          {
            canvas: [
              { type: "line", x1: 0, y1: 50, x2: 765, y2: 50, lineWidth: 1 },
            ],
            margin: [31.94, -80, 20, 10],
          },
        ];
      },
    };
  
  
    for (let i = 0; i < data.length; i++) {
  
      let table3: any;
      let table:any;
      let text: string;
      let text2: string;
      let text3: string;
      let table5: any = [];
  
      const table2 = {
        widths: [40, 250, 30, 100, 20, 30, 30, 30, 30, 30, 30],
        body: [
          ...data[i].subjects.map((value: any, index: number) => [
            {
              text: `${value.code || "-"}`,
              alignment: "left",
              // margin: [0, 5, 0, 0],
              border: [true, false, true, true],
            },
            {
              text: `${value.paperName || "-"}`,
              alignment: "left",
              // margin: [0, 5, 0, 0],
              border: [true, false, true, true],
            },
            {
              text: `${value.credits || "-"}`,
              alignment: "center",
              rowSpan: index == 1 ? 2: '',
              margin: index == 1 ? [0, 10, 0, 0] : [0, 0, 0, 0],
              border: [true, false, true, true],
            },
            {
              text: `${value.gradeTemplateName || "-"}`,
              alignment: "center",
              rowSpan: index == 1 ? 2: '',
              margin: index == 1 ? [0, 10, 0, 0] : [0, 0, 0, 0],
              border: [true, false, true, true],
            },
            {
              text: `${value.assessmentMethod || "-"}`,
              alignment: "center",
              rowSpan: index == 1 ? 2: '',
              margin: index == 1 ? [0, 10, 0, 0] : [0, 0, 0, 0],
              border: [true, false, true, true],
            },
            {
              text: `${value.universityAssessmentMax || "-"}`,
              alignment: "center",
              rowSpan: index == 1 ? 2: '',
              margin: index == 1 ? [0, 10, 0, 0] : [0, 0, 0, 0],
              border: [true, false, true, true],
            },
            {
              text: `${value.universityAssessmentMin || "-"}`,
              alignment: "center",
              rowSpan: index == 1 ? 2: '',
              margin: index == 1 ? [0, 10, 0, 0] : [0, 0, 0, 0],
              border: [true, false, true, true],
            },
            {
              text: `${value.collegeAssessmentMax || "-"}`,
              alignment: "center",
              rowSpan: index == 1 ? 2: '',
              margin: index == 1 ? [0, 10, 0, 0] : [0, 0, 0, 0],
              border: [true, false, true, true],
            },
            {
              text: `${value.collegeAssessmentMin || "-"}`,
              alignment: "center",
              rowSpan: index == 1 ? 2: '',
              margin: index == 1 ? [0, 10, 0, 0] : [0, 0, 0, 0],
              border: [true, false, true, true],
            },
            {
              text: `${value.totalMax || "-"}`,
              alignment: "center",
              rowSpan: index == 1 ? 2: '',
              margin: index == 1 ? [0, 10, 0, 0] : [0, 0, 0, 0],
              border: [true, false, true, true],
            },
            {
              text: `${value.totalMin || "-"}`,
              alignment: "center",
              rowSpan: index == 1 ? 2: '',
              margin: index == 1 ? [0, 10, 0, 0] : [0, 0, 0, 0],
              border: [true, false, true, true],
            },
          ]),
        ],
      };
  
      const table4 = [
          {
              stack: [
                {
                  text: "Punyashlok Ahilyadevi Holkar Solapur University, Solapur",
                },
                {
                  text: `URL: ${PDF.universityUrl}`,
                },
                "\n",
                {
                  text: `Result Ledger For `,
                },
                "\n",
                {
                  table: {
                    widths: [120, 20, 300],
                    body: [
                      [
                        { text: "Faculty" },
                        ":",
                        { text: `${data[i].faculty || "-"}` },
                      ],
                      [
                        { text: "Course" },
                        ":",
                        { text: `${data[i].courseName || "-"}` },
                      ],
                      [
                        { text: "Course Code" },
                        ":",
                        { text: `${data[i].courseCode || "-"}` },
                      ],
                      [
                        { text: "Mode of Learning" },
                        ":",
                        { text: `${data[i].modeOfLearning || "-"}` },
                      ],
                      [
                        { text: "Pattern" },
                        ":",
                        { text: `${data[i].pattern || "-"}` },
                      ],
                      [
                        { text: "Branch" },
                        ":",
                        { text: `${data[i].branch || "-"}` },
                      ],
                      [
                        { text: "Course Part" },
                        ":",
                        { text: `${data[i].coursePart || "-"}` },
                      ],
                      [
                        { text: "Course Part Term" },
                        ":",
                        { text: `${data[i].coursePartTerm || "-"}` },
                      ],
                      [{ text: "Event" }, ":", { text: `${data[i].event || "-"}` }],
                    ],
                  },
                  layout: "noBorders",
                },
              ],
              fontSize: 10,
            },
            "\n",
            {
              text: "Paper Level Details",
              fontSize: 10,
            },
            "\n",
            {
              table: {
                widths: [40, 250, 30, 100, 20, 30, 30, 30, 30, 30, 30],
                headerRows: 1,
                body: [
                  [
                    {
                      text: `Code`,
                      alignment: "center",
                      bold: true,
                      margin: [0, 5, 0, 0],
                    },
                    {
                      text: `Paper Name`,
                      alignment: "center",
                      bold: true,
                      margin: [0, 5, 0, 0],
                      height: 65.53,
                    },
                    {
                      text: `Credits`,
                      alignment: "center",
                      bold: true,
                      margin: [0, 5, 0, 0],
                    },
                    {
                      text: `Grade Template Name`,
                      alignment: "center",
                      bold: true,
                      margin: [0, 5, 0, 0],
                    },
                    {
                      text: `AM`,
                      alignment: "center",
                      bold: true,
                      margin: [0, 5, 0, 0],
                    },
                    {
                      text: `UA\nMax`,
                      alignment: "center",
                      bold: true,
                      margin: [0, 5, 0, 0],
                    },
                    {
                      text: `UA Min`,
                      alignment: "center",
                      bold: true,
                      margin: [0, 5, 0, 0],
                    },
                    {
                      text: `CA Max`,
                      alignment: "center",
                      bold: true,
                      margin: [0, 5, 0, 0],
                    },
                    {
                      text: `CA Min`,
                      alignment: "center",
                      bold: true,
                      margin: [0, 5, 0, 0],
                    },
                    {
                      text: `Total\nMax`,
                      alignment: "center",
                      bold: true,
                      margin: [0, 5, 0, 0],
                    },
                    {
                      text: `Total\nMin`,
                      alignment: "center",
                      bold: true,
                      margin: [0, 5, 0, 0],
                    },
                  ],
                ],
              },
              fontSize: 9,
            },
            {
              table: table2,
              fontSize: 9,
              pageBreak: "after",
            },
            {
              text: `${data[i].abbreviation || "-"} (with Credits) - ${
                data[i].modeOfLearning || "-"
              } - ${data[i].pattern || "-"} - ${data[i].branch || "-"} - ${
                data[i].semesterName || "-"
              } HELD IN ${data[i].event || "-"}`,
              fontSize: 10,
            },
            {
              table: {
                widths: [120, 20, 300],
                body: [
                  [
                    { text: "Template Name" },
                    ":",
                    { text: `Ten Point Grade Template` },
                  ],
                  [{ text: "Grade Scale" }, ":", { text: `Ten Point Scale` }],
                  [{ text: "No. Of Intervals" }, ":", { text: `8` }],
                ],
              },
              fontSize: 10,
              margin: [0, 10, 0, 0],
              layout: "noBorders",
            },
            {
              table: {
                widths: [80, 100, 90, 90, 80, 90, 130],
                headerRows: 1,
                body: [
                  [
                    { text: "Sr. No.", bold: true, alignment: "center" },
                    { text: "Grade Abbreviation", bold: true, alignment: "center" },
                    { text: "From (Marks)", bold: true, alignment: "center" },
                    { text: "To (Marks)", bold: true, alignment: "center" },
                    { text: "Status", bold: true, alignment: "center" },
                    { text: "GradePoint", bold: true, alignment: "center" },
                    { text: "Description", bold: true, alignment: "center" },
                  ],
                  [
                    { text: "1", alignment: "center" },
                    { text: "O", alignment: "center" },
                    { text: "80", alignment: "center" },
                    { text: "100", alignment: "center" },
                    { text: "Pass", alignment: "center" },
                    { text: "10.00", alignment: "center" },
                    { text: "Excellent/Outstanding" },
                  ],
                  [
                    { text: "2", alignment: "center" },
                    { text: "A+", alignment: "center" },
                    { text: "70", alignment: "center" },
                    { text: "79.99", alignment: "center" },
                    { text: "Pass", alignment: "center" },
                    { text: "9.00", alignment: "center" },
                    { text: "Very Good" },
                  ],
                  [
                    { text: "3", alignment: "center" },
                    { text: "A", alignment: "center" },
                    { text: "60", alignment: "center" },
                    { text: "69.99", alignment: "center" },
                    { text: "Pass", alignment: "center" },
                    { text: "8.00", alignment: "center" },
                    { text: "Good" },
                  ],
                  [
                    { text: "4", alignment: "center" },
                    { text: "B+", alignment: "center" },
                    { text: "55", alignment: "center" },
                    { text: "59.99", alignment: "center" },
                    { text: "Pass", alignment: "center" },
                    { text: "7.00", alignment: "center" },
                    { text: "Fair" },
                  ],
                  [
                    { text: "5", alignment: "center" },
                    { text: "B", alignment: "center" },
                    { text: "50", alignment: "center" },
                    { text: "54.99", alignment: "center" },
                    { text: "Pass", alignment: "center" },
                    { text: "6.00", alignment: "center" },
                    { text: "Above Average" },
                  ],
                  [
                    { text: "6", alignment: "center" },
                    { text: "C+", alignment: "center" },
                    { text: "45", alignment: "center" },
                    { text: "49.99", alignment: "center" },
                    { text: "Pass", alignment: "center" },
                    { text: "5.00", alignment: "center" },
                    { text: "Average" },
                  ],
                  [
                    { text: "7", alignment: "center" },
                    { text: "C", alignment: "center" },
                    { text: "40", alignment: "center" },
                    { text: "44.99", alignment: "center" },
                    { text: "Pass", alignment: "center" },
                    { text: "4.00", alignment: "center" },
                    { text: "Below Average" },
                  ],
                  [
                    { text: "8", alignment: "center" },
                    { text: "F", alignment: "center" },
                    { text: "0", alignment: "center" },
                    { text: "39.99", alignment: "center" },
                    { text: "Fail", alignment: "center" },
                    { text: "00.00", alignment: "center" },
                    { text: "Fail" },
                  ],
                ],
              },
              fontSize: 9,
              margin: [0, 10, 0, 0],
            },
            {
              text: "GPA TEMPLATE",
              margin: [0, 20, 0, 20],
            },
            {
              table: {
                widths: [120, 20, 300],
                body: [
                  [
                    { text: "Template Name" },
                    ":",
                    { text: `GPA Template for Ten Point Scale` },
                  ],
                  [{ text: "Grade Scale" }, ":", { text: `Ten Point Scale` }],
                  [{ text: "No. Of Intervals" }, ":", { text: `8` }],
                ],
              },
              fontSize: 10,
              margin: [0, 10, 0, 0],
              layout: "noBorders",
            },
            {
              table: {
                widths: [90, 110, 100, 100, 90, 178],
                headerRows: 1,
                body: [
                  [
                    { text: "Sr. No.", bold: true, alignment: "center" },
                    { text: "Grade Abbreviation", bold: true, alignment: "center" },
                    { text: "From (Marks)", bold: true, alignment: "center" },
                    { text: "To (Marks)", bold: true, alignment: "center" },
                    { text: "Status", bold: true, alignment: "center" },
                    { text: "Description", bold: true, alignment: "center" },
                  ],
                  [
                    { text: "1", alignment: "center" },
                    { text: "O", alignment: "center" },
                    { text: "80", alignment: "center" },
                    { text: "100", alignment: "center" },
                    { text: "Pass", alignment: "center" },
                    { text: "Excellent/Outstanding" },
                  ],
                  [
                    { text: "2", alignment: "center" },
                    { text: "A+", alignment: "center" },
                    { text: "70", alignment: "center" },
                    { text: "79.99", alignment: "center" },
                    { text: "Pass", alignment: "center" },
                    { text: "Very Good" },
                  ],
                  [
                    { text: "3", alignment: "center" },
                    { text: "A", alignment: "center" },
                    { text: "60", alignment: "center" },
                    { text: "69.99", alignment: "center" },
                    { text: "Pass", alignment: "center" },
                    { text: "Good" },
                  ],
                  [
                    { text: "4", alignment: "center" },
                    { text: "B+", alignment: "center" },
                    { text: "55", alignment: "center" },
                    { text: "59.99", alignment: "center" },
                    { text: "Pass", alignment: "center" },
                    { text: "Fair" },
                  ],
                  [
                    { text: "5", alignment: "center" },
                    { text: "B", alignment: "center" },
                    { text: "50", alignment: "center" },
                    { text: "54.99", alignment: "center" },
                    { text: "Pass", alignment: "center" },
                    { text: "Above Average" },
                  ],
                  [
                    { text: "6", alignment: "center" },
                    { text: "C+", alignment: "center" },
                    { text: "45", alignment: "center" },
                    { text: "49.99", alignment: "center" },
                    { text: "Pass", alignment: "center" },
                    { text: "Average" },
                  ],
                  [
                    { text: "7", alignment: "center" },
                    { text: "C", alignment: "center" },
                    { text: "40", alignment: "center" },
                    { text: "44.99", alignment: "center" },
                    { text: "Pass", alignment: "center" },
                    { text: "Below Average" },
                  ],
                  [
                    { text: "8", alignment: "center" },
                    { text: "F", alignment: "center" },
                    { text: "0", alignment: "center" },
                    { text: "39.99", alignment: "center" },
                    { text: "Fail", alignment: "center" },
                    { text: "Fail" },
                  ],
                ],
              },
              fontSize: 9,
              margin: [0, 10, 0, 0],
              pageBreak: "after",
            },
            {
              text: `${data[i].abbreviation || "-"} (with Credits) - ${
                data[i].modeOfLearning || "-"
              } - ${data[i].pattern || "-"} - ${data[i].branch || "-"} - ${
                data[i].semesterName || "-"
              } HELD IN ${data[i].event || "-"}`,
              fontSize: 10,
            },
            {
              text: "Abbreviation Used:",
              margin: [0, 20, 0, 0],
            },
            {
              table: {
                widths: [50, 20, 300],
                body: [
                  [{ text: "CA" }, ":", { text: `College Assessment` }],
                  ["ESE", ":", "End Semester Exam"],
                  ["ICA", ":", "Internal Continuous Assessment"],
                  ["PR", ":", "Practical"],
                  ["ISE", ":", "In Semester Exam"],
                  ["PW", ":", "Project Work"],
                  ["POE", ":", "Practical Online Examination"],
                  ["TH", ":", "Theory"],
                  ["TW", ":", "Term Work"],
                  ["UA", ":", "University Assessment"],
                  ["Cr", ":", "Credit"],
                  ["AM", ":", "Assessment Method"],
                ],
              },
              fontSize: 10,
              margin: [0, 10, 0, 0],
              layout: "noBorders",
              pageBreak: "after",
            },
      ]
  
      for (let j = 0; j < data[i].students.length; j++) {
  
        const student = data[i].students[j];
        let marksInWords = numberToWordsINR(Number(student.totalOfTotalObt));
        marksInWords =  marksInWords.replace(/Rupees/g, '').trim();
  
        text = `Seat No: ${student.seatNo || "-"} PRN: ${
          student.prnNo || "-"
        } ELIG: ${student.elig || "-"} Statement No: ${
          student.statementNo || "-"
        } College Code: ${student.collegeCode || "-"}\n ${j + 1} Name: ${
          student.studentName || "-"
        }`;
  
        text2 = `${student.semesterName || "-"}   Total Credit: ${
          student.totalCredit || "-"
        }  |  EGP: ${student.totalEgp || "-"}  |  SGPA: ${
          student.sgpa || "-"
        }  | Status: ${student.status || "-"}`;
  
        text3 = `Grand Total: ${student.totalOfTotalObt || "-"}/ ${student.totalOfTotal || "-"} (${marksInWords})  |  Percentage: ${student.percentage || "-"}  |  ECA Marks: ${student.ECAMark || "-"}  |  Ordinance: ${
          student.ordinance || "-"} \n Total Credit Earned: ${student.totalCredit || "-"}  |  Total Earned Grade Points: ${student.totalEgp || "-"}  |  GPA/SGPA: ${student.sgpa || "-"}  |  Status: ${student.status || "-"}
        `;
  
  
        table3 = {
          widths: [70, 30, 40, 40, 40, 40, 50, 50, 50, 30, 30, 30, 40, 40, 40],
          body: student.marks.map((value: any, index: number) => [
            {
              text: `${value.code || "-"}`,
              border: [true, false, true, true],
            },
            {
              text: `${value.assessmentMethod || "-"}`,
              rowSpan: index == 1 ? 2: '',
               margin: index == 1 ? [0, 10, 0, 0] : [0, 0, 0, 0],
              border: [true, false, true, true],
            },
            {
              text: `${value.universityAssessmentMin || "-"}`,
              rowSpan: index == 1 ? 2: '',
               margin: index == 1 ? [0, 10, 0, 0] : [0, 0, 0, 0],
              border: [true, false, true, true],
            },
            {
              text: `${value.universityAssessmentObt || "-"}`,
              rowSpan: index == 1 ? 2: '',
               margin: index == 1 ? [0, 10, 0, 0] : [0, 0, 0, 0],
              border: [true, false, true, true],
            },
            {
              text: `${value.collegeAssessmentMin || "-"}`,
              rowSpan: index == 1 ? 2: '',
               margin: index == 1 ? [0, 10, 0, 0] : [0, 0, 0, 0],
              border: [true, false, true, true],
            },
            {
              text: `${value.collegeAssessmentObt || "-"}`,
              rowSpan: index == 1 ? 2: '',
               margin: index == 1 ? [0, 10, 0, 0] : [0, 0, 0, 0],
              border: [true, false, true, true],
            },
            {
              text: `${value.totalMax || "-"}`,
              rowSpan: index == 1 ? 2: '',
               margin: index == 1 ? [0, 10, 0, 0] : [0, 0, 0, 0],
              border: [true, false, true, true],
            },
            {
              text: `${value.totalMin || "-"}`,
              rowSpan: index == 1 ? 2: '',
               margin: index == 1 ? [0, 10, 0, 0] : [0, 0, 0, 0],
              border: [true, false, true, true],
            },
            {
              text: `${value.totalObt || "-"}`,
              rowSpan: index == 1 ? 2: '',
               margin: index == 1 ? [0, 10, 0, 0] : [0, 0, 0, 0],
              border: [true, false, true, true],
            },
            {
              text: `${value.grade || "-"}`,
              rowSpan: index == 1 ? 2: '',
               margin: index == 1 ? [0, 10, 0, 0] : [0, 0, 0, 0],
              border: [true, false, true, true],
            },
            {
              text: `${value.gradePoint || "-"}`,
              rowSpan: index == 1 ? 2: '',
               margin: index == 1 ? [0, 10, 0, 0] : [0, 0, 0, 0],
              border: [true, false, true, true],
            },
            {
              text: `${value.egp || "-"}`,
              rowSpan: index == 1 ? 2: '',
               margin: index == 1 ? [0, 10, 0, 0] : [0, 0, 0, 0],
              border: [true, false, true, true],
            },
            {
              text: `${value.credits || "-"}`,
              rowSpan: index == 1 ? 2: '',
               margin: index == 1 ? [0, 10, 0, 0] : [0, 0, 0, 0],
              border: [true, false, true, true],
            },
            {
              text: `${value.status || "-"}`,
              rowSpan: index == 1 ? 2: '',
               margin: index == 1 ? [0, 10, 0, 0] : [0, 0, 0, 0],
              border: [true, false, true, true],
            },
            {
              text: `${value.remark || "-"}`,
              rowSpan: index == 1 ? 2: '',
               margin: index == 1 ? [0, 10, 0, 0] : [0, 0, 0, 0],
              border: [true, false, true, true],
            },
          ]),
        };
  
        let text4;
        if(j % 2 === 0) {
          text4 = `${data[i].abbreviation || "-"} (with Credits) - ${
            data[i].modeOfLearning || "-"
          } - ${data[i].pattern || "-"} - ${data[i].branch || "-"} - ${
            data[i].semesterName || "-"
          } HELD IN ${data[i].event || "-"} \n ${data[i].collegeName || "-"}, ${data[i].collegeCode || "-"}`;
        }
        table = [
          {
            text: text4 || '',
            margin: [0, 0, 0, 10],
            fontSize: 10,
          },
          {
            table: {
              widths: [746],
              body: [
                [
                  {
                    text: text,
                    border: [true, true, true, false],
                  },
                ],
              ],
            },
            fontSize: 9,
          },
          {
            table: {
              widths: [70, 30, 40, 40, 40, 40, 50, 50, 50, 30, 30, 30, 40, 40, 40],
              headerRows: 1,
              body: [
                [
                  {
                    text: `Code`,
                    alignment: "center",
                    bold: true,
                    margin: [0, 5, 0, 0],
                  },
                  {
                    text: `AM`,
                    alignment: "center",
                    bold: true,
                    margin: [0, 5, 0, 0],
                    height: 65.53,
                  },
                  {
                    text: `UA(Min)`,
                    alignment: "center",
                    bold: true,
                    margin: [0, 5, 0, 0],
                  },
                  {
                    text: `UA(Obt)`,
                    alignment: "center",
                    bold: true,
                    margin: [0, 5, 0, 0],
                  },
                  {
                    text: `CA(Min)`,
                    alignment: "center",
                    bold: true,
                    margin: [0, 5, 0, 0],
                  },
                  {
                    text: `CA(Obt)`,
                    alignment: "center",
                    bold: true,
                    margin: [0, 5, 0, 0],
                  },
                  {
                    text: `Total(Max)`,
                    alignment: "center",
                    bold: true,
                    margin: [0, 5, 0, 0],
                  },
                  {
                    text: `Total(Min)`,
                    alignment: "center",
                    bold: true,
                    margin: [0, 5, 0, 0],
                  },
                  {
                    text: `Total(Obt)`,
                    alignment: "center",
                    bold: true,
                    margin: [0, 5, 0, 0],
                  },
                  {
                    text: `Gr`,
                    alignment: "center",
                    bold: true,
                    margin: [0, 5, 0, 0],
                  },
                  {
                    text: `GP`,
                    alignment: "center",
                    bold: true,
                    margin: [0, 5, 0, 0],
                  },
                  {
                    text: `EGP`,
                    alignment: "center",
                    bold: true,
                    margin: [0, 5, 0, 0],
                  },
                  {
                    text: `Credits`,
                    alignment: "center",
                    bold: true,
                    margin: [0, 5, 0, 0],
                  },
                  {
                    text: `Status`,
                    alignment: "center",
                    bold: true,
                    margin: [0, 5, 0, 0],
                  },
                  {
                    text: `Remark`,
                    alignment: "center",
                    bold: true,
                    margin: [0, 5, 0, 0],
                  },
                ],
              ],
            },
            fontSize: 9,
          },
          {
            table: table3,
            fontSize: 9,
            margin: [0, 0, 0, 0],
          },
          {
            table: {
              widths: [746],
              body: [
                [
                  {
                    text: text2,
                    border: [true, false, true, true],
                  },
                ],
              ],
            },
            fontSize: 9,
            margin: [0, 0, 0, 0],
          },
          {
              table: {
                widths: [746],
                body: [
                  [
                    {
                      text: text3,
                      margin: [0, 10, 0, -8],
                      border: [true, false, true, true],
                    },
                  ],
                ],
              },
              fontSize: 9,
              margin: [0, 0, 0, 10],
          },
        ];
        if ((j%2 && j < data[i].students.length - 1)) {
          table.push({ text: "", pageBreak: "after" });
        }
        table5.push(...table)
      }
  
      let table6 = [...table4, ...table5]
  
    contentDefinition.content.push(JSON.parse(JSON.stringify(table6)));
  
    // if ((i%2 && i < data.length - 1)) {
    //   contentDefinition.content.push({ text: "", pageBreak: "after" });
    // }
    // Insert a page break after each hall ticket except the last one
    // if (i < data.length - 1) {
    //   contentDefinition.content.push({ text: "", pageBreak: "after" });
    // }
  
  }
  
    return contentDefinition;
  }
export default solLedger;
