import { ISolMarksheet } from "./types";
import moment from "moment";

 function generateFooter(data: ISolMarksheet[]) {
    const date = new Date();
    const currentDate = moment(date).format('DD MMMM YYYY');
    let table6;
    for (let i = 0; i < data.length; i++) {
      table6 = {
        widths: ["*", "*"],
        headerRows: 1,
        body: [
          [
            {
              text: `Statement No : ${data[i].statementNo || '-'}`,
              margin: [0, -77, 0, 0],
            },
            {
              image: `${data[i].DBOEESignature}`
                ? `${data[i].DBOEESignature}`
                : `${process.cwd()}/public/collegeLogo/defaultLogo.png`,
              width: 93,
              height: 40,
              alignment: "center",
              margin: [10, -87, 0, 0],
            },
          ],
          [
            {
              image: `${data[i].barcode}`,
              width:120,
              height: 20,
              margin: [0, -65.69, 0, 0],
            },
            {
              text: "Director",
              alignment: "center",
              margin: [0, -55, 0, 0],
            },
          ],
          [
            {
              text: `Date: ${currentDate || '-'}`,
              fontSize: 10,
              margin: [0, -45, 0, 0],
            },
            {
                text: `Board of Examinations and Evaluation`,
                alignment: "center",
                fontSize: 10,
                margin: [0, -45, 0, 0],
              },
          ],
        ],
      };
    }
    return table6;
  }
 function solMarksheet(data: ISolMarksheet[]) {

  const contentDefinition: any = {
    pageSize: 'A4',
    pageMargins: [30, 10, 30, 10],
    content: [],
    footer: {
        margin: [31.94, -22, 20, 10],
        table: generateFooter(data),
        fontSize: 10,
        layout: "noBorders",
      },
  };

  for (let i = 0; i < data.length; i++) {
    const table2 = {
        widths: [50, 220, 40, 40, 30, 40, 40],
        headerRows: 1,
        body: [
            ...data[i].subjects.map((value: any, index: number) => [
            {
              text: `${value.paperCode || '-'}`,
              alignment: "left",
              bold: true,
              margin: [0, 5, 0, 0],
              border: [true, false, true, true],
            },
            {
              text: `${value.paperName || '-'}`,
              alignment: "left",
              bold: true,
              margin: [0, 5, 0, 0],
              border: [true, false, true, true],
            },
            {
              text: `${value.credits || '-'}`,
              alignment: "center",
              bold: true,
              rowSpan: index == 1 ? 2: '',
              margin: [0, 15, 0, 0],
              border: [true, false, true, true],
            },
            {
              text:`${value.gradeObtained || '-'}`,
              alignment: "center",
              bold: true,
              rowSpan: index == 1 ? 2: '',
              margin: [0, 15, 0, 0],
              border: [true, false, true, true],
            },
            {
              text: `${value.gradePoint || '-'}`,
              alignment: "center",
              bold: true,
              rowSpan: index == 1 ? 2: '',
              margin: [0, 15, 0, 0],
              border: [true, false, true, true],
            },
            {
              text: `${value.earnedGRPoints || '-'}`,
              alignment: "center",
              bold: true,
              rowSpan: index == 1 ? 2: '',
              margin: [0, 15, 0, 0],
              border: [true, false, true, true],
            },
            {
              text: `${value.remarks || '-'}`,
              alignment: "center",
              bold: true,
              rowSpan: index == 1 ? 2: '',
              margin: [0, 15, 0, 0],
              border: [true, false, true, true],
            },
          ]),
        ],
      }

      const table3 = {
        widths: [50, 80, 70, 52, 89, 128],
        body: [
            ...data[i].credits.map((value: any, index: number) => [
            {
              text: `${value.semesterName || '-'}`,
              bold: true,
              border: [true, false, true, true],
            },
            {
              text: `Credits: ${value.credits || '-'}`,
              bold: true,
              border: [true, false, true, true],
            },
            {
              text:  `EGP: ${value.egp || '-'}`,
              bold: true,
              border: [true, false, true, true],
            },
            {
              text:  `SGPA: ${value.sgpa || '-'}`,
              bold: true,
              border: [true, false, true, true],
            },
            {
              text:  `Status: ${value.status || '-'}`,
              bold: true,
              border: [true, false, true, true],
            },
            {
                text: '',
                border: [true, false, true, true],
            }
          ]),
        ],
      }

     const table4 = {
        widths: [50, 100, 90, 90, 148],
        headerRows: 2,
        body: [
          [
            {
              text: `Cumulative`,
              alignment: "center",
              bold: true,
              rowSpan: 2,
              margin: [ 0, 10, 0, 0],
              border: [true, false, true, true],
            },
            {
              text: `Total Credits: ${data[i].totalCredit || '-'}`,
              bold: true,
              border: [true, false, true, true],
            },
            {
              text: `Total EGP: ${data[i].totalEgp || '-'}`,
              bold: true,
              border: [true, false, true, true],
            },
            {
              text: `SGPA: ${data[i].sgpa || '-'}`,
              bold: true,
              border: [true, false, true, true],
            },
            {
              text: `Status: ${data[i].status || '-'}`,
              bold: true,
              border: [true, false, true, true],
            },
          ],
          [
            "",
            { text: `Ordinance: ${data[i].ordinance || '-'}`, bold: true,},
            { text: ``, colSpan: 3, bold: true, alignment: "center" },
            "",
            "",
          ],
        ],
      }

    function pdf() {
        const table = [
            {
                text: '',
                margin:[5, 5, 5, 70]
            },
            {
             columns : [
                {   
                    width:430,
                    stack:[
                        {
                            text:`Statement of Grade for ${data[i].courseName || '-'} Choice Based Credit System`,
                            bold:true,
                            alignment: 'center',
                            margin: [20, 0, 10,10],
                        },
                        {
                            text: `Examination: ${data[i].examination || '-'} (${data[i].examMonthAndYear || '-'})`,
                            bold:true,
                            margin: [20, 0, 10,10],
                            alignment: 'center',
                        },
                        {
                            table: {
                                widths: [250, 150],
                                body:[
                                    [{ text:[{text: 'Name: '}, {text:`${data[i].studentName || '-'}`, bold:true,}], colSpan:2}, ""],
                                    [{ text:[{text: 'PRN: '}, {text:`${data[i].prnNo || '-'}`, bold:true,}]}, { text:[{text: 'Seat Number: '}, {text:`${data[i].seatNo || '-'}`, bold:true,}]},],
                                    [{ text:[{text: 'College: '}, {text:`${data[i].collegeName || '-'}`, bold:true,}], colSpan:2}, ""],
                                    [{ text:[{text: 'Exam Center: '}, {text:`${data[i].examCenter || '-'}`, bold:true,}], colSpan:2}, ""],
                                ]
                            },
                            layout: "noBorders",
                        }
                    ], 
                },
                {
                    image: `${data[i].studentPhoto}`
                      ? `${data[i].studentPhoto}`
                      : `${process.cwd()}/public/collegeLogo/defaultLogo.png`,
                    width: 70,
                    height: 80,
                    margin:[10, 10, 60, 10]
                },
             ],
             fontSize: 10
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
                          text: `Grade Obtained`,
                          alignment: "center",
                          bold: true,
                          margin: [0, 5, 0, 0],
                        },
                        {
                          text: `Grade Points`,
                          alignment: "center",
                          bold: true,
                          margin: [0, 5, 0, 0],
                        },
                        {
                          text: `Earned Gr Points`,
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
                table: table2,
                fontSize: 9,
            },
            {
                table: table3,
                fontSize: 9,
            },
            {
                table: table4,
                fontSize: 9,
            },
            {
                table: {
                    widths: [514],
                    headerRows: 1,
                    body: [
                     [
                        {
                            text: 'Abbreviations: Gr: Grade, SGPA: Semester Grade Point Average, CGPA: Cumulative Grade Point Average, EGP: Earned Grade Points, E: Exempted, C: Current Appearance, X: Past Performance, N: Not Exempted, UM: Unfair Means, FC: Fail in University Assessment, FR: Fail in College Assessment',
                            border: [true, false, true, true]
                        }
                     ]
                    ],
                  },
                  fontSize: 9,
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
