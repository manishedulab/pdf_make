
  const htmlContent = `
    <div style={{'maxWidth': '100%', 'paddingLeft': 0, 'paddingRight': 0, 'paddingTop': '1.25rem', 'paddingBottom': '1.25rem', 'minWidth': '768px', 'border': '1px solid', 'borderRadius': '.125rem', 'overflow': 'hidden'}} className="container mx-auto px-0 py-5 min-w-[768px] border rounded-sm overflow-hidden">
    <div style={{'maxHeight': '500px', 'width': '100%', 'overflow': 'auto', 'paddingLeft': '5rem'}} className="max-h-[500px] w-full overflow-auto px-20">
      <div style={{'display': 'flex', 'flexDirection': 'column', 'paddingLeft': '1.25rem'}} className="flex flex-col px-5 font-bold">
        <div style={{'justifyContent': 'center', 'marginBottom': '.5rem'}} className="flex justify-center mb-2">
          <span style={{'fontSize': '1.25rem'}} className="text-xl">{questionSet?.courseName}</span>
        </div>
        <div style={{'justifyContent': 'space-between', 'marginBottom': '.5rem'}} className="flex justify-between mb-2 ">
          <span style={{'marginTop': 'auto'}} className="mt-auto">{questionSet.year}</span>
          <span style={{'fontSize': '1.125rem'}} className="text-lg ">{questionSet.assessmentCode} - {questionSet.subjectName} - <span style={{'marginTop': 'auto'}} className="mt-auto">{questionSet.semName}</span></span>
          <span style={{'marginTop': 'auto'}}>Total Marks: {questionSet.totalMark}</span>
        </div>
      </div>
      <hr style={{'borderWidth': '2px', 'marginTop': '1.25rem', 'marginBottom': '1.25rem'}} className="border-2 my-5" />
      {questionSet.questions.map((section, sectionIndex) => (
        <div key={section.questionIndex} style={{'marginBottom': '1.5rem'}} className="mb-6">
          <div style={{'display': 'flex'}} className="flex">
            <div style={{'display': 'flex'}} className="flex">
              <span style={{'fontWeight': 'bold', 'paddingRight': '.5rem'}}>Q{section.questionIndex}.)</span>
              <div dangerouslySetInnerHTML={{ __html: section.questionText }} />
              {section.subQuestionsAllowed ? <span style={{'fontWeight': 'bold', 'paddingLeft': '.5rem'}}>(Any {section?.maxSubQuestionsAttempt})</span> : null}
            </div>
            <div style={{'marginLeft': 'auto'}} className="ml-auto">({section.marks})</div>
          </div>
          {section.questions && section.questions.length > 0 && (
            <ul style={{'paddingLeft': '1.5rem', 'marginBottom': '.75rem'}} className="pl-6 mb-3">
              {section.questions.map((question, questionIndex) => (
                <li key={question.questionIndex}>
                  <div style={{'display': 'flex', 'marginTop': '.75rem', 'marginLeft': '1rem'}} className="flex my-3 ml-4">
                    <div style={{'display': 'flex'}} className="flex">
                      <span style={{'fontWeight': 'bold', 'paddingRight': '.5rem'}}>{question.questionIndex}.) </span><div dangerouslySetInnerHTML={{ __html: question.questionText }} />
                      <div>{question.subQuestionsAllowed ? <span style={{'fontWeight': 'bold', 'paddingLeft': '.5rem'}}>(Any {question?.maxSubQuestionsAttempt})</span> : null}</div>
                    </div>
                    <div style={{'marginLeft': 'auto'}} className="ml-auto">({question.marks})</div>
                  </div>
                  {question.questions && question.questions.length > 0 && (
                    <ul style={{'paddingLeft': '1rem', 'marginBottom': '1rem'}} className="pl-4 mb-4">
                      {question.questions.map((subQuestion, subQuestionIndex) => (
                        <li key={question.questionIndex} style={{'display': 'flex', 'marginTop': '.75rem', 'marginLeft': '1.25rem'}} className="flex my-3 ml-10">
                          <div style={{'display': 'flex'}} className="flex">
                            <span style={{'fontWeight': 'bold', 'paddingRight': '.5rem'}}>{subQuestion.questionIndex}.)</span>
                            <div dangerouslySetInnerHTML={{ __html: subQuestion.questionText }} />
                          </div>
                          <div style={{'marginLeft': 'auto'}} className="ml-auto">({subQuestion.marks})</div>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  </div>
  
    `;

    export default htmlContent;