import { table } from "console";
import { IBarCode, IChallan } from "./types";
import { numberToWordsINR } from "./utiles";
import { text } from "stream/consumers";

function barCode(data:IBarCode[]) {
  const date = new Date();
  const currentDate = date.toLocaleString().replace(/,/g, "");

  const contentDefinition: any = {
    pageSize: {
      width: 400,
      height: 100,
    },
    pageMargins: [10, 10, 10, 10],
    content: [],
  };

  for (let i = 0; i < 1; i++) {
    function pdf() {
        const table = [
            {
                columns:[
                    {
                        width:170,
                       columns:[
                        {
                            text:data[i].courseCode,
                            width:30,
                        },
                        {
                            table: {
                                widths: ["*", "*"],
                                body: [
                                    [{text:`${data[i].enrollmentNo}`,alignment:"right"}, ':  ENROLL NO.'],
                                    [{text:`${data[i].block}`,alignment:"right"}, ':  BLOCK'],
                                    [{text:`${data[i].seatNo}`,alignment:"right"}, ':  SEAT NO.'],
                                    [{text:`${data[i].ansNo}`,alignment:"right"}, ':  ANS NO.'],
                                ]
                            },
                            layout: 'noBorders',
                            fontSize: 12,
                        }
                       ],
                    }
                ]
            },
        ]
        return table;
    }
    contentDefinition.content.push(JSON.parse(JSON.stringify(pdf())));
  }

  return contentDefinition;
}
export default barCode;




// var docDefinition = {
//     content: [
//       {
//         canvas: [
//           {
//             type: 'text',
//             text: 'Rotated Text',
//             x: 10,
//             y: 25,
//             lineHeight: 1,
//             fontSize: 12,
//             fontColor: '#000000'
//           }
//         ]
//       }
//     ]
//   };
  
//   pdfMake.createPdf(docDefinition).open();
  