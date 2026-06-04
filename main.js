console.log("Welcome to Community Event Portal");

const events = [
  {
    name: "Music Festival",
    date: "2026-06-15",
    seats: 50,
    category: "Music",
  },
  {
    name: "Food Fair",
    date: "2025-01-01",
    seats: 20,
    category: "Food",
  },
  {
    name: "Tech Meetup",
    date: "2026-07-10",
    seats: 0,
    category: "Tech",
  },
];

// Task 3 - Conditionals and Loops
events.forEach((event) => {
  if (event.seats > 0 && event.date > "2026-06-01") {
    console.log(`${event.name} is available. Seats: ${event.seats}`);
  } else {
    console.log(`${event.name} is unavailable`);
  }
});

// Task 4 - Add Event
function addEvent(name, date, seats, category) {
  events.push({
    name,
    date,
    seats,
    category,
  });

  console.log(`${name} added successfully`);
}

// Task 3 & 4 - Register User
function registerUser(eventName) {
  try {
    let event = events.find((e) => e.name === eventName);

    if (!event) {
      throw new Error("Event not found");
    }

    if (event.seats <= 0) {
      throw new Error("Seats not available");
    }

    event.seats--;

    console.log(`Registered successfully for: ${event.name}`);
  } catch (error) {
    console.log("Registration Error: " + error.message);
  }
}

// Task 4 - Higher Order Function + Callback
function filterEventsByCategory(category, callback) {
  let filtered = events.filter((e) => e.category === category);

  callback(filtered);
}

// Task 4 - Closure
function registrationTracker(category) {
  let totalRegistrations = 0;

  return function () {
    totalRegistrations++;

    console.log(`${category} registrations: ${totalRegistrations}`);
  };
}

// Closure Instance
const musicTracker = registrationTracker("Music");

// Testing
addEvent("Coding Workshop", "2026-08-01", 30, "Tech");

filterEventsByCategory("Tech", function (result) {
  console.log("Filtered Events:");
  console.log(result);
});

registerUser("Music Festival");
registerUser("Tech Meetup");
registerUser("Unknown Event");

musicTracker();
musicTracker();
musicTracker(); // Task 5 - Class

class Event {
  constructor(name, date, seats, category) {
    this.name = name;
    this.date = date;
    this.seats = seats;
    this.category = category;
  }
}

// Prototype Method

Event.prototype.checkAvailability = function () {
  if (this.seats > 0) {
    console.log(`${this.name} has ${this.seats} seats available`);
  } else {
    console.log(`${this.name} is full`);
  }
};

// Create Objects

let event1 = new Event("AI Workshop", "2026-09-01", 25, "Tech");

let event2 = new Event("Music Night", "2026-10-01", 0, "Music");

// Call Prototype Method

event1.checkAvailability();
event2.checkAvailability();

// Object.entries()

console.log("Event Details:");

Object.entries(event1).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

let communityEvents = [
  { name: "Music Festival", category: "Music" },
  { name: "AI Workshop", category: "Tech" },
  { name: "Food Fair", category: "Food" },
  { name: "Coding Workshop", category: "Tech" },
];

communityEvents.push({
  name: "Sports Meet",
  category: "Sports",
});

console.log("After Push:");
console.log(communityEvents);

let techEvents = communityEvents.filter((event) => event.category === "Tech");

console.log("Tech Events:");
console.log(techEvents);

let eventNames = communityEvents.map((event) => event.name);

console.log("Event Names:");
console.log(eventNames);


// Task 7 - DOM Manipulation

const heading = document.getElementById("mainHeading");

heading.textContent = "Community Event Portal - DOM Demo";

const container = document.getElementById("eventContainer");

container.innerHTML = "<p>Upcoming Events</p>";

document.getElementById("addBtn").addEventListener("click", function () {

  addEvent(
    "Demo Event",
    "2026-12-01",
    100,
    "Tech"
  );

  let eventCard = document.createElement("div");

  eventCard.innerHTML = `
    <h3>Demo Event</h3>
    <p>Date: 2026-12-01</p>
    <p>Seats: 100</p>
    <hr>
  `;

  container.appendChild(eventCard);

});

// Task 8 - Event Handling

document
.getElementById("clickBtn")
.addEventListener(
    "click",
    function () {

        alert("Button Clicked");

    }
);

document
.getElementById("dblClickBtn")
.addEventListener(
    "dblclick",
    function () {

        alert("Button Double Clicked");

    }
);

document
.getElementById("eventSelect")
.addEventListener(
    "change",
    function (event) {

        document
        .getElementById("selectedEvent")
        .textContent =
        "Selected Event: " +
        event.target.value;

    }
);

document
.getElementById("userInput")
.addEventListener(
    "keydown",
    function (event) {

        document
        .getElementById("keyMessage")
        .textContent =
        "Key Pressed: " +
        event.key;

    }
);

document
.getElementById("userInput")
.addEventListener(
    "keyup",
    function () {

        console.log(
            "Key Released"
        );

    }
);

// Task 9

function fetchEventData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Event data loaded successfully");
    }, 2000);
  });
}

fetchEventData()
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// Task 10

const organizer = {
  name: "Community Council",
  city: "Hyderabad",
};

const { name: organizerName, city } = organizer;

console.log(organizerName);
console.log(city);

const eventDetails = {
  eventName: "AI Workshop",
  seats: 30,
};

const updatedEvent = {
  ...eventDetails,
  category: "Tech",
};

console.log(updatedEvent);

// Task 11

document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let username = document.getElementById("username").value;

    let email = document.getElementById("email").value;

    if (username === "" || email === "") {
      alert("All fields are required");

      return;
    }

    alert("Registration Successful");
  });

// Task 12

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    console.log("Users:");

    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// Task 13

console.log("Debugging Started");

let totalSeats = 50;

console.log(totalSeats);

debugger;

totalSeats--;

console.log(totalSeats);

// Task 14

$(document).ready(function () {
  $("#mainHeading").click(function () {
    $(this).css("color", "blue");
  });
});
//Task 1
window.onload = function () {
  alert("Page fully Loaded");
};
