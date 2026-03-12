/**
 * ============================================================
 * EXERCISE 3: Combined Logic — Order Manager
 * ============================================================
 *
 * YOUR SKILL LEVEL CHECK:
 *   This exercise combines EVERYTHING from Ex1 + Ex2, plus
 *   patterns directly from your Task Manager Vanilla JS code.
 *
 *   In your task manager you had:
 *     state = { tasks: [...state.tasks, newTask] }   ← immutable update
 *     e.preventDefault()                              ← form handling
 *     task.completed = !task.completed               ← toggle
 *     tasks.filter(t => t.status === filter)         ← filtering
 *
 *   All of that translates 1:1 into React — you just use
 *   setState instead of `state = ...` and JSX instead of innerHTML.
 *
 * ============================================================
 * WHAT YOU'LL BUILD:
 *   A full Order Manager that:
 *   - Loads orders "from an API" (async, with loading state)
 *   - Lets you filter by order status
 *   - Shows stats (total revenue, count by status)
 *   - Lets you add a new order via a form
 *   - Lets you change an order's status
 *   - Shows joined data (user name + product name per order)
 *
 * ============================================================
 * NEW CONCEPT: Derived State
 *
 *   Don't store things you can calculate. Instead of:
 *     const [filteredOrders, setFilteredOrders] = useState([]);
 *
 *   Just compute it from existing state:
 *     const filteredOrders = orders.filter(o =>
 *       statusFilter === 'all' || o.status === statusFilter
 *     );
 *
 *   This is called "derived state" — React re-computes it on every render.
 *   Your Vanilla JS equivalent was recalculating innerHTML on each update.
 *
 * ============================================================
 * TASKS — complete each TODO in order:
 */

import { useState, useEffect } from 'react';
import { orders as initialOrders, users, products } from '../data/data';

// ─────────────────────────────────────────
// FAKE API
// ─────────────────────────────────────────

function fakeOrdersApi() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(initialOrders), 800);
  });
}

// ─────────────────────────────────────────
// HELPER: join order with user + product names
// ─────────────────────────────────────────
// You already know how to do this from your training exercises!

function enrichOrder(order) {
  const user = users.find((u) => u.id === order.userId);
  const product = products.find((p) => p.id === order.productId);
  return {
    ...order,
    userName: user?.name ?? 'Unknown User',
    productName: product?.name ?? 'Unknown Product',
  };
}

// ─────────────────────────────────────────
// CHILD COMPONENT: StatsBar
// ─────────────────────────────────────────

function StatsBar({ orders }) {
  // TODO 3.1 ─────────────────────────────
  // Compute these stats from the orders array:
  //   totalRevenue  → sum of all order totals (use .reduce())
  //   byStatus      → count of orders per status
  //                   { completed: 4, pending: 2, ... }
  //                   HINT: orders.reduce((acc, o) => {
  //                     acc[o.status] = (acc[o.status] || 0) + 1;
  //                     return acc;
  //                   }, {})
  //
  // YOUR CODE HERE ↓

  const statuses = ['completed', 'pending', 'shipped', 'cancelled'];
  const statusColors = {
    completed: '#16a34a',
    pending: '#d97706',
    shipped: '#2563eb',
    cancelled: '#dc2626',
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
        gap: '12px',
        marginBottom: '24px',
      }}
    >
      <div style={{ background: '#ede9fe', borderRadius: '10px', padding: '16px' }}>
        <p style={{ margin: 0, fontSize: '12px', color: '#7c3aed', fontWeight: 600 }}>TOTAL REVENUE</p>
        {/* TODO 3.1: display totalRevenue formatted as currency */}
        <p style={{ margin: '4px 0 0', fontSize: '22px', fontWeight: 700, color: '#5b21b6' }}>$?</p>
      </div>
      {statuses.map((status) => (
        <div
          key={status}
          style={{ background: '#f9fafb', borderRadius: '10px', padding: '16px', border: '1px solid #e5e7eb' }}
        >
          <p style={{ margin: 0, fontSize: '12px', color: statusColors[status], fontWeight: 600, textTransform: 'uppercase' }}>
            {status}
          </p>
          {/* TODO 3.1: display byStatus[status] or 0 */}
          <p style={{ margin: '4px 0 0', fontSize: '22px', fontWeight: 700 }}>?</p>
        </div>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────
// CHILD COMPONENT: OrderRow
// ─────────────────────────────────────────

const STATUS_OPTIONS = ['pending', 'shipped', 'completed', 'cancelled'];
const STATUS_COLORS = {
  completed: { bg: '#dcfce7', text: '#16a34a' },
  pending: { bg: '#fef3c7', text: '#d97706' },
  shipped: { bg: '#dbeafe', text: '#2563eb' },
  cancelled: { bg: '#fee2e2', text: '#dc2626' },
};

function OrderRow({ order, onStatusChange }) {
  const colors = STATUS_COLORS[order.status] ?? { bg: '#f3f4f6', text: '#374151' };

  return (
    <tr style={{ borderBottom: '1px solid #f3f4f6' }}>
      <td style={{ padding: '12px 16px', fontWeight: 600 }}>#{order.id}</td>
      <td style={{ padding: '12px 16px' }}>{order.userName}</td>
      <td style={{ padding: '12px 16px' }}>{order.productName}</td>
      <td style={{ padding: '12px 16px' }}>×{order.quantity}</td>
      <td style={{ padding: '12px 16px', fontWeight: 600 }}>${order.total}</td>
      <td style={{ padding: '12px 16px' }}>
        {/* TODO 3.2 ───────────────────────────────────
            Render a <select> dropdown for changing order status.
            - value={order.status}
            - onChange calls onStatusChange(order.id, e.target.value)
            - Map STATUS_OPTIONS to <option> elements

            This is exactly like your task status toggle in the task manager,
            but instead of a button it's a dropdown. */}
        <select
          style={{
            background: colors.bg,
            color: colors.text,
            border: 'none',
            borderRadius: '6px',
            padding: '4px 8px',
            fontWeight: 600,
            cursor: 'pointer',
          }}
          // TODO 3.2: add value and onChange
        >
          {/* TODO 3.2: render options */}
        </select>
      </td>
    </tr>
  );
}

// ─────────────────────────────────────────
// CHILD COMPONENT: AddOrderForm
// ─────────────────────────────────────────

function AddOrderForm({ onAdd }) {
  // TODO 3.3 ─────────────────────────────
  // Declare form state:
  //   userId    → '' (will be a number when selected)
  //   productId → ''
  //   quantity  → 1
  //
  // YOUR CODE HERE ↓

  // TODO 3.4 ─────────────────────────────
  // Write handleSubmit(e):
  //   1. e.preventDefault()  ← you know this from your task manager!
  //   2. Validate: userId and productId must not be empty
  //   3. Find the selected product to calculate total:
  //        const product = products.find(p => p.id === Number(productId));
  //        const total = product.price * Number(quantity);
  //   4. Build a new order object and call onAdd(newOrder)
  //   5. Reset the form fields
  //
  // YOUR CODE HERE ↓

  return (
    <form
      onSubmit={/* TODO 3.4: your handleSubmit */ undefined}
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr auto auto auto',
        gap: '8px',
        alignItems: 'end',
        padding: '16px',
        background: '#f9fafb',
        borderRadius: '8px',
        marginBottom: '24px',
      }}
    >
      {/* TODO 3.5 ─────────────────────────────────────
          Wire up these form fields:
          - Each needs value={stateVar} and onChange={...}
          - Use e.target.value for text/select, Number(e.target.value) for quantity

          COMPARE TO YOUR VANILLA JS:
            input.addEventListener('input', e => formValues.userId = e.target.value)
          IN REACT:
            <select value={userId} onChange={(e) => setUserId(e.target.value)}>...</select>
      */}
      <div>
        <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '4px', color: '#374151' }}>
          User
        </label>
        <select
          style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid #d1d5db' }}
          // TODO 3.5: value and onChange
        >
          <option value="">Select user...</option>
          {users.map((u) => (
            <option key={u.id} value={u.id}>{u.name}</option>
          ))}
        </select>
      </div>

      <div>
        <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '4px', color: '#374151' }}>
          Product
        </label>
        <select
          style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid #d1d5db' }}
          // TODO 3.5: value and onChange
        >
          <option value="">Select product...</option>
          {products
            .filter((p) => p.inStock)
            .map((p) => (
              <option key={p.id} value={p.id}>
                {p.name} (${p.price})
              </option>
            ))}
        </select>
      </div>

      <div>
        <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '4px', color: '#374151' }}>
          Qty
        </label>
        <input
          type="number"
          min="1"
          max="99"
          style={{ width: '60px', padding: '8px', borderRadius: '6px', border: '1px solid #d1d5db' }}
          // TODO 3.5: value and onChange
        />
      </div>

      <button
        type="submit"
        style={{
          padding: '8px 20px',
          background: '#6366f1',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontWeight: 600,
          alignSelf: 'end',
        }}
      >
        Add Order
      </button>
    </form>
  );
}

// ─────────────────────────────────────────
// PARENT COMPONENT: Exercise3
// ─────────────────────────────────────────

export default function Exercise3() {
  // TODO 3.6 ─────────────────────────────
  // Declare state:
  //   orders       → [] (will be populated by async load)
  //   loading      → false
  //   statusFilter → 'all'
  //
  // YOUR CODE HERE ↓

  // TODO 3.7 ─────────────────────────────
  // useEffect to load orders on mount (call fakeOrdersApi()).
  // On success: setOrders(data.map(enrichOrder))
  // Don't forget loading state!
  //
  // YOUR CODE HERE ↓

  // TODO 3.8 ─────────────────────────────
  // DERIVED STATE: compute filteredOrders from orders + statusFilter.
  // No useState needed — just a variable.
  //
  // YOUR CODE HERE ↓

  // TODO 3.9 ─────────────────────────────
  // handleAddOrder(newOrder):
  //   Add the new order to state (enriched with userName + productName).
  //   IMMUTABLE pattern (you used this in your task manager!):
  //     setOrders(prev => [...prev, enrichOrder(newOrder)]);
  //
  // YOUR CODE HERE ↓

  // TODO 3.10 ────────────────────────────
  // handleStatusChange(orderId, newStatus):
  //   Update one order's status. Immutable pattern:
  //     setOrders(prev =>
  //       prev.map(o => o.id === orderId ? { ...o, status: newStatus } : o)
  //     );
  //
  // YOUR CODE HERE ↓

  const statusOptions = ['all', 'pending', 'shipped', 'completed', 'cancelled'];

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '24px' }}>
      <h1 style={{ marginBottom: '8px' }}>📦 Order Manager</h1>
      <p style={{ color: '#6b7280', marginTop: 0 }}>
        Exercise 3 · Combined Logic (State + Props + Async)
      </p>

      {/* TODO 3.11 ──────────────────────────────────
          Show a loading message while orders are loading.
          Once loaded, show StatsBar, AddOrderForm, filters, and the table.

          STRUCTURE:
            {loading ? (
              <p>Loading orders...</p>
            ) : (
              <>
                <StatsBar orders={orders} />
                <AddOrderForm onAdd={handleAddOrder} />
                ... filters ...
                ... table ...
              </>
            )}
      */}

      {/* STATUS FILTER TABS */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
        {statusOptions.map((status) => (
          <button
            key={status}
            onClick={
              /* TODO 3.12: setStatusFilter(status) */ undefined
            }
            style={{
              padding: '6px 16px',
              borderRadius: '20px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 500,
              textTransform: 'capitalize',
              // TODO 3.12: highlight active filter
              background: '#e5e7eb',
              color: '#374151',
            }}
          >
            {status}
          </button>
        ))}
      </div>

      {/* ORDERS TABLE */}
      <div style={{ overflowX: 'auto', borderRadius: '10px', border: '1px solid #e5e7eb' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', background: 'white' }}>
          <thead style={{ background: '#f9fafb' }}>
            <tr>
              {['Order', 'User', 'Product', 'Qty', 'Total', 'Status'].map((h) => (
                <th
                  key={h}
                  style={{ padding: '12px 16px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase' }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* TODO 3.13 ──────────────────────────────────
                Map over filteredOrders and render an <OrderRow> for each.
                Pass order, onStatusChange={handleStatusChange} as props.
                Don't forget key={order.id}!

                If filteredOrders.length === 0, render a "No orders found" row instead:
                  <tr><td colSpan="6" style={{ textAlign: 'center', padding: '40px', color: '#9ca3af' }}>
                    No orders found
                  </td></tr>
            */}
          </tbody>
        </table>
      </div>

      {/* TODO 3.14 (BONUS) ──────────────────────────────
          Below the table, show a summary line:
          "Showing X of Y orders · Total: $Z"
          where X = filteredOrders.length, Y = orders.length,
          Z = sum of filteredOrders totals

          This is pure derived state — no extra useState needed. */}
    </div>
  );
}
