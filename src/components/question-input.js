import React from "react";

export default function QuestionInput({ question, setQuestion }) {
  return (
    <>
      {/* <textarea
        className="textarea question"
        placeholder="Hi"
        wrap={"hard"}
        onChange={({ target }) => setQuestion(target.value)}
        value={question}
        rows={question.split(/\r\n|\r|\n/).length}
        cols={4}
      /> */}
      <div
        className="textarea question"
        contentEditable={true}
        dangerouslySetInnerHTML={{ __html: question }}
        onChange={({ target }) => setQuestion(target.value)}
      ></div>
    </>
  );
}
