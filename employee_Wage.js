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
    const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const PART_TIME_HOUR = 4;
    const FULL_TIME_HOUR = 8;
    const WAGE_PER_HOUR = 20;

    let empHR = 0;
    let empCheck = Math.floor(Math.random()*10)%3;
    switch(empCheck){
        case IS_PART_TIME:
            empHR = PART_TIME_HOUR;
            break;
        case IS_FULL_TIME:
            empHR = FULL_TIME_HOUR;
            break;
        default:
            empHR = 0;
    }

    let empWage = empHR * WAGE_PER_HOUR;
    console.log("Employee Wage: "+ empWage);
}

const calWageForMonth = () => {
    const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const PART_TIME_HOURS = 4;
    const FULL_TIME_HOURS = 8;
    const WAGE_PER_HOUR = 20;
    const NUM_OF_WORKING_DAYS = 20;

    function getWorkingHours(empCheck){
        switch (empCheck){
            case IS_PART_TIME:
                return PART_TIME_HOURS;
            case IS_FULL_TIME:
                return FULL_TIME_HOURS;
            default:
                return 0;
        }
    }

    let totalEmpHrs = 0;
    for(let day = 0; day < NUM_OF_WORKING_DAYS; day++){
        let empCheck = Math.floor(Math.random() * 10) % 3;
        totalEmpHrs += getWorkingHours(empCheck);
    }

    let empWage = totalEmpHrs * WAGE_PER_HOUR;
    console.log("Total Employee Hours: "+ totalEmpHrs +", Total Employee Wage : " + empWage);
} 

const calcWageForConditon = () => {
    const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const PART_TIME_HOURS = 4;
    const FULL_TIME_HOURS = 8;
    const WAGE_PER_HOUR = 20;
    const NUM_OF_WORKING_DAYS = 20;
    const MAX_HRS_IN_MONTH = 100;

    function getWorkingHours(empCheck){
        switch (empCheck){
            case IS_PART_TIME:
                return PART_TIME_HOURS;
            case IS_FULL_TIME:
                return FULL_TIME_HOURS;
            default:
                return 0;
        }
    }

    let totalEmpHrs = 0;
    let totalWorkingDays = 0;
    while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        totalEmpHrs += getWorkingHours(empCheck);
    }

    let empWage = totalEmpHrs * WAGE_PER_HOUR;
    console.log("Total Days: "+ totalWorkingDays +", Total Employee Hours: "+ totalEmpHrs +", Total Employee Wage : " + empWage);
}

const calcWageUC8 = () => {
    const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const PART_TIME_HOURS = 4;
    const FULL_TIME_HOURS = 8;
    const WAGE_PER_HOUR = 20;
    const NUM_OF_WORKING_DAYS = 20;
    const MAX_HRS_IN_MONTH = 160;
    let empDailyWageArr = new Array();
    let empHrs;
    function getWorkingHours(empCheck){
        switch (empCheck){
            case IS_PART_TIME:
                return PART_TIME_HOURS;
            case IS_FULL_TIME:
                return FULL_TIME_HOURS;
            default:
                return 0;
        }
    }

    function calculatingDailyWage(){
        return empHrs * WAGE_PER_HOUR;
    }
    let totalEmpHrs = 0;
    let totalWorkingDays = 0;
    while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        empHrs = getWorkingHours(empCheck);
        totalEmpHrs += empHrs;
        empDailyWageArr.push(calculatingDailyWage(empHrs));
    }

    let empWage = calculatingDailyWage(totalEmpHrs);
    console.log("Total Days: "+ totalWorkingDays +", Total Employee Hours: "+ totalEmpHrs +", Total Employee Wage : " + empWage);
    console.log("Array of daily Wage: ", empDailyWageArr);
}

calcWageUC8();
