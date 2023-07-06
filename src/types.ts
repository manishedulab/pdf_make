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
    collegeName:string;
    collegeLogo:string;
    studentName:string;
    standard:string;
    prnNo:string;
    rollNo:string;
    gender:string;
    issuingAuthority:string;
    dob:string;
    contactNo:string;
    bloodGroup:string;
    address:string;
    email:string;
  }