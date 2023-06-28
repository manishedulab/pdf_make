import { IChallan } from "./types";
import { numberToWordsINR } from "./utiles";

function challan(data: IChallan[]) {
  const date = new Date();
  const currentDate = date.toLocaleString().replace(/,/g, "");

  const contentDefinition: any = {
    pageSize: {
      width: 1100,
      height: 700,
    },
    pageMargins: [20, 10, 20, 10],
    content: [],
  };

  for (let i = 0; i < 1; i++) {
    function pdf() {
      const table2 = {
        widths: [190, 250, 190, 190, 190, "*"],
        headerRows: 1,
        body: [
          ...data[0].feeDetails.map((value: any, index: number) => [
            {
              text: `${index + 1}`,
              alignment: "center",
              //  margin: 7,
              bold: true,
              border: [true, false, true, true],
            },
            {
              text: `${value.examFeeLable}`,
              //  margin: 7,
              bold: true,
              border: [true, false, true, true],
            },
            {
              text: `${value.examFee}`,
              //  margin: 7,
              alignment: "center",
              bold: true,
              border: [true, false, true, true],
            },
            {
              text: `${value.Students}`,
              alignment: "center",
              //  margin: 7,
              bold: true,
              border: [true, false, true, true],
            },
            {
              text: `${value.amount}`,
              alignment: "center",
              //  margin: 7,
              bold: true,
              border: [true, false, true, true],
            },
          ]),
        ],
      };

      let totalAmount = 0;
      for (const feeDetail of data[i].feeDetails) {
        totalAmount += feeDetail.amount;
      }

      const amountInWords = numberToWordsINR(totalAmount)

      const table = [
        {
          table: {
            widths: [70, 920],
            headerRows: 1,
            body: [
              [
                {
                  image: "img/Hsnc-university-logo.png",
                  margin: [0, 0, 20, 0],
                  width: 70,
                },
                {
                  text: [
                    {
                      text: "HSNC UNIVERSITY",
                      fontSize: 20,
                      alignment: "center",
                      bold: true,
                      margin: [0, 50, 0, 0],
                    },
                    // "\n",
                    // {
                    //   // text: "Navarangpura, Ahmedabad 380009",
                    //   text:"",
                    //   alignment: "center",
                    //   margin: [0, 0, 0, 0],
                    // },
                    "\n",
                    {
                      text: "Challan/Fee Receipt(Non Rollwala Exam)",
                      fontSize: 14,
                      alignment: "center",
                      bold: true,
                    },
                    "\n",
                    {
                      text: "(Separate challan is required for each Program and Semester in ",
                      alignment: "center",
                    },
                    {
                      text: "FOUR COPIES)",
                      bold: true,
                      decoration: "underline",
                    },
                  ],
                },
              ],
            ],
          },
          layout: "noBorders",
        },
        {
          text: "\n",
        },
        {
          table: {
            widths: [500, 530],
            headerRows: 1,
            body: [
              [
                {
                  text: `Client Code:${data[i].clientCode?data[i].clientCode:""}`,
                  bold: true,
                },
                {
                  text: `Date : ${currentDate}`,
                  alignment: "right",
                },
              ],
            ],
          },
          layout: "noBorders",
        },
        {
          text: "\n",
        },
        {
          table: {
            widths: [800, 100],
            headerRows: 1,
            body: [
              [
                {
                  text: [
                    {
                      text: "Received below mentioned amount following particular:",
                      bold: true,
                    },
                    "\n",
                    {
                      text: `College Name Code: (${data[i].collegeCode}) ${data[i].collegeName}`,
                      bold: true,
                    },
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
            widths: [800, 100],
            headerRows: 1,
            body: [
              [
                {
                  text: [
                    // {
                    //   text: "College Address: ___________________________________________________________________",
                    //   bold:true,
                    //   margin: [0, 0, 0, 50],
                    // },
                    "\n",
                    {
                      text: `Months/Year: ${data[i].year?data[i].year:""}`,
                      bold: true,
                    },
                    "\n",
                    {
                      text: `Program: ${data[i].courseName?data[i].courseName:""}`,
                      bold: true,
                    },
                    "\n",
                    {
                      text: `Semester/Year: ${data[i].semName?data[i].semName:""}`,
                      bold: true,
                    },
                    "\t\t\t\t\t\t\t",
                    {
                      text: `Mode: ${data[i].mode?data[i].mode:""}`,
                      bold: true,
                    },
                    "\n",
                    {
                      text: `Mode of Payment: ${data[i].modeOfPayment?data[i].modeOfPayment:""}`,
                      bold: true,
                    },
                    "\n",
                    {
                      text: `Cheque/DD Details: Bank: ${data[i].bankName?data[i].bankName:"________________________________"}. Branch: ${data[i].bankBranch?data[i].bankBranch:"________________________"}. No.: ${data[i].no?data[i].no:"_______________"}. Date: ${data[i].bankDate?data[i].bankDate:"__________________"}`,
                      bold: true,
                    },
                    "\n",
                    {
                      text: `Mobile No.: ${data[i].mobileNo?data[i].mobileNo:""}`,
                      bold: true,
                    },
                    "\n",
                  ],
                },
              ],
            ],
          },
          layout: "noBorders",
        },
        //  {
        //    table: {
        //      widths: [190, 250, 190, 190, 190],
        //      headerRows: 1,
        //      body: [
        //        [
        //          { text: "No", alignment: "center" , bold:true, },
        //          { text: "Types Of Fees", alignment: "left" ,  bold:true, },
        //          { text: "Rate of Fees Rs.", alignment: "center",  bold:true, },
        //          { text: "No. of Students", alignment: "center", bold:true, },
        //          { text: "Amount Rs.", alignment: "center",  bold:true,},
        //        ],
        //        [
        //          { text: "1", alignment: "center",  bold:true, },
        //          { text: "University Exam Fee", alignment: "left",  bold:true, },
        //          { text: "550.00", alignment: "center",  bold:true, },
        //          { text: "6", alignment: "center",  bold:true, },
        //          { text: "3300", alignment: "right",  bold:true, },
        //        ],
        //        [
        //          { text: "2", alignment: "center",  bold:true, },
        //          { text: "Practical Exam Fee", alignment: "left",  bold:true, },
        //          { text: "00.00", alignment: "center",  bold:true, },
        //          { text: "6", alignment: "center",  bold:true, },
        //          { text: "00", alignment: "right",  bold:true, },
        //        ],
        //        [
        //          { text: "3", alignment: "center",  bold:true, },
        //          { text: "Late Fee", alignment: "left",  bold:true, },
        //          { text: "0.00", alignment: "center",  bold:true, },
        //          { text: "6", alignment: "center",  bold:true, },
        //          { text: "00", alignment: "right",  bold:true, },
        //        ],
        //        [
        //          { text: "4", alignment: "center",  bold:true, },
        //          { text: "pristed Form Fee", alignment: "left",  bold:true, },
        //          { text: "25.00", alignment: "center",  bold:true, },
        //          { text: "6", alignment: "center",  bold:true, },
        //          { text: "150", alignment: "right",  bold:true, },
        //        ],
        //        [
        //          { text: "5", alignment: "center",  bold:true, },
        //          { text: "University sports Fee(Semester wise)", alignment: "left",  bold:true, },
        //          { text: "10.00", alignment: "center",  bold:true, },
        //          { text: "6", alignment: "center",  bold:true, },
        //          { text: "60", alignment: "right",  bold:true, },
        //        ],
        //        [
        //          { text: "6", alignment: "center",  bold:true, },
        //          { text: "Cultural Fee(Semester wise)", alignment: "left",  bold:true, },
        //          { text: "10.00", alignment: "center",  bold:true, },
        //          { text: "6", alignment: "center",  bold:true, },
        //          { text: "60", alignment: "right",  bold:true, },
        //        ],
        //        [
        //          { text: "7", alignment: "center",  bold:true, },
        //          { text: "TOTAL AMOUNT", alignment: "left",  bold:true, },
        //          { text: "", alignment: "center",  bold:true, },
        //          { text: "", alignment: "center",  bold:true, },
        //          { text: "3570", alignment: "right",  bold:true, },
        //        ],
        //        [
        //          { text: "8", alignment: "center",  bold:true, },
        //          { text: "Deduction For Exam-Form Printing", alignment: "left",  bold:true, },
        //          { text: "1.50", alignment: "center",  bold:true, },
        //          { text: "6", alignment: "center",  bold:true, },
        //          { text: "9", alignment: "right",  bold:true, },
        //        ],
        //        [
        //          { text: "9", alignment: "center",  bold:true, },
        //          { text: "Deduction For Hall-Ticket Printing", alignment: "left",  bold:true, },
        //          { text: "1.50", alignment: "center",  bold:true, },
        //          { text: "6", alignment: "center",  bold:true, },
        //          { text: "9", alignment: "right",  bold:true, },
        //        ],
        //        [
        //          { text: "10", alignment: "center",  bold:true, },
        //          { text: "Deduction For Marksheet Distribution", alignment: "left",  bold:true, },
        //          { text: "1.50", alignment: "center",  bold:true, },
        //          { text: "6", alignment: "center",  bold:true, },
        //          { text: "9", alignment: "right" ,  bold:true,},
        //        ],
        //        [
        //          { text: "11", alignment: "center",  bold:true, },
        //          { text: "Total Deduction", alignment: "left",  bold:true, },
        //          { text: "", alignment: "center",  bold:true, },
        //          { text: "", alignment: "center",  bold:true, },
        //          { text: "27", alignment: "right",  bold:true, },
        //        ],
        //        [
        //          { text: "12", alignment: "center",  bold:true, },
        //          { text: "Net Amount to be paid (7.11)", alignment: "left",  bold:true, },
        //          { text: "", alignment: "center",  bold:true, },
        //          { text: "", alignment: "center",  bold:true, },
        //          { text: "3543", alignment: "right",  bold:true, },
        //        ],
        //        [
        //          { text: "", alignment: "center" , bold:true,},
        //          {
        //            text: "In Words \t\t\t Three Thousand Five Hundred Fourty Three Rupies",
        //            alignment: "left",
        //            colSpan: 4,
        //            bold:true,
        //          },
        //          { text: "", alignment: "center" },
        //          { text: "", alignment: "center" },
        //          { text: "", alignment: "right" },
        //        ],
        //      ],
        //    },
        //    // layout: "noBorders",
        //  },
        {
          table: {
            widths: [190, 250, 190, 190, 190],
            headerRows: 1,
            body: [
              [
                {
                  text: "No",
                  bold: true,
                  alignment: "center",
                  // lineHeight: 1.5,
                  margin: [0, 5, 0, 0],
                },
                {
                  text: "Types Of Fees",
                  bold: true,
                  alignment: "center",
                  margin: [0, 5, 0, 0],
                },
                {
                  text: "Rate of Fees Rs.",
                  bold: true,
                  alignment: "center",
                  margin: [0, 5, 0, 0],
                },
                {
                  text: "No. of Students",
                  bold: true,
                  alignment: "center",
                  margin: [0, 5, 0, 0],
                },
                {
                  text: "Amount Rs.",
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
            widths: [190, 250, 190, 190, 190],
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
                  colSpan: 3,
                  bold: true,
                  border: [true, false, true, true],
                },
                {
                  text: "",
                  alignment: "center",
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
          table: {
            widths: [190, 250, 190, 190, 190],
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
                  text: `In Words \t\t\t ${amountInWords}`,
                  alignment: "left",
                  colSpan: 4,
                  bold: true,
                  border: [true, false, true, true],
                },
                {
                  text: "",
                  alignment: "center",
                  border: [true, false, true, true],
                },
                {
                  text: "",
                  alignment: "center",
                  border: [true, false, true, true],
                },
                {
                  text: "",
                  alignment: "right",
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
          text: "To be Submitted at Window No.19 KOTAK Bank Counter, HSNC University",
          alignment: "center",
          bold: true,
        },
        "\n",
        {
          text: "Note:",
          bold: true,
        },
        {
          text: "1.This fees receipt is valid subject to realization of cheque.",
          bold: true,
        },
      ];
      return table;
    }
    contentDefinition.content.push(JSON.parse(JSON.stringify(pdf())));

    // Insert a page break after each hall ticket except the last one
    if (i < (data.length-1)) {
      contentDefinition.content.push({ text: '', pageBreak: 'after' });
    }
  }

  return contentDefinition;
}
export default challan;
