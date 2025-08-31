// for in : only for objects, gives keys and value pair
// for of : use when you want to go through values of an array, string, etc.
// foreach : array. (val,index,arry) You can’t use break or continue inside a forEach. If you need to stop early, use a normal for or for...of.

const msg = "I Love India";
console.log("hello " + msg);

for (let msgs of msg) {
  if (msg.includes(" ")) {
    let newm = msg.replaceAll(" ", "%");
    console.log(newm);
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
student.courses.forEach((val,index,arr) => {
  console.log(val, index,arr);
});

//map

let map = new Map;
map.set("in","india")
map.set("fr", "france")

for(const [key,value] of map){
  console.log(key ,':=', value)
}

let coding = [ 
    {
        LanguageName : 'javascript',
        extension : 'js'
    },
    {
         LanguageName : 'java',
        extension : 'java'
    },
    {
         LanguageName : 'python',
        extension : 'py'
    }
]

coding.forEach((item)=>{
    console.log(item.LanguageName)
})

let myinfo = {
   first : ["supra","toyota"],
   second : ["land-crusier", "defender"]
}

for(let info in myinfo){
    console.log(myinfo[info][1])
}