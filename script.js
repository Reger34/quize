let question=document.querySelector("#qus");
let answer=document.querySelector(".answer");
let next_but=document.querySelector("#next_but")
let currentquestionindex=0;
let score=0;

const questions=[
    {
    question:"What is the syntax for declaring a variable in C++?",
    answer:[
        {text:"var x;", correct:false},
        {text:"variable x;", correct:false},
        {text:"int x;", correct:true},
        {text:"x=1;", correct:false},
    ]
    },
{ //2
    question:"How do you define a function in C++?",
    answer:[
        {text:"func myfunction();", correct:false},
        {text:"def myfunction();", correct:false},
        {text:"void myfunction();", correct:true},
        {text:"function.myfunction;", correct:false},
    ]
},

{ //3
    question:"What is the purpose of the return statement in a function in C++?",
    answer:[
        {text:"To exit the function", correct:true},
        {text:"To print data", correct:false},
        {text:"TO declare vraible", correct:false},
        {text:"TO include data ", correct:false},
    ]
},

{ //4
    question:"How do you create a class in C++?",
    answer:[
        {text:"class Myclass{};", correct:true},
        {text:" create class MyClass {};", correct:false},
        {text:"def class MyClass():", correct:false},
        {text:" MyClass = class {}", correct:false},
    ]
},

{ //5
    question:"What is object-oriented programming (OOP)?",
    answer:[
        {text:" A process of converting objects into classes", correct:false},
        {text:"A process of creating multiple instances of a class", correct:false},
        {text:"A process of creating derived classes from base classes", correct:false},
        {text:"None of the above", correct:true},
    ]
},

{ //6
    question:"How do you define a function in C++?",
    answer:[
        {text:"func myfunction();", correct:false},
        {text:"def myfunction();", correct:false},
        {text:"void myfunction();", correct:true},
        {text:"function.myfunction;", correct:false},
    ]
},

{ //7
    question:"Which keyword is used to achieve inheritance in C++?",
    answer:[
        {text:"extends", correct:false},
        {text:"inherit", correct:false},
        {text:"using", correct:false},
        {text:"class", correct:true},
    ]
},

{ //8
    question:"What is the access specifier used to make members accessible within derived classes in C++?",
    answer:[
        {text:"public", correct:false},
        {text:"private", correct:false},
        {text:"protected", correct:true},
        {text:"friends", correct:false},
    ]
},

{ //9
    question:"What is the default access specifier for members of a class in C++?",
    answer:[
        {text:"private", correct:true},
        {text:"public", correct:false},
        {text:"procted", correct:false},
        {text:"None of the above", correct:false},
    ]
},

{ //10
    question:"What is the difference between ++i and i++ in C++?",
    answer:[
        {text:"++i increments before operation, i++ increments after operation", correct:true},
        {text:"++i increments by 2, i++ increments by 1", correct:false},
        {text:"++i decrements before operation, i++ decrements after operation", correct:false},
        {text:"both are same", correct:false},
    ]
},
]


let begain = () => {
    currentquestionindex=0;
    score=0;
    next_but.innerHTML="Next";
    showquestion();
}
let showquestion= () => {
    
   reset();  
    let currentquestion=questions[currentquestionindex];
    let questionNo=currentquestionindex+1;
    question.innerHTML=questionNo+ ". "+ currentquestion.question;


    currentquestion.answer.forEach(answerp => {
        const button=document.createElement("button")
        button.innerHTML=answerp.text;
        button.classList.add("but");
        answer.appendChild(button);
        if(answerp.correct){
            button.dataset.correct=answerp.correct
        }
        button.addEventListener("click",selectanswer)
            });
}
   
let reset = () => {
    next_but.computedStyleMap.display="none";
    while(answer.firstChild){
        answer.removeChild(answer.firstChild);
        }
}
let selectanswer= (e) => {
    const selectebtn=e.target;
    const isCorrect = selectebtn.dataset.correct === "true";
    if (isCorrect){
        selectebtn.classList.add("correct");
        score=score+1;
        console.log(score);
        } else{
            selectebtn.classList.add("incorrect");
        }
        Array.from(answer.children).forEach(button => {
            if(button.dataset.correct === "true"){
                button.classList.add("correct");
                
            }
            button.disabled= true;
        });
        next_but.style.display = "block";
    
}

 
let handlenext = () => {
    currentquestionindex++;
    if(currentquestionindex < questions.length){
        showquestion();
    }else{
        showscore();
    }
    
}

let showscore = () => {
    reset();
    let qusElement = document.querySelector("#qus");
    qusElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    next_but.innerHTML = "Play again";
    next_but.style.display = "block";
}


next_but.addEventListener("click", () => {
    if(currentquestionindex < questions.length){
        handlenext();
    }else{
        begain();
    }
})
begain();