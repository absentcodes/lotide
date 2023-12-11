# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @absentcodes/lotide`

**Require it:**

`const _ = require('@absentcodes/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head()`: Returns the first element of an array.
* `tail()`: Returns a new array containing all elements except the first one.
* `middle()`: Retrieves the middle element(s) of an array.
* `assertArraysEqual()`: Asserts the equality of two arrays.
* `assertEqual()`: Asserts the equality of two primitive values.
* `assertObjectsEqual()`: Asserts the equality of two objects.
* `countLetters()`: Counts occurrences of each letter in a string and returns a count object.
* `countOnly()`: Counts occurrences of specified elements in an array according to a provided condition.
* `eqArrays()`: Checks the equality of two arrays.
* `eqObjects()`: Checks the equality of two objects.
* `findKey()`: Retrieves the first key in an object that satisfies a provided condition.
* `findKeyByValue()`: Retrieves a key in an object based on its corresponding value.
* `flatten()`: Flattens a nested array structure into a single level.
* `letterPositions()`: Determines the positions of letters in a string and returns an object with the indices.
* `takeUntil()`: Returns a slice of an array until a specified condition is met.
* `without()`: Returns a new array with specified elements removed.