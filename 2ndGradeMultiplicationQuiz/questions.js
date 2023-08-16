let questions = [
    {
        id: 1,
        question: "2 times 2?",
        answer:"",
        options: [
            "2",
            "4",
            "69",
            "22"
        ]   
    },
    {
        id: 2,
        question: "7 times 8?",
        answer: "56",
        options: [
          "15",
          "2345",
          "76",
          "56"
        ]
      },
      {
        id: 3,
        question: "10 times 10?",
        answer: "100",
        options: [
          "100",
          "10",
          "20",
          "001"
        ]
      },
      {
        id: 4,
        question: "11 times 3?",
        answer: "33",
        options: [
          "33",
          "31",
          "13",
          "14"
        ]
      },
      {
        id: 5,
        question: "how to write 3 times 3 as addition?",
        answer: "3+3+3",
        options: [
          "3+3+3",
          "3+3=3",
          "3 3 3 ",
          "3+33"
        ]
      },
      {
        id: 6,
        question: "3 times 8?",
        answer: "24",
        options: [
          "24",
          "5",
          "113",
          "83"
        ]
      },
      {
        id: 7,
        question: "4 times 5?",
        answer: "20",
        options: [
          "20",
          "13",
          "9",
          "54"
        ]
      },
      {
        id: 8,
        question: "12 times 4?",
        answer: "48",
        options: [
          "48",
          "16",
          "412",
          "44"
        ]
      },
      {
        id: 9,
        question: "12 times 12?",
        answer: "144",
        options: [
          "144",
          "24",
          "142",
          "48"
        ]
      },
      {
        id: 10,
        question: "what is 10+10+10 written as in multiplyication?",
        answer: "10 times 3",
        options: [
          "10 times 3",
          "10 times 20 ",
          "10 times 2"
          
        ]
      },
];

let question_count = 0;
let points = 0;

window.onload = function(){
    show(question_count);
};

function show(count){
    let question = document.getElementById("questions");
    let[first, second, third, fourth] = questions[count].options;

    question.innerHTML = `<h2>Q${count + 1}. ${questions[count].question}</h2>
    <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
    </ul>`;
    toggleActive();  
}

function toggleActive(){
    let option = document.querySelectorAll("li.option");
    for(let i=0; i < option.length; i++){
        option[i].onclick = function(){
            for(let i=0; i < option.length; i++){
                if(option[i].classList.contains("active")){
                    option[i].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}

function next(){

    if(question_count == questions.length -1){
        location.href = "quiz.html";
    }
    console.log(question_count);

let user_answer = document.querySelector("li.option.active").innerHTML;

if(user_answer == questions[question_count].answer){
    points += 10;
    sessionStorage.setItem("points",points);
}
console.log(points);

question_count++;
show(question_count);
}
