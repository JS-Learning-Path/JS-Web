# Aсинхронно програмиране
## Открий грешката

### Code 1
```js
<p id="message">Здравей!</p>

<script>
  const msg = document.getElementsById("message");
  msg.textContent = "Добре дошъл!";
</script>
```

### Code 2

```js
<script>
  const btn = document.querySelector("#clickMe");
  btn.addEventListener("click", () => alert("Натисна бутона!"));
</script>

<button id="clickMe">Натисни ме</button>
```

<details>
  <summary>Решение</summary>

```js
<button id="clickMe">Натисни ме</button>

<script>
  const btn = document.querySelector("#clickMe");
  btn.addEventListener("click", () => alert("Натисна бутона!"));
</script>
```
</details>

## Задача 1: "Кой ще се отпечата пръв?"
Описание:
Напиши следния код и опитай да предвидиш изхода преди да го стартираш:

```js
console.log("1");
setTimeout(() => console.log("2"), 0);
console.log("3");
```

<details>
  <summary>Обяснение</summary>
setTimeout е асинхронна функция — тя се поставя в callback queue, докато синхронният код се изпълнява първи.
След като основният код приключи, Event Loop добавя console.log("2") в стека.
</details>

## Задача 2: "Забавено съобщение"
Напиши функция showMessage(message, delay), която приема текст и време в милисекунди и показва съобщението след зададеното време.

**input**
```js
showMessage("Добре дошъл!", 3000);
```
**output след 3 секунди**

```js
Добре дошъл!
```

<details>
  <summary>Решение</summary>

```js
function showMessage(message, delay) {
  setTimeout(() => {
    console.log(message);
  }, delay);
}

showMessage("Добре дошъл!", 3000);
```
</details>

Задача 3: Таймер за обратно броене
Създай функция, която отброява от 5 до 0, като всяка секунда отпечатва числото в конзолата.
Когато стигне до 0, отпечатай „Старт!“.

``Hint``: Използвай **setInterval** и **clearInterval**.

**input**
```js
countdown(5);
```
**output**
```
5
4
3
2
1
0
Старт!
```

<details>
  <summary>Решение</summary>

```js
function countdown(start) {
  let current = start;
  const interval = setInterval(() => {
    console.log(current);
    current--;
    if (current < 0) {
      clearInterval(interval);
      console.log("Старт!");
    }
  }, 1000);
}

countdown(5);
```
</details>


## Задача 4: "Кой готви пицата?"
Описание:
Симулирай следната ситуация с setTimeout:

1. Клиент поръчва пица.
2. Докато пицата се пече (3 секунди), барманът приготвя напитка.
3. Когато пицата е готова, се отпечатва: „Пицата е готова!“

**Очакван изход:**
```bash
Поръчах пица.
Барманът приготвя напитката.
Пицата е готова!
```

<details>
  <summary>Решение</summary>

```js
console.log("Поръчах пица.");

setTimeout(() => {
  console.log("Пицата е готова!");
}, 3000);

console.log("Барманът приготвя напитката.");
```
</details>

## Домашна работа: Мини сайт — “Async Weather App”

Цел: Да комбинираш DOM, Event Handlers, и Async Programming.

### Описание:
Създай мини уеб приложение, което показва времето в даден град.
![alt text](/images/image-1.png)

``Дизайна е примерен, можеш да го направиш както искаш.``

### Изисквания:
1. Страница с:
* <input> за град.
* <button> „Провери времето“.
* <div> за показване на резултата.
* Loader (spinner), който се показва докато “заявката” се обработва.
  ![alt text](/images/image-2.png)
1. Асинхронна функция ``getWeather(city, callback)``:
   * Симулира закъснение от 1-2 секунди с setTimeout.
   * Вика callback с обект ``{temp, description, wind, humidity}`` или null ако градът не съществува.
2. Callback функцията визуализира данните в DOM.
3. Ако градът не е намерен, се показва съобщение.
   ![alt text](/images/image-3.png)
4. UI да е responsive, препоръчително с Bootstrap.
5. Обработката на събитие за бутона и Enter трябва да е правилно реализирана.

Стъпка по стъпка
1. Създай HTML с:
   * <input> за град
   * <button> за заявка
   * <div> за резултати
   * spinner (div.spinner-border от Bootstrap)
2. Добави CSS.
3. Изчакай DOM (DOMContentLoaded).
4. Напиши симулирана асинхронна функция ``getWeather(city, callback)``:
   * В масив имаш фиктивни градове и данни.
  пример:
  ![alt text](/images/image.png)

```js
  // Фиктивни данни за градове
      const weatherData = {
        "София": {temp: 18, description: "Слънчево", wind: 3, humidity: 50},
        "Пловдив": {temp: 20, description: "Облачно", wind: 2, humidity: 60},
        "Варна": {temp: 22, description: "Ясно небе", wind: 4, humidity: 55},
        "Бургас": {temp: 21, description: "Дъжд", wind: 5, humidity: 70}
      };
```

5. Напиши callback функцията displayWeather(data) за визуализация.
   **подсказка**: използвай ``innerHTML``.

6. Добави обработка на бутон и Enter.
   **подсказка**: ``addEventListener``. -> click и keydown.
7. Добави **loader** видим преди “заявката” и скриване след callback.
8. Дизайн с Bootstrap или vanilla CSS.

