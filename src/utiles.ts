import bwipjs from 'bwip-js';

export const collegeLogo = (data: string) => {
    let logo = "";
  
    if (data) {
      switch (data) {
        case "Hassaram Rijhumal College":
          logo = `${process.cwd()}/public/collegeLogo/HR.png`;
          break;
        case "Kishinchand Chellaram College":
          logo = `${process.cwd()}/img/KCC_Mumbai_logo.svg.png`;
          break;
        case "Bombay Teachers' Training College":
          logo = `${process.cwd()}/public/collegeLogo/BTTC golden.png`;
          break;
        case "School of Applied Sciences":
          logo = `${process.cwd()}/public/collegeLogo/SAS_Logo_final.png`;
          break;
        case "Niranjan Hiranandani School of Management and Real Estate":
          logo = `${process.cwd()}/public/collegeLogo/NHSMRE_Logo_2.png`;
          break;
        case "D.M. Harish School of Law":
          logo = `${process.cwd()}/public/collegeLogo/DMHSL.png`;
          break;
        case "School of Humanities and Social Sciences":
          logo = `${process.cwd()}/public/collegeLogo/SHS LOGO.png`;
          break;
        case "School of Performing Arts":
          logo = `${process.cwd()}/public/collegeLogo/SOPA_Logo.png`;
          break;
        case "Chellaram School of Yoga and Wellness":
          logo = `${process.cwd()}/public/collegeLogo/SOY_final.png`;
          break;
      }
    }
    return logo
};

export function numberToWordsINR(number:number) {
  const singleDigits = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
  const teenDigits = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  const tensDigits = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

  if (number === 0) {
    return 'zero rupees';
  }

  function convertBelowThousand(n:number) {
    let result = '';

    if (n >= 100) {
      result += singleDigits[Math.floor(n / 100)] + ' hundred ';
      n %= 100;
    }

    if (n >= 20) {
      result += tensDigits[Math.floor(n / 10)] + ' ';
      n %= 10;
    } else if (n >= 10) {
      result += teenDigits[n - 10] + ' ';
      n = 0;
    }

    if (n > 0) {
      result += singleDigits[n] + ' ';
    }

    return result;
  }

  let words = '';
  let crores = Math.floor(number / 10000000);
  number %= 10000000;

  if (crores > 0) {
    words += convertBelowThousand(crores) + 'Crore ';
  }

  let lakhs = Math.floor(number / 100000);
  number %= 100000;

  if (lakhs > 0) {
    words += convertBelowThousand(lakhs) + 'Lakh ';
  }

  let thousands = Math.floor(number / 1000);
  number %= 1000;

  if (thousands > 0) {
    words += convertBelowThousand(thousands) + 'Thousand ';
  }

  words += convertBelowThousand(number);
  words += 'Rupees';

  return words.trim();
}

// Example usage
// console.log(numberToWordsINR(123456789)); // Output: "twelve crore thirty four lakh fifty six thousand seven hundred eighty nine rupees"
// console.log(numberToWordsINR(987654321)); // Output: "ninety eight crore seventy six lakh fifty four thousand three hundred twenty one rupees"
// console.log(numberToWordsINR(100)); // Output: "one hundred rupees"

export function intToRoman(num: number): string {
  const romanNumerals: [number, string][] = [
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];
  let result = "";
  for (const [value, symbol] of romanNumerals) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }
  return result;
}

export const getBarcodeByPrnNo = async (prnNo: string) => {
  const barcodeOptions: bwipjs.RenderOptions = {
    bcid: 'code128',
    text: `${prnNo}` || `BARCODE-${prnNo}`,
    scale: 1,
    height: 8,
  };
  const pngBuffer = await new Promise<Buffer>((resolve, reject) => {
    bwipjs.toBuffer(barcodeOptions, (err, buffer) => {
      if (err) {
        reject(new Error('Error while generating Barcode'));
      } else {
        resolve(buffer);
      }
    });
  });
  const dataURL = `data:image/png;base64,${pngBuffer.toString('base64')}`;
  return dataURL;
};

export const  pdfFunctionForTableCreation = (student:any) => {
  
  let oddMarkTheory = 0
  let oddMarkPractical = 0
  let oddMarkTheoryColumnWidth = 0
  for(let m = 0; m < student.oddSemesterdata.marks.length; m++) {
    oddMarkTheory = student.oddSemesterdata.marks[m].theory.length;
    oddMarkPractical = student.oddSemesterdata.marks[m].practical.length;
  }
  
  const table10:any = {
    widths: [60, 30, ...Array.from({ length: oddMarkTheory*2 }, () => 25), 22, 22, 22, 30, ...Array.from({ length: oddMarkPractical*2 }, () => 25), 22, 22, 22, 22, 22, 22, 15, 20, 20, 22, 22],
    headerRows: 1,
    body: [
      [
        {
          text: ``,
          alignment: "center",
          bold: true,
          border: [true, true, true, false],
          margin: [0, 0, 0, 0],
        },
        {
          text: ``,
          alignment: "center",
          bold: true,
          border: [false, true, true, false],
          margin: [0, 0, 0, 0],
        },
      ],
      [
        {
          text: `Code`,
          alignment: "center",
          bold: true,
          border: [true, false, true, true],
          margin: [0, 0, 0, 0],
        },
        {
          text: `AM`,
          alignment: "center",
          bold: true,
          border: [false, false, true, true],
          margin: [0, 0, 0, 0],
        },
      ]
    ],
  }

  const table11:any = {
    widths: [60, 30, ...Array.from({ length: oddMarkTheory*2 }, () => 25), 22, 22, 22, 30, ...Array.from({ length: oddMarkPractical*2 }, () => 25), 22, 22, 22, 22, 22, 22, 15, 20, 20, 22, 22],
    // headerRows: 1,
    body: [],
  }

  // console.log('student.oddSemesterdata.marks.length', student.oddSemesterdata.marks.length)

  const markLength = student.oddSemesterdata.marks.length
  for(let l = 0; l < markLength; l++) {
    let ms = [];
    const value = student.oddSemesterdata.marks[l]
     ms.push({ text: `${value.code || "-"}`, alignment: "center", margin: [0, 0, 0, 0], border: l == markLength-1 ? [true, false, true, true] : [true, false, true, false]})
     ms.push({ text: `${'Theory'}`, alignment: "center", margin: [0, 0, 0, 0], border:  l == markLength-1 ? [false, false, true, true] : [false, false, true, false]})
    
     for(let w = 0; w < oddMarkTheory; w++) {
       ms.push({ text: value.theory[w].AssessmentTypeMin || '-', alignment: 'center', margin: [0,0,0,0],border:  l == markLength-1 ? [false, false, true, true] : [false, false, true, false], })
       ms.push({ text: value.theory[w].AssessmentTypeObt || '-', alignment: 'center', margin: [0,0,0,0],border:  l == markLength-1 ? [false, false, true, true] : [false, false, true, false], })
      }
        ms.push({ text: value.theory[l].totalMax || '-', alignment: 'center', margin: [0,0,0,0],border:  l == markLength-1 ? [false, false, true, true] : [false, false, true, false], })
        ms.push({ text: value.theory[l].totalMin || '-', alignment: 'center', margin: [0,0,0,0],border:  l == markLength-1 ? [false, false, true, true] : [false, false, true, false], })
        ms.push({ text: value.theory[l].totalObt || '-', alignment: 'center', margin: [0,0,0,0],border:  l == markLength-1 ? [false, false, true, true] : [false, false, true, false], })
     

     ms.push({ text: `${'Practical'}`, alignment: "center", margin: [0, 0, 0, 0], border:  l == markLength-1 ? [false, false, true, true] : [false, false, true, false]})

     for(let x = 0; x < oddMarkPractical; x++) {
       ms.push({ text: value.practical[x].AssessmentTypeMin || '-', alignment: 'center', margin: [0,0,0,0],border:  l == markLength-1 ? [false, false, true, true] : [false, false, true, false], })
       ms.push({ text: value.practical[x].AssessmentTypeObt || '-', alignment: 'center', margin: [0,0,0,0],border:  l == markLength-1 ? [false, false, true, true] : [false, false, true, false], })
      }
      ms.push({ text: value.practical[l].totalMax || '-', alignment: 'center', margin: [0,0,0,0],border:  l == markLength-1 ? [false, false, true, true] : [false, false, true, false], })
      ms.push({ text: value.practical[l].totalMin || '-', alignment: 'center', margin: [0,0,0,0],border:  l == markLength-1 ? [false, false, true, true] : [false, false, true, false], })
      ms.push({ text: value.practical[l].totalObt || '-', alignment: 'center', margin: [0,0,0,0],border:  l == markLength-1 ? [false, false, true, true] : [false, false, true, false], })

     ms.push({ text: value.totalMax || '-', alignment: 'center', margin: [0,0,0,0],border:  l == markLength-1 ? [false, false, true, true] : [false, false, true, false], })
     ms.push({ text: value.totalMin || '-', alignment: 'center', margin: [0,0,0,0],border:  l == markLength-1 ? [false, false, true, true] : [false, false, true, false], })
     ms.push({ text: value.totalObt || '-', alignment: 'center', margin: [0,0,0,0],border:  l == markLength-1 ? [false, false, true, true] : [false, false, true, false], })
    

     ms.push({ text: value.grade || '-', alignment: 'center', margin: [0,0,0,0],border:  l == markLength-1 ? [false, false, true, true] : [false, false, true, false], })
     ms.push({ text: value.gradePoint || '-', alignment: 'center', margin: [0,0,0,0],border:  l == markLength-1 ? [false, false, true, true] : [false, false, true, false], })
     ms.push({ text: value.egp || '-', alignment: 'center', margin: [0,0,0,0],border:  l == markLength-1 ? [false, false, true, true] : [false, false, true, false], })
     ms.push({ text: value.status || '-', alignment: 'center', margin: [0,0,0,0],border:  l == markLength-1 ? [false, false, true, true] : [false, false, true, false], })
     ms.push({ text: value.remark || '-', alignment: 'center', margin: [0,0,0,0],border:  l == markLength-1 ? [false, false, true, true] : [false, false, true, false], })
    
    //  console.log('first',ms)

     table11.body.push(ms)
   }

  for(let k = 0; k < oddMarkTheory; k++) {
    table10.body[0].push({ text: student.oddSemesterdata.marks[0].theory[k].AssessmentName, alignment: 'center', colSpan:2, bold: true, margin: [0,0,0,0], border: [false, true, true, false],})
    table10.body[0].push({ text: '', alignment: 'center', bold: true, margin: [0,0,0,0], border: [false, false, false, false],})
    table10.body[1].push({ text: 'MIN', alignment: 'center', bold: true, margin: [0,0,0,0], border: [false, false, true, true],})
    table10.body[1].push({ text: 'OBT', alignment: 'center', bold: true, margin: [0,0,0,0], border: [false, false, true, true],})
  }

  table10.body[0].push({ text: `TOT`, alignment: "center", bold: true, margin: [0, 0, 0, 0], colSpan:3, border: [false, true, true, false]})
  table10.body[0].push({ text: '', alignment: 'center', bold: true, margin: [0,0,0,0], border: [false, false, false, false],})
  table10.body[0].push({ text: '', alignment: 'center', bold: true, margin: [0,0,0,0], border: [false, false, false, false],})
  table10.body[1].push({ text: `MAX`, alignment: "center", bold: true, margin: [0, 0, 0, 0], border: [false, false, true, true]})
  table10.body[1].push({ text: `MIN`, alignment: "center", bold: true, margin: [0, 0, 0, 0], border: [false, false, true, true]})
  table10.body[1].push({ text: `OBT`, alignment: "center", bold: true, margin: [0, 0, 0, 0], border: [false, false, true, true]})
  table10.body[0].push({ text: ``, alignment: "center", bold: true, margin: [0, 0, 0, 0], border: [false, true, true, false]})
  table10.body[1].push({ text: `AM`, alignment: "center", bold: true, margin: [0, 0, 0, 0], border: [false, false, true, true]})
  
  for(let k = 0; k < oddMarkPractical; k++) {
    table10.body[0].push({ text: student.oddSemesterdata.marks[0].practical[k].AssessmentName, alignment: 'center', colSpan:2, bold: true, margin: [0,0,0,0],border: [false, true, true, false], })
    table10.body[0].push({ text: '', alignment: 'center', bold: true, margin: [0,0,0,0],border: [false, false, false, false], })
    table10.body[1].push({ text: 'MIN', alignment: 'center', bold: true, margin: [0,0,0,0],border: [false, false, true, true], })
    table10.body[1].push({ text: 'OBT', alignment: 'center', bold: true, margin: [0,0,0,0],border: [false, false, true, true], })
  }

  table10.body[0].push({ text: `TOT`, alignment: "center", bold: true, margin: [0, 0, 0, 0], colSpan:3, border: [false, true, true, false]})
  table10.body[0].push({ text: '', alignment: 'center', bold: true, margin: [0,0,0,0], border: [false, false, false, false],})
  table10.body[0].push({ text: '', alignment: 'center', bold: true, margin: [0,0,0,0], border: [false, false, false, false],})
  table10.body[1].push({ text: `MAX`, alignment: "center", bold: true, margin: [0, 0, 0, 0], border: [false, false, true, true]})
  table10.body[1].push({ text: `MIN`, alignment: "center", bold: true, margin: [0, 0, 0, 0], border: [false, false, true, true]})
  table10.body[1].push({ text: `OBT`, alignment: "center", bold: true, margin: [0, 0, 0, 0], border: [false, false, true, true]})

  table10.body[0].push({ text: `TOT`, alignment: "center", bold: true, margin: [0, 0, 0, 0], colSpan:3, border: [false, true, true, false]})
  table10.body[0].push({ text: '', alignment: 'center', bold: true, margin: [0,0,0,0], border: [false, false, false, false],})
  table10.body[0].push({ text: '', alignment: 'center', bold: true, margin: [0,0,0,0], border: [false, false, false, false],})
  table10.body[1].push({ text: `MAX`, alignment: "center", bold: true, margin: [0, 0, 0, 0], border: [false, false, true, true]})
  table10.body[1].push({ text: `MIN`, alignment: "center", bold: true, margin: [0, 0, 0, 0], border: [false, false, true, true]})
  table10.body[1].push({ text: `OBT`, alignment: "center", bold: true, margin: [0, 0, 0, 0], border: [false, false, true, true]})

  table10.body[0].push({ text: '', alignment: 'center', bold: true, margin: [0,0,0,0], border: [false, true, true, false],})
  table10.body[0].push({ text: '', alignment: 'center', bold: true, margin: [0,0,0,0], border: [false, true, true, false],})
  table10.body[0].push({ text: '', alignment: 'center', bold: true, margin: [0,0,0,0], border: [false, true, true, false],})
  table10.body[0].push({ text: '', alignment: 'center', bold: true, margin: [0,0,0,0], border: [false, true, true, false],})
  table10.body[0].push({ text: '', alignment: 'center', bold: true, margin: [0,0,0,0], border: [false, true, true, false],})

  table10.body[1].push({ text: `GR`, alignment: "center", bold: true, margin: [0, 0, 0, 0], border: [false, false, true, true]})
  table10.body[1].push({ text: `GP`, alignment: "center", bold: true, margin: [0, 0, 0, 0], border: [false, false, true, true]})
  table10.body[1].push({ text: `EGP`, alignment: "center", bold: true, margin: [0, 0, 0, 0], border: [false, false, true, true]})
  table10.body[1].push({ text: `STS`, alignment: "center", bold: true, margin: [0, 0, 0, 0], border: [false, false, true, true]})
  table10.body[1].push({ text: `RMK`, alignment: "center", bold: true, margin: [0, 0, 0, 0], border: [false, false, true, true]})


}

// Helper function to chunk the array
export function chunkArray<T>(array: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}