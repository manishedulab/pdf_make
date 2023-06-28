// import { TimeTable } from "../types/pdf";

import {collegeLogo} from "./utiles";
export interface ITimeTable {
  course:string;
  collegeName:string;
  semesterName:string;
  examId:number;
  year:string;
  collegeLogo:string;
  subjectData:[
    {
      srno:number,
      date:string,
      Day:string,
      time:string,
      subjectCode: string,
      subjectName: string
    },
  ];
}

export interface ISubjectArray {
  srno: number;
  date: string;
  Day: string;
  time: string;
  subjectCode: string;
  subjectName: string;
}

function examTimeTable(data2: ITimeTable[]) {

  const date = new Date();
  const currentDate = date.toLocaleString().replace(/,/g, "");
  const hsncTimeTable: any = {
    pageSize: "A3",
    pageMargins: [20, 20, 20, 20],
    footer(currentPage: number, pageCount: number) {
      return [
        {
          canvas: [
            {
              type: "line",
              x1: 0,
              y1: 0,
              x2: 805,
              y2: 0,
              lineWidth: 1,
            },
          ],
          margin: [20, -20, 20, 20],
        },
        "\n",
        {
          columns: [
            {
              // alignment: 'right',
              text: `Date : ${currentDate}`,
            },
            {
              text: `Page${currentPage.toString()} of ${pageCount.toString()}`,
              alignment: "right",
            },
          ],
          margin: [20, -25, 20, 20],
        },
      ];
    },
    content: [],
  };

  // console.log("first",data2.length)

  for (let i = 0; i < data2.length; i++) {
    const img = collegeLogo(data2[0].collegeName)

    function timeTablePdf() {
        let tables = []
        const table2 = {
          headerRows: 1,
          widths: [30, 80, 90, 150, 130, 270,"*"],
          body: [
            ...data2[i].subjectData.map((value1: ISubjectArray ) =>[
              {
                text: value1.srno,
                margin: 7,
                border: [true, false, true, true],
              },
              {
                text: value1.date,
                margin: 7,
                border: [true, false, true, true],
              },
              {
                text: value1.Day,
                margin: 7,
                border: [true, false, true, true],
              },
              {
                text: value1.time,
                alignment: "center",
                margin: 7,
                border: [true, false, true, true],
              },
              {
                text: value1.subjectCode,
                alignment: "center",
                margin: 7,
                border: [true, false, true, true],
              },
              {
                text: value1.subjectName,
                margin: 7,
                border: [true, false, true, true],
              },
            ]),
          ],
        };


      const  table = [
          // main heading
          {
            table: {
              widths: [150, 520, 150],
              headerRows: 1,
              body: [
                [
                  {
                    image: `${process.cwd()}/img/Hsnc-university-logo.png`,
                    margin: [0, 0, 20, 5],
                    alignment: "center",
                    width: 70,
                  },
                  {
                    text: [
                      {
                        bold: true,
                        lineHeight: 1.6,
                        text: "HSNC University Mumbai",
                        fontSize: 18,
                        alignment: "center",
                        margin: [0, 50, 0, 0],
                      },
                      "\n",
                      {
                        lineHeight: 1.2,
                        // data2.length > 0 and has collegeName ? collegeName : null,
                        text: data2.length > 0 ? data2[i].collegeName : "",
                        // text:"",
                        fontSize: 18,
                        alignment: "center",
                        margin: [0, 80, 0, 0],
                        bold: true,
                      },
                      "\n",
                      {
                        lineHeight: 1.5,
                        text: "",
                        alignment: "center",
                        fontSize: 12,
                      },
                    ],
                  },
                  {
                    image: img.length>0?`${img}`:"D:/pdf/pdfmake gu/img/download.png",
                    margin: [20, 0, 20, 0],
                    alignment: "center",
                    width: 70,
                  },
                ],
              ],
            },
            layout: "noBorders",
          },
          {
            canvas: [
              {
                type: "line",
                x1: 0,
                y1: 0,
                x2: 805,
                y2: 0,
                lineWidth: 1,
              },
            ],
          },
          {
            margin: [0, 5, 0, 0],
            table: {
              widths: [150, 520, 150],
              headerRows: 1,
              body: [
                [
                  {
                    text: "",
                  },
                  {
                    text: [
                      {
                        bold: true,
                        lineHeight: 1.6,
                        text: `EXAM SCHEDULE - ${data2[i].year}`,
                        alignment: "center",
                        // decoration: "underline"
                      },
                      "\n",
                    ],
                  },
                  {
                    text: "",
                  },
                ],
              ],
            },
            layout: "noBorders",
          },
          {
            // text: [
            //   {
            //     text: 'Exam Name',
            //     alignment: 'center',
            //   },
            //   {
            //     text: ':  EXTERNAL',
            //     bold: true,
            //   },
            // ],
            // margin: [30, 0, 0, 0],
            text: "",
          },
          "\n",
          {
            table: {
              widths: [550, 230],
              headerRows: 1,
              body: [
                [
                  {
                    text: [
                      {
                        text: "Programme ",
                      },
                      {
                        text: `:  ${data2[i].course}`,
                        bold: true,
                      },
                    ],
                    margin: [10, 0, 0, 0],
                  },
                  {
                    text: [
                      {
                        text: "Semester ",
                      },
                      {
                        text: `:  ${data2.length > 0 ? data2[i].semesterName : null}`,
                        // text:"",
                        bold: true,
                      },
                    ],
                    alignment: "right",
                  },
                ],
              ],
            },
            layout: "noBorders",
          },
          "\n\n",
          {
            table: {
              widths: [30, 80, 90, 150, 130, 270],
              headerRows: 1,
              body: [
                [
                  {
                    text: "S.No",
                    bold: true,
                    alignment: "center",
                    lineHeight: 1.5,
                    margin: [0, 5, 0, 0],
                  },
                  {
                    text: "Date",
                    bold: true,
                    alignment: "center",
                    margin: [0, 5, 0, 0],
                  },
                  {
                    text: "Day",
                    bold: true,
                    alignment: "center",
                    margin: [0, 5, 0, 0],
                  },
                  {
                    text: "Session",
                    bold: true,
                    alignment: "center",
                    margin: [0, 5, 0, 0],
                  },
                  {
                    text: "Subject Code",
                    bold: true,
                    alignment: "center",
                    margin: [0, 5, 0, 0],
                  },
                  {
                    text: "Subject Name",
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
        ];
      
      tables.push(table)
      return tables;
    }

    const hallTicket = JSON.parse(JSON.stringify(timeTablePdf()));
    hsncTimeTable.content.push(hallTicket);
    // Insert a page break after each hall ticket except the last one
    if (i < (data2.length - 1)) {
      hsncTimeTable.content.push({ text: "", pageBreak: "after" });
    }
  }
  return hsncTimeTable;
}
export default examTimeTable;
