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
  collegeName: string;
  collegeLogo: string;
  studentPhoto: string;
  courseName: string;
  semName: string; // (I,II,III,IV)
  acadamicYear: string; // 2020-2021
  prnNo: string;
  seatNumber: number;
  studentName: string;
  monthAndYear: string; // June 2021 BACKLOG, March 2021 REGULAR
  sgpi: string;
  result: string; // successfull
  totalGrade: string; // A+, B, A
  totalOfTotal: number; // 421/700
  outOfTotal: number
  totalCredit: number; // 20.00
  cg: string; // Total of cg
  cgpa: number;
  finalGrade: string;
  principalSign: string;
  directorSign: string;
  date: string;
  place: string;
  universityLogo: string;
  numberOfSem: number;
  credits: Icredits[];
  subjects: IsubjectDetails[];
}
export interface IsubjectDetails {
  subjectCode: string;
  subjectName: string;
  internalMax: number;
  internalMin: number;
  internalObt: number;
  externalMax: number;
  externalMin: number;
  externalObt: number;
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