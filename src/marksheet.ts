// const data = require("./MOCK_DATA (5).json");

// /** this is dynamic column logic 
// const values = ["Value 1", "Value 2", "Value 3"];

// const table1 = {
//   headerRows: 1,
//   widths: ["*", "*", "*", "*"],
//   body: [
//     [
//       { text: "Column 1", bold: true, border: [false, false, false, true] },
//       { text: "Column 2", bold: true, border: [false, false, false, true] },
//       { text: "Column 3", bold: true, border: [false, false, false, true] },
//       {
//         text: "Dynamic Column",
//         bold: true,
//         border: [false, false, false, true],
//       },
//     ],
//   ],
//   layout: "noBorders",
// };

// // Add rows to the table body using a loop
// for (let i = 0; i < values.length; i++) {
//   table1.body.push([
//     { text: "Static 1", bold: false, border: [false, false, false, true] },
//     { text: "Static 2", bold: false, border: [false, false, false, true] },
//     { text: "Static 3", bold: false, border: [false, false, false, true] },
//     { text: values[i], bold: false, border: [false, false, false, true] },
//   ]);
// }
// */

// /* The above code is defining an interface named `dataValue` in TypeScript. This interface specifies
// the properties and their types that an object of type `dataValue` should have. The properties
// include `name`, `credit`, `externalMin`, `externalMax`, `externalObt`, `internalMin`, `internalMax`,
// `internalObt`, `grade`, `cgp`, `total`, `semester`, `monthYear`, and `gp`. These properties
// represent the various attributes of a student's academic performance such as their name, grades,
// credits, etc. */
// interface dataValue {
//   name: string;
//   credit: number;
//   externalMin: number;
//   externalMax: number;
//   externalObt: number;
//   internalMin: number;
//   internalMax: number;
//   internalObt: number;
//   grade: string;
//   cgp: number;
//   total: number;
//   semester: string;
//   monthYear: string;
//   gp: number;
// }

// /* The above code is declaring and initializing multiple arrays of numbers and strings. These arrays
// are likely going to be used to store and manipulate data related to academic grades and performance. */
// let externalMax: number[] = [];
// let internalMax: number[] = [];
// let externalObt: number[] = [];
// let internalObt: number[] = [];
// let credit: number[] = [];
// let cgp: number[] = [];
// let total: number[] = [];
// let externalMaxTotal: number[] = [];
// let internalMaxTotal: number[] = [];
// let externalObtTotal: number[] = [];
// let internalObtTotal: number[] = [];
// let totalCredit: number[] = [];
// let totalCgp: number[] = [];
// let totalGp: number[] = [];
// let totalOfTotal: number[] = [];
// let result: string[] = [];

// /* This code is defining a TypeScript object called `MarkSheet`. The `pageSize` property specifies the
// size of the page to be used for the PDF document. The `pageMargins` property specifies the margins
// to be used for the PDF document. The `content` property is an empty array of objects of type
// `dataValue`. The `any` type is used to allow for flexibility in the type of the `MarkSheet` object. */
// const MarkSheet: any = {
//   pageSize: "A3",
//   pageMargins: [30, 10, 30, 10],
//   content: [] as dataValue[],
// };

// /* The code is iterating through an array of objects called "data". For each object in the array,
// it is extracting the values of various properties such as name, rollNo, and subject. It then
// iterates through the "subject" array of each object and extracts the values of properties such as
// externalMax, internalMax, externalObt, internalObt, credit, cgp, and total. These values are pushed
// into separate arrays for each property. */
// for (let k = 0; k < data.length; k++) {
//   externalMax = [];
//   internalMax = [];
//   externalObt = [];
//   internalObt = [];
//   credit = [];
//   cgp = [];
//   total = [];
//   externalMaxTotal = [];
//   internalMaxTotal = [];
//   externalObtTotal = [];
//   internalObtTotal = [];
//   totalCredit = [];
//   totalCgp = [];
//   totalGp = [];
//   totalOfTotal = [];
//   result = [];
//   const name = data[k]["name"];
//   const rollNo = data[k]["rollNo"];

//   for (let j = 0; j < data[k]["subject"].length; j++) {
//     externalMax.push(data[k]["subject"][j].externalMax);
//     internalMax.push(data[k]["subject"][j].internalMax);
//     externalObt.push(data[k]["subject"][j].externalObt);
//     internalObt.push(data[k]["subject"][j].internalObt);
//     credit.push(data[k]["subject"][j].credit);
//     cgp.push(data[k]["subject"][j].cgp);
//     total.push(data[k]["subject"][j].total);
//   }

//   /* This code is calculating various totals and scores for each student's academic performance. */
//   externalMaxTotal.push(
//     externalMax.reduce(
//       (accumulator, currentValue) => accumulator + currentValue
//     )
//   );
//   internalMaxTotal.push(
//     internalMax.reduce(
//       (accumulator, currentValue) => accumulator + currentValue
//     )
//   );
//   const sum = externalObt.reduce(
//     (accumulator, currentValue) => accumulator + currentValue
//   );
//   externalObtTotal.push(sum);
//   internalObtTotal.push(
//     internalObt.reduce(
//       (accumulator, currentValue) => accumulator + currentValue
//     )
//   );
//   const creditScore = credit.reduce(
//     (accumulator, currentValue) => accumulator + currentValue
//   );
//   totalCredit.push(creditScore);
//   const cgpScore = cgp.reduce(
//     (accumulator, currentValue) => accumulator + currentValue
//   );
//   totalCgp.push(cgpScore);
//   const totalMark = total.reduce(
//     (accumulator, currentValue) => accumulator + currentValue
//   );
//   totalOfTotal.push(totalMark);
//   const gpScore = Math.round((cgpScore / creditScore) * 100) / 100;
//   totalGp.push(gpScore);

//   /* This code block is checking the total marks obtained by a student and assigning
//   a result based on the range of marks. */
//   if (sum >= 315.45) {
//     result.push("First Class with Distinction");
//   } else if (sum >= 277.396) {
//     result.push("First Class");
//   } else if (sum >= 231.33) {
//     result.push("Higher Second Class");
//   } else if (sum >= 210.3) {
//     result.push("Second Class");
//   } else if (sum >= 0) {
//     result.push("pass");
//   } else {
//     result.push("fail");
//   }

//   /* The above code is defining a TypeScript object `table2` which contains properties for defining a
//   table. The `headerRows` property specifies the number of rows to be used as the header of the
//   table. The `widths` property specifies the width of each column in the table. The `body` property
//   is an array of arrays, where each inner array represents a row in the table. The values in each
//   row are defined using the `data` object's `subject` property, which is an array of objects with
//   properties such as `name`, `credit`, `externalMax`, `internal */
//   const table2 = {
//     headerRows: 1,
//     widths: [250, "*", "*", "*", "*", "*", "*", "*", "*", 70],
//     body: [
//       ...data[k]["subject"].map((value: dataValue) => [
//         {
//           text: value.name,
//           margin: [0, 7, 0, 0],
//           border: [false, false, false, false],
//         },
//         {
//           text: value.credit,
//           alignment: "center",
//           margin: [0, 7, 0, 0],
//           border: [false, false, false, false],
//         },
//         {
//           text: `${value.externalMax}\n${value.internalMax}`,
//           alignment: "center",
//           border: [false, false, false, false],
//         },
//         {
//           text: `${value.externalMin}\n${value.internalMin}`,
//           alignment: "center",
//           border: [false, false, false, false],
//         },
//         {
//           text: `${value.externalObt}\n${value.internalObt}`,
//           alignment: "center",
//           border: [false, false, false, false],
//         },
//         {
//           text: value.total,
//           alignment: "center",
//           margin: [0, 7, 0, 0],
//           border: [false, false, false, false],
//         },
//         {
//           text: value.grade,
//           alignment: "center",
//           margin: [0, 7, 0, 0],
//           border: [false, false, false, false],
//         },
//         {
//           text: value.gp.toFixed(2),
//           alignment: "center",
//           margin: [0, 7, 0, 0],
//           border: [false, false, false, false],
//         },
//         {
//           text: value.cgp.toFixed(1),
//           alignment: "center",
//           margin: [0, 7, 0, 0],
//           border: [false, false, false, false],
//         },
//         {
//           text: value.monthYear,
//           alignment: "center",
//           margin: [0, 7, 0, 0],
//           border: [false, false, false, false],
//         },
//       ]),
//     ],
//   };

// /* This code is pushing a new object into the `content` array of the `MarkSheet` object. The object
// being pushed is the result of calling the `marksheetpdf` function with several arguments. The
// `JSON.stringify` method is used to convert the result of `marksheetpdf` into a string, and then
// `JSON.parse` is used to convert it back into an object before pushing it into the `content` array.
// This is done to ensure that the object being pushed is a new object and not a reference to the
// original object returned by `marksheetpdf`. */
//   MarkSheet.content.push(
//     JSON.parse(
//       JSON.stringify(
//         marksheetpdf(
//           table2,
//           name,
//           rollNo,
//           result,
//           totalCredit,
//           externalMaxTotal,
//           internalMaxTotal,
//           externalObtTotal,
//           internalObtTotal,
//           totalOfTotal,
//           totalGp,
//           totalCgp
//         )
//       )
//     )
//   );
// }

// function marksheetpdf(
//   table2: any,
//   name: string,
//   rollNo: string,
//   result: string[],
//   totalCredit: number[],
//   externalMaxTotal: number[],
//   internalMaxTotal: number[],
//   externalObtTotal: number[],
//   internalObtTotal: number[],
//   totalOfTotal: number[],
//   totalGp: number[],
//   totalCgp: number[]
// ) {
//   const table = [
//     [
//       {
//         text: "Five Years Integrated B.Com. LLB(Hons.) Programme",
//         bold: true,
//         alignment: "center",
//         margin: [20, 50, 20, 30],
//       },
//     ],
//     [
//       {
//         columns: [
//           {
//             width: 700,
//             stack: [
//               {
//                 text: "I",
//                 bold: true,
//                 margin: [40, 0, 0, 0],
//               },
//               {
//                 text: "FEB-2022",
//                 alignment: "right",
//               },
//             ],
//           },
//         ],
//       },
//       "\n",
//       {
//         table: {
//           widths: ["*", "*", "*", "*"],
//           body: [
//             [
//               {
//                 text: rollNo,
//                 margin: [20, 0, 0, 0],
//               },
//               {
//                 text: name,
//               },
//               {
//                 text: "166-U S LAW",
//                 alignment: "center",
//               },
//               {
//                 text: "202115000001",
//                 alignment: "right",
//                 margin: [0, 0, 30, 0],
//               },
//             ],
//           ],
//         },
//         layout: "noBorders",
//       },
//     ],
//     "\n\n\n\n",
//     [
//       {
//         table: table2,
//       },
//     ],
//     [
//       {
//         margin: [40, 300, 30, 10],
//         columns: [
//           {
//             text: result,
//           },
//           {
//             width: 300,
//             table: {
//               headerRows: 1,
//               widths: ["*", "*", "*", "*", "*"],
//               body: [
//                 [
//                   {
//                     text: totalCredit,
//                     margin: [40, 0, 0, 0],
//                   },
//                   {
//                     text: `${externalMaxTotal}\n${internalMaxTotal}`,
//                     alignment: "center",
//                   },
//                   {
//                     text: "",
//                   },
//                   {
//                     text: `${externalObtTotal}\n${internalObtTotal}`,
//                     alignment: "center",
//                   },
//                   {
//                     text: totalOfTotal,
//                   },
//                 ],
//                 [
//                   {
//                     text: "I.Dist.:(315.450). First Class.:(277.396). Higher Second. Class.:(231.330). Second Class.:(210.300)",
//                     colSpan: 5,
//                   },
//                   {
//                     text: "",
//                   },
//                   {
//                     text: "",
//                   },
//                   {
//                     text: "",
//                   },
//                   {
//                     text: "",
//                   },
//                 ],
//               ],
//             },
//             layout: "noBorders",
//           },
//           {
//             text: `${totalCgp}\n\n\n${totalGp}`,
//             alignment: "right",
//           },
//         ],
//       },
//     ],
//     [
//       {
//         text: "17-May-2023 \t\t\t 150536",
//         margin: [40, 200, 30, 10],
//         pageBreak: "after",
//       },
//     ],
//   ];
//   return table;
// }

// export default MarkSheet;
