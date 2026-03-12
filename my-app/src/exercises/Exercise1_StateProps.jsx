/**
 * ============================================================
 * EXERCISE 1: React State & Props — User Dashboard
 * ============================================================
 * WHAT YOU'LL BUILD:
 *   A User Dashboard that displays users from your dataset with:
 *   - A list of user cards
 *   - Filter by role dropdown
 *   - Toggle to show only active users
 *   - Click a user card to show their details on the right
 *
 * YOUR APPROACH — in this order:
 *   PHASE 1 → Get it on screen (render the list, see the UI)
 *   PHASE 2 → Add state (make it remember things)
 *   PHASE 3 → Wire up interactions (make it respond to clicks)
 * ============================================================
 */

import { useState } from 'react';
import { users } from '../data/data';

// ─────────────────────────────────────────
// COMPONENT: UserCard
// ─────────────────────────────────────────
// Think of this like a reusable HTML template function.
// It receives a `user` object as a prop (like a parameter)
// and renders it as a card.

function UserCard({ user, isSelected, onSelect }) {
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
      // ── TODO 1.6 ──────────────────────────────────────────
      // Add onClick so clicking this card calls onSelect(user.id)
      // This is the React version of addEventListener('click', ...)
      // HINT: onClick={() => onSelect(user.id)}
    >
      <h3 style={{ margin: '0 0 4px' }}>
        {/* ── TODO 1.7 ────────────────────────────────────────
            Show a ★ before the name if isSelected is true.
            HINT: {isSelected ? '★ ' : ''}{user.name} */}
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
// COMPONENT: UserDetail
// ─────────────────────────────────────────
// Shows the full details of the selected user on the right panel.

function UserDetail({ user }) {
  // ── TODO 1.8 ──────────────────────────────────────────────
  // If no user is selected, show a placeholder message instead.
  // HINT: if (!user) return <p style={{ color: '#9ca3af' }}>Select a user to see details.</p>;

  return (
    <div
      style={{
        background: '#f9fafb',
        borderRadius: '12px',
        padding: '24px',
        border: '1px solid #e5e7eb',
      }}
    >
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
// MAIN COMPONENT: Exercise1
// ─────────────────────────────────────────

export default function Exercise1() {
  // ════════════════════════════════════════
  // PHASE 2 — ADD STATE
  // (do this after Phase 1 is rendering)
  // ════════════════════════════════════════

  // ── TODO 1.3 ──────────────────────────────────────────────
  // Declare 3 state variables.
  // useState is like your `let state = {}` but React re-renders when it changes.
  //
  //   selectedId  → null         which user card is clicked
  //   roleFilter  → 'all'        value of the role dropdown
  //   activeOnly  → false        whether the checkbox is checked
  //
  // SYNTAX: const [value, setValue] = useState(initialValue);
  //
  // YOUR CODE HERE ↓

  // ── TODO 1.4 ──────────────────────────────────────────────
  // Filter the users array based on roleFilter and activeOnly.
  // You already know .filter() — this is identical to your training exercises.
  //
  // const filtered = users
  //   .filter((u) => roleFilter === 'all' || u.role === roleFilter)
  //   .filter((u) => !activeOnly || u.isActive);
  //
  // For now (before TODO 1.3 is done), just use:
  // const filtered = users;
  //
  // YOUR CODE HERE ↓
  const filtered = users; // ← replace this once you do TODO 1.3 + 1.4

  // ── TODO 1.5 ──────────────────────────────────────────────
  // Find the full user object that matches selectedId.
  //
  // const selectedUser = users.find((u) => u.id === selectedId) ?? null;
  //
  // For now just use: const selectedUser = null;
  //
  // YOUR CODE HERE ↓
  const selectedUser = null; // ← replace this once you do TODO 1.3 + 1.5

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '24px' }}>
      <h1 style={{ marginBottom: '8px' }}>👥 User Dashboard</h1>
      <p style={{ color: '#6b7280', marginTop: 0 }}>
        Exercise 1 · State & Props
      </p>

      {/* FILTERS BAR */}
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
        {/* ── TODO 1.9 ────────────────────────────────────────
            Connect the dropdown to state.
            Add:  value={roleFilter}
                  onChange={(e) => setRoleFilter(e.target.value)}
            This replaces addEventListener('input', ...) from Vanilla JS. */}
        <select
          style={{
            padding: '8px 12px',
            borderRadius: '6px',
            border: '1px solid #d1d5db',
          }}
        >
          <option value="all">All Roles</option>
          <option value="admin">Admin</option>
          <option value="moderator">Moderator</option>
          <option value="user">User</option>
        </select>

        {/* ── TODO 1.10 ───────────────────────────────────────
            Connect the checkbox to state.
            Add:  checked={activeOnly}
                  onChange={() => setActiveOnly(!activeOnly)} */}
        <label
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
          }}
        >
          <input type="checkbox" />
          Active users only
        </label>

        {/* ── TODO 1.11 ───────────────────────────────────────
            Replace the ? with filtered.length once TODO 1.4 is done. */}
        <span
          style={{ marginLeft: 'auto', color: '#6b7280', fontSize: '14px' }}
        >
          ? of {users.length} users
        </span>
      </div>

      {/* MAIN LAYOUT */}
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}
      >
        {/* LEFT: USER LIST */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {/* ── TODO 1.1 ──────────────────────────────────────
              PHASE 1 STARTS HERE — just get the list on screen first.
              Use filtered.map() to render a UserCard for each user.

              This is the React version of:
                element.innerHTML = users.map(u => `<div>${u.name}</div>`).join('')

              The difference: no .join(''), no innerHTML — just JSX inside .map()
              React also needs a unique `key` prop on each item.

              HINT:
                {filtered.map((user) => (
                  <UserCard
                    key={user.id}
                    user={user}
                    isSelected={false}
                    onSelect={() => {}}
                  />
                ))}

              Once you can SEE the list, move to TODO 1.2 → then Phase 2. */}
        </div>

        {/* RIGHT: USER DETAIL */}
        {/* ── TODO 1.2 ────────────────────────────────────────
            Render the UserDetail component here.
            Pass selectedUser as the user prop.
            For now pass null — it will show the placeholder (TODO 1.8).

            HINT: <UserDetail user={selectedUser} /> */}
      </div>
    </div>
  );
}
