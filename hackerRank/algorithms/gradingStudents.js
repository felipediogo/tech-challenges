const processGrades = (grades) => {
  return grades.reduce((acc, grade) => {
    let newGrade = grade;
    if (grade >= 38) {
      const mod = (grade % 5);
      if (mod > 2) {
        newGrade += (5 - mod);
      }
    }
    acc.push(newGrade);
    return acc;
  }, []);
};

module.exports = processGrades;