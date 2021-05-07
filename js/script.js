/**
 * Pagination example using JS
 */

const items_per_page = 9;
const buttonList = document.querySelector(".link-list");
const student_list = document.querySelector(".student-list");

buttonList.addEventListener("click", (e) => {
  const button = e.target;
  if ((button.tagName = "BUTTON")) {
    changeActiveButton(button);
    showPage(data, button.textContent - 1);
  }

  /**
   * Change the active class for the clicked button and resets the rest
   * @param {*} button - button that must be have active class
   */
  function changeActiveButton(button) {
    for (const btn of buttonList.children) {
      btn.firstElementChild.className = ""; // removes active class for all button
    }
    button.className = "active";
  }
});

/**
 * Display one page according to the number of item_per_page and data array
 * @param {*} list  - data to be displayed
 * @param {*} page  - page number
 */
function showPage(list, page) {
  const start_index = page * items_per_page;
  const end_index =
    start_index + items_per_page < list.length
      ? start_index + items_per_page
      : list.length; // make sure not to have a end_index greater than the list size
  student_list.innerHTML = "";

  for (let i = start_index; i < end_index; i++) {
    student_list.insertAdjacentHTML("beforeend", createInnerHtml(list[i]));
  }

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

/**
 * Creates and inserts/appends the elements needed for the pagination buttons
 * @param {*} list - data list of the students
 */
function appendPagination(list) {
  const totalButtons = Math.ceil(list.length / items_per_page);
  buttonList.innerHTML = "";
  for (let i = 1; i <= totalButtons; i++) {
    buttonList.insertAdjacentHTML(
      "beforeend",
      `<li>
            <button type="button">${i}</button>
      </li>`
    );
  }
  buttonList.children[0].firstElementChild.className = "active";
}

appendPagination(data);
showPage(data, 0);
