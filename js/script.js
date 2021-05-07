/**
 * Pagination example using JS
 */

const items_per_page = 9;

function showPage(list, page) {
  const start_index = page * items_per_page;
  const end_index = start_index + items_per_page;
  const student_list = document.querySelector(".student-list");
  student_list.innerHTML = "";
  let html_li = "";
  for (let i = start_index; i < end_index; i++) {
    //element = createElement("li", ["className"], ["student-item cf"]);
    html_li += createInnerHtml(list[i]);
  }
  student_list.innerHTML = html_li;
  /*function createElement(type, [...attrs], [...values]) {
    const element = document.createElement(type);
    for (const i in attrs) {
      element[attrs[i]] = values[i];
    }
    return element;
  }*/

  function createInnerHtml(student) {
    return ` <li class="student-item cf">
    <div class="student-details">
      <img class="avatar" src="${student.picture.large}" alt="Profile Picture">
      <h3>${student.name.first + " " + student.name.last}</h3>
      <span class="email">${student.email}</span>
    </div>
    <div class="joined-details">
      <span class="date">Joined ${student.registered.date}</span>
    </div>
  </li>`;
  }
}

function appendPagination(list) {
  const totalButtons = Math.ceil(list.length / items_per_page);
  const buttonList = document.querySelector(".link-list");
  buttonList.innerHTML = "";
  for (let i = 1; i <= totalButtons; i++) {
    buttonList.insertAdjacentHTML(
      "beforeend",
      `<li>
            <button type="button">${i}</button>
      </li>`
    );
  }
}

appendPagination(data);
//showPage(data, 0);
//showPage(data, 1);
//showPage(data, 2);
//showPage(data, 9);
/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

// Call functions
