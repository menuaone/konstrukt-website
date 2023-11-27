
//!! отображение навбара при нажатии на бургер

function myFunction(){

  let navbar = document.getElementById('nav');

  navbar.classList.toggle('show')
}
  
  // !! Проверка формы на валидность

  // обращаемся к DOM дереву и выбираем форму
const form = document.forms["form"];
const button = form.elements["button"];

// вводимые значения
const inputArr = Array.from(form);
// валидные инпуты, которые нужно проверить
const validinputArr = [];

// пушу в пустой массив значения, которые нужно проверить на валидность
inputArr.forEach((el) => {
  if(el.hasAttribute("data-reg")){
    el.setAttribute("isValid", "0")
    validinputArr.push(el)
  }
});

console.log(validinputArr) - 

// добавляем обработчик события
form.addEventListener("input", inputHandler);
button.addEventListener("click", buttonHandler);

// проверяем необходимый атрибут выбранного элемента
function inputHandler({ target }) {
  if (target.hasAttribute("data-reg")){
    inputCheck(target)
  }
}

// функция проверки инпутов
function inputCheck(el){
  // считываем значение формы
  const inputValue = el.value;
  // считываем регулярное выражение (аттрибур дата рег) - на выходе будет строка 
  const inputReg = el.getAttribute("data-reg")
  // преобразование в тип "регулярное выражение" из строки - js не понимает рег выражения в строках
  const reg = new RegExp(inputReg);

  // console.log(inputValue, reg)

  if (reg.test(inputValue)){
    el.style.border = "2px solid rgb(0, 196, 0)";
  } else {
    el.style.border = "2px solid rgb(255, 0, 0)";
  }
}

function buttonHandler(){
  const isAllValid = [];
  validinputArr.forEach((el) => {
    // постпенно будет пушится 
    isAllValid.push(el.getAttribute("is-valid"))
  });

  const isValid = isAllValid.reduce((acc, current) =>{
    return acc && current;
  });

  // финальное значение isValid строковое - чтобы перевести его в буулеановское значение, необходимо провести следующее ( в скобках if )
  if (!Boolean(Number(isValid))){
    e.preventDefault();
  }
}



