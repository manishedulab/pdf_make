const data = require("./MOCK_DATA (3).json")

interface notice {
  name: string;
  seatNo: number;
  studentId: number;
  gender: string;
  course: string;
  medium: string;
}

type PageSize = {
  width: number;
  height: number;
}


function noticepdf(rows:any, benef:number[],date:Date){
    const currentDate = date.toLocaleDateString()
    let TEXT = benef.join(",  ");
    const table=[
        //* main heading 
        [
            {
                text: currentDate,
                alignment:"right",
            },
            {
                text:"Gujarat University",
                fontSize: 18,
                alignment: "center",
                bold: true,
                lineHeight: 1.2,
            },
            {
                text:"Five Year Integrated B.Com LL.B Programme, Semester-1, FEB-2022",
                alignment: "center",
            }
        ],"\n",
        //* table heading
        [
            {
                table: {
                    widths: [280,150,150,150],
                    headerRows: 1,
                    body: [
                        [
                            {
                                text:'Result/Class',
                                bold:true,
                                fontSize: 13.8,
                                border:[false,true,false,true],
                                margin:[0,10,0,0]
                            },
                            {
                                text:'Male',
                                bold:true,
                                fontSize: 13.8,
                                alignment:"center",
                                border:[false,true,false,true],
                                margin:[0,10,0,0]
                            },
                            {
                                text:"Female",
                                bold:true,
                                fontSize: 13.8,
                                alignment:"center",
                                border:[false,true,false,true],
                                margin:[0,10,0,0]
                            },
                            {
                                text:"Total",
                                bold:true,
                                fontSize: 13.8,
                                alignment:"center",
                                border:[false,true,false,true],
                                margin:[0,10,0,0]
                            }
                        ],
                    ]
                },
                layout: {
                    hLineStyle: function (i:number, node:any) {
                        if (i === 0 || i === node.table.body.length) {
                            return {dash: {length: 2, space: 4}};
                        }
                    },
                }
            },
        ],
        //* table content 
        [
            {   margin:[5,35,0,10],
                table: {
                    widths: [280,155,145,160],
                    headerRows: 1,
                    body: [
                        [
                            {
                                text:"First Class with Distinction",
                            },
                            {
                                text:"00002",
                                alignment:"center",
                                border:false,
                            },
                            {
                                text:"00004",
                                alignment:"center",
                                border:false,
                            },
                            {
                                text:"00006",
                                alignment:"center",
                                border:false,
                            },
                        ],
                        [
                            {
                                text:"First Class",
                                margin:[0,10,0,0]
                            },
                            {
                                text:"00004",
                                alignment:"center",
                                border:false,
                                margin:[0,10,0,0]
                            },
                            {
                                text:"00006",
                                alignment:"center",
                                border:false,
                                margin:[0,10,0,0]
                            },
                            {
                                text:"00010",
                                alignment:"center",
                                border:false,
                                margin:[0,10,0,0]
                            },
                        ],
                        [
                            {
                                text:"Higher Second Class",
                                margin:[0,10,0,0]
                            },
                            {
                                text:"00011",
                                alignment:"center",
                                border:false,
                                margin:[0,10,0,0]
                            },
                            {
                                text:"00010",
                                alignment:"center",
                                border:false,
                                margin:[0,10,0,0]
                            },
                            {
                                text:"00021",
                                alignment:"center",
                                border:false,
                                margin:[0,10,0,0]
                            },
                        ],
                        [
                            {
                                text:"Second Class",
                                margin:[0,10,0,0]
                            },
                            {
                                text:"00001",
                                alignment:"center",
                                border:false,
                                margin:[0,10,0,0]
                            },
                            {
                                text:"00003",
                                alignment:"center",
                                border:false,
                                margin:[0,10,0,0]
                            },
                            {
                                text:"00004",
                                alignment:"center",
                                border:false,
                                margin:[0,10,0,0]
                            },
                        ],
                        [
                            {
                                text:"Pass",
                                margin:[0,10,0,0]
                            },
                            {
                                text:"00001",
                                alignment:"center",
                                border:false,
                                margin:[0,10,0,0]
                            },
                            {
                                text:"00001",
                                alignment:"center",
                                border:false,
                                margin:[0,10,0,0]
                            },
                            {
                                text:"00002",
                                alignment:"center",
                                border:false,
                                margin:[0,10,0,0]
                            },
                        ],
                        [
                            {
                                text:"Fail",
                                margin:[0,10,0,0]
                            },
                            {
                                text:"00031",
                                alignment:"center",
                                border:false,
                                margin:[0,10,0,0]
                            },
                            {
                                text:"00012",
                                alignment:"center",
                                border:false,
                                margin:[0,10,0,0]
                            },
                            {
                                text:"00043",
                                alignment:"center",
                                border:false,
                                margin:[0,10,0,0]
                            },
                        ],
                    ],
                },
                layout: "noBorders",
            }
        ],
        //* footer of table
        [
            {
                table: {
                    widths: [290,130,170,135],
                    headerRows: 1,
                    body: [
                        [
                            {
                                text:'TOTAL REGISTERED',
                                bold:true,
                                fontSize: 13.8,
                                border:[false,true,false,false],
                                margin:[0,10,0,0]
                            },
                            {
                                text:'00050',
                                alignment:"center",
                                border:[false,true,false,false],
                                margin:[0,10,0,0]
                            },
                            {
                                text:"00036",
                                alignment:"center",
                                border:[false,true,false,false],
                                margin:[0,10,0,0]
                            },
                            {
                                text:"00086",
                                alignment:"center",
                                border:[false,true,false,false],
                                margin:[0,10,0,0]
                            }
                        ],
                        [
                            {
                                text:'THE RESULT OF THE EXAMINATION IS 50.00%',
                                bold:true,
                                colSpan: 1,
                                fontSize: 13.8,
                                border:[false,false,false,true],
                            },
                            {
                                text:'',
                                alignment:"center",
                                border:[false,false,false,false],
                                margin:[0,5,0,0]
                            },
                            {
                                text:"",
                                alignment:"center",
                                border:[false,false,false,false],
                                margin:[0,5,0,0]
                            },
                            {
                                text:"",
                                alignment:"center",
                                border:[false,false,false,false],
                                margin:[0,5,0,0]
                            }
                        ],
                    ]
                },
                layout: {
                    hLineStyle: function (i:number, node:any) {
                        if (i === 0 || i === node.table.body.length) {
                            return {dash: {length: 2, space: 4}};
                        }
                    },
                }
            },
        ],
        //* small table
        [   
            {
                text:"HIGHEST 10 NUMBERS (Grand Total)",
                bold:true,
                margin:[0,150,0,0]
            },
            //table heading
            [
                {
                    margin:[0,5,0,0],
                    table: {
                        widths: [50,50,50,50],
                        headerRows: 1,
                        body: [
                            [
                                {
                                    text:'Seat',
                                    bold:true,
                                    fontSize: 13.8,
                                    border:[false,true,false,true],
                                    margin:[0,10,0,0]
                                },
                                {
                                    text:'Mark',
                                    bold:true,
                                    fontSize: 13.8,
                                    alignment:"center",
                                    border:[false,true,false,true],
                                    margin:[0,10,0,0]
                                },
                                {
                                    text:"Seat",
                                    bold:true,
                                    fontSize: 13.8,
                                    alignment:"center",
                                    border:[false,true,false,true],
                                    margin:[0,10,0,0]
                                },
                                {
                                    text:"Mark",
                                    bold:true,
                                    fontSize: 13.8,
                                    alignment:"center",
                                    border:[false,true,false,true],
                                    margin:[0,10,0,0]
                                }
                            ],
                        ]
                    },
                    layout: {
                        hLineStyle: function (i:number, node:any) {
                            if (i === 0 || i === node.table.body.length) {
                                return {dash: {length: 2, space: 4}};
                            }
                        },
                    }
                },
            ],
            [
                {
                    columns:
                    [
                        {   width:140,
                            margin:[10,10,0,10],
                            table: {
                                widths: [60,50],
                                headerRows: 1,
                                body: rows.slice(0, Math.ceil(rows.length/2)),
                            },
                            layout: "noBorders",
                        },
                        {   
                            margin:[0,14,0,10],
                            table: {
                                widths: [50,50],
                                headerRows: 1,
                                body: rows.slice(Math.ceil(rows.length/2)),
                            },
                            layout: "noBorders",
                        },
                    ]
                },
                {
                    canvas: [
                        { type: 'line', x1: 0, y1: 0, x2: 240, y2: 0, dash: {length: 2, space: 4} }
                    ]
                }
            ],
        ],
        //* next page 
        //* second page heading 
        [
            {
                text: "GUJARAT UNIVERSITY",
                fontSize: 18,
                pageBreak: 'before',
                bold: true, 
                alignment: "center",
                lineHeight: 1.8,
            },
            {
                text: "NOTIFICATION /537/ OF 2023",
                fontSize: 15,
                bold: true, 
                alignment: "center",
                lineHeight: 1.8,
                decoration: "underline",
            },
            {
                text: "Result of Five Years Integrated B.Com LL.B Programme, Semester-1 Examination, FEB-2022",
                bold: true, 
                alignment: "center",
                lineHeight: 1.8,
                decoration: "underline",
            }
        ],"\n\n",
        //* main content heading 
        [
            {   
                text: "The following Result is hereby declared as under.",
                margin:[40,0,30,0],
            },
        ],"\n\n",
        //* content
        [
            {   
                margin:[40,0,30,0],
                stack:[
                    {
                        text: "First Class With Distinction",
                        bold: true,
                        lineHeight: 2,
                    },
                    {
                        text: TEXT
                    }

                ],
                
            },
            {   
                margin:[40,30,30,0],
                stack:[
                    {
                        text: "First Class ",
                        bold: true,
                        lineHeight: 2,
                    },
                    {
                        text: TEXT
                    }

                ],
                
            },
            {   
                margin:[40,30,30,0],
                stack:[
                    {
                        text: "Higher Second Class ",
                        bold: true,
                        lineHeight: 2,
                    },
                    {
                        text: TEXT
                    }

                ],
                
            },
            {   
                margin:[40,30,30,0],
                stack:[
                    {
                        text: "Second Class ",
                        bold: true,
                        lineHeight: 2,
                    },
                    {
                        text: TEXT
                    }

                ],
                
            },
            {   
                margin:[40,30,30,0],
                stack:[
                    {
                        text: "PASS",
                        bold: true,
                        lineHeight: 2,
                    },
                    {
                        text: TEXT
                    }

                ],
                
            },
            {   
                margin:[40,30,30,0],
                stack:[
                    {
                        text: "FAIL",
                        bold: true,
                        lineHeight: 2,
                    },
                    {
                        text: TEXT
                    }

                ],
                
            },
        ],
        //* footer of second page 
        [
            {
                margin:[40,40,0,10],
                absolutePosition: { x: 60, y: 1090 },
                columns:
                [
                    {   
                        width:580,
                        stack:[
                            {
                                text: "No. Exam /672/ 2023",
                                margin: [0,0,0,10],
                            },
                            {
                                text: "Gujarat University Office \n Ahmedabad-9.",
                                margin: [0,0,0,10],
                            },
                            {
                                text: `Date: ${currentDate} `
                            }
                        ]
                    },
                    {
                        stack:[
                            {
                                text: "By Order",
                                margin: [0,0,0,50],
                            },
                            {
                                text: "Controller of Examinations",
                            },
                        ]   
                    },
                ]
            },
        ]
        
    ]
    return table;
}

const assets = [1,2,3,4,5,6,7,8,9,10]
const benef =[11,20,23,15,54,65,56,25,26,58]
  
let rows = [
    ['', '']
  ];

const date = new Date()

for (let i = 0; i < assets.length; i += 1) { // use the larger array to loop
    rows.push([assets[i].toString(), benef[i].toString()]);
}

const Notice:any = {
  pageSize: 'A3',
  pageMargins: [30, 10, 30, 10],
  content: noticepdf(rows,benef,date),
        // canvas: [
        //   { type: 'line', x1: 20, y1: 10, x2: 870-20, y2: 10, dash: {length: 5, space: 8} } // dotted line
        // ]
};

// for (let i = 0; i <1; i++) {
//   const name = data[i]['student_name']
//   const seatNo = data[i]['exam_seat_number']
//   const studentId = data[i]['student_id']
//   const gender = data[i]['gender']
//   const course = data[i]['course']
//   const medium = data[i]['language']

//   Certificate.content.push(JSON.parse(JSON.stringify(certificatepdf({ name, seatNo, studentId, gender, course, medium}))))
// }

export default Notice;