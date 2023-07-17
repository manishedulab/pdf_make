import data from "./MOCK_DATA (5).json";
import { IMarksheet, ISubjectTypePdf } from "./types";

function marksheet (data:IMarksheet[]) {

let table2;
let table3;
let table4;
let externalMax: number[] = [];
let internalMax: number[] = [];
let externalObt: number[] = [];
let internalObt: number[] = [];
let credit: number[] = [];
let cgp: number[] = [];
let total: number[] = [];
let externalMaxTotal: number[] = [];
let internalMaxTotal: number[] = [];
let externalObtTotal: number[] = [];
let internalObtTotal: number[] = [];
let totalCredit: number[] = [];
let totalCgp: number[] = [];
let totalGp: number[] = [];
let totalOfTotal: number[] = [];
let result: string[] = [];

const markStatement: any = {
  pageSize: {
    width: 1100,
    height: 650,
  },
  pageMargins: [20, 10, 20, 10],
  content: [],
};

for (let k = 0; k < data.length; k++) {
  externalMax = [];
  internalMax = [];
  externalObt = [];
  internalObt = [];
  credit = [];
  cgp = [];
  total = [];
  externalMaxTotal = [];
  internalMaxTotal = [];
  externalObtTotal = [];
  internalObtTotal = [];
  totalCredit = [];
  totalCgp = [];
  totalGp = [];
  totalOfTotal = [];
  result = [];

  for (let j = 0; j < data[k]["subjects"].length; j++) {
    externalMax.push(data[k]["subjects"][j].externalMax);
    internalMax.push(data[k]["subjects"][j].internalMax);
    externalObt.push(data[k]["subjects"][j].externalObt);
    internalObt.push(data[k]["subjects"][j].internalObt);
    credit.push(data[k]["subjects"][j].credit);
    cgp.push(data[k]["subjects"][j].cgp);
    total.push(data[k]["subjects"][j].total);
  }

  /* This code is calculating various totals and scores for each student's academic performance. */
  externalMaxTotal.push(
    externalMax.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    )
  );
  internalMaxTotal.push(
    internalMax.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    )
  );
  const sum = externalObt.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  externalObtTotal.push(sum);
  internalObtTotal.push(
    internalObt.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    )
  );
  const creditScore = credit.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  totalCredit.push(creditScore);
  const cgpScore = cgp.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  totalCgp.push(cgpScore);
  const totalMark = total.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  totalOfTotal.push(totalMark);
  const gpScore = Math.round((cgpScore / creditScore) * 100) / 100;
  totalGp.push(gpScore);

  /* This code block is checking the total marks obtained by a student and assigning
  a result based on the range of marks. */
  if (sum >= 315.45) {
    result.push("First Class with Distinction");
  } else if (sum >= 277.396) {
    result.push("First Class");
  } else if (sum >= 231.33) {
    result.push("Higher Second Class");
  } else if (sum >= 210.3) {
    result.push("Second Class");
  } else if (sum >= 0) {
    result.push("pass");
  } else {
    result.push("fail");
  }

  table2 = {
    widths: [110, 340, 180, 400],
    headerRows: 1,
    body: [
      [
        {
          text: `SeatNo: ${data[k].seatNo || '-'}`,
          bold: true,
        },
        {
          text:`Name: ${data[k].studentName || '-'}` ,
          bold: true,
          // colSpan: 2,
        },
        {
          text: `EnrollmentNo: ${data[k].enrollmentNo || '-'}`,
          bold: true,
        },
        {
          text: `College: ${data[k].collegeName || '-'}`,
          bold: true,
        },
      ],
    ],
  };

  table3 = {
    headerRows: 1,
    widths: [320, 40, 40, 35, 33, 33, 35, 35, 35, 64, 67, 63, 63, 70],
    body: [
      ...data[k]["subjects"].map((value:any) => [
        {
          text: value.subjectName || '-',
          margin: [0, 7, 0, 0],
          border: [false, false, false, false],
        },
        {
          text: ISubjectTypePdf[value.subjectType as keyof typeof ISubjectTypePdf] || '-',
          margin: [0, 7, 0, 0],
          alignment: "center",
          border: [false, false, false, false],
        },
        {
          text: value.credit || '-',
          alignment: "center",
          margin: [0, 7, 0, 0],
          border: [false, false, false, false],
        },
        {
          text: `${value.externalMax || '-'}`,
          alignment: "center",
          margin: [0, 7, 0, 0],
          border: [false, false, false, false],
        },
        {
          text: `${value.externalMin || '-'}`,
          alignment: "center",
          margin: [0, 7, 0, 0],
          border: [false, false, false, false],
        },
        {
          text: `${value.externalObt || '-'}`,
          alignment: "center",
          margin: [0, 7, 0, 0],
          border: [false, false, false, false],
        },
        {
          text: `${value.internalMax || '-'}`,
          alignment: "center",
          margin: [0, 7, 0, 0],
          border: [false, false, false, false],
        },
        {
          text: `${value.internalMin || '-'}`,
          alignment: "center",
          margin: [0, 7, 0, 0],
          border: [false, false, false, false],
        },
        {
          text: `${value.internalObt || '-'}`,
          alignment: "center",
          margin: [0, 7, 0, 0],
          border: [false, false, false, false],
        },
        {
          text: value.total || '-',
          alignment: "center",
          margin: [0, 7, 0, 0],
          border: [false, false, false, false],
        },
        {
          text: value.grade || '-',
          alignment: "center",
          margin: [0, 7, 0, 0],
          border: [false, false, false, false],
        },
        {
          text: value.gp.toFixed(2) || '-',
          alignment: "center",
          margin: [0, 7, 0, 0],
          border: [false, false, false, false],
        },
        {
          text: value.cgp.toFixed(1) || '-',
          alignment: "center",
          margin: [0, 7, 0, 0],
          border: [false, false, false, false],
        },
        {
          text: value.status || '-',
          alignment: "center",
          margin: [0, 7, 0, 0],
          border: [false, false, false, false],
        },
      ]),
    ],
  };

  table4 = {
    headerRows: 1,
    widths: [320, 40, 40, 35, 33, 33, 35, 35, 35, 64, 67, 63, 63, 70],
    body: [
       [ 
        {
          text:`Result:${result || '-'}`  ,
          margin: [0, 7, 0, 0],
          border: [false, false, false, false],
          bold:true,
        },
        {
          text: "Total",
          alignment: "center",
          margin: [0, 7, 0, 0],
          border: [false, false, false, false],
          bold:true,
        },
        {
          text: totalCredit || '-',
          alignment: "center",
          margin: [0, 7, 0, 0],
          border: [false, false, false, false],
          bold:true,
        },
        {
          text: externalMaxTotal || '-',
          alignment: "center",
          margin: [0, 7, 0, 0],
          border: [false, false, false, false],
          bold:true,
        },
        {
          text: "",
          alignment: "center",

          margin: [0, 7, 0, 0],
          border: [false, false, false, false],
          bold:true,
        },
        {
          text: externalObtTotal || '-',
          alignment: "center",
          margin: [0, 7, 0, 0],
          border: [false, false, false, false],
          bold:true,
        },
        {
          text: internalMaxTotal || '-',
          alignment: "center",
          margin: [0, 7, 0, 0],
          border: [false, false, false, false],
          bold:true,
        },
        {
          text: "",
          alignment: "center",
          margin: [0, 7, 0, 0],
          border: [false, false, false, false],
          bold:true,
        },
        {
          text: internalObtTotal || '-',
          alignment: "center",
          margin: [0, 7, 0, 0],
          border: [false, false, false, false],
          bold:true,
        },
        {
          text: totalOfTotal || '-',
          alignment: "center",
          margin: [0, 7, 0, 0],
          border: [false, false, false, false],
          bold:true,
        },
        {
          text: "",
          alignment: "center",
          margin: [0, 7, 0, 0],
          border: [false, false, false, false],
          bold:true,
        },
        {
          text: "",
          alignment: "center",
          margin: [0, 7, 0, 0],
          border: [false, false, false, false],
          bold:true,
        },
        {
          text: totalCgp || '-',
          alignment: "center",
          margin: [0, 7, 0, 0],
          border: [false, false, false, false],
          bold:true,
        },
        {
          text: "SGPA",
          alignment: "center",
          margin: [0, 7, 0, 0],
          border: [false, false, false, false],
          bold:true,
        },
      ],
    ]  
  };

  markStatement.content.push(JSON.parse(JSON.stringify(mark(table2, table3, table4))));
  if (k < (data.length - 1)) {
    markStatement.content.push({ text: "", pageBreak: "after" });
  }

function mark(table2: any, table3: any, table4:any) {
  const table = [
    [
      {
        text: "HSNC UNIVERSITY",
        fontSize: 20,
        alignment: "center",
        lineHeight: 1.3,
        bold:true,
      },
      {
        text: "STATEMENT OF MARKS OBTAINED IN EACH SUBJECT AT THE",
        // fontSize:20,
        alignment: "center",
        lineHeight: 1.2,
      },
      {
        // "Bachelor of Interior Design, Semester-1 Examination-JUL-2021"
        text: `${data[k].courseName || '-'}, ${data[k].semesterName || '-'} Examination-${data[k].examYear || '-'}`,
        fontSize: 15,
        alignment: "center",
        bold: true,
        lineHeight: 1.2,
      },
    ],
    [
      {
        margin: [0, 8, 0, 0],
        table: table2,
        layout: "noBorders",
      },
    ],
    [
      {
        table: {
          widths: [320, 40, 40, 120, 120, "*", "*", "*", "*", "*"],
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
                    // valign: "bottom",
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
                margin: [0, 15, 0, 0],
                text: [
                  {
                    text: `Credit`,
                    alignment: "center",
                    verticalAlignment: "bottom",
                    bold: true,
                    lineHeight: 1.2,
                  },
                ],
              },
              {
                margin: [0, 5, 0, 0],
                text: [
                  {
                    text: `External`,
                    alignment: "center",
                    verticalAlignment: "bottom",
                    bold: true,
                    lineHeight: 1.2,
                  },
                  "\n",
                  {
                    text: `Max.  \tMin.  \tObt`,
                    alignment: "center",
                    verticalAlignment: "bottom",
                    bold: true,
                    lineHeight: 1.2,
                  },
                ],
              },
              {
                margin: [0, 5, 0, 0],
                text: [
                  {
                    text: `Internal`,
                    alignment: "center",
                    verticalAlignment: "bottom",
                    bold: true,
                    lineHeight: 1.2,
                  },
                  "\n",
                  {
                    text: ` Max.  \tMin.  \tObt `,
                    alignment: "center",
                    verticalAlignment: "bottom",
                    bold: true,
                  },
                ],
              },
              {
                margin: [0, 15, 0, 0],
                text: [
                  {
                    text: `Total`,
                    alignment: "center",
                    verticalAlignment: "bottom",
                    bold: true,
                    lineHeight: 1.2,
                  },
                ],
              },
              {
                margin: [0, 15, 0, 0],
                text: [
                  {
                    text: `Grade`,
                    alignment: "center",
                    verticalAlignment: "bottom",
                    bold: true,
                    lineHeight: 1.2,
                  },
                ],
              },
              {
                text: `GP`,
                alignment: "center",
                bold: true,
                margin: [0, 15, 0, 0],
              },
              {
                text: `CGP`,
                alignment: "center",
                bold: true,
                margin: [0, 15, 0, 0],
              },
              {
                text: `status`,
                alignment: "center",
                bold: true,
                margin: [0, 15, 0, 0],
              },
            ],
          ],
        },
      },
    ],
    [
      {
        margin: [0, 8, 0, 0],
        table: table3,
        // layout: "noBorders",
      },
    ],
    [
        {
          table: table4,
        },
    ],
  ];
  return table;
}
}


return markStatement;
}
export default marksheet;
