/**
 * ============================================================
 * EXERCISE 3: Combined Logic — Order Manager
 * ============================================================
 * WHAT YOU'LL BUILD:
 *   A full Order Manager with a table of orders, stats bar,
 *   status filter tabs, add-order form, and live status updates.
 *
 * YOUR APPROACH — in this order:
 *   PHASE 1 → Render the table with hardcoded data (see it first)
 *   PHASE 2 → Add state + async load (replace hardcoded data)
 *   PHASE 3 → Wire up the form, filters, and status changes
 *
 * NEW CONCEPT — Derived State:
 *   Don't store things you can calculate.
 *   Instead of a separate filteredOrders state, just compute it:
 *     const filteredOrders = orders.filter(o =>
 *       statusFilter === 'all' || o.status === statusFilter
 *     );
 *   React recalculates this on every render automatically.
 * ============================================================
 */

import { useState, useEffect } from 'react';
import { orders as initialOrders, users, products } from '../data/data';

// ─────────────────────────────────────────
// FAKE API — don't change this
// ─────────────────────────────────────────
function fakeOrdersApi() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(initialOrders), 800);
  });
}

// ─────────────────────────────────────────
// HELPER — joins order with user + product name
// ─────────────────────────────────────────
function enrichOrder(order) {
  const user = users.find((u) => u.id === order.userId);
  const product = products.find((p) => p.id === order.productId);
  return {
    ...order,
    userName: user?.name ?? 'Unknown User',
    productName: product?.name ?? 'Unknown Product',
  };
}

// Pre-enriched data for Phase 1 hardcoding
const SAMPLE_ORDERS = initialOrders.map(enrichOrder);

// ─────────────────────────────────────────
// COMPONENT: StatsBar
// ─────────────────────────────────────────
const STATUS_COLORS = {
  completed: { bg: '#dcfce7', text: '#16a34a' },
  pending: { bg: '#fef3c7', text: '#d97706' },
  shipped: { bg: '#dbeafe', text: '#2563eb' },
  cancelled: { bg: '#fee2e2', text: '#dc2626' },
};
const STATUS_OPTIONS = ['pending', 'shipped', 'completed', 'cancelled'];

function StatsBar({ orders }) {
  // ── TODO 3.5 ──────────────────────────────────────────────
  // Compute totalRevenue and byStatus from the orders prop.
  // You've done .reduce() in your training — same thing here.
  //
  // const totalRevenue = orders.reduce((sum, o) => sum + o.total, 0);
  // const byStatus = orders.reduce((acc, o) => {
  //   acc[o.status] = (acc[o.status] || 0) + 1;
  //   return acc;
  // }, {});
  //
  // Then replace the hardcoded $? and ? below with the real values.
  // YOUR CODE HERE ↓

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
        gap: '12px',
        marginBottom: '24px',
      }}
    >
      <div
        style={{ background: '#ede9fe', borderRadius: '10px', padding: '16px' }}
      >
        <p
          style={{
            margin: 0,
            fontSize: '12px',
            color: '#7c3aed',
            fontWeight: 600,
          }}
        >
          TOTAL REVENUE
        </p>
        <p
          style={{
            margin: '4px 0 0',
            fontSize: '22px',
            fontWeight: 700,
            color: '#5b21b6',
          }}
        >
          $?
        </p>
      </div>
      {['completed', 'pending', 'shipped', 'cancelled'].map((status) => (
        <div
          key={status}
          style={{
            background: '#f9fafb',
            borderRadius: '10px',
            padding: '16px',
            border: '1px solid #e5e7eb',
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: '12px',
              color: STATUS_COLORS[status].text,
              fontWeight: 600,
              textTransform: 'uppercase',
            }}
          >
            {status}
          </p>
          <p style={{ margin: '4px 0 0', fontSize: '22px', fontWeight: 700 }}>
            ?
          </p>
        </div>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────
// COMPONENT: OrderRow
// ─────────────────────────────────────────
function OrderRow({ order, onStatusChange }) {
  const colors = STATUS_COLORS[order.status] ?? {
    bg: '#f3f4f6',
    text: '#374151',
  };

  return (
    <tr style={{ borderBottom: '1px solid #f3f4f6' }}>
      <td style={{ padding: '12px 16px', fontWeight: 600 }}>#{order.id}</td>
      <td style={{ padding: '12px 16px' }}>{order.userName}</td>
      <td style={{ padding: '12px 16px' }}>{order.productName}</td>
      <td style={{ padding: '12px 16px' }}>×{order.quantity}</td>
      <td style={{ padding: '12px 16px', fontWeight: 600 }}>${order.total}</td>
      <td style={{ padding: '12px 16px' }}>
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
          // ── TODO 3.6 ────────────────────────────────────────
          // Add value={order.status}
          // Add onChange={(e) => onStatusChange(order.id, e.target.value)}
        >
          {STATUS_OPTIONS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </td>
    </tr>
  );
}

// ─────────────────────────────────────────
// COMPONENT: AddOrderForm
// ─────────────────────────────────────────
function AddOrderForm({ onAdd }) {
  // ── TODO 3.7 ──────────────────────────────────────────────
  // Declare form state for userId, productId, quantity.
  // const [userId, setUserId] = useState('');
  // const [productId, setProductId] = useState('');
  // const [quantity, setQuantity] = useState(1);
  // YOUR CODE HERE ↓

  // ── TODO 3.8 ──────────────────────────────────────────────
  // Write handleSubmit(e):
  //   1. e.preventDefault()
  //   2. if (!userId || !productId) return alert('Fill all fields')
  //   3. const product = products.find(p => p.id === Number(productId))
  //   4. const newOrder = { id: Date.now(), userId: Number(userId), productId: Number(productId), quantity: Number(quantity), total: product.price * quantity, status: 'pending' }
  //   5. onAdd(newOrder)
  //   6. reset: setUserId(''), setProductId(''), setQuantity(1)
  // YOUR CODE HERE ↓

  return (
    <form
      onSubmit={undefined /* ── TODO 3.8: replace with handleSubmit */}
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr auto auto',
        gap: '8px',
        alignItems: 'end',
        padding: '16px',
        background: '#f9fafb',
        borderRadius: '8px',
        marginBottom: '24px',
      }}
    >
      <div>
        <label
          style={{
            display: 'block',
            fontSize: '12px',
            fontWeight: 600,
            marginBottom: '4px',
          }}
        >
          User
        </label>
        <select
          style={{
            width: '100%',
            padding: '8px',
            borderRadius: '6px',
            border: '1px solid #d1d5db',
          }}
          // ── TODO 3.9: value={userId} onChange={(e) => setUserId(e.target.value)}
        >
          <option value="">Select user...</option>
          {users.map((u) => (
            <option key={u.id} value={u.id}>
              {u.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          style={{
            display: 'block',
            fontSize: '12px',
            fontWeight: 600,
            marginBottom: '4px',
          }}
        >
          Product
        </label>
        <select
          style={{
            width: '100%',
            padding: '8px',
            borderRadius: '6px',
            border: '1px solid #d1d5db',
          }}
          // ── TODO 3.9: value={productId} onChange={(e) => setProductId(e.target.value)}
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
        <label
          style={{
            display: 'block',
            fontSize: '12px',
            fontWeight: 600,
            marginBottom: '4px',
          }}
        >
          Qty
        </label>
        <input
          type="number"
          min="1"
          max="99"
          style={{
            width: '60px',
            padding: '8px',
            borderRadius: '6px',
            border: '1px solid #d1d5db',
          }}
          // ── TODO 3.9: value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}
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
// MAIN COMPONENT: Exercise3
// ─────────────────────────────────────────
export default function Exercise3() {
  // ════════════════════════════════════════
  // PHASE 2 — ADD STATE
  // (do this after Phase 1 is rendering)
  // ════════════════════════════════════════

  // ── TODO 3.3 ──────────────────────────────────────────────
  // Declare state:
  //   const [orders, setOrders] = useState([]);
  //   const [loading, setLoading] = useState(false);
  //   const [statusFilter, setStatusFilter] = useState('all');
  // YOUR CODE HERE ↓

  // ── TODO 3.4 ──────────────────────────────────────────────
  // Load orders on mount using useEffect + fakeOrdersApi().
  //
  //   useEffect(() => {
  //     setLoading(true);
  //     fakeOrdersApi().then((data) => {
  //       setOrders(data.map(enrichOrder));
  //       setLoading(false);
  //     });
  //   }, []);
  //
  // YOUR CODE HERE ↓

  // ── TODO 3.10 ─────────────────────────────────────────────
  // DERIVED STATE — compute filtered list, no extra useState needed.
  // const filteredOrders = orders.filter(
  //   (o) => statusFilter === 'all' || o.status === statusFilter
  // );
  // For Phase 1 use SAMPLE_ORDERS directly (see TODO 3.1 below).
  // YOUR CODE HERE ↓

  // ── TODO 3.11 ─────────────────────────────────────────────
  // handleAddOrder(newOrder): add to orders immutably.
  //   setOrders((prev) => [...prev, enrichOrder(newOrder)]);
  // YOUR CODE HERE ↓

  // ── TODO 3.12 ─────────────────────────────────────────────
  // handleStatusChange(orderId, newStatus): update one order's status.
  //   setOrders((prev) =>
  //     prev.map((o) => (o.id === orderId ? { ...o, status: newStatus } : o))
  //   );
  // YOUR CODE HERE ↓

  const statusOptions = ['all', 'pending', 'shipped', 'completed', 'cancelled'];

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '24px' }}>
      <h1 style={{ marginBottom: '8px' }}>📦 Order Manager</h1>
      <p style={{ color: '#6b7280', marginTop: 0 }}>
        Exercise 3 · Combined Logic
      </p>

      {/* ── TODO 3.1 ──────────────────────────────────────────
          PHASE 1 STARTS HERE — render the table with SAMPLE_ORDERS first.
          Just get rows showing on screen before touching any state.

          Step 1 — put StatsBar on screen:
            <StatsBar orders={SAMPLE_ORDERS} />

          Step 2 — put AddOrderForm on screen:
            <AddOrderForm onAdd={() => {}} />

          Step 3 — render the table rows (see TODO 3.2 below).

          Once everything is VISIBLE, come back and do Phase 2. */}

      {/* STATS BAR — TODO 3.1 step 1 */}

      {/* ADD ORDER FORM — TODO 3.1 step 2 */}

      {/* STATUS FILTER TABS */}
      <div
        style={{
          display: 'flex',
          gap: '8px',
          marginBottom: '16px',
          flexWrap: 'wrap',
        }}
      >
        {statusOptions.map((status) => (
          <button
            key={status}
            style={{
              padding: '6px 16px',
              borderRadius: '20px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 500,
              textTransform: 'capitalize',
              background: '#e5e7eb', // ── TODO 3.13: statusFilter === status ? '#6366f1' : '#e5e7eb'
              color: '#374151', // ── TODO 3.13: statusFilter === status ? 'white' : '#374151'
            }}
            // ── TODO 3.13: onClick={() => setStatusFilter(status)}
          >
            {status}
          </button>
        ))}
      </div>

      {/* ORDERS TABLE */}
      <div
        style={{
          overflowX: 'auto',
          borderRadius: '10px',
          border: '1px solid #e5e7eb',
        }}
      >
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            background: 'white',
          }}
        >
          <thead style={{ background: '#f9fafb' }}>
            <tr>
              {['Order', 'User', 'Product', 'Qty', 'Total', 'Status'].map(
                (h) => (
                  <th
                    key={h}
                    style={{
                      padding: '12px 16px',
                      textAlign: 'left',
                      fontSize: '12px',
                      fontWeight: 600,
                      color: '#6b7280',
                      textTransform: 'uppercase',
                    }}
                  >
                    {h}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {/* ── TODO 3.2 ────────────────────────────────────
                PHASE 1 — render rows using SAMPLE_ORDERS (hardcoded).
                Same .map() pattern as Exercise 1.

                {SAMPLE_ORDERS.map((order) => (
                  <OrderRow
                    key={order.id}
                    order={order}
                    onStatusChange={() => {}}
                  />
                ))}

                Once you see the rows → move to Phase 2.
                After Phase 2: replace SAMPLE_ORDERS with filteredOrders
                and onStatusChange={() => {}} with handleStatusChange. */}
          </tbody>
        </table>
      </div>

      {/* ── TODO 3.14 (BONUS) ───────────────────────────────
          Show: "Showing X of Y orders · Total: $Z"
          Pure derived — no extra state needed. */}
    </div>
  );
}
