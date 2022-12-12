const SAMPLE_LESSON_DATA = [
  {
    type: 'intro',
    title: 'What is Codemasters?',
    content: [
      `Welcome to Codemasters! Codemasters is a platform that allows you to learn programming languages and frameworks through interactive lessons. Each lesson will have a set of instructions that will guide you through the lesson. You will be able to see the code you write in real time and see the results of your code.`,
      `This is an example lesson to demonstrate how Codemasters works. In this lesson, you will learn how to create a simple web page with <code>html</code>, <code>css</code> and <code>javascript</code> files. Please follow the instructions below to work on this lesson challange.`,
    ],
  },
  {
    type: 'instruction',
    title: 'Instructions',
    content: [
      {
        stage: 1,
        instruction: `In HTML files, create element <code>h1</code> with text <code>Heading 1</code>`,
      },
      {
        stage: 2,
        instruction: `Create element <code>h2</code> with text <code>Heading 2</code>`,
      },
      {
        stage: 3,
        instruction: `Create element <code>h3</code> with text <code>Heading 3</code>`,
      },
      {
        stage: 4,
        instruction: `In CSS files, give <code>h1</code> red color (<code>color: rgb(255, 0, 0);</code>)`,
      },
      {
        stage: 5,
        instruction: `In HTML files, give <code>h2</code> id of <code>heading-2</code>`,
      },
      {
        stage: 6,
        instruction: `In Javascript files, change <code>innerText</code> of <code>heading-2</code> to <code>Bye World!</code>`,
      },
    ],
  },
];

module.exports = {
  SAMPLE_LESSON_DATA,
};
