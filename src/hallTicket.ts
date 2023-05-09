import data from "./MOCK_DATA (3).json"

interface HallticketItem {
  name: string;
  seatNo: number;
  studentId: number;
  gender: string;
  course: string;
  dateOfBirth: string;
  medium: string;
}

interface pageSize{
  width: number,
  height: number
}

function hallTicketPdf( {name, seatNo, studentId, gender, course, dateOfBirth, medium }:HallticketItem){
    const table=[
      //main heading
      { 
        table: {
          widths: [820],
          headerRows: 1,
          body: [
            [
              {
                text: [
                  { 
                    bold: true,
                    lineHeight: 1.2,
                    text: "GUJARAT UNIVERSITY, AHMEDABAD",
                    fontSize: 20,
                    alignment: "center",
                    margin: [0, 50, 0, 0],
                  },
                  "\n",
                  { 
                    lineHeight: 1.2,
                    text: "Examination Form For Master of Education. Semester-1, DEC-2022 Examination",
                    alignment: "center",
                    margin: [0, 50, 0, 0],
                    bold:true,
                  },
                  "\n",
                  { 
                    lineHeight: 2,
                    text: "School of Psycho, Philo, & Edu., Guj.Uni., Ahmedabad-9-028",
                    alignment: "center",
                    bold: true,
                  }
                ],
              },
            ],
          ],
        },
        layout: "noBorders"
      },
      // heading
      {
        table: {
          widths: [20,100,220,455],
          headerRows: 1,
          body: [
            [
              { 
                text: "SI.\nNo.",
                alignment: "center",
                bold:true,
                border: [false, true, false, true]
              },
              {
                text: "Enroll./Roll No.",
                valign: "bottom",
                alignment: "center",
                bold:true,
                border: [false, true, false, true]
              },
              {
                text:'Student Name',
                alignment: "center",
                verticalAlignment: "bottom",
                bold:true,
                border: [false, true, false, true]
              },
              {
                text:'Appearing Subjects',
                alignment: "center",
                bold:true,
                border: [false, true, false, true]
              }
            ],
          ],
        },
        layout: {
          //set custom borders size and color
          hLineWidth: function (i:number, node:any) {
            return (i === 0 || i === node.table.body.length) ? 2 : 0;
          },
          vLineWidth: function (i:number, node:any) {
            return (i === 0 || i === node.table.widths.length) ? 2 : 0;
          },
          hLineColor: function (i:number, node:any) {
            return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
          },
          vLineColor: function (i:number, node:any) {
            return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
          },
        },
      },
      //middel content
      {
        columns:[
        { 
          width:390,
          stack:[
          {
            table: {
              widths: [25,90,"*"],
              headerRows: 1,
              body: [
                [
                  { 
                    text: `${studentId}`,
                    alignment: "center",
                    bold:true,
                  },
                  {
                    text: `${seatNo}`,
                    valign: "bottom",
                    lineHeight: 2.5,
                    alignment: "center",
                    bold:true,
                  },
                  {
                    text: `${name}`,
                    alignment: "center",
                    verticalAlignment: "bottom",
                    bold:true,
                  },
                ],
              ],
            },
            layout: "noBorders",
          },
          [
            {
              text:[
                {
                  text:"Birth Date:\t"
                },
                {
                  text: `${dateOfBirth}`,
                }
              ],
              absolutePosition: { x: 160, y: 160 },
              margin: [10,0,0,0],
            },
            {
            columns:
              [
                // [
                //   { 
                //     canvas: [
                //       {
                //         type: 'rect',
                //         x: 30,
                //         y: 0,
                //         w: 100,
                //         h: 110,
                //         lineWidth: 1,
                //         lineColor: '#000000',
                //       },
                //     ],
                //   },
                //   {
                //     text:"Paste Your\nPassport Size\nPhotograph\nHere",
                //     absolutePosition: { x: 60, y: 180 },
                //     lineHeight:1.2
                //   },
                // ],
                [
                  {
                    image: "img/cds.jpg",
                    x:20,
                    y:0,
                    width: 110,
                    height:110
                  },
                ],
                {
                  stack:[
                    
                    {
                    text:[
                      {
                        text:"Gender:\t"
                      },
                      {
                        text: `${gender}`,
                        bold:true,
                      }
                    ],
                    margin: [10,20,0,0],
                    },"\n",
                    {
                      text:[
                        {
                          text:"Medium:\t"
                        },
                        {
                          text: `${medium}`,
                          bold:true,
                        }
                      ],
                      margin: [10,0,0,7]
                    },
                    // [
                    //   {
                    //     canvas: [
                    //       {
                    //         type: 'rect',
                    //         x: 10,
                    //         y: 10.5,
                    //         w: 110,
                    //         h: 30,
                    //         lineWidth: 1,
                    //         lineColor: '#000000'
                    //       }
                    //     ],
                    //     margin:[0,0,10,0]
                    //   },
                    //   {
                    //     text:"Signature",
                    //     absolutePosition: { x: 190, y: 250 },
                    //     lineHeight:1.2
                    //   },
                    // ]
                    {
                      image: "img/xyz.png",
                      x:10,
                      y:10.5,
                      width: 110,
                      height:30,
                      margin:[0,10,10,0]
                    },
                  ]
                },
                {
                  stack:[
                    {
                      text:[
                        {
                          text:"Category:\t"
                        },
                        {
                          text:"ST",
                          bold:true,
                        }
                      ],
                      margin:[0,20,0,10]
                    },
                    {
                      text:[
                        {
                          text:"Appearing:\t"
                        },
                        {
                          text:"Whole",
                          bold:true,
                        }
                      ],
                      margin:[0,4,0,10]
                    },
                    {
                      text:[
                        {
                          text:"Exam Fee:\t"
                        },
                        {
                          text:"550",
                          bold:true,
                        }
                      ],
                    },
                    {
                      text:[
                        {
                          text:"Practical Fee:\t"
                        },
                        {
                          text:"0",
                          bold:true,
                        }
                      ],
                    },
                    {
                      text:[
                        {
                          text:"Form Fee:\t"
                        },
                        {
                          text:"25",
                          bold:true,
                        }
                      ],
                    },
                  ]
                }
              ]
            }
          ]
        ]},
          {
            columns:[
              {
                stack:[
                {
                  text:"(IA)",
                },
                {
                  text:"(IA)",
                },
                {
                  text:"(IA)",
                },
                {
                  text:"(IA)",
                },
                {
                  text:"(PRIA)",
                },
                {
                  text:"(PRIA)",
                },
                {
                  text:"(PRIA)",
                },
                {
                  text:"(PRIA)",
                },
                {
                  text:"(PRIA)",
                },
                {
                  text:"(PRIA)",
                },
                {
                  text:"(PRIA)",
                },
                {
                  text:"(TH)",
                },
                {
                  text:"(TH)",
                },
                {
                  text:"(TH)",
                },
                {
                  text:"(TH)",
                },
                {
                  text:"(TH2)",
                },
                {
                  text:"(TH2)",
                },
                {
                  text:"(TH2)",
                },
                {
                  text:"(TH2)",
                },
              ],
              width:45,
              lineHeight:1.2
              },
              {
                stack:[
                  {
                    text:"A 007- Core-7: Library Resources and Tools & Techniques in Educational 1",
                  },
                  {
                    text:"A 008- Core-8: Sociology of Education",
                  },
                  {
                    text:"B 101- Childhood Education",
                  },
                  {
                    text:"C 105- Inferential Statistics",
                  },
                  {
                    text:"E 515- Seminar to Enhance Special Skills",
                  },
                  {
                    text:"E 516- Case Study",
                  },
                  {
                    text:"E 517- Educational Visit",
                  },
                  {
                    text:"E 518- Library Work",
                  },
                  {
                    text:"E 519- Field Visit and Data Collection",
                  },
                  {
                    text:"E 520- Academic Writing",
                  },
                  {
                    text:"E 521- Dissertation Guidance",
                  },
                  {
                    text:"A 007- Core-7: Library Resources and Tools & Techniques in Educational 1",
                  },
                  {
                    text:"A 008- Core-8: Sociology of Education",
                  },
                  {
                    text:"B 101- Childhood Education",
                  },
                  {
                    text:"C 105- Inferential Statistics",
                  },
                  {
                    text:"A 007- Core-7: Library Resources and Tools & Techniques in Educational 1",
                  },
                  {
                    text:"A 008- Core-8: Sociology of Education",
                  },
                  {
                    text:"B 101- Childhood Education",
                  },
                  {
                    text:"C 105- Inferential Statistics",
                  },
  
                ],
                lineHeight:1.2
              }
            ]
          }
        ]
      },
      //middel line 
      {
        canvas: [
          { type: 'line', x1: 0, y1:0 , x2:830, y2: 0, lineWidth: 1 }
        ]
      },
      {
        text:[
          {
           text: 'I have verified all the details Filled in this Form and found to be correct.',
           bold:true
          },
          {
            text:"\n\nDate:____________________________\t\t\t Place:_________________" ,
            bold:true
          },
          {
            text:"\nstudent's Signature",
            alignment:'right',
            bold:true,

          }
        ],
        margin:[10,140,30,5]
      },

      //second middle line 
      {
        canvas: [
          { type: 'line', x1: 0, y1:0 , x2:830, y2: 0, lineWidth: 1 }
        ]
      },
      { 
        text:[
          {
            text:'Special Note:',
            bold:true
          },
          {
            text:"It is essential to a that self attested Photo copies of ",
            fontSize:12
          }
        ],
        margin:[5,0,0,90]
      },
      {
        text:"Please send the forms seoarately having incorrect details.",
        bold:true,
        margin:[5,0,0,0]

      },
      //certificate part
      {
        text:"\nCERTIFICATE",
        alignment:'center',
        fontSize:15,
        decoration: "underline",
        bold:true
      },
      {
        text:[
          {
            text:'\nI  Certify  that  ',
          },
          {
            text: `${name}`,
            decoration: "underline",
            bold:true
          },
          {
            text:'  is  eligible  for  admission  in  Course  ',
          },
          {
            text: `${course}`,
            decoration: "underline",
            bold:true
          },
          {
            text:'  as  per  Gujarat  University  Ordinance.  It  is  furthur  certified  that  said  student  has  satisfactarily  complated  the  course  of  studies  presecribed  for  the  Course  '
          },
          {
            text: `${course}`,
            decoration: "underline",
            bold:true
          },
          {
            text:'  in  my  college and  his/her  attendance  is  satisfactory as per Ordinance.'
          },
          {
            text:'\nI  also  certify  that  the  detail  filled  in  this  form  have  been  verified  and  found  correct  as  per  college  record.'
          },
        ],     
        margin:[5,0,5,0],
        lineHeight:1.3    
      },
      {
        text:[
          {
            text:"Date:____________________________\t\t\t Place:_____________________\t\t\t\t\t" ,
            bold:true
          },
          {
            text:"\t\t\t\t\t\t\t\t\t\t\t\t\ Sign & Seal of The Principal",
            bold:true
          }
        ],
        margin:[5,20,10,0]
      },

    ]
    return table;
}





  
const Hallticket = {
  pageSize: {
    width: 870,
    height: 940,
  },
  pageMargins: [19, 10, 20, 10],
  background: function (pageSize:pageSize) {
    return [
      {
        canvas: [
          { type: 'line', x1: 20, y1:10 , x2: pageSize.width - 20, y2: 10, lineWidth: 2 }, //Up line
          { type: 'line', x1: 19, y1: 9, x2: 19, y2: pageSize.height - 9, lineWidth: 2 }, //Left line
          { type: 'line', x1: 20, y1: pageSize.height - 10, x2: pageSize.width - 20, y2: pageSize.height - 10, lineWidth: 2 }, //Bottom line
          { type: 'line', x1: pageSize.width - 20, y1: 9, x2: pageSize.width - 20, y2: pageSize.height - 9, lineWidth: 2 }, //Rigth line
        ]
      }
    ]
  },
  content: [] as HallticketItem[],
};

for (let i = 0; i <1; i++) {
  const name = data[i]['student_name']
  const seatNo = data[i]['exam_seat_number']
  const studentId = data[i]['student_id']
  const gender = data[i]['gender']
  const course = data[i]['course']
  const dateOfBirth = data[i]['date_of_birth']
  const medium = data[i]['language']

  Hallticket.content.push(JSON.parse(JSON.stringify(hallTicketPdf({name, seatNo, studentId, gender, course, dateOfBirth, medium}))))
}

module.exports = Hallticket;