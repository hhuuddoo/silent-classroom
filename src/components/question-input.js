import React from "react";
import DOMPurify from "dompurify";

// Input for entering questions
export default function QuestionInput({ question, setQuestion }) {
  // Avoid XSS attacks since im setting innerHTML
  const sanitiser = DOMPurify.sanitize;

  return (
    //   Gotta use editable div since textarea ain't it
    <div
      className="textarea question"
      contentEditable={true}
      dangerouslySetInnerHTML={{ __html: sanitiser(question) }}
      onChange={({ target }) => setQuestion(target.value)}
    ></div>
  );
}
