console.log("Welcome to Employee Wage Computation program");

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOUR = 4;
const FULL_TIME_HOUR = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_DAYS = 20;
const MAX_WORKING_HOUR = 100;

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
    console.log("Total Working Days: "+ totalWorkingDays +", Total Employee Hours: "+ totalEmpHrs +", Total Employee Wage : " + empWage);
}     

const newEmpWage = () => {
    function getWorkingHours(empCheck){
        switch(empCheck){
        case IS_PART_TIME:
                return PART_TIME_HOUR;
            case IS_FULL_TIME:
            return FULL_TIME_HOUR;
            default:
                return 0;
        }
    }

    function calcDailyWage(empHrs) {
        return empHrs * WAGE_PER_HOUR;
    }
    let totalEmpHr = 0;
    let totalWorkingDays = 0;
    let empDailyHrsAndWageArr = new Array();

    while(totalEmpHr <= MAX_WORKING_HOUR && totalWorkingDays < NUM_OF_DAYS){
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        let empHrs = getWorkingHours(empCheck); 
        totalEmpHr +=empHrs;
        empDailyHrsAndWageArr.push(
            {
                dayNum:totalWorkingDays,
                dailyHours:empHrs,
                dailyWage: calcDailyWage(empHrs),
                toString() {
                    return '\nDay' +this.dayNum + ' => Working Hours : ' + this.dailyHours +
                            ' And Wage Earned : ' + this.dailyWage
                },
            }
        );
    }
    let empWage = calcDailyWage(totalEmpHr);
    console.log("Showing Daily Hours Worked And Wage Earned: "+empDailyHrsAndWageArr);
    console.log("Total Working Days: "+ totalWorkingDays +", Total Employee Hours: "+ totalEmpHr +", Total Employee Wage : " + empWage);
}
newEmpWage();
