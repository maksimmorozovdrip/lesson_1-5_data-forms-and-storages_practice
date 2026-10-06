const STORAGE_KEY = "drip-lesson-1-5-application"

// Основные элементы уже найдены: практика посвящена пути данных, а не верстке.
const form = document.querySelector(".application-form")
const result = document.querySelector("#result")
const clearButton = document.querySelector("#clear-draft")
const localStorageStatus = document.querySelector("#local-storage-status")
const sessionStorageStatus = document.querySelector("#session-storage-status")

const nameInput = document.querySelector("#participant-name")
const emailInput = document.querySelector("#participant-email")
const topicSelect = document.querySelector("#workshop-topic")

// БЛОК 5.1
// Получите строку из localStorage. Если она существует, вызовите JSON.parse,
// верните три значения в поля и обновите result и localStorageStatus.


// БЛОКИ 1–4
// 1.2: замените событие click на submit.
form.addEventListener("submit", (event) => {
  event.preventDefault();
  // 1.3: первой строкой остановите стандартное действие формы.

  console.log("1.2. Получено событие", event.type);

result.textContent = "Форма обработана без перезагрузки";

  // 3.1: создайте FormData текущей формы.
const formData = new FormData(form);
const name = formData.get("name");
const email = formData.get("email");
const topic = formData.get("topic");
console.log("Имя пользователя: ", name, "Email: ", email, "Тема мастерской: ", topic);




result.textContent = name + ", заявка на тему «" + topic + "» принята. Подтверждение: " + email;
const application = {
  name, email, topic
};
console.log(application);
const applicationJson = JSON.stringify(application);
localStorage.setItem("formData", applicationJson);
sessionStorage.setItem("formData", applicationJson);

localStorageStatus.textContent = "Черновик сохранен";
sessionStorageStatus.textContent = "Копия существует до закрытия вкладки";
})

const stringJSONform = localStorage.getItem("formData");
  if (stringJSONform){
    const saved =JSON.parse(stringJSONform);
    nameInput.value = saved.name;
    emailInput.value = saved.email;
    topicSelect.value = saved.topic;
    result.textContent = "Черновик восстановлен";
    localStorageStatus.textContent = "Найден сохраненный черновик";

  }
// БЛОК 5.2
clearButton.addEventListener("click", () => {
  localStorage.removeItem("formData");
  form.reset();
  result.textContent = "Черновик удален";
  localStorageStatus.textContent = "Локального черновика нет";


})
