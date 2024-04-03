import { PDF } from "./constant";
import { IReassessmentFeeSlip } from "./types";
import { numberToWordsINR } from "./utiles";
function reassessmentReceipt(data: IReassessmentFeeSlip[]) {
  const date = new Date();
  const currentDate = date.toLocaleDateString().replace(/,/g, "");
  const contentDefinition: any = {
    pageSize: "A4",
    pageMargins: [20, 10, 20, 10],
    content: [],
  };


  for (let i = 0; i < 1; i++) {
    function pdf() {
      const table2 = {
        widths: [40, 270, 105, 105,"*"],
        headerRows: 1,
        body: [
          ...data[0].feeDetails.map((value: any, index: number) => [
            {
              text: `${index + 1}`,
              alignment: "center",
            //   bold: true,
              border: [true, false, true, true],
            },
            {
              text: `${value.subjectName}`,
            //   bold: true,
              border: [true, false, true, true],
            },
            {
              text: `${value.semName}`,
              alignment: "center",
            //   bold: true,
              border: [true, false, true, true],
            },
            {
              text: `${value.amount}`,
              alignment: "center",
            //   bold: true,
              border: [true, false, true, true],
            },
          ]),
        ],
      };
      let totalAmount = 0;
      for (const feeDetail of data[i].feeDetails) {
        totalAmount += feeDetail.amount;
      }
      const amountInWords = numberToWordsINR(totalAmount);
      const table = [
        {
          table: {
            widths: [50, 450],
            headerRows: 1,
            body: [
              [
                {
                  image: `${process.cwd()}/public/collegeLogo/HSNCULogo.png`,
                  margin: [0, 0, 20, 0],
                  width: 50,
                },
                {
                  text: [
                    {
                      text: `${PDF.universityName}`,
                      fontSize: 20,
                      alignment: "center",
                      bold: true,
                      margin: [0, 50, 0, 0],
                    },
                    // "\n",
                    // {
                    //   text: "Fee Receipt",
                    //   fontSize: 14,
                    //   alignment: "center",
                    //   bold: true,
                    // },
                    "\n",
                    {
                      text: `${PDF.universityAddress}`,
                      alignment: "center",
                    },
                  ],
                },
              ],
            ],
          },
          layout: "noBorders",
        },
        {
          text: "",
        },
        {
          canvas: [
            {
              type: "line",
              x1: 0,
              y1: 0,
              x2: 560,
              y2: 0,
              dash: { length: 4, space: 4 },
            },
          ],
        },
        {
          text: `Reassessment Fee Receipt`,
          bold: true,
          fontSize: 18,
          alignment: "center",
          margin: [0, 5, 0, 0],
        },
        {
          text: "\n",
        },
        {
          table: {
            widths: [380, 160],
            headerRows: 1,
            body: [
              [
                {
                  text: [
                    {
                      text: `Students' Name: `,
                      bold: true,
                    },
                    {
                      text: `${data[i].studentName}`,
                    },
                    "\n\n",
                    {
                      text: `Course: `,
                      bold: true,
                    },
                    {
                      text: `${data[i].courseName}`,
                    },
                    "\n\n",
                    {
                      text: `Reciept No: `,
                      bold: true,
                    },
                    {
                      text: `${data[i].receiptNo}`,
                    },
                    "\n\n",
                    {
                      text: `Semester: `,
                      bold: true,
                    },
                    {
                      text: `${data[i].semester}`,
                    },
                  ],
                },
                {
                  text: [
                    {
                      text: `Date: `,
                      bold: true,
                      alignment: "right",
                    },
                    {
                      text: `${currentDate}`,
                    },
                    "\n\n",
                    // {
                    //   text: `Quota: ${data[i].quota}`,
                    //   bold: true,
                    // },
                    "\n\n",
                  ],
                },
              ],
            ],
          },
          layout: "noBorders",
        },
        {
          text: "\n\n",
        },
        {
          table: {
            widths: [40, 270, 105, 105],
            headerRows: 1,
            body: [
              [
                {
                  text: "Sr.No.",
                  bold: true,
                  alignment: "center",
                  // lineHeight: 1.5,
                  margin: [0, 5, 0, 0],
                },
                {
                  text: "Subject Name",
                  bold: true,
                  alignment: "center",
                  margin: [0, 5, 0, 0],
                },
                {
                  text: "Amount/Subject",
                  bold: true,
                  alignment: "center",
                  margin: [0, 5, 0, 0],
                },
                {
                  text: "Amount",
                  bold: true,
                  alignment: "center",
                  margin: [0, 5, 0, 0],
                },
              ],
            ],
          },
        },
        {
          table: table2,
        },
        {
          table: {
            widths: [40, 270, 105, 105],
            headerRows: 1,
            body: [
              [
                {
                  text: "",
                  alignment: "center",
                  bold: true,
                  border: [true, false, true, true],
                },
                {
                  text: "TOTAL AMOUNT",
                  alignment: "left",
                  colSpan: 2,
                  bold: true,
                  border: [true, false, true, true],
                },
                {
                  text: "",
                  alignment: "center",
                  border: [true, false, true, true],
                },
                {
                  text: totalAmount,
                  alignment: "center",
                  bold: true,
                  border: [true, false, true, true],
                },
              ],
            ],
          },
        },
        {
          text: "\n",
        },
        {
          text: [
            {
              text: "(",
            },
            {
              text: `In words : ${amountInWords}`,
              decoration: "underline",
            },
            {
              text: ")",
            },
          ],
        },
        {
          text: "\n\n",
        },
        {
          text: "Notes:",
          bold: true,
        },
        {
          text: "• We kindly request you to retain this receipt for your personal records. It serves as an official proof of ",
          margin: [10, 0, 0, 0],
          fontSize: 11,
        },
        {
          text: "payment and may be required for future reference or documentation purposes.",
          margin: [18, 0, 0, 0],
          fontSize: 11,
        },
        {
          text: "• For any questions or concerns related to the repeater fee charged on your receipt, please reach out to ",
          margin: [10, 5, 0, 0],
          fontSize: 11,
        },
        {
          text: "the finance office for clarification and resolution.",
          margin: [18, 0, 0, 0],
          fontSize: 11,
        },
      ];
      return table;
    }
    contentDefinition.content.push(JSON.parse(JSON.stringify(pdf())));
  }
  return contentDefinition;
}
export default reassessmentReceipt;