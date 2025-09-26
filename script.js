//this can be simple array, but if we need any other property
//same as teachers, so keep as array objects
const students = [
  { name: "Samira" },
  { name: "Sepideh" },
  { name: "Evelina" },
  { name: "Maglin" },
  { name: "Anastasia" },
  { name: "Sulakshana" },
  { name: "Janaki" },
  { name: "Irmak" },
  { name: "Christy" },
  { name: "Chanakarn" },
  { name: "Narges" },
  { name: "Yana" },
  { name: "Seda" },
  { name: "Vanitha" },
  { name: "Afrin" },
  { name: "Lucia" },
  { name: "Hajra" },
];

const teachers = [
  { name: "Mack", isAvailable: true },
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
