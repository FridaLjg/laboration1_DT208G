export interface Courseinfo {
  code: string;
  name: string;
  progression: string;
  syllabus: string;
}

//Ladda kurser från localStorage
const storedItem = "courses";
const storedCourses = localStorage.getItem(storedItem);
const courses: Courseinfo[] = storedCourses?JSON.parse(storedCourses): [];

//Spara till localStorage
function saveCourses(): void {
  localStorage.setItem(storedItem, JSON.stringify(courses));
}

//Lägg till kurs
export function addCourse(course: Courseinfo): void {
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



