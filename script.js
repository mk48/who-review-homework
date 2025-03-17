//this can be simple array, but if we need any other property
//same as teachers, so keep as array objects
const students = [
  { name: "Mehrnoosh" },
  { name: "Maria" },
  { name: "Oumaima" },
  { name: "Yiting" },
  { name: "Sunitha" },
  { name: "Sukhwinder" },
  { name: "Prachi" },
  { name: "Busra" },
  { name: "Paloma" },
  { name: "Annamani" },
  { name: "Sravani" },
  { name: "Natalia" },
  { name: "Fatima" },
  { name: "Tejaswini" },
  { name: "Fulya" },
  { name: "Gloryfel" },
];

const teachers = [
  { name: "Henderson", isAvailable: true },
  { name: "Tifana", isAvailable: true },
  { name: "Iga", isAvailable: true },
  { name: "Engiber", isAvailable: true },
  { name: "Kumaran", isAvailable: true },
  { name: "Lukáš", isAvailable: true },
  { name: "Tim", isAvailable: true },
];

function assign() {
  //shuffle students
  const studentsShuffled = shuffle(students);

  //pick available teachers, also shuffle for better randomness
  const availableTeachers = shuffle(teachers.filter((t) => t.isAvailable));
  const teacherCount = availableTeachers.length;

  //loop all students and pick teacher sequently
  const assignments = studentsShuffled.map((s, idx) => ({
    ...s,
    teacher: availableTeachers[idx % teacherCount],
  }));

  showOnTable(assignments);
}

function showOnTable(assignments) {
  let table = document.getElementById("assignmentTableBody");

  //clear existing list if any
  table.innerHTML = "";

  //sort by teacher, so that all students belongs to a teacher listed in order
  const assignmentsSorted = assignments.sort((a, b) => a.teacher.name.localeCompare(b.teacher.name));

  assignmentsSorted.forEach((as) => {
    let newRow = table.insertRow();

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);

    cell1.innerHTML = as.name;
    cell2.innerHTML = as.teacher.name;
  });
}

function shuffle(vals) {
  const shuffled = vals
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return shuffled;
}
