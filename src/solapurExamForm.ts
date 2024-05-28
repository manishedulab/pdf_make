import { SolapurPdf } from "./constant/constant";
import { IExamFormPdf } from "./types";

function solExamForm(data: IExamFormPdf[]) {
  const contentDefinition: any = {
    pageSize: "A4",
    pageMargins: [30, 30, 30, 30],
    content: [],
  };

  for (let i = 0; i < data.length; i++) {
    const table1 = {
      widths: [90, 320, 90],
      headerRows: 1,
      body: [
        [
          {
            image: SolapurPdf.universityLogo,
            width: 70,
            alignment: "center",
          },
          [
            {
              stack: [
                {
                  text: SolapurPdf.universityName,
                  // fontSize: 12,
                  margin: [0, 5, 0, 0],
                  bold: true,
                },
              ],
              alignment: "center",
            },
            // {
            //   table: {
            //     widths: ["100%"],
            //     body: [[{ text: "", border: [false, true, false, false] }]],
            //   },
            //   margin: [-5, 5, -5, 0],
            //   // layout: "noBorders"
            // },
            "\n",
            {
              text: `${data[i].collegeName}`,
              // fontSize: 9,
              alignment: "center",
              // bold: true,
            },
            {
              text: `Application Form For Examination Of ${data[i].examMonthAndYear} Event`,
              // fontSize: 9,
              alignment: "center",
              // bold: true,
            },
            "\n",
            // {
            //   table: {
            //     widths: ["100%"],
            //     body: [[{ text: "", border: [false, true, false, false] }]],
            //   },
            //   margin: [-5, 5, -5, 0],
            //   // layout: "noBorders"
            // },
            // {
            //   table: {
            //     widths: ["100%"],
            //     body: [[{ text: "", border: [false, true, false, false] }]],
            //   },
            //   margin: [-5, 5, -5, 0],
            //   // layout: "noBorders"
            // },
            {
              text: `${data[i].courseAbbreviation} (with Credits) - ${data[i].examType} - ${data[i].examPattern} - ${data[i].semesterName}`,
              fontSize: 11,
              alignment: "center",
              // bold: true,
            },
          ],
          {
            image: data[i].studentPhoto || SolapurPdf.defaultPhoto,
            width: 70,
            alignment: "center",
          },
        ],
      ],
    };

    const table2 = {
      widths: [90, 155, 156, 90],
      headerRows: 1,
      body: [
        [
          {
            stack: [
              {
                text: "SID",
                bold: true,
              },
              {
                text: ` ${data[i].prnNo || "-"}`,
                bold: true,
              },
            ],
            margin: [0, 0, 0, 0],
            alignment: "center",
          },
          {
            stack: [
              {
                text: "Eligibility Status",
                bold: true,
              },
              {
                text: ` ${data[i].eligibility || "-"}`,
                // bold: true,
              },
            ],
            // border: [true, true, true, true],
            margin: [0, 0, 0, 0],
            alignment: "center",
          },
          {
            stack: [
              {
                text: "Examination Form No.",
                bold: true,
              },
              {
                text: ` ${data[i].examFormNumber || "-"}`,
                // bold: true,
              },
            ],
            margin: [0, 0, 0, 0],
            alignment: "center",
          },
          {
            image: data[i].studentSignature || SolapurPdf.defaultPhoto,
            width: 60,
            margin: [0, 2, 0, 0],
            height: 22,
            alignment: "center",
          },
        ],
      ],
    };

    const table3 = {
      widths: [190, 150, 160],
      headerRows: 1,
      body: [
        [
          {
            text: `Instruction Medium: ${data[i].medium}`,
            margin: [0, 0, 0, 0],
          },
          {
            text: `Nationality: ${data[i].nationality}`,
          },
          {
            text: `ABC ID: ${data[i].ABCID}`,
          },
        ],
      ],
    };

    const table4 = {
      widths: [280, 120, 100],
      headerRows: 1,
      body: [
        [
          {
            text: `Student's Name: ${data[i].studentName}`,
            margin: [0, 0, 0, 0],
          },
          {
            text: `Mother's Name: ${data[i].motherName}`,
          },
          {
            text: `Gender: ${data[i].gender}`,
          },
        ],
      ],
    };

    const table5 = {
      widths: [518],
      headerRows: 1,
      body: [
        [
          {
            text: `Address: ${data[i].address}`,
            margin: [0, 0, 0, 0],
          },
        ],
        [
          {
            text: `City: ${data[i].city}`,
            margin: [0, 0, 0, 0],
          },
        ],
      ],
    };

    const table6 = {
      widths: [160, 160, 180],
      headerRows: 1,
      body: [
        [
          {
            text: `Tel. No: ${data[i].telNo}`,
            margin: [0, 0, 0, 0],
          },
          {
            text: `Mob. No: ${data[i].mobileNumber}`,
          },
          {
            text: `Email: ${data[i].email}`,
          },
        ],
        [
          {
            text: `DOB: ${data[i].dob}`,
            margin: [0, 0, 0, 0],
          },
          {
            text: `Category: ${data[i].category}`,
          },
          {
            text: `Physical Handicap: ${data[i].physicallyChallenged}`,
          },
        ],
      ],
    };

    const table7 = {
      widths: [518],
      headerRows: 1,
      body: [
        [
          {
            text: `important. You will be allowed to appear for only those Paper which you have marked. Please mark carefully. NA: Not Applicable, NS: Not Scheduled for this event, M. Excluded from appearing in this event.`,
            margin: [0, 0, 0, 0],
          },
        ],
      ],
    };

    const oddSemester = data[i].oddSemester;

    const table8 = {
      widths: [160, 160, 180],
      headerRows: 1,
      body: [
        [
          {
            text: `${oddSemester.semesterName}(${oddSemester.examType} - ${oddSemester.examPattern})`,
            bold: true,
            margin: [0, 0, 0, 0],
          },
          {
            text: `College Roll Number: ${oddSemester.collegeRollNo}`,
          },
          {
            text: `Exam Appearance Type: ${oddSemester.examAppearanceType}`,
          },
        ],
      ],
    };

    const table9 = {
      widths: [518],
      headerRows: 1,
      body: [
        [
          {
            text: `Paper Details: Please select Paper details which you want to appear (UA - University Assessment, CA College Assessment, ISE - In Semester Exam, ESE - End Semester Exam, ICA - Intemal Continuous Assessment, POE-Practical Online Examination)`,
            margin: [0, 0, 0, 0],
          },
        ],
      ],
    };

    const table10 = {
      widths: [40, 86, 280, 85],
      headerRows: 1,
      body: [
        ...oddSemester.subjects.map((value: any, index: number) => [
          {
            text: index + 1,
            alignment: "center",
            border: [true, false, true, true],
          },
          {
            text: `${value.paperCode || "-"}`,
            alignment: "center",
            border: [true, false, true, true],
          },
          {
            text: `${value.paperName || "-"}`,
            alignment: "left",
            border: [true, false, true, true],
          },
          {
            text: `${value.AMAT || "-"}`,
            alignment: "center",
            border: [true, false, true, true],
          },
        ]),
      ],
    };

    const table11 = {
      widths: [255, 254],
      headerRows: 1,
      body: [
        [
          {
            text: `Center Preference: ${oddSemester.centerPreference || "-"}`,
            margin: [0, 0, 0, 0],
          },
          {
            text: `Venue Preference: ${oddSemester.venuePreference || "-"}`,
            margin: [0, 0, 0, 0],
          },
        ],
      ],
    };

    const evenSemester = data[i].evenSemester;
    const table12 = {
      widths: [160, 160, 180],
      headerRows: 1,
      body: [
        [
          {
            text: `${evenSemester.semesterName}(${evenSemester.examType} - ${evenSemester.examPattern})`,
            bold: true,
            margin: [0, 0, 0, 0],
          },
          {
            text: `College Roll Number: ${evenSemester.collegeRollNo}`,
          },
          {
            text: `Exam Appearance Type: ${evenSemester.examAppearanceType}`,
          },
        ],
      ],
    };

    const table13 = {
      widths: [518],
      headerRows: 1,
      body: [
        [
          {
            text: `Paper Details: Please select Paper details which you want to appear (UA - University Assessment, CA College Assessment, ISE - In Semester Exam, ESE - End Semester Exam, ICA - Intemal Continuous Assessment, POE-Practical Online Examination)`,
            margin: [0, 0, 0, 0],
          },
        ],
      ],
    };

    const table14 = {
      widths: [40, 86, 280, 85],
      headerRows: 1,
      body: [
        ...evenSemester.subjects.map((value: any, index: number) => [
          {
            text: oddSemester.subjects.length + index + 1,
            alignment: "center",
            border: [true, false, true, true],
          },
          {
            text: `${value.paperCode || "-"}`,
            alignment: "center",
            border: [true, false, true, true],
          },
          {
            text: `${value.paperName || "-"}`,
            alignment: "left",
            border: [true, false, true, true],
          },
          {
            text: `${value.AMAT || "-"}`,
            alignment: "center",
            border: [true, false, true, true],
          },
        ]),
      ],
    };

    const table15 = {
      widths: [255, 254],
      headerRows: 1,
      body: [
        [
          {
            text: `Center Preference: ${evenSemester.centerPreference || "-"}`,
            margin: [0, 0, 0, 0],
          },
          {
            text: `Venue Preference: ${evenSemester.venuePreference || "-"}`,
            margin: [0, 0, 0, 0],
          },
        ],
      ],
    };

    const table16 = {
      widths: [255, 254],
      headerRows: 1,
      body: [
        [
          {
            text: `Center Preference: ${evenSemester.centerPreference || "-"}`,
            margin: [0, 0, 0, 0],
          },
          {
            text: `Venue Preference: ${evenSemester.venuePreference || "-"}`,
            margin: [0, 0, 0, 0],
          },
        ],
      ],
    };
    let columnWidth = 0;
    let firstColumnWidth  = 81; 
    const semesterCount = data[i].numberOfSemesters

    if(semesterCount == 8) {
      columnWidth = 365 / semesterCount;
    } else if (semesterCount == 10) {
      columnWidth = 347 / semesterCount;
    } else if (semesterCount == 6) {
      columnWidth = 383 / semesterCount;
    } else if (semesterCount == 4) {
      columnWidth = 401 / semesterCount;
    }  else if (semesterCount == 2) {
      columnWidth = 419 / semesterCount;
    } else if (semesterCount == 1) {
      columnWidth = 428 / semesterCount;
    } else if (semesterCount == 12) {
      columnWidth = 340 / semesterCount;
      firstColumnWidth = 70
    }

    const table17 = {
      widths: [firstColumnWidth, ...Array.from({ length: semesterCount }, () => columnWidth)],
      headerRows: 1,
      body: [
        [
          {
            text: "Fee Head",
            bold: true,
            alignment: "",
          },
        ],
      ],
    };
    
    // Push semester numbers into the first row of the body array
    for(let j = 1; j <= semesterCount; j++) {
      table17.body[0].push({text: `${j}`, bold: true,  alignment: "center",})
    }
    
    // Now add the rest of the fee heads
    const feeHeads = ["Exam Fee", "Exam Form Fee", "Exam Late Fee", "Provisional Certificate Fee", "Sub Total"];
    feeHeads.forEach((feeHead, index) => {
      const row = [{ text: feeHead, bold: false,  alignment: "", }];
      // Add empty cells for each semester
      for(let j = 1; j <= semesterCount; j++) {
        if (j == data[i].currentSemester && index == 0){
          row.push({ text: `${data[i].examFee}`, bold: true,  alignment: "center",});
        } else if (j == data[i].currentSemester && index == 1){
          row.push({ text: `${data[i].examFormFee}`, bold: true,  alignment: "center",});
        } else if (j == data[i].currentSemester && index == 2){
          row.push({ text: `${data[i].examLateFee}`, bold: true,  alignment: "center",});
        } else if (j == data[i].currentSemester && index == 3){
          row.push({ text: `${data[i].provisionalCertificateFee}`, bold: true,  alignment: "center",});
        } else if (j == data[i].currentSemester && index == 4){
          row.push({ text: `${data[i].subTotalFee}`, bold: true,  alignment: "center",});
        } else {
          row.push({ text: "", bold: true,  alignment: "center",});
        }
        
      }
      table17.body.push(row);
    });

    const table18 = {
      widths: [518],
      headerRows: 1,
      body: [
        [
          {
            text: `Payment Details`,
            alignment: "center",
            border: [false, true, false, true],
            margin: [0, 2, 0, 2],
          },
        ],
      ],
    };


    function pdf() {
      const table = [
        {
          table: table1,
        },
        {
          table: table2,
          fontSize: 11,
        },
        {
          table: table3,
          fontSize: 11,
        },
        {
          table: table4,
          fontSize: 11,
        },
        {
          table: table5,
          fontSize: 11,
        },
        {
          table: table6,
          fontSize: 11,
        },
        {
          table: table7,
          fontSize: 9,
        },
        {
          table: table8,
          fontSize: 11,
        },
        {
          table: table9,
          fontSize: 9,
        },
        {
          table: {
            widths: [40, 86, 280, 85],
            headerRows: 1,
            body: [
              [
                {
                  text: "SN",
                  alignment: "center",
                  bold: true,
                  border: [true, true, true, true],
                },
                {
                  text: `Paper Code`,
                  alignment: "center",
                  bold: true,
                  border: [true, true, true, true],
                },
                {
                  text: `Paper Name`,
                  alignment: "center",
                  bold: true,
                  border: [true, true, true, true],
                },
                {
                  text: "AM - AT",
                  alignment: "center",
                  bold: true,
                  border: [true, true, true, true],
                },
              ],
            ],
          },
          fontSize: 10,
        },
        {
          table: table10,
          fontSize: 10,
        },
        {
          table: table11,
          fontSize: 11,
        },
        {
          stack: data[i].isEvenSemester
            ? [
                {
                  table: table12,
                  fontSize: 11,
                },
                {
                  table: table13,
                  fontSize: 9,
                },
                {
                  table: {
                    widths: [40, 86, 280, 85],
                    headerRows: 1,
                    body: [
                      [
                        {
                          text: "SN",
                          alignment: "center",
                          bold: true,
                          border: [true, true, true, true],
                        },
                        {
                          text: `Paper Code`,
                          alignment: "center",
                          bold: true,
                          border: [true, true, true, true],
                        },
                        {
                          text: `Paper Name`,
                          alignment: "center",
                          bold: true,
                          border: [true, true, true, true],
                        },
                        {
                          text: "AM - AT",
                          alignment: "center",
                          bold: true,
                          border: [true, true, true, true],
                        },
                      ],
                    ],
                  },
                  fontSize: 10,
                },
                {
                  table: table14,
                  fontSize: 10,
                },
                {
                  table: table15,
                  fontSize: 11,
                },
              ]
            : [{ text: "" }],
        },
        // {
        //   table: table16,
        //   fontSize: 11,
        // },
        {
          table: table17,
          fontSize: 10,
        },
        {
          table: table18,
          fontSize: 10,
          margin: [0, 5, 0, 0],
        },
      ];
      return table;
    }
    contentDefinition.content.push(JSON.parse(JSON.stringify(pdf())));

    // Insert a page break after each hall ticket except the last one
    if (i < data.length - 1) {
      contentDefinition.content.push({ text: "", pageBreak: "after" });
    }
  }

  return contentDefinition;
}
export default solExamForm;
