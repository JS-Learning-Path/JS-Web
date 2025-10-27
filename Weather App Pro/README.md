# Promise / Async & Await


# Какво е localStorage 
localStorage е място в браузъра, където можем да запазваме информация, така че тя да не се губи при презареждане на страницата.

Например, ако потребителят напише град в weather app, можем да го запазим и при следващо отваряне — автоматично да му покажем последното търсене.

## Основни методи:
```js
// Запазване на стойност
localStorage.setItem("ключ", "стойност");

// Взимане на стойност
const име = localStorage.getItem("ключ");

// Изтриване
localStorage.removeItem("ключ");

// Изчистване на всичко
localStorage.clear();
```

Много е важно да се знае:
* Всички стойности се съхраняват като текст (string).
Ако искаме да пазим обект → трябва да използваме JSON.stringify() и JSON.parse().

## Препоръчани материали :
1. w3schools:
   https://www.w3schools.com/jsref/prop_win_localstorage.asp
2. MDN Web Docs:
   https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage


## Task 1: Намерете грешките в кода и ги оправете

### 1.1

```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Успех'), 1000);
});

promise
  .then(result => {
    console.log(result);
    throw 'Грешка'; // имаме throw, но няма catch
  });
```
<details>
  <summary>Решение</summary>

Tрябва да добавим .catch().
</details>

### 1.2

```javascript
const myPromise = new Promise((resolve, reject) => {
  const success = false;

  if (success) {
    reject('Успешно!');
  } else {
    resolve('Грешка!');
  }
});

myPromise
  .then(result => console.log(result))
  .catch(err => console.log(err));
```
<details>
  <summary>Решение</summary>

* Логиката в ``if`` е обърната.
* При ``success === false`` трябва да се reject, а при ``success === true`` да се resolve.
* В момента, когато всъщност имаме грешка ``(success === false)``, промисът се изпълнява като успешен (resolve), което е объркващо.
</details>

### 1.3

```javascript
const delayed = new Promise((resolve, reject) => {
  setTimeout(() => 'Готово', 1000);
});

delayed
  .then(result => console.log(result))
  .catch(err => console.error(err));
```
<details>
  <summary>Решение</summary>

  * В **setTimeout** не се извиква resolve().
  * В момента функцията връща просто '**Готово**', но промисът не се изпълнява, защото ``resolve('Готово')`` липсва.
* Поправка:
```javascript
setTimeout(() => resolve('Готово'), 1000);
```
</details>

### 1.4

```javascript   
function wait(ms) {
  return new Promise(resolve => setTimeout(() => resolve('Готово!'), ms));
}

async function doSomething() {
  const result = wait(1000);
  console.log(result);
}

doSomething();
```
<details>
    <summary>Решение</summary>
    
    * Липсва ``await`` пред ``wait(1000)``.
    * В момента ``result`` е промис, а не резултатът от него.   
    * Поправка:
```javascript
   async function doSomething() {
  const result = await wait(1000);
  console.log(result); // 'Готово!'
}
```
</details>

### 1.5

```javascript
function failAfter(ms) {
  return new Promise((resolve, reject) => setTimeout(() => reject('Грешка!'), ms));
}

async function test() {
  const result = failAfter(1000);
  try {
    console.log(result);
  } catch (err) {
    console.error('Error:', err);
  }
}

test();
```
<details>
    <summary>Решение</summary>
    
    * Грешката от failAfter няма да бъде хваната, защото ``await`` липсва.
    * ``try/catch`` трябва да обвива await.
  
    * Поправка:
  * 
 ```javascript

 async function test() {
  try {
    const result = await failAfter(1000);
    console.log(result);
  } catch (err) {
    console.error('Error:', err); // 'Error: Грешка!'
  }
}

```

</details>

## Task 2:  Проверка на число
**Описание**:
Напишете Promise, който проверява дали дадено число е четно или нечетно.

**Входни** данни:
Число num.

**Очакван** **резултат**:
Ако извикаш с ``checkEven(5)``, ще изведе:
```
Числото е нечетно
```
Ако извикаш с ``checkEven(8)``, ще изведе:
```
Числото е четно
```

**Изискване**:

* Ако числото е четно, Promise-а трябва да се resolve с текста "Числото е четно".
* Ако числото е нечетно, Promise-а трябва да се reject с текста "Числото е нечетно".

<details>
  <summary>Решение</summary>

```javascript
function checkEven(num) {
  return new Promise((resolve, reject) => {
    if (num % 2 === 0) {
      resolve('Числото е четно');
    } else {
      reject('Числото е нечетно');
    }
  });
}

// Използване
checkEven(4)
  .then(msg => console.log(msg))
  .catch(err => console.log(err));
```
</details>

## Task 3: Симулиране на асинхронна операция (таймер)
**Описание**:
Създайте Promise, който се изпълнява след определен брой секунди и връща резултат.

**Входни данни**:
Брой секунди (seconds).

**Очакван резултат:**
-> след 2 секунди
```
Готово след 2 секунди
```

**Изискване**:
* След изчакване на seconds секунди, Promise-а да се resolve с текста ``"Готово след X секунди"``.

<details>
  <summary>Решение</summary>

```javascript
function wait(seconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Готово след ${seconds} секунди`);
    }, seconds * 1000);
  });
}

// Използване
wait(2).then(msg => console.log(msg));
```
</details>

### Task 4: Проверка на низ
**Описание**: 
Създайте Promise, който проверява дали даден низ съдържа определена дума.

**Входни данни**:
* Низ (string)
* Дума за търсене (word)

**Очакван резултат**:
Ако извикаш с findWord('Аз обичам Python', 'JavaScript'), ще изведе:
```
Думата не е намерена
```
Ако извикаш с findWord('Аз обичам JavaScript', 'JavaScript'), ще изведе:
```Думата е намерена
```
**Изискване**:
* Ако низът съдържа думата, Promise-а се resolve с "Думата е намерена".
* Ако не съдържа думата, Promise-а се reject с "Думата не е намерена".

<details>
  <summary>Решение</summary>

```javascript
function findWord(text, word) {
  return new Promise((resolve, reject) => {
    if (text.includes(word)) {
      resolve('Думата е намерена');
    } else {
      reject('Думата не е намерена');
    }
  });
}

// Използване
findWord('Аз обичам JavaScript', 'JavaScript')
  .then(msg => console.log(msg))
  .catch(err => console.log(err));
```
</details>


## Task 5: Изчакване на таймер
**Описание**:
Създайте асинхронна функция, която изчаква определен брой секунди и връща съобщение.

**Входни данни**:
Брой секунди (seconds).

**Очакван резултат:**
-> след 3 секунди
```Изчаках 3 секунди
```
**Изискване**:
* Използвайте async/await.
* Използвайте await с функция, която връща Promise.
* След изчакване на seconds секунди, функцията трябва да върне текста ``"Изчаках X секунди"``.

<details>
  <summary>Решение</summary>

```javascript
function wait(seconds) {
  return new Promise(resolve => setTimeout(() => resolve(seconds), seconds * 1000));
}

async function delay(seconds) {
  const result = await wait(seconds);
  return `Изчакано ${result} секунди`;
}

// Използване
delay(2).then(msg => console.log(msg));
```
</details>

## Task 6: Задача: “Async Greeting App”
**Цел**:
Да се направи малко приложение, което показва поздравително съобщение, но този път с помощта на async/await, вместо callback.
Програмата ще симулира „бавна“ операция (например взимане на данни от сървър), като използва setTimeout и Promise.

**Изисквания**:
1. Да има input за въвеждане на име и бутон „Поздрави ме“.
2. При натискане на бутона:
* Показва съобщение „Подготвям поздрав...“.
* След 1 секунда се появява: „Здравей, [име]! 🎉“.
3. Използвай Promise и async/await.
4. Да се използва DOM API.
5. HTML и CSS да са отделени.
6. Страницата да е красива и центрирана.

**Стъпка по стъпка**:
1. Създай index.html с input, button и paragraph.
2. Направи стилен style.css.
3. В script.js:
* Функция getGreeting(name) → връща Promise, който се resolve-ва след 1 секунда.
* Асинхронна функция displayGreeting() → използва await getGreeting(name).
* DOM обработка при натискане на бутона.

![alt text](./Img/image.png)
![alt text](./Img/image-1.png)
![alt text](./Img/image-2.png)

## Task: Weather App Pro
**Цел**:
Да се направи малко приложение, което показва времето в даден град.
Да може да:
* показва температура и състояние;
* помни последно търсения град (с localStorage);
* сменя тема (ден/нощ);
* симулира бавен отговор с Promise и async/await.

**Изисквания**:
1. Въвеждаш име на град и натискаш бутон “Покажи времето”.
2. Показва “Зареждам…” и след 2 секунди:

* температура,
* описание на времето,
* подходящ емоджи.

3. Ако градът не е намерен → показва грешка.
4. Добавен бутон “Смени тема 🌙”.
5. Последният търсен град се запомня и показва при презареждане на страницата.
![alt text](/Img/image-3.png)

![alt text](/Img/image-4.png)

**Какво демонстрира тази версия:**
| Функция                   | Обяснение                                    |
| ------------------------- | -------------------------------------------- |
| **DOM API**               | Работа с елементи, събития, стилове          |
| **Promise + async/await** | Симулира забавяне на “сървър”                |
| **Обработка на грешки**   | `try...catch` при невалиден град             |
| **Теми (ден/нощ)**        | Смяна на класове чрез `classList.toggle`     |
| **LocalStorage**          | Запомня последния търсен град                |
| **UX подобрения**         | „Зареждам...“, скриване/показване на блокове |
