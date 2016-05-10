describe('app', function () {
    'use strict';
    var app = window.app;

    xdescribe('Division function', function () {
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

    xdescribe('getDescendingNumbers', function () {
        it('numberFrom should be a number', function () {
            expect(app.getDescendingNumbers('tekst', 5)).toEqual(false);
        });
        it('numberTo should be a number', function () {
            expect(app.getDescendingNumbers(5, 'tekst')).toEqual(false);
        });
        it('numberTo should be smaller than numberFrom', function () {
            expect(app.getDescendingNumbers(1, 10)).toEqual(false);
        });
        it('should return array when numberFrom is greater than numberTo', function () {
            expect(app.getDescendingNumbers(10, 1)).toEqual("10 9 8 7 6 5 4 3 2 1");
        });
        it('should return false when numberFrom equals numberTo', function () {
            expect(app.getDescendingNumbers(10, 10)).toEqual(false);
        });
    });

    describe('areaOfTrapezoid', function () {
        it('a should be greater than or equal to 0', function () {
            expect(app.areaOfTrapezoid(-1, 0, 1)).toEqual(false);
        });
        it('b should be greater than or equal to 0', function () {
            expect(app.areaOfTrapezoid(0, -1, 1)).toEqual(false);
        });
        it('h should be greater than or equal to 0', function () {
            expect(app.areaOfTrapezoid(0, 1, -1)).toEqual(false);
        });
        it('a should be a number', function () {
            expect(app.areaOfTrapezoid('tekst', 0, 1)).toEqual(false);
        });
        it('b should be a number', function () {
            expect(app.areaOfTrapezoid(-1, 'tekst', 1)).toEqual(false);
        });
        it('h should be a number', function () {
            expect(app.areaOfTrapezoid(-1, 0, 'tekst')).toEqual(false);
        });
        it('should return correct results', function () {
            expect(app.areaOfTrapezoid(1, 2, 3)).toEqual(4.5);
            expect(app.areaOfTrapezoid(3, 2, 1)).toEqual(2.5);
        });
    });
});