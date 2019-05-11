import _ from "lodash";

export const answers = {
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
  judge: {
    question: `Judge not.`,
    answer: `Are you trying to quote the Bible? If so, you're misinterpreting that verse. The Bible actually teaches that we shouldn't judge <em>hypocritically</em>. After we have examined our own hearts and motives, we <em>should</em> judge in that we should tell people the truth about sin and evil.`,
  },
  rape: {
    question: `I'm pro-life, except in cases of rape.`,
    answer: `A woman who is raped is a victim of a horrific act of evil. Should we respond to one horrific act of evil with another horrific act of evil, the murder of an unborn baby? Rather than having two victims, we should seek to support and care for women who are raped.`,
  },
  health: {
    question: `If you eat meat, you're a murderer, too.`,
    answer: `God has revealed through the Bible that humans alone, and not animals, are made in God's image. Because of this, it is okay for humans to kill (not abuse) an animal, and it is never okay for humans to murder another human being (Genesis 1:27).`,
  },
  motherdie: {
    question: `Abortions should be legal when the life of the mother is at risk.`,
    answer: `It is rarely, if ever, the case where aborting the unborn baby would save the life of the mother. If the unborn baby is a human life, then doctors should work towards saving both lives. If the unborn baby is inadvertently killed in the process, then that is a tragedy, but not murder. However, if the unborn baby is intentionally killed, then that is murder.`,
  },
  abuse: {
    question: `Abortion prevents child abuse because unwanted babies are usually baused.`,
    answer: `Abortion <strong>ensures</strong> the worst kind of child abuse&mdash;killing the child.`,
  },
  right: {
    question: `Abortion is simply a woman's right.`,
    answer: `Does anyone have the right to murder a six-month old baby? If not, then why should women have the right to kill an unborn human baby?`,
  },
  fake: {
    question: `Those graphic images are fake.`,
    answer: `This accusation is completely baseless and false. Here is the evidence that they are real: <a href="https://www.abortionno.org/lawsuits/verifying-photograph-authenticity/" target="_blank">https://www.abortionno.org/lawsuits/verifying-photograph-authenticity/</a>.`,
  },
  legal: {
    question: `Abortion is legal.`,
    answer: `Slavery used to be legal, too. All the atrocities committed during the Holocaust were "legal," according to the laws of Germany. Just because something is legal doesn't mean it is right. Is it legal to murder a six-month old baby? Then why should it be legal to kill an unborn baby?`,
  },
  heaven: {
    question: `All aborted babies go to heaven anyways.`,
    answer: `But what about you? Revelation 21:8 says that all unrepentant murderers will end up in hell. One reason why we speak the truth about abortion is because we don't want that to happen to you.`,
  },
  pain: {
    question: `Abortion is okay as long as the baby is young enough to not feel pain.`,
    answer: `Is it okay to shoot a person in the head? That person wouldn't feel any pain because death would happen instantly. Is it okay to dismember a living person who is under general anesthesia? If not, then what's different about killing an unborn baby?`,
  },
  afford: {
    question: `What if a mother can't afford a child at that time?`,
    answer: `If parents feel that they can't afford their child who is born, should they be allowed to kill the child? Then what's different about killing an unborn human baby for this reason?`,
  },
  dontwant: {
    question: `I just don't want the baby.`,
    answer: `There are countless people who <strong>do</strong> want your baby. Putting your baby up for adoption would be a loving thing to do, for both the baby and the family who would love that baby.`,
  },
  damaged: {
    question: `The unborn baby has a serious health condition.`,
    answer: `We are very sorry to hear this, and we grieve with you. But, ending a life before natural death is still murder. Please leave death in the hands of God, and do all you can to protect the baby as long as you can. That's what parents should do for born children. Is there anything different about an unborn child?`,
  },
  righttime: {
    question: `It's not the right time for me to be a mother.`,
    answer: `If you truly feel you cannot be a mother at this time, then why not allow the baby to be adopted, rather than killing the baby?`,
  },
  painadoption: {
    question: `No woman should have to go through the pain of putting a baby up for adoption.`,
    answer: `We understand that it can be difficult to experience putting a baby up for adoption. But, what would be the alternative? Killing and murdering the human unborn baby?`,
  },
  shame: {
    question: `You are terrible because you are shaming women.`,
    answer: `Would it be shameful for a mother to murder her born baby by throwing him or her in the trash or in the river? If a woman is making a shameful decision, then we should make her aware of what she is doing, in a loving manner. We want to help both the mother and the baby, and sometimes the best way to do this is a forceful rebuke.`,
  },
  another: {
    question: `I don't want another child.`,
    answer: `Your unborn baby is already your child. Would you ever consider killing one of your born children? Then, why would you kill your unborn child? Adoption is also always an option instead of murder.`,
  },
  heart: {
    question: `God knows my heart.`,
    answer: `That should scare you because right now, you are choosing to kill an innocent, unborn, human baby, which is something that God hates and will punish. Right now, your heart is set on doing an evil thing. Jeremiah 17:9 says that the heart is deceitful above all things.`,
  },
  godkills: {
    question: `But God kills people too.`,
    answer: `God is sovereign and has the authority to give and take life, according to Job 1:21. We don't have that authority.`,
  },
  overpopulation: {
    question: `Abortion helps prevent overpopulation.`,
    answer: `Would you opt to kill yourself to help prevent overpopulation? Would you recommend killing living humans? Then, why would you support killing unborn human babies? Furthermore, what's your evidence that overpopulation is truly a problem? People throughout history have severely overestimated the problem of overpopulation.`,
  },
  clinicgood: {
    question: `Abortion clinics also do good, non-abortion services for women.`,
    answer: `If a hospital murdered one out of every ten patients, would it still be a good place to go? If a store or restaurant murdered one out of every ten of its customers, would it still be a good place to go? If not, then why would it be acceptable to go to an abortion clinic, when there are plenty of other options for those other good, non-abortion services?`,
  },
  heartbeat: {
    question: `It's not murder as long as the heart isn't beating yet.`,
    answer: `It's a scientific fact that the unborn baby is a distinct human being at the time of conception, so abortion at any time is the killing and ending of a human life, which is murder. In any case, the baby's heart is already beating around the time the mother takes the pregnancy test.`,
  },
  whataboutyou: {
    question: `What are you doing about children who are already born who need help?`,
    answer: `Not enough, but I am doing things. But, regardless of what or how much I am doing for children who are born, it is still always wrong to murder an unborn human baby.`,
  },
  father: {
    question: `I don't know who the father is.`,
    answer: `Not knowing who the father is doesn't justify killing the unborn human baby.`,
  },
  didntask: {
    question: `I didn't ask, or want, to be pregnant.`,
    answer: `Even if a pregnancy is unplanned, does that make it right to kill an unborn human baby?`,
  },
  againstbutsupport: {
    question: `I'm personally against abortion, but...`,
    answer: `Would you every say, "I'm personally against women being raped, BUT..." or, "I'm personally against the mass murder of Jews, But..."? If you support abortion in any way, then you're not really personally against abortion. You're aiding and abetting in the murder of an unborn human baby.`,
  },
  pill: {
    question: `The morning after pill is not the same as abortion.`,
    answer: `Scientifically, a human life begins at conception. Contraceptive pills that prevent implantation after conception and fertilization are abortion because they end a human life that has already begun developing.`,
  },
  potential: {
    question: `My life is worth more than a potential life.`,
    answer: `Scientifically, the baby in the womb is not a potential life, but an actual human life. The only difference is that it is earlier in its development. It's wrong to kill a human being because of size, location, or level of development, so it's wrong to kill the unborn human baby in the womb.`,
  },
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
