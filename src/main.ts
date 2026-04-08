import './style.css'
import { addCourse, loadCourses } from './server.ts'
import type { Courseinfo } from './server.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div class=container>
<h1>Kurser</h1>

<table>
  <thead id="table-heading">
    <tr>
      <th>Kurskod</th>
      <th>Kursnamn</th>
      <th>Progression</th>
      <th>Kursplan</th>
      <th>Radera kurs</th>
    </tr>
  </thead>

  <tbody id="courselist"></tbody>
</table>

<h2>Lägg till kurs</h2>

  <form id="courseform">
    <label for="code">Kurskod</label>
    <input id="code" placeholder="Kurskod" required /><br>
    <label for="name">Kursnamn</label>
    <input id="name" placeholder="Kursnamn" required /><br>
    <label for="progression">Progression</label>
    <input id="progression" placeholder="Progression" required /><br>
    <label for="syllabus">Kursplan</label>
    <input id="syllabus" placeholder="Kursplan" required /><br>
    <button type="submit">Lägg till kurs</button>
  </form>
</div>
`;

const form = document.querySelector<HTMLFormElement>('#courseform')!;

//Händelselyssnare
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const getValue = (id: string): string => {
    const input = document.querySelector<HTMLInputElement>(id);
    return input ? input.value : '';
  };

  const course: Courseinfo = {
    code: getValue('#code'),
    name: getValue('#name'),
    progression: getValue('#progression'),
    syllabus: getValue('#syllabus')
  };

  addCourse(course);
  form.reset();
});

loadCourses();



