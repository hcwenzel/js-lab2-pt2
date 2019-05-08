"use strict";

class Contact {
  constructor(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
}

class AddressBook {
  constructor() {
    this.contacts = [];
  }
  add(info) {
    // this.contacts.push(info);
    this.contacts = [...this.contacts, { ...info }];
  }
  deleteAt(index) {
    // this.contacts.splice(index, 1);
    this.contacts = [...this.contacts.slice(0, index), ...this.contacts.slice(index + 1)];
  }
  // print() {
  //   for (let i = 0; i < this.contacts.length; i++) {
  //     console.log(`Index: ${i}, Name: ${this.contacts[i].name}, Email: ${this.contacts[i].email}, Phone: ${this.contacts[i].phone}, Relation: ${this.contacts[i].relation}`);
  //   }
  // }
  display() {
    document.querySelector(".myContacts").innerHTML = "";
    let count = 0;
    for (let contact of this.contacts) {
      const newEntry = document.createElement("div");
      newEntry.setAttribute("index", count);
      newEntry.classList.add("contactBox");
      newEntry.innerHTML = `
      <p>Name: ${contact.Name}</p>
      <p>Email: ${contact.Email}</p>
      <p>Phone: ${contact.Phone}</p>
      <p>Relation: ${contact.Relation}</p>
      <i class="material-icons">delete</i>`;
      document.querySelector(".myContacts").append(newEntry);
      count++;
    }
  }
}

document.querySelector("form").addEventListener("submit", addContact);

function addContact(event) {
  event.preventDefault();
  let inputElements = document.querySelectorAll("input");
  const info = {
    Name: inputElements[0].value,
    Email: inputElements[1].value,
    Phone: inputElements[2].value,
    Relation: inputElements[3].value
  };
  book.add(info);
  for (let input of inputElements) {
    input.value = "";
  }
  book.display();
  console.dir(book);
}

document.querySelector("main").addEventListener("click", deleteContact);

function deleteContact(event) {
  if (event.target.classList.contains("material-icons")) {
    const index = event.target.parentNode.getAttribute("index");
    book.deleteAt(index);
    book.display();
  }
}

const book = new AddressBook();












// while (true) {
//   let choice = prompt("Add, Delete, Print, or Quit?");
//   if (choice === "Quit") {
//     console.log("Goodbye.");
//     break;
//   } else if (choice === "Print") {
//     book.print();
//   } else if (choice === "Delete") {
//     let deleteChoice = prompt("Delete by index or by name?");
//     if (deleteChoice === "Name") {
//       book.deleteByName(prompt("Enter a name."));
//     } else if (deleteChoice === "Index") {
//       book.deleteAt(prompt("Index to delete?"));
//     }
//   } else if (choice === "Add") {
//     book.add(new Contact(
//       prompt("Enter a name."),
//       prompt("Enter an email."),
//       prompt("Enter a phone number."),
//       prompt("Enter a relation.")
//     ));
//   }
// }