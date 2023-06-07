
function HallTicket(data2:any){

// console.log("first",data2)
  // const data2 = [
  //     { "srno": 1, "date": "2023-05-15", "time": "08:30 AM TO 10:30 AM", "semester": "VI", "subjectName": "Introduction to Computer Science" },
  //     { "srno": 2, "date": "2023-05-17", "time": "08:30 AM TO 10:30 AM", "semester": "VI", "subjectName": "Data Structures and Algorithms" },
  //     { "srno": 3, "date": "2023-05-20", "time": "08:30 AM TO 10:30 AM", "semester": "VI", "subjectName": "Database Management Systems" },
  //     { "srno": 4, "date": "2023-05-22", "time": "08:30 AM TO 10:30 AM", "semester": "VI", "subjectName": "Operating Systems" },
  //     { "srno": 5, "date": "2023-05-25", "time": "08:30 AM TO 10:30 AM", "semester": "VI", "subjectName": "Computer Networks" },
  //     { "srno": 6, "date": "2023-05-28", "time": "08:30 AM TO 10:30 AM", "semester": "VI", "subjectName": "Software Engineering" }
  //   ]
  
  let collegeLogo="";
  
  
  // console.log('first',value.collegeName)
  
    if(data2[0].collegeName){
      switch (data2[0].collegeName) {
        case "Hassaram Rijhumal College":
          collegeLogo = `${process.cwd()}/public/collegeLogo/HR.png`;
          break;
        case "Kishinchand Chellaram College":
          collegeLogo = `${process.cwd()}/img/KCC_Mumbai_logo.svg.png`;
          break;
        case "Bombay Teachers' Training College":
          collegeLogo = `${process.cwd()}/public/collegeLogo/BTTC golden.png`;
          break;
        case "School of Applied Sciences":
          collegeLogo = `${process.cwd()}/public/collegeLogo/SAS_Logo_final.png`;
          break;
        case "Niranjan Hiranandani School of Management and Real Estate":
          collegeLogo = `${process.cwd()}/public/collegeLogo/NHSMRE_Logo_2.png`;
          break;
        case "D.M. Harish School of Law":
          collegeLogo = `${process.cwd()}/public/collegeLogo/DMHSL.png`;
          break;
        case  "School of Humanities and Social Sciences":
          collegeLogo = `${process.cwd()}/public/collegeLogo/SHS LOGO.png`;
          break;
        case  "School of Performing Arts":
          collegeLogo = `${process.cwd()}/public/collegeLogo/SOPA_Logo.png`;
          break;
        case  "Chellaram School of Yoga and Wellness":
          collegeLogo = `${process.cwd()}/public/collegeLogo/SOY_final.png`;
          break;
        default:
          collegeLogo = "";
      }
      
    }
  
    
    
  
  function hallTicketPdf(){
    let table;
    let table2: any;
    data2.map((value:any)=>{
    // console.log('value:', value);

      table2 = {
        headerRows: 1,
        widths: [30,80,150,60,260,"*"],
        body: [
          ...value.timeTable.map((value1:any,index:number) => [
            {
              text: index+1,
              margin: [0, 7, 0, 0],
              lineHeight: 2,
              border: [false, false, false, false],
            },
            {
              text: value1.examDate,
              margin: [0, 7, 0, 0],
              lineHeight: 2,
              border: [false, false, false, false],
            },
            {
              text: value1.examTime,
              alignment: "center",
              margin: [0, 7, 15, 0],
              lineHeight: 2,
              border: [false, false, false, false],
            },
            {
              text: value.semName,
              alignment: "center",
              margin: [0, 7, 15, 0],
              lineHeight: 2,
              border: [false, false, false, false],
            },
            {
              text: value1.subjectName,
            //   alignment: "center",
              margin: [0, 7, 15, 0],
              border: [false, false, false, false],
            },
          ]),
        ],
      };

       table=[
        //main heading
        { 
          table: {
            widths: [150,520,150],
            headerRows: 1,
            body: [
              [
                  {
                      image:  `${process.cwd()}/img/Hsnc-university-logo.png`,
                      margin: [0, 0, 20, 0],
                      alignment: "center",
                      width: 70,
                  },
                {
                  text: [
                    { 
                      bold: true,
                      lineHeight: 1.2,
                      text: "HSNC University Mumbai",
                      fontSize: 18,
                      alignment: "center",
                      margin: [0, 50, 0, 0],
                    },
                    "\n",
                    { 
                      lineHeight: 1.2,
                      text: data2.length > 0 ? data2[0].collegeName : null,
                      fontSize: 18,
                      alignment: "center",
                      margin: [0, 50, 0, 0],
                      bold:true,
                    },
                    "\n",
                    { 
                      lineHeight: 1.5,
                      text: " ",
                      alignment: "center",
                      fontSize: 12,
                    }
                  ],
                },
                {
                  image: `${collegeLogo}`,
                  margin: [20, 0, 20, 0],
                  alignment: "center",
                  width: 70,
              },
              ],
            ],
          },
          layout: "noBorders"
        },
        {
          canvas: [
            { type: 'line', x1: 0, y1:0 , x2:800, y2: 0, lineWidth: 1 }
          ]
        },
        { 
          margin:[0,10,0,0],
          table: {
            widths: [150,520,150],
            headerRows: 1,
            body: [
              [
                {
                  text:" ",
                },
                {
                  margin:[0,10,0,0],
                  text: [
                    { 
                      bold: true,
                      lineHeight: 1.8,
                      text: "End Semester Examination -(EVEN-2022-23)",
                      alignment: "center",
                      decoration: "underline"
                    },
                    "\n",
                    { 
                      lineHeight: 1.2,
                      text: "HALL TICKET",
                      alignment: "center",
                      decoration: "underline",
                      bold:true,
                    },
                    "\n",
                  ],
                },
                {
                  image: "img/cds.jpg",
                  margin: [20, 0, 20, 0],
                  alignment: "center",
                  width: 80,
                  height:80,
                },
              ],
            ],
          },
          layout: "noBorders"
        },
        {
          columns:[
              {
                  table: {
                      widths: [100, 100],
                      body: [
                          ['Seat No.', `: ${value.seatNumber}`],
                          ['Registeration No.', {text:':  00000222', bold:true}],
                          ['Batch', ':  2020-2021'],
                          ['semester', `:  ${value.semName}`],
                      ]
                  },
                  layout: 'noBorders',
                  fontSize: 12,
                  margin:[10,20,0,0],
                  lineHeight: 1.4,
                  
              },
              {
                  table: {
                      widths: [100, 200],
                      body: [
                          [' ', ' '],
                          ['Name', {text:`:  ${value.fullName}`, bold:true}],
                          ['Programme', `:  ${value.courseName}`],
                          ['Enrollment No.', `:  ${value.enrollmentNo}`],
                      ]
                  },
                  layout: 'noBorders',
                  fontSize: 12,
                  margin:[10,20,0,0],
                  lineHeight: 1.4,
                  
              },
          ]
        },
  
        // heading
        {
          table: {
            widths: [30,80,150,60,250,175],
            headerRows: 1,
            body: [
              [
                { 
                  text: "SNo.",
                  alignment: "center",
                  bold:true,
                  border: [false, true, false, true]
                },
                {
                  text: "Date",
                  valign: "bottom",
                  alignment: "center",
                  bold:true,
                  border: [false, true, false, true]
                },
                {
                  text:'Time',
                  alignment: "center",
                  verticalAlignment: "bottom",
                  bold:true,
                  border: [false, true, false, true]
                },
                {
                  text:'Semester',
                  alignment: "center",
                  bold:true,
                  border: [false, true, false, true]
                },
                {
                  text:'Subject Name',
                  alignment: "center",
                  bold:true,
                  border: [false, true, false, true],
                  margin:[0,0,90,0]
                },
                {
                  text:`Supervisor's Signature`,
                  // alignment: "center",
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
          table:table2,
          margin:[10,0,0,0]
        },
        //middel line 
        {
          canvas: [
            { type: 'line', x1: 0, y1:0 , x2:800, y2: 0, lineWidth: 1 }
          ]
        },
        //second middle line 
        {
          canvas: [
            { type: 'line', x1: 0, y1:0 , x2:800, y2: 0, lineWidth: 1 }
          ]
        },
      ]
    })
      return table;
  }
  
  
  const hsncHallTicket:any = {
    pageSize: "A3",
    pageMargins: [19, 10, 20, 10],
    footer: function(currentPage: number, pageCount: number) {
      return[
          
          {
              columns:[
                  { 
                      // alignment: 'right',
                      text: 'Signature of the Student'
                  },
                  {
                      text:'Principal',
                      alignment: 'center',
                      margin:[0,0,70,0]
                  },
                  {
                      text:'Board Of Examinations',
                      alignment: 'center',
                  }
              ],
              margin:[40,-50,-50,25]  
          },
          {canvas: [
              { type: 'line', x1: 0, y1:0 , x2:805, y2: 0, lineWidth: 1 },
            ],
            margin:[20,-20,20,20]  
          },"\n",
      ]
      
      },
    content: [],
  };
  
  
  for (let i = 0; i < 1; i++) {
    const hallTicket = JSON.parse(JSON.stringify(hallTicketPdf()));
    hsncHallTicket.content.push(hallTicket);
    // Insert a page break after each hall ticket except the last one
    if (i < 0) {
      hsncHallTicket.content.push({ text: '', pageBreak: 'after' });
    }
  }
  
  return hsncHallTicket;
  }
  export default HallTicket;