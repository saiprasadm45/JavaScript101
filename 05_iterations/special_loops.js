const msg = "I Love India";
console.log("hello " + msg);

for (let msgs of msg) {
  if (msgs.includes(" ")) {
    msgs.replace("Love", "hate");
    console.log(msg);
  }
}

const data = {
  user: "noobcoder",
  level: "beginner",
  likes: ["JS", "games", "memes"],
};

// Print all key-value pairs using for...in
// Print all likes using for...of
// Print index and value of likes using forEach

for (const info in data) {
  console.log(`${info} : ${data[info]}`);
}
for (const like of data.likes) {
  console.log(like);
}

data.likes.forEach((val, index) => console.log(index, val));

const student = {
  name: "Alex",
  age: 21,
  courses: ["Math", "English", "Physics"],
};

// Print all keys and values from student
// Print each course using for...of
// Print each course with index using forEach

for (let keys in student) {
  console.log(`${keys} : ${student[keys]}`);
}
for (let course of student.courses) {
  console.log(course);
}
student.courses.forEach((index, val,arr) => {
  console.log(val, index,arr);
});
