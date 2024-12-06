import { PDF } from "./constant";
import { IEvenSemesterCredits, ISolMarksheet } from "./types";
import moment from "moment";

function generateFooter(currentPage:number, data: ISolMarksheet[]) {
  const date = new Date();
  // console.log('first', data[currentPage-1].statementNo)
  // console.log('first', currentPage)
  const currentDate = moment(date).format('DD MMMM YYYY');
   const table6 = {
      widths: ["*", "*"],
      headerRows: 1,
      body: [
        [
          {
            text: `Statement No : ${data[currentPage-1]?.statementNo || '-'}`,
            margin: [0, -60, 0, 0],
          },
          {
            image: `${data[currentPage-1]?.DBOEESignature}`
              ? `${data[currentPage-1]?.DBOEESignature}`
              : PDF.defaultPhoto,
            width: 93,
            height: 40,
            alignment: "center",
            margin: [10, -70, 0, 0],
            // text: ' '
          },
        ],
        [
          {
            image: `${data[currentPage-1]?.barcode || PDF.defaultPhoto}`,
            width:120,
            height: 20,
            margin: [0, -50.69, 0, 0],
          },
          {
            text: "Director",
            alignment: "center",
            margin: [0, -40, 0, 0],
          },
        ],
        [
          {
            text: `Date: ${data[currentPage-1]?.resultDate || '-'}`,
            fontSize: 10,
            margin: [0, -30, 0, 0],
          },
          {
              text: `Board of Examinations and Evaluation`,
              alignment: "center",
              fontSize: 10,
              margin: [0, -30, 0, 0],
            },
        ],
      ],
    };
    return table6;
}
function solMarksheet(data: ISolMarksheet[]) {

const contentDefinition: any = {
  pageSize: 'A4',
  pageMargins: [30, 10, 30, 10],
  footer: function(currentPage:number, pageCount:number) {
    return {
        margin: [31.94, 0, 20, 0],
        table: generateFooter(currentPage, data),
        fontSize: 10,
        layout: 'noBorders'
    };
},
content: [],
};



for (let i = 0; i < data.length; i++) {

  const table2 = {
    widths: [50, 220, 40, 40, 30, 40, 40],
    body: [
      ...data[i].oddSemesterSubjects.map((value: any, index: number) =>[
        {
          text:`${value.paperCode || '-'}`,
          alignment: "left",
          // bold: true,
          // margin: [0, 5, 0, 0],
          
          borderColor: ['#6b7280', '#6b7280', '#6b7280', '#6b7280'],
          border: [true, false, true, true],
        },
        {
          text: `${value.paperName || '-'}`,
          alignment: "left",
          // bold: true,
          // margin: [0, 5, 0, 0],
          
          borderColor: ['#6b7280', '#6b7280', '#6b7280', '#6b7280'],
          border: [true, false, true, true],
        },
        {
          text: `${value.credits || '-'}`,
          alignment: "center",
          // bold: true,
          // rowSpan: index == 1 ? 2: '',
          // margin:  index == 1 ? [0, 10, 0, 0] : [0, 0, 0, 0],
          
          borderColor: ['#6b7280', '#6b7280', '#6b7280', '#6b7280'],
          border: [true, false, true, true],
        },
        {
          text:`${value.gradeObtained || '-'}`,
          alignment: "center",
          // bold: true,
          // rowSpan: index == 1 ? 2: '',
          // margin:  index == 1 ? [0, 10, 0, 0] : [0, 0, 0, 0],
          
          borderColor: ['#6b7280', '#6b7280', '#6b7280', '#6b7280'],
          border: [true, false, true, true],
        },
        {
          text: `${value.gradePoint || '-'}`,
          alignment: "center",
          // bold: true,
          // rowSpan: index == 1 ? 2: '',
          // margin:  index == 1 ? [0, 10, 0, 0] : [0, 0, 0, 0],
          
          borderColor: ['#6b7280', '#6b7280', '#6b7280', '#6b7280'],
          border: [true, false, true, true],
        },
        {
          text: `${value.earnedGRPoints || '-'}`,
          alignment: "center",
          // bold: true,
          // rowSpan: index == 1 ? 2: '',
          // margin:  index == 1 ? [0, 10, 0, 0] : [0, 0, 0, 0],
          
          borderColor: ['#6b7280', '#6b7280', '#6b7280', '#6b7280'],
          border: [true, false, true, true],
        },
        {
          text: `${value.remarks || '-'}`,
          alignment: "center",
          // bold: true,
          // rowSpan: index == 1 ? 2: '',
          // margin:  index == 1 ? [0, 10, 0, 0] : [0, 0, 0, 0],
          
          borderColor: ['#6b7280', '#6b7280', '#6b7280', '#6b7280'],
          border: [true, false, true, true],
        },
      ]),
    ],
  }
  let table5:any;
  if (data[i].evenSemesterSubjects.length > 0) {
   table5 = {
    widths: [50, 220, 40, 40, 30, 40, 40],
    body: [
      ...data[i].evenSemesterSubjects.map((subject: any, index: number) =>[
        {
          text: `${subject.paperCode || '-'}`,
          alignment: "left",
          // bold: true,
          // margin: [0, 5, 0, 0],
          
          borderColor: ['#6b7280', '#6b7280', '#6b7280', '#6b7280'],
          border: [true, false, true, true],
        },
        {
          text: `${subject.paperName || '-'}`,
          alignment: "left",
          // bold: true,
          // margin: [0, 5, 0, 0],
          
          borderColor: ['#6b7280', '#6b7280', '#6b7280', '#6b7280'],
          border: [true, false, true, true],
        },
        {
          text: `${subject.credits || '-'}`,
          alignment: "center",
          // bold: true,
          rowSpan: 0,
          margin: [0, 0, 0, 0],
          
          borderColor: ['#6b7280', '#6b7280', '#6b7280', '#6b7280'],
          border: [true, false, true, true],
        },
        {
          text: `${subject.gradeObtained || '-'}`,
          alignment: "center",
          // bold: true,
          rowSpan: 0,
          margin: [0, 0, 0, 0],
          
          borderColor: ['#6b7280', '#6b7280', '#6b7280', '#6b7280'],
          border: [true, false, true, true],
        },
        {
          text: `${subject.gradePoint || '-'}`,
          alignment: "center",
          // bold: true,
          rowSpan: 0,
          margin: [0, 0, 0, 0],
          
          borderColor: ['#6b7280', '#6b7280', '#6b7280', '#6b7280'],
          border: [true, false, true, true],
        },
        {
          text: `${subject.earnedGRPoints || '-'}`,
          alignment: "center",
          // bold: true,
          rowSpan: 0,
          margin: [0, 0, 0, 0],
          
          borderColor: ['#6b7280', '#6b7280', '#6b7280', '#6b7280'],
          border: [true, false, true, true],
        },
        {
          text: `${subject.remarks || '-'}`,
          alignment: "center",
          // bold: true,
          rowSpan: 0,
          margin: [0, 0, 0, 0],
          
          borderColor: ['#6b7280', '#6b7280', '#6b7280', '#6b7280'],
          border: [true, false, true, true],
        },
      ]),
    ],
  }
  }

    const table3 = {
      widths: [50, 80, 70, 52, 89, 128],
      body: [
          ...data[i].oddSemesterCredits.map((value:IEvenSemesterCredits, index:number) => [
          {
            text: `${value.semesterName || '-'}`,
            bold: true,
            
            borderColor: ['#6b7280', '#6b7280', '#6b7280', '#6b7280'],
            border: [true, false, true, true],
          },
          {
            text: `Total Credits: ${value.credits || '-'}`,
            bold: true,
            
            borderColor: ['#6b7280', '#6b7280', '#6b7280', '#6b7280'],
            border: [true, false, true, true],
          },
          {
            text:  `EGP: ${value.egp || '-'}`,
            bold: true,
            
            borderColor: ['#6b7280', '#6b7280', '#6b7280', '#6b7280'],
            border: [true, false, true, true],
          },
          {
            text:  `SGPA: ${value.sgpa || '-'}`,
            bold: true,
            
            borderColor: ['#6b7280', '#6b7280', '#6b7280', '#6b7280'],
            border: [true, false, true, true],
          },
          {
            text:  `Status: ${value.status || '-'}`,
            bold: true,
            
            borderColor: ['#6b7280', '#6b7280', '#6b7280', '#6b7280'],
            border: [true, false, true, true],
          },
          {
              text: '',
              
              borderColor: ['#6b7280', '#6b7280', '#6b7280', '#6b7280'],
              border: [true, false, true, true],
          }
        ]),
      ],
    }
  
    let table6:any;
    if(data[i].evenSemesterCredits.length > 0) {
     table6 = {
      widths: [50, 80, 70, 52, 89, 128],
      body: [
        ...data[i].evenSemesterCredits.map((value:IEvenSemesterCredits, index:number) => [
          {
            text: `${value.semesterName || '-'}`,
            bold: true,
            
            borderColor: ['#6b7280', '#6b7280', '#6b7280', '#6b7280'],
            border: [true, false, true, true],
          },
          {
            text: `Total Credits: ${value.credits || '-'}`,
            bold: true,
            
            borderColor: ['#6b7280', '#6b7280', '#6b7280', '#6b7280'],
            border: [true, false, true, true],
          },
          {
            text:  `EGP: ${value.egp || '-'}`,
            bold: true,
            
            borderColor: ['#6b7280', '#6b7280', '#6b7280', '#6b7280'],
            border: [true, false, true, true],
          },
          {
            text:  `SGPA: ${value.sgpa || '-'}`,
            bold: true,
            
            borderColor: ['#6b7280', '#6b7280', '#6b7280', '#6b7280'],
            border: [true, false, true, true],
          },
          {
            text:  `Status: ${value.status || '-'}`,
            bold: true,
            
            borderColor: ['#6b7280', '#6b7280', '#6b7280', '#6b7280'],
            border: [true, false, true, true],
          },
          {
              text: '',
              
              borderColor: ['#6b7280', '#6b7280', '#6b7280', '#6b7280'],
              border: [true, false, true, true],
          }
        ]),
      ],
    }
  }

    const table4 = {
      widths: [50, 110, 70, 65, 55, 119],
      headerRows: 2,
      body: [
        [
          {
            text: `Cumulative`,
            alignment: "center",
            bold: true,
            rowSpan: 2,
            margin: [ 0, 10, 0, 0],
            
            borderColor: ['#6b7280', '#6b7280', '#6b7280', '#6b7280'],
            border: [true, false, true, true],
          },
          {
            text: `Total Credits: ${data[i].totalCredit || '-'}`,
            bold: true,
            
            borderColor: ['#6b7280', '#6b7280', '#6b7280', '#6b7280'],
            border: [true, false, true, true],
          },
          {
            text: `Total EGP: ${data[i].totalEgp || '-'}`,
            bold: true,
            
            borderColor: ['#6b7280', '#6b7280', '#6b7280', '#6b7280'],
            border: [true, false, true, true],
          },
          {
            text: `SGPA: ${data[i].sgpa || '-'}`,
            bold: true,
            
            borderColor: ['#6b7280', '#6b7280', '#6b7280', '#6b7280'],
            border: [true, false, true, true],
          },
          {
            text: `CGPA: ${data[i].sgpa || '-'}`,
            bold: true,
            
            borderColor: ['#6b7280', '#6b7280', '#6b7280', '#6b7280'],
            border: [true, false, true, true],
          },
          {
            text: `Status: ${data[i].status || '-'}`,
            bold: true,
            
            borderColor: ['#6b7280', '#6b7280', '#6b7280', '#6b7280'],
            border: [true, false, true, true],
          },
        ],
        [
          "",
          { text: `Grand Total: ${data[i].totalObtainMarks}/${data[i].totalMarks}`, bold: true,  borderColor: ['#6b7280', '#6b7280', '#6b7280', '#6b7280'],},
          // ${data[i].ordinance || '-'}
          { text: `Equivalent Percentage: ${data[i].percentage || '-'}`, bold: true, colSpan:2,  borderColor: ['#6b7280', '#6b7280', '#6b7280', '#6b7280'],},
          '',
          { text: `Grade: ${data[i].finalGrade || '-'}`, bold: true,  borderColor: ['#6b7280', '#6b7280', '#6b7280', '#6b7280'],},
          { text:[{
            text: `Ordinance: `, bold: true, fontSize: 9,
          },{
          text: `${data[i].ordinance || '-'}`,
          fontSize: 7
          }
          ],  borderColor: ['#6b7280', '#6b7280', '#6b7280', '#6b7280'], },
         
        ],
      ],
    }
    
    const ms:any = [];
    if (data[i].previousYearData.length > 0) {
      for(let m = data[i].previousYearData.length-1; m >=0; m--) {
        const value = data[i].previousYearData[m]
        ms.push(
        [
          {
            text: `${value.year} (Seat No:${value.seatNo}  Exam Event: ${value.examEvent})`,
            borderColor: ['#6b7280', '#6b7280', '#6b7280', '#6b7280'],
            border: [true, false, true, true],
            bold: true,
            colSpan: 6
          },
          '',
          '',
          '',
          '',
          "",
        ],
          [
            {
              text: '',
              borderColor: ['#6b7280', '#6b7280', '#6b7280', '#6b7280'],
             },
          {
            text: `Total Credits: ${value.totalCredits}`,
            bold: true,
            
            borderColor: ['#6b7280', '#6b7280', '#6b7280', '#6b7280'],
            border: [true, false, true, true],
          },
          {
            text: `EGP: ${value.egp}`,
            bold: true,
            
            borderColor: ['#6b7280', '#6b7280', '#6b7280', '#6b7280'],
            border: [true, false, true, true],
          },
          {
            text:  `SGPA: ${value.sgpa}`,
            bold: true,
            
            borderColor: ['#6b7280', '#6b7280', '#6b7280', '#6b7280'],
            border: [true, false, true, true],
          },
          {
            text:  `Status: ${value.status}`,
            bold: true,
            
            borderColor: ['#6b7280', '#6b7280', '#6b7280', '#6b7280'],
            border: [true, false, true, true],
          },
          {
            text: '',
            borderColor: ['#6b7280', '#6b7280', '#6b7280', '#6b7280'],
           },
        ])};
    }

    const table7 = {
      widths: [50, 80, 70, 52, 89, 128],
      body: ms 
    }


  //    const table8 = {
  //     widths: [50, 80, 70, 52, 89, 128],
  //     body: [
  //       [
  //         {
  //           text: 'B.Ed - II (Seat No: 032426  Exam Event: March-2023)',
  //           bold: true,
  //           border: [true, false, true, true],
  //           borderColor: ['#6b7280', '#6b7280', '#6b7280', '#6b7280'],
  //           colSpan: 6
  //         },
  //         '',
  //         '',
  //         '',
  //         '',
  //         "",
  //       ],
  //         [
  //          {
  //           text: '',
  //           borderColor: ['#6b7280', '#6b7280', '#6b7280', '#6b7280'],
  //          },
  //         {
  //           text: `Total Credits: 22.00`,
  //           bold: true,
            
  //           borderColor: ['#6b7280', '#6b7280', '#6b7280', '#6b7280'],
  //           border: [true, false, true, true],
  //         },
  //         {
  //           text: `EGP: 188`,
  //           bold: true,
            
  //           borderColor: ['#6b7280', '#6b7280', '#6b7280', '#6b7280'],
  //           border: [true, false, true, true],
  //         },
  //         {
  //           text:  `SGPA: 8.55`,
  //           bold: true,
            
  //           borderColor: ['#6b7280', '#6b7280', '#6b7280', '#6b7280'],
  //           border: [true, false, true, true],
  //         },
  //         {
  //           text:  `Status: Pass`,
  //           bold: true,
            
  //           borderColor: ['#6b7280', '#6b7280', '#6b7280', '#6b7280'],
  //           border: [true, false, true, true],
  //         },
  //         {
  //           text: '',
  //           borderColor: ['#6b7280', '#6b7280', '#6b7280', '#6b7280'],
  //          },
  //       ],
  //     ],
  // }

    

  function pdf() {
      const table = [
          {
              text: '',
              // margin:[5, 5, 5, 140]
              margin:[5, 5, 5, 100]
              
          },
          {
            stack:[
              {
                // text:`Statement of Grade for ${data[i].courseName || '-'} Choice Based Credit System`,
                text:`Statement of Grade for Faculty of Humanities:-
Bachelor of Arts (Hons) B.A (with Credits) - Regular - CBCS Pattern 2019
- B.A. -III Sem-VI`,
                bold:true,
                alignment: 'center',
                margin: [-10, 0, 0, 0],
            },
              {
                // text: `Examination: (${data[i].examMonthAndYear || '-'})`,
                text: `Examination: ${data[i].examEvent || '-'}`,
                // ${data[i].examination || '-'} 
                bold:true,
                margin: [0, 0, 0, -10],
                alignment: 'center',
            },
            ]
          },
          {
           columns : [
              {   
                  width:430,
                  stack:[
                      {
                          table: {
                              widths: [250, 150],
                              body:[
                                  [{ text:[{text: 'Name: '}, {text:`${data[i].studentName || '-'}`, bold:true,}], colSpan:2}, ""],
                                  // [{ text:[{text: 'Specialization: '}, {text:`${data[i].specialization || '-'}`, bold:true,}], colSpan:2}, ""],
                                  [{ text:[{text: 'PRN: '}, {text:`${data[i].prnNo || '-'}`, bold:true,}]}, { text:[{text: 'Seat No: '}, {text:`${data[i].seatNo || '-'}`, bold:true,}]},],
                                  [{ text:[{text: 'College: '}, {text:`${data[i].collegeName || '-'}`, bold:true,}], colSpan:2}, ""],
                                  [{ text:[{text: 'Exam Center: '}, {text:`${data[i].examCenter || '-'}`, bold:true,}], colSpan:2}, ""],
                                  // [{ text:[{text: 'Subject Name: '}, {text:`${data[i].subjectName || '-'}`, bold:true,}], colSpan:2}, ""],
                              ]
                          },
                          layout: "noBorders",
                          margin: [0, 15, 0, 0]
                      }
                  ], 
              },
              {
                image: `${data[i].studentPhoto}`
                  ? `${data[i].studentPhoto}`
                  : PDF.defaultPhoto,
                width: 70,
                height: 80,
                margin:[10, -17, 60, 3]
            },
           ],
           fontSize: 11
          },
          {
              table: {
                  widths: [50, 220, 40, 40, 30, 40, 40],
                  headerRows: 1,
                  body: [
                    [
                      {
                        text: `Paper Code`,
                        alignment: "center",
                        bold: true,
                        borderColor: ['#6b7280', '#6b7280', '#6b7280', '#6b7280'],
                        margin: [0, 5, 0, 0],
                      },
                      {
                        text: `Paper Name`,
                        alignment: "center",
                        bold: true,
                        borderColor: ['#6b7280', '#6b7280', '#6b7280', '#6b7280'],
                        margin: [0, 5, 0, 0],
                        height: 65.53,
                      },
                      {
                        text: `Credits`,
                        alignment: "center",
                        bold: true,
                        borderColor: ['#6b7280', '#6b7280', '#6b7280', '#6b7280'],
                        margin: [0, 5, 0, 0],
                      },
                      {
                        text: `Grade Obtained`,
                        alignment: "center",
                        borderColor: ['#6b7280', '#6b7280', '#6b7280', '#6b7280'],
                        bold: true,
                        margin: [0, 5, 0, 0],
                      },
                      {
                        text: `Grade Points`,
                        alignment: "center",
                        borderColor: ['#6b7280', '#6b7280', '#6b7280', '#6b7280'],
                        bold: true,
                        margin: [0, 5, 0, 0],
                      },
                      {
                        text: `Earned Gr Points`,
                        alignment: "center",
                        borderColor: ['#6b7280', '#6b7280', '#6b7280', '#6b7280'],
                        bold: true,
                        margin: [0, 5, 0, 0],
                      },
                      {
                        text: `Remark`,
                        alignment: "center",
                        borderColor: ['#6b7280', '#6b7280', '#6b7280', '#6b7280'],
                        bold: true,
                        margin: [0, 5, 0, 0],
                      },
                    ],
                  ],
                },
                fontSize: 8,
          },
          {
              table: table2,
              fontSize: 8,
          },
          {
              table: table3,
              fontSize: 8,
          },
          table5 ? {
              table: table5,
              fontSize: 8,
          } : '',
          table6 ? {
            table: table6,
            fontSize: 8,
        } : '',
        // {
        //   table: table8,
        //   fontSize: 8,
        // },
        data[i].previousYearData.length > 0 ?{
          table: table7,
          fontSize: 8,
        } : "",
          {
              table: table4,
              fontSize: 8,
          },
          {
              table: {
                  widths: [514],
                  headerRows: 1,
                  body: [
                   [
                      {
                          text: 'Abbreviations: Gr: Grade, SGPA: Semester Grade Point Average, CGPA: Cumulative Grade Point Average, EGP: Earned Grade Points, E: Exempted, C: Current Appearance, X: Past Performance, N: Not Exempted, UM: Unfair Means, FC: Fail in University Assessment, FR: Fail in College Assessment',
                          borderColor: ['#6b7280', '#6b7280', '#6b7280', '#6b7280'],
                          border: [true, false, true, true]
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
export default solMarksheet;
