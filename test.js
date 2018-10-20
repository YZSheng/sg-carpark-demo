console.log("hi");
console.log("hi");

const numbers = [1, 2, 3];
const numbersAgain = [1, 2, 3];

const student = {
  name: "Max",
  school: {
    name: "NTU",
    country: "Singapore"
  },
  age: 20,
  sex: "Male"
};

const printStudentInfo = ({ name, school }) => {
  console.log(`Student ${name.toLowerCase()} studies in ${school.name}`);
};

printStudentInfo(student);
