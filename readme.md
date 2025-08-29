

### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
answer:
1.getElementById() is a unique id selector.Use it we can get all the elements inside a ID.
2.getElementsByClassName() is a class selector.A class using multiple elements we can get all the elements on that class in a htmlcollection.
3.querySelector() is a css selector.Using this selector we can get the element that this class first used.
4.querySelectorAll() is a css selector.Using this selector we can get all the elements that this class uded in a nodelist.Like array but not a proper array.

2. How do you **create and insert a new element into the DOM**?
answer:We can create an element within a variable using document.createElement() and insert that using appendChild().
example:
const parentDiv = document.getElementById('parent');
const createDiv = document.createElement('div'); 
parentDiv.appendChild(createDiv);

3. What is **Event Bubbling** and how does it work?
answer:Event bubbling is process where a event like click, hover bubble it is up to parent elements.Just as bubbles form underwater and rise to the surface, events bubbling are the same.
4. What is **Event Delegation** in JavaScript? Why is it useful?
answer: I didn't understand that.
5. What is the difference between **preventDefault() and stopPropagation()** methods?
answer:
1.preventDefault() This prevents the default behavior of the event.
2.stopPropagation() stops the event bubble.

