import { SolapurPdf } from "./constant/constant";
import { IPaperWiseSeatSummary, IResultReport } from "./types";

const chunkArray = (array: string[], size: number) => {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  };

  const padRow = (row: string[], size: number) => {
    while (row.length < size) {
      row.push(""); // Add empty string to pad the row
    }
    return row;
  };
  

function paperWiseSeatSummary(data: IPaperWiseSeatSummary[]) {
  // console.log(data[0]);
  const contentDefinition: any = {
    pageSize: 'A4',
    pageMargins: [20, 20, 20, 20],
    content: [],
  };

  const date = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
  const dateWithTime = new Date().toLocaleString();

  for (let i = 0; i < data.length; i++) {
    function pdf() {

        const table1 = {
            widths: [90, 420, 90],
            headerRows: 1,
            body: [
              [
                {
                  image: SolapurPdf.universityLogo,
                  width: 50,
                  alignment: "center",
                },
                [
                  {
                    stack: [
                      {
                        text: SolapurPdf.universityName,
                        margin: [0, 5, 0, 0],
                        bold: true,
                      },
                      {
                        text: SolapurPdf.universityAddress,
                        bold: true,
                      },
                    ],
                    alignment: "center",
                  },
                ],
              ],
            ],
          };

          const table2 = {
            widths: [545],
            headerRows: 1,
            body: [
              [
                {
                  text: `${data[i].requestType}`,
                  alignment: "center",
                },
              ],
              [
                {
                  text: `College Name: ${data[i].collegeName}`,
                  alignment: "center",
                },
              ],
              [
                {
                  text: `Center Name: ${data[i].centerName}`,
                  alignment: "center",
                },
              ],
              [
                {
                  text: `${data[i].course}`,
                  alignment: "center",
                },
              ],
              [
                {
                  text: `${data[i].examName}`,
                  alignment: "center",
                },
              ],
            ],
          };

          const table3 = {
            widths: [220, 316],
            headerRows: 1,
            body: [
              [
                {
                  text: `Paper Code: ${data[i].paperCode}` ,
                  alignment: "left",
                  border: [1, 0, 0, 0],
                },
                {
                  text: `Exam Date: ${data[i].examDate} Time: ${data[i].examTime}` ,
                  alignment: "right",
                  border: [0, 0, 1, 0],
                },
              ],
            ],
          };
          
          const table4 = {
            widths: Array(8).fill(60.25), // 8 columns, each with width 60.25
            body: [
              ...chunkArray(data[i].seatAndDeskNumber, 8).map((row: string[]) => {
                const emptyItemsCount = 8 - row.length;
                return padRow(row, 8).map((item: string) => ({
                  text: item || "", // Ensure empty strings have a placeholder
                  alignment: "center",
                  colSpan: !item ? emptyItemsCount : 0, // Adjust colSpan based on item count
                  border: [1, 1, 1, 0] // Customize borders as needed
                }));
              }),
            ],
          };
          
          
          const table5 = {
            widths: [545],
            headerRows: 1,
            body: [
              [
                {
                  text: `Total No of Students Found In This Paper: ${data[i].totalStudents}`,
                  alignment: "center",
                },
              ],
              [
                {
                  text: `Report Generated By: ${data[i].userName} on ${dateWithTime}`,
                  alignment: "center",
                },
              ],
            ],
          };
          
          

          const table = [
            {
              table: table1,
              layout: "noBorders",
              fontSize: 10, 
            },
            {
                text: `Printed on:${date}`,
                alignment: "right",
                fontSize: 8,
            },
            {
                table: table2,
                fontSize: 10,
                margin: [0, 0, 0, 0],
                bold: true,
            },
            {
                table: table3,
                fontSize: 10,
                margin: [0, 0, 0, 0],
                bold: true,
            },
            {
                table: table4,
                fontSize: 9,
                margin: [0, 0, 0, 0],
                bold: true,
            },
            {
                table: table5,
                fontSize: 8,
                alignment: "center",
                margin: [0, 0, 0, 0],
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
export default paperWiseSeatSummary;
