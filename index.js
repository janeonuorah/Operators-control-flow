// QUESTION 3
//When a Student inputs their department, it prints out a list of subjects they are to offer for the session. Otherwise, only the general subjects are printed out.

let myDepartment = 'Arts';
// Assigning  subject values to the different departments
let scienceSubjects = 'Physics, Chemistry, Biology, Technical Drawing';
let socialScienceSubjects = 'Accounting, Commerce, Marketing, Geography';
let artsSubjects = 'Government, Economics, Literature, History';
let generalSubjects = ' English, Mathematics';

//using ifelse...elseif statement 
if (myDepartment == 'Arts') {
    console.log(artsSubjects + ',' + generalSubjects);
} else if (myDepartment == 'Science') {
    console.log(scienceSubjects + ',' + generalSubjects);
} else if (myDepartment == 'Social Science') {
    console.log(socialScienceSubjects + ',' + generalSubjects);
} else {
    console.log(generalSubjects);
}


//QUESTION 5
//Assigning variables
let num = 20;
let x = 7;
//Calling the power function
let pwr = x ** 2;
if (pwr <= num) {
    console.log('The number  ' + '' + pwr + '  is the power of 2  nearest to  ' + '' + num);
} else {
    console.log('I have no idea');
}