//This is to write a Stack class with its core functions (push, pop) from scratch.

/*1.Create a stack called starTrek and add Kirk, Spock, McCoy, and Scotty to the stack.*/
const starTrek = new Stack();

starTrek.push('Kirk');
starTrek.push('Spock');
starTrek.push('McCoy');
starTrek.push('Scotty');


/*2.Using the Stack class above, implement the following helper functions outside of the class:
peek(): allows you to look at the top of the stack without removing it
isEmpty(): allows you to check if the stack is empty or not
display(): to display the stack - what is the 1st item in your stack?
Remove McCoy from your stack and display the stack*/

const starTrek = new Stack();

starTrek.push('Kirk');
starTrek.push('Spock');
starTrek.push('McCoy');
starTrek.push('Scotty');
// console.log(peek(starTrek));
// console.log(isEmpty(starTrek));
// console.log(display(starTrek));
// starTrek.pop();
// starTrek.pop();
// console.log(display(starTrek));



/*3.Write an algorithm that uses a stack to determine whether a given input is palindrome or not. Use the following template as a starting point.

function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    // Your code goes here
}

// True, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida")); */

// console.log(is_palindrome("dad"));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
// console.log(is_palindrome("Tauhida"));

/*4.Write a function that takes an arithmetic expression as an argument and returns true or false based on matching parenthesis. As a bonus provide a meaningful error message to the user as to what's missing. For example, you are missing a ( or missing a ")".

console.log(matching('(1+2)'))
console.log(matching('(1+2'))
console.log(matching('1+2)'))

For version 1, the parentheses you need to consider are ( and ). Finding a close parenthesis without an open parenthesis is an error (report the location of the close); reaching the end of the string while still "holding" an open parenthesis is also an error (report the location of the open).

Extension exercise: Recognize 3 pairs of brackets: (), [], and {}. These must be correctly nested; "([)]" is incorrect, and should report an error at the ), stating that you were expecting a ] but found a ). If this is starting to look and sound very familiar, congratulations - you're beginning to write a simple language parser!

Extension extension exercise: Also recognize 2 types of quote character: "" and ''. Inside quotes, brackets aren't counted at all - in fact, nothing is counted until you reach the corresponding close quote. */

'use strict';
class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }

    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop() {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

/*5. Sort stack
Write a program to sort a stack such that the smallest items are on the top (in ascending order). You can use an additional stack, but you may not use any other data structure (such as an array, or linked list).*/

function peek(stack) {
  if (stack.top !== null) {
    return stack.top.data;
  }
}


/*6. Create a queue using Singly linked list
Walk through the Queue class in the curriculum and understand it well. Then write a Queue class with its core functions (enqueue(), dequeue()) from scratch.

Create a queue called starTrekQ and add Kirk, Spock, Uhura, Sulu, and Checkov to the queue.
Implement a peek() function outside of the Queue class that lets you take a peek at what the 1st item in the queue is.
Implement a isEmpty() function outside the Queue class that allows you to check if the queue is empty or not
Implement a display() function outside of the Queue class that lets you display what's in the queue.
Remove Spock from the queue and display the resulting queue.*/

function isEmpty(stack) {
  if (stack.top === null) {
    return true;
  }
  return false;
}

function display(stack) {
  let currentNode = stack.top;
  let string = '';
  while (currentNode !== null) {
    string += currentNode.data;
    if (currentNode.next !== null) string += '->';
    currentNode = currentNode.next;
  }
  return string;
}

/*7. Create a queue class using Doubly linked List
Use the items listed in #6 and enqueue them to your queue.

Check to see who is first one on the Queue?*/


/*8. Queue implementation using a stack
implement a queue using 2 stacks and no other data structure. (You are not allowed to use a doubly linked list or array. Use your stack implementation with a linked list from above to solve this problem.)*/

  for (let i = 0; i < (s.length)/2; i++) {
    stack.push(`${s[i]}`)
    result += s[i]
  }

  if (s.length % 2 !== 0) {
    stack.pop()
  }

  while (peek(stack)) {
    result += stack.pop()
  }

  if (result !== s) {
    return false;
  }

  return true;
}

// input: (1 + 2)
// stack )2 + 1(
// output: true
// input: (1 + 2
// stack 2 + 1 (
// output: false 

// ( ++
// ) ++ 

function matching(exp) {
  const stack = new Stack();
  for (let i = 0; i < exp.length; i++) {
    if (exp[i] === '(') {
      stack.push(exp[i])
    }

    if ((exp[i] === ')') && (stack.node !== null)) {
      stack.pop()
    }
  }

  if (stack.top === null) {
    return true
  }

  return false;

}

/*9. Square dance pairing
As people come to the dance floor, they should be paired off as quickly as possible: man with woman, man with woman, all the way down the line. If several men arrive in a row, they should be paired in the order they came, and likewise if several women do. Maintain a queue of "spares" (men for whom you have no women yet, or vice versa), and pair them as appropriate.

F Jane
M Frank
M John
M Sherlock
F Madonna
M David
M Christopher
F Beyonce

Female dancer is Jane, and the male dancer is Frank
Female dancer is Madonna, and the male dancer is John
Female dancer is Beyonce, and the male dancer is Sherlock
There are 2 male dancers waiting to dance*/ 

module.exports = {
  Stack, 
  peek, 
  isEmpty, 
  display,
  is_palindrome,
  matching,

};

/*10. The Ophidian Bank
At the Ophidian Bank, a single teller serves a long queue of people. New customers join the end of the queue, and the teller will serve a customer only if they have all of the appropriate paperwork. Write a representation of this queue; 25% of the time (random), a customer's paperwork isn't quite right, and it's back to the end of the queue. Show what a few minutes of the bank's lobby would look like. */