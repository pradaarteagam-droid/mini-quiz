const questions = [
 {q:'Choose the correct sentence:', a:['She have finished her homework.','She has finished her homework.','She is finish her homework.'], correct:1},
 {q:'What is the past participle of “write”?', a:['Wrote','Written','Writing'], correct:1},
 {q:'Complete: “They ___ studied English for two years.”', a:['have','has','is'], correct:0},
 {q:'Choose the correct question:', a:['Have you ever visited Bogotá?','Did you ever have visited Bogotá?','Has you ever visited Bogotá?'], correct:0},
 {q:'Complete: “I have ___ my project.”', a:['finish','finished','finishing'], correct:1}
];
let index=0, score=0, answered=false;
const question=document.querySelector('#question'), answers=document.querySelector('#answers'), feedback=document.querySelector('#feedback'), next=document.querySelector('#next');
function show(){const item=questions[index];document.querySelector('#progress').textContent=`Question ${index+1} of ${questions.length}`;document.querySelector('#score').textContent=`Score: ${score}`;document.querySelector('#barFill').style.width=`${(index+1)/questions.length*100}%`;question.textContent=item.q;feedback.textContent='';answered=false;next.disabled=true;answers.innerHTML='';item.a.forEach((text,i)=>{const b=document.createElement('button');b.textContent=text;b.addEventListener('click',()=>choose(i));answers.append(b)});next.textContent=index===questions.length-1?'See results':'Next question';}
function choose(choice){if(answered)return;answered=true;const correct=questions[index].correct;[...answers.children].forEach((b,i)=>{b.disabled=true;if(i===correct)b.classList.add('correct');else if(i===choice)b.classList.add('wrong')});if(choice===correct){score++;feedback.textContent='Correct! Well done.';feedback.style.color='#15803d'}else{feedback.textContent='Not quite. Review the highlighted answer.';feedback.style.color='#b91c1c'}document.querySelector('#score').textContent=`Score: ${score}`;next.disabled=false;}
next.addEventListener('click',()=>{if(!answered)return;if(index<questions.length-1){index++;show()}else{question.textContent=`You scored ${score} out of ${questions.length}!`;answers.innerHTML='';feedback.textContent=score>=4?'Excellent work!':'Keep practicing — you are improving.';next.textContent='Try again';next.disabled=false;next.onclick=()=>{index=0;score=0;next.onclick=null;show()};}});show();
