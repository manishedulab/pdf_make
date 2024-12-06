
import { SolapurPdf } from "./constant/constant";
import { IPaperWiseAttendanceSheet, IStudentInfo } from "./types";
import { chunkArray } from "./utiles";

export function paperWiseAttendanceSheet(data: IPaperWiseAttendanceSheet[]) {
  // Initialize PDF content definition
  const contentDefinition: any = {
    pageSize: 'A4',
    pageMargins: [20, 20, 20, 20],
    content: [],
  };

  // Get current date and time
  const date = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
  const dateWithTime = new Date().toLocaleString();

  // Iterate through each data item to create PDF content
  for (let i = 0; i < data.length; i++) {

    const seatAndDeskChunks = chunkArray(data[i].seatAndDeskNumber, 30); 
    seatAndDeskChunks.forEach((chunk, chunkIndex) =>{
    function pdf() {
      // Define table structures for PDF layout
      const table1 = {
        // University logo and name
        widths: [90, 420, 90],
        headerRows: 1,
        body: [
          [
            {
              image: SolapurPdf.universityLogo,
              width: 50,
              alignment: "center",
            },
            [
              {
                stack: [
                  {
                    text: SolapurPdf.universityName,
                    margin: [0, 5, 0, 0],
                    bold: true,
                  },
                  {
                    text: SolapurPdf.universityAddress,
                    bold: true,
                  },
                ],
                alignment: "center",
              },
            ],
          ],
        ],
      };

      const table2 = {
        // Exam details (request type, college name, center name, course, exam name)
        widths: [545],
        headerRows: 1,
        body: [
          [
            {
              text: `${data[i].requestType || '-'}`,
              alignment: "center",
            },
          ],
          [
            {
              text: `College Name: ${data[i].collegeName || '-'}`,
              alignment: "center",
            },
          ],
          [
            {
              text: `Center Name: ${data[i].centerName || '-'}`,
              alignment: "center",
            },
          ],
          [
            {
              text: `${data[i].course || '-'}`,
              alignment: "center",
            },
          ],
          [
            {
              text: `${data[i].examName || '-'}`,
              alignment: "center",
            },
          ],
        ],
      };

      const table3 = {
        // Paper code, exam date, and time
        widths: [220, 316],
        headerRows: 1,
        body: [
          [
            {
              text: `Paper Code: ${data[i].paperCode || '-'}` ,
              alignment: "left",
              border: [1, 0, 0, 0],
            },
            {
              text: `Exam Date: ${data[i].examDate || '-'} Time: ${data[i].examTime || '-'}` ,
              alignment: "right",
              border: [0, 0, 1, 0],
            },
          ],
        ],
      };

      let table6;
      if(data[i].blockNumber) {
        table6 = {
          // Paper code, exam date, and time
          widths: [545],
          headerRows: 1,
          body: [
            [
              {
                text: `Block Number: ${data[i].blockNumber || '-'}` ,
                alignment: "left",
                border: [1, 1, 1, 0],
              },
            ],
          ],
        };
      }

      const table4 = {
        // Seat and desk numbers in a grid layout
        widths: [20, 50, 40, 132, 60, 60, 60, 60],
        body: [
          [
            {
              text: 'Sr.No',
              alignment:'center',
            },
            {
              text: 'Seat No',
              alignment:'center',
            },
            {
              text: 'Barcode No',
              alignment:'center',
            },
            {
              text: 'Student Name',
              alignment:'center',
            },
            {
              text: "Medium of Appearance",
              alignment:'center',
            },
            {
              text: 'Specimen Signature',
              alignment:'center',
            },
            {
                text: "Photo",
                alignment:'center',
            },
            {
              text: "Student's Signature at Exam Center",
              alignment:'center',
            },
          ],
            ...chunk.map((item: IStudentInfo, index:number) => [
              {
              text: index + 1 + chunkIndex * 30, // Ensure empty strings have a placeholder
              alignment: "center",
              border: [1, 1, 1, 0],
              margin:[0, 20, 0, 0],
              },
              {
                text: item.seatNo || '-',
                border: [1, 1, 1, 0],
                margin:[0, 20, 0, 0],
              },
              {
                text: item.barcodeNo || '-',
                border: [1, 1, 1, 0],
                margin:[0, 20, 0, 0],
              },
              {
                text: item.studentName || '-',
                border: [1, 1, 1, 0],
                margin:[0, 20, 0, 0],
              },
              {
                text:'',
                border: [1, 1, 1, 0],
                margin:[0, 20, 0, 0],
              },
              {
                image: item.studentSignature ? item.studentSignature : SolapurPdf.defaultPhoto,
                border: [1, 1, 1, 0],
                margin:[0, 10, 0, 0],
                alignment:'center',
                width: 50,
                height: 30,
              },
              {
                image: item.studentPhoto ? item.studentPhoto : SolapurPdf.defaultPhoto,
                border: [1, 1, 1, 0],
                alignment:'center',
                width: 50,
                height: 50,
              },
              {
                text:'',
                border: [1, 1, 1, 0]
              },
          ])
        ],
      };
      
      const table5 = {
        // Total students and report generation details
        widths: [545],
        headerRows: 1,
        body: [
          [
            {
              text: `Total No of Students Found In This Paper: ${data[i].totalStudents || '-'}`,
              alignment: "center",
            },
          ],
          [
            {
              text: `Report Generated By: ${data[i].userName || '-' } on ${dateWithTime}`,
              alignment: "center",
            },
          ],
        ],
      };

      // Combine all tables into a single structure
      const table = [
        {
          table: table1,
          layout: "noBorders",
          fontSize: 9, 
        },
        {
            text: `Printed on:${date}`,
            alignment: "right",
            fontSize: 8,
        },
        {
            table: table2,
            fontSize: 9,
            margin: [0, 0, 0, 0],
            bold: true,
        },
        {
            table: table3,
            fontSize: 9,
            margin: [0, 0, 0, 0],
            bold: true,
        },
        data[i].blockNumber ? {
          table: table6,
          fontSize: 9,
          margin: [0, 0, 0, 0],
          bold: true,
        } : '',
        {
          table:table4,
          fontSize: 7,
          border:[]
        },
        {
            table: table5,
            fontSize: 8,
            alignment: "center",
            margin: [0, 0, 0, 0],
        },
      ];
      return table;
    }

    // Add the PDF content for the current data item
    contentDefinition.content.push(pdf());

   // Add a page break if this is not the last chunk
   if (chunkIndex < seatAndDeskChunks.length - 1 || i < data.length - 1) {
    contentDefinition.content.push({ text: "", pageBreak: "after" });
  }
  });
  }

  return contentDefinition;
}