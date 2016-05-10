describe('app', function () {
    'use strict';
    var app = window.app;

    describe('Division function', function () {
        it('should divide number a by b', function () {
            expect(app.divide(10, 5)).toEqual(2);
            expect(app.divide(15, 3)).toEqual(5)
        });
        it('should divide number a by b only when a is more than 1 and less than 100', function () {
            expect(app.divide(20, 5)).toEqual(4);
        });
        it('should return false when a is less than 1', function () {
            expect(app.divide(-2, 6)).toEqual(false);
        });
        it('should return false when a is more than 100', function () {
            expect(app.divide(105, 3)).toEqual(false);
        });
        it('should divide number a by b when a is 1', function () {
            expect(app.divide(1, -1)).toEqual(-1);
        });
        it('should divide number a by b when a is 100', function () {
            expect(app.divide(100, 10)).toEqual(10);
        });
        it('should divide number a by b when a is 0', function () {
            expect(app.divide(0, 1)).toEqual(false);
        });
        it('should divide number a by b when a is 101', function () {
            expect(app.divide(101, 10)).toEqual(false);
        });
        it('should return false when b is grater than a', function () {
            expect(app.divide(101, 103)).toEqual(false);
        });
        it('should return false when b is equal 0', function () {
            expect(app.divide(101, 0)).toEqual(false);
        });
    });

    describe('maxArray', function () {
        it('should return max number from array', function () {
            expect(app.maxArray([4,7,1,3,5])).toEqual(7);
        });
        it('should return false if array is empty', function () {
            expect(app.maxArray([])).toEqual(false);
        });
        it('should return false if array has an element which is not a number', function () {
            expect(app.maxArray([4,1,0,'a'])).toEqual(false);
        });
    });

    describe('squareOdd', function () {
        it('should return the square of odd numbers', function () {
            expect(app.squareOdd([2,3,4,5])).toEqual(2,9,4,25);
            expect(app.squareOdd(['1',2,"tekst",7])).toEqual('1',2,"tekst",49);
        });
        it('should return false if array is empty', function () {
            expect(app.squareOdd([])).toEqual(false);
        });
        it('should return false if element of array is not a string or number', function () {
            expect(app.squareOdd([[2,3],0,'a'])).toEqual(false);
            expect(app.squareOdd([4,{},3])).toEqual(false);
        });
    });
});