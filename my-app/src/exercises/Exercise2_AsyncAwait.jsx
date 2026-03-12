/**
 * ============================================================
 * EXERCISE 2: Async / Await + Promises — Product Fetcher
 * ============================================================
 *
 * YOUR SKILL LEVEL (based on your code):
 *   ✅ You know: setTimeout, setInterval, clearInterval (your timer),
 *      state objects, DOM updates.
 *   ❌ You haven't used: fetch(), async/await, Promises, useEffect.
 *
 * ============================================================
 * ASYNC/AWAIT CRASH COURSE (read this first!):
 *
 * A Promise is a value that doesn't exist YET but will in the future.
 * Think of it like ordering food — you get a "receipt" (Promise)
 * and wait for the food (resolved value).
 *
 *   // Old way (callbacks — don't do this):
 *   fetch('/api/users').then(res => res.json()).then(data => { ... });
 *
 *   // Modern way (async/await — looks synchronous!):
 *   async function loadUsers() {
 *     const res = await fetch('/api/users');  // WAIT for response
 *     const data = await res.json();          // WAIT for JSON parse
 *     return data;
 *   }
 *
 *   // async functions ALWAYS return a Promise.
 *   // await pauses execution inside that function until the Promise resolves.
 *   // Use try/catch to handle errors (network failures, 404s, etc.)
 *
 * ============================================================
 * useEffect CRASH COURSE:
 *
 * In Vanilla JS you ran code immediately:
 *   startTimer(); // runs on page load
 *   document.getElementById('taskList').innerHTML = renderTasks();
 *
 * In React you use useEffect for "side effects" — anything that
 * reaches outside the component (fetch, timers, subscriptions).
 *
 *   useEffect(() => {
 *     // This runs AFTER the component mounts (like DOMContentLoaded)
 *     fetchProducts();
 *   }, []); // ← empty array = run once on mount only
 *
 *   useEffect(() => {
 *     // This runs every time `category` changes (like an event listener)
 *     fetchProducts();
 *   }, [category]); // ← runs when `category` changes
 *
 * ============================================================
 * WHAT YOU'LL BUILD:
 *   A Product Shop that:
 *   - "Fetches" products on load (simulated with a delay, like a real API)
 *   - Shows a loading spinner while waiting
 *   - Shows an error state if something goes wrong
 *   - Lets you filter by category (re-fetches when filter changes)
 *   - Lets you retry if there's an error
 *
 * ============================================================
 * TASKS — complete each TODO in order:
 */

import { useState, useEffect } from 'react';
import { products } from '../data/data';

// ─────────────────────────────────────────
// FAKE API (simulates a real network call)
// ─────────────────────────────────────────
// This returns a Promise, just like real fetch() would.
// You don't need to change this — just use it.

function fakeApi(category = 'all', shouldFail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error('Network error: Could not reach the server.'));
        return;
      }
      const filtered =
        category === 'all'
          ? products
          : products.filter((p) => p.category === category);
      resolve(filtered);
    }, 1200); // simulates 1.2s network delay
  });
}

// ─────────────────────────────────────────
// CHILD COMPONENT: ProductCard
// ─────────────────────────────────────────

function ProductCard({ product }) {
  return (
    <div
      style={{
        border: '1px solid #e5e7eb',
        borderRadius: '10px',
        padding: '16px',
        background: product.inStock ? 'white' : '#fef2f2',
        opacity: product.inStock ? 1 : 0.7,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <h3 style={{ margin: '0 0 4px' }}>{product.name}</h3>
        <span
          style={{
            background: product.inStock ? '#dcfce7' : '#fee2e2',
            color: product.inStock ? '#16a34a' : '#dc2626',
            padding: '2px 8px',
            borderRadius: '9999px',
            fontSize: '12px',
            fontWeight: 600,
          }}
        >
          {product.inStock ? 'In Stock' : 'Out of Stock'}
        </span>
      </div>
      <p style={{ margin: '4px 0', color: '#6b7280', fontSize: '13px', textTransform: 'capitalize' }}>
        {product.category}
      </p>
      <p style={{ margin: '8px 0 0', fontWeight: 700, fontSize: '18px', color: '#111827' }}>
        ${product.price}
      </p>
      {product.inStock && (
        <p style={{ margin: '2px 0 0', fontSize: '12px', color: '#6b7280' }}>
          {product.quantity} left in stock
        </p>
      )}
    </div>
  );
}

// ─────────────────────────────────────────
// CHILD COMPONENT: LoadingSpinner
// ─────────────────────────────────────────

function LoadingSpinner() {
  return (
    <div style={{ textAlign: 'center', padding: '60px 0', color: '#6b7280' }}>
      <div
        style={{
          width: '40px',
          height: '40px',
          border: '4px solid #e5e7eb',
          borderTopColor: '#6366f1',
          borderRadius: '50%',
          animation: 'spin 0.8s linear infinite',
          margin: '0 auto 16px',
        }}
      />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      <p>Loading products...</p>
    </div>
  );
}

// ─────────────────────────────────────────
// PARENT COMPONENT: Exercise2
// ─────────────────────────────────────────

export default function Exercise2() {
  // TODO 2.1 ─────────────────────────────
  // Declare state variables:
  //   items      → [] (the loaded products)
  //   loading    → false (are we currently fetching?)
  //   error      → null (error message string, or null if no error)
  //   category   → 'all' (selected category filter)
  //   simulateFail → false (checkbox to test error state)
  //
  // YOUR CODE HERE ↓

  // TODO 2.2 ─────────────────────────────
  // Create an async function called `loadProducts` that:
  //   1. Sets loading to true and error to null
  //   2. Calls: const data = await fakeApi(category, simulateFail)
  //      (wrap in try/catch — if it fails, set error to err.message)
  //   3. Sets items to the returned data
  //   4. Sets loading to false (in a finally block so it always runs)
  //
  // HINT TEMPLATE:
  //   async function loadProducts() {
  //     setLoading(true);
  //     setError(null);
  //     try {
  //       const data = await fakeApi(category, simulateFail);
  //       setItems(data);
  //     } catch (err) {
  //       setError(err.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //
  // YOUR CODE HERE ↓

  // TODO 2.3 ─────────────────────────────
  // Use useEffect to call loadProducts when the component mounts
  // AND whenever `category` or `simulateFail` changes.
  //
  // SYNTAX:
  //   useEffect(() => {
  //     loadProducts();
  //   }, [category, simulateFail]);
  //
  // Compare to your Vanilla JS startTimer() call on page load —
  // same idea, but React manages WHEN to run it for you.
  //
  // YOUR CODE HERE ↓

  const categories = ['all', 'weapon', 'armor', 'consumable', 'ammo', 'accessory'];

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '24px' }}>
      <h1 style={{ marginBottom: '8px' }}>⚔️ Product Shop</h1>
      <p style={{ color: '#6b7280', marginTop: 0 }}>
        Exercise 2 · Async / Await + useEffect
      </p>

      {/* CONTROLS */}
      <div
        style={{
          display: 'flex',
          gap: '12px',
          alignItems: 'center',
          flexWrap: 'wrap',
          marginBottom: '24px',
          padding: '16px',
          background: '#f9fafb',
          borderRadius: '8px',
        }}
      >
        {/* TODO 2.4 ─────────────────────────────────────
            Wire up the category buttons.
            When clicked, call setCategory(cat).
            The active button (category === cat) should look different.

            HINT:
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  style={{ background: category === cat ? '#6366f1' : '#e5e7eb', ... }}
                >
                  {cat}
                </button>
              ))} */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              style={{
                padding: '6px 14px',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 500,
                textTransform: 'capitalize',
                // TODO 2.4: change background based on active category
                background: '#e5e7eb',
                color: '#374151',
              }}
              // TODO 2.4: add onClick
            >
              {cat}
            </button>
          ))}
        </div>

        {/* TODO 2.5 ─────────────────────────────────────
            Wire up the "Simulate Error" checkbox.
            checked={simulateFail}, onChange toggles simulateFail. */}
        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: 'auto', cursor: 'pointer' }}>
          <input
            type="checkbox"
            // TODO 2.5: checked and onChange
          />
          <span style={{ fontSize: '13px', color: '#6b7280' }}>Simulate network error</span>
        </label>
      </div>

      {/* CONTENT AREA */}
      {/* TODO 2.6 ─────────────────────────────────────
          Use conditional rendering to show different states:
          
          if loading → show <LoadingSpinner />
          if error → show an error box with the message and a "Retry" button
                     that calls loadProducts() when clicked
          otherwise → show the product grid

          HINT for error state:
            <div style={{ background: '#fef2f2', border: '1px solid #fecaca', ... }}>
              <p>❌ {error}</p>
              <button onClick={loadProducts}>Retry</button>
            </div>

          HINT for the product grid:
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
              {items.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

          YOUR CODE HERE ↓ */}
    </div>
  );
}
