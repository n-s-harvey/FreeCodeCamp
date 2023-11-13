// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    // Only change code below this line
  
    let nameInList = false;
      let propertyOfContact = false;
      let indexInContacts = null;
  
      for (let i = 0; i < contacts.length; i++) {
          if (contacts[i].firstName == name) {
              nameInList = true;
              indexInContacts = i;
              if (contacts[i].hasOwnProperty(prop)) {
                  propertyOfContact = true;
              }
          }
  
      }
  
      if (nameInList === true && propertyOfContact === true) {
          return contacts[indexInContacts][prop];
      }
  
      else if (nameInList === false) {
        return "No such contact";
      }
  
      else if (propertyOfContact === false) {
        return "No such property";
      }
  
  
  
    // Only change code above this line
  }
  
  lookUpProfile("Akira", "likes");