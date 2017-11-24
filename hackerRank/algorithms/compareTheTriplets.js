const calculatePoints = (notesA, notesB) => {
  let length = notesA.length;
  const studentsGrades = { a: 0, b: 0 };
  while (length--) {
    let gradeDifference = notesA[length] - notesB[length];
    if (gradeDifference !== 0) {
      studentsGrades[gradeDifference > 0 ? 'a' : 'b']++;
    }
  }
  return `${studentsGrades.a} ${studentsGrades.b}`;
};

module.exports = calculatePoints;