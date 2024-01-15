import { IIdCard } from "./types";
import {COLORCODE} from './types'

function IdCard(data: IIdCard[]) {
  const contentDefinition: any = {
    pageSize: {
      width: 129,
      height: 210,
    },
    pageMargins: [5, 5, 5, 5],
    content: [],
  };

  data.forEach((item) => {
    let line1 = "";
    let line2 = "";
    if (
      item.collegeName === "School of Humanities and Social Sciences" ||
      item.collegeName === "School of Interdisciplinary Studies"
    ) {
      var line = item.collegeName;
      var parts = line.split(" "); // Split the line at the space character

      line1 = parts.slice(0, 2).join(" "); // "School of"
      line2 = parts.slice(2).join(" "); // "Interdisciplinary Studies"
    }

    let text: { text: string | (string | { text: string; fontSize: number; alignment: string; color: string; bold: boolean; })[]; margin?: number[]; fontSize?: number; alignment?: string; color?: string; bold?: boolean; };
    let margin: number[] =[];
    if (
      item.collegeName === "School of Humanities and Social Sciences" ||
      item.collegeName === "School of Interdisciplinary Studies"
    ) {
      text = {
        text: [
          {
            text: line1,
            fontSize: 6,
            alignment: "center",
            color: item.primaryColor || COLORCODE.defaultColor,
            bold: true,
          },
          "\n",
          {
            text: line2,
            fontSize: 6,
            alignment: "center",
            color: item.primaryColor || COLORCODE.defaultColor,
            bold: true,
          },
        ],
      };
      margin = [0,-10,0,0];
    } else {
      text = {
        text: line1 || item.collegeName,
        fontSize: 6,
        alignment: "center",
        color: item.primaryColor || COLORCODE.defaultColor,
        bold: true,
        margin: [0, -12, 0, 0],
      };
      margin = [0,-2,0,0];
    }
    

    function pdf() {
      let table;
      let tables = [];

      table = [
        //main heading
        {
          table: {
            widths: [15, 75, 13],
            headerRows: 1,
            body: [
              [
                {
                  image: `${process.cwd()}/public/collegeLogo/HSNCULogo.png`,
                  margin: [-2, -4, 0, 0],
                  alignment: "left",
                  width: 18,
                },
                {
                  stack: [
                    {
                      text: "HSNC University, Mumbai",
                      alignment: "center",
                      color: COLORCODE.defaultColor,
                      bold: true,
                      fontSize: 6,
                      margin: [0, 0, 0, -10],
                    },
                    "\n",
                    {
                      text,
                      margin:margin,
                    },
                  ],
                  margin: [0, -5, 0, 0],
                },
                {
                  image: item.collegeLogo
                    ? `${item.collegeLogo}`
                    : `${process.cwd()}/public/collegeLogo/defaultLogo.png`,
                  margin: [0, -4, -1, 0],
                  alignment: "right",
                  width: 18,
                },
              ],
            ],
          },
          layout: "noBorders",
        },
        {
          margin: [10, 0, 10, 0],
          canvas: [
            {
              type: "rect",
              x: 0,
              y: 2,
              w: 100,
              h: 5,
              // r: 5,
              // dash: { length: 5 },
              // lineWidth: 10,
              lineColor: "#1E6332",
              color: "#1E6332",
            },
          ],
        },
        {
          image: item.studentPhoto
            ? `${item.studentPhoto}`
            : `${process.cwd()}/public/collegeLogo/defaultLogo.png`,
          margin: [0, 3, 0, 0],
          alignment: "center",
          width: 40,
          height: 40,
        },
        {
          table: {
            widths: [20, 0, 75],
            body: [
              ["Name", ":", `${item.studentName || "-"}`],
              ["Program", ":", `${item.Program || "-"}`],
              ["Year", ":", `${item.yearPrefix || "-"}`],
              ["PRN No", ":", ` ${item.prnNo || "-"}`],
              ["ABC ID", ":", `${item.abcNo || "-"}`],
              ["Gender", ":", `${item.gender || "-"}`],
            ],
          },
          layout: "noBorders",
          fontSize: 5,
          margin: [7, 2, 0, 0],
          lineHeight: 1.1,
          bold: true,
        },
        {
          image: item.issuingAuthority
            ? `${item.issuingAuthority}`
            : `${process.cwd()}/public/collegeLogo/defaultLogo.png`,
          margin: [0, 0, 0, 0],
          alignment: "center",
          width: 30,
          absolutePosition: { x: 7, y: 155 },
          height: 15,
        },
        {
          text: "Issuing Authority",
          alignment: "center",
          bold: true,
          fontSize: 6,
          absolutePosition: { x: 7, y: 172 },
        },
        {
          image: `${item.barcode}`,
          alignment: "center",
          margin: [0, 2, 0, 2],
          height: 17,
          width: 80,
          absolutePosition: { x: 7, y: 180 },
        },
        {
          // margin: [10, 0, 10, 0],
          canvas: [
            {
              type: "rect",
              x: 0,
              y: 2,
              w: 105,
              h: 5,
              // r: 5,
              // dash: { length: 5 },
              // lineWidth: 10,
              lineColor: "#1E6332",
              color: "#1E6332",
            },
          ],
          absolutePosition: { x: 13, y: 198 },
          pageBreak: "after",
        },
        {
          table: {
            widths: [35, 2, 60],
            body: [
              ["DOB", ":", `  ${item.dob || "-"}`],
              ["Emergency No", ":", `${item.contactNo || "-"}`],
              ["Blood Group", ":", `  ${item.bloodGroup || "-"}`],
              [
                "Address",
                ":",
                {
                  stack: [
                    { text: ` ${item.address || "-"}`, margin: [0, 0, 0, 0] },
                  ],
                },
              ],
            ],
          },
          layout: "noBorders",
          fontSize: 5,
          margin: [7, 0, 0, 0],
          lineHeight: 1.2,
          bold: true,
        },
        {
          text: "INSTRUCTION",
          bold: true,
          margin: [10, 5, 10, 0],
          fontSize: 6,
        },
        {
          table: {
            widths: [5, 95],
            body: [
              [
                "1.",
                `This card is non transferable and must be produced whenever demanded.`,
              ],
              [
                "2.",
                "In the event of its loss, the holder of card must intimate to the concern department immediately.",
              ],
              [
                "3.",
                "Any one finding this card is requested to kindly send it to the address mentioned below.",
              ],
              [
                "4.",
                "HSNC University, Mumbai D.M. Harish Building, 47, Dr. R. G. Thadani Marg, Worli, Mumbai – 400 018.",
              ],
            ],
          },
          layout: "noBorders",
          fontSize: 4,
          margin: [7, 5, 0, 0],
          bold: true,
          // lineHeight: 1.4,
        },
      ];

      tables.push(table);
      return tables;
    }
    const card = JSON.parse(JSON.stringify(pdf()));
    contentDefinition.content.push(card);
    // Insert a page break after each hall ticket except the last one
    if (item !== data[data.length - 1]) {
      contentDefinition.content.push({ text: "", pageBreak: "after" });
    }
  });

  return contentDefinition;
}

export default IdCard;
