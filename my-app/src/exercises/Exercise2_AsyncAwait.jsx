/**
 * ============================================================
 * EXERCISE 2: Async / Await — Product Shop
 * ============================================================
 * WHAT YOU'LL BUILD:
 *   A Product Shop that fetches products (simulated API),
 *   shows a loading spinner, handles errors, and filters by category.
 *
 * YOUR APPROACH — in this order:
 *   PHASE 1 → Render the product grid with hardcoded data (see it first)
 *   PHASE 2 → Add state + async fetch (replace hardcoded with real load)
 *   PHASE 3 → Wire up filter buttons and error handling
 *
 * NEW CONCEPT — async/await:
 *   A Promise is a value that doesn't exist yet but will in the future.
 *
 *   async function loadData() {
 *     const data = await fakeApi();  // WAIT for the result
 *     setItems(data);                // then use it
 *   }
 *
 *   Wrap in try/catch to handle failures:
 *     try { ... } catch (err) { setError(err.message); }
 *
 * NEW CONCEPT — useEffect:
 *   In Vanilla JS you ran code on page load directly:
 *     startTimer();
 *
 *   In React, use useEffect for anything that runs on mount or on change:
 *     useEffect(() => { loadData(); }, []);          // run once on mount
 *     useEffect(() => { loadData(); }, [category]);  // run when category changes
 * ============================================================
 */

import { useState, useEffect } from 'react';
import { products } from '../data/data';

// ─────────────────────────────────────────
// FAKE API — don't change this
// ─────────────────────────────────────────
function fakeApi(category = 'all', shouldFail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error('Network error: Could not reach the server.'));
        return;
      }
      const result =
        category === 'all'
          ? products
          : products.filter((p) => p.category === category);
      resolve(result);
    }, 1200);
  });
}

// ─────────────────────────────────────────
// COMPONENT: ProductCard — already done for you
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
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
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
      <p
        style={{
          margin: '4px 0',
          color: '#6b7280',
          fontSize: '13px',
          textTransform: 'capitalize',
        }}
      >
        {product.category}
      </p>
      <p
        style={{
          margin: '8px 0 0',
          fontWeight: 700,
          fontSize: '18px',
          color: '#111827',
        }}
      >
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
// COMPONENT: LoadingSpinner — already done for you
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
// MAIN COMPONENT: Exercise2
// ─────────────────────────────────────────

export default function Exercise2() {
  // ════════════════════════════════════════
  // PHASE 2 — ADD STATE
  // (do this after Phase 1 is rendering)
  // ════════════════════════════════════════

  // ── TODO 2.3 ──────────────────────────────────────────────
  // Declare these state variables:
  //   items        → []    the loaded products list
  //   loading      → false are we currently waiting for data?
  //   error        → null  error message string, or null
  //   category     → 'all' selected filter
  //   simulateFail → false checkbox to test the error state
  //
  // YOUR CODE HERE ↓

  // ── TODO 2.4 ──────────────────────────────────────────────
  // Write an async function called loadProducts:
  //   1. setLoading(true), setError(null)
  //   2. const data = await fakeApi(category, simulateFail)
  //   3. setItems(data)
  //   4. setLoading(false) — put this in a finally block
  //
  // TEMPLATE:
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

  // ── TODO 2.5 ──────────────────────────────────────────────
  // Call loadProducts automatically using useEffect.
  // Run it on mount AND whenever category or simulateFail changes.
  //
  //   useEffect(() => {
  //     loadProducts();
  //   }, [category, simulateFail]);
  //
  // YOUR CODE HERE ↓

  const categories = [
    'all',
    'weapon',
    'armor',
    'consumable',
    'ammo',
    'accessory',
  ];

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '24px' }}>
      <h1 style={{ marginBottom: '8px' }}>⚔️ Product Shop</h1>
      <p style={{ color: '#6b7280', marginTop: 0 }}>
        Exercise 2 · Async / Await + useEffect
      </p>

      {/* FILTER BUTTONS */}
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
                background: '#e5e7eb', // ── TODO 2.6: highlight active: category === cat ? '#6366f1' : '#e5e7eb'
                color: '#374151', // ── TODO 2.6: category === cat ? 'white' : '#374151'
              }}
              // ── TODO 2.6: onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <label
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginLeft: 'auto',
            cursor: 'pointer',
          }}
        >
          <input
            type="checkbox"
            // ── TODO 2.7: checked={simulateFail} onChange={() => setSimulateFail(!simulateFail)}
          />
          <span style={{ fontSize: '13px', color: '#6b7280' }}>
            Simulate network error
          </span>
        </label>
      </div>

      {
        /* ── TODO 2.1 ────────────────────────────────────────────
          PHASE 1 STARTS HERE — render the grid with hardcoded data first.
          Just use the imported `products` array directly so you can see the UI.

          HINT:
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

          Once you can see the cards on screen → move to TODO 2.2. */
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '16px',
          }}
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      }

      {
        /* ── TODO 2.2 ────────────────────────────────────────────
          PHASE 1 STEP 2 — add the loading and error UI shells.
          Just hardcode them for now so you can see what they look like.

          Loading shell (paste this temporarily):
            <LoadingSpinner />

          Error shell (paste this temporarily):
            <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '8px', padding: '24px' }}>
              <p style={{ color: '#dc2626', margin: '0 0 12px' }}>❌ Something went wrong</p>
              <button style={{ padding: '8px 16px', background: '#dc2626', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
                Retry
              </button>
            </div>

          Once you've seen both → move to Phase 2 (TODO 2.3 onwards).
          After Phase 2 is done, come back and replace the hardcoded
          products with {items} and add the conditional logic:

            {loading ? <LoadingSpinner /> : error ? <ErrorBox /> : <Grid />} */
        <LoadingSpinner />
      }
    </div>
  );
}
