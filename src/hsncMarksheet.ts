import data from "./MOCK_DATA (5).json";
import { IMarksheet, ISubjectTypePdf } from "./types";

function hsncMarksheet(data: any) {
  const markStatement: any = {
    // pageSize: {
    //   width: 1100,
    //   height: 650,
    // },
    pageSize: "A3",
    pageMargins: [20, 10, 20, 10],
    content: [],
  };

  for (let k = 0; k < data.length; k++) {
    function mark() {
      let tables = [];

      const table2 = {
        widths: ["*"],
        headerRows: 1,
        body: [
          [{text: "12342",}],
          [{text: "manish",}],
        ],
      };

      const table3 = {
        widths: [
          "*",
          "*",
          10,
          "*",
          10,
          "*",
          10,
          "*",
          10,
          "*",
          10,
          "*",
          10,
          "*",
          10,
          "*",
          10,
          "*",
        ],
        headerRows: 1,
        body: [
          [
            {
              text: "",
            },
            {
              text: "12345",
            },
            {
              text: "",
            },
            {
              text: "12345",
            },
            {
              text: "",
            },
            {
              text: "12345",
            },
            {
              text: "",
            },
            {
              text: "12345",
            },
            {
              text: "",
            },
            {
              text: "12345",
            },
            {
              text: "",
            },
            {
              text: "12345",
            },
            {
              text: "",
            },
            {
              text: "12345",
            },
            {
                text: "",
              },
              {
                text: "12345",
              },
              {
                text: "",
              },
          ],
        ],
      };

      const table = [
        [
          {
            text: "HSNC UNIVERSITY",
            // fontSize: 20,
            alignment: "center",
            lineHeight: 1.3,

            // bold: true,
          },
          {
            // STATEMENT OF MARKS OBTAINED IN EACH SUBJECT AT THE
            text: "Statement Of Marks Obtained In Each Subject At The",
            // fontSize:20,
            alignment: "center",
            lineHeight: 1.2,
          },
          {
            // "Bachelor of Interior Design, Semester-1 Examination-JUL-2021"
            // Consolidated Mark-list of B.SC.(DATA SCI. AND BUS. ANALYTICS) SY-Sem IV examinations held in Mar/2023
            text: ` Consolidated Mark-list of ${data[k].courseName || "-"}, ${
              data[k].semesterName || "-"
            } examination held in ${data[k].examYear || "-"}`,
            // fontSize: 15,
            alignment: "center",
            // bold: true,
            lineHeight: 1.2,
          },
          "\n\n\n",
          {
            columns: [
              {
                table: {
                  widths: [30, 120],
                  headerRows: 1,
                  body: [
                    [
                      {
                        text: " ",
                        fontSize: 8,
                        // lineHeight: 1,
                      },
                      {
                        text: " ",
                        fontSize: 8,
                        // lineHeight: 1,
                      },
                    ],
                    [
                      {
                        text: "SeatNo",
                        // border:[true, true, true, false],
                        fontSize: 8,
                        alignment: "center",
                      },
                      {
                        text: "StudentName",
                        // border:[true, true, true, false],
                        fontSize: 8,
                        alignment: "center",
                      },
                    ],
                  ],
                },
              },
              {
                table: table3,
                fontSize: 8,
                width: 590,
              },
              {
                table: table2,
                fontSize: 8,
                width: 50,
              },
            ],
            columnGap: -20,
          },
        ],
      ];
      tables.push(table);
      return tables;
    }

    markStatement.content.push(JSON.parse(JSON.stringify(mark())));
    if (k < data.length - 1) {
      markStatement.content.push({ text: "", pageBreak: "after" });
    }
  }

  return markStatement;
}
export default hsncMarksheet;
