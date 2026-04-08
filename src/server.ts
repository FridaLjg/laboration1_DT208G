export interface Courseinfo {
  code: string;
  name: string;
  progression: string;
  syllabus: string;
}

const courses: Courseinfo[] = [];

export function addCourse (course:Courseinfo): void {
  courses.push(course);
  newCourse();
}

function newCourse(): void {
  const ul = document.querySelector<HTMLUListElement>("#courselist")!;
  ul.innerHTML = " ";

  courses.forEach(course => {
  const li = document.createElement("li");

  li.innerHTML = `
  ${course.code} - ${course.name} - ${course.progression} - ${course.syllabus}
  `;

  ul.appendChild(li);
})
}


