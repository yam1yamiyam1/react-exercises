/**
 * ============================================================
 * EXERCISE 1: React State & Props — User Dashboard
 * ============================================================
 *
 * YOUR SKILL LEVEL (based on your Vanilla JS code):
 *   ✅ You already know: DOM manipulation, event listeners,
 *      array methods (.map, .filter), object destructuring,
 *      template literals, toggle logic, and state objects.
 *
 * THE MENTAL SHIFT:
 *   In your Vanilla JS task manager, you did this:
 *     state = { tasks: [...state.tasks, newTask] };
 *     document.getElementById('taskList').innerHTML = tasks.map(...).join('');
 *
 *   In React, you NEVER touch the DOM directly. Instead:
 *     setUsers([...users, newUser]);   // React re-renders automatically!
 *
 *   Think of useState like your `let state = {}` — but magical:
 *   every time you call the setter, the UI auto-updates.
 *
 * ============================================================
 * WHAT YOU'LL BUILD:
 *   A User Dashboard that displays users from your dataset with:
 *   - Filter by role (admin / moderator / user)
 *   - Toggle to show only active users
 *   - Click a user card to "select" it and show their details
 *
 * ============================================================
 * CONCEPTS YOU'LL PRACTICE:
 *   - useState (replaces your `let state = {}`)
 *   - Props (replaces passing data via innerHTML / data attributes)
 *   - Conditional rendering (replaces your if/else DOM writes)
 *   - .map() in JSX (replaces .map().join('') + innerHTML)
 *
 * ============================================================
 * TASKS — complete each TODO in order:
 */

import { useState } from 'react';
import { users } from '../data/data';

// ─────────────────────────────────────────
// CHILD COMPONENT: UserCard
// ─────────────────────────────────────────
// This is like a reusable HTML template.
// In Vanilla JS you'd write a function returning an HTML string.
// Here you write a function returning JSX.
//
// Props are like function parameters — the parent passes data in.

function UserCard({ user, isSelected, onSelect }) {
  // TODO 1.1 ─────────────────────────────
  // Add a click handler so clicking the card calls onSelect(user.id).
  // HINT: In your Vanilla JS you did:
  //   card.addEventListener('click', () => state.selectedTaskIds.push(id));
  // Here: <div onClick={() => onSelect(user.id)}>

  // TODO 1.2 ─────────────────────────────
  // Conditionally show a ★ star icon next to the name if isSelected is true.
  // HINT: Use a ternary — {isSelected ? '★ ' : ''}
  // This replaces your classList.toggle() pattern.

  return (
    <div
      style={{
        border: isSelected ? '2px solid #6366f1' : '1px solid #e5e7eb',
        borderRadius: '8px',
        padding: '16px',
        cursor: 'pointer',
        backgroundColor: isSelected ? '#eef2ff' : 'white',
        transition: 'all 0.2s',
      }}
      // TODO 1.1: add onClick here
    >
      <h3 style={{ margin: '0 0 4px' }}>
        {/* TODO 1.2: add star if selected */}
        {user.name}
      </h3>
      <p style={{ margin: '0', color: '#6b7280', fontSize: '14px' }}>
        Role: <strong>{user.role}</strong> · Age: {user.age}
      </p>
      <p style={{ margin: '4px 0 0', fontSize: '13px' }}>
        <span
          style={{
            color: user.isActive ? '#16a34a' : '#dc2626',
            fontWeight: 600,
          }}
        >
          {user.isActive ? '● Active' : '○ Inactive'}
        </span>
        <span style={{ marginLeft: '12px', color: '#6b7280' }}>
          ${user.salary.toLocaleString()}/yr
        </span>
      </p>
    </div>
  );
}

// ─────────────────────────────────────────
// CHILD COMPONENT: UserDetail
// ─────────────────────────────────────────
// Shows details for the selected user.
// Receives the full user object as a prop.

function UserDetail({ user }) {
  // TODO 1.3 ─────────────────────────────
  // If no user is selected (user is null), return a placeholder:
  //   <p>Select a user to see details.</p>
  // HINT: In Vanilla JS you'd check `if (!selectedUser) return;`
  // In React: if (!user) return <p>...</p>;

  return (
    <div
      style={{
        background: '#f9fafb',
        borderRadius: '12px',
        padding: '24px',
        border: '1px solid #e5e7eb',
      }}
    >
      {/* TODO 1.3: handle null case above this return */}
      <h2 style={{ marginTop: 0 }}>{user?.name}</h2>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <tbody>
          {[
            ['ID', user?.id],
            ['Role', user?.role],
            ['Age', user?.age],
            ['Status', user?.isActive ? 'Active' : 'Inactive'],
            ['Salary', `$${user?.salary?.toLocaleString()}`],
          ].map(([label, value]) => (
            <tr key={label}>
              <td
                style={{
                  padding: '6px 12px 6px 0',
                  color: '#6b7280',
                  fontWeight: 500,
                  width: '100px',
                }}
              >
                {label}
              </td>
              <td style={{ padding: '6px 0', fontWeight: 600 }}>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─────────────────────────────────────────
// PARENT COMPONENT: Exercise1
// ─────────────────────────────────────────
// This is the "main" component — like the top of your Vanilla JS file
// where you held `let state = {}`.

export default function Exercise1() {
  // TODO 1.4 ─────────────────────────────
  // Declare these 3 state variables using useState:
  //   selectedId   → starts as null       (which user is clicked)
  //   roleFilter   → starts as 'all'      (dropdown filter value)
  //   activeOnly   → starts as false      (checkbox toggle)
  //
  // SYNTAX: const [value, setValue] = useState(initialValue);
  //
  // Compare to your Vanilla JS:
  //   let state = { selectedTaskIds: [], filters: { showActive: false } }
  //
  // YOUR CODE HERE ↓

  // TODO 1.5 ─────────────────────────────
  // Filter the users array using your state values.
  // You already know how to do this — you did it in your training exercises!
  //   const filtered = users
  //     .filter(u => roleFilter === 'all' || u.role === roleFilter)
  //     .filter(u => !activeOnly || u.isActive);
  //
  // YOUR CODE HERE ↓

  // TODO 1.6 ─────────────────────────────
  // Find the selected user object from the users array:
  //   const selectedUser = users.find(u => u.id === selectedId) ?? null;
  //
  // YOUR CODE HERE ↓

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '24px' }}>
      <h1 style={{ marginBottom: '8px' }}>👥 User Dashboard</h1>
      <p style={{ color: '#6b7280', marginTop: 0 }}>
        Exercise 1 · State & Props
      </p>

      {/* FILTERS */}
      <div
        style={{
          display: 'flex',
          gap: '16px',
          alignItems: 'center',
          marginBottom: '24px',
          padding: '16px',
          background: '#f9fafb',
          borderRadius: '8px',
        }}
      >
        {/* TODO 1.7 ─────────────────────────────────────
            Wire up this select dropdown:
            - value should be {roleFilter}
            - onChange should call setRoleFilter with the new value
            HINT: onChange={(e) => setRoleFilter(e.target.value)}
            This replaces your input event listener pattern. */}
        <select
          style={{ padding: '8px 12px', borderRadius: '6px', border: '1px solid #d1d5db' }}
          // TODO 1.7: add value and onChange
        >
          <option value="all">All Roles</option>
          <option value="admin">Admin</option>
          <option value="moderator">Moderator</option>
          <option value="user">User</option>
        </select>

        {/* TODO 1.8 ─────────────────────────────────────
            Wire up this checkbox:
            - checked should be {activeOnly}
            - onChange should toggle activeOnly (setActiveOnly(!activeOnly))
            This replaces your btn.addEventListener('click', toggle) pattern. */}
        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
          <input
            type="checkbox"
            // TODO 1.8: add checked and onChange
          />
          Active users only
        </label>

        <span style={{ marginLeft: 'auto', color: '#6b7280', fontSize: '14px' }}>
          {/* TODO 1.9: Show "X of Y users" using filtered.length and users.length */}
          ? of {users.length} users
        </span>
      </div>

      {/* MAIN LAYOUT */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        {/* LEFT: USER LIST */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {/* TODO 1.10 ──────────────────────────────────
              Render a UserCard for each user in `filtered`.
              HINT: filtered.map((user) => (
                <UserCard
                  key={user.id}        ← React needs a unique key!
                  user={user}          ← pass the user object as prop
                  isSelected={selectedId === user.id}
                  onSelect={setSelectedId}
                />
              ))

              Compare to your Vanilla JS innerHTML pattern:
                document.getElementById('taskList').innerHTML =
                  state.tasks.map(t => `<div class="task-card">${t.title}</div>`).join('');

              KEY DIFFERENCE: No .join(''), no innerHTML — just JSX in .map() */}
        </div>

        {/* RIGHT: USER DETAIL */}
        {/* TODO 1.11 ──────────────────────────────────
            Render <UserDetail user={selectedUser} />
            The UserDetail component handles the null case internally (TODO 1.3). */}
      </div>
    </div>
  );
}
