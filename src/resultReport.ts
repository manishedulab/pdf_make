import { IResultReport } from "./types";

function resultReport(data: IResultReport[]) {
  // console.log(data[0]);
  const contentDefinition: any = {
    pageSize: {
      width: 912.982, //322.08mm
      height: 666.708, //235.20,
    },
    pageMargins: [20, 20, 20, 20],
    content: [],
  };

  for (let i = 0; i < data.length; i++) {
    function pdf() {
      const table2 = {
        widths: [60, 200, 55, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39],
        headerRows: 2,
        body: [
          [
            {
              text: `Subject Code`,
              alignment: "center",
              bold: true,
              margin: [0, 5, 0, 0],
              border: [true, true, true, false],
              rowSpan: 2,
            },
            {
              text: `Subject Name`,
              alignment: "center",
              bold: true,
              margin: [0, 5, 0, 0],
              border: [true, true, true, false],
              rowSpan: 2,
            },
            {
              text: `No. of
                  Students`,
              alignment: "center",
              bold: true,
              margin: [0, 5, 0, 0],
              border: [true, true, true, false],
              rowSpan: 2,
            },
            {
              text: `No. of Student with the following grades`,
              alignment: "center",
              bold: true,
              colSpan: 11,
              margin: [0, 0, 0, 0],
              border: [true, true, true, false],
            },
            {
              text: "",
            },
            {
              text: "",
            },
            {
              text: "",
            },
            {
              text: "",
            },
            {
              text: "",
            },
            {
              text: "",
            },
            {
              text: "",
            },
            {
              text: "",
            },
            {
              text: "",
            },
            {
              text: "",
            },
          ],
          [
            "",
            "",
            "",
            {
              text: "O",
              bold: true,
              alignment: "center",
              border: [true, true, true, false],
            },
            {
              text: "A+",
              bold: true,
              alignment: "center",
              border: [true, true, true, false],
            },
            {
              text: "A",
              bold: true,
              alignment: "center",
              border: [true, true, true, false],
            },
            {
              text: "B+",
              bold: true,
              alignment: "center",
              border: [true, true, true, false],
            },
            {
              text: "B",
              bold: true,
              alignment: "center",
              border: [true, true, true, false],
            },
            {
              text: "C",
              bold: true,
              alignment: "center",
              border: [true, true, true, false],
            },
            {
              text: "D",
              bold: true,
              alignment: "center",
              border: [true, true, true, false],
            },
            {
              text: "F",
              bold: true,
              alignment: "center",
              border: [true, true, true, false],
            },
            {
              text: "Pass%",
              bold: true,
              alignment: "center",
              border: [true, true, true, false],
            },
            {
              text: "Fail%",
              bold: true,
              alignment: "center",
              border: [true, true, true, false],
            },
            {
              text: "GPA",
              bold: true,
              alignment: "center",
              border: [true, true, true, false],
            },
          ],
        ],
      };

      const table3 = {
        headerRows: 1,
        widths: [60, 200, 55, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39],
        body: [
          ...data[i].subjectsDetail.map((value) => [
            {
              text: `${value.subjectCode || "-"}`,
              alignment: "center",
              margin: [0, 0, 0, 0],
            },
            {
              text: `${value.subjectName || "-"}`,
              //   alignment: "center",
              margin: [0, 0, 0, 0],
            },
            {
              text: `${value.noOfStudentsAsPerSubject || "-"}`,
              alignment: "center",
              margin: [0, 0, 0, 0],
            },
            {
              text: `${value.noOfStudentsWithGradeO || "-"}`,
              alignment: "center",
              margin: [0, 0, 0, 0],
            },
            {
              text: `${value.noOfStudentsWithGradeAPlus || "-"}`,
              alignment: "center",
              margin: [0, 0, 0, 0],
            },
            {
              text: `${value.noOfStudentsWithGradeA || "-"}`,
              alignment: "center",
              margin: [0, 0, 0, 0],
            },
            {
              text: `${value.noOfStudentsWithGradeBPlus || "-"}`,
              alignment: "center",
              margin: [0, 0, 0, 0],
            },
            {
              text: `${value.noOfStudentsWithGradeB || "-"}`,
              alignment: "center",
              margin: [0, 0, 0, 0],
            },
            {
              text: `${value.noOfStudentsWithGradeC || "-"}`,
              alignment: "center",
              margin: [0, 0, 0, 0],
            },
            {
              text: `${value.noOfStudentsWithGradeD || "-"}`,
              alignment: "center",
              margin: [0, 0, 0, 0],
            },
            {
              text: `${value.noOfStudentsWithGradeF || "-"}`,
              alignment: "center",
              margin: [0, 0, 0, 0],
            },
            {
              text: `${value.passPercentageAsPerSubject || "-"}`,
              alignment: "center",
              margin: [0, 0, 0, 0],
            },
            {
              text: `${value.failPercentageAsPerSubject || "-"}`,
              alignment: "center",
              margin: [0, 0, 0, 0],
            },
            {
              text: `${value.GPA || "-"}`,
              alignment: "center",
              margin: [0, 0, 0, 0],
            },
          ]),
        ],
      };

      const table4 = {
        headerRows: 2,
        widths: [60, 200, 55, 39, 39, 39, 39, 39, 39, 39, 39, 39],
        body: [
          [
            {
              text: `Sr. No.`,
              alignment: "center",
              bold: true,
              margin: [0, 5, 0, 0],
              border: [true, true, true, false],
              rowSpan: 2,
            },
            {
              text: `Course Name`,
              alignment: "center",
              bold: true,
              margin: [0, 5, 0, 0],
              border: [true, true, true, false],
              rowSpan: 2,
            },
            {
              text: `Semester`,
              alignment: "center",
              bold: true,
              margin: [0, 5, 0, 0],
              border: [true, true, true, false],
              rowSpan: 2,
            },
            {
              text: "Appeared",
              alignment: "center",
              bold: true,
              colSpan: 3,
              margin: [0, 0, 0, 0],
              border: [true, true, true, false],
            },
            {
              text: "",
            },
            {
              text: "",
            },
            {
              text: "Appeared",
              alignment: "center",
              bold: true,
              colSpan: 3,
              margin: [0, 0, 0, 0],
              border: [true, true, true, false],
            },
            {
              text: "",
            },
            {
              text: "",
            },
            {
              text: "Appeared",
              alignment: "center",
              bold: true,
              colSpan: 3,
              margin: [0, 0, 0, 0],
              border: [true, true, true, false],
            },
            {
              text: "",
            },
            {
              text: "",
            },
          ],
          [
            "",
            "",
            "",
            {
              text: "Total",
              bold: true,
                alignment: "center",
              border: [true, true, true, false],
            },
            {
              text: "Boys",
              bold: true,
                alignment: "center",
              border: [true, true, true, false],
            },
            {
              text: "Girls",
              bold: true,
              alignment: "center",
              border: [true, true, true, false],
            },
            {
              text: "Total",
              bold: true,
              alignment: "center",
              border: [true, true, true, false],
            },
            {
              text: "Boys",
              bold: true,
              alignment: "center",
              border: [true, true, true, false],
            },
            {
              text: "Girls",
              bold: true,
              alignment: "center",
              border: [true, true, true, false],
            },
            {
              text: "Total",
              bold: true,
              alignment: "center",
              border: [true, true, true, false],
            },
            {
              text: "Boys",
              bold: true,
              alignment: "center",
              border: [true, true, true, false],
            },
            {
              text: "Girls",
              bold: true,
              alignment: "center",
              border: [true, true, true, false],
            },
          ],
        ],
      };

      const table5 = {
        headerRows: 1,
        widths: [60, 200, 55, 39, 39, 39, 39, 39, 39, 39, 39, 39],
        body: [
          [
            {
              text: `1`,
              alignment: "center",
              bold: true,
              margin: [0, 5, 0, 0],
            },
            {
              text: `${data[i].course || '-'}`,
              alignment: "center",
              bold: true,
              margin: [0, 5, 0, 0],
            },
            {
              text:  `${data[i].semester || '-'}`,
              alignment: "center",
              bold: true,
              margin: [0, 5, 0, 0],
            },
            {
              text:  `${data[i].totalAppearedStudents || '-'}`,
              alignment: "center",
              bold: true,
              margin: [0, 0, 0, 0],
            },
           {
              text:  `${data[i].appearedBoys || '-'}`,
              alignment: "center",
              bold: true,
              margin: [0, 0, 0, 0],
            },
           {
              text:  `${data[i].appearedGirls || '-'}`,
              alignment: "center",
              bold: true,
              margin: [0, 0, 0, 0],
            },
            {
              text:  `${data[i].totalPassStudents || '-'}`,
              alignment: "center",
              bold: true,
              margin: [0, 0, 0, 0],
            },
           {
              text:  `${data[i].passBoys || '-'}`,
              alignment: "center",
              bold: true,
              margin: [0, 0, 0, 0],
            },
            {
              text:  `${data[i].passGirls || '-'}`,
              alignment: "center",
              bold: true,
              margin: [0, 0, 0, 0],
            },
            {
              text:  `${data[i].totalPassPercentageOfStudents || '-'}`,
              alignment: "center",
              bold: true,
              margin: [0, 0, 0, 0],
            },
            {
              text:  `${data[i].passPercentageOfBoys || '-'}`,
              alignment: "center",
              bold: true,
              margin: [0, 0, 0, 0],
            },
            {
              text:  `${data[i].passPercentageOfGirls || '-'}`,
              alignment: "center",
              bold: true,
              margin: [0, 0, 0, 0],
            },
          ],
        ],
      };

      const table = [
        {
          text: `SUBJECT WISE GRADE RESULT ANALYSIS - ${data[i].examEvent} (${data[i].examType})`,
          alignment: "center",
          bold: true,
        },
        {
          text: `Degree: ${data[i].course})`,
          margin: [30, 20, 0, 0],
          bold: true,
        },
        {
          table: table2,
          margin: [0, 30, 0, 0],
          fontSize: 10,
        },
        {
          table: table3,
          margin: [0, 0, 0, 0],
          fontSize: 9,
        },
        {
          table: table4,
          margin: [0, 40, 0, 0],
          fontSize: 10,
        },
        {
          table: table5,
          margin: [0, 0, 0, 0],
          fontSize: 10,
        },
      ];
      return table;
    }
    contentDefinition.content.push(pdf());

    // Insert a page break after each hall ticket except the last one
    if (i < data.length - 1) {
      contentDefinition.content.push({ text: "", pageBreak: "after" });
    }
  }

  return contentDefinition;
}
export default resultReport;
