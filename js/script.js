document.addEventListener("DOMContentLoaded", () => {
  const questions = [
    {
      question: "Что такое операционная система?",
      response: [
        {
          id: 1,
          text: "Это просто программа на компьютере, как и другие - Word или Chrome",
        },

        {
          id: 2,
          text: "Это показатель того, какой процессор используется на компьютере. Например, 32-битный или 64-битный",
        },
        {
          id: 3,
          text: "Это набор взаимосвязанных программ, осуществляющих управление компьютером и взаимодействие с пользователем",
        },
        {
          id: 4,
          text: "Нет такого понятия, есть понятие 'файловая система'",
        },
      ],

      correctOption: 3,
    },

    {
      question: "Является ли Android операционной системой?",
      response: [
        {
          id: 1,
          text: "Да, это такая же ОС, как и другие, просто для мобильных девайсов",
        },

        {
          id: 2,
          text: "Нет, операционные системы бывают только для ПК",
        },
        {
          id: 3,
          text: "Нет, Android это программа, которая ставится на операционную систему девайса. ОС на разных девайсах разные",
        },
        {
          id: 4,
          text: "Это домашняя страничка в настройках вашего браузера",
        },
      ],
      correctOption: 1,
    },

    {
      question: "Что такое процессор компьютера?",
      response: [
        {
          id: 1,
          text: "Это блок, внутри которого находится дисковод и много разъемов для монитора, клавиатуры и компьютерной мышки",
        },

        {
          id: 2,
          text: "Это общее название всех комплектующих компьютера",
        },
        {
          id: 3,
          text: "Это элемент компьютера, с помощью которого обрабатывается информация, находящаяся как в собственной памяти, так и в памяти других устройств",
        },
        {
          id: 4,
          text: "Это суммарный показатель вычислительной мощности компьютера, например 2,7 ГГц",
        },
      ],

      correctOption: 3,
    },

    {
      question: "Какие бывают разрядности у современных процессоров?",
      response: [
        {
          id: 1,
          text: "32 и 64 бита",
        },

        {
          id: 2,
          text: "12 и 32 бита",
        },
        {
          id: 3,
          text: "15 и 32 бита",
        },
        {
          id: 4,
          text: "86 и 64 бита",
        },
      ],
      correctOption: 1,
    },

    {
      question: "Какой тип процессора чаще всего используют мобильные девайсы?",
      response: [
        {
          id: 1,
          text: "iOS использует Intel, остальные используют AMD",
        },

        {
          id: 2,
          text: "Чаще всего используют Intel",
        },
        {
          id: 3,
          text: "Чаще всего используют AMD",
        },
        {
          id: 4,
          text: "Чаще всего используют ARM",
        },
      ],
      correctOption: 4,
    },

    {
      question: "Для чего компьютеру нужна RAM?",
      response: [
        {
          id: 1,
          text: "Для быстрого доступа к данным",
        },

        {
          id: 2,
          text: "Для долгосрочного хранения данных",
        },
        {
          id: 3,
          text: "Для правильной фрагментации памяти",
        },
        {
          id: 4,
          text: "Для дефрагментации данных",
        },
      ],
      correctOption: 1,
    },

    {
      question: "Чем отличается HDD от SSD?",
      response: [
        {
          id: 1,
          text: "HDD - это твердотельный накопитель без подвижных частей. Более дешевый, чем SSD. HDD работает быстрее",
        },

        {
          id: 2,
          text: "HDD - это твердотельный накопитель без подвижных частей. Более дорогой, чем SSD. HDD работает быстрее",
        },
        {
          id: 3,
          text: "SSD - это твердотельный накопитель без подвижных частей. Более дешевый, чем HDD. SSD работает быстрее",
        },
        {
          id: 4,
          text: "SSD - это твердотельный накопитель без подвижных частей. Более дорогой, чем HDD. SSD работает быстрее",
        },
      ],
      correctOption: 4,
    },

    {
      question: "Как отличаются между собой USB?",
      response: [
        {
          id: 1,
          text: "Бывают только USB 2.0 и 3.2",
        },

        {
          id: 2,
          text: "Бывают только micro-USB и mini-USB",
        },
        {
          id: 3,
          text: "USB отличаются по пропускной способности (micro-USB, mini-USB, lightning и т.д.) и форме (USB 2.0, USB 3.2)",
        },
        {
          id: 4,
          text: "USB отличаются по форме (micro-USB, mini-USB, lightning и т.д.) и пропускной способности (USB 2.0, USB 3.2)",
        },
      ],
      correctOption: 4,
    },

    {
      question: "Какой файловой системы не существует?",
      response: [
        {
          id: 1,
          text: "Fat",
        },

        {
          id: 2,
          text: "NTFS",
        },
        {
          id: 3,
          text: "APFS",
        },
        {
          id: 4,
          text: "BolSFS",
        },
      ],
      correctOption: 4,
    },
  ];

  const options = document.getElementsByClassName("option");

  let shuffledQuestions = [];
  let countCorrectQuestion = [];
  let indexNumber = 0;
  let selectedResponse = [];
  let countCorrectQuestions = 0;

  const maxQuestions = document.getElementById("progress-end");
  const currentProgress = document.getElementById("progress-current");
  const currentProgressLine = document.getElementById("current-progress-line");
  const progressLine = document.getElementById("progress-line");
  const resultsList = document.getElementById("results-list");
  const nextBtn = document.getElementById("next-question-btn");
  const againBtn = document.getElementById("again-test-button");

  maxQuestions.innerHTML = questions.length;

  function shuffle(arr) {
    let newArr = [...arr];
    for (let i = newArr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  }

  function handleQuestions() {
    while (shuffledQuestions.length <= 8) {
      const random = questions[Math.floor(Math.random() * questions.length)];
      if (!shuffledQuestions.includes(random)) {
        let newResponse = shuffle(random.response);
        random.response = newResponse;

        shuffledQuestions.push(random);
      }
    }
    currentProgress.innerHTML = indexNumber + 1;

    let progressWidth =
      (progressLine.offsetWidth / questions.length) * (indexNumber + 1);
    console.log(currentProgressLine.offsetWidth);
    currentProgressLine.style.width = progressWidth + "px";
    currentProgress.style.left = progressWidth - 10 + "px";
  }

  function NextQuestion(index) {
    handleQuestions();
    const currentQuestion = shuffledQuestions[index];
    const radioBtn = document.getElementsByClassName("radio");

    nextBtn.disabled = true;

    document.getElementById("display-question").innerHTML =
      currentQuestion.question;
    for (let i = 0; i < options.length; i++) {
      options[i].innerHTML = currentQuestion.response[i].text;
      radioBtn[i].value = shuffledQuestions[index].response[i].id;
    }
  }

  function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber];
    const currentQuestionAnswer = currentQuestion.correctOption;
    const radioBtn = document.getElementsByClassName("radio");

    for (let i = 0; i < radioBtn.length; i++) {
      if (radioBtn[i].checked && +radioBtn[i].value === currentQuestionAnswer) {
        countCorrectQuestion.push(indexNumber);
      }
      if (radioBtn[i].checked) selectedResponse.push(+radioBtn[i].value);
    }

    if (selectedResponse[indexNumber] === currentQuestionAnswer) {
      countCorrectQuestions++;
      console.log(countCorrectQuestions);
    }

    indexNumber++;
  }

  function handleNextQuestion() {
    checkForAnswer();
    unCheckRadioButtons();
    setTimeout(() => {
      if (indexNumber <= 8) {
        NextQuestion(indexNumber);
      } else {
        handleEndGame();
      }
    }, 1000);
  }

  function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
      options[i].checked = false;
    }
  }

  function handleEndGame() {
    document.getElementById("test").style.display = "none";
    document.getElementById("results").style.display = "flex";

    let resultsItems = [];
    let isCorrect = false;

    const resultsSubtitle = document.getElementById("results-subtitle");

    const optionsWord = ["вопрос", "вопроса", "вопросов"];

    const takeWord = (num, arr) => {
      let res = `${num} `;
      const cases = [2, 0, 1, 1, 1, 2];

      if (num % 100 > 4 && num % 100 < 20) {
        res += arr[cases[0]];
      } else if (num % 10 < 5) {
        res += arr[cases[num % 10]];
      } else {
        res += arr[cases[5]];
      }

      return res;
    };
    console.log(countCorrectQuestions);
    if (
      selectedResponse.length === shuffledQuestions.length &&
      countCorrectQuestions === shuffledQuestions.length
    ) {
      resultsSubtitle.innerHTML =
        "Вы правильно ответили на все вопросы.<br>Вы действительно отлично разбираетесь в IT.";
    } else if (selectedResponse.length === 0) {
      resultsSubtitle.innerHTML =
        "Вы неправильно ответили на все вопросы.<br>Нужно подучить теорию.";
    } else {
      let word = takeWord(countCorrectQuestions, optionsWord);
      resultsSubtitle.innerHTML = `Вы ответили правильно на ${word}.<br>Так держать!`;
    }
    for (let i = 0; i < shuffledQuestions.length; i++) {
      const question = shuffledQuestions[i].question;
      const answer = shuffledQuestions[i].response.map((answer) => {
        if (answer.id === selectedResponse[i]) {
          return answer.text;
        }
      });
      if (selectedResponse[i] === shuffledQuestions[i].correctOption) {
        isCorrect = true;
      } else {
        isCorrect = false;
      }
      const result = `
        <div style=${
          isCorrect ? "background-color:#E5F5E1" : "background-color:#FFE0E0"
        } id="result-item" class="results__item">
          <h3 class="results__item-question">
            ${question}
          </h3>
          <p class="results__item-answer">
            ${answer.join("")}
          </p>
        </div>
      `;
      resultsItems.push(result);
    }
    resultsList.innerHTML = resultsItems.join("");
  }

  const radioBtn = document.getElementsByClassName("radio");

  for (let i = 0; i < radioBtn.length; i++) {
    radioBtn[i].addEventListener("click", () => {
      if (radioBtn[i].checked) {
        nextBtn.disabled = false;
      }
    });
  }

  nextBtn.addEventListener("click", () => {
    handleNextQuestion();
  });
  againBtn.addEventListener("click", () => {
    document.getElementById("test").style.display = "flex";
    document.getElementById("results").style.display = "none";
    shuffledQuestions = [];
    indexNumber = 0;
    selectedResponse = [];
    countCorrectQuestions = 0;

    NextQuestion(0);
  });
  NextQuestion(0);
});
