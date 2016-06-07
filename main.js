//Директивы в ангулар могут создаваться с помощью элементов, атрибутов, классов и комментариев. В этом уроке мы разберем когда и какие ограничения стоит использовать.

//что такое restrictions (ограничения) в директивах.

//Создадим div и навесим на него атрибут foo-bar <div foo-bar>FooBar</div>

//Опишем директиву

// var app = angular.module('app', []);
// 
// app.directive('fooBar', function () {
    // return {
        // link: function () {
            // console.log('fooBar');
        // }
    // }
// });

//Нужно помнить, что директивы описываются через camelCase, а в шаблоне вызываются через тире 
//т.е. - шаблон <div foo-bar>FooBar</div> а описание app.directive('fooBar', function () {});
//Как мы видим, в браузере отрисовался наш DOM елемент и в консоли вывелось fooBar.

//По умолчанию директива будет срабатывать, когда мы создаем ее как атрибут или как элемент
//<div foo-bar>FooBar</div> или 
//<foo-bar>FooBar</foo-bar>
//Без разницы будет ли это атрибут или элемент, директива будет работать одинаково. 
//Атрибут и элемент - это два ограничения(restriction) по умолчанию.


//Укажем restrict в артрибут 'A' -Это значит, что директива будет реагировать только на атрибут<div foo-bar>FooBar</div>, а на элемент не будет. 
//т.е. в консоли вывод строки fooBar произойдет только за счет элемента
// var app = angular.module('app', []);
// 
// app.directive('fooBar', function () {
    // return {
        // restrict: 'A',
        // link: function () {
            // console.log('fooBar');
        // }
    // }
// });

//Если же мы поменяем restriction на E, то директива будет срабатывать только на элементе <foo-bar>FooBar</foo-bar>.

// var app = angular.module('app', []);
// 
// app.directive('fooBar', function () {
    // return {
        // restrict: 'E',
        // link: function () {
            // console.log('fooBar');
        // }
    // }
// });

//По умолчанию у директив стоит запись EA. Это значит, что они будут срабатывать на елемент или атрибут. 
//Это два самых используемых способа. 
//Остальные способы практически никогда не используются, но мы их все равно сейчас рассмотрим.


//Третье ограничение называется class<div class="foo-bar">FooBar</div>.

// var app = angular.module('app', []);
// 
// app.directive('fooBar', function () {
    // return {
        // restrict: 'C',
        // link: function () {
            // console.log('fooBar');
        // }
    // }
// });

//Четвертый вариант - это задать директиву в виде комментария. 
//Честно говоря, я этот способ ни разу в жизни не использовал, но если вы его увидите, вы должны понимать как он работает.
//<!-- directive: foo-bar -->
// В комментарии указывается слово directive: название-директивы. В restrict необходимо указать букву M, для того, чтобы она сработала.
// 
// var app = angular.module('app', []);
// 
// app.directive('fooBar', function () {
    // return {
        // restrict: 'M',
        // link: function () {
            // console.log('fooBar');
        // }
    // }
// });

//Все эти ограничения можно указывать одновременно.

var app = angular.module('app', []);

app.directive('fooBar', function () {
    return {
        restrict: 'EACM',
        link: function () {
            console.log('fooBar');
        }
    };
});
//Как мы видим, в браузере консоль лог fooBar вывелся 4 раза. 
//Если вы теперь увидите параметр restrict в директиве, не пугайтесь, это всего лишь параметры инициализации директивы.

