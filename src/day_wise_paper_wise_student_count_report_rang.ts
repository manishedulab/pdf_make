import ExcelJS from 'exceljs';
import { createFolderIfNotExists, SolapurPdf } from './constant/constant';
import path from 'path';
import { IDayWiseCenterWisePaperWiseStudentCountReportInRange } from './types';


export const DayWiseCenterWisePaperWiseStudentCountReportInRangeExcelGeneration = async (folderPath:string, students: IDayWiseCenterWisePaperWiseStudentCountReportInRange[]) => {
    const date = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
    const dateWithTime = new Date().toLocaleString();

    await Promise.all(students.map(async (data) => {
      // Create a new workbook and worksheet
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet('DateWiseCourseWisePaperWiseStud');



      // Define the Times New Roman font style
      const timesNewRomanFont = {
        name: 'Times New Roman',
        size: 12, // Adjust the size as needed
        bold: false, // Set to true if you want the text bold
        italic: false, // Set to true if you want the text italic
      };

      // Row 1: Title (Merge columns C to F)
      worksheet.mergeCells('E1', 'K1');
      worksheet.getCell('E1').value = `${SolapurPdf.universityName}`;
      worksheet.getCell('E2').value = `${SolapurPdf.universityAddress}`;
      worksheet.getCell('K3').value = `Printed on: ${date}`;
      worksheet.getCell('E4').value = `${data.requestType}`;
      // Apply styles to all cells
      ['D8', 'E8', 'F8', 'G8', 'H8', 'I8', 'J8', 'K8'].forEach((cellId:any) => {
        const cell = worksheet.getCell(cellId);
        cell.font = timesNewRomanFont;
        cell.alignment = { horizontal: 'center', vertical: 'middle' };
        cell.style.border = {
          top: { style: 'thin', color: { argb: '000000' } },
          left: { style: 'thin', color: { argb: '000000' } },
          bottom: { style: 'thin', color: { argb: '000000' } },
          right: { style: 'thin', color: { argb: '000000' } },
        };
      });
  

      // Empty rows
    //   worksheet.addRow([]);
    //   worksheet.addRow([]);
    //   worksheet.addRow([]);

    //   worksheet.mergeCells('B4', 'D4');
      // Degree and Semester information
    //   worksheet.getCell('B4').value = 'Degree:';
    //   worksheet.getCell('B4').font = timesNewRomanFont;
    //   worksheet.getCell('B4').style.border = {
    //     top: { style: 'thin', color: { argb: '#00000' } },
    //     left: { style: 'thin', color: { argb: '#00000' } },
    //     bottom: { style: 'thin', color: { argb: '#00000' } },
    //     right: { style: 'thin', color: { argb: '#00000' } },
    //   };

      // Row 1: Merged Cells for Main Categories
    //   worksheet.mergeCells('A7', 'A8'); // Merging for "Subject Code"
    //   worksheet.mergeCells('B7', 'B8'); // Merging for "Subject Name"
    //   worksheet.mergeCells('C7', 'C8'); // Merging for "No. of Students"
    //   worksheet.mergeCells('D7', 'K7'); // Merging for "No. of Student with the following grades"
    //   worksheet.mergeCells('L7', 'L8'); // Merging for "Pass %"
    //   worksheet.mergeCells('M7', 'M8'); // Merging for "Fail %"
    //   worksheet.mergeCells('N7', 'N8'); // Merging for "GPA"

      // Setting values and aligning them to the center
    //   worksheet.getCell('A7').value = 'Subject Code';
    //   worksheet.getCell('B7').value = 'Subject Name';
    //   worksheet.getCell('C7').value = 'No. of Students';
    //   worksheet.getCell('D7').value = 'No. of Student with the following grades';
    //   worksheet.getCell('L7').value = 'Pass %';
    //   worksheet.getCell('M7').value = 'Fail %';

      // Center the text both horizontally and vertically for the merged cells
    //   ['A7', 'B7', 'C7', 'D7', 'L7', 'M7'].forEach((cell:any) => {
    //     worksheet.getCell(cell).alignment = { horizontal: 'center', vertical: 'middle' };
    //     worksheet.getCell(cell).font = timesNewRomanFont;
    //     worksheet.getCell(cell).style.border = {
    //       top: { style: 'thin', color: { argb: '#00000' } },
    //       left: { style: 'thin', color: { argb: '#00000' } },
    //       bottom: { style: 'thin', color: { argb: '#00000' } },
    //       right: { style: 'thin', color: { argb: '#00000' } },
    //     };
    //   });

      // Row 2: Subcategories under "No. of Student with the following grades"
    //   worksheet.getCell('D8').value = 'O';
    //   worksheet.getCell('E8').value = 'A+';
    //   worksheet.getCell('F8').value = 'A';
    //   worksheet.getCell('G8').value = 'B+';
    //   worksheet.getCell('H8').value = 'B';
    //   worksheet.getCell('I8').value = 'C';
    //   worksheet.getCell('J8').value = 'D';
    //   worksheet.getCell('K8').value = 'F';

      // Center the text for the second row
    //   ['D8', 'E8', 'F8', 'G8', 'H8', 'I8', 'J8', 'K8'].forEach((cell:any) => {
    //     worksheet.getCell(cell).alignment = { horizontal: 'center', vertical: 'middle' };
    //     worksheet.getCell(cell).font = timesNewRomanFont;
    //     worksheet.getCell(cell).style.border = {
    //       top: { style: 'thin', color: { argb: '#00000' } },
    //       left: { style: 'thin', color: { argb: '#00000' } },
    //       bottom: { style: 'thin', color: { argb: '#00000' } },
    //       right: { style: 'thin', color: { argb: '#00000' } },
    //     };
    //   });

      // Optional: Set column widths to improve the appearance
    //   worksheet.columns = [
    //     { width: 15 }, // Subject Code
    //     { width: 35 }, // Subject Name
    //     { width: 20 }, // No. of Students
    //     { width: 10 }, // Grade O
    //     { width: 10 }, // Grade A+
    //     { width: 10 }, // Grade A
    //     { width: 10 }, // Grade B+
    //     { width: 10 }, // Grade B
    //     { width: 10 }, // Grade C
    //     { width: 10 }, // Grade D
    //     { width: 10 }, // Grade F
    //     { width: 10 }, // Pass %
    //     { width: 10 }, // Fail %
    //   ];

      // // Adding the subject details
      // data.subjectsDetail.forEach((subject:any) => {
      //   const row = worksheet.addRow([
      //     subject.subjectCode, subject.subjectName, subject.noOfStudentsAsPerSubject,
      //     subject.noOfStudentsWithGradeO, subject.noOfStudentsWithGradeAPlus,
      //     subject.noOfStudentsWithGradeA, subject.noOfStudentsWithGradeBPlus,
      //     subject.noOfStudentsWithGradeB, subject.noOfStudentsWithGradeC,
      //     subject.noOfStudentsWithGradeD, subject.noOfStudentsWithGradeF,
      //     subject.passPercentageAsPerSubject, subject.failPercentageAsPerSubject,
      //   ]);

      //   // Align 'Subject Name' to the left and other cells to the center
      //   row.eachCell((cell:any, colNumber:number) => {
      //     const styledCell = cell;
      //     if (colNumber === 2) {
      //       styledCell.alignment = { horizontal: 'left', vertical: 'middle' }; // Left alignment for Subject Name
      //       styledCell.font = timesNewRomanFont;
      //       styledCell.style.border = {
      //         top: { style: 'thin', color: { argb: '#00000' } },
      //         left: { style: 'thin', color: { argb: '#00000' } },
      //         bottom: { style: 'thin', color: { argb: '#00000' } },
      //         right: { style: 'thin', color: { argb: '#00000' } },
      //       };
      //     } else {
      //       styledCell.alignment = { horizontal: 'center', vertical: 'middle' }; // Center alignment for all others
      //       styledCell.font = timesNewRomanFont;
      //       styledCell.style.border = {
      //         top: { style: 'thin', color: { argb: '#00000' } },
      //         left: { style: 'thin', color: { argb: '#00000' } },
      //         bottom: { style: 'thin', color: { argb: '#00000' } },
      //         right: { style: 'thin', color: { argb: '#00000' } },
      //       };
      //     }
      //   });
      // });

      // const newRow = data.subjectsDetail.length + 11;
      // const newRowData = newRow + 1;

      // // Merged Cells for Main Categories
      // worksheet.mergeCells(`A${newRow}`, `A${newRowData}`); // Merging for "Sr. No"
      // worksheet.mergeCells(`B${newRow}`, `B${newRowData}`); // Merging for "Course Name"
      // worksheet.mergeCells(`C${newRow}`, `C${newRowData}`); // Merging for "Semester Name"
      // worksheet.mergeCells(`D${newRow}`, `F${newRow}`); // Merging for "Appeared"
      // worksheet.mergeCells(`G${newRow}`, `I${newRow}`); // Merging for "Pass"
      // worksheet.mergeCells(`J${newRow}`, `L${newRow}`); // Merging for "% Pass"

      // worksheet.getCell(`A${newRow}`).value = 'Sr. No.';
      // worksheet.getCell(`B${newRow}`).value = 'Course Name';
      // worksheet.getCell(`C${newRow}`).value = 'Semester Name';
      // worksheet.getCell(`D${newRow}`).value = 'Appeared';
      // worksheet.getCell(`G${newRow}`).value = 'Pass';
      // worksheet.getCell(`J${newRow}`).value = '% Pass';

      // // Center the text for the second row
      // [`A${newRow}`, `B${newRow}`, `C${newRow}`, `D${newRow}`, `G${newRow}`, `J${newRow}`].forEach((cell:any) => {
      //   worksheet.getCell(cell).alignment = { horizontal: 'center', vertical: 'middle' };
      //   worksheet.getCell(cell).font = timesNewRomanFont;
      //   worksheet.getCell(cell).style.border = {
      //     top: { style: 'thin', color: { argb: '#00000' } },
      //     left: { style: 'thin', color: { argb: '#00000' } },
      //     bottom: { style: 'thin', color: { argb: '#00000' } },
      //     right: { style: 'thin', color: { argb: '#00000' } },
      //   };
      // });

      // // Subcategories under "No. of Student with the following grades"
      // worksheet.getCell(`D${newRowData}`).value = 'Total';
      // worksheet.getCell(`E${newRowData}`).value = 'Boys';
      // worksheet.getCell(`F${newRowData}`).value = 'Girls';
      // worksheet.getCell(`G${newRowData}`).value = 'Total';
      // worksheet.getCell(`H${newRowData}`).value = 'Boys';
      // worksheet.getCell(`I${newRowData}`).value = 'Girls';
      // worksheet.getCell(`J${newRowData}`).value = 'Total';
      // worksheet.getCell(`K${newRowData}`).value = 'Boys';
      // worksheet.getCell(`L${newRowData}`).value = 'Girls';

      // // Center the text for the second row
      // [`D${newRowData}`, `E${newRowData}`, `F${newRowData}`, `G${newRowData}`, `H${newRowData}`, `I${newRowData}`, `J${newRowData}`, `K${newRowData}`, `L${newRowData}`].forEach((cell:any) => {
      //   worksheet.getCell(cell).alignment = { horizontal: 'center', vertical: 'middle' };
      //   worksheet.getCell(cell).font = timesNewRomanFont;
      //   worksheet.getCell(cell).style.border = {
      //     top: { style: 'thin', color: { argb: '#00000' } },
      //     left: { style: 'thin', color: { argb: '#00000' } },
      //     bottom: { style: 'thin', color: { argb: '#00000' } },
      //     right: { style: 'thin', color: { argb: '#00000' } },
      //   };
      // });

      // const row = worksheet.addRow(['1', data.course, data.semester, data.totalAppearedStudents, data.appearedBoys, data.appearedGirls,
      //   data.totalPassStudents, data.passBoys, data.passGirls, data.totalPassPercentageOfStudents, data.passPercentageOfBoys, data.passPercentageOfGirls,
      // ]);

      // // Align 'Subject Name' to the left and other cells to the center
      // row.eachCell((cell:any, colNumber:number) => {
      //   const styledCell = cell;
      //   if (colNumber === 2) {
      //     styledCell.alignment = { horizontal: 'left', vertical: 'middle' }; // Left alignment for Subject Name
      //     styledCell.font = timesNewRomanFont;
      //     styledCell.style.border = {
      //       top: { style: 'thin', color: { argb: '#00000' } },
      //       left: { style: 'thin', color: { argb: '#00000' } },
      //       bottom: { style: 'thin', color: { argb: '#00000' } },
      //       right: { style: 'thin', color: { argb: '#00000' } },
      //     };
      //   } else {
      //     styledCell.alignment = { horizontal: 'center', vertical: 'middle' }; // Center alignment for all others
      //     styledCell.font = timesNewRomanFont;
      //     styledCell.style.border = {
      //       top: { style: 'thin', color: { argb: '#00000' } },
      //       left: { style: 'thin', color: { argb: '#00000' } },
      //       bottom: { style: 'thin', color: { argb: '#00000' } },
      //       right: { style: 'thin', color: { argb: '#00000' } },
      //     };
      //   }
      // });

      const folder = path.join(folderPath, 'ms');
      // Create the folder if it doesn't exist
      createFolderIfNotExists(folder);

      // Save the workbook to a file (optional)
      const filePath = path.join(folder, 'Result_Analysis.xlsx');
      await workbook.xlsx.writeFile(filePath);
    }));
  };
