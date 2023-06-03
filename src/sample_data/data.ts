export const sections = [
  {
    id: 'section-1',
    title: 'Section 1',
    sequence: 1,
    completed: false,
    modules: [
      {
        id: 'module-1',
      },
      {
        id: 'module-2',
      },
    ],
  },
  {
    id: 'section-2',
    title: 'Section 2',
    sequence: 4,
    completed: false,
    modules: [
      {
        id: 'module-3',
      },
      {
        id: 'module-5',
      },
      {
        id: 'module-7',
      },
    ],
  },
  {
    id: 'section-3',
    title: 'Section 3',
    sequence: 3,
    completed: true,
    modules: [
      {
        id: 'module-6',
      },
      {
        id: 'module-8',
      },
    ],
  },
  {
    id: 'section-4',
    title: 'Section 4',
    sequence: 2,
    completed: false,
    modules: [
      {
        id: 'module-4',
      },
    ],
  },
  {
    id: 'section-5',
    title: 'Section 5',
    sequence: 3,
    completed: false,
    modules: [
      {
        id: 'module-9',
      },
      {
        id: 'module-10',
      },
    ],
  },
];

// list of modules related to sections by section_id above, sequence is the order of modules in each section
export const modules = [
  {
    id: 'module-1',
    title: 'Module 1',
    sequence: 1,
    completed: false,
    section_id: 'section-1',
    lessons: [
      {
        id: 'lesson-3',
      },
      {
        id: 'lesson-6',
      },
    ],
  },
  {
    id: 'module-2',
    title: 'Module 2',
    sequence: 3,
    completed: false,
    section_id: 'section-1',
    lessons: [
      {
        id: 'lesson-1',
      },
      {
        id: 'lesson-2',
      },
    ],
  },
  {
    id: 'module-3',
    title: 'Module 3',
    sequence: 2,
    completed: false,
    section_id: 'section-6',
    lessons: [
      {
        id: 'lesson-4',
      },
      {
        id: 'lesson-5',
      },
      {
        id: 'lesson-9',
      },
    ],
  },
  {
    id: 'module-4',
    title: 'Module 4',
    sequence: 5,
    completed: false,
    section_id: 'section-4',
    lessons: [
      {
        id: 'lesson-7',
      },
      {
        id: 'lesson-8',
      },
    ],
  },
  {
    id: 'module-5',
    title: 'Module 5',
    sequence: 6,
    completed: false,
    section_id: 'section-2',
    lessons: [
      {
        id: 'lesson-12',
      },
      {
        id: 'lesson-13',
      },
    ],
  },
  {
    id: 'module-6',
    title: 'Module 6',
    sequence: 4,
    completed: false,
    section_id: 'section-3',
    lessons: [
      {
        id: 'lesson-11',
      },
      {
        id: 'lesson-10',
      },
    ],
  },
  {
    id: 'module-7',
    title: 'Module 7',
    sequence: 7,
    completed: false,
    section_id: 'section-2',
    lessons: [
      {
        id: 'lesson-15',
      },
      {
        id: 'lesson-17',
      },
      {
        id: 'lesson-14',
      },
    ],
  },
  {
    id: 'module-8',
    title: 'Module 8',
    sequence: 7,
    completed: false,
    section_id: 'section-3',
    lessons: [
      {
        id: 'lesson-16',
      },
      {
        id: 'lesson-20',
      },
      {
        id: 'lesson-18',
      },
    ],
  },
  {
    id: 'module-9',
    title: 'Module 9',
    sequence: 9,
    completed: false,
    section_id: 'section-5',
    lessons: [
      {
        id: 'lesson-23',
      },
      {
        id: 'lesson-19',
      },
      {
        id: 'lesson-22',
      },
    ],
  },
  {
    id: 'module-10',
    title: 'Module 10',
    sequence: 10,
    completed: false,
    section_id: 'section-5',
    lessons: [
      {
        id: 'lesson-24',
      },
      {
        id: 'lesson-21',
      },
    ],
  },
];

// list of lessons related to modules by module_id above
export const lessons = [
  {
    id: 'lesson-1',
    title: 'Lesson 1',
    completed: false,
    module_id: 'module-2',
    content: 'Lesson 1 content',
    sequence: 1,
  },
  {
    id: 'lesson-2',
    title: 'Lesson 2',
    completed: false,
    module_id: 'module-2',
    content: 'Lesson 2 content',
    sequence: 2,
  },
  {
    id: 'lesson-3',
    title: 'Lesson 3',
    completed: false,
    module_id: 'module-1',
    content: 'Lesson 3 content',
  },
  {
    id: 'lesson-4',
    title: 'Lesson 4',
    completed: false,
    module_id: 'module-3',
    content: 'Lesson 4 content',
    sequence: 1,
  },
  {
    id: 'lesson-5',
    title: 'Lesson 5',
    completed: false,
    module_id: 'module-3',
    content: 'Lesson 5 content',
    sequence: 2,
  },
  {
    id: 'lesson-6',
    title: 'Lesson 6',
    completed: false,
    module_id: 'module-1',
    content: 'Lesson 6 content',
    sequence: 3,
  },
  {
    id: 'lesson-7',
    title: 'Lesson 7',
    completed: false,
    module_id: 'module-4',
    content: 'Lesson 7 content',
    sequence: 1,
  },
  {
    id: 'lesson-8',
    title: 'Lesson 8',
    completed: false,
    module_id: 'module-4',
    content: 'Lesson 8 content',
    sequence: 2,
  },
  {
    id: 'lesson-9',
    title: 'Lesson 9',
    completed: false,
    module_id: 'module-3',
    content: 'Lesson 9 content',
    sequence: 3,
  },
  {
    id: 'lesson-10',
    title: 'Lesson 10',
    completed: false,
    module_id: 'module-6',
    content: 'Lesson 10 content',
    sequence: 1,
  },
  {
    id: 'lesson-11',
    title: 'Lesson 11',
    completed: false,
    module_id: 'module-6',
    content: 'Lesson 11 content',
    sequence: 2,
  },
  {
    id: 'lesson-12',
    title: 'Lesson 12',
    completed: false,
    module_id: 'module-5',
    content: 'Lesson 12 content',
    sequence: 1,
  },
  {
    id: 'lesson-13',
    title: 'Lesson 13',
    completed: false,
    module_id: 'module-5',
    content: 'Lesson 13 content',
    sequence: 2,
  },
  {
    id: 'lesson-14',
    title: 'Lesson 14',
    completed: false,
    module_id: 'module-7',
    content: 'Lesson 14 content',
    sequence: 1,
  },
  {
    id: 'lesson-15',
    title: 'Lesson 15',
    completed: false,
    module_id: 'module-7',
    content: 'Lesson 15 content',
    sequence: 2,
  },
  {
    id: 'lesson-16',
    title: 'Lesson 16',
    completed: false,
    module_id: 'module-8',
    content: 'Lesson 16 content',
    sequence: 1,
  },
  {
    id: 'lesson-17',
    title: 'Lesson 17',
    completed: false,
    module_id: 'module-7',
    content: 'Lesson 17 content',
    sequence: 3,
  },
  {
    id: 'lesson-18',
    title: 'Lesson 18',
    completed: false,
    module_id: 'module-8',
    content: 'Lesson 18 content',
    sequence: 2,
  },
  {
    id: 'lesson-19',
    title: 'Lesson 19',
    completed: false,
    module_id: 'module-9',
    content: 'Lesson 19 content',
    sequence: 1,
  },
  {
    id: 'lesson-20',
    title: 'Lesson 20',
    completed: false,
    module_id: 'module-8',
    content: 'Lesson 20 content',
    sequence: 3,
  },
  {
    id: 'lesson-21',
    title: 'Lesson 21',
    completed: false,
    module_id: 'module-10',
    content: 'Lesson 21 content',
    sequence: 1,
  },
  {
    id: 'lesson-22',
    title: 'Lesson 22',
    completed: false,
    module_id: 'module-9',
    content: 'Lesson 22 content',
    sequence: 2,
  },
  {
    id: 'lesson-23',
    title: 'Lesson 23',
    completed: false,
    module_id: 'module-9',
    content: 'Lesson 23 content',
    sequence: 3,
  },
  {
    id: 'lesson-24',
    title: 'Lesson 24',
    completed: false,
    module_id: 'module-10',
    content: 'Lesson 24 content',
    sequence: 2,
  },
];

export class Section {
  id: string;
  title: string;
  sequence: number;
  completed: boolean;
  modules: Module[];

  constructor({
    id,
    title,
    sequence,
    completed,
    modules,
  }: {
    id: string;
    title: string;
    sequence: number;
    completed: boolean;
    modules: Module[];
  }) {
    this.id = id;
    this.title = title;
    this.sequence = sequence;
    this.completed = completed;
    this.modules = modules;
  }
}

export class Module {
  id: string;
  title: string;
  sequence: number;
  completed: boolean;
  section_id: string;
  lessons: Lesson[];

  constructor({
    id,
    title,
    sequence,
    completed,
    section_id,
    lessons,
  }: {
    id: string;
    title: string;
    sequence: number;
    completed: boolean;
    section_id: string;
    lessons: Lesson[];
  }) {
    this.id = id;
    this.title = title;
    this.sequence = sequence;
    this.completed = completed;
    this.section_id = section_id;
    this.lessons = lessons;
  }
}

export class Lesson {
  id: string;
  title: string;
  completed: boolean;
  module_id: string;
  content: string;
  sequence: number;

  constructor({
    id,
    title,
    completed,
    module_id,
    content,
    sequence,
  }: {
    id: string;
    title: string;
    completed: boolean;
    module_id: string;
    content: string;
    sequence: number;
  }) {
    this.id = id;
    this.title = title;
    this.completed = completed;
    this.module_id = module_id;
    this.content = content;
    this.sequence = sequence;
  }
}
