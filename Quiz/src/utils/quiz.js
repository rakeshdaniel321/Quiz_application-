export const calcScore = (quiz, answers) =>
  quiz.questions.reduce((sum, q, i) => (answers[i] === q.answer ? sum + 1 : sum), 0);