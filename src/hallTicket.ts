import { IPhotoNomial, ISubjectTypePdf } from "./types";

const address = 'HSNC University, Mumbai D.M. Harish Building, 47, Dr. R. G. Thadani Marg, Worli, Mumbai – 400 018.'
const universityAddress = process.env.UNIVERSITY_ADDRESS || address;
if (!universityAddress) throw Error('Environment: UNIVERSITY_ADDRESS is not defined');

function photoNomial(data: any){

interface PageSize{
  width: number,
  height: number
}


const photoNomialMain:any = {
  pageSize: {
    width: 870,
    height: 940,
  },
  pageMargins: [19, 10, 20, 10],
  background: function (pageSize:PageSize) {
    return [
      {
        canvas: [
          { type: 'line', x1: 20, y1:10 , x2: 870 - 20, y2: 10, lineWidth: 2 }, //Up line
          { type: 'line', x1: 20, y1: 9, x2: 20, y2: 940 - 9, lineWidth: 2 }, //Left line
          { type: 'line', x1: 20, y1: 940 - 10, x2: 870 - 20, y2: 940 - 10, lineWidth: 2 }, //Bottom line
          { type: 'line', x1: 870 - 20, y1: 9, x2: 870 - 20, y2: 940 - 9, lineWidth: 2 }, //Rigth line
        ]
      }
    ]
  },
  footer(currentPage: number, pageCount: number) {
    return [
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
        margin:[50,-30,0,0]
      },
    ];
  },
  content: [],
};


for (let i = 0; i <1; i++) {
  function photoNomialpdf(){
    const table2 = {
      headerRows: 1,
      widths: [30,80,300,"*"],
      body: [
        ...data[i].appearingSubject.map((value:any,index:number) => [
          {
            text: `${value.subjectType ? "(" + ISubjectTypePdf[value.subjectType as keyof typeof ISubjectTypePdf] + ")" : ""}`,
            margin: [0, 7, 0, 0],
            lineHeight: 2,
            border: [false, false, false, false],
          },
          {
            text: value.subjectCode,
            alignment: "right",
            margin: [0, 7, 15, 0],
            lineHeight: 2,
            border: [false, false, false, false],
          },
          {
            text: value.subjectName,
          //   alignment: "center",
            margin: [0, 7, 15, 0],
            border: [false, false, false, false],
          },
        ]),
      ],
    };

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
                    text: "HSNC UNIVERSITY",
                    fontSize: 20,
                    alignment: "center",
                    margin: [0, 50, 0, 0],
                  },
                  "\n",
                  { 
                    lineHeight: 1.2,
                    text: `Semester-${data[i].semester}, ${data[i].year} Examination`,
                    alignment: "center",
                    margin: [0, 50, 0, 0],
                    bold:true,
                  },
                  "\n",
                  { 
                    lineHeight: 2,
                    text: address,
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
                    text: `${i+1}`,
                    alignment: "center",
                    bold:true,
                  },
                  {
                    text: `${data[i].enRollmentNo}`,
                    valign: "bottom",
                    lineHeight: 2.5,
                    alignment: "center",
                    bold:true,
                  },
                  {
                    text: `${data[i].studentName}`,
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
                  text: `${data[i].birthDate}`,
                }
              ],
              absolutePosition: { x: 160, y: 160 },
              margin: [10,0,0,0],
            },
            {
            columns:
              [
                [
                  {
                    image: data[i].studentPhoto?data[i].studentPhoto:`${process.cwd()}/img/abc.png`,
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
                        text: `${data[i].gender}`,
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
                          text: `${data[i].medium}`,
                          bold:true,
                        }
                      ],
                      margin: [10,0,0,7]
                    },
                    {
                      image: data[i].sign?data[i].sign:`${process.cwd()}/img/abc.png`,
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
                          text:`${data[i].category}`,
                          bold:true,
                        }
                      ],
                      margin:[0,20,0,10]
                    }
                  ]
                }
              ]
            }
          ]
        ]},
          {
           table:table2
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
            text: `${data[i].studentName}`,
            decoration: "underline",
            bold:true
          },
          {
            text:'  is  eligible  for  admission  in  Course  ',
          },
          {
            text: `${data[i].course}`,
            decoration: "underline",
            bold:true
          },
          {
            text:'  as  per  HSNC  University  Ordinance.  It  is  furthur  certified  that  said  student  has  satisfactarily  complated  the  course  of  studies  presecribed  for  the  Course  '
          },
          {
            text: `${data[i].course}`,
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
        // text:[
        //   {
        //     text:"Date:____________________________\t\t\t Place:_____________________\t\t\t\t\t" ,
        //     bold:true
        //   },
        //   {
        //     text:"\t\t\t\t\t\t\t\t\t\t\t\t\ Sign & Seal of The Principal",
        //     bold:true
        //   }
        // ],
        // margin:[5,20,10,0]
      },

    ]
    return table;
}
  photoNomialMain.content.push(JSON.parse(JSON.stringify(photoNomialpdf())))
}
  return photoNomialMain;

}

export default photoNomial;