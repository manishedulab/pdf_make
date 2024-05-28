import moment from "moment";
import { PDF, SolapurPdf } from "./constant/constant";
import { ISolLedger } from "./types";
import { numberToWordsINR } from "./utiles";

const layout = {
  defaultBorder: false,
hLineStyle: function (i:number, node:any) {
  if (i === 0 || i === node.table.body.length) {
    return {dash: {length: 4, space: 4}};
  }
  return {dash: {length: 4, space: 4}};
},
vLineStyle: function (i:any, node:any) {
  if (i === 0 || i === node.table.body.length) {
    return {dash: {length: 4, space: 4}};
  }
  return {dash: {length: 4, space: 3}};
},
}

function generateFooter(currentPage: number) {
  const date = new Date();
  const currentDate = moment(date).format("DD-MM-YYYY");
  const table6 = {
    widths: [200, 800, 100],
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
    pageSize: "A3",
    pageMargins: [20, 20, 20, 10],
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
            { type: "line", x1: 0, y1: 50, x2: 1125, y2: 50, lineWidth: 1, dash: {length: 4, space: 3}  },
          ],
          margin: [31.94, -80, 20, 10],
        },
      ];
    },
  };

  for (let i = 0; i < data.length; i++) {

    let table:any;
    let text: string;
    let table5 = [];

    let theorycolumnWidth = 0; 
    let practiccalcolumnWidth = 0; 
    let paperNameWidth = 250
    const theoryCount = data[i].subjects[0].theory.length
    const practicalCount = data[i].subjects[0].practical.length

    if (theoryCount == 3 || theoryCount == 2 || theoryCount == 1) {
      theorycolumnWidth = 80 / theoryCount;
    } else if (theoryCount == 4 ) {
      theorycolumnWidth = 95 / theoryCount;
      paperNameWidth = 220
    }

    if (practicalCount == 3 || practicalCount == 2 || practicalCount == 1) {
      practiccalcolumnWidth = 80 / practicalCount;
    } else if (practicalCount == 4 ) {
      practiccalcolumnWidth = 95 / practicalCount;
      paperNameWidth = 220
    } 

    if(theoryCount == 4 && practicalCount == 4) {
      practiccalcolumnWidth = 95 / practicalCount;
      theorycolumnWidth = 95 / theoryCount;
      paperNameWidth = 200
    }
    

    const table2:any = {
      widths: [60, paperNameWidth, 60, 100, 50, ...Array.from({ length: theoryCount*2 }, () => theorycolumnWidth), 50, ...Array.from({ length: practicalCount*2 }, () => practiccalcolumnWidth), 50],
      body: [
      ],
    };

    const table10:any =  {
      widths:  [60, paperNameWidth, 60, 100, 50, ...Array.from({ length: theoryCount*2 }, () => theorycolumnWidth), 50, ...Array.from({ length: practicalCount*2 }, () => practiccalcolumnWidth), 50],
      headerRows: 1,
      body: [
        [
          {
            text: `Code`,
            alignment: "center",
            bold: true,
            border: [false, false, false, false],
            margin: [0, 0, 0, 0],
          },
          {
            text: `Paper Name`,
            alignment: "center",
            bold: true,
            margin: [0, 0, 0, 0],
            border: [false, false, false, false],
          },
          {
            text: `Credits`,
            alignment: "center",
            bold: true,
            margin: [0, 0, 0, 0],
            border: [false, false, false, false],
          },
          {
            text: `Grade Template Name`,
            alignment: "center",
            bold: true,
            margin: [0, 0, 0, 0],
            border: [false, false, false, false],
          },
          {
            text: `AM`,
            alignment: "center",
            bold: true,
            margin: [0, 0, 0, 0],
            border: [false, false, false, false],
          },  
        ],
        [
          {
            text: ``,
            alignment: "center",
            bold: true,
            border: [false, false, false, true],
            margin: [0, 0, 0, 0],
          },
          {
            text: ``,
            alignment: "center",
            bold: true,
            margin: [0, 0, 0, 0],
            border: [false, false, false, true],
          },
          {
            text: ``,
            alignment: "center",
            bold: true,
            margin: [0, 0, 0, 0],
            border: [false, false, false, true],
          },
          {
            text: ``,
            alignment: "center",
            bold: true,
            margin: [0, 0, 0, 0],
            border: [false, false, false, true],
          },
          {
            text: ``,
            alignment: "center",
            bold: true,
            margin: [0, 0, 0, 0],
            border: [false, false, false, true],
          },  
        ],
      ],
    }

    for(let l = 0; l < data[i].subjects.length; l++) {
     let ms = [];
    const value = data[i].subjects[l]
      ms.push({ text: `${value.code || "-"}`, alignment: "center", margin: [0, 0, 0, 0], border: l == data[i].subjects.length-1 ? [false, false, false, true] : [false, false, false, false]})
      ms.push({ text: `${value.paperName || "-"}`, alignment: "center", margin: [0, 0, 0, 0], border: l == data[i].subjects.length-1 ? [false, false, false, true] : [false, false, false, false]})
      ms.push({ text: `${value.credits || "-"}`, alignment: "center", margin: [0, 0, 0, 0], border:  l == data[i].subjects.length-1 ? [false, false, false, true] : [false, false, false, false]})
      ms.push({ text: `${value.gradeTemplateName || "-"}`, alignment: "center", margin: [0, 0, 0, 0], border:  l == data[i].subjects.length-1 ? [false, false, false, true] : [false, false, false, false]})
      ms.push({ text: `${'Theory' || "-"}`, alignment: "center", margin: [0, 0, 0, 0], border:  l == data[i].subjects.length-1 ? [false, false, false, true] : [false, false, false, false]})
      for(let j = 0; j < theoryCount; j++) {
        ms.push({ text: data[i].subjects[l].theory[j].AssessmentTypeMax, alignment: 'center', margin: [0,0,0,0],border:  l == data[i].subjects.length-1 ? [false, false, false, true] : [false, false, false, false], })
        ms.push({ text: data[i].subjects[l].theory[j].AssessmentTypeMax, alignment: 'center', margin: [0,0,0,0],border:  l == data[i].subjects.length-1 ? [false, false, false, true] : [false, false, false, false], })
      }

      ms.push({ text: `${'Practical' || "-"}`, alignment: "center", margin: [0, 0, 0, 0], border:  l == data[i].subjects.length-1 ? [false, false, false, true] : [false, false, false, false]})

      for(let k = 0; k < practicalCount; k++) {
        ms.push({ text: data[i].subjects[l].practical[k].AssessmentTypeMax, alignment: 'center', margin: [0,0,0,0],border:  l == data[i].subjects.length-1 ? [false, false, false, true] : [false, false, false, false], })
        ms.push({ text: data[i].subjects[l].practical[k].AssessmentTypeMax, alignment: 'center', margin: [0,0,0,0],border:  l == data[i].subjects.length-1 ? [false, false, false, true] : [false, false, false, false], })
      }

      ms.push({
        text: value.total,
        alignment: "center",
        margin: [0, 0, 0, 0],
       border:  l == data[i].subjects.length-1 ? [false, false, false, true] : [false, false, false, false],
      },)

      table2.body.push(ms)
    }

    
    
    for(let k = 0; k < theoryCount; k++) {
      table10.body[0].push({ text: data[i].subjects[0].theory[k].AssessmentName, alignment: 'center', colSpan:2, bold: true, margin: [0,0,0,0], border: [false, false, false, false],})
      table10.body[0].push({ text: '', alignment: 'center', bold: true, margin: [0,0,0,0], border: [false, false, false, false],})
      table10.body[1].push({ text: 'Max', alignment: 'center', bold: true, margin: [0,0,0,0], border: [false, false, false, true],})
      table10.body[1].push({ text: 'Min', alignment: 'center', bold: true, margin: [0,0,0,0], border: [false, false, false, true],})
    }

    table10.body[0].push({ text: `AM`, alignment: "center", bold: true, margin: [0, 0, 0, 0], border: [false, false, false, false]})
    table10.body[1].push({ text: ``, alignment: "center", bold: true, margin: [0, 0, 0, 0], border: [false, false, false, true]})
    
    for(let k = 0; k < practicalCount; k++) {
      table10.body[0].push({ text: data[i].subjects[0].practical[k].AssessmentName, alignment: 'center', colSpan:2, bold: true, margin: [0,0,0,0],border: [false, false, false, false], })
      table10.body[0].push({ text: '', alignment: 'center', bold: true, margin: [0,0,0,0],border: [false, false, false, false], })
      table10.body[1].push({ text: 'Max', alignment: 'center', bold: true, margin: [0,0,0,0],border: [false, false, false, true], })
      table10.body[1].push({ text: 'Min', alignment: 'center', bold: true, margin: [0,0,0,0],border: [false, false, false, true], })
    }

    table10.body[0].push({
      text: `Total`,
      alignment: "center",
      bold: true,
      margin: [0, 0, 0, 0],
      border: [false, false, false, false],
    })

    table10.body[1].push({
      text: ``,
      alignment: "center",
      bold: true,
      margin: [0, 0, 0, 0],
      border: [false, false, false, true],
      
    })


    const table4 = [
        {
            stack: [
              {
                text: "Punyashlok Ahilyadevi Holkar Solapur University, Solapur",
                alignment: "center",
                margin:  [20,0,0,0],
                bold:true,
              },
              // {
              //   text: `URL: ${SolapurPdf.universityUrl}`,
              // },
              "\n",
              {
                text: `Result Ledger For `,
              },
              "\n",
              {
                table: {
                  widths: [300, 80, 400],
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
                alignment: 'center',
                layout: "noBorders",
              },
            ],
            // fontSize: 10,
          },
          "\n",
          {
            text: "Paper Level Details",
            // fontSize: 10,
          },
          "\n",
          {
            table: table10,
            layout: layout,
            fontSize: 11,
          },
          {
            table: table2,
            layout: layout,
            fontSize: 11,
            pageBreak: "after",
          },
          {
            table:{
              widths:[1105],
              body: [[
                {
                  text:'Grade Template Used:',
                  border: [false, false, false, true],
                }
              ]]
            },
            layout:layout,
          },
          {
            table: {
              widths: [150, 20, 300],
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
            // fontSize: 10,
            margin: [10, 2, 0, 0],
            layout: "noBorders",
          },
          {
            table:{
              widths:[1105],
              body: [[
                {
                  text:'',
                  border: [false, false, false, true],
                }
              ]]
            },
            layout: layout,
            // fontSize: 10,
          },
          {
            table: {
              widths: [100, 220, 110, 110, 110, 110, 250],
              headerRows: 1,
              body: [
                [
                  { text: "Sr. No.", bold: true, alignment: "center", border: [false, false, false, true], },
                  { text: "Grade Abbreviation", bold: true, alignment: "center", border: [false, false, false, true], },
                  { text: "From (Marks)", bold: true, alignment: "center", border: [false, false, false, true], },
                  { text: "To (Marks)", bold: true, alignment: "center", border: [false, false, false, true], },
                  { text: "Status", bold: true, alignment: "center", border: [false, false, false, true], },
                  { text: "GradePoint", bold: true, alignment: "center", border: [false, false, false, true], },
                  { text: "Description", bold: true, alignment: "center", border: [false, false, false, true], },
                ],
                [
                  { text: "1", alignment: "center", border: [false, false, false, false],},
                  { text: "O", alignment: "center", border: [false, false, false, false], },
                  { text: "80", alignment: "center", border: [false, false, false, false], },
                  { text: "100", alignment: "center", border: [false, false, false, false], },
                  { text: "Pass", alignment: "center", border: [false, false, false, false], },
                  { text: "10.00", alignment: "center", border: [false, false, false, false], },
                  { text: "Excellent/Outstanding", alignment: "center", border: [false, false, false, false], },
                ],
                [
                  { text: "2", alignment: "center", border: [false, false, false, false], },
                  { text: "A+", alignment: "center", border: [false, false, false, false], },
                  { text: "70", alignment: "center", border: [false, false, false, false], },
                  { text: "79.99", alignment: "center", border: [false, false, false, false], },
                  { text: "Pass", alignment: "center", border: [false, false, false, false], },
                  { text: "9.00", alignment: "center", border: [false, false, false, false], },
                  { text: "Very Good", alignment: "center", border: [false, false, false, false], },
                ],
                [
                  { text: "3", alignment: "center", border: [false, false, false, false], },
                  { text: "A", alignment: "center", border: [false, false, false, false], },
                  { text: "60", alignment: "center", border: [false, false, false, false], },
                  { text: "69.99", alignment: "center", border: [false, false, false, false], },
                  { text: "Pass", alignment: "center", border: [false, false, false, false], },
                  { text: "8.00", alignment: "center", border: [false, false, false, false], },
                  { text: "Good", alignment: "center", border: [false, false, false, false], },
                ],
                [
                  { text: "4", alignment: "center", border: [false, false, false, false], },
                  { text: "B+", alignment: "center", border: [false, false, false, false], },
                  { text: "55", alignment: "center", border: [false, false, false, false], },
                  { text: "59.99", alignment: "center", border: [false, false, false, false], },
                  { text: "Pass", alignment: "center", border: [false, false, false, false], },
                  { text: "7.00", alignment: "center", border: [false, false, false, false], },
                  { text: "Fair", alignment: "center", border: [false, false, false, false], },
                ],
                [
                  { text: "5", alignment: "center", border: [false, false, false, false], },
                  { text: "B", alignment: "center", border: [false, false, false, false], },
                  { text: "50", alignment: "center", border: [false, false, false, false], },
                  { text: "54.99", alignment: "center", border: [false, false, false, false], },
                  { text: "Pass", alignment: "center", border: [false, false, false, false], },
                  { text: "6.00", alignment: "center", border: [false, false, false, false], },
                  { text: "Above Average", alignment: "center", border: [false, false, false, false], },
                ],
                [
                  { text: "6", alignment: "center", border: [false, false, false, false], },
                  { text: "C+", alignment: "center", border: [false, false, false, false], },
                  { text: "45", alignment: "center", border: [false, false, false, false], },
                  { text: "49.99", alignment: "center", border: [false, false, false, false], },
                  { text: "Pass", alignment: "center", border: [false, false, false, false], },
                  { text: "5.00", alignment: "center", border: [false, false, false, false], },
                  { text: "Average", alignment: "center", border: [false, false, false, false], },
                ],
                [
                  { text: "7", alignment: "center", border: [false, false, false, false], },
                  { text: "C", alignment: "center", border: [false, false, false, false], },
                  { text: "40", alignment: "center", border: [false, false, false, false], },
                  { text: "44.99", alignment: "center", border: [false, false, false, false], },
                  { text: "Pass", alignment: "center", border: [false, false, false, false], },
                  { text: "4.00", alignment: "center", border: [false, false, false, false], },
                  { text: "Below Average", alignment: "center", border: [false, false, false, false], },
                ],
                [
                  { text: "8", alignment: "center", border: [false, false, false, true], },
                  { text: "F", alignment: "center", border: [false, false, false, true], },
                  { text: "0", alignment: "center", border: [false, false, false, true], },
                  { text: "39.99", alignment: "center", border: [false, false, false, true], },
                  { text: "Fail", alignment: "center", border: [false, false, false, true], },
                  { text: "00.00", alignment: "center", border: [false, false, false, true], },
                  { text: "Fail", alignment: "center", border: [false, false, false, true], },
                ],
              ],
            },
            layout: layout,
            margin: [10, 2, 0, 0],
          },
          {
            text: "GPA TEMPLATE",
            margin: [10, 15, 0, 0],
          },
          {
            table:{
              widths:[1105],
              body: [[
                {
                  text:'',
                  border: [false, false, false, true],
                }
              ]]
            },
            layout: layout,
            // fontSize: 10,
          },
          {
            table: {
              widths: [150, 20, 300],
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
            // fontSize: 10,
            margin: [10, 2, 0, 0],
            layout: "noBorders",
          },
          {
            table: {
              widths: [100, 220, 110, 110, 110, 365],
              headerRows: 1,
              body: [
                [
                  { text: "Sr. No.", bold: true, alignment: "center", border: [false, false, false, true], },
                  { text: "Grade Abbreviation", bold: true, alignment: "center", border: [false, false, false, true], },
                  { text: "From (GPA)", bold: true, alignment: "center", border: [false, false, false, true], },
                  { text: "To (GPA)", bold: true, alignment: "center", border: [false, false, false, true], },
                  { text: "Status", bold: true, alignment: "center", border: [false, false, false, true], },
                  { text: "Description", bold: true, alignment: "center", border: [false, false, false, true], },
                ],
                [
                  { text: "1", alignment: "center", border:[false, false, false, false], },
                  { text: "O", alignment: "center", border:[false, false, false, false], },
                  { text: "9.5", alignment: "center", border:[false, false, false, false], },
                  { text: "10", alignment: "center", border:[false, false, false, false], },
                  { text: "Pass", alignment: "center", border:[false, false, false, false], },
                  { text: "Excellent/Outstanding",  alignment: "center", border:[false, false, false, false], },
                ],
                [
                  { text: "2", alignment: "center", border:[false, false, false, false], },
                  { text: "A+", alignment: "center", border:[false, false, false, false], },
                  { text: "8.5", alignment: "center", border:[false, false, false, false], },
                  { text: "9.49", alignment: "center", border:[false, false, false, false], },
                  { text: "Pass", alignment: "center", border:[false, false, false, false], },
                  { text: "Very Good", alignment: "center", border:[false, false, false, false], },
                ],
                [
                  { text: "3", alignment: "center", border:[false, false, false, false], },
                  { text: "A", alignment: "center", border:[false, false, false, false], },
                  { text: "7.5", alignment: "center", border:[false, false, false, false], },
                  { text: "8.49", alignment: "center", border:[false, false, false, false], },
                  { text: "Pass", alignment: "center", border:[false, false, false, false], },
                  { text: "Good", alignment: "center", border:[false, false, false, false], },
                ],
                [
                  { text: "4", alignment: "center", border:[false, false, false, false], },
                  { text: "B+", alignment: "center", border:[false, false, false, false], },
                  { text: "6.5", alignment: "center", border:[false, false, false, false], },
                  { text: "7.49", alignment: "center", border:[false, false, false, false], },
                  { text: "Pass", alignment: "center", border:[false, false, false, false], },
                  { text: "Fair", alignment: "center", border:[false, false, false, false], },
                ],
                [
                  { text: "5", alignment: "center", border:[false, false, false, false], },
                  { text: "B", alignment: "center", border:[false, false, false, false], },
                  { text: "5.5", alignment: "center", border:[false, false, false, false], },
                  { text: "6.49", alignment: "center", border:[false, false, false, false], },
                  { text: "Pass", alignment: "center", border:[false, false, false, false], },
                  { text: "Above Average", alignment: "center", border:[false, false, false, false], },
                ],
                [
                  { text: "6", alignment: "center", border:[false, false, false, false], },
                  { text: "C+", alignment: "center", border:[false, false, false, false], },
                  { text: "4.5", alignment: "center", border:[false, false, false, false], },
                  { text: "5.49", alignment: "center", border:[false, false, false, false], },
                  { text: "Pass", alignment: "center", border:[false, false, false, false], },
                  { text: "Average", alignment: "center", border:[false, false, false, false], },
                ],
                [
                  { text: "7", alignment: "center", border:[false, false, false, false], },
                  { text: "C", alignment: "center", border:[false, false, false, false], },
                  { text: "4", alignment: "center", border:[false, false, false, false], },
                  { text: "4.49", alignment: "center", border:[false, false, false, false], },
                  { text: "Pass", alignment: "center", border:[false, false, false, false], },
                  { text: "Below Average", alignment: "center", border:[false, false, false, false], },
                ],
                [
                  { text: "8", alignment: "center", border: [false, false, false, true], },
                  { text: "F", alignment: "center", border: [false, false, false, true], },
                  { text: "0", alignment: "center", border: [false, false, false, true], },
                  { text: "3.99", alignment: "center", border: [false, false, false, true], },
                  { text: "Fail", alignment: "center", border: [false, false, false, true], },
                  { text: "Fail", alignment: "center", border: [false, false, false, true], },
                ],
              ],
            },
            // fontSize: 9,
            margin: [10, 2, 0, 0],
            layout:layout,
            // pageBreak: "after",
          },
          {
            text: "Abbreviation Used:",
            margin: [10, 10, 0, 0],
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
            // fontSize: 10,
            margin: [10, 2, 0, 0],
            layout: "noBorders",
            pageBreak: "after",
          },
    ]

    for (let j = 0; j < data[i].students.length; j++) {

      const student = data[i].students[j];
      let marksInWords = numberToWordsINR(Number(student.totalOfTotalObt));
      marksInWords =  marksInWords.replace(/Rupees/gi, '').trim();

      text = `Seat No: ${student.seatNo || "-"}\t\t\t PRN: ${
        student.prnNo || "-"
      }\t\t\t  ELIG: ${student.elig || "-"}\t\t\t College Code: ${student.collegeCode || "-"}
      ${j + 1}. Name: ${student.studentName || "-"}`;
     
        const text4 = `${data[i].courseAbbreviation || "-"} (with Credits) - ${
          data[i].examType || "-"
        } - ${data[i].creditSystem || "-"} - ${data[i].specialization || "-"} - ${data[i].courseAbbreviation || "-"} - ${data[i].currentYear || "-"} - ${
          data[i].semesterName || "-"
        } HELD IN ${data[i].event || "-"}
        ${student.collegeName || "-"}, ${student.collegeCode || "-"}`

        let oddMarkTheory = 0
        let oddMarkPractical = 0
        let evenMarkTheory = 0
        let evenMarkPractical = 0
        let oddMarkTheoryColumnWidth = 0
        for(let m = 0; m < student.oddSemesterdata.marks.length; m++) {
          oddMarkTheory = student.oddSemesterdata.marks[m].theory.length;
          oddMarkPractical = student.oddSemesterdata.marks[m].practical.length;
        }

        for(let m = 0; m < student.evenSemesterdata.marks.length; m++) {
          evenMarkTheory = student.evenSemesterdata.marks[m].theory.length;
          evenMarkPractical = student.evenSemesterdata.marks[m].practical.length;
        }
        
        const table10:any = {
          widths: [60, 30, ...Array.from({ length: oddMarkTheory*2 }, () => 25), 22, 22, 22, 30, ...Array.from({ length: oddMarkPractical*2 }, () => 25), 22, 22, 22, 22, 22, 22, 15, 20, 20, 22, 22],
          headerRows: 1,
          body: [
            [
              {
                text: ``,
                alignment: "center",
                bold: true,
                border: [true, true, true, false],
                margin: [0, 0, 0, 0],
              },
              {
                text: ``,
                alignment: "center",
                bold: true,
                border: [false, true, true, false],
                margin: [0, 0, 0, 0],
              },
            ],
            [
              {
                text: `Code`,
                alignment: "center",
                bold: true,
                border: [true, false, true, true],
                margin: [0, 0, 0, 0],
              },
              {
                text: `AM`,
                alignment: "center",
                bold: true,
                border: [false, false, true, true],
                margin: [0, 0, 0, 0],
              },
            ]
          ],
        }

        const table11:any = {
          widths: [60, 30, ...Array.from({ length: oddMarkTheory*2 }, () => 25), 22, 22, 22, 30, ...Array.from({ length: oddMarkPractical*2 }, () => 25), 22, 22, 22, 22, 22, 22, 15, 20, 20, 22, 22],
          body: [],
        }

        const table12:any = {
          widths: [60, 30, ...Array.from({ length: oddMarkTheory*2 }, () => 25), 22, 22, 22, 30, ...Array.from({ length: oddMarkPractical*2 }, () => 25), 22, 22, 22, 22, 22, 22, 15, 20, 20, 22, 22],
          body: [],
        }


        const oddSemesterMarkLength = student.oddSemesterdata.marks.length
        for(let l = 0; l < oddSemesterMarkLength; l++) {
          let ms = [];
          const value = student.oddSemesterdata.marks[l]
           ms.push({ text: `${value.code || "-"}`, alignment: "center", margin: [0, 0, 0, 0], border: l == oddSemesterMarkLength-1 ? [true, false, true, true] : [true, false, true, false]})
           ms.push({ text: `${'Theory' || "-"}`, alignment: "center", margin: [0, 0, 0, 0], border:  l == oddSemesterMarkLength-1 ? [false, false, true, true] : [false, false, true, false]})
          
           for(let w = 0; w < oddMarkTheory; w++) {
             ms.push({ text: value.theory[w].AssessmentTypeMin || '-', alignment: 'center', margin: [0,0,0,0],border:  l == oddSemesterMarkLength-1 ? [false, false, true, true] : [false, false, true, false], })
             ms.push({ text: value.theory[w].AssessmentTypeObt || '-', alignment: 'center', margin: [0,0,0,0],border:  l == oddSemesterMarkLength-1 ? [false, false, true, true] : [false, false, true, false], })
            }
              ms.push({ text: value.theoryTotalMax || '-', alignment: 'center', margin: [0,0,0,0],border:  l == oddSemesterMarkLength-1 ? [false, false, true, true] : [false, false, true, false], })
              ms.push({ text: value.theoryTotalMin|| '-', alignment: 'center', margin: [0,0,0,0],border:  l == oddSemesterMarkLength-1 ? [false, false, true, true] : [false, false, true, false], })
              ms.push({ text: value.theoryTotalObt || '-', alignment: 'center', margin: [0,0,0,0],border:  l == oddSemesterMarkLength-1 ? [false, false, true, true] : [false, false, true, false], })
           
     
           ms.push({ text: `${'Practical' || "-"}`, alignment: "center", margin: [0, 0, 0, 0], border:  l == oddSemesterMarkLength-1 ? [false, false, true, true] : [false, false, true, false]})
     
           for(let x = 0; x < oddMarkPractical; x++) {
             ms.push({ text: value.practical[x].AssessmentTypeMin || '-', alignment: 'center', margin: [0,0,0,0],border:  l == oddSemesterMarkLength-1 ? [false, false, true, true] : [false, false, true, false], })
             ms.push({ text: value.practical[x].AssessmentTypeObt || '-', alignment: 'center', margin: [0,0,0,0],border:  l == oddSemesterMarkLength-1 ? [false, false, true, true] : [false, false, true, false], })
            }
            ms.push({ text: value.practicalTotalMax || '-', alignment: 'center', margin: [0,0,0,0],border:  l == oddSemesterMarkLength-1 ? [false, false, true, true] : [false, false, true, false], })
            ms.push({ text: value.practicalTotalMin || '-', alignment: 'center', margin: [0,0,0,0],border:  l == oddSemesterMarkLength-1 ? [false, false, true, true] : [false, false, true, false], })
            ms.push({ text: value.practicalTotalObt || '-', alignment: 'center', margin: [0,0,0,0],border:  l == oddSemesterMarkLength-1 ? [false, false, true, true] : [false, false, true, false], })

           ms.push({ text: value.totalMax || '-', alignment: 'center', margin: [0,0,0,0],border:  l == oddSemesterMarkLength-1 ? [false, false, true, true] : [false, false, true, false], })
           ms.push({ text: value.totalMin || '-', alignment: 'center', margin: [0,0,0,0],border:  l == oddSemesterMarkLength-1 ? [false, false, true, true] : [false, false, true, false], })
           ms.push({ text: value.totalObt || '-', alignment: 'center', margin: [0,0,0,0],border:  l == oddSemesterMarkLength-1 ? [false, false, true, true] : [false, false, true, false], })
          

           ms.push({ text: value.grade || '-', alignment: 'center', margin: [0,0,0,0],border:  l == oddSemesterMarkLength-1 ? [false, false, true, true] : [false, false, true, false], })
           ms.push({ text: value.gradePoint || '-', alignment: 'center', margin: [0,0,0,0],border:  l == oddSemesterMarkLength-1 ? [false, false, true, true] : [false, false, true, false], })
           ms.push({ text: value.egp || '-', alignment: 'center', margin: [0,0,0,0],border:  l == oddSemesterMarkLength-1 ? [false, false, true, true] : [false, false, true, false], })
           ms.push({ text: value.status || '-', alignment: 'center', margin: [0,0,0,0],border:  l == oddSemesterMarkLength-1 ? [false, false, true, true] : [false, false, true, false], })
           ms.push({ text: value.remark || '-', alignment: 'center', margin: [0,0,0,0],border:  l == oddSemesterMarkLength-1 ? [false, false, true, true] : [false, false, true, false], })
          

           table11.body.push(ms)
         }

         const evenSemesterMarkLength = student.evenSemesterdata.marks.length
        for(let l = 0; l < evenSemesterMarkLength; l++) {
          let ms = [];
          const value = student.evenSemesterdata.marks[l]
           ms.push({ text: `${value.code || "-"}`, alignment: "center", margin: [0, 0, 0, 0], border: l == evenSemesterMarkLength-1 ? [true, false, true, true] : [true, false, true, false]})
           ms.push({ text: `${'Theory' || "-"}`, alignment: "center", margin: [0, 0, 0, 0], border:  l == evenSemesterMarkLength-1 ? [false, false, true, true] : [false, false, true, false]})
          
           for(let w = 0; w < oddMarkTheory; w++) {
             ms.push({ text: value.theory[w].AssessmentTypeMin || '-', alignment: 'center', margin: [0,0,0,0],border:  l == evenSemesterMarkLength-1 ? [false, false, true, true] : [false, false, true, false], })
             ms.push({ text: value.theory[w].AssessmentTypeObt || '-', alignment: 'center', margin: [0,0,0,0],border:  l == evenSemesterMarkLength-1 ? [false, false, true, true] : [false, false, true, false], })
            }
              ms.push({ text: value.theoryTotalMax || '-', alignment: 'center', margin: [0,0,0,0],border:  l == evenSemesterMarkLength-1 ? [false, false, true, true] : [false, false, true, false], })
              ms.push({ text: value.theoryTotalMin || '-', alignment: 'center', margin: [0,0,0,0],border:  l == evenSemesterMarkLength-1 ? [false, false, true, true] : [false, false, true, false], })
              ms.push({ text: value.theoryTotalObt || '-', alignment: 'center', margin: [0,0,0,0],border:  l == evenSemesterMarkLength-1 ? [false, false, true, true] : [false, false, true, false], })
           
     
           ms.push({ text: `${'Practical' || "-"}`, alignment: "center", margin: [0, 0, 0, 0], border:  l == evenSemesterMarkLength-1 ? [false, false, true, true] : [false, false, true, false]})
     
           for(let x = 0; x < oddMarkPractical; x++) {
             ms.push({ text: value.practical[x].AssessmentTypeMin || '-', alignment: 'center', margin: [0,0,0,0],border:  l == evenSemesterMarkLength-1 ? [false, false, true, true] : [false, false, true, false], })
             ms.push({ text: value.practical[x].AssessmentTypeObt || '-', alignment: 'center', margin: [0,0,0,0],border:  l == evenSemesterMarkLength-1 ? [false, false, true, true] : [false, false, true, false], })
            }
            ms.push({ text: value.practicalTotalMax || '-', alignment: 'center', margin: [0,0,0,0],border:  l == evenSemesterMarkLength-1 ? [false, false, true, true] : [false, false, true, false], })
            ms.push({ text: value.practicalTotalMin || '-', alignment: 'center', margin: [0,0,0,0],border:  l == evenSemesterMarkLength-1 ? [false, false, true, true] : [false, false, true, false], })
            ms.push({ text: value.practicalTotalObt || '-', alignment: 'center', margin: [0,0,0,0],border:  l == evenSemesterMarkLength-1 ? [false, false, true, true] : [false, false, true, false], })

           ms.push({ text: value.totalMax || '-', alignment: 'center', margin: [0,0,0,0],border:  l == evenSemesterMarkLength-1 ? [false, false, true, true] : [false, false, true, false], })
           ms.push({ text: value.totalMin || '-', alignment: 'center', margin: [0,0,0,0],border:  l == evenSemesterMarkLength-1 ? [false, false, true, true] : [false, false, true, false], })
           ms.push({ text: value.totalObt || '-', alignment: 'center', margin: [0,0,0,0],border:  l == evenSemesterMarkLength-1 ? [false, false, true, true] : [false, false, true, false], })
          

           ms.push({ text: value.grade || '-', alignment: 'center', margin: [0,0,0,0],border:  l == evenSemesterMarkLength-1 ? [false, false, true, true] : [false, false, true, false], })
           ms.push({ text: value.gradePoint || '-', alignment: 'center', margin: [0,0,0,0],border:  l == evenSemesterMarkLength-1 ? [false, false, true, true] : [false, false, true, false], })
           ms.push({ text: value.egp || '-', alignment: 'center', margin: [0,0,0,0],border:  l == evenSemesterMarkLength-1 ? [false, false, true, true] : [false, false, true, false], })
           ms.push({ text: value.status || '-', alignment: 'center', margin: [0,0,0,0],border:  l == evenSemesterMarkLength-1 ? [false, false, true, true] : [false, false, true, false], })
           ms.push({ text: value.remark || '-', alignment: 'center', margin: [0,0,0,0],border:  l == evenSemesterMarkLength-1 ? [false, false, true, true] : [false, false, true, false], })
          

           table12.body.push(ms)
         }

        for(let k = 0; k < oddMarkTheory; k++) {
          table10.body[0].push({ text: student.oddSemesterdata.marks[0].theory[k].AssessmentName, alignment: 'center', colSpan:2, bold: true, margin: [0,0,0,0], border: [false, true, true, false],})
          table10.body[0].push({ text: '', alignment: 'center', bold: true, margin: [0,0,0,0], border: [false, false, false, false],})
          table10.body[1].push({ text: 'MIN', alignment: 'center', bold: true, margin: [0,0,0,0], border: [false, false, true, true],})
          table10.body[1].push({ text: 'OBT', alignment: 'center', bold: true, margin: [0,0,0,0], border: [false, false, true, true],})
        }
    
        table10.body[0].push({ text: `TOT`, alignment: "center", bold: true, margin: [0, 0, 0, 0], colSpan:3, border: [false, true, true, false]})
        table10.body[0].push({ text: '', alignment: 'center', bold: true, margin: [0,0,0,0], border: [false, false, false, false],})
        table10.body[0].push({ text: '', alignment: 'center', bold: true, margin: [0,0,0,0], border: [false, false, false, false],})
        table10.body[1].push({ text: `MAX`, alignment: "center", bold: true, margin: [0, 0, 0, 0], border: [false, false, true, true]})
        table10.body[1].push({ text: `MIN`, alignment: "center", bold: true, margin: [0, 0, 0, 0], border: [false, false, true, true]})
        table10.body[1].push({ text: `OBT`, alignment: "center", bold: true, margin: [0, 0, 0, 0], border: [false, false, true, true]})
        table10.body[0].push({ text: ``, alignment: "center", bold: true, margin: [0, 0, 0, 0], border: [false, true, true, false]})
        table10.body[1].push({ text: `AM`, alignment: "center", bold: true, margin: [0, 0, 0, 0], border: [false, false, true, true]})
        
        for(let k = 0; k < oddMarkPractical; k++) {
          table10.body[0].push({ text: student.oddSemesterdata.marks[0].practical[k].AssessmentName, alignment: 'center', colSpan:2, bold: true, margin: [0,0,0,0],border: [false, true, true, false], })
          table10.body[0].push({ text: '', alignment: 'center', bold: true, margin: [0,0,0,0],border: [false, false, false, false], })
          table10.body[1].push({ text: 'MIN', alignment: 'center', bold: true, margin: [0,0,0,0],border: [false, false, true, true], })
          table10.body[1].push({ text: 'OBT', alignment: 'center', bold: true, margin: [0,0,0,0],border: [false, false, true, true], })
        }

        table10.body[0].push({ text: `TOT`, alignment: "center", bold: true, margin: [0, 0, 0, 0], colSpan:3, border: [false, true, true, false]})
        table10.body[0].push({ text: '', alignment: 'center', bold: true, margin: [0,0,0,0], border: [false, false, false, false],})
        table10.body[0].push({ text: '', alignment: 'center', bold: true, margin: [0,0,0,0], border: [false, false, false, false],})
        table10.body[1].push({ text: `MAX`, alignment: "center", bold: true, margin: [0, 0, 0, 0], border: [false, false, true, true]})
        table10.body[1].push({ text: `MIN`, alignment: "center", bold: true, margin: [0, 0, 0, 0], border: [false, false, true, true]})
        table10.body[1].push({ text: `OBT`, alignment: "center", bold: true, margin: [0, 0, 0, 0], border: [false, false, true, true]})

        table10.body[0].push({ text: `TOT`, alignment: "center", bold: true, margin: [0, 0, 0, 0], colSpan:3, border: [false, true, true, false]})
        table10.body[0].push({ text: '', alignment: 'center', bold: true, margin: [0,0,0,0], border: [false, false, false, false],})
        table10.body[0].push({ text: '', alignment: 'center', bold: true, margin: [0,0,0,0], border: [false, false, false, false],})
        table10.body[1].push({ text: `MAX`, alignment: "center", bold: true, margin: [0, 0, 0, 0], border: [false, false, true, true]})
        table10.body[1].push({ text: `MIN`, alignment: "center", bold: true, margin: [0, 0, 0, 0], border: [false, false, true, true]})
        table10.body[1].push({ text: `OBT`, alignment: "center", bold: true, margin: [0, 0, 0, 0], border: [false, false, true, true]})

        table10.body[0].push({ text: '', alignment: 'center', bold: true, margin: [0,0,0,0], border: [false, true, true, false],})
        table10.body[0].push({ text: '', alignment: 'center', bold: true, margin: [0,0,0,0], border: [false, true, true, false],})
        table10.body[0].push({ text: '', alignment: 'center', bold: true, margin: [0,0,0,0], border: [false, true, true, false],})
        table10.body[0].push({ text: '', alignment: 'center', bold: true, margin: [0,0,0,0], border: [false, true, true, false],})
        table10.body[0].push({ text: '', alignment: 'center', bold: true, margin: [0,0,0,0], border: [false, true, true, false],})

        table10.body[1].push({ text: `GR`, alignment: "center", bold: true, margin: [0, 0, 0, 0], border: [false, false, true, true]})
        table10.body[1].push({ text: `GP`, alignment: "center", bold: true, margin: [0, 0, 0, 0], border: [false, false, true, true]})
        table10.body[1].push({ text: `EGP`, alignment: "center", bold: true, margin: [0, 0, 0, 0], border: [false, false, true, true]})
        table10.body[1].push({ text: `STS`, alignment: "center", bold: true, margin: [0, 0, 0, 0], border: [false, false, true, true]})
        table10.body[1].push({ text: `RMK`, alignment: "center", bold: true, margin: [0, 0, 0, 0], border: [false, false, true, true]})


        const table13 = {
          widths: [350, 160, 130, 130, 160, 130],
          body: [
            ...student.previousYearDetails.map((value, index) =>[
              {
                text: `${value.year} (Seat No - ${value.seatNo} Exam Event - ${value.examEvent})`,
                border: [false, false, false, false],
                margin: [0, 0, 0, 0],
              },
              {
                text: `Total Credit : ${value.credits}`,
                border: [false, false, false, false],
              },
              {
                text: `EGP : ${value.egp}`,
                border: [false, false, false, false],
              },
              {
                text: `SGPA : ${value.sgpa}`,
                border: [false, false, false, false],
              },
              {
                text: `Status : ${value.status}`,
                border: [false, false, false, false],
              },
              {
                text: `Grade : ${value.grade}`,
                border: [false, false, false, false],
                alignment: 'right',
              },
            ]),
          ],
        };

        const table14 = {
          widths: [180, 180, 180, 170, 170, 180],
          body: [
            [
              {
                text: `Grand Total: ${student.totalOfTotalObt}/${student.totalOfTotal}`,
                border: [false, false, false, false],
                margin: [0, 0, 0, 0],
              },
              {
                text: `Percentage : ${student.percentage}`,
                border: [false, false, false, false],
                alignment: 'center',
              },
              {
                text: `ECA Mark : ${student.ECAMark}`,
                border: [false, false, false, false],
                alignment: 'center',
              },
              {
                text: `(Balance Marks: ${student.balanceMark})`,
                border: [false, false, false, false],
                alignment: 'center',
                colSpan: 2,
              },
              {
                text: ``,
                border: [false, false, false, false],
              },
              {
                text: `Ordinance : ${student.ordinance}`,
                border: [false, false, false, false],
                alignment: 'right',
              },
            ],
            [
              {
                text: `Total Credit Earned : ${student.totalCredit}`,
                border: [false, false, false, false],
              },
              {
                text: `Total Earned Grade Points : ${student.totalEgp}`,
                border: [false, false, false, false],
                alignment: 'center',
              },
              {
                text: `GPA/SGPA : ${student.finalSgpa}`,
                border: [false, false, false, false],
                alignment: 'center',
              },
              {
                text: `Status : ${student.status}`,
                border: [false, false, false, false],
                alignment: 'center',
              },
              {
                text: `CGPA : ${student.finalSgpa}`,
                border: [false, false, false, false],
                alignment: 'center',
              },
              {
                text: `Final Grade : ${student.finalGrade}`,
                border: [false, false, false, false],
                alignment: 'right',
              },
            ]
          ],
        };


      table = [
        {
          text: text4,
          margin: [0, 0, 0, 0],
          fontSize: 10,
        },
        {
          text: text,
          fontSize: 10,
        },
        {
          table: table10,
          layout: layout,
          fontSize: 10,
          // pageBreak: "after" 
        },
        {
          table: table11,
          layout: layout,
          fontSize: 10,
          // pageBreak: "after" 
        },
        {
          table: {
            widths: [220, 213, 213, 213, 210],
            body: [
              [
                {
                  text: `${student.oddSemesterdata.semName}`,
                  border: [false, true, false, true],
                  margin: [10, 0, 0, 0],
                },
                {
                  text: `Total Credit : ${student.oddSemesterdata.totalCredit}`,
                  border: [false, true, false, true],
                },
                {
                  text: `EGP : ${student.oddSemesterdata.egp}`,
                  border: [false, true, false, true],
                },
                {
                  text: `SGPA : ${student.oddSemesterdata.sgpa}`,
                  border: [false, true, false, true],
                },
                {
                  text: `Status : ${student.oddSemesterdata.status}`,
                  border: [false, true, false, true],
                },
              ],
            ],
          },
          fontSize: 9,
          layout: layout,
          margin: [0, 5, 0, 5],
        },
        {
          table: table10,
          layout: layout,
          fontSize: 10,
          // pageBreak: "after" 
        },
        {
          table: table12,
          layout: layout,
          fontSize: 10,
          // pageBreak: "after" 
        },
        {
          table: {
            widths: [220, 213, 213, 213, 210],
            body: [
              [
                {
                  text: `${student.evenSemesterdata.semName}`,
                  border: [false, true, false, true],
                  margin: [10, 0, 0, 0],
                },
                {
                  text: `Total Credit : ${student.evenSemesterdata.totalCredit}`,
                  border: [false, true, false, true],
                },
                {
                  text: `EGP : ${student.evenSemesterdata.egp}`,
                  border: [false, true, false, true],
                },
                {
                  text: `SGPA : ${student.evenSemesterdata.sgpa}`,
                  border: [false, true, false, true],
                },
                {
                  text: `Status : ${student.evenSemesterdata.status}`,
                  border: [false, true, false, true],
                },
              ],
            ],
          },
          layout: layout,
          fontSize: 9,
          margin: [0, 5, 0, 5],
        },
        {
          table: table13,
          fontSize: 10,
          margin: [0, 0, 0, 10],
          layout: layout,
        },
        {
          table: table14,
          fontSize: 10,
        },
        
      ];
      
      if ((j < data[i].students.length - 1)) {
        table.push({ text: "", pageBreak: "after" });
      }
      table5.push(...table)
    }

    let table6 = [...table4, ...table5]


  contentDefinition.content = table6;

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
