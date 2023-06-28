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
