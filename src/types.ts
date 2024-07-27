export interface IPhotoNomial{
    enRollmentNo:string;
    studentName:string;
    birthDate:string;
    gender:string;
    medium:string;
    category:string;
    studentPhoto:string;
    sign:string;
    course:string;
    year:string;
    semester:string;
    appearingSubject:[
        {
            subjectCode:string,
            subjectType:ISubjectTypePdf,
            subjectName:string
        },
    ]
};

export enum ISubjectTypePdf {
    Theory = 'TH',
    Practical = 'PR',
    Internal = 'IA',
  }

export interface IChallan{
  clientCode:string;
  collegeName:string;
  collegeCode:string;
  year:string; //* month/year
  courseName:string;
  semName:string; //* semester/year
  mode:string;
  modeOfPayment:string;
  bankName:string;
  bankBranch:string;
  no:string;
  bankDate:string;
  mobileNo:string;
  feeDetails:
    {
      examFee:string;
      examFeeLable:string;
      studentCount: number;
      amount: number;
    }[];
}


export interface IRepeaterFeeSlip {
  receiptNo:number;
  courseName:string;
  studentName:string;
  quota:string;
  feeDetails:
  {
    subjectName:string;
    semester:string;
    amount: number;
  }[];
}

export interface IReassessmentFeeSlip {
  receiptNo:number;
  courseName:string;
  studentName:string;
  semester:string;
  feeDetails:
  {
    subjectName:string;
    amount: number;
  }[];
}

  export interface IBarCode{
    enrollmentNo:number;
    block:number;
    seatNo:number;
    ansNo:number;
    subjectType:string;
    courseName:string;
    examDate:string;
    subjectName:string;
    courseCode:number;
    subjectCode:number;
  }

  export interface IIdCard {
    barcode: string;
    collegeName:string;
    collegeLogo:string;
    studentPhoto:string ;
    studentName:string;
    Program:string;
    yearPrefix:string;
    prnNo:string;
    abcNo:string;
    gender:string;
    issuingAuthority:string;
    dob:string;
    contactNo:string;
    bloodGroup:string;
    address:string;
    email:string;
    primaryColor:string;
  }

  export const COLORCODE = {
    defaultColor: '#BD9C47',
  };  


  export interface IMarksheet {
    courseName:string;
    semesterName:string;
    examYear:string;
    seatNo:string;
    studentName:string;
    enrollmentNo:string;
    collegeName:string;
    result:string;
    totalCredit:string;
    externalMaxTotal:string;
    externalObtTotal:string;
    internalMaxTotal:string;
    internalObtTotal:string;
    totalOfTotal:string;
    totalCgp:string;
    subjects:{
      subjectName: string;
      subjectType: string
      credit: number;
      externalMax: number;
      externalMin: number;
      internalMax: number;
      internalMin: number;
      externalObt: string;
      internalObt: string;
      total: string;
      grade: string;
      cgp: number;
      gp: number;
    }[];
  }


  // export interface IResult {
  //   collegeName:string;
  //   collegeLogo:string;
  //   studentPhoto:string;
  //   courseName:string;
  //   semName:string; // (I,II,III,IV)
  //   AcadamicYear:string; // 2020-2021
  //   prnNo:string;
  //   seatNumber:number;
  //   studentName:string;
  //   monthAndYear:string; // June 2021 BACKLOG, March 2021 REGULAR
  //   sgpi:string;
  //   remarks:string; // successfull
  //   totalGrade:string; // A+, B, A
  //   totalOfTotal:number; // 421/700
  //   outOfTotal:number;
  //   totalCredit:number; // 20.00
  //   icg:string; // Total of cg
  //   cgpa:number;
  //   finalGrade:string;
  //   principalSign:string;
  //   directorSign:string;
  //   date:string;
  //   place:string;
  //   universityLogo:string;
  //   credits:{
  //     creditEarned:number;
  //     sgpi:number;
  //   }[];
  //   subjectDetails:{
  //     subjectCode:string;
  //     subjectName:string;
  //     internalMax:number;
  //     internalMin:number;
  //     internalObt:number;
  //     externalMax:number;
  //     externalMin:number;
  //     externalObt:number;
  //     totalMax:number;
  //     totalMin:number;
  //     totalObt:number;
  //     grade:string;
  //     gradePoint:string;
  //     creditPoint:string;
  //     cg:string;
  //   }[];
  // }

  
  export interface IResult {
    collegeColor: string;
    collegeName: string;
    collegeLogo: string;
    studentPhoto: string;
    courseName: string;
    semName: string; // (I,II,III,IV)
    acadamicYear: string; // 2020-2021
    abcNo: string; // 145654652
    prnNo: string;
    rollNo: string;
    seatNumber: number;
    studentName: string;
    monthAndYear: string; // June 2021 BACKLOG, March 2021 REGULAR
    sgpi: string;
    NSSSGPI: string;
    result: string; // successfull
    totalGrade: string; // A+, B, A
    totalOfTotal: number; // 421/700
    outOfTotal: string | number;
    totalCredit: number; // 20.00
    cg: string; // Total of cg
    cgpa: number | string;
    finalGrade: string;
    principalSign: string;
    directorSign: string;
    date: string;
    place: string;
    universityLogo: string;
    numberOfSem: number;
    collegeCode?: number;
    credits: Icredits[];
    subjects: IsubjectDetails[];
  }

  export enum IMaksRemarksType {
    PRESENT = 'PRESENT',
    ABSENT = 'ABSENT',
    RESERVE = 'RESERVE',
  }
  export interface IsubjectDetails {
    subjectCode: string;
    subjectName: string;
    passingMonthYear: string;
    internalMax: number;
    internalMin: number;
    internalObt: number | string;
    externalMax: number;
    subjectRemarkInternal: string
    subjectRemarkExternal: string
    externalMin: number;
    externalObt:number | string;
    totalMax: number;
    totalMin: number;
    totalObt: number;
    grade: string;
    gradePoint: number;
    creditPoint: number;
    cg: number;
  }
  export interface Icredits {
    semName: string;
    creditEarned: string;
    sgpi: string;
  }

  export interface IAddmission {
    universityLogo:string;
    collegeName:string;
    studentName:string;
    studentPhoto:string;
    courseName:string;
    semName:string; 
    prnNo:number;
    rollNumber:number;
    gender:string;
    dob:string;
    contactNo:string;
    address:string;
    email:string;
    aadharNumber:number;
    firstName:string;
    middleName:string;
    lastName:string;
    motherName:string;
    bloodGroup:string;
    city:string;
    state:string;
    pincode:string;
    studentSignature:string;
    subjects:IAddmissionSubjects[]
  };

  export interface IAddmissionSubjects {
    subjectCode: string;
    subjectName: string;
  }

  export interface ISolMarksheet {
    examEvent: string;
    barcode: string;
    studentName: string;
    studentPhoto: string;
    totalMarks: number;
    totalObtainMarks: number | string;
    percentage: string;
    DBOEESignature: string;
    specialization: string;
    courseFullName: string;
    prnNo: string;
    resultDate: string;
    collegeName: string;
    examCenter: string;
    finalGrade: string;
    seatNo: string;
    courseName: string;
    examination: string;
    ECAMark: string;
    totalCredit: string;
    totalEgp: string;
    subjectName: string;
    sgpa: string;
    status: string;
    evenSemesterCredits: IEvenSemesterCredits[];
    oddSemesterCredits: IEvenSemesterCredits[];
    ordinance: string;
    statementNo: string;
    examMonthAndYear: string;
    previousYearData: IPreviousYearData[];
    oddSemesterSubjects: IOddSemesterSubjects[];
    evenSemesterSubjects: IOddSemesterSubjects[];
  }
  
  export interface IEvenSemesterCredits {
    semesterName: string;
    credits: number;
    egp: string;
    sgpa: string;
    status: string;
    seatNo: string;
    examEvent: string;
  }
  
  interface IPreviousYearData {
    seatNo: string;
    year: string;
    examEvent: string;
    totalCredits: string;
    egp: string;
    sgpa: string;
  }
  
  export interface IOddSemesterSubjects {
    paperCode: string;
    paperName: string;
    credits: string;
    gradeObtained: string;
    gradePoint: string;
    earnedGRPoints: string;
    remarks: string;
  }
  


export interface IAttendanceSheet {
  collegeName: string;
  centerName: string;
  courseName: string;
  specialization: string;
  courseAbbreviation: string;
  examType: string;
  examPattern: string;
  courseYear: string; // Msc-I, Bsc-II
  semesterName: string;
  paperCode: string;
  paperName: string;
  examDate: string;
  examTime: string;
  blockNumber: string;
  generatedBy: string;
  seatNumbers: string[];
}
export interface ISolLedger {
  faculty:string;
  courseName:string;
  courseCode:string;
  modeOfLearning:string;
  pattern:string;
  branch:string;
  coursePart:string;
  coursePartTerm:string;
  event:string;
  courseAbbreviation:string;
  semesterName:string;
  examType:string;
  creditSystem:string;
  specialization:string;
  currentYear:string; // I, II ,III
  examMonthAndYear:string;
  subjects:{
    code:string;
    paperName:string;
    credits:string;
    gradeTemplateName: string;
    theory: {
    AssessmentName:string;
    AssessmentTypeMax: string;
    AssessmentTypeMin: string;
    }[];
    practical: {
      AssessmentName:string;
      AssessmentTypeMax: string;
      AssessmentTypeMin: string;
      }[];
    total:string;
  }[];
  students: {
    elig: string;
    studentName:string;
    semesterName:string;
    collegeName:string;
    collegeCode:string;
    prnNo:string;
    seatNo:string;
    totalCredit:string;
    totalEgp:string;
    percentage:string;
    totalOfTotal:string;
    totalOfTotalObt:string;
    finalSgpa:string;
    status:string;
    finalGrade:string;
    ECAMark:string;
    balanceMark:string;
    ordinance:string;
    oddSemesterdata: {
      semName:string;
      totalCredit:string;
      egp:string;
      sgpa:string;
      status:string;
      marks: {
        code:string;
        theory: {
          AssessmentName:string;
          AssessmentTypeObt: string;
          AssessmentTypeMin: string;
        }[];
        practical: {
            AssessmentName:string;
            AssessmentTypeObt: string;
            AssessmentTypeMin: string;
        }[];
        theoryTotalMax: string
        theoryTotalMin: string;
        theoryTotalObt: string;
        practicalTotalMax: string;
        practicalTotalMin: string;
        practicalTotalObt: string;
        totalMax:string;
        totalMin:string;
        totalObt:string;
        grade:string;
        gradePoint:string;
        egp: string;
        // credits:string;
        status:string;
        remark:string;
      }[];
    };
    previousYearDetails: {
        year:string; // B.Tech-I, B.Tech-II, B.Com-II
        seatNo:string;
        examEvent:string;
        egp: string;
        sgpa: string;
        credits:string;
        status:string;
        grade:string;
      }[];
    evenSemesterdata: {
      semName:string;
      totalCredit:string;
      egp:string;
      sgpa:string;
      status:string;
      marks: {
        code:string;
        theory: {
          AssessmentName:string;
          AssessmentTypeObt: string;
          AssessmentTypeMin: string;
        }[];
        practical: {
            AssessmentName:string;
            AssessmentTypeObt: string;
            AssessmentTypeMin: string;
        }[];
        theoryTotalMax: string
        theoryTotalMin: string;
        theoryTotalObt: string;
        practicalTotalMax: string;
        practicalTotalMin: string;
        practicalTotalObt: string;
        totalMax:string;
        totalMin:string;
        totalObt:string;
        grade:string;
        gradePoint:string;
        egp: string;
        // credits:string;
        status:string;
        remark:string;
      }[];
    }
  }[];
}


export interface IExamFormPdf {
  collegeName:string;
  examMonthAndYear:string;
  studentName:string;
  motherName:string;
  studentPhoto:string;
  studentSignature:string;
  prnNo:string;
  gender:string;
  physicallyChallenged:string;
  medium:string;
  eligibility:string;
  examFormNumber:string;
  ABCID:string;
  nationality:string;
  courseAbbreviation:string;
  examType:string;
  examPattern:string;
  semesterName:string;
  currentSemester:number;
  address:string;
  city:string;
  telNo:string;
  mobileNumber:string;
  email:string;
  dob:string;
  category:string;
  examFee:string;
  examFormFee:string;
  examLateFee:string;
  provisionalCertificateFee:string;
  subTotalFee:string;
  numberOfSemesters:number;
  isEvenSemester:boolean;
  oddSemester:{
    semesterName:string;
    examType:string;
    examPattern:string;
    collegeRollNo:string;
    examAppearanceType:string;
    centerPreference:string;
    venuePreference:string;
    subjects:{
      paperCode:string;
      paperName:string;
      AMAT:string;
    }[];
  };
  evenSemester:{
    semesterName:string;
    examType:string;
    examPattern:string;
    collegeRollNo:string;
    examAppearanceType:string;
    centerPreference:string;
    venuePreference:string;
    subjects:{
      paperCode:string;
      paperName:string;
      AMAT:string;
    }[];
  }
}

export interface ISolapurHallticketPdf {
  collegeName:string;
  examMonthAndYear:string;
  studentName:string;
  fatherName:string;
  studentPhoto:string;
  studentSignature:string;
  prnNo:string;
  gender:string;
  physicallyChallenged:string;
  medium:string;
  division:string;
  rollNumber:string;
  seatNumber:string;
  examCenter:string;
  courseAbbreviation:string;
  examType:string;
  examPattern:string;
  semesterName:string;
  subjects:{
    paperCode:string;
    paperName:string;
    date:string;
    time:string;
    subjectType:string;
    assessment:string;
  }[];
}