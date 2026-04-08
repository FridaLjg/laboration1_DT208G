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
  const ul = document.querySelector<HTMLUListElement>("#courselist")!;
  ul.innerHTML = "";

  courses.forEach((course, index) => {
    const li = document.createElement('li');

    li.innerHTML = `
      ${course.code} – ${course.name} - ${course.progression} - ${course.syllabus}
    `;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Radera';
    deleteButton.addEventListener('click', () => {
      deleteCourse(index);
    });

    li.appendChild(deleteButton);
    ul.appendChild(li);
  });

}


