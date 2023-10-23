import { IAddmission, IAddmissionSubjects } from "./types";

function generateFooter(data: IAddmission[]) {
  // Define the table6 content
  let table6;

  for (let i = 0; i < data.length; i++) {
    table6 = {
      widths: ["*", "*"],
      headerRows: 1,
      body: [
        [
          "",
          {
            image: data[i].studentSignature,
            width: 50,
            alignment: "center",
          },
        ],
        [
          { text: `Principal Signature`, bold: true, alignment: "center" },
          { text: "Student Signature", bold: true, alignment: "center" },
        ],
      ],
    };
  }
  return table6;
}

function admissionForm(data: IAddmission[]) {
  const contentDefinition: any = {
    pageSize: {
      width: 680,
      height: 630,
    },
    pageMargins: [10, 10, 10, 10],
    footer: {
      margin: [20, -50, 20, 10],
      table: generateFooter(data), // Call generateTable6 with the data array
      layout: "noBorders", // Optional: Use this to remove footer table borders
    },
    content: [],
  };

  for (let i = 0; i < data.length; i++) {
    function pdf() {
      const table2 = {
        widths: [210, 210, 210],
        headerRows: 1,
        body: [
          [
            {
              text: "PRN Number",
              alignment: "center",
              bold: true,
              fontSize: 10,
            },
            {
              text: "Roll Number",
              alignment: "center",
              bold: true,
              fontSize: 10,
            },
            {
              text: "Aadhar Number",
              alignment: "center",
              bold: true,
              fontSize: 10,
            },
          ],
          [
            {
              text: `${data[i].prnNo || "-"}`,
              alignment: "center",
              //   margin: [0, 5, 0, 0],
              //   lineHeight:1,
              fontSize: 10,
            },
            {
              text: `${data[i].rollNumber || "-"}`,
              alignment: "center",
              //   margin: [0, 5, 0, 0],
              fontSize: 10,
            },
            {
              text: `${data[i].aadharNumber || "-"}`,
              alignment: "center",
              //   margin: [0, 5, 0, 0],
              fontSize: 10,
            },
          ],
        ],
      };

      const table3 = {
        widths: [210, 210, 210],
        headerRows: 1,
        body: [
          [
            {
              text: "First Name",
              alignment: "center",
              bold: true,
              fontSize: 10,
              border: [true, true, true, true],
            },
            {
              text: "Last Name",
              alignment: "center",
              bold: true,
              fontSize: 10,
              border: [true, true, true, true],
            },
            {
              text: "Mother's Name",
              alignment: "center",
              bold: true,
              fontSize: 10,
              border: [true, true, true, true],
            },
          ],
          [
            {
              text: `${data[i].firstName || "-"}`,
              alignment: "center",
              //   margin: [0, 5, 0, 0],
              //   lineHeight:1,
              fontSize: 10,
            },
            {
              text: `${data[i].lastName || "-"}`,
              alignment: "center",
              //   margin: [0, 5, 0, 0],
              fontSize: 10,
            },
            {
              text: `${data[i].motherName || "-"}`,
              alignment: "center",
              //   margin: [0, 5, 0, 0],
              fontSize: 10,
            },
          ],
        ],
      };

      const table4 = {
        headerRows: 1,
        widths: [100, 320],
        body: [
          [
            {
              text: [
                {
                  text: "Course Name : ",
                  bold: true,
                },
                {
                  text: `${data[i].courseName || "-"}`,
                },
              ],
              colSpan: 2,
            },
            {
              text: "",
            },
          ],
          [
            {
              text: [
                {
                  text: "Semester : ",
                  bold: true,
                },
                {
                  text: `${data[i].semName || "-"}`,
                },
              ],
              colSpan: 2,
            },
            {
              text: "",
            },
          ],
          [
            {
              text: "Subject Code",
              bold: true,
              margin: [5, 1, 0, 1],
              alignment: "center",
            },
            {
              text: "Subject Name",
              bold: true,
              margin: [5, 1, 0, 1],
              alignment: "center",
            },
          ],
          ...data[i].subjects.map((value: IAddmissionSubjects) => [
            {
              text: value.subjectCode || "-",
              margin: [5, 1, 0, 1],
              border: [true, false, true, true],
              alignment: "center",
            },
            {
              text: value.subjectName || "-",
              margin: [0, 1, 0, 1],
              border: [true, false, true, true],
              //   alignment: "center",
            },
          ]),
        ],
      };

      const table = [
        {
          table: {
            widths: [80, 475, 70],
            headerRows: 1,
            body: [
              [
                {
                  image: data[i].universityLogo
                    ? `${data[i].universityLogo}`
                    : `${process.cwd()}/img/xyz.png`,
                  //   margin: [0, 0, 0, 0],
                  width: 70,
                },
                {
                  text: [
                    {
                      text: "HSNC UNIVERSITY, MUMBAI",
                      fontSize: 20,
                      alignment: "center",
                      bold: true,
                      color: "#1E6332",
                      margin: [0, 50, 0, 0],
                    },
                    "\n",
                    {
                      text: "A STATE CULSTER UNIVERSITY",
                      //   fontSize: 14,
                      color: "#BD9C47",
                      alignment: "center",
                      bold: true,
                    },
                    "\n",
                    {
                      text: "47, Dr. R. G. Thadani Marg, Worli, Mumbai – 400 018.",
                      alignment: "center",
                      fontSize: 8,
                      bold: true,
                      lineHeight: 2,
                    },
                    "\n",
                    {
                      text: data[i].collegeName || "-",
                      //   fontSize: 14,
                      color: "#344B9E",
                      alignment: "center",
                      bold: true,
                    },
                    "\n",
                    {
                      text: "A CONSTITUENT COLLEGE OF HSNC UNIVERSITY, MUMBAI",
                      fontSize: 8,
                      alignment: "center",
                      bold: true,
                    },
                  ],
                  margin: [0, 0, 0, 0],
                },
                {
                  image: data[i].studentPhoto,
                  margin: [0, 0, 20, 3],
                  width: 70,
                },
              ],
            ],
          },
          layout: "noBorders",
        },
        {
          table: table2,
        },
        "\n",
        {
          table: table3,
        },
        "\n",
        {
          table: {
            widths: [489, 150],
            headerRows: 1,
            body: [
              [
                {
                  text: [
                    {
                      text: "Full Name (as per Aadhar) :",
                      bold: true,
                    },
                    {
                      text: ` ${data[i].studentName || "-"}`,
                    },
                  ],
                },
                {
                  text: [
                    {
                      text: "Gender :",
                      bold: true,
                    },
                    {
                      text: ` ${data[i].gender || "-"}`,
                    },
                  ],
                },
              ],
            ],
          },
          fontSize: 10,
        },
        "\n",
        {
          table: {
            widths: ["*", "*"],
            headerRows: 1,
            body: [
              [
                {
                  text: [
                    {
                      text: "Mobile Number :",
                      bold: true,
                    },
                    {
                      text: ` ${data[i].contactNo || "-"}`,
                    },
                  ],
                },
                {
                  text: [
                    {
                      text: "Email :",
                      bold: true,
                    },
                    {
                      text: ` ${data[i].email || "-"}`,
                    },
                  ],
                },
              ],
              [
                {
                  text: [
                    {
                      text: "Date of Birth :",
                      bold: true,
                    },
                    {
                      text: ` ${data[i].dob || "-"}`,
                    },
                  ],
                },
                {
                  text: [
                    {
                      text: "Blood Group :",
                      bold: true,
                    },
                    {
                      text: ` ${data[i].bloodGroup || "-"}`,
                    },
                  ],
                },
              ],
            ],
          },
          fontSize: 10,
        },
        "\n",
        {
          table: {
            widths: [649],
            headerRows: 1,
            body: [
              [
                {
                  text: [
                    {
                      text: "Full Address :",
                      bold: true,
                    },
                    {
                      text: ` ${data[i].address || "-"}`,
                    },
                  ],
                },
              ],
            ],
          },
          fontSize: 10,
        },
        "\n",
        {
          table: {
            widths: [210, 210, 210],
            headerRows: 1,
            body: [
              [
                {
                  text: "City",
                  alignment: "center",
                  bold: true,
                  fontSize: 10,
                },
                {
                  text: "State",
                  alignment: "center",
                  bold: true,
                  fontSize: 10,
                },
                {
                  text: "Pincode",
                  alignment: "center",
                  bold: true,
                  fontSize: 10,
                },
              ],
              [
                {
                  text: `${data[i].city || "-"}`,
                  alignment: "center",
                  //   margin: [0, 5, 0, 0],
                  //   lineHeight:1,
                  fontSize: 10,
                },
                {
                  text: `${data[i].state || "-"}`,
                  alignment: "center",
                  //   margin: [0, 5, 0, 0],
                  fontSize: 10,
                },
                {
                  text: `${data[i].pincode || "-"}`,
                  alignment: "center",
                  //   margin: [0, 5, 0, 0],
                  fontSize: 10,
                },
              ],
            ],
          },
        },
        "\n",
        {
          table: table4,
          fontSize: 10,
        },
      ];
      return table;
    }

    contentDefinition.content.push(pdf());

    // Insert a page break after each hall ticket except the last one
    if (i < data.length - 1) {
      contentDefinition.content.push({ text: "", pageBreak: "after" });
    }
  }

  return contentDefinition;
}
export default admissionForm;
