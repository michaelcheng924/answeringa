import _ from "lodash";

const answers = {
  religious: {
    question: `The idea that human life begins at conception and fertilization is a religious belief and not something that we can know for sure.`,
    answer: `There's actually an overwhelming consensus among the scientific community that human life begins at conception. It's not at all just a religious belief. The only difference between a human being at conception and an adult human being is how far the human being is in development. I can also show you over 20 neutral, scientific sources that affirm that human life begins at conception.`,
    links: [
      `<a href="/answers/conception-science" target="_blank">24 Scientific Sources that Teach Life Begins at Conception and Fertilization</a>`,
    ],
  },
  fetus: {
    question: `It's a fetus or embryo, not a baby.`,
    answer: `The terms, "fetus" and "embryo," actually don't refer to something that's not, or less than, a human being, but rather, they refer to a human being who is in an early stage of development. "Fetus" is a Latin word that means "offspring," "little one," or "young child." What do you really mean when you say that the woman is carrying a fetus, not a baby?`,
  },
  clump: {
    question: `It's a clump of cells, not a baby.`,
    answer: `There's an overwhelming consensus among the scientific community that human life begins at conception, that from the very beginning, the woman is not carrying a clump of cells, but a distinct human being. The only difference between a human being at conception and an adult human being is how far the human being is in development. I can also show you over 20 neutral, scientific sources that affirm that human life begins at conception.`,
  },
  size: {
    question: `It isn't fully human because of its size. It's extremely small.`,
    answer: `Should we be allowed to kill human beings because of their size? An unborn baby may be smaller than a toddler, but a toddler is smaller than an adult human. What prevents us from saying it's okay to kill toddlers because of their size?`,
  },
  leveldevelopment: {
    question: `It's not fully human because of its level of development. It's very early in its development.`,
    answer: `Should we be allowed to kill human beings because of their level of development? An unborn baby may be in an earlier stage of development than a toddler, but a toddler is in an earlier stage of development than an adult. What prevents us from saying it's okay to kill toddlers because of their level of development?`,
  },
  environment: {
    question: `It's not fully human because of its environment. It's located inside the mother.`,
    answer: `Why would the location of a human being affect how human that person is? Why should we be allowed to kill a human being because of where that human being is located?`,
  },
  dependence: {
    question: `It's not fully human because it is completely dependent upon the mother for survival. No woman should be required to provide life support for another person.`,
    answer: ``,
  },
  choose: {
    question: `Women have the right to choose what to do with their own bodies.`,
    answer: `I would actually agree that we need to respect and protect women's rights and women's bodies. The problem I have with abortion is that there's another body in the equation, the body of the unborn human baby. Would you agree that we shouldn't have the right to choose to kill another human being?`,
  },
  graphic: {
    question: `Using disgusting, graphic images of aborted babies is cruel to women, who are making a difficult decision.`,
    answer: `Those graphic images of aborted babies simply show the truth about what abortion is and what abortion does. Many women have changed their minds about wanting to have an abortion after seeing images like these. If you were trying to prove horrifying reality of the Holocaust, would you say that we shouldn't use pictures that depict the reality of the Holocaust? In the same way, we're using images to demonstrate the reality of abortion, that it involves not just the woman, but also another human baby, who is mercilessly and brutally killed and ripped apart as a result of abortion`,
  },
  holocaust: {
    question: `It's inappropriate to compare abortion to the Holocaust. Women who get abortions are making a difficult decision and are nothing like the evil Nazis.`,
    answer: `The point we're trying to make is that both the Holocaust and abortion use the same kind of reasoning: Jews and unborn babies are less than fully human, so we are justified in killing them. Regarding people who have and support abortions, we would simply ask, "Do they know that abortion kills a human being?" If so, then where do they stand morally?`,
  },
  fake: {
    question: `We can't trust those graphic images of aborted babies to be real and accurate.`,
    answer: `This is simply an unjustified assertion. One major source of these images has plenty of evidence that these images are real and accurate.`,
  },
  born: {
    question: `Pro-lifers should care as much about babies who are born as babies who are not yet born.`,
    answer: `This argument is a way of trying to dodge the issue. Everyone agrees that we should also care about babies who are born. But, even if the accusation were true, is this a legitmate justification to kill unborn babies?`,
  },
  dangerous: {
    question: `Making abortion illegal would be dangerous for women, who would then resort to back-alley and coat-hanger abortions.`,
    answer: `This argument completely ignores the unborn child. If some women will choose to kill their human baby in a dangerous way, does this mean we should make it legal to kill human unborn babies?`,
  },
  forgive: {
    question: `God will forgive those who have abortions.`,
    answer: `Romans 2:4-5 says, "Do you presume on the riches of his kindness and forbearance and patience, not knowing that God's kindness is meant to lead you to repentance? But because of your hard and impenitent heart you are storing up wrath for yourself on the day of wrath when GOd's righteous judgment will be revealed." Basically, God won't forgive those who have the mindset that they can keep on intentionally sinning and God will always simply forgive them.`,
  },
  // judge: {
  //   question: `Judge not.`,
  //   answer: ``,
  // },
  // prolife: {
  //   question: `I'm pro-life, except in cases of rape.`,
  //   answer: ``,
  // },
  health: {
    question: `If you eat meat, you're a murderer, too.`,
    answer: `God has revealed through the Bible that humans alone, and not animals, are made in God's image. Because of this, it is okay for humans to kill (not abuse) an animal, and it is never okay for humans to murder another human being (Genesis 1:27).`,
  },
  // abuse: {
  //   question: `Abortions help prevent child abuse.`,
  //   answer: ``,
  // },
  // xx: {
  //   question: ``,
  //   answer: ``,
  // },
  // xx: {
  //   question: ``,
  //   answer: ``,
  // },
  // xx: {
  //   question: ``,
  //   answer: ``,
  // },
  // xx: {
  //   question: ``,
  //   answer: ``,
  // },
  // xx: {
  //   question: ``,
  //   answer: ``,
  // },
  // xx: {
  //   question: ``,
  //   answer: ``,
  // },
  // xx: {
  //   question: ``,
  //   answer: ``,
  // },
  // xx: {
  //   question: ``,
  //   answer: ``,
  // },
  // xx: {
  //   question: ``,
  //   answer: ``,
  // },
  // xx: {
  //   question: ``,
  //   answer: ``,
  // },
  // xx: {
  //   question: ``,
  //   answer: ``,
  // },
  // xx: {
  //   question: ``,
  //   answer: ``,
  // },
  // xx: {
  //   question: ``,
  //   answer: ``,
  // },
  // xx: {
  //   question: ``,
  //   answer: ``,
  // },
  // xx: {
  //   question: ``,
  //   answer: ``,
  // },
  // xx: {
  //   question: ``,
  //   answer: ``,
  // },
  // xx: {
  //   question: ``,
  //   answer: ``,
  // },
  // xx: {
  //   question: ``,
  //   answer: ``,
  // },
  // xx: {
  //   question: ``,
  //   answer: ``,
  // },
  // xx: {
  //   question: ``,
  //   answer: ``,
  // },
  // xx: {
  //   question: `I'm not married.`,
  //   answer: ``,
  // },
  // xx: {
  //   question: `It's better to be aborted than to be born with a serious health condition or deformity.`,
  //   answer: ``,
  // },
  // pill: {
  //   question: `The morning after pill is not the same as abortion.`,
  //   answer: ``,
  // },
  // unwanted: {
  //   question: `It's better to be aborted than to be unwanted.`,
  //   answer: ``,
  // },
};

let index2 = 0;

export const html = `
<h2>Introduction</h2>

<p>Below, you will find conversational answers to all of the major pro-choice arguments against the pro-life movement. Links to extended answers, if available, can be found at the end of each section.</p>

<ol>
  ${_.map(answers, (item, key) => {
    return `<li><a href="#${key}" id="${key}-top">${item.question}</a></li>`;
  }).join("\n")}
</ol>

${_.map(answers, (item, key) => {
  index2++;
  return `<h2><a href="#${key}-top" id="${key}">^</a> ${index2}. ${
    item.question
  }</h2>
  
  <p>${item.answer}</p>

  ${
    item.links
      ? `<h3>Links</h3>
  
  <ul>`
      : ``
  }
  
  ${_.map(item.links, link => {
    return `<li>${link}</li>`;
  }).join("\n")}

  ${item.links ? `</ul>` : ``}
`;
}).join("\n")}
`;
