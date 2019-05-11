import { Fragment } from "react";
import _ from "lodash";

import { answers } from "../constants/answers/conversational-answers";

const ConversationalProlifeAnswers = () => {
  let number = 0;

  return (
    <div>
      <h2>Introduction</h2>

      <p>
        Below, you will find conversational answers to all of the major
        pro-choice arguments against the pro-life movement. Links to extended
        answers, if available, can be found at the end of each section.
      </p>

      <ol>
        {_.map(answers, (item, key) => {
          return (
            <li key={key}>
              <a href={`#${key}`} id={`${key}-top`}>
                {item.question}
              </a>
            </li>
          );
        })}
      </ol>

      {_.map(answers, (item, key) => {
        number++;
        return (
          <Fragment>
            <h2>
              <a href={`#${key}-top`} id={key}>
                ^
              </a>{" "}
              {number}. {item.question}
            </h2>

            <p dangerouslySetInnerHTML={{ __html: item.answer }} />

            {item.links ? (
              <div>
                <h3>Links</h3>

                <ul>
                  `
                  {_.map(item.links, link => {
                    return <li dangerouslySetInnerHTML={{ __html: link }} />;
                  })}
                </ul>
              </div>
            ) : null}
          </Fragment>
        );
      })}
    </div>
  );
};

export default ConversationalProlifeAnswers;
