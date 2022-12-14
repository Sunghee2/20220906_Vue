(function () {
    // ES5. 함수 리터럴
    var sayHello = function () {
        return 1;
    };

    console.log('1 => ' + sayHello());

    {
        var sayHello = function () {
            return 2;
        };

        console.log('2 => ' + sayHello());
    }

    console.log('3 => ' + sayHello());
    console.log('');

    // ES6. Function

    const yourHello = function () {
        return 1;
    };

    console.log('1 => ' + yourHello());

    {
        const yourHello = function () {
            return 2;
        };

        console.log('2 => ' + yourHello());
    }

    console.log('3 => ' + yourHello());
    console.log('');
})();
