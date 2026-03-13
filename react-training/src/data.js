export const products = [
  {
    id: 1,
    name: 'Sword',
    price: 100,
    category: 'weapon',
    inStock: true,
    quantity: 5,
  },
  {
    id: 2,
    name: 'Shield',
    price: 80,
    category: 'armor',
    inStock: true,
    quantity: 3,
  },
  {
    id: 3,
    name: 'Potion',
    price: 20,
    category: 'consumable',
    inStock: false,
    quantity: 0,
  },
  {
    id: 4,
    name: 'Armor',
    price: 150,
    category: 'armor',
    inStock: true,
    quantity: 2,
  },
  {
    id: 5,
    name: 'Bow',
    price: 90,
    category: 'weapon',
    inStock: false,
    quantity: 0,
  },
  {
    id: 6,
    name: 'Arrow',
    price: 5,
    category: 'ammo',
    inStock: true,
    quantity: 50,
  },
  {
    id: 7,
    name: 'Helmet',
    price: 70,
    category: 'armor',
    inStock: true,
    quantity: 4,
  },
  {
    id: 8,
    name: 'Boots',
    price: 40,
    category: 'armor',
    inStock: true,
    quantity: 6,
  },
  {
    id: 9,
    name: 'Ring',
    price: 200,
    category: 'accessory',
    inStock: false,
    quantity: 0,
  },
  {
    id: 10,
    name: 'Amulet',
    price: 120,
    category: 'accessory',
    inStock: true,
    quantity: 1,
  },
];

export const users = [
  {
    id: 1,
    name: 'Alice',
    age: 25,
    isActive: true,
    role: 'admin',
    salary: 50000,
  },
  { id: 2, name: 'Bob', age: 30, isActive: false, role: 'user', salary: 40000 },
  {
    id: 3,
    name: 'Charlie',
    age: 35,
    isActive: true,
    role: 'user',
    salary: 45000,
  },
  {
    id: 4,
    name: 'Diana',
    age: 28,
    isActive: true,
    role: 'admin',
    salary: 55000,
  },
  { id: 5, name: 'Eve', age: 22, isActive: false, role: 'user', salary: 35000 },
];

export function fetchUsers() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(users), 2000);
  });
}
