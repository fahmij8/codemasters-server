const SAMPLE_LESSON_DATA = [
  {
    key: 'intro',
    type: 'intro',
    title: 'What is Codemasters?',
    content: [
      `Welcome to Codemasters! Codemasters is a platform that allows you to learn programming languages and frameworks through interactive lessons. Each lesson will have a set of instructions that will guide you through the lesson. You will be able to see the code you write in real time and see the results of your code.`,
      `This is an example lesson to demonstrate how Codemasters works. In this lesson, you will learn how to create a simple web page with <code>html</code>, <code>css</code> and <code>javascript</code> files. Please follow the instructions below to work on this lesson challange.`,
    ],
  },
  {
    key: 'instruction',
    type: 'instruction',
    title: 'Instructions',
    content: [
      {
        key: 'stage-1',
        stage: 1,
        instruction: `In HTML files, create element <code>h1</code> with text <code>Heading 1</code>`,
      },
      {
        key: 'stage-2',
        stage: 2,
        instruction: `Create element <code>h2</code> with text <code>Heading 2</code>`,
      },
      {
        key: 'stage-3',
        stage: 3,
        instruction: `Create element <code>h3</code> with text <code>Heading 3</code>`,
      },
      {
        key: 'stage-4',
        stage: 4,
        instruction: `In CSS files, give <code>h1</code> red color (<code>color: rgb(255, 0, 0);</code>)`,
      },
      {
        key: 'stage-5',
        stage: 5,
        instruction: `In HTML files, give <code>h2</code> id of <code>heading-2</code>`,
      },
      {
        key: 'stage-6',
        stage: 6,
        instruction: `In Javascript files, change <code>innerText</code> of <code>heading-2</code> to <code>Bye World!</code>`,
      },
    ],
  },
];

const LESSONS_DATA = [
  {
    id: 1,
    title: 'Sample Lesson 1',
    description:
      'This is a sample lesson to demonstrate how Codemasters works.',
    link: '/courses/sample',
  },
  {
    id: 2,
    title: 'HTML & CSS Basics',
    description: 'Learn the basics of HTML and CSS.',
    link: '',
  },
  {
    id: 3,
    title: 'Javascript Basics',
    description: 'Learn the basics of Javascript.',
    link: '',
  },
];

module.exports = {
  SAMPLE_LESSON_DATA,
  LESSONS_DATA,
};
