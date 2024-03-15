const getStudentsByLocation = (students, city) => {
  const arrayObjec = students.filter((student) => student.location === city);
  return arrayObjec;
};

export default getStudentsByLocation;
