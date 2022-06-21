
class Worker{
	static id = 1
	static countWorker = 0
	static sumSalary=[]
	constructor(name, category, salary) {
		this.id = Worker.id
		this.name = name;
		this.category = category;
		this.salary = salary;
		Worker.id++
		Worker.countWorker++
		Worker.sumSalary.push(this.salary)
	}
	showSalary() {
		this._id++;
		console.log(`employee with id ${this.id} have salary ${this.salary} USD per month`);
		
	}
	countSalaryPerYear() {
		this.salary *= 12;
		return this.salary;
	}
	countAllWorkers() {
		console.log( Worker.countWorker);
	}
	sumSalary() {
		let salaryArray = Worker.sumSalary;
		const sum =salaryArray.reduce(function (sum, elem) {
			return (sum + elem)*12;
		}, 0);
		console.log(sum);
		return sum;
	}
}
let developer = new Worker('Ivan', 'developer', 3000);
let manager = new Worker('Sam', 'manager', 2500);
developer.showSalary();
manager.showSalary();

manager.countAllWorkers();
manager.sumSalary();


// task 2

class PartTimeWorker extends Worker{
	static countWorker2=0
	constructor(name,category,salary,hours,bid) {
		super(name, category, salary);
		this.hours = hours;
		this.bid = bid;
		PartTimeWorker.countWorker2++
	}
	countbidPerDay() {
		let bidPerDay = this.hours * this.bid;
		console.log(bidPerDay);
		return bidPerDay;
	}
	countSalaryPerMonth() {
		const sumSalaryPerMonth = (this.hours*this.bid) * 22;
		console.log(sumSalaryPerMonth);
		Worker.sumSalary.push(this.sumSalaryPerMonth); //?
		return sumSalaryPerMonth;
	}
	countPartTimeWorker() {
		console.log(PartTimeWorker.countWorker2);
	}
}

let t2 = new PartTimeWorker('Liza', 'ds', 3000, 8, 50);
t2.countbidPerDay();
t2.countSalaryPerMonth();
t2.countPartTimeWorker();
Worker.sumSalary

