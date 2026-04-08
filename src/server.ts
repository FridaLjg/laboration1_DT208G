export interface Courseinfo {
  code: string;
  name: string;
  progression: string;
  syllabus: string;
}

const courses: Courseinfo[] = [];

export function addCourse(course: Courseinfo): void {
  courses.push(course);
  updateCourseList();
}

//Radera kurs
function deleteCourse(index: number): void {
  courses.splice(index, 1);
  updateCourseList();
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


