import { IIdCard } from "./types";

function IdCard(data: IIdCard[]) {
  // const img = collegeLogo(data[0].collegeName)

//   console.log("first", data);

  const contentDefinition: any = {
    pageSize: {
      width: 250,
      height: 400,
    },
    pageMargins: [5, 5, 5, 0],
    content: [],
  };

  for (let i = 0; i < data.length; i++) {
    function pdf() {
      let table;
      let tables = [];

      table = [
        //main heading
        {
          table: {
            widths: [110, 120],
            headerRows: 1,
            body: [
              [
                {
                  image: `${process.cwd()}/img/Hsnc-university-logo.png`,
                  margin: [0, 0, 0, 0],
                  // alignment: "center",
                  width: 30,
                },
                {
                  image: `${process.cwd()}/img/KCC_Mumbai_logo.svg.png`,
                  margin: [0, 0, 0, 0],
                  alignment: "right",
                  width: 30,
                },
              ],
            ],
          },
          layout: "noBorders",
        },
        {
          text: [
            {
              text: "HSNC University Mumbai",
              alignment: "center",
              color: "#BD9C47",
              bold: true,
            },
            "\n",
            {
              text: `${data[i].collegeName || '-'}`,
              alignment: "center",
              color: "#BD9C47",
              bold: true,
            },
            "\n",
            {
              text: `Mumbai`,
              alignment: "center",
              color: "#BD9C47",
              bold: true,
            },
          ],
        },
        {
          margin: [0, 0, 10, 0],
          canvas: [
            {
              type: "rect",
              x: -4,
              y: 2,
              w: 248,
              h: 20,
              // r: 5,
              // dash: { length: 5 },
              // lineWidth: 10,
              lineColor: "#1E6332",
              color: "#1E6332",
            },
          ],
        },
        {
          image: `${process.cwd()}/img/cds.jpg`,
          margin: [0, 10, 0, 0],
          alignment: "center",
          width: 110,
          height: 100,
        },
        {
          table: {
            widths: [45,2, 155],
            body: [ 
              ["Name", ':',`Manish Ramsumiran Vishwakarma`],
              ["Standard", ':',`${data[i].standard || '-'}`],
              ["PRN No", ':', ` ${data[i].prnNo || '-'}`],
              ["Roll No", ':', `${data[i].rollNo || '-'}`],
              ["Gender", ':', `${data[i].gender || '-'}`],
            ],
          },
          layout: "noBorders",
          fontSize: 10,
          margin: [8, 10, 0, 0],
          lineHeight: 1.2,
          bold:true
        },
        {
          image: `${process.cwd()}/img/xyz.png`,
          margin: [0, 2, 0, 0],
          alignment: "center",
          width: 50,
          height: 20,
        },
        {
          text: "Issuing Authority",
          alignment: "center",
          bold: true,
        },
        {
          margin: [0, 0, 10, 0],
          canvas: [
            {
              type: "rect",
              x: -4,
              y: 2,
              w: 248,
              h: 13.5,
              // r: 5,
              // dash: { length: 5 },
              // lineWidth: 10,
              lineColor: "#1E6332",
              color: "#1E6332",
            },
          ],
          pageBreak: "after",
        },
        {
          table: {
            widths: [70,2, 140],
            body: [
              ["DOB", ':', `  ${data[i].dob || '-'}`],
              ["Contact No", ':', `  ${data[i].contactNo || '-'}`],
              ["Blood Group", ':', `  ${data[i].bloodGroup || '-'}`],
              ["Address", ':', { stack: [{ text: ` ${data[i].address || '-'}`, margin: [0, 5, 0, 0] }] }],
            ],
          },
          layout: "noBorders",
          fontSize: 10,
          margin: [8, 10, 0, 0],
          lineHeight: 1.4,
          bold:true
        },
        {
            text:'INSTRUCTION',
            bold:true,
            margin: [10, 10, 10, 0],

        },
        {
            table: {
              widths: [10, 180],
              body: [
                ["1.", `This card is non transferable and must be produced whenever demanded.`],
                ["2.", "In the event of its loss, the holder of card must intimate to the concern department immediately."],
                ["3.", "Any one finding this card is requested to kindly send it to the address mentioned below."],
              ],
            },
            layout: "noBorders",
            fontSize: 10,
            margin: [10, 5, 0, 0],
            bold:true
            // lineHeight: 1.4,
          },

        {
            text: `  ${data[i].email || '-'}`,
            alignment: "center",
            margin:[0,10,0,0],
        }
      ];

      tables.push(table);
      return tables;
    }
    const card = JSON.parse(JSON.stringify(pdf()));
    contentDefinition.content.push(card);
    // Insert a page break after each hall ticket except the last one
    if (i < (data.length - 1)) {
      contentDefinition.content.push({ text: "", pageBreak: "after" });
    }
  }

  return contentDefinition;
}
export default IdCard;
