import './style.css'
import { addCourse } from './server.ts'
import type { Courseinfo } from './server.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
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
    <input id="code" placeholder="Kurskod" required />
    <input id="name" placeholder="Kursnamn" required />
    <input id="progression" placeholder="Progression" required />
    <input id="syllabus" placeholder="Kursplan" required />
    <button type="submit">Lägg till kurs</button>
  </form>

`;

const form = document.querySelector<HTMLFormElement>('#courseform')!;

//Händelselyssnare
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const course: Courseinfo = {
    code: (document.querySelector('#code') as HTMLInputElement).value,
    name: (document.querySelector('#name') as HTMLInputElement).value,
    progression: (document.querySelector('#progression') as HTMLInputElement).value,
    syllabus: (document.querySelector('#syllabus') as HTMLInputElement).value
  };

  addCourse(course);
  form.reset();
});



