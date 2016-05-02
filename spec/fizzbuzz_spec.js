var fb = require('../fizzbuzz');

describe("A program that plays fizzbuzz", function() {

	it("can count from 1 to 6 and make appropriate subsitutions", function() {
		expect(fb.count(1,5)).toBe("1 2 fizz 4 buzz fizz");
		expect(fb.count(10,15).toBe("buzz 11 fizz 13 14 fizzbuzz");
	});

	it("can take multiples of 3 and return 'fizz'", function(){
		expect(fb.fizzer(3)).toBe('fizz');
		expect(fb.fizzer(5)).toBe(5);
		expect(fb.fizzer(17)).toBe(17);
	});

	it("can take multiples of 5 and return 'buzz'", function(){
		expect(fb.buzzer(5)).toBe('buzz');
		expect(fb.buzzer(11)).toBe(11);
		expect(fb.buzzer(16)).toBe(16);
	});

	it("can take multiples of 3 and 5 and return 'fizzbuzz'", function(){
		expect(fb.fizzbuzz(15)).toBe('fizzbuzz');
		expect(fb.fizzbuzz(22)).toBe(22);
		expect(fb.fizzbuzz(23)).toBe(23);
	});

});