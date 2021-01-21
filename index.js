// import packages
const chalk = require('chalk');
const readLineSync = require('readline-sync');

//Global variable declaration
const print = console.log
let score=0


// To greet the user
function greeting(){
  print(chalk.yellowBright.bold.bgBlack.underline("How well do you know Manush?"));

  print(` You think you know me well? Try answering some simple questions about me!
`);

  while(true){
    var userName = readLineSync.question(chalk.bold(
    `Hey; Before we start, May I have your name? `));
    if(userName !== ""){
      break
    }
    else{
      console.log("Whoops :(  Enter your real name! \n");
    }
  }
print(`\nWelcome ${userName}!`)

print(`
Please consider answering the following questions! Press 'Q' to Quit anytime out of the QUIZ.
${chalk.bold.bgBlack.green.underline('QUESTIONS\n')}`)

return userName;;

}

// Utility functions

function getColor(no){
  clrlist = ['red', 'green', 'yellow', 'blue','magenta','cyan','red', 'green', 'yellow', 'blue']
  return clrlist[(no-1)%no];
}

function confirmation(confirm){

  let randomNumber= Math.floor(Math.random() * 101);
  let wantToContinue = readLineSync.question(`  
Are you sure about this answer?
${chalk.blueBright(randomNumber)}% of Manush's friends answered this before.
Please answer ${chalk.bold('Y')} to confirm and ${chalk.bold('N')} to change your choice.
`);

  if ( wantToContinue === "Y"){
    confirm+=1;
  }
  else if(wantToContinue === "N"){
    return -1
  }
  return confirm;
}

// Prints the question

function quizQuestionPrint(question, no, isRepeat){
  let color = getColor(no);
  let answer = readLineSync.question(chalk.bold.keyword(color)(no.toString() + ". ") + chalk.underline.bold.keyword(color)(question.question) +  question.options + "\n" + `${chalk.bold.keyword('orange')("Your Answer: ")}`);
  let confirm=0;
  if(answer === question.correct){
    confirm+=1;
  }
  
  else if(answer =="Q"){
    print("Bye Bye. Sad to see you go. :(");
    process.exit(22)
  }

  else if(answer.charCodeAt(0) < 65 || answer.charCodeAt(0) > 68 ){
    print(chalk.bold.red("Oops, seems an invalid choice!\n"));
    quizQuestionPrint(question, no, isRepeat);
  }
  if(isRepeat===0){
  res = confirmation(confirm);
  }
  else{
    res = confirm+1;
  }
  if(res=== -1){
    print(`Try another choice! \n`)
    quizQuestionPrint(question, no,1);
  }

  return res; 
  }


// Question flow 

function quizQuestionFlow(question, no){
  curr_score = quizQuestionPrint(question, no, 0);
  if(curr_score == 2){
    score+=1
  }
  print(`Your score ${score}`)
  console.log("\n");
}

function goodByePrint(){
print(`${chalk.yellow.bold(`
⚡ ⚡ ⚡ ⚡ ⚡ ⚡ ⚡ ⚡ ⚡ ⚡ ⚡ ⚡ ⚡
YOUR SCORE = ${chalk.bold.greenBright(score.toString())}
HIGH SCORE = ${chalk.bold.greenBright('10')}
Made a high score?
Let me Know your score at:
Comment at: https://github.com/Manush54/KnowMe/issues/1
Thanks for playing! 
`)}`)}


let questions = [
  {
    question:"What is Manush's Birthday?",
    options: "\nA. 26/6 \nB. 24/6 \nC. 6/7 \nD. 8/7\n",
    correct: 'A'  
  },
  {
    question:"What is Manush's favourite dish?",
    options: "\nA. Bhaji Pav\nB. Pizza\nC. Chinese\nD. Fafda-Jalebi\n",
    correct: 'B' 
  },
  {
    question:"Who is Manush's favourite cricketer?",
    options: "\nA. Virat Kohli\nB. MS Dhoni \nC. Steve Smith\nD. Shane Watson\n",
    correct: 'C'  
  },
  {
    question:"What does Manush's favourite hobby?",
    options: "\nA. Writing\nB. Reading\nC. Watching\nD. Singing\n",
    correct: 'D'  
  },
  {
    question:"What is Manush's favourite TV Series?",
    options: "\nA. GOT\nB. Stranger Things\nC. Scam 1992\nD. Silicon Valley\n",
    correct: 'B'  
  },
  {
    question:"Where would Manush like to travel?",
    options: "\nA. Mountain\nB. Beach\nC. He doesn't like travelling\nD. Resort\n",
    correct: 'A'  
  },
  {
    question:"What does Manush hate about him?",
    options: "\nA. His Anger\nB. His Introvertedness\nC. Nothing\nD. His Nerdiness\n",
    correct: 'C'
  },
  {
    question:"What is Manush's favourite area of interest?",
    options: "\nA. Coding\nB. Philosophy\nC. Cosmoprinty\nD. All of these\n",
    correct: 'D'  
  },
  {
    question:"What movie/series Manush Hated to its core?",
    options: "\nA. GOT\nB. The perks of being a wallflower\nC. LUDO\nD. All of these\n",
    correct: 'D',  
  },
  {
    question:"If Manush won a Nobel Prize, what would it be?",
    options: "\nA. Best Bathroom Singer Award\nB. Best Memer Award\nC. Best Procractinator Award\nD. Best Nobel Person Award\n",
    correct: 'B'
  }
]

// Driver function
function KnowMeQuiz(){
  greeting()
  questions.forEach((question, index) => quizQuestionFlow(question,index+1));
  goodByePrint()


}

KnowMeQuiz()