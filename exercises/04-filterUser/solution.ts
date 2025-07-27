type User = {
  name: string,
  age: number
}

const users = [
  { name: "Ana", age: 17 },
  { name: "Luis", age: 21 },
  { name: "Carlos", age: 18 },
  { name: "Marta", age: 16 }
]

function filterByMinAge(users: User[], minAge: number ): User[] {
  return users.filter((user) => user.age <= minAge );
}


console.log(filterByMinAge(users, 18));
