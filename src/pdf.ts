import data from './MOCK_DATA.json'

interface ContentDefinition{
  mobile:string;
  id:number
}

function pdf({mobile,id}:ContentDefinition){
  const table=[

    {
      table: {
        widths: [70, 920],
        headerRows: 1,
        body: [
          [
            {
              image: "img/abc.png",
              margin: [0, 0, 20, 0],
              width: 70,
            },
            {
              text: [
                {
                  text: "GUJARAT UNIVERSITY",
                  fontSize: 20,
                  alignment: "center",
                  bold: true,
                  margin: [0, 50, 0, 0],
                },
                "\n",
                {
                  text: "Navarangpura, Ahmedabad 380009",
                  alignment: "center",
                  margin: [0, 50, 0, 0],
                },
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
                { text: "FOUR COPIES)", bold: true, decoration: "underline" },
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
              text: "Client Code:",
              bold:true,
            },
            {
              text: "Date:24-04-2023 13:25:45 PM",
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
                  bold:true,
                },
                "\n",
                {
                  text: "College Name Code: (025) School of Psycho.Phills & Edu., Guj.Uni., Ahemdabad-9",
                  bold:true,
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
                {
                  text: "College Address: ___________________________________________________________________",
                  bold:true,
                  margin: [0, 0, 0, 50],
                },
                "\n",
                {
                  text: "Months/Year:",
                  bold:true,
                },
                "\n",
                {
                  text: "Program:",
                  bold:true,
                },
                "\n",
                {
                  text: "Semester/Year:",
                  bold:true,
                },
                "\t\t\t\t\t\t\t",
                {
                  text: "Mode:",
                  bold:true,
                },
                "\n",
                {
                  text: "Mode of Payment: Cheque/DD",
                  bold:true,
                },
                "\n",
                {
                  text: "Cheque/DD Details: Bank:________________________________________.Branch______________________.No.:_____________.Date:___________",
                  bold:true,
                },
                "\n",
                { 
                  text: `Mobile No.:${mobile}`,
                  bold:true,
                },
                "\n",
              ],
            },
          ],
        ],
      },
      layout: "noBorders",
    },
    {
      table: {
        widths: [190, 250, 190, 190, 190],
        headerRows: 1,
        body: [
          [
            { text: "No", alignment: "center" , bold:true, },
            { text: "Types Of Fees", alignment: "left" ,  bold:true, },
            { text: "Rate of Fees Rs.", alignment: "center",  bold:true, },
            { text: "No. of Students", alignment: "center", bold:true, },
            { text: "Amount Rs.", alignment: "center",  bold:true,},
          ],
          [
            { text: "1", alignment: "center",  bold:true, },
            { text: "University Exam Fee", alignment: "left",  bold:true, },
            { text: "550.00", alignment: "center",  bold:true, },
            { text: "6", alignment: "center",  bold:true, },
            { text: "3300", alignment: "right",  bold:true, },
          ],
          [
            { text: "2", alignment: "center",  bold:true, },
            { text: "Practical Exam Fee", alignment: "left",  bold:true, },
            { text: "00.00", alignment: "center",  bold:true, },
            { text: "6", alignment: "center",  bold:true, },
            { text: "00", alignment: "right",  bold:true, },
          ],
          [
            { text: "3", alignment: "center",  bold:true, },
            { text: "Late Fee", alignment: "left",  bold:true, },
            { text: "0.00", alignment: "center",  bold:true, },
            { text: "6", alignment: "center",  bold:true, },
            { text: "00", alignment: "right",  bold:true, },
          ],
          [
            { text: "4", alignment: "center",  bold:true, },
            { text: "pristed Form Fee", alignment: "left",  bold:true, },
            { text: "25.00", alignment: "center",  bold:true, },
            { text: "6", alignment: "center",  bold:true, },
            { text: "150", alignment: "right",  bold:true, },
          ],
          [
            { text: "5", alignment: "center",  bold:true, },
            { text: "University sports Fee(Semester wise)", alignment: "left",  bold:true, },
            { text: "10.00", alignment: "center",  bold:true, },
            { text: "6", alignment: "center",  bold:true, },
            { text: "60", alignment: "right",  bold:true, },
          ],
          [
            { text: "6", alignment: "center",  bold:true, },
            { text: "Cultural Fee(Semester wise)", alignment: "left",  bold:true, },
            { text: "10.00", alignment: "center",  bold:true, },
            { text: "6", alignment: "center",  bold:true, },
            { text: "60", alignment: "right",  bold:true, },
          ],
          [
            { text: "7", alignment: "center",  bold:true, },
            { text: "TOTAL AMOUNT", alignment: "left",  bold:true, },
            { text: "", alignment: "center",  bold:true, },
            { text: "", alignment: "center",  bold:true, },
            { text: "3570", alignment: "right",  bold:true, },
          ],
          [
            { text: "8", alignment: "center",  bold:true, },
            { text: "Deduction For Exam-Form Printing", alignment: "left",  bold:true, },
            { text: "1.50", alignment: "center",  bold:true, },
            { text: "6", alignment: "center",  bold:true, },
            { text: "9", alignment: "right",  bold:true, },
          ],
          [
            { text: "9", alignment: "center",  bold:true, },
            { text: "Deduction For Hall-Ticket Printing", alignment: "left",  bold:true, },
            { text: "1.50", alignment: "center",  bold:true, },
            { text: "6", alignment: "center",  bold:true, },
            { text: "9", alignment: "right",  bold:true, },
          ],
          [
            { text: "10", alignment: "center",  bold:true, },
            { text: "Deduction For Marksheet Distribution", alignment: "left",  bold:true, },
            { text: "1.50", alignment: "center",  bold:true, },
            { text: "6", alignment: "center",  bold:true, },
            { text: "9", alignment: "right" ,  bold:true,},
          ],
          [
            { text: "11", alignment: "center",  bold:true, },
            { text: "Total Deduction", alignment: "left",  bold:true, },
            { text: "", alignment: "center",  bold:true, },
            { text: "", alignment: "center",  bold:true, },
            { text: "27", alignment: "right",  bold:true, },
          ],
          [
            { text: "12", alignment: "center",  bold:true, },
            { text: "Net Amount to be paid (7.11)", alignment: "left",  bold:true, },
            { text: "", alignment: "center",  bold:true, },
            { text: "", alignment: "center",  bold:true, },
            { text: "3543", alignment: "right",  bold:true, },
          ],
          [
            { text: "", alignment: "center" , bold:true,},
            {
              text: "In Words \t\t\t Three Thousand Five Hundred Fourty Three Rupies",
              alignment: "left",
              colSpan: 4,
              bold:true,
            },
            { text: "", alignment: "center" },
            { text: "", alignment: "center" },
            { text: "", alignment: "right" },
          ],
        ],
      },
      // layout: "noBorders",
    },
    {
        text: "\n",
    },
    {
        text:'To be Submitted at Window No.19 KOTAK Bank Counter, Gujarat University', alignment:'center',
        bold:true,
    },'\n',
    {
        text:'Note:',
        bold:true,
    },
    {
        text:'1.This fees receipt is valid subject to realization of cheque.',
        bold:true,
    }
  ]
  return table;
}


const contentDefinition:any = {
  pageSize: {
    width: 1100,
    height: 650,
  },
  pageMargins: [20, 10, 20, 10],
  content: [] as ContentDefinition[],
};

  for (let i = 0; i <1; i++) {
    const mobile = data[i]["mobile_no"]
    const id = data[i]["id"]
    contentDefinition.content.push(JSON.parse(JSON.stringify(pdf({mobile,id}))))
  }

export default contentDefinition;
