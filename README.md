# Differences Between Interfaces and Types in TypeScript 

When we write TypeScript code, sometimes we need to describe the shape of an object — like what properties(types) it will have.

To do that, we can use:

* interface

* type

### 1. Adding More Features

🔸 Interface:
You can extend an interface easily. That means you can create a new interface that builds on top of an old one.

```ts
interface Person {
  name: string;
}

interface Student extends Person {
  roll: number;
}

```
Here, Student is using all the things from Person, and also adding its own thing roll.

🔸 Type:
You can also extend a type, but the way is a bit different. You have to use the & symbol (called “intersection”).

```ts
type Person = {
  name: string;
};

type Student = Person & {
  roll: number;
};
```
So, both can be extended, but interface syntax is simpler for extending.

### 2. Declaration Merging
🔸 Interface:
You can write the same interface more than once, and TypeScript will combine them.

```ts
interface User {
  name: string;
}

interface User {
  age: number;
}

const user: User = {
  name: "Trisha",
  age: 23,
};
```
Here, both name and age work together — no error!

🔸 Type:
You cannot declare the same type twice. If you do, TypeScript will give an error.

```ts
type User = {
  name: string;
};

type User = {
  age: number;
}; //  Error! Cannot declare 'User' again
```
So, interface supports merging, but type does not.

### 3. Use with Primitives and Unions

🔸 Interface:
You can only use it for object shapes. You cannot use it for string, number, or for combining types using | (union).

```ts
interface Status = "active" | "inactive"; // Not allowed
```
🔸 Type:
You can use type for anything — not just objects. You can define simple values or combine types.
```ts
type Status = "active" | "inactive"; // Allowed
type ID = string | number;
```
So, type is more flexible.

### 🔹 Differences:

| Feature                        | Interface                             | Type                                 |
|-------------------------------|----------------------------------------|--------------------------------------|
| Extending                     | Can extend multiple interfaces         | Can extend types using intersections |
| Declaration Merging           | Supports (can be redeclared)           | Does **not** support merging         |
| Use with Primitives/Unions    | Not allowed                            | Allowed                              |

---

### Example: Interface

```ts
interface User {
  name: string;
  age: number;
}

// Extending interface
interface Admin extends User {
  role: string;
}

const admin: Admin = {
  name: "Sanjida",
  age: 23,
  role: "Super Admin"
};

```
### Example: Type
```ts
type User = {
  name: string;
  age: number;
};

// Union type using `type`
type Status = "active" | "inactive";

// Intersection with another type
type Admin = User & {
  role: string;
};

const admin: Admin = {
  name: "Trisha",
  age: 23,
  role: "Moderator"
};

```

# 2. The use of the keyof keyword in TypeScript
The keyof keyword is a powerful tool in TypeScript that returns a union of property names from a type or interface. It’s commonly used in generic programming and utility types.
Some reason to use keyof keyword:

* To make code safer and smarter.

* To avoid using wrong property names by mistake.

* To build reusable functions that work with many object types.

Syntax:
```ts
keyof TypeName

```

### Basic Use
Let’s say we have an object type called Person:

```ts
type Person = {
  name: string;
  age: number;
  isStudent: boolean;
};
```
If we write:

```ts
type PersonKeys = keyof Person;
```
Now PersonKeys will be:

```ts
// "name" | "age" | "isStudent"
```
That means: PersonKeys is a union of all the keys in the Person type.
Example 1: Basic keyof Usage

```ts
type User = {
  id: number;
  name: string;
  email: string;
};

type UserKeys = keyof User; // "id" | "name" | "email"

function getUserProperty(user: User, key: UserKeys) {
  return user[key];
}

const user: User = {
  id: 1,
  name: "Trisha",
  email: "trisha@example.com"
};

console.log(getUserProperty(user, "email")); // "trisha@example.com"
```
This ensures that you can only pass valid keys like "id", "name", or "email" — no invalid access like "address".

Example 2: keyof with Generics

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2024
};

const model = getProperty(car, "model"); // Type is string
console.log(model); // "Corolla"

```

Using keyof with generics helps build flexible, reusable, and safe functions for object access.

