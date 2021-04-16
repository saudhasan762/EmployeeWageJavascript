console.log("Welcome to Employee Wage Computation program");

const checkAttendence = () => {
    const IS_ABSENT = 0;
    let empCheck = Math.floor(Math.random() * 10) % 2;
    if (empCheck == IS_ABSENT){
        console.log("Employee Is Absent");
    }else{
        console.log("Employee Is Present");
    }
}

const calcWage = () => {
    const IS_ABSENT = 0
    const wage_per_hour = 20;
    let empHr = 0;
    let empCheck = Math.floor(Math.random() * 10) % 2;
    if (empCheck == IS_ABSENT){
        empHr = 8;
    }else{
        empHr = 0;
    }
    let empWage = empHr * wage_per_hour;
    console.log("Employee Wage: ", empWage);
}
calcWage();