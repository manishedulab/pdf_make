
import fs from 'fs';
import { SolapurPdf } from "./constant/constant";
import { ISubjectArray, ITimeTable } from './HSNC_timetable';
const address = SolapurPdf.universityAddress
const universityAddress = process.env.UNIVERSITY_ADDRESS || address;
if (!universityAddress) throw Error('Environment: UNIVERSITY_ADDRESS is not defined');

function solapurExamTimeTable(data: any[]) {

  const date = new Date();
  const currentDate = date.toLocaleString().replace(/,/g, "");
  const hsncTimeTable: any = {
    pageSize: "A3",
    pageMargins: [20, 30, 20, 120],
    footer(currentPage: number, pageCount: number) {
      return [
        {
          columns: [
            {
              // alignment: 'right',
              text: ``,
            },
            {
              text: ``,
            },
              {
                stack:[
                  {
                    image: `${process.cwd()}/public/collegeLogo/xyz.png`,
                    margin: [25, 0, 0, 0],
                    // alignment: "center",
                    width: 80,
                    height: 30,
                  },
                {
                  text: "Director",
                },
                {
                  text: 'Board Of Examinations And Evaluation'
                } 
                ],
                alignment: "center",
                margin: [-10, 0, 20, 0],
              },
          ],
          margin: [20, 20, 20, 5],
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
          margin: [20, 0, 20, 20],
        },
        // {
        //   columns: [
        //     {
        //       // alignment: 'right',
        //       text: `Date : ${currentDate}`,
        //     },
        //     {
        //       text: `Page${currentPage.toString()} of ${pageCount.toString()}`,
        //       alignment: "right",
        //     },
        //   ],
        //   margin: [20, -25, 20, 20],
        // },
      ];
    },
    content: [],
  };


  for (let i = 0; i < data.length; i++) {
    // const img = collegeLogo(data[0].collegeName);

    function timeTablePdf() {
      let tables = [];

      const table2 = {
        widths: [30, 80, 90, 150, 130, 270],
        body: [
          ...data[i].subjectData
          .filter((value: any) => value.show === true || value.show === 1)
          .map((value: any, index: number) => [
            {
              text: index + 1,
              margin: 7,
              border: [true, false, true, true],
            },
            {
              text: value.date.toString(),
              margin: 7,
              border: [true, false, true, true],
            },
            {
              text: value.Day,
              margin: 7,
              border: [true, false, true, true],
            },
            {
              text: value.time,
              alignment: "center",
              margin: 7,
              border: [true, false, true, true],
            },
            {
              text: value.subjectCode,
              alignment: "center",
              margin: 7,
              border: [true, false, true, true],
            },
            {
              text: value.subjectName,
              margin: 7,
              border: [true, false, true, true],
            },
          ]),
        ],
      };

      const table = [
        // main heading
        {
          table: {
            widths: [150, 460, 150],
            headerRows: 1,
            body: [
              [
                {
                  image: SolapurPdf.universityLogo,
                  margin: [0, 0, 20, 5],
                  alignment: "center",
                  width: 70,
                },
                {
                  text: [
                    {
                      bold: true,
                      lineHeight: 1.6,
                      text: SolapurPdf.universityName,
                      fontSize: 18,
                      alignment: "center",
                      margin: [0, 50, 0, 0],
                    },
                    "\n",
                    // {
                    //   lineHeight: 1.2,
                    //   // data.length > 0 and has collegeName ? collegeName : null,
                    //   text: data.length > 0 ? data[i].collegeName : "",
                    //   // text:"",
                    //   fontSize: 18,
                    //   alignment: "center",
                    //   margin: [0, 80, 0, 0],
                    //   bold: true,
                    // },
                    {
                      lineHeight: 1.5,
                      text: `${universityAddress}`,
                      alignment: "center",
                      fontSize: 12,
                    },
                  ],
                },
                {
                  text: ''
                //   image:
                //     data[i].collegeLogo 
                //       ? `${data[i].collegeLogo}`
                //       : SolapurPdf.defaultPhoto,
                //   margin: [20, 0, 20, 0],
                //   alignment: "center",
                //   width: 70,
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
                      text: `Summative Examination - ${data[i].examMonth? data[i].examMonth: "-"}-${data[i].year? data[i].year: "-"}`,
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
                      text: `:  ${data[i].course}`,
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
                      text: `:  ${data.length > 0 ? data[i].semesterName : null
                        }`,
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
                  text: "Course Code",
                  bold: true,
                  alignment: "center",
                  margin: [0, 5, 0, 0],
                },
                {
                  text: "Course Name",
                  bold: true,
                  alignment: "center",
                  margin: [0, 5, 0, 0],
                },
              ],
            ],
          },
        },
        {
            table: table2
        }
      ];

      tables.push(table);
      return tables;
    }

    const hallTicket = JSON.parse(JSON.stringify(timeTablePdf()));
    hsncTimeTable.content.push(hallTicket);
    // Insert a page break after each hall ticket except the last one
    if (i < data.length - 1) {
      hsncTimeTable.content.push({ text: "", pageBreak: "after" });
    }
  }
  return hsncTimeTable;
}
export default solapurExamTimeTable;