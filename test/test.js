#!/usr/bin/env node
var translit = require('../translit');

function example() {

 //  var a = "Съешь ещё этих мягких французских булок, да выпей же чаю!",
 //  var a = "Сьогодні п'ятниця, читачі читають це чтиво." // Украинский
  var a = "З'їж ще цих м'яких французьких булок, та випий же чаю!",
 //  var a = "мірь",          // Старославянский
 b = translit(a,  6);
 c = translit(b, -6);
 console.log("Транслируемая строка:\n%s\nТранслированная строка:\n%s\nОбратная трансляция:\n%s", a, b, c);
}

example();

