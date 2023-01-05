"use strict";
// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле es6.spec.js
// Можно менять параметры функций (например сделать им значения по умолчанию)

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fio) {
    const[surname, firstname] = fio.split(" ");
    return `${firstname} ${surname}`;
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(array) {
    return [...new Set(array)];
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(array) {
    if (array.length === 0)
        return false;
    return array.reduce((accumulation ,CurVal) => accumulation < CurVal ? CurVal : accumulation,0) / Math.min(...array);
}

// Реализуйте класс "словарь слов" (как толковый словарь)
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// Словарь - (string, string), и все это не null и не undefined
// * покройте класс тестами
class Dictionary {
    constructor(){
        this.dict = new Map();
    }
    add(key, val){
        if(typeof(key) === 'string' && typeof(val) === 'string'){
            this.dict.set(key.toLowerCase(), val.toLowerCase());
        }
        else console.log ('Keys and Values must be String');
    }
    getValue(key){
        if(typeof(key) === 'string' && this.dict.has(key.toLowerCase())) {
            return this.dict.get(key.toLowerCase());
        }
        else console.log('No Such Key');
    }
}

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};