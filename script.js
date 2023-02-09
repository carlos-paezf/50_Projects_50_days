import projectList from "./project-list.json" assert { type: 'json' }


const rows = projectList.map((project, index) => `
    <tr>
        <td class="first">${ index + 1 } </td>
        <td class="second">${ project.name }</td>
        <td class="third">
            <a href="./${ project.urlSegment }/index.html">Live Demo</a>
        </td>
    </tr>
`)


document.getElementById('tbody').innerHTML = rows.join('')