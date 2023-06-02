// const person = {
//   name: {
//     first: "Elyan",
//     last: "Kemble",
//   },
//   age: 32,
//   location: {
//     city: "Garland",
//     state: "Texas",
//     zip: 75040,
//   },
//   occupation: "Front-End Developer",
//   introduce() {
//     console.log(
//       `Hello, my name is ${this.name.first} ${this.name.last}, and I'm a ${this.age}-year-old ${this.occupation} from ${this.location.city}, ${this.location.state}!`
//     );
//   },
// };

// // function introduce() {
// //   console.log(
// //     `Hello, my name is ${this.name.first} ${this.name.last}, and I'm a ${this.age}-year-old ${this.occupation} from ${this.location.city}, ${this.location.state}!`
// //   );
// // }

// person.introduce();

// const cat1 = {
//   eyes: 2,
//   legs: 4,
//   fur: "Orange",
//   isAwake: true,
//   isMoving: false,
//   sleep() {
//     this.isAwake = false;
//   },
//   wake() {
//     this.isAwake = true;
//   },
//   sit() {
//     this.isMoving = false;
//   },
//   walk() {
//     this.isMoving = true;
//   },
//   speak() {
//     console.log("Meow...");
//   },
// };

// const cat2 = {
//   eyes: 2,
//   legs: 4,
//   fur: "Black and White",
//   isAwake: false,
//   isMoving: false,
//   sleep() {
//     this.isAwake = false;
//   },
//   wake() {
//     this.isAwake = true;
//   },
//   sit() {
//     this.isMoving = false;
//   },
//   walk() {
//     this.isMoving = true;
//   },
//   speak() {
//     console.log("Meow...");
//   },
// };

// const dog1 = {
//   eyes: 2,
//   legs: 4,
//   fur: "Gold",
//   isAwake: true,
//   isMoving: true,
//   sleep() {
//     this.isAwake = false;
//   },
//   wake() {
//     this.isAwake = true;
//   },
//   sit() {
//     this.isMoving = false;
//   },
//   walk() {
//     this.isMoving = true;
//   },
//   speak() {
//     console.log("Woof!");
//   },
// };

// const cow1 = {
//   eyes: 2,
//   legs: 4,
//   hair: "Brown",
//   isAwake: true,
//   isMoving: false,
//   sleep() {
//     this.isAwake = false;
//   },
//   wake() {
//     this.isAwake = true;
//   },
//   sit() {
//     this.isMoving = false;
//   },
//   walk() {
//     this.isMoving = true;
//   },
//   speak() {
//     console.log("Moo.");
//   },
// };

// class Animal {
//   constructor(eyes, legs, isAwake, isMoving) {
//     this.eyes = eyes;
//     this.legs = legs;
//     this.isAwake = isAwake;
//     this.isMoving = isMoving;
//     // return is not needed because the new object is returned by default
//   }
//   sleep() {
//     this.isAwake = false;
//   }
//   wake() {
//     this.isAwake = true;
//   }
//   sit() {
//     this.isMoving = false;
//   }
//   walk() {
//     this.isMoving = true;
//   }
//   speak(sound) {
//     console.log(sound);
//   }
//   toString() {
//     return `This Animal has ${this.eyes} eyes and ${this.legs} legs. It ${
//       this.isAwake ? "is" : "is not"
//     } awake, and ${this.isMoving ? "is" : "is not"} moving.`;
//   }
// }

// const cat1 = new Animal(2, 4, true, false);
// const cat2 = new Animal(2, 4, false, false);
// const dog1 = new Animal(2, 4, true, true);
// const cow1 = new Animal(2, 4, true, false);
// console.log(cow1.toString());

class Animal {
  constructor(eyes, legs, isAwake, isMoving) {
    this.eyes = eyes;
    this.legs = legs;
    this.isAwake = isAwake;
    this.isMoving = isMoving;
    // return is not needed because the new object is returned by default
  }
  sleep() {
    this.isAwake = false;
  }
  wake() {
    this.isAwake = true;
  }
  sit() {
    this.isMoving = false;
  }
  walk() {
    this.isMoving = true;
  }
  speak(sound) {
    console.log(sound);
  }
  toString(animal = "Animal") {
    return `This ${animal} has ${this.eyes} eyes and ${this.legs} legs. It ${
      this.isAwake ? "is" : "is not"
    } awake, and ${this.isMoving ? "is" : "is not"} moving.`;
  }
}

class Cat extends Animal {
  constructor(fur, isAwake, isMoving) {
    super(2, 4, isAwake, isMoving);
    this.fur = fur;
  }
  speak() {
    super.speak("Meow...");
  }
  toString() {
    return super.toString("Cat");
  }
}

class Dog extends Animal {
  constructor(fur, isAwake, isMoving) {
    super(2, 4, isAwake, isMoving);
    this.fur = fur;
  }
  speak() {
    super.speak("Woof!");
  }
  toString() {
    return super.toString("Dog");
  }
}

class Cow extends Animal {
  constructor(hair, isAwake, isMoving) {
    super(2, 4, isAwake, isMoving);
    this.hair = hair;
  }
  speak() {
    super.speak("Moo.");
  }
  toString() {
    return super.toString("Cow");
  }
}

const cat1 = new Cat("Orange", true, false);
const cat2 = new Cat("Black and White", false, false);
const dog1 = new Dog("Gold", true, true);
const cow1 = new Cow("Brown", true, false);

console.log(cow1.toString());
