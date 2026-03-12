export const users = [
  { id: 1, name: 'Alice', age: 25, isActive: true, role: 'admin', salary: 50000 },
  { id: 2, name: 'Bob', age: 30, isActive: false, role: 'user', salary: 40000 },
  { id: 3, name: 'Charlie', age: 35, isActive: true, role: 'user', salary: 45000 },
  { id: 4, name: 'Diana', age: 28, isActive: true, role: 'admin', salary: 55000 },
  { id: 5, name: 'Eve', age: 22, isActive: false, role: 'user', salary: 35000 },
  { id: 6, name: 'Frank', age: 40, isActive: true, role: 'moderator', salary: 48000 },
  { id: 7, name: 'Grace', age: 27, isActive: true, role: 'user', salary: 42000 },
  { id: 8, name: 'Henry', age: 33, isActive: false, role: 'moderator', salary: 47000 },
  { id: 9, name: 'Iris', age: 29, isActive: true, role: 'admin', salary: 53000 },
  { id: 10, name: 'Jack', age: 31, isActive: false, role: 'user', salary: 38000 },
];

export const products = [
  { id: 1, name: 'Sword', price: 100, category: 'weapon', inStock: true, quantity: 5 },
  { id: 2, name: 'Shield', price: 80, category: 'armor', inStock: true, quantity: 3 },
  { id: 3, name: 'Potion', price: 20, category: 'consumable', inStock: false, quantity: 0 },
  { id: 4, name: 'Armor', price: 150, category: 'armor', inStock: true, quantity: 2 },
  { id: 5, name: 'Bow', price: 90, category: 'weapon', inStock: false, quantity: 0 },
  { id: 6, name: 'Arrow', price: 5, category: 'ammo', inStock: true, quantity: 50 },
  { id: 7, name: 'Helmet', price: 70, category: 'armor', inStock: true, quantity: 4 },
  { id: 8, name: 'Boots', price: 40, category: 'armor', inStock: true, quantity: 6 },
  { id: 9, name: 'Ring', price: 200, category: 'accessory', inStock: false, quantity: 0 },
  { id: 10, name: 'Amulet', price: 120, category: 'accessory', inStock: true, quantity: 1 },
];

export const orders = [
  { id: 1, userId: 1, productId: 1, quantity: 2, total: 200, status: 'completed' },
  { id: 2, userId: 2, productId: 3, quantity: 5, total: 100, status: 'pending' },
  { id: 3, userId: 1, productId: 4, quantity: 1, total: 150, status: 'completed' },
  { id: 4, userId: 3, productId: 2, quantity: 3, total: 240, status: 'shipped' },
  { id: 5, userId: 4, productId: 5, quantity: 1, total: 90, status: 'cancelled' },
  { id: 6, userId: 2, productId: 6, quantity: 20, total: 100, status: 'completed' },
  { id: 7, userId: 5, productId: 7, quantity: 2, total: 140, status: 'pending' },
  { id: 8, userId: 3, productId: 1, quantity: 1, total: 100, status: 'completed' },
  { id: 9, userId: 1, productId: 9, quantity: 1, total: 200, status: 'cancelled' },
  { id: 10, userId: 4, productId: 10, quantity: 1, total: 120, status: 'shipped' },
];
