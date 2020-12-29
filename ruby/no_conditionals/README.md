# No Conditionals

This week we're going to solve 3 problems instead of 1. Each of these problems are small on their own, so this exercise is designed to repeat the same concepts you learn from doing one of them and (hopefully) build up some experience solving these kinds of problems with the same constraint.

**If you do not solve all the problems, that is OK. Do not focus on solving all of them; focus on how you might solve any problem like this without the use of conditionals**

## Constraint

All of these problems must be solved WITHOUT the usage of conditionals. This means that you cannot use any of the following features of your language (or anything similar that would result in branching).

* 'if', 'else', 'elsif', 'cond'
* 'switch', 'case'
* ternary operations
* branch logical operations (think `do_this || that` or `do_this && that`, etc)
* 'goto', 'jump'
* loops (because they require a termination condition)
* etc.

You can get very creative with some languages to circumvent this constraint. We're using the honor system, so get what you want out of this exercise.

## Problems

#### Common Letters

Given a set of strings, return a set of characters that are common to all of those strings.

For example:

```ruby
common_letters(['abcdde', 'baccd', 'eeabg'])
# => ['a', 'b']
```

#### Make Change

When you buy something from a store using cash the cashier must decide how much change to give you in terms of notes and coins of various denominations. The ideal is for them to give you the minimum amount of each kind of note and coin.

Example:

 * Item costs $5.20
 * I pay with a $10 bill
 * Cashier gives back $4.80, composed of:
     - 4 one dollar bills
     - 3 quarters
     - 1 nickel

You should return a map of denomination to count of that denomination. Denominations should be the amount of cents that comprise that denomination (ex: $1 == 100c)

 ```ruby
 item_cost = 5.20
 amount_tendered = 10.00

 make_change(item_cost, amount_tendered)
 # => {
 #   100 => 4,
 #   75 => 3,
 #   5 => 1
 # }
 ```

#### FizzBuzz (audible groans)

Yes, yes, I know, I know. We're solving your good friend FizzBuzz, but this time without conditionals. If you are not familiar with FizzBuzz, the rules are:

* For numbers 1 to N
    - If the number is divisible by 3, it is a 'Fizz'
    - If the number is divisible by 5, it is a 'Buzz'
    - If the number is divisible by 3 and 5, it is a 'FizzBuzz'
    - Otherwise, it is ''

You should return a map of the number to its corresponding string.

Example:

```ruby
fizz_buzz(15)
# => {
#  1 => '',
#  2 => '',
#  3 => 'Fizz',
#  4 => '',
#  5 => 'Buzz',
#  6 => 'Fizz',
#  7 => '',
#  8 => '',
#  9 => 'Fizz',
#  10 => 'Buzz',
#  11 => '',
#  12 => 'Fizz',
#  13 => '',
#  14 => '',
#  15 => 'FizzBuzz'
#}
```

## Ruby Starter Repo

Contained in this repo is a starter kit for ruby that will help you move past the boilerplate of creating a new project quickly. You do not need to use it; it is provided for your benefit only if you want it. The test cases above are ready to go.
