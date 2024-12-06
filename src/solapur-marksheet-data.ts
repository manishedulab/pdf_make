import { ISolMarksheet } from "./types";

// const marksheetsOf202301069074444: ISolMarksheet[] = [
//   {
//     examEvent: "MAR-2024",
//     barcode: `${process.cwd()}/public/collegeLogo/KAMBLE SAHIL SANJAY (GAURABAI).png`, // Assuming barcode is not provided in the PDF.
//     studentName: "KAMBLE SAHIL SANJAY (GAURABAI)",
//     studentPhoto: `${process.cwd()}/public/Student Photos/KAMBLE SAHIL SANJAY (GAURABAI).png`, // Assuming photo URL or binary data is not provided.
//     totalMarks: 1800,
//     totalObtainMarks: "1478",
//     percentage: "82.11%",
//     DBOEESignature: `${process.cwd()}/public/collegeLogo/Sol_DBOEE_ANDHARE_SIR.jpeg`, // Assuming the signature image URL is not provided.
//     specialization: "", // Specialization not mentioned explicitly.
//     courseFullName: "Bachelor of Arts (Hons) B.A.(Hons) (with Credits)",
//     prnNo: "202301069074444",
//     resultDate: "29 August 2024",
//     collegeName:
//       "C.B.Khedgis Basweshwar Science, Raja Vijaysinh Commerce, Raja Jaysinh Arts College, Akkalkot (CBK)",
//     examCenter:
//       "C.B.Khedgis Basweshwar Science, Raja Vijaysinh Commerce, Raja Jaysinh Arts College, Akkalkot (CBK)",
//     finalGrade: "O",
//     seatNo: "345522",
//     courseName: "B.A. (Hons)-III",
//     examination: "Pattern 2019 - B.A. -III Sem-VI",
//     ECAMark: "", // ECA marks not provided.
//     totalCredit: "204.00",
//     totalEgp: "1940.00",
//     subjectName: "", // Subject names are included in the detailed subjects.
//     sgpa: "9.51",
//     status: "Pass",
//     evenSemesterCredits: [
//       {
//         semesterName: "Sem-VI",
//         credits: 34,
//         egp: "324.00",
//         sgpa: "9.53",
//         status: "Pass",
//         seatNo: "345522",
//         examEvent: "MAR-2024",
//       },
//     ],
//     oddSemesterCredits: [
//       {
//         semesterName: "Sem-V",
//         credits: 34,
//         egp: "340.00",
//         sgpa: "10.00",
//         status: "Pass",
//         seatNo: "345522",
//         examEvent: "MAR-2024",
//       },
//     ],
//     ordinance: "NA",
//     statementNo: "2919009",
//     examMonthAndYear: "MAR-2024",
//     previousYearData: [
//       {
//         seatNo: "2003264",
//         year: "B.A.(Hons)-I",
//         examEvent: "MAR-2021",
//         totalCredits: "68",
//         egp: "628.00",
//         sgpa: "9.24",
//       },
//       {
//         seatNo: "219634",
//         year: "B.A.(Hons)-II",
//         examEvent: "MAR-2023",
//         totalCredits: "68",
//         egp: "648.00",
//         sgpa: "9.53",
//       },
//       {
//         seatNo: "345522",
//         year: "B.A.(Hons)-III",
//         examEvent: "MAR-2024",
//         totalCredits: "68",
//         egp: "664.00",
//         sgpa: "9.76",
//       },
//     ],
//     oddSemesterSubjects: [
//       {
//         paperCode: "19101501",
//         paperName: "Compulsory English",
//         credits: "4.00",
//         gradeObtained: "O",
//         gradePoint: "10",
//         earnedGRPoints: "40",
//         remarks: "E,X",
//       },
//       {
//         paperCode: "19101567",
//         paperName: "Optional Economics-VII",
//         credits: "6.00",
//         gradeObtained: "O",
//         gradePoint: "10",
//         earnedGRPoints: "60",
//         remarks: "E,X",
//       },
//       {
//         paperCode: "19101568",
//         paperName: "Optional Economics-VIII",
//         credits: "6.00",
//         gradeObtained: "O",
//         gradePoint: "10",
//         earnedGRPoints: "60",
//         remarks: "E,X",
//       },
//       {
//         paperCode: "19101569",
//         paperName: "Optional Economics-IX",
//         credits: "6.00",
//         gradeObtained: "O",
//         gradePoint: "10",
//         earnedGRPoints: "60",
//         remarks: "E,X",
//       },
//       {
//         paperCode: "19101570",
//         paperName: "Optional Economics-X",
//         credits: "6.00",
//         gradeObtained: "O",
//         gradePoint: "10",
//         earnedGRPoints: "60",
//         remarks: "E,X",
//       },
//       {
//         paperCode: "19101571",
//         paperName: "Optional Economics-XI",
//         credits: "6.00",
//         gradeObtained: "O",
//         gradePoint: "10",
//         earnedGRPoints: "60",
//         remarks: "E,X",
//       },
//     ],
//     evenSemesterSubjects: [
//       {
//         paperCode: "19101601",
//         paperName: "Compulsory English",
//         credits: "4.00",
//         gradeObtained: "A+",
//         gradePoint: "9",
//         earnedGRPoints: "36",
//         remarks: "E,C",
//       },
//       {
//         paperCode: "19101667",
//         paperName: "Optional Economics-XII",
//         credits: "6.00",
//         gradeObtained: "A",
//         gradePoint: "8",
//         earnedGRPoints: "48",
//         remarks: "E,C",
//       },
//       {
//         paperCode: "19101668",
//         paperName: "Optional Economics-XIII",
//         credits: "6.00",
//         gradeObtained: "O",
//         gradePoint: "10",
//         earnedGRPoints: "60",
//         remarks: "E,C",
//       },
//       {
//         paperCode: "19101669",
//         paperName: "Optional Economics-XIV",
//         credits: "6.00",
//         gradeObtained: "O",
//         gradePoint: "10",
//         earnedGRPoints: "60",
//         remarks: "E,C",
//       },
//       {
//         paperCode: "19101670",
//         paperName: "Optional Economics-XV",
//         credits: "6.00",
//         gradeObtained: "O",
//         gradePoint: "10",
//         earnedGRPoints: "60",
//         remarks: "E,C",
//       },
//       {
//         paperCode: "19101671",
//         paperName: "Optional Economics-XVI",
//         credits: "6.00",
//         gradeObtained: "O",
//         gradePoint: "10",
//         earnedGRPoints: "60",
//         remarks: "E,C",
//       },
//     ],
//   },
// ];

// const marksheet202201031045638: ISolMarksheet[] = [{
//   examEvent: "MAR-2024",
//   barcode: `${process.cwd()}/public/collegeLogo/SINGAM RAKESH MANOHAR (BHAGYALAXMI).png`, 
//   studentName: "SINGAM RAKESH MANOHAR (BHAGYALAXMI)",
//   studentPhoto:  `${process.cwd()}/public/Student Photos/SINGAM RAKESH MANOHAR (BHAGYALAXMI).png`, 
//   totalMarks: 3750, 
//   totalObtainMarks: "2364", 
//   percentage: "63.04%", 
//   DBOEESignature: `${process.cwd()}/public/collegeLogo/Sol_DBOEE_ANDHARE_SIR.jpeg`, 
//   specialization: "", 
//   courseFullName: "Bachelor of Computer Application B.C.A (with Credits) - Regular - CBCS",
//   prnNo: "202201031045638",
//   resultDate: "09 September 2024",
//   collegeName: "K.P.Mangalvedhekar Institute of Management Career and Development and Research, Solapur (KPMIM)",
//   examCenter: "D.A.V.Velankar College of Commerce, Solapur (DAV)",
//   finalGrade: "B+", 
//   seatNo: "348044",
//   courseName: "B.C.A-III Sem-VI",
//   examination: "Pattern 2019 - B.C.A-III Sem-VI Examination held in March-2024",
//   ECAMark: "", 
//   totalCredit: "152.00", 
//   totalEgp: "1132.00", 
//   subjectName: "", 
//   sgpa: "7.45", 
//   status: "Pass",
//   evenSemesterCredits: [
//     {
//       semesterName: "Sem-VI",
//       credits: 36,
//       egp: "288.00",
//       sgpa: "8.00",
//       status: "Pass",
//       seatNo: "348044",
//       examEvent: "MAR-2024"
//     }
//   ],
//   oddSemesterCredits: [
//     {
//       semesterName: "Sem-V",
//       credits: 20,
//       egp: "116.00",
//       sgpa: "5.80",
//       status: "Pass",
//       seatNo: "348044",
//       examEvent: "MAR-2024"
//     }
//   ],
//   ordinance: "NA",
//   statementNo: "3002235",
//   examMonthAndYear: "MAR-2024",
//   previousYearData: [
//     {
//       seatNo: "2003922",
//       year: "B.C.A-I",
//       examEvent: "MAR-2021",
//       totalCredits: "52",
//       egp: "392.00",
//       sgpa: "7.54"
//     },
//     {
//       seatNo: "348044",
//       year: "B.C.A-II",
//       examEvent: "MAR-2024",
//       totalCredits: "44",
//       egp: "336.00",
//       sgpa: "7.64"
//     },
//     {
//       seatNo: "348044",
//       year: "B.C.A-III",
//       examEvent: "MAR-2024",
//       totalCredits: "56",
//       egp: "404.00",
//       sgpa: "7.21"
//     }
//   ],
//   oddSemesterSubjects: [
//     {
//       paperCode: "19409502",
//       paperName: "Core Java",
//       credits: "4.00",
//       gradeObtained: "B",
//       gradePoint: "6",
//       earnedGRPoints: "24",
//       remarks: "E,C"
//     },
//     {
//       paperCode: "19409503",
//       paperName: "Visual Programming",
//       credits: "4.00",
//       gradeObtained: "B",
//       gradePoint: "6",
//       earnedGRPoints: "24",
//       remarks: "E,X"
//     },
//     {
//       paperCode: "19409504",
//       paperName: "Computer Graphics",
//       credits: "4.00",
//       gradeObtained: "C+",
//       gradePoint: "5",
//       earnedGRPoints: "20",
//       remarks: "E,X"
//     },
//     {
//       paperCode: "19409505",
//       paperName: "Recent Trends in IT",
//       credits: "4.00",
//       gradeObtained: "B+",
//       gradePoint: "7",
//       earnedGRPoints: "28",
//       remarks: "E,C"
//     },
//     {
//       paperCode: "19409506",
//       paperName: "Linux and Shell Programming",
//       credits: "4.00",
//       gradeObtained: "C+",
//       gradePoint: "5",
//       earnedGRPoints: "20",
//       remarks: "E,X"
//     },
//     {
//       paperCode: "20409501",
//       paperName: "English (Business English)-I",
//       credits: "2.00",
//       gradeObtained: "A",
//       gradePoint: "8",
//       earnedGRPoints: "16",
//       remarks: "E,X"
//     }
//   ],
//   evenSemesterSubjects: [
//     {
//       paperCode: "19409601",
//       paperName: "English (Business English)-II",
//       credits: "2.00",
//       gradeObtained: "C+",
//       gradePoint: "5",
//       earnedGRPoints: "10",
//       remarks: "E,C"
//     },
//     {
//       paperCode: "19409602",
//       paperName: "Advanced Java",
//       credits: "4.00",
//       gradeObtained: "C+",
//       gradePoint: "5",
//       earnedGRPoints: "20",
//       remarks: "E,C *"
//     },
//     {
//       paperCode: "19409603",
//       paperName: "Dot Net Technology",
//       credits: "4.00",
//       gradeObtained: "B",
//       gradePoint: "6",
//       earnedGRPoints: "24",
//       remarks: "E,C"
//     },
//     {
//       paperCode: "19409604",
//       paperName: "Data Warehouse and Data Mining",
//       credits: "4.00",
//       gradeObtained: "A",
//       gradePoint: "8",
//       earnedGRPoints: "32",
//       remarks: "E,C"
//     },
//     {
//       paperCode: "19409605",
//       paperName: "Cryptography and Network Security",
//       credits: "4.00",
//       gradeObtained: "A",
//       gradePoint: "8",
//       earnedGRPoints: "32",
//       remarks: "E,C"
//     },
//     {
//       paperCode: "19409606",
//       paperName: "Advanced Python",
//       credits: "4.00",
//       gradeObtained: "C+",
//       gradePoint: "5",
//       earnedGRPoints: "20",
//       remarks: "E,C"
//     },
//     {
//       paperCode: "19409607",
//       paperName: "Practical-VIII",
//       credits: "4.00",
//       gradeObtained: "O",
//       gradePoint: "10",
//       earnedGRPoints: "40",
//       remarks: "E,C"
//     },
//     {
//       paperCode: "19409608",
//       paperName: "Practical-IX",
//       credits: "4.00",
//       gradeObtained: "O",
//       gradePoint: "10",
//       earnedGRPoints: "40",
//       remarks: "E,C"
//     },
//     {
//       paperCode: "19409609",
//       paperName: "Practical-X",
//       credits: "4.00",
//       gradeObtained: "O",
//       gradePoint: "10",
//       earnedGRPoints: "40",
//       remarks: "E,C"
//     },
//     {
//       paperCode: "19409610",
//       paperName: "Practical-XI",
//       credits: "4.00",
//       gradeObtained: "O",
//       gradePoint: "10",
//       earnedGRPoints: "40",
//       remarks: "E,C"
//     }
//   ]
// }];

//  export const marksheet202301075074441: ISolMarksheet[] = [{
//   examEvent: "MAR-2024",
//   barcode: `${process.cwd()}/public/collegeLogo/GAIKAR NAVNATH DNYANDEV (CHANDRIKA).png`, 
//   studentName: "GAIKAR NAVNATH DNYANDEV (CHANDRIKA)",
//   studentPhoto: `${process.cwd()}/public/Student Photos/GAIKAR NAVNATH DNYANDEV (CHANDRIKA).png`, 
//   totalMarks: 3200, 
//   totalObtainMarks: "2456", 
//   percentage: "76.75%", 
//   DBOEESignature: `${process.cwd()}/public/collegeLogo/Sol_DBOEE_ANDHARE_SIR.jpeg`, 
//   specialization: "", 
//   courseFullName: "Bachelor of Physical Education B.P.Ed. (with Credits) - Regular - CBCS",
//   prnNo: "202301075074441",
//   resultDate: "12 September 2024",
//   collegeName: "College of Education, Barshi (CED)",
//   examCenter: "Shri. Swami Samarth College of Education, Barshi (SSCED)",
//   finalGrade: "A+", 
//   seatNo: "347581",
//   courseName: "B.P.Ed.-II Sem-IV",
//   examination: "Pattern 2021 - B.P.Ed.-II Sem-IV Examination held in March-2024",
//   ECAMark: "", 
//   totalCredit: "128.00", 
//   totalEgp: "1184.00", 
//   subjectName: "", 
//   sgpa: "9.25", 
//   status: "Pass",
//   evenSemesterCredits: [
//     {
//       semesterName: "Sem-IV",
//       credits: 32,
//       egp: "304.00",
//       sgpa: "9.50",
//       status: "Pass",
//       seatNo: "347581",
//       examEvent: "MAR-2024"
//     }
//   ],
//   oddSemesterCredits: [
//     {
//       semesterName: "Sem-III",
//       credits: 32,
//       egp: "304.00",
//       sgpa: "9.50",
//       status: "Pass",
//       seatNo: "347581",
//       examEvent: "MAR-2024"
//     }
//   ],
//   ordinance: "NA",
//   statementNo: "2859326",
//   examMonthAndYear: "MAR-2024",
//   previousYearData: [
//     {
//       seatNo: "2018217",
//       year: "B.P.Ed.-I",
//       examEvent: "MAR-2021",
//       totalCredits: "64",
//       egp: "576.00",
//       sgpa: "9.00"
//     },
//     {
//       seatNo: "347581",
//       year: "B.P.Ed.-II",
//       examEvent: "MAR-2024",
//       totalCredits: "64",
//       egp: "608.00",
//       sgpa: "9.50"
//     },
//   ],
//   oddSemesterSubjects: [
//     {
//       paperCode: "19501301",
//       paperName: "Sports Training",
//       credits: "4.00",
//       gradeObtained: "A+",
//       gradePoint: "9",
//       earnedGRPoints: "36",
//       remarks: "E,X"
//     },
//     {
//       paperCode: "19501302",
//       paperName: "Computer Applications in Physical Education",
//       credits: "4.00",
//       gradeObtained: "O",
//       gradePoint: "10",
//       earnedGRPoints: "40",
//       remarks: "E,X"
//     },
//     {
//       paperCode: "19501303",
//       paperName: "Sports Psychology and Sociology",
//       credits: "4.00",
//       gradeObtained: "A",
//       gradePoint: "8",
//       earnedGRPoints: "32",
//       remarks: "E,X"
//     },
//     {
//       paperCode: "19501304",
//       paperName: "Curriculum Design",
//       credits: "4.00",
//       gradeObtained: "A+",
//       gradePoint: "9",
//       earnedGRPoints: "36",
//       remarks: "E,X"
//     },
//     {
//       paperCode: "19501306",
//       paperName: "Combative Sports: Martial Art/Karate/Judo/Fencing/Boxing/Taekwondo/Wrestling (Any Two)",
//       credits: "4.00",
//       gradeObtained: "O",
//       gradePoint: "10",
//       earnedGRPoints: "40",
//       remarks: "E,X"
//     },
//     {
//       paperCode: "19501307",
//       paperName: "Team Games: Football/Softball/Volleyball/Handball/Basketball (Any Two)",
//       credits: "4.00",
//       gradeObtained: "O",
//       gradePoint: "10",
//       earnedGRPoints: "40",
//       remarks: "E,X"
//     },
//     {
//       paperCode: "19501308",
//       paperName: "Teaching Practice: Teaching Lesson",
//       credits: "4.00",
//       gradeObtained: "O",
//       gradePoint: "10",
//       earnedGRPoints: "40",
//       remarks: "E,X"
//     },
//     {
//       paperCode: "19501309",
//       paperName: "Gym Instructor",
//       credits: "4.00",
//       gradeObtained: "O",
//       gradePoint: "10",
//       earnedGRPoints: "40",
//       remarks: "E,X"
//     }
//   ],
//   evenSemesterSubjects: [
//     {
//       paperCode: "19501401",
//       paperName: "Measurement and Evaluation in Physical Education",
//       credits: "4.00",
//       gradeObtained: "O",
//       gradePoint: "10",
//       earnedGRPoints: "40",
//       remarks: "E,C"
//     },
//     {
//       paperCode: "19501402",
//       paperName: "Kinesiology and Biomechanics",
//       credits: "4.00",
//       gradeObtained: "A+",
//       gradePoint: "9",
//       earnedGRPoints: "36",
//       remarks: "E,C"
//     },
//     {
//       paperCode: "19501403",
//       paperName: "Research and Statistics in Physical Education",
//       credits: "4.00",
//       gradeObtained: "A",
//       gradePoint: "8",
//       earnedGRPoints: "32",
//       remarks: "E,C"
//     },
//     {
//       paperCode: "19501404",
//       paperName: "Theory of Sports and Game and their Officiating and Coaching",
//       credits: "4.00",
//       gradeObtained: "A+",
//       gradePoint: "9",
//       earnedGRPoints: "36",
//       remarks: "E,C"
//     },
//     {
//       paperCode: "19501406",
//       paperName: "Baseball/Cricket/Hockey/Handball/Netball/Table Tennis/Lawn Tennis",
//       credits: "4.00",
//       gradeObtained: "O",
//       gradePoint: "10",
//       earnedGRPoints: "40",
//       remarks: "E,C"
//     },
//     {
//       paperCode: "19501407",
//       paperName: "Sports & Games Specialization: Class Room Teaching Lessons Plans",
//       credits: "4.00",
//       gradeObtained: "O",
//       gradePoint: "10",
//       earnedGRPoints: "40",
//       remarks: "E,C"
//     },
//     {
//       paperCode: "19501408",
//       paperName: "Games Specialization: Coaching Lessons Plans",
//       credits: "4.00",
//       gradeObtained: "O",
//       gradePoint: "10",
//       earnedGRPoints: "40",
//       remarks: "E,C"
//     },
//     {
//       paperCode: "19501409",
//       paperName: "Track and Field (Throwing Events, Hurdles & Relay)/Swimming",
//       credits: "4.00",
//       gradeObtained: "O",
//       gradePoint: "10",
//       earnedGRPoints: "40",
//       remarks: "E,C"
//     }
//   ]
// }];

// export const marksheet202301042071717: ISolMarksheet[] = [{
//   examEvent: "MAR-2024",
//   barcode:`${process.cwd()}/public/collegeLogo/METKARI BALAJI RAMCHANDRA (SUNITA).png`, 
//   studentName: "METKARI BALAJI RAMCHANDRA (SUNITA)",
//   studentPhoto:`${process.cwd()}/public/Student Photos/METKARI BALAJI RAMCHANDRA (SUNITA).png`, 
//   totalMarks: 1800,
//   totalObtainMarks: 1219,
//   percentage: "67.72%",
//   DBOEESignature:  `${process.cwd()}/public/collegeLogo/Sol_DBOEE_ANDHARE_SIR.jpeg`,
//   specialization: "Marathi",
//   courseFullName: "Bachelor of Arts (Hons)",
//   prnNo: "202301042071717",
//   resultDate: "12 September 2024",
//   collegeName: "Baburao Patil College of Arts and Science, Angar (BPCAS)",
//   examCenter: "Baburao Patil College of Arts and Science, Angar (BPCAS)",
//   finalGrade: "A",
//   seatNo: "336207",
//   courseName: "B.A.(Hons)-III",
//   examination: "Pattern 2019 - B.A. -III Sem-VI",
//   ECAMark: "",
//   totalCredit: "204",
//   totalEgp: "1676.00",
//   subjectName: "Marathi",
//   sgpa: "8.22",
//   status: "Pass",
//   evenSemesterCredits: [
//     {
//       semesterName: "Sem-VI",
//       credits: 34,
//       egp: "276.00",
//       sgpa: "8.12",
//       status: "Pass",
//       seatNo: "336207",
//       examEvent: "MAR-2024"
//     }
//   ],
//   oddSemesterCredits: [
//     {
//       semesterName: "Sem-V",
//       credits: 34,
//       egp: "258.00",
//       sgpa: "7.59",
//       status: "Pass",
//       seatNo: "336207",
//       examEvent: "MAR-2024"
//     }
//   ],
//   ordinance: "NA",
//   statementNo: "2918438",
//   examMonthAndYear: "March-2024",
//   previousYearData: [
//     {
//       seatNo: "2004192",
//       year: "B.A.(Hons)-I",
//       examEvent: "MAR-2021",
//       totalCredits: "68",
//       egp: "612.00",
//       sgpa: "9.00"
//     },
//     {
//       seatNo: "220648",
//       year: "B.A.(Hons)-II",
//       examEvent: "OCT-2023",
//       totalCredits: "68",
//       egp: "530.00",
//       sgpa: "7.79"
//     },
//     {
//       seatNo: "336207",
//       year: "B.A.(Hons)-III",
//       examEvent: "MAR-2024",
//       totalCredits: "68",
//       egp: "534.00",
//       sgpa: "7.85"
//     },
//   ],
//   oddSemesterSubjects: [
//     {
//       paperCode: "19101501",
//       paperName: "Compulsory English",
//       credits: "4.00",
//       gradeObtained: "B",
//       gradePoint: "6",
//       earnedGRPoints: "24",
//       remarks: "E,X"
//     },
//     {
//       paperCode: "19101507",
//       paperName: "Optional Marathi-VII",
//       credits: "6.00",
//       gradeObtained: "A",
//       gradePoint: "8",
//       earnedGRPoints: "48",
//       remarks: "E,X"
//     },
//     {
//       paperCode: "19101508",
//       paperName: "Optional Marathi-VIII",
//       credits: "6.00",
//       gradeObtained: "A+",
//       gradePoint: "9",
//       earnedGRPoints: "54",
//       remarks: "E,X"
//     },
//     {
//       paperCode: "19101509",
//       paperName: "Optional Marathi-IX",
//       credits: "6.00",
//       gradeObtained: "A",
//       gradePoint: "8",
//       earnedGRPoints: "48",
//       remarks: "E,X"
//     },
//     {
//       paperCode: "19101510",
//       paperName: "Optional Marathi-X",
//       credits: "6.00",
//       gradeObtained: "B",
//       gradePoint: "6",
//       earnedGRPoints: "36",
//       remarks: "E,X"
//     },
//     {
//       paperCode: "19101511",
//       paperName: "Optional Marathi-XI",
//       credits: "6.00",
//       gradeObtained: "A",
//       gradePoint: "8",
//       earnedGRPoints: "48",
//       remarks: "E,X"
//     }
//   ],
//   evenSemesterSubjects: [
//     {
//       paperCode: "19101601",
//       paperName: "Compulsory English",
//       credits: "4.00",
//       gradeObtained: "B",
//       gradePoint: "6",
//       earnedGRPoints: "24",
//       remarks: "E,C"
//     },
//     {
//       paperCode: "19101607",
//       paperName: "Optional Marathi-XII",
//       credits: "6.00",
//       gradeObtained: "A",
//       gradePoint: "8",
//       earnedGRPoints: "48",
//       remarks: "E,C"
//     },
//     {
//       paperCode: "19101608",
//       paperName: "Optional Marathi-XIII",
//       credits: "6.00",
//       gradeObtained: "A+",
//       gradePoint: "9",
//       earnedGRPoints: "54",
//       remarks: "E,C"
//     },
//     {
//       paperCode: "19101609",
//       paperName: "Optional Marathi-XIV",
//       credits: "6.00",
//       gradeObtained: "A+",
//       gradePoint: "9",
//       earnedGRPoints: "54",
//       remarks: "E,C"
//     },
//     {
//       paperCode: "19101610",
//       paperName: "Optional Marathi-XV",
//       credits: "6.00",
//       gradeObtained: "A",
//       gradePoint: "8",
//       earnedGRPoints: "48",
//       remarks: "E,C"
//     },
//     {
//       paperCode: "19101611",
//       paperName: "Optional Marathi-XVI",
//       credits: "6.00",
//       gradeObtained: "A",
//       gradePoint: "8",
//       earnedGRPoints: "48",
//       remarks: "E,C"
//     }
//   ]
// }];

// export const marksheet202301020072198: ISolMarksheet[] = [
//   {
//     examEvent: "MAR-2024",
//     barcode:  `${process.cwd()}/public/collegeLogo/WAGHMARE ABHIJEET ASHOK (POOJA).png`, 
//     studentName: "WAGHMARE ABHIJEET ASHOK (POOJA)",
//     studentPhoto:`${process.cwd()}/public/Student Photos/WAGHMARE ABHIJEET ASHOK (POOJA).png`, 
//     totalMarks: 3300,
//     totalObtainMarks: 2274,
//     percentage: "68.91%",
//     DBOEESignature: `${process.cwd()}/public/collegeLogo/Sol_DBOEE_ANDHARE_SIR.jpeg`,
//     specialization: "Chemistry",
//     courseFullName: "Bachelor of Science (Hons)",
//     prnNo: "202301020072198",
//     resultDate: "12 September 2024",
//     collegeName: "D.B.F.Dayanand College of Arts and Science, Solapur (DBF)",
//     examCenter: "Hirachand Nemchand College of Commerce, Solapur (HN)",
//     finalGrade: "A",
//     seatNo: "334668",
//     courseName: "B.Sc(Hons)-III",
//     examination: "Pattern 2019 - B.Sc(Hons)-III Sem-VI",
//     ECAMark: "",
//     totalCredit: "132",
//     totalEgp: "1094.00",
//     subjectName: "Chemistry",
//     sgpa: "8.29",
//     status: "Pass",
//     evenSemesterCredits: [
//       {
//         semesterName: "Sem-VI",
//         credits: 32,
//         egp: "276.00",
//         sgpa: "8.63",
//         status: "Pass",
//         seatNo: "334668",
//         examEvent: "MAR-2024"
//       }
//     ],
//     oddSemesterCredits: [
//       {
//         semesterName: "Sem-V",
//         credits: 16,
//         egp: "112.00",
//         sgpa: "7.00",
//         status: "Pass",
//         seatNo: "334668",
//         examEvent: "MAR-2024"
//       }
//     ],
//     ordinance: "NA",
//     statementNo: "2922155",
//     examMonthAndYear: "March-2024",
//     previousYearData: [
//       {
//         seatNo: "210946",
//         year: "B.Sc(Hons)-I",
//         examEvent: "OCT-2022",
//         totalCredits: "48",
//         egp: "416.00",
//         sgpa: "8.67"
//       },
//       {
//         seatNo: "210946",
//         year: "B.Sc(Hons)-II",
//         examEvent: "MAR-2023",
//         totalCredits: "36",
//         egp: "290.00",
//         sgpa: "8.06"
//       },
//       {
//         seatNo: "334668",
//         year: "B.Sc(Hons)-III",
//         examEvent: "MAR-2024",
//         totalCredits: "48",
//         egp: "388.00",
//         sgpa: "8.08"
//       }
//     ],
//     oddSemesterSubjects: [
//       {
//         paperCode: "19201500",
//         paperName: "Compulsory English",
//         credits: "2.00",
//         gradeObtained: "A+",
//         gradePoint: "9",
//         earnedGRPoints: "18",
//         remarks: "E,X"
//       },
//       {
//         paperCode: "19201506",
//         paperName: "Chemistry Paper-IX",
//         credits: "4.00",
//         gradeObtained: "A",
//         gradePoint: "8",
//         earnedGRPoints: "32",
//         remarks: "E,X"
//       },
//       {
//         paperCode: "19201507",
//         paperName: "Chemistry Paper-X",
//         credits: "4.00",
//         gradeObtained: "A",
//         gradePoint: "8",
//         earnedGRPoints: "32",
//         remarks: "E,X"
//       },
//       {
//         paperCode: "19201508",
//         paperName: "Chemistry Paper-XI",
//         credits: "4.00",
//         gradeObtained: "B",
//         gradePoint: "6",
//         earnedGRPoints: "24",
//         remarks: "E,X"
//       },
//       {
//         paperCode: "19201509",
//         paperName: "Chemistry Paper-XII",
//         credits: "4.00",
//         gradeObtained: "B",
//         gradePoint: "6",
//         earnedGRPoints: "24",
//         remarks: "E,X"
//       }
//     ],
//     evenSemesterSubjects: [
//       {
//         paperCode: "19201600",
//         paperName: "Compulsory English",
//         credits: "4.00",
//         gradeObtained: "B",
//         gradePoint: "6",
//         earnedGRPoints: "12",
//         remarks: "E,C"
//       },
//       {
//         paperCode: "19201610",
//         paperName: "Chemistry Paper-XIII",
//         credits: "4.00",
//         gradeObtained: "A",
//         gradePoint: "8",
//         earnedGRPoints: "32",
//         remarks: "E,C"
//       },
//       {
//         paperCode: "19201611",
//         paperName: "Chemistry Paper-XIV",
//         credits: "4.00",
//         gradeObtained: "A",
//         gradePoint: "8",
//         earnedGRPoints: "32",
//         remarks: "E,C"
//       },
//       {
//         paperCode: "19201612",
//         paperName: "Chemistry Paper-XV",
//         credits: "4.00",
//         gradeObtained: "A",
//         gradePoint: "8",
//         earnedGRPoints: "32",
//         remarks: "E,C"
//       },
//       {
//         paperCode: "19201613",
//         paperName: "Chemistry Practical-I",
//         credits: "4.00",
//         gradeObtained: "O",
//         gradePoint: "10",
//         earnedGRPoints: "40",
//         remarks: "E,C"
//       },
//       {
//         paperCode: "19201614",
//         paperName: "Chemistry Practical-II",
//         credits: "4.00",
//         gradeObtained: "A+",
//         gradePoint: "9",
//         earnedGRPoints: "36",
//         remarks: "E,C"
//       },
//       {
//         paperCode: "19201615",
//         paperName: "Chemistry Practical-III",
//         credits: "4.00",
//         gradeObtained: "A+",
//         gradePoint: "9",
//         earnedGRPoints: "36",
//         remarks: "E,C"
//       },
//       {
//         paperCode: "19201616",
//         paperName: "Chemistry Practical-IV",
//         credits: "4.00",
//         gradeObtained: "A+",
//         gradePoint: "9",
//         earnedGRPoints: "36",
//         remarks: "E,C"
//       },
//       {
//         paperCode: "19201617",
//         paperName: "Chemistry Paper-XVI",
//         credits: "4.00",
//         gradeObtained: "A",
//         gradePoint: "8",
//         earnedGRPoints: "32",
//         remarks: "E,C"
//       }
//     ]
//   }
// ];


// export const marksheet202201020041544: ISolMarksheet[] = [{
//   examEvent: "MAR-2024", // from 'Exam Event: MAR-2024'
//   barcode: `${process.cwd()}/public/collegeLogo/CHINTAKINDI CHETNA RAMESH (SMITA).png`, // inferred from cumulative result indicating RRO.76 status
//   studentName: "CHINTAKINDI CHETNA RAMESH (SMITA)", // from 'Name'
//   studentPhoto: `${process.cwd()}/public/Student Photos/CHINTAKINDI CHETNA RAMESH (SMITA).png`,  // No data provided for this in the PDF
//   totalMarks: 3400, // EGP of cumulative result (Total EGP : 842.00)
//   totalObtainMarks: "2770", // same as totalMarks in this case
//   percentage: "81.47%", // SGPA : 9.57
//   DBOEESignature: `${process.cwd()}/public/collegeLogo/Sol_DBOEE_ANDHARE_SIR.jpeg`, // No signature provided in the PDF
//   specialization: "Bachelor of Science (Hons)", // from 'Faculty of Science & Technology: Bachelor of Science (Hons)'
//   courseFullName: "B.Sc (with Credits)", // inferred from course name
//   prnNo: "202201020041544", // from 'PRN'
//   resultDate: "20 Septmeber 2024", // from 'Date'
//   collegeName: "D.B.F.Dayanand College of Arts and Science, Solapur (DBF)", // from 'College'
//   examCenter: "Hirachand Nemchand College of Commerce, Solapur (HN)", // from 'Exam Center'
//   finalGrade: "A+", // No grade provided, only SGPA
//   seatNo: "334554", // from 'Seat No'
//   courseName: "B.Sc (Hons)", // inferred from the course context
//   examination: "March-2024", // from 'Examination held in March-2024'
//   ECAMark: "", // No data provided in the PDF
//   totalCredit: "136.00", // from cumulative 'Total Credits: 88.00'
//   totalEgp: "1264.00", // from cumulative 'Total EGP: 842.00'
//   subjectName: "", // Subject name can vary
//   sgpa: "9.29", // from cumulative 'SGPA: 9.57'
//   status: "Pass", // from cumulative 'Status: Pass'
//   evenSemesterCredits: [
//     {
//       semesterName: "Sem-VI",
//       credits: 32,
//       egp: "312.00",
//       sgpa: "9.75",
//       status: "Pass",
//       seatNo: "334554",
//       examEvent: "MAR-2024",
//     },
//   ],
//   oddSemesterCredits: [
//     {
//       semesterName: "Sem-V",
//       credits: 20,
//       egp: "188.00",
//       sgpa: "9.40",
//       status: "Pass",
//       seatNo: "334554",
//       examEvent: "MAR-2024",
//     },
//   ],
//   ordinance: "NA",
//   statementNo: "2944887", // from 'Statement No'
//   examMonthAndYear: "March-2024", // inferred from 'Examination held in March-2024'
//   previousYearData: [
//     {
//       seatNo: "2533",
//       year: "B.Sc(Hons)-I",
//       examEvent: "MAR-2023",
//       totalCredits: "48",
//       egp: "342.00",
//       sgpa: "8.79",
//     },
//     {
//       seatNo: "037333",
//       year: "B.Sc(Hons)-II",
//       examEvent: "MAR-2023",
//       totalCredits: "36",
//       egp: "342.00",
//       sgpa: "9.50",
//     },
//     {
//       seatNo: "334554",
//       year: "B.Sc(Hons)-III",
//       examEvent: "MAR-2024",
//       totalCredits: "52",
//       egp: "500.00",
//       sgpa: "9.62",
//     },
//   ],
//   oddSemesterSubjects: [
//     {
//       paperCode: "19201500",
//       paperName: "Compulsory English",
//       credits: "2.00",
//       gradeObtained: "A+",
//       gradePoint: "9",
//       earnedGRPoints: "18",
//       remarks: "E,X",
//     },
//     {
//       paperCode: "19201528",
//       paperName: "Statistics Paper-IX",
//       credits: "4.00",
//       gradeObtained: "O",
//       gradePoint: "10",
//       earnedGRPoints: "40",
//       remarks: "E,X",
//     },
//     {
//       paperCode: "19201529",
//       paperName: "Statistics Paper-X",
//       credits: "4.00",
//       gradeObtained: "A+",
//       gradePoint: "9",
//       earnedGRPoints: "36",
//       remarks: "E,X",
//     },
//     {
//       paperCode: "19201530",
//       paperName: "Statistics Paper-XI",
//       credits: "4.00",
//       gradeObtained: "A+",
//       gradePoint: "9",
//       earnedGRPoints: "36",
//       remarks: "E,X",
//     },
//     {
//       paperCode: "19201531",
//       paperName: "Statistics Paper-XII Operations Research",
//       credits: "4.00",
//       gradeObtained: "A+",
//       gradePoint: "9",
//       earnedGRPoints: "36",
//       remarks: "E,X",
//     },
//     {
//       paperCode: "19201533",
//       paperName: "MS-Excel",
//       credits: "4.00",
//       gradeObtained: "O",
//       gradePoint: "10",
//       earnedGRPoints: "40",
//       remarks: "E,X",
//     },
//   ],
//   evenSemesterSubjects: [
//     {
//       paperCode: "19201600",
//       paperName: "Compulsory English",
//       credits: "4.00",
//       gradeObtained: "A+",
//       gradePoint: "9",
//       earnedGRPoints: "18",
//       remarks: "E,C",
//     },
//     {
//       paperCode: "19201643",
//       paperName: "Statistics Paper-XIII",
//       credits: "4.00",
//       gradeObtained: "O",
//       gradePoint: "10",
//       earnedGRPoints: "40",
//       remarks: "E,C",
//     },
//     {
//       paperCode: "19201644",
//       paperName: "Statistics Paper-XIV",
//       credits: "4.00",
//       gradeObtained: "A",
//       gradePoint: "8",
//       earnedGRPoints: "32",
//       remarks: "E,C",
//     },
//     {
//       paperCode: "19201645",
//       paperName: "Statistics Paper-XV",
//       credits: "4.00",
//       gradeObtained: "O",
//       gradePoint: "10",
//       earnedGRPoints: "40",
//       remarks: "E,C",
//     },
//     {
//       paperCode: "19201646",
//       paperName: "Statistics Practical-I",
//       credits: "4.00",
//       gradeObtained: "O",
//       gradePoint: "10",
//       earnedGRPoints: "40",
//       remarks: "E,C",
//     },
//     {
//       paperCode: "19201647",
//       paperName: "Statistics Practical-II",
//       credits: "4.00",
//       gradeObtained: "O",
//       gradePoint: "10",
//       earnedGRPoints: "40",
//       remarks: "E,C",
//     },
//     {
//       paperCode: "19201648",
//       paperName: "Statistics Practical-III",
//       credits: "4.00",
//       gradeObtained: "O",
//       gradePoint: "10",
//       earnedGRPoints: "40",
//       remarks: "E,C",
//     },
//     {
//       paperCode: "19201649",
//       paperName: "Statistics Practical-IV",
//       credits: "4.00",
//       gradeObtained: "O",
//       gradePoint: "10",
//       earnedGRPoints: "40",
//       remarks: "E,C",
//     },
//     {
//       paperCode: "19201650",
//       paperName: "Statistics Paper-XVI Quality Management and Reliability",
//       credits: "4.00",
//       gradeObtained: "O",
//       gradePoint: "10",
//       earnedGRPoints: "40",
//       remarks: "E,C",
//     },
//   ],
// }];

// export const solMarksheet202301020072275: ISolMarksheet[] = [{
//   examEvent: "MAR-2024",
//   barcode: `${process.cwd()}/public/collegeLogo/KAMBLE ONKAR DINESH (USHA).png`, // Not present in the PDF
//   studentName: "KAMBLE ONKAR DINESH (USHA)",
//   studentPhoto: `${process.cwd()}/public/Student Photos/KAMBLE ONKAR DINESH (USHA).png`, // URL to the photo if available
//   totalMarks: 3300, // Based on total EGP
//   totalObtainMarks: "2520", // Not explicitly available
//   percentage: "76.36%", // Derived from SGPA, not directly provided
//   DBOEESignature: `${process.cwd()}/public/collegeLogo/Sol_DBOEE_ANDHARE_SIR.jpeg`, // Provided at the end of the PDF
//   specialization: "Chemistry", // Based on subjects
//   courseFullName: "Bachelor of Science (Hons) B.Sc (with Credits)", 
//   prnNo: "202301020072275",
//   resultDate: "24 September 2024",
//   collegeName: "D.B.F. Dayanand College of Arts and Science, Solapur",
//   examCenter: "Hirachand Nemchand College of Commerce, Solapur",
//   finalGrade: "A+", // Not provided in the PDF
//   seatNo: "334600",
//   courseName: "B.Sc-III Sem-VI", // Based on the statement
//   examination: "Bachelor of Science (Hons) B.Sc - Regular - CBCS Pattern",
//   ECAMark: "", // Not provided
//   totalCredit: "132", // Based on cumulative total credits
//   totalEgp: "1182.00", // Based on cumulative total EGP
//   subjectName: "", // Not explicitly needed, as subjects are separately listed
//   sgpa: "8.95", // Based on cumulative SGPA
//   status: "Pass",
//   evenSemesterCredits: [
//     {
//       semesterName: "Sem-VI",
//       credits: 32,
//       egp: "304.00",
//       sgpa: "9.50",
//       status: "Pass",
//       seatNo: "334600",
//       examEvent: "MAR-2024",
//     }
//   ],
//   oddSemesterCredits: [
//     {
//       semesterName: "Sem-V",
//       credits: 16,
//       egp: "136.00",
//       sgpa: "8.50",
//       status: "Pass",
//       seatNo: "334600",
//       examEvent: "MAR-2024",
//     }
//   ],
//   ordinance: "NA",
//   statementNo: "2922087",
//   examMonthAndYear: "March-2024",
//   previousYearData: [
//     {
//       seatNo: "2010714",
//       year: "B.Sc(Hons)-I",
//       examEvent: "MAR-2021",
//       totalCredits: "48",
//       egp: "448.00",
//       sgpa: "9.33",
//     },
//     {
//       seatNo: "208622",
//       year: "B.Sc(Hons)-II",
//       examEvent: "MAR-2023",
//       totalCredits: "36",
//       egp: "294.00",
//       sgpa: "8.17",
//     },
//     {
//       seatNo: "334600",
//       year: "B.Sc(Hons)-III",
//       examEvent: "MAR-2024",
//       totalCredits: "48",
//       egp: "440.00",
//       sgpa: "9.17",
//     },
//   ], // No previous year data provided
//   oddSemesterSubjects: [
//     {
//       paperCode: "19201500",
//       paperName: "Compulsory English",
//       credits: "2.00",
//       gradeObtained: "A",
//       gradePoint: "8",
//       earnedGRPoints: "16",
//       remarks: "E,X"
//     },
//     {
//       paperCode: "19201506",
//       paperName: "Chemistry Paper-IX",
//       credits: "4.00",
//       gradeObtained: "A+",
//       gradePoint: "9",
//       earnedGRPoints: "36",
//       remarks: "E,X"
//     },
//     {
//       paperCode: "19201507",
//       paperName: "Chemistry Paper-X",
//       credits: "4.00",
//       gradeObtained: "A+",
//       gradePoint: "9",
//       earnedGRPoints: "36",
//       remarks: "E,X"
//     },
//     {
//       paperCode: "19201508",
//       paperName: "Chemistry Paper-XI",
//       credits: "4.00",
//       gradeObtained: "A",
//       gradePoint: "8",
//       earnedGRPoints: "32",
//       remarks: "E,X"
//     },
//     {
//       paperCode: "19201509",
//       paperName: "Chemistry Paper-XII Analytical and Industrial Physical Chemistry",
//       credits: "4.00",
//       gradeObtained: "A",
//       gradePoint: "8",
//       earnedGRPoints: "32",
//       remarks: "E,X"
//     }
//   ],
//   evenSemesterSubjects: [
//     {
//       paperCode: "19201600",
//       paperName: "Compulsory English",
//       credits: "4.00",
//       gradeObtained: "A+",
//       gradePoint: "9",
//       earnedGRPoints: "18",
//       remarks: "E,C"
//     },
//     {
//       paperCode: "19201610",
//       paperName: "Chemistry Paper-XIII",
//       credits: "4.00",
//       gradeObtained: "A+",
//       gradePoint: "9",
//       earnedGRPoints: "36",
//       remarks: "E,C"
//     },
//     {
//       paperCode: "19201611",
//       paperName: "Chemistry Paper-XIV",
//       credits: "4.00",
//       gradeObtained: "O",
//       gradePoint: "10",
//       earnedGRPoints: "40",
//       remarks: "E,C"
//     },
//     {
//       paperCode: "19201612",
//       paperName: "Chemistry Paper-XV",
//       credits: "4.00",
//       gradeObtained: "A+",
//       gradePoint: "9",
//       earnedGRPoints: "36",
//       remarks: "E,C"
//     },
//     {
//       paperCode: "19201613",
//       paperName: "Chemistry Practical-I",
//       credits: "4.00",
//       gradeObtained: "O",
//       gradePoint: "10",
//       earnedGRPoints: "40",
//       remarks: "E,C"
//     },
//     {
//       paperCode: "19201614",
//       paperName: "Chemistry Practical-II",
//       credits: "4.00",
//       gradeObtained: "O",
//       gradePoint: "10",
//       earnedGRPoints: "40",
//       remarks: "E,C"
//     },
//     {
//       paperCode: "19201615",
//       paperName: "Chemistry Practical-III",
//       credits: "4.00",
//       gradeObtained: "A",
//       gradePoint: "8",
//       earnedGRPoints: "32",
//       remarks: "E,C"
//     },
//     {
//       paperCode: "19201616",
//       paperName: "Chemistry Practical-IV",
//       credits: "4.00",
//       gradeObtained: "O",
//       gradePoint: "10",
//       earnedGRPoints: "40",
//       remarks: "E,C"
//     },
//     {
//       paperCode: "19201617",
//       paperName: "Chemistry Paper-XVI Analytical and Industrial Organic Chemistry",
//       credits: "4.00",
//       gradeObtained: "O",
//       gradePoint: "10",
//       earnedGRPoints: "40",
//       remarks: "E,C"
//     }
//   ]
// }];


// export const solMarksheet202201023042006: ISolMarksheet[] = [{
//   examEvent: "MAR-2024",
//   barcode: `${process.cwd()}/public/collegeLogo/WAYDANDE APARNA ASHOK (LAXMI).png`, // Not present in the PDF
//   studentName: "WAYDANDE APARNA ASHOK (LAXMI)",
//   studentPhoto: `${process.cwd()}/public/Student Photos/WAYDANDE APARNA ASHOK (LAXMI).png`, // URL to the photo if available
//   totalMarks: 3300, // Based on total EGP
//   totalObtainMarks: "2351", // Not explicitly available
//   percentage: "71.24%", // Derived from SGPA, not directly provided
//   DBOEESignature: `${process.cwd()}/public/collegeLogo/Sol_DBOEE_ANDHARE_SIR.jpeg`, // Provided at the end of the PDF
//   specialization: "Mathematics", // Based on subjects
//   courseFullName: "Bachelor of Science (Hons) B.Sc (with Credits)", 
//   prnNo: "202201023042006",
//   resultDate: "25 September 2024",
//   collegeName: "Shankarrao Mohite Mahavidyalaya, Akluj (SMM)",
//   examCenter: "Shankarrao Mohite Mahavidyalaya, Akluj (SMM)",
//   finalGrade: "A", // Not provided in the PDF
//   seatNo: "336702",
//   courseName: "B.Sc-III Sem-VI", // Based on the statement
//   examination: "Bachelor of Science (Hons) B.Sc - Regular - CBCS Pattern",
//   ECAMark: "", // Not provided
//   totalCredit: "132", // Based on cumulative total credits
//   totalEgp: "1082.00", // Based on cumulative total EGP
//   subjectName: "", // Not explicitly needed, as subjects are separately listed
//   sgpa: "8.20", // Based on cumulative SGPA
//   status: "Pass",
//   evenSemesterCredits: [
//     {
//       semesterName: "Sem-VI",
//       credits: 32,
//       egp: "260.00",
//       sgpa: "8.13",
//       status: "Pass",
//       seatNo: "336702",
//       examEvent: "MAR-2024",
//     }
//   ],
//   oddSemesterCredits: [
//     {
//       semesterName: "Sem-V",
//       credits: 16,
//       egp: "76.00",
//       sgpa: "4.75",
//       status: "Pass",
//       seatNo: "336702",
//       examEvent: "MAR-2024",
//     }
//   ],
//   ordinance: "NA",
//   statementNo: "2922000",
//   examMonthAndYear: "March-2024",
//   previousYearData: [
//     {
//       seatNo: "2012898",
//       year: "B.Sc(Hons)-I",
//       examEvent: "MAR-2021",
//       totalCredits: "48",
//       egp: "424.00",
//       sgpa: "8.83",
//     },
//     {
//       seatNo: "034290",
//       year: "B.Sc(Hons)-II",
//       examEvent: "MAR-2023",
//       totalCredits: "36",
//       egp: "322.00",
//       sgpa: "8.94",
//     },
//     {
//       seatNo: "336702",
//       year: "B.Sc(Hons)-III",
//       examEvent: "MAR-2024",
//       totalCredits: "48",
//       egp: "336.00",
//       sgpa: "7.00",
//     },
//   ],
//   oddSemesterSubjects: [
//     {
//       paperCode: "19201500",
//       paperName: "Compulsory English",
//       credits: "2.00",
//       gradeObtained: "A+",
//       gradePoint: "9",
//       earnedGRPoints: "18",
//       remarks: "E,X"
//     },
//     {
//       paperCode: "19201524",
//       paperName: "Mathematics Paper-IX",
//       credits: "4.00",
//       gradeObtained: "C",
//       gradePoint: "4",
//       earnedGRPoints: "16",
//       remarks: "E,X"
//     },
//     {
//       paperCode: "19201525",
//       paperName: "Mathematics Paper-X",
//       credits: "4.00",
//       gradeObtained: "C+",
//       gradePoint: "5",
//       earnedGRPoints: "20",
//       remarks: "E,X"
//     },
//     {
//       paperCode: "19201526",
//       paperName: "Mathematics Paper-XI",
//       credits: "4.00",
//       gradeObtained: "C+",
//       gradePoint: "5",
//       earnedGRPoints: "20",
//       remarks: "E,C"
//     },
//     {
//       paperCode: "19201527-A",
//       paperName: "Mathematics Paper-XII-A",
//       credits: "4.00",
//       gradeObtained: "C+",
//       gradePoint: "5",
//       earnedGRPoints: "20",
//       remarks: "E,C"
//     }
//   ],
//   evenSemesterSubjects: [
//     {
//       paperCode: "19201600",
//       paperName: "Compulsory English",
//       credits: "4.00",
//       gradeObtained: "O",
//       gradePoint: "10",
//       earnedGRPoints: "20",
//       remarks: "E,C"
//     },
//     {
//       paperCode: "19201635",
//       paperName: "Mathematics Paper-XIII",
//       credits: "4.00",
//       gradeObtained: "C+",
//       gradePoint: "5",
//       earnedGRPoints: "20",
//       remarks: "E,C"
//     },
//     {
//       paperCode: "19201636",
//       paperName: "Mathematics Paper-XIV",
//       credits: "4.00",
//       gradeObtained: "A",
//       gradePoint: "8",
//       earnedGRPoints: "32",
//       remarks: "E,C"
//     },
//     {
//       paperCode: "19201637",
//       paperName: "Mathematics Paper-XV",
//       credits: "4.00",
//       gradeObtained: "B+",
//       gradePoint: "7",
//       earnedGRPoints: "28",
//       remarks: "E,C"
//     },
//     {
//       paperCode: "19201638-A",
//       paperName: "Mathematics Paper-XVI-A",
//       credits: "4.00",
//       gradeObtained: "A",
//       gradePoint: "8",
//       earnedGRPoints: "32",
//       remarks: "E,C"
//     },
//     {
//       paperCode: "19201639",
//       paperName: "Mathematics Practical-I",
//       credits: "4.00",
//       gradeObtained: "A+",
//       gradePoint: "9",
//       earnedGRPoints: "36",
//       remarks: "E,C"
//     },
//     {
//       paperCode: "19201640",
//       paperName: "Mathematics Practical-II",
//       credits: "4.00",
//       gradeObtained: "A+",
//       gradePoint: "9",
//       earnedGRPoints: "36",
//       remarks: "E,C"
//     },
//     {
//       paperCode: "19201641",
//       paperName: "Mathematics Practical-III",
//       credits: "4.00",
//       gradeObtained: "A+",
//       gradePoint: "9",
//       earnedGRPoints: "36",
//       remarks: "E,C"
//     },
//     {
//       paperCode: "19201642",
//       paperName: "Mathematics Practical-IV",
//       credits: "4.00",
//       gradeObtained: "O",
//       gradePoint: "10",
//       earnedGRPoints: "40",
//       remarks: "E,C"
//     }
//   ]
// }];

// export const solMarksheet202301058070128: ISolMarksheet[] = [{
//   examEvent: "MAR-2024",
//   barcode: "", // Not provided in the PDF
//   studentName: "CHAVAN RAVIRAJ SHIVAJI (NALINI)",
//   studentPhoto: "", // Not provided
//   totalMarks: 200, // Sum of credits (20+20 for Sem-V and Sem-VI)
//   totalObtainMarks: 128, // Total EGP
//   percentage: "32%", // Calculated as (Total EGP / Total Marks) * 100
//   DBOEESignature: "",
//   specialization: "", // Not provided
//   courseFullName: "LL.B.-III Sem-VI",
//   prnNo: "202301058070128",
//   resultDate: "28-Aug-2024",
//   collegeName: "Karmaveer Audumbar Patil Law College, Pandharpur (KAPLC)",
//   examCenter: "Karmveer Bhaurao Patil Mahavidyalay, Pandharpur (KBP)",
//   finalGrade: "", // Not explicitly provided
//   seatNo: "329812",
//   courseName: "LL.B.-III Sem-VI",
//   examination: "LL.B.-III",
//   ECAMark: "", // Not available
//   totalCredit: "40", // Total credits for Sem-V and Sem-VI
//   totalEgp: "128.00", // EGP for Sem-V and Sem-VI combined
//   subjectName: "", // General subject name
//   sgpa: "3.20",
//   status: "Fail",
//   evenSemesterCredits: [
//     {
//       semesterName: "Sem-VI",
//       credits: 20,
//       egp: "44.00",
//       sgpa: "2.20",
//       status: "Fail",
//       seatNo: "329812",
//       examEvent: "MAR-2024"
//     }
//   ],
//   oddSemesterCredits: [
//     {
//       semesterName: "Sem-V",
//       credits: 20,
//       egp: "84.00",
//       sgpa: "4.20",
//       status: "Fail",
//       seatNo: "329812",
//       examEvent: "MAR-2024"
//     }
//   ],
//   ordinance: "NA", // Provided in the PDF
//   statementNo: "2931430",
//   examMonthAndYear: "MAR-2024",
//   previousYearData: [], // Not available in the current PDF
//   oddSemesterSubjects: [
//     {
//       paperCode: "19602501",
//       paperName: "Law of Crimes-II (Cr. P.C.)",
//       credits: "4.00",
//       gradeObtained: "A",
//       gradePoint: "8",
//       earnedGRPoints: "32",
//       remarks: "E,C"
//     },
//     {
//       paperCode: "19602502",
//       paperName: "Law of Evidence",
//       credits: "4.00",
//       gradeObtained: "F",
//       gradePoint: "0",
//       earnedGRPoints: "0",
//       remarks: "FC,C"
//     },
//     {
//       paperCode: "19602503",
//       paperName: "Civil Procedure Code and Limitation Act",
//       credits: "4.00",
//       gradeObtained: "B",
//       gradePoint: "6",
//       earnedGRPoints: "24",
//       remarks: "E,C"
//     },
//     {
//       paperCode: "19602504",
//       paperName: "Principles of Taxation Law",
//       credits: "4.00",
//       gradeObtained: "F",
//       gradePoint: "0",
//       earnedGRPoints: "0",
//       remarks: "FC,C"
//     },
//     {
//       paperCode: "19602505",
//       paperName: "Company Law",
//       credits: "4.00",
//       gradeObtained: "B+",
//       gradePoint: "7",
//       earnedGRPoints: "28",
//       remarks: "E,C"
//     }
//   ],
//   evenSemesterSubjects: [
//     {
//       paperCode: "19602601",
//       paperName: "Drafting, Pleading & Conveyance (Clinical Course)",
//       credits: "4.00",
//       gradeObtained: "F",
//       gradePoint: "0",
//       earnedGRPoints: "0",
//       remarks: "FR,C"
//     },
//     {
//       paperCode: "19602602",
//       paperName: "Moot Court, Exercise and Internship (Clinical Course)",
//       credits: "4.00",
//       gradeObtained: "F",
//       gradePoint: "0",
//       earnedGRPoints: "0",
//       remarks: "FC,C"
//     },
//     {
//       paperCode: "19602604",
//       paperName: "Equity & Trust",
//       credits: "4.00",
//       gradeObtained: "F",
//       gradePoint: "0",
//       earnedGRPoints: "0",
//       remarks: "FC,C"
//     },
//     {
//       paperCode: "19602605",
//       paperName: "Land Laws Including Tenure & Tenancy System",
//       credits: "4.00",
//       gradeObtained: "C+",
//       gradePoint: "5",
//       earnedGRPoints: "20",
//       remarks: "FC,C"
//     },
//     {
//       paperCode: "19602608",
//       paperName: "International Human Rights",
//       credits: "4.00",
//       gradeObtained: "B",
//       gradePoint: "6",
//       earnedGRPoints: "24",
//       remarks: "E,C"
//     }
//   ]
// }];

export const solMarksheet202301014074115: ISolMarksheet[] = [ {
      examEvent: "MAR-2024",
      barcode:`${process.cwd()}/public/collegeLogo/BADURWALE VAISHNAVI MANOJ (RAJASHRI).png`, // Add barcode if available.
      studentName: "BADURWALE VAISHNAVI MANOJ (RAJASHRI)",
      studentPhoto: `${process.cwd()}/public/Student Photos/BADURWALE VAISHNAVI MANOJ (RAJASHRI).png`, // Add photo URL if available.
      totalMarks: 0, // Add total marks.
      totalObtainMarks: "-", // Example value.
      percentage: "62.5%", // Derived from SGPA.
      DBOEESignature: `${process.cwd()}/public/collegeLogo/Sol_DBOEE_ANDHARE_SIR.jpeg`, // Add signature details.
      specialization: "Humanities",
      courseFullName: "Bachelor of Arts (Hons) B.A (with Credits)",
      prnNo: "202301014074115 (2019032500001016)",
      resultDate: "30 November 2024",
      collegeName: "Chhatrapati Shivaji Night College of Arts and Commerce, Solapur (CSNC)",
      examCenter: "Solapur Social Association's Arts and Commerce College, Solapur (SSA)",
      finalGrade: "F",
      seatNo: "344771",
      courseName: "B.A. (Hons)-III",
      examination: "Sem-VI",
      ECAMark: "", // Add if applicable.
      totalCredit: "204.00",
      totalEgp: "1458.00",
      subjectName: "", // Add if applicable.
      sgpa: "7.15",
      status: "Fail",
      evenSemesterCredits: [
          {
              semesterName: "Sem-VI",
              credits: 34,
              egp: "182.00",
              sgpa: "5.35",
              status: "Fail",
              seatNo: "344771",
              examEvent: "MAR-2024",
          },
      ],
      oddSemesterCredits: [
          {
              semesterName: "Sem-V",
              credits: 34,
              egp: "126.00",
              sgpa: "3.71",
              status: "ATKT",
              seatNo: "184221",
              examEvent: "MAR-2024",
          },
      ],
      ordinance: "NA",
      statementNo: "2927944",
      examMonthAndYear: "March-2024",
      previousYearData: [
        {
          seatNo: "900101",
          year: "B.A.-I",
          examEvent: "MAR-2021",
          totalCredits: "68",
          egp: "506.00",
          sgpa: "7.44",
          status: 'PASS'
        },
        {
          seatNo: "900101",
          year: "B.A.-II",
          examEvent: "MAR-2021",
          totalCredits: "68",
          egp: "644.00",
          sgpa: "9.47",
          status: 'PASS'
        },
        {
          seatNo: "34471",
          year: "B.A.-III",
          examEvent: "MAR-2024",
          totalCredits: "68",
          egp: "308.00",
          sgpa: "4.53",
          status: 'FAIL'
        },
      ],
      oddSemesterSubjects: [
        {
            paperCode: "19101501",
            paperName: "Compulsory English",
            credits: "4.00",
            gradeObtained: "F",
            gradePoint: "0",
            earnedGRPoints: "0",
            remarks: "FC,C",
        },
        {
            paperCode: "19101567",
            paperName: "Optional Economics-VII",
            credits: "6.00",
            gradeObtained: "C+",
            gradePoint: "5",
            earnedGRPoints: "30",
            remarks: "E,C",
        },
        {
            paperCode: "19101568",
            paperName: "Optional Economics-VIII",
            credits: "6.00",
            gradeObtained: "C+",
            gradePoint: "5",
            earnedGRPoints: "30",
            remarks: "E,C",
        },
        {
            paperCode: "19101569",
            paperName: "Optional Economics-IX",
            credits: "6.00",
            gradeObtained: "F",
            gradePoint: "0",
            earnedGRPoints: "0",
            remarks: "FC,C",
        },
        {
            paperCode: "19101570",
            paperName: "Optional Economics-X",
            credits: "6.00",
            gradeObtained: "B",
            gradePoint: "6",
            earnedGRPoints: "36",
            remarks: "E,C",
        },
        {
            paperCode: "19101571",
            paperName: "Optional Economics-XI",
            credits: "6.00",
            gradeObtained: "C+",
            gradePoint: "5",
            earnedGRPoints: "30",
            remarks: "E,C",
        },
    ],
     evenSemesterSubjects: [
        {
            paperCode: "19101601",
            paperName: "Compulsory English",
            credits: "4.00",
            gradeObtained: "A",
            gradePoint: "8",
            earnedGRPoints: "32",
            remarks: "E,C",
        },
        {
            paperCode: "19101667",
            paperName: "Optional Economics-XII",
            credits: "6.00",
            gradeObtained: "F",
            gradePoint: "0",
            earnedGRPoints: "0",
            remarks: "FC,C",
        },
        {
            paperCode: "19101668",
            paperName: "Optional Economics-XIII",
            credits: "6.00",
            gradeObtained: "C+",
            gradePoint: "5",
            earnedGRPoints: "30",
            remarks: "E,C",
        },
        {
            paperCode: "19101669",
            paperName: "Optional Economics-XIV",
            credits: "6.00",
            gradeObtained: "A",
            gradePoint: "8",
            earnedGRPoints: "48",
            remarks: "E,C",
        },
        {
            paperCode: "19101670",
            paperName: "Optional Economics-XV",
            credits: "6.00",
            gradeObtained: "B",
            gradePoint: "6",
            earnedGRPoints: "36",
            remarks: "E,C",
        },
        {
            paperCode: "19101671",
            paperName: "Optional Economics-XVI",
            credits: "6.00",
            gradeObtained: "B",
            gradePoint: "6",
            earnedGRPoints: "36",
            remarks: "E,C",
        },
    ],
}];


