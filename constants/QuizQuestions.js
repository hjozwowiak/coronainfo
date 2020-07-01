export default [
  {
    question: 'Jaką masz temperaturę ciała?',
    answers: [
      { content: '<36', sick: false },
      { content: '36-37', sick: false },
      { content: '37-38', sick: false },
      { content: '38-39', sick: true },
      { content: '39+', sick: true },
    ],
  },
  {
    question: 'Czy odczuwasz duszności?',
    answers: [
      { content: 'Tak', sick: true },
      { content: 'Nie', sick: false },
    ],
  },
  {
    question: 'Czy masz męczący kaszel?',
    answers: [
      { content: 'Tak', sick: true },
      { content: 'Nie', sick: false },
    ],
  },
  {
    question: 'Czy odczuwasz bóle mięśni?',
    answers: [
      { content: 'Tak', sick: true },
      { content: 'Nie', sick: false },
    ],
  },
  {
    question: 'Czy masz problemy z oddychaniem?',
    answers: [
      { content: 'Tak', sick: true },
      { content: 'Nie', sick: false },
    ],
  },
  {
    question: 'Czy odczuwasz stałe zmęczenie?',
    answers: [
      { content: 'Tak', sick: true },
      { content: 'Nie', sick: false },
    ],
  },
  {
    question: 'Ile masz lat?',
    answers: [
      { content: '<18', sick: false },
      { content: '19-25', sick: false },
      { content: '26-35', sick: false },
      { content: '35-45', sick: false },
      { content: '45-60', sick: true },
      { content: '60+', sick: true },
    ],
  },
]
