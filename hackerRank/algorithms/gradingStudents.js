const processGrades = (grades) => {
  return grades.reduce((acc, grade) => {
    let newGrade = grade;
    if (grade >= 38) {
      const mod = (grade % 5);
      newGrade += mod > 2 ? (5 - mod) : 0;
    }
    acc.push(newGrade);
    return acc;
  }, []);
};

module.exports = processGrades;