const rightBox = document.getElementById("right");
const leftBox = document.getElementById("left");
const lists = document.getElementsByClassName("bar");
// Description: This method returns a live HTMLCollection of elements with the given class name.
// Usage: document.getElementsByClassName("bar")
// Return Type: A live HTMLCollection, which means it updates automatically if the document structure changes (e.g., if elements are added or removed from the DOM).

// document.querySelectorAll
// Description: This method returns a static NodeList of elements that match the specified CSS selector(s).
// Usage: document.querySelectorAll(".bar")
// Return Type: A static NodeList, which means it does not update if the document structure changes.

// console.log("lists", lists);
for (const list of lists) {
  //   console.log("list", list);
  list.addEventListener("dragstart", function (e) {
    let selected = e.target;

    rightBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    rightBox.addEventListener("drop", function (e) {
      //   e.preventDefault();
      rightBox.appendChild(selected);
      selected = null;
    });

    leftBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    leftBox.addEventListener("drop", function (e) {
      e.preventDefault();
      leftBox.appendChild(selected);
      selected = null;
    });
  });
}
