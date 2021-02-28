const addCommas = require('./addCommas');

describe('#addCommas', () => {
	test('it is a function', () => {
		expect(typeof addCommas).toBe('function');
	});
	test('it converts a number to a string', () => {
		const result = addCommas(123);
		expect(typeof result).toBe('string');
	});
	test('it adds one comma to a 4-digit positive number after the first digit', () => {
		const result = addCommas(1234);
		expect(result).toBe('1,234');
		expect(result.indexOf(',')).toBe(1);
	});
	test('it correctly converts a large positive number', () => {
		const result1 = addCommas(1000000);
		const result2 = addCommas(9876543210);

		expect(result1).toBe('1,000,000');
		expect(result2).toBe('9,876,543,210');
		expect(result1.split(',').length - 1).toBe(2);
		expect(result2.split(',').length - 1).toBe(3);
	});
	test('it correctly omits commas in small positive numbers', () => {
		const result = addCommas(6);

		expect(result).toBe('6');
		expect(result.split(',').length - 1).toBe(0);
	});
	test('it correctly omits commas in small negative numbers', () => {
		const result = addCommas(-10);

		expect(result).toBe('-10');
		expect(result.split(',').length - 1).toBe(0);
	});
	test('It correctly adds commas to negative numbers', () => {
		const result1 = addCommas(-5678);
		const result2 = addCommas(-1000000);

		expect(result1).toBe('-5,678');
		expect(result2).toBe('-1,000,000');
		expect(result1.split(',').length - 1).toBe(1);
		expect(result2.split(',').length - 1).toBe(2);
	});
	test('it correctly adds commas to negative and positive float values', () => {
		const result1 = addCommas(12345.678);
		const result2 = addCommas(-3141592.65);

		expect(result1).toBe('12,345.678');
		expect(result2).toBe('-3,141,592.65');
		expect(result1.split(',').length - 1).toBe(1);
		expect(result2.split(',').length - 1).toBe(2);
	});
	test('correctly requests number if any other type is given', () => {
		const stringRes = addCommas('12345');
		const arrayRes = addCommas([ 1, 2, 3, 4, 5 ]);
		const objRes = addCommas({ a: 1, b: 2 });

		expect(stringRes).toBe('please enter a positive or negative number');
		expect(arrayRes).toBe('please enter a positive or negative number');
		expect(objRes).toBe('please enter a positive or negative number');
	});
});
