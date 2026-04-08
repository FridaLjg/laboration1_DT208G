interface Courseinfo {
  code: string;
  name: string;
  progression: string;
  syllabus: string;
}

const courses: Courseinfo[] = [];

export function addCourse (course:Courseinfo): void {
  courses.push(course);
}

addCourse({
  code: "DT207G",
  name: "Webbutveckling",
  progression: "A",
  syllabus: "url.se"
});

console.log(addCourse);