/* 
	var employers = ['АртеМ', 'максим', 'Владимир', 'сергей', 'НикиТа', 'евГений', ' Дарья', ' ', 'виктория ', 'ЕкаТерина', '', ' Андрей ', 'КИРИЛЛ'];
	var nameCourse = 'Базовый React';

	var command = [];
	for (var i = 0; i < employers.length; i++) {
		if (employers[i].length > 0 && employers[i].trim() != '') {
			command.push(employers[i]);
		}
	}
	for (var i = 0; i < command.length; i++) {
		command[i] = command[i].toLowerCase().trim();
		command[i] = command[i][0].toUpperCase() + command[i].slice(1);
	} 
*/

const employers = ['АртеМ', 'максим', 'Владимир', 'сергей', 'НикиТа', 'евГений',' Дарья', ' ', 'виктория ', 'ЕкаТерина', '', ' Андрей ', 'КИРИЛЛ'];
const nameCourse = 'Базовый React';

const command = employers.filter(name => name.trim().length)
	.map(name => name.trim().charAt(0).toUpperCase() + name.trim().substr(1).toLowerCase());
	
/* 
	var data = {
		cash: [3, 8, 3],
		react: ['JSX', 'components', 'props', 'state', 'hooks'],
		add: ['styled-components', 'firebase']
	};
*/

const data = {
	cash: [3, 8, 3],
	react: ['JSX', 'components', 'props', 'state', 'hooks'],
	add: ['styled-components', 'firebase']
};

/* 
	function calcCash(own) {
		own = own || 0;
		var everyCash = Array.prototype.slice.call(arguments);
		var total = own;
		for (var i = 0; i < everyCash[1].length; i++) {
			total += +everyCash[1][i];
		}
		return total;
	} 
*/

const { cash, react, react: [first], add } = data;

const calcCash = everyCash => everyCash.reduce((prev, curr) => prev + curr);

/* 
	var lesson = calcCash(null, data.cash);

	function makeBusiness(director, teacher, allModule, gang, course) {
		teacher = teacher || 'Максим';
		var sumTech = data.react.concat(data.add, 'и другие');
		console.log('Стартуем новый курс: "' + course + '". Владелец: ' + director + ', преподаватель: ' + teacher + '. Всего уроков: ' + allModule + '. \nКоманда Академии: ' +
			gang);
		console.log('Первое что изучим будет ' + data.react[0] + ". Он очень похож на HTML!");
		console.log('Технологии которые мы изучим: ');
		console.log.apply(null, sumTech);

	}

	makeBusiness.apply(null, ['Артем', null, lesson, command, nameCourse]); 
*/

const lesson = calcCash(cash);

const makeBusiness = (director, allModule, gang, course, teacher = 'Максим') => {
	const sumTech = [...react, ...add, 'и другие'];
	console.log(
		`Стартуем новый курс: "${course}". Владелец: ${director}, преподаватель: ${teacher}. Всего уроков: ${allModule}.
Команда Академии: ${gang}
Первое что изучим будет ${first}. Он очень похож на HTML!
Технологии которые мы изучим:
${sumTech.join(' ')}`);
};

makeBusiness('Артем', lesson, command, nameCourse);