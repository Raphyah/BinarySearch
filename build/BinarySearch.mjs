/**
 * BinarySearch - Simple implementation of binary search for arrays
 * Version: 1.0
 * Author: Raphyah
 * License: GNU General Public License version 3
 * GitHub: https://www.github.com/Raphyah
 *
 * Description:
 * This library implements an easy-to-use binary search function that can be used to find elements in sorted arrays.
 * It uses a callback function to retrieve properties from the element before doing any comparison check.
 *
 * Examples can be found on my GitHub.
 * 
 * Last updated: February 28, 2024
 * Release date: February 28, 2024
 */
'use strict';

/**
 * This class provides static methods for performing binary search operations on arrays.
 * This class should not be invoked or constructed. Use its static methods instead.
 */
function BinarySearch() {
  throw new Error("BinarySearch cannot be used as function or constructor, use its static properties and methods instead.");
}

/**
 * Performs a binary search to find the index of the specified item in the array.
 * @param {any[]} arr - The array to be iterated.
 * @param {(element: any) => any} property - A callback used to extract a value from each element.
 * @param {any} find - The target element to search for.
 * @returns {number} - The index of the target element, or -1 if not found.
 */
BinarySearch.getIndex = function (arr, property, find) {
  if (!arr || arr.constructor !== Array) {
    throw new TypeError(`'BinarySearch.getIndex(arr, property, find)' expected the value of 'arr' to be an array, but instead ${arr && arr.constructor.name} was found.`);
  }
  if (!property || property.constructor !== Function) {
    throw new TypeError(`'BinarySearch.getIndex(arr, property, find)' expected the value of 'property' to be a function, but instead ${property && property.constructor.name} was found.`);
  }
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    const PROPERTY = property(arr[mid]);

    if (PROPERTY === find) {
      return mid;
    } else if (PROPERTY < find) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

/**
 * Performs a binary search to find the value of the specified item in the array.
 * @param {any[]} arr - The array to be iterated.
 * @param {(element: any) => any} property - A callback used to extract a value from each element.
 * @param {any} find - The target element to search for.
 * @returns {any} - The value of the target element, or undefined if not found.
 */
BinarySearch.getValue = function (arr, property, find) {
  const INDEX = BinarySearch.getIndex(arr, property, find);
  if (INDEX === -1) {
    return undefined;
  }
  return arr[INDEX];
}

export default BinarySearch;