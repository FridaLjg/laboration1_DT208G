export interface Courseinfo {
  code: string;
  name: string;
  progression: string;
  syllabus: string;
}

//Ladda kurser från localStorage
const storedItem: string = "courses";
const storedCourses = localStorage.getItem(storedItem);
const courses: Courseinfo[] = storedCourses ? JSON.parse(storedCourses) : [];

//Spara till localStorage
function saveCourses(): void {
  localStorage.setItem(storedItem, JSON.stringify(courses));
}

//Lägg till kurs
export function addCourse(course: Courseinfo): void {
  //Validerar unik kurskod
  const exists = courses.some(
    c => c.code.toLowerCase() === course.code.toLowerCase()
  );

  if (exists) {
    alert("Kursen finns redan!");
    return;
  }

  //Validerar om progression är A, B eller C
  const progression = course.progression.trim().toUpperCase();

  if (!["A", "B", "C"].includes(progression)) {
    alert("Progression måste vara A, B eller C.");
    return;
  }

  courses.push(course);
  updateCourseList();
  saveCourses();
}

//Radera kurs
function deleteCourse(index: number): void {
  courses.splice(index, 1);
  updateCourseList();
  saveCourses();
}
//Uppdatera kurslista
function updateCourseList(): void {
  const tbody = document.querySelector<HTMLUListElement>("#courselist")!;
  tbody.innerHTML = "";

  courses.forEach((course, index) => {
    const tablerow = document.createElement('tr');

    tablerow.innerHTML = `
      <td>${course.code}</td> 
      <td>${course.name}</td>
      <td>${course.progression}</td>
      <td>${course.syllabus}</td>
    `;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Radera';
    deleteButton.addEventListener('click', () => {
      deleteCourse(index);
    });

    tablerow.appendChild(deleteButton);
    tbody.appendChild(tablerow);
  });
}

export function loadCourses(): void {
  updateCourseList();
}



