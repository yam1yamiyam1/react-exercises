import { useState } from 'react';
import Exercise1 from './exercises/Exercise1_StateProps';
import Exercise2 from './exercises/Exercise2_AsyncAwait';
import Exercise3 from './exercises/Exercise3_Combined';

const EXERCISES = [
  {
    id: 1,
    title: 'State & Props',
    subtitle: 'User Dashboard',
    emoji: '👥',
    concepts: ['useState', 'props', '.map() in JSX', 'conditional rendering'],
    difficulty: 'Beginner',
    diffColor: '#16a34a',
  },
  {
    id: 2,
    title: 'Async / Await',
    subtitle: 'Product Shop',
    emoji: '⚔️',
    concepts: ['async/await', 'useEffect', 'loading state', 'error handling'],
    difficulty: 'Intermediate',
    diffColor: '#d97706',
  },
  {
    id: 3,
    title: 'Combined Logic',
    subtitle: 'Order Manager',
    emoji: '📦',
    concepts: [
      'derived state',
      'form handling',
      'immutable updates',
      'data joining',
    ],
    difficulty: 'Advanced',
    diffColor: '#dc2626',
  },
];

export default function App() {
  const [activeEx, setActiveEx] = useState(null);

  if (activeEx !== null) {
    const ex = EXERCISES[activeEx];
    return (
      <div
        style={{
          minHeight: '100vh',
          background: '#f8fafc',
          fontFamily: "'Segoe UI', system-ui, sans-serif",
        }}
      >
        <nav
          style={{
            background: 'white',
            borderBottom: '1px solid #e5e7eb',
            padding: '0 24px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            height: '56px',
            position: 'sticky',
            top: 0,
            zIndex: 10,
          }}
        >
          <button
            onClick={() => setActiveEx(null)}
            style={{
              background: 'none',
              border: '1px solid #e5e7eb',
              borderRadius: '6px',
              padding: '6px 12px',
              cursor: 'pointer',
              fontSize: '14px',
              color: '#374151',
            }}
          >
            ← Back
          </button>
          <span style={{ fontWeight: 700, fontSize: '15px' }}>
            {ex.emoji} {ex.title}
          </span>
          <span
            style={{
              marginLeft: 'auto',
              background: ex.diffColor + '20',
              color: ex.diffColor,
              padding: '2px 10px',
              borderRadius: '9999px',
              fontSize: '12px',
              fontWeight: 600,
            }}
          >
            {ex.difficulty}
          </span>
        </nav>
        {activeEx === 0 && <Exercise1 />}
        {activeEx === 1 && <Exercise2 />}
        {activeEx === 2 && <Exercise3 />}
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
    >
      <div style={{ maxWidth: '760px', width: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h1
            style={{
              color: 'white',
              fontSize: '36px',
              fontWeight: 800,
              margin: '0 0 12px',
              letterSpacing: '-0.5px',
            }}
          >
            ⚛️ React Exercises
          </h1>
          <p
            style={{
              color: 'rgba(255,255,255,0.8)',
              margin: 0,
              fontSize: '16px',
            }}
          >
            Vanilla JS → React · Calibrated to your skill level
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {EXERCISES.map((ex, i) => (
            <button
              key={ex.id}
              onClick={() => setActiveEx(i)}
              style={{
                background: 'white',
                border: 'none',
                borderRadius: '16px',
                padding: '24px 28px',
                cursor: 'pointer',
                textAlign: 'left',
                boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
                display: 'grid',
                gridTemplateColumns: '56px 1fr auto',
                alignItems: 'center',
                gap: '20px',
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  background: '#f3f4f6',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '26px',
                }}
              >
                {ex.emoji}
              </div>
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '4px',
                  }}
                >
                  <span
                    style={{
                      fontWeight: 700,
                      fontSize: '17px',
                      color: '#111827',
                    }}
                  >
                    {ex.title}
                  </span>
                  <span
                    style={{
                      background: ex.diffColor + '18',
                      color: ex.diffColor,
                      padding: '1px 8px',
                      borderRadius: '9999px',
                      fontSize: '11px',
                      fontWeight: 700,
                    }}
                  >
                    {ex.difficulty}
                  </span>
                </div>
                <div
                  style={{
                    color: '#6b7280',
                    fontSize: '13px',
                    marginBottom: '10px',
                  }}
                >
                  {ex.subtitle}
                </div>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {ex.concepts.map((c) => (
                    <span
                      key={c}
                      style={{
                        background: '#f3f4f6',
                        color: '#374151',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        fontSize: '11px',
                        fontFamily: 'monospace',
                        fontWeight: 600,
                      }}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
              <div style={{ color: '#9ca3af', fontSize: '20px' }}>→</div>
            </button>
          ))}
        </div>
        <p
          style={{
            textAlign: 'center',
            color: 'rgba(255,255,255,0.6)',
            fontSize: '13px',
            marginTop: '32px',
          }}
        >
          Do them in order · Each builds on the previous
        </p>
      </div>
    </div>
  );
}
