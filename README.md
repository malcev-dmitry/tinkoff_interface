# Tinkoff

## Задание

1. Вывести иерархические данные в виде дерева. Файл с данными, которые нужно использовать при выполнении задания, прикреплен к письму. Данные можно отдавать c удобного для вас веб-сервера или реализовать сервер на Node.js.

2. Сделать сворачивание и разворачивание списка дочерних элементов по клику. По умолчанию все свернуто.

3. Около каждого элемента списка показывать checkbox, позволяющий выбрать текущий и все дочерние элементы.
a. Если все дочерние элементы выбраны вручную, то родительский элемент должен выбираться автоматически.
b. Если наоборот с любого дочернего элемента снят выбор, то снимается и с родительского.

4. Добавить текстовое поле для фильтрации элементов по вхождению текста. При фильтрации сохранять исходную свернутость/развернутость элементов. Если в заголовке родителя нет искомого текста, но есть в дочернем, то родитель тоже показан.

5. Сделать перетаскивание элементов и прикрепление к другой родительской вершине.

6. Обратить внимание на производительность и скорость работы интерфейса приложения.


Технологии
Angular 5+, можно использовать Angular CLI.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
