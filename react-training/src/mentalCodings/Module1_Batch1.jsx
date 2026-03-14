// ============================================================
// MODULE 1 — BATCH 1 (40 DRILLS)
// REACT INFINITY VOID | PHASE 2: THE SENTENCE
// ============================================================
// WEAKNESSES BEING BURNED OUT:
//   A) Conditional logic — always vs. conditional rendering
//   B) Key strategy — stable IDs vs. index, and WHY
//   C) Map precision — correct className, rendered values, no empty nodes
//
// RULES (same as always):
//   - Fill every // TODO: block.
//   - className only. No class.
//   - No innerHTML. No let blocks for pre-computation inside returns.
//   - Read. Every. Word. Of. The. Spec.
// ============================================================

const BATCH_STYLES = `
  .card {
    background: #0f0f0f;
    border: 1px solid #2a2a2a;
    border-radius: 8px;
    padding: 24px;
    max-width: 420px;
    font-family: 'Courier New', monospace;
    color: #e0e0e0;
  }
  .title {
    font-size: 1.1rem;
    font-weight: 700;
    color: #ffffff;
    margin: 0 0 6px 0;
  }
  .subtitle {
    font-size: 0.85rem;
    color: #888888;
    margin: 0 0 12px 0;
  }
  .label {
    font-size: 0.75rem;
    color: #aaaaaa;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 4px;
  }
  .tag {
    display: inline-block;
    background: #1a1a2e;
    color: #7b68ee;
    border: 1px solid #7b68ee;
    border-radius: 4px;
    padding: 2px 8px;
    font-size: 0.75rem;
    margin-right: 4px;
  }
  .tag-active {
    background: #7b68ee;
    color: #ffffff;
  }
  .badge {
    background: #1f3a1f;
    color: #4caf50;
    border-radius: 12px;
    padding: 4px 12px;
    font-size: 0.8rem;
    font-weight: 600;
  }
  .badge-warning {
    background: #3a2e00;
    color: #ffc107;
  }
  .badge-danger {
    background: #3a1f1f;
    color: #ef5350;
  }
  .badge-info {
    background: #1a2a3a;
    color: #42a5f5;
  }
  .list-item {
    padding: 8px 0;
    border-bottom: 1px solid #1e1e1e;
    font-size: 0.9rem;
    color: #cccccc;
  }
  .list-item:last-child {
    border-bottom: none;
  }
  .list-item-index {
    color: #555555;
    margin-right: 8px;
    font-size: 0.75rem;
    min-width: 20px;
    display: inline-block;
  }
  .list-item-id {
    color: #444444;
    font-size: 0.7rem;
    font-family: monospace;
  }
  .highlight {
    color: #ffd700;
    font-weight: 700;
  }
  .muted {
    color: #555555;
    font-size: 0.8rem;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  }
  .row-start {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .empty-state {
    text-align: center;
    color: #444444;
    padding: 32px 0;
    font-style: italic;
    font-size: 0.85rem;
  }
  .avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: #1e1e1e;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    flex-shrink: 0;
  }
  .status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    flex-shrink: 0;
  }
  .dot-green { background: #4caf50; }
  .dot-red   { background: #ef5350; }
  .dot-grey  { background: #555555; }
  .score-bar {
    height: 6px;
    border-radius: 3px;
    background: #1e1e1e;
    overflow: hidden;
    flex: 1;
  }
  .score-fill {
    height: 100%;
    background: #7b68ee;
    border-radius: 3px;
  }
  .score-fill-gold {
    height: 100%;
    background: #ffd700;
    border-radius: 3px;
  }
  .divider {
    height: 1px;
    background: #1e1e1e;
    margin: 8px 0;
  }
  .footer {
    font-size: 0.75rem;
    color: #555555;
    padding-top: 8px;
    border-top: 1px solid #1e1e1e;
    margin-top: 8px;
  }
  .pill {
    display: inline-block;
    border-radius: 999px;
    padding: 2px 10px;
    font-size: 0.75rem;
    font-weight: 600;
  }
  .pill-purple { background: #2a1f4a; color: #b39ddb; }
  .pill-green  { background: #1b3a1f; color: #81c784; }
  .pill-red    { background: #3a1f1f; color: #ef9a9a; }
  .pill-blue   { background: #1a2a3a; color: #90caf9; }
`;

// ============================================================
// ── SECTION A: CONDITIONAL LOGIC (15 DRILLS) ──────────────
// The crime: wrapping unconditional content inside conditions.
// The fix: Read what is ALWAYS rendered vs. what is SOMETIMES rendered.
// ============================================================

// DRILL A-01
// ALWAYS render: a div.card containing a p.title with text "Mission Control"
// ONLY IF `isLive` is true: also render a span.badge with text "LIVE"
// NEVER IF false: render nothing extra.
const isLive = true;
export function DrillA01() {
  // TODO:
}

// DRILL A-02
// ALWAYS render: a div.card containing a p.title with text "Agent Profile"
// ALWAYS render: a p.subtitle with text "Clearance: Level 5"
// ONLY IF `isBanned` is true: render a span.badge.badge-danger with text "BANNED"
// `isBanned` is false — the BANNED badge must not appear.
const isBanned = false;
export function DrillA02() {
  // TODO:
}

// DRILL A-03
// ALWAYS render: a div.card with a p.label "Connection Status:"
// ONLY IF `isConnected` is true: render a p.title "Connected"
// ONLY IF `isConnected` is false: render a p.title "Disconnected"
// (Both branches render a p.title — only the TEXT changes. Use ternary.)
const isConnected = false;
export function DrillA03() {
  // TODO:
}

// DRILL A-04
// ALWAYS render: a div.card with a p.title "Notifications"
// ALWAYS render: a p.subtitle "Inbox summary"
// ONLY IF `notifCount > 0`: render a span.badge with text showing notifCount
// ONLY IF `notifCount === 0`: render a span.muted with text "All clear"
// notifCount is 3.
const notifCount = 3;
export function DrillA04() {
  // TODO:
}

// DRILL A-05
// ALWAYS render: a div.card with a p.label "System Mode"
// Render a p.title whose TEXT depends on `isDarkMode`:
//   true  → "Dark Mode Active"
//   false → "Light Mode Active"
// ALWAYS render: a p.subtitle with text "Toggle in settings"
// ONLY IF `isDarkMode` is true: render a span.tag.tag-active with text "DARK"
// isDarkMode is true.
const isDarkMode = true;
export function DrillA05() {
  // TODO:
}

// DRILL A-06
// ALWAYS render: a div.card with a p.title "Sync Engine"
// ONLY IF `isSyncing` is true: render a p.subtitle "Syncing..."
// ONLY IF `lastSynced` is not null: render a p.muted showing "Last sync: [lastSynced]"
// Both conditions are independent — one doesn't depend on the other.
// isSyncing = false, lastSynced = "2 minutes ago"
const isSyncing = false;
const lastSynced = '2 minutes ago';
export function DrillA06() {
  // TODO:
}

// DRILL A-07
// ALWAYS render: a div.card with a p.label "Threat Level"
// Render a span.pill whose className AND text changes by `threatLevel`:
//   "LOW"    → className "pill pill-green",  text "● LOW"
//   "MEDIUM" → className "pill pill-blue",   text "● MEDIUM"
//   "HIGH"   → className "pill pill-red",    text "● HIGH"
//   default  → className "pill pill-purple", text "● UNKNOWN"
// ALWAYS render: a p.muted below the pill with text "Auto-assessed"
// threatLevel = "HIGH"
const threatLevel = 'HIGH';
export function DrillA07() {
  // TODO:
}

// DRILL A-08
// ALWAYS render: a div.card with a p.title "Data Stream"
// ONLY IF `hasError` is true: render a p.subtitle.badge-danger "Error detected"
// ONLY IF `hasError` is false AND `isReady` is true: render a p.subtitle "Ready"
// ONLY IF both are false: render a p.muted "Initializing..."
// hasError = false, isReady = true
const hasError = false;
const isReady = true;
export function DrillA08() {
  // TODO:
}

// DRILL A-09
// ALWAYS render: a div.card
// ALWAYS render inside it: a div.row containing:
//   • a p.title with text "Void Scanner"
//   • ONLY IF `isPremium` is true: a span.tag.tag-active with text "PRO"
// ALWAYS render below the row: a p.subtitle with text "Scanning range: Infinite"
// isPremium = true
const isPremium = true;
export function DrillA09() {
  // TODO:
}

// DRILL A-10
// ALWAYS render: a div.card with a p.title "Session"
// ALWAYS render: a p.subtitle with text "Current session details:"
// ONLY IF `sessionDuration > 60`: render a span.badge with text "Long session"
// ONLY IF `sessionDuration <= 60`: render a span.badge.badge-warning with text "Short session"
// ALWAYS render: a p.muted below the badge with text "Auto-expires in 30m"
// sessionDuration = 45
const sessionDuration = 45;
export function DrillA10() {
  // TODO:
}

// DRILL A-11
// ALWAYS render: a div.card with p.label "Account Tier"
// ALWAYS render: a div.row containing:
//   • a p.title with text "Subscription"
//   • a span.pill whose class and text depends on `tier`:
//       "free"    → "pill pill-purple" / "FREE"
//       "pro"     → "pill pill-blue"   / "PRO"
//       "elite"   → "pill pill-green"  / "ELITE"
// ONLY IF tier is NOT "free": render a p.subtitle "Premium features unlocked"
// tier = "pro"
const tier = 'pro';
export function DrillA11() {
  // TODO:
}

// DRILL A-12
// ALWAYS render: a div.card with a p.title "Upload Status"
// `uploadState` is one of: "idle" | "uploading" | "done" | "error"
// Render ONE p.subtitle whose text corresponds:
//   "idle"      → "Waiting for file..."
//   "uploading" → "Upload in progress..."
//   "done"      → "Upload complete."
//   "error"     → "Upload failed."
// ALWAYS render: a p.muted below with text "Max file size: 50MB"
// uploadState = "done"
const uploadState = 'done';
export function DrillA12() {
  // TODO:
}

// DRILL A-13
// ALWAYS render: a div.card with a p.title "Team Roster"
// ALWAYS render: a p.label with text "Members online:"
// ONLY IF `onlineCount > 0`: render a span.badge with text "[onlineCount] online"
// ONLY IF `onlineCount === 0`: render a span.muted with text "No one online"
// ALWAYS render: a div.divider after the conditional block
// ALWAYS render: a p.footer with text "Refresh every 60s"
// onlineCount = 0
const onlineCount = 0;
export function DrillA13() {
  // TODO:
}

// DRILL A-14
// ALWAYS render: a div.card with a p.title "Recon Report"
// `missionStatus` can be "active" | "complete" | "failed"
// ONLY IF "active":   render a span.badge.badge-warning "IN PROGRESS"
// ONLY IF "complete": render a span.badge "COMPLETE"
// ONLY IF "failed":   render a span.badge.badge-danger "FAILED"
// ALWAYS render after the badge: a p.subtitle with text "Filed by: Agent Zero"
// missionStatus = "active"
const missionStatus = 'active';
export function DrillA14() {
  // TODO:
}

// DRILL A-15 — THE ALWAYS/CONDITIONAL GAUNTLET
// This is the hardest read in this section. Parse it carefully.
// ALWAYS render: a div.card
// ALWAYS render: a p.title with text "Infinity Protocol"
// ONLY IF `phase >= 1`: render a p.label "Phase 1: Initializing"
// ONLY IF `phase >= 2`: render a p.label "Phase 2: Expanding"
// ONLY IF `phase >= 3`: render a p.label "Phase 3: Collapsing"
// ALWAYS render: a div.divider
// ONLY IF `phase === 3`: render a span.badge.badge-danger "CRITICAL — DOMAIN ACTIVE"
// ONLY IF `phase < 3`:   render a span.muted "Standby"
// ALWAYS render: a p.footer "Protocol initialized at startup"
// phase = 2
const phase = 2;
export function DrillA15() {
  // TODO:
}

// ============================================================
// ── SECTION B: KEY STRATEGY (15 DRILLS) ───────────────────
// The crime: defaulting to index keys without reading the spec.
// The fix: know what key to use and WHY. Stable IDs beat index.
// These drills will explicitly tell you WHICH key to use.
// Your job: follow instructions exactly and apply them correctly.
// ============================================================

// DRILL B-01
// Map over `planets`. Use `planet.id` as the key.
// Render a div.list-item for each. Show planet.name inside.
const planets = [
  { id: 'p1', name: 'Mercury' },
  { id: 'p2', name: 'Venus' },
  { id: 'p3', name: 'Earth' },
];
export function DrillB01() {
  return <div className="wrapper">{/* TODO: map with key={planet.id} */}</div>;
}

// DRILL B-02
// Map over `tokens`. Use `token.symbol` as the key (it's unique).
// Render a div.row for each. Show: span.label with symbol, span.highlight with price.
const tokens = [
  { symbol: 'BTC', price: 98000 },
  { symbol: 'ETH', price: 3800 },
  { symbol: 'SOL', price: 190 },
];
export function DrillB02() {
  return (
    <div className="wrapper">{/* TODO: map with key={token.symbol} */}</div>
  );
}

// DRILL B-03
// Map over `steps`. Use the array INDEX as key. (This drill is intentional —
// static ordered lists that never reorder are a valid use of index keys.)
// Render a div.row for each. Show: span.list-item-index with the index,
// span.list-item with the step text.
const steps = ['Clone repo', 'Install deps', 'Run dev server', 'Open browser'];
export function DrillB03() {
  return <div className="wrapper">{/* TODO: map with key={index} */}</div>;
}

// DRILL B-04
// Map over `alerts`. Use `alert.code` as the key.
// Each alert renders a div.card. Inside: p.title with alert.title,
// p.subtitle with alert.message.
const alerts = [
  { code: 'E001', title: 'Memory Overflow', message: 'Heap exceeded 90%' },
  { code: 'E002', title: 'Null Pointer', message: 'Reference missing' },
  { code: 'W001', title: 'Slow Query', message: 'Query took > 2s' },
];
export function DrillB04() {
  return <div className="wrapper">{/* TODO: map with key={alert.code} */}</div>;
}

// DRILL B-05
// Map over `achievements`. Use `ach.id` as key.
// Render a div.row for each. Show: span.avatar with ach.icon,
// span.title with ach.name, span.badge with ach.points + " pts".
const achievements = [
  { id: 'ach-1', icon: '🏆', name: 'First Blood', points: 100 },
  { id: 'ach-2', icon: '⚡', name: 'Speed Demon', points: 250 },
  { id: 'ach-3', icon: '🔥', name: 'On Fire', points: 500 },
];
export function DrillB05() {
  return <div className="wrapper">{/* TODO: map with key={ach.id} */}</div>;
}

// DRILL B-06
// Map over `commands`. Use `cmd.shortcut` as key (unique across all).
// Render a div.row. Show: span.tag with cmd.shortcut, span.label with cmd.action.
const commands = [
  { shortcut: '⌘K', action: 'Open command palette' },
  { shortcut: '⌘P', action: 'Quick file open' },
  { shortcut: '⌘⇧P', action: 'Show all commands' },
  { shortcut: '⌘B', action: 'Toggle sidebar' },
];
export function DrillB06() {
  return (
    <div className="wrapper">{/* TODO: map with key={cmd.shortcut} */}</div>
  );
}

// DRILL B-07
// Map over `users`. Use `user.uuid` as key.
// Render a div.row for each. Inside:
//   • div.avatar with user.avatar (emoji)
//   • div.wrapper (column) with p.title showing user.name and p.muted showing user.role
//   • span.pill whose className and text depends on user.status:
//       "active"   → "pill pill-green" / "ACTIVE"
//       "idle"     → "pill pill-blue"  / "IDLE"
//       "offline"  → "pill pill-red"   / "OFFLINE"
const users = [
  {
    uuid: 'u-001',
    avatar: '🧑',
    name: 'Gojo Satoru',
    role: 'Admin',
    status: 'active',
  },
  {
    uuid: 'u-002',
    avatar: '👹',
    name: 'Ryomen Sukuna',
    role: 'Villain',
    status: 'offline',
  },
  {
    uuid: 'u-003',
    avatar: '🧑‍🦯',
    name: 'Yuta Okkotsu',
    role: 'Agent',
    status: 'idle',
  },
];
export function DrillB07() {
  return <div className="wrapper">{/* TODO: map with key={user.uuid} */}</div>;
}

// DRILL B-08
// Map over `logs`. Use `log.timestamp` as key (unique per log entry).
// Render a div.list-item for each.
// Inside: span.list-item-id with log.timestamp, span.label with log.event.
// ONLY IF log.level === "error": also render a span.badge.badge-danger with text "ERR"
// ONLY IF log.level === "warn":  also render a span.badge.badge-warning with text "WARN"
// (These are inline conditionals INSIDE the map.)
const logs = [
  { timestamp: '10:01:05', event: 'Connection established', level: 'info' },
  { timestamp: '10:01:09', event: 'Auth token expired', level: 'warn' },
  { timestamp: '10:01:12', event: 'Null ref in handler', level: 'error' },
];
export function DrillB08() {
  return (
    <div className="wrapper">{/* TODO: map with key={log.timestamp} */}</div>
  );
}

// DRILL B-09
// Map over `channels`. Use `channel.id` as key.
// Render a Fragment (keyed) per channel. Inside each Fragment, two siblings:
//   1. A div.row with: span.tag "#" + channel.name, span.muted channel.memberCount + " members"
//   2. A div.divider
const channels = [
  { id: 'ch-1', name: 'general', memberCount: 142 },
  { id: 'ch-2', name: 'void-talk', memberCount: 37 },
  { id: 'ch-3', name: 'announcements', memberCount: 890 },
];
export function DrillB09() {
  return (
    <div className="wrapper">
      {/* TODO: Fragment map with key={channel.id} */}
    </div>
  );
}

// DRILL B-10
// Map over `skills`. Use `skill.slug` as key.
// Render a div.row for each. Inside:
//   • span.label with skill.name
//   • div.score-bar with div.score-fill (inline style width: skill.level + "%")
//   • span.highlight with skill.level + "%"
const skills = [
  { slug: 'jsx', name: 'JSX', level: 72 },
  { slug: 'state', name: 'useState', level: 55 },
  { slug: 'effect', name: 'useEffect', level: 40 },
  { slug: 'arch', name: 'Architecture', level: 30 },
];
export function DrillB10() {
  return <div className="wrapper">{/* TODO: map with key={skill.slug} */}</div>;
}

// DRILL B-11
// Map over `events`. The data has NO unique id — use the INDEX as key.
// (This is intentional — sometimes you have no stable id. Know when that's acceptable.)
// Render a div.list-item per event. Inside: span.list-item-index with the index,
// span.label with event.name, span.muted with event.date.
const events = [
  { name: 'Void Opens', date: '2025-01-01' },
  { name: 'Module 1 Begins', date: '2025-01-02' },
  { name: 'First Drill', date: '2025-01-03' },
];
export function DrillB11() {
  return (
    <div className="wrapper">
      {/* TODO: map with key={index} — this is the correct call here */}
    </div>
  );
}

// DRILL B-12
// Map over `files`. Use `file.path` as key (unique, stable, no id field).
// Render a div.row for each. Show: span.tag with file.ext, span.label with file.path.
const files = [
  { path: '/src/App.jsx', ext: '.jsx' },
  { path: '/src/index.css', ext: '.css' },
  { path: '/public/index.html', ext: '.html' },
];
export function DrillB12() {
  return <div className="wrapper">{/* TODO: map with key={file.path} */}</div>;
}

// DRILL B-13
// Map over `badges` and render each as a span.pill.
// Use `badge.id` as key.
// The pill className is always "pill " + badge.color (e.g. "pill pill-green").
// The pill text is badge.label.
const badges = [
  { id: 'b1', label: 'VERIFIED', color: 'pill-green' },
  { id: 'b2', label: 'PENDING', color: 'pill-blue' },
  { id: 'b3', label: 'FLAGGED', color: 'pill-red' },
];
export function DrillB13() {
  return <div className="row">{/* TODO: map with key={badge.id} */}</div>;
}

// DRILL B-14
// Map over `nodes`. Use `node.id` as key. Render a div.card for each.
// Inside: p.title with node.label, p.muted with "Node ID: " + node.id.
// ONLY IF node.active is true: render a div.status-dot.dot-green
// ONLY IF node.active is false: render a div.status-dot.dot-red
// The dot renders INSIDE the card, below the muted text.
const nodes = [
  { id: 'node-alpha', label: 'Alpha Node', active: true },
  { id: 'node-beta', label: 'Beta Node', active: false },
  { id: 'node-gamma', label: 'Gamma Node', active: true },
];
export function DrillB14() {
  return <div className="wrapper">{/* TODO: map with key={node.id} */}</div>;
}

// DRILL B-15 — KEY GAUNTLET
// Two nested maps. Both need correct keys.
// Map over `teams`. Each team has an array of `members`.
// Outer map key: team.id
// Inner map key: member.id
// Structure per team:
//   div.card
//     p.title → team.name
//     div.wrapper (inner list)
//       div.list-item per member → member.name
const teams = [
  {
    id: 'team-1',
    name: 'Alpha Squad',
    members: [
      { id: 'm-1', name: 'Gojo' },
      { id: 'm-2', name: 'Nanami' },
    ],
  },
  {
    id: 'team-2',
    name: 'Shadow Unit',
    members: [
      { id: 'm-3', name: 'Sukuna' },
      { id: 'm-4', name: 'Mahito' },
    ],
  },
];
export function DrillB15() {
  return (
    <div className="wrapper">
      {/* TODO: outer map key={team.id}, inner map key={member.id} */}
    </div>
  );
}

// ============================================================
// ── SECTION C: MAP RENDERING PRECISION (10 DRILLS) ────────
// The crime: wrong className, empty nodes, values not rendered.
// The fix: every node has the right class AND renders visible content.
// ============================================================

// DRILL C-01
// Map over `ranks`. For each, render a div.row with key={rank.id}.
// Inside: span.list-item-index showing rank.position (a number),
//         span.title showing rank.agentName,
//         span.badge showing rank.score.
// All three must be visible. No empty spans.
const ranks = [
  { id: 'r1', position: 1, agentName: 'Gojo', score: 9999 },
  { id: 'r2', position: 2, agentName: 'Sukuna', score: 9850 },
  { id: 'r3', position: 3, agentName: 'Yuta', score: 8700 },
];
export function DrillC01() {
  return <div className="wrapper">{/* TODO */}</div>;
}

// DRILL C-02
// Map over `packages`. For each, render a div.list-item with key={pkg.name}.
// Inside: span.tag with pkg.name, span.muted with "v" + pkg.version.
// ONLY IF pkg.deprecated is true: also render span.badge.badge-danger "DEPRECATED"
const packages = [
  { name: 'react', version: '18.3.0', deprecated: false },
  { name: 'moment', version: '2.29.4', deprecated: true },
  { name: 'lodash', version: '4.17.21', deprecated: false },
];
export function DrillC02() {
  return <div className="wrapper">{/* TODO */}</div>;
}

// DRILL C-03
// Map over `metrics`. For each, render a div.row with key={metric.id}.
// Inside: span.label with metric.label,
//         div.score-bar → div.score-fill with style width=metric.value+"%",
//         span.highlight with metric.value+"%".
// The fill uses score-fill for values >= 50, score-fill-gold for values < 50.
// Determine the className of score-fill dynamically per item.
const metrics = [
  { id: 'm1', label: 'CPU', value: 78 },
  { id: 'm2', label: 'RAM', value: 45 },
  { id: 'm3', label: 'Disk', value: 91 },
  { id: 'm4', label: 'Net', value: 32 },
];
export function DrillC03() {
  return <div className="wrapper">{/* TODO */}</div>;
}

// DRILL C-04
// Map over `items`. Render NOTHING for items where item.hidden is true.
// For visible items, render a div.list-item with key={item.id} and item.name.
// Use a filter before the map. Chain: items.filter(...).map(...)
const items = [
  { id: 'i1', name: 'Void Core', hidden: false },
  { id: 'i2', name: 'Shadow Relay', hidden: true },
  { id: 'i3', name: 'Infinity Gate', hidden: false },
  { id: 'i4', name: 'Curse Engine', hidden: true },
];
export function DrillC04() {
  return <div className="wrapper">{/* TODO: filter then map */}</div>;
}

// DRILL C-05
// Map over `messages`. For each, render a div.list-item with key={msg.id}.
// Inside: span.list-item-index with the map INDEX (not msg.id),
//         span.label with msg.sender,
//         span.muted with msg.preview.
// All three must show content.
const messages = [
  { id: 'msg-1', sender: 'Gojo', preview: "Oi Megumi, let's go." },
  { id: 'msg-2', sender: 'Sukuna', preview: "You're in my domain now." },
  { id: 'msg-3', sender: 'Yuta', preview: 'Rika, show them.' },
];
export function DrillC05() {
  return <div className="wrapper">{/* TODO */}</div>;
}

// DRILL C-06
// Map over `categories`. For each, render a Fragment with key={cat.id}.
// Inside each Fragment, render TWO siblings:
//   1. p.label with cat.name
//   2. div.wrapper containing a map of cat.items,
//      each rendered as span.tag with key={item} and text=item.
const categories = [
  { id: 'cat-1', name: 'Frontend', items: ['React', 'CSS', 'JSX'] },
  { id: 'cat-2', name: 'Backend', items: ['Node', 'Express', 'SQL'] },
];
export function DrillC06() {
  return (
    <div className="wrapper">
      {/* TODO: outer Fragment map, inner span.tag map */}
    </div>
  );
}

// DRILL C-07
// Map over `transactions`. For each, render a div.row with key={tx.id}.
// Inside: span.label with tx.description,
//         span.highlight with (tx.type === "credit" ? "+" : "-") + tx.amount
// The +/- sign must be part of the rendered text, not just the number.
const transactions = [
  { id: 'tx-1', description: 'Mission payout', type: 'credit', amount: 5000 },
  { id: 'tx-2', description: 'Equipment fee', type: 'debit', amount: 800 },
  { id: 'tx-3', description: 'Bonus', type: 'credit', amount: 1200 },
];
export function DrillC07() {
  return <div className="wrapper">{/* TODO */}</div>;
}

// DRILL C-08
// Map over `servers`. For each, render a div.row with key={server.id}.
// Inside:
//   • div.status-dot whose className is "status-dot " + (server.up ? "dot-green" : "dot-red")
//   • span.label with server.name
//   • span.muted with server.region
//   • span.badge.badge-info with server.latency + "ms"
const servers = [
  { id: 'sv-1', name: 'US East', region: 'us-east-1', up: true, latency: 12 },
  { id: 'sv-2', name: 'EU West', region: 'eu-west-2', up: true, latency: 38 },
  {
    id: 'sv-3',
    name: 'AP South',
    region: 'ap-south-1',
    up: false,
    latency: 999,
  },
];
export function DrillC08() {
  return <div className="wrapper">{/* TODO */}</div>;
}

// DRILL C-09
// Map over `rules`. For each render a div.list-item with key={rule.id}.
// Inside: span.list-item-index with rule.priority (number),
//         span.label with rule.description,
//         span.pill whose class = "pill " + rule.color and text = rule.action.
const rules = [
  {
    id: 'rule-1',
    priority: 1,
    description: 'Block unknown IPs',
    action: 'BLOCK',
    color: 'pill-red',
  },
  {
    id: 'rule-2',
    priority: 2,
    description: 'Allow internal range',
    action: 'ALLOW',
    color: 'pill-green',
  },
  {
    id: 'rule-3',
    priority: 3,
    description: 'Rate-limit public API',
    action: 'LIMIT',
    color: 'pill-blue',
  },
];
export function DrillC09() {
  return <div className="wrapper">{/* TODO */}</div>;
}

// DRILL C-10 — PRECISION GAUNTLET
// Map over `agents`. For each, render a Fragment with key={agent.id}.
// Inside each Fragment, THREE siblings:
//   1. div.row containing:
//        • div.avatar with agent.emoji
//        • span.title with agent.name
//        • span.pill: class = "pill " + (agent.rank === "S" ? "pill-green" : agent.rank === "A" ? "pill-blue" : "pill-red")
//                     text = agent.rank + "-CLASS"
//   2. div.list-item with "Domain: " + agent.domain
//   3. div.divider
// BELOW the entire map, ONLY IF the agents array has items:
//   render a p.footer with text "Total agents: " + agents2.length
// ONLY IF agents2 is empty: render p.empty-state "No agents registered."
const agents2 = [
  {
    id: 'ag-1',
    emoji: '🔵',
    name: 'Gojo Satoru',
    rank: 'S',
    domain: 'Infinite Void',
  },
  {
    id: 'ag-2',
    emoji: '🔴',
    name: 'Ryomen Sukuna',
    rank: 'S',
    domain: 'Malevolent Shrine',
  },
  {
    id: 'ag-3',
    emoji: '⚪',
    name: 'Yuta Okkotsu',
    rank: 'A',
    domain: "Rika's Wrath",
  },
];
export function DrillC10() {
  return (
    <div className="wrapper">
      {/* TODO: Fragment map + conditional footer below */}
    </div>
  );
}
