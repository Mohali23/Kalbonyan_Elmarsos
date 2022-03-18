/*******************
 **** Variables ****
 ******************/

 /**
  * What is the variables?
  * Variables are used to store information to be referenced and manipulated,
  * They also provide a way of labeling data with a descriptive name, so our programs can be understood more clearly
  * It is helpful to think of variables as containers that hold information. 
  * Their sole purpose is to label and store data in memory. This data can then be used throughout your program.
  */

 /**
  * How to create  variables?
  * For creating variables in javascript we use (let) keyword for declaring variables
  */

  /**
  * let => is the keyword for creating variable
  * age => is a name for the variable
  * (=) => we use a single equal sign to assign value to the variable 
  * 35  => this is a variable value
  */

 // Example
 let age = 35

 /**
  * NOTE => for creating variables names in javascript we follow up some rules.
  * Here are some correct names for variables
  */

 // We can use any character from the English language in a variable name like the example below

 let name = 'Mohamed Ali'

 // Also, we can use some symbols at the start of the name or in the middle of the name, or end of the name
 // The symbols are ( _ ) or ( $ )

 // Example
 let _name = 'Mohamed Ali'
 let $job = 'Software Engineer at Kalbonyan Elmarsos'

 // If the name of the variable is more of the word, we have two ways for a writ

 // Example No 1
 let my_name = 'Mohamed Ali'

 // Example No 2
 let myAge = 35 // This is way is the most used between the developer, named is camelCase

 /**
  * How to writing the camelCase?
  * - We write the first letter of the first word is lowercase and the first letter of other words is uppercase
  * - The example below has three words
  */

 // Example
 let myFirstName = 'Mohamed'
 

/**
 * We can use the name of the variable with numbers
 * NOTE => but not use at the start of the name this is wrong 
 * ----------------------------------------------------------
 */

// Example
let nameNumber15


 /**
  * Here are some wrong names for variables
  */

// We can't use the number at the start of the name this is wrong 

// This example is wrong
// let 123number

// We can't use any keywords for javascript language this is wrong
// let let = 'Mohamed'

/**
 * we can't use some symbols at the start of the name or in the middle of the name, or end of the name
 * The symbols are ( @ ) or ( / ) or ( # ) or ( + ) or ( - ) or ( * ) or ( % ) or ( ! ) and ( & ) all those are wrong
 */

// Those examples are wrong
let %name
let #name
let *name
let /name
let @name
let my&name





/*****************
 **** String ****
 *****************/

/**
 * What is the String?
 * A string is a sequence of one or more characters that may consist of letters, numbers, or symbols. 
 * Strings in JavaScript are primitive data types.
 */

/**
 * How to create String?
 * In JavaScript, there are three ways to write a string.
 * They can be written inside single quotes (' '), double quotes (" "), or backticks (` `). The type of quote used must match on both sides
 */

// Example
let fullName = 'Mohamed ali'
let firstName = "Mohamed"
let LastName = `ali`

/**
 * Concatenation
 * What is a Concatenation?
 * Concatenation is a technique used in programming to merge two or more strings into one value.
 */


/**
 * How to use concatenation?
 * We can use the ( + ) concatenation operator to merge multiple strings.
 */

// Example
let my_first_name = 'Mohamed'
let my_last_name = 'Ali'

// This is a concatenation
let my_full_name = my_first_name + ' ' + my_last_name






