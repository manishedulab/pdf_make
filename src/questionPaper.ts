
const generatePDF = (questionSet:any) => {

const cleanText = (text:string) => {
    return text.replace(/<[^>]*>/g, '');
};

    const documentDefinition:any = {
        pageSize: "A4",
        content: [
            {
                layout: 'noBorders',
                alignment: 'justify',
                margin: [0, 50, 0, 0],
                table: {
                    widths: ['*'],
                    body: [
                        [
                            {
                                stack: [
                                    {
                                        text: `${questionSet[0].courseName}`,
                                        bold: true,
                                        alignment: 'center',
                                        fontSize: 18
                                    },
                                    {
                                        table: {
                                            widths: [50, 350, 100],
                                            body:[[
                                                {
                                                    text: `${questionSet[0].year}`,
                                                    bold: true,
                                                    fontSize: 13
                                                },
                                                {
                                                    text: `${questionSet[0].assessmentCode} - ${questionSet[0].subjectName} - ${questionSet[0].semName}`,
                                                    bold: true,
                                                    alignment: 'center',
                                                    fontSize: 13
                                                },
                                                {
                                                    text: `Total Marks: ${questionSet[0].totalMark}`,
                                                    bold: true,
                                                    fontSize: 13
                                                },
                                                
                                            ]]
                                        },
                                        layout: "noBorders",
                                        margin: [0, 10, 0, 0]

                                    },
                                    '\n',
                                    {
                                        table: {
                                            headerRows: 1,
                                            widths: ['auto'],
                                            body: [
                                                [
                                                questionSet[0].questions.map((section:any) => {
                                                    const sectionBody = [];
                                                    sectionBody.push([
                                                        {
                                                            // text: `Q${section.questionIndex}) ${cleanText(section.questionText)} (${section.marks})`,
                                                            // bold: true
                                                            table: {
                                                                widths: [20, 435, 30],
                                                                body: [
                                                                    [
                                                                        {
                                                                            text: `Q${section.questionIndex})`, 
                                                                            bold: true 
                                                                        },
                                                                        {
                                                                            text: [
                                                                                {
                                                                                    text:`${cleanText(section.questionText)}`
                                                                                },
                                                                                {
                                                                                    text: section.maxSubQuestionsAttempt ? `  (Any ${section.maxSubQuestionsAttempt})`: '' ,
                                                                                    bold: true
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            text: `(${section.marks})`,
                                                                            alignment: 'right'
                                                                        }
                                                                    ],
                                                                ]
                                                            },
                                                            layout: "noBorders",
                                                            margin: [0, 10, 0, 0]
                                                        },
                                                        // `(${section.marks})`
                                                    ]);
                                                    if (section.questions && section.questions.length > 0) {
                                                        sectionBody.push([
                                                            
                                                                section.questions.map((question:any) => {
                                                                    const questionBody = [];
                                                                    questionBody.push([
                                                                        {
                                                                            table: {
                                                                                widths: [25, 435, 30],
                                                                                body: [
                                                                                    [
                                                                                        {
                                                                                            text: `${question.questionIndex})`, 
                                                                                            bold: true 
                                                                                        },
                                                                                        {
                                                                                            text: [
                                                                                                {
                                                                                                text: `${cleanText(question.questionText)}`
                                                                                                },
                                                                                                {
                                                                                                    text: question.maxSubQuestionsAttempt ? `  (Any ${question.maxSubQuestionsAttempt})`: '' ,
                                                                                                    bold: true
                                                                                                }
                                                                                            ]
                                                                                        },
                                                                                        {
                                                                                            text: `(${question.marks})`
                                                                                        }
                                                                                    ],
                                                                                ]
                                                                            },
                                                                            layout: "noBorders",
                                                                            margin: [10, 10, 0, 0]
                                                                        },
                                                                        // `(${question.marks})`
                                                                    ]);
                                                                    if (question.questions && question.questions.length > 0) {
                                                                        questionBody.push(
                                                                             question.questions.map((subQuestion:any) => {
                                                                                return [
                                                                                    {
                                                                                        // text: `${subQuestion.questionIndex}) ${cleanText(subQuestion.questionText)} (${subQuestion.marks})`,
                                                                                        // bold: true
                                                                                        table: {
                                                                                            widths: [30, 420, 30],
                                                                                            body: [
                                                                                                [
                                                                                                    {
                                                                                                        text: `${subQuestion.questionIndex})`, 
                                                                                                        bold: true 
                                                                                                    },
                                                                                                    {
                                                                                                        text: [
                                                                                                            {
                                                                                                            text: `${cleanText(subQuestion.questionText)}`
                                                                                                            },
                                                                                                            {
                                                                                                                text: subQuestion.maxSubQuestionsAttempt ? `  (Any ${subQuestion.maxSubQuestionsAttempt})`: '' ,
                                                                                                                bold: true
                                                                                                            }
                                                                                                        ]
                                                                                                    },
                                                                                                    {
                                                                                                        text: `(${subQuestion.marks})`
                                                                                                    }
                                                                                                ],
                                                                                            ]
                                                                                        },
                                                                                        layout: "noBorders",
                                                                                        margin: [20, 10, 0, 0]
                                                                                    },
                                                                                    // `(${subQuestion.marks})`
                                                                                ];
                                                                            })
                                                                        );
                                                                    }
                                                                    return questionBody;
                                                                })
                                                            ,
                                                            ''
                                                        ]);
                                                    }
                                                    return sectionBody;
                                                })
                                            ]
                                            ]
                                        },
                                        layout: "noBorders"
                                    }
                                ]
                            }
                        ]
                    ]
                }
            }
        ],
    };
    return documentDefinition;
};

export default generatePDF;
