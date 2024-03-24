// const question1 = document.querySelector('#Q1');
// const question2 = document.querySelector('#Q2');
// const question3 = document.querySelector('#Q3');
// const question4 = document.querySelector('#Q4');
// const answer1 = document.querySelector('#Ans1');
// const answer2 = document.querySelector('#Ans2');
// const answer3 = document.querySelector('#Ans3');
// const answer4 = document.querySelector('#Ans4');

const  question =document.querySelectorAll('.accordion1');

question.forEach(question =>{
    const icon = question.querySelector('.icon');
    // const icon =qicon.querySelector('.plus-sign')
    const ans = question.querySelector('.answer1');

    question.addEventListener('click',() =>{
        ans.classList.toggle('active');
        // icon.classList.toggle('active1')

         if(icon.classList.contains('active1')){
            
            icon.classList.remove('active1');
            icon.classList.add('plus-sign')
             ans.classList.remove('active');
         }
         else{
            icon.classList.add('active1');
            icon.classList.remove('plus-sign')
            ans.classList.add('active');
        }
    })
})
