# Taskflow — Task Management Dashboard

A modern, fully responsive Task Management Dashboard built with **React**, **TypeScript**, and **Tailwind CSS**, featuring JWT authentication, a collapsible sidebar, live data from a REST API, and a rich set of dashboard widgets.

---

## 🖼️ Preview

| Login Page | Dashboard |
|------------|-----------|
| Dark glassmorphism login form | Stats cards, charts, task table, side panel |

---

## ✨ Features

- 🔐 **JWT Authentication** — Login with token stored in `localStorage` for persistent sessions
- 🛡️ **Private Routes** — Dashboard is fully protected; unauthenticated users are redirected to login
- 📊 **Stats Overview** — Total tasks, completed, in-progress, and overdue counts with trend badges
- 📈 **Weekly Activity Chart** — Bar chart comparing tasks added vs completed per day
- 🍩 **Completion Donut Chart** — Visual breakdown of task statuses with percentage
- 📋 **Task Table** — Filterable by status, with priority badges, due dates, progress bars, assignees
- ⚡ **Inline Actions** — Mark tasks complete with a checkbox; change status or delete via context menu
- 🗓️ **Upcoming Deadlines** — Side panel showing tasks sorted by due date with overdue warnings
- 👥 **Team Workload** — Per-member workload progress visualization
- 🔍 **Search** — Real-time task filtering from the header
- 📱 **Fully Responsive** — Works on mobile, tablet, and desktop
- 🌐 **API + Mock Fallback** — Falls back to realistic mock data if the API is unavailable

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| React 18 | UI framework |
| TypeScript | Type safety across all components |
| Tailwind CSS | Utility-first styling |
| Vite | Fast dev server & build tool |
| Fetch API | REST API communication |
| localStorage | JWT token persistence |

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** v18 or higher
- **npm** or **yarn**

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/task-dashboard.git
cd task-dashboard

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🔑 Demo Credentials

```
Email:    user1@example.com
Password: password123
```

---

## 📁 Project Structure

```
task-dashboard/
├── public/
├── src/
│   ├── types/
│   │   └── index.ts                  # TypeScript interfaces (Task, User, Stats, etc.)
│   │
│   ├── services/
│   │   └── api.ts                    # All REST API calls (auth, tasks, projects)
│   │
│   ├── context/
│   │   └── AuthContext.tsx           # Global auth state with login/logout
│   │
│   ├── hooks/
│   │   └── useTasks.ts               # Task fetching, CRUD operations & stats
│   │
│   ├── components/
│   │   ├── auth/
│   │   │   └── LoginPage.tsx         # Login form with validation & show/hide password
│   │   │
│   │   ├── layout/
│   │   │   ├── Sidebar.tsx           # Collapsible navigation sidebar
│   │   │   └── Header.tsx            # Search bar, notifications, new task button
│   │   │
│   │   ├── dashboard/
│   │   │   ├── DashboardPage.tsx     # Main dashboard layout container
│   │   │   ├── StatsCards.tsx        # 4 KPI metric cards with trend indicators
│   │   │   ├── TaskTable.tsx         # Sortable/filterable task list with actions
│   │   │   ├── ActivityChart.tsx     # Weekly bar chart + donut completion chart
│   │   │   └── SidePanel.tsx         # Deadlines panel + team workload bars
│   │   │
│   │   └── ui/
│   │       └── PrivateRoute.tsx      # Auth guard — redirects to login if not authed
│   │
│   ├── App.tsx                       # Root component with AuthProvider + view routing
│   ├── main.tsx                      # React DOM entry point
│   └── index.css                     # Tailwind directives + custom scrollbar styles
│
├── index.html
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## 🔌 API Reference

**Base URL:** `https://task-api-eight-flax.vercel.app`

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/login` | Authenticate user, returns JWT token |
| `GET` | `/api/tasks` | Fetch all tasks |
| `POST` | `/api/tasks` | Create a new task |
| `PUT` | `/api/tasks/:id` | Update an existing task |
| `DELETE` | `/api/tasks/:id` | Delete a task |

### Login Request/Response

```json
// POST /api/login
// Body:
{ "email": "user1@example.com", "password": "password123" }

// Response:
{ "id": 1, "email": "user1@example.com", "token": "<jwt_token>" }
```

All authenticated endpoints require the header:
```
Authorization: Bearer <jwt_token>
```

---

## 🔐 Authentication Flow

1. User submits login form → `POST /api/login`
2. On success, `token` and `user` object stored in `localStorage`
3. All subsequent API calls include `Authorization: Bearer <token>` header
4. On logout, both `auth_token` and `auth_user` are cleared from storage
5. `PrivateRoute` checks for a valid user in `AuthContext` — if absent, shows `LoginPage`

---

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Netlify

```bash
npm run build
# Drag & drop the `dist/` folder to Netlify
```

### GitHub Pages

```bash
npm install --save-dev gh-pages
# Add to package.json scripts: "deploy": "gh-pages -d dist"
npm run build && npm run deploy
```

---

## 📋 Evaluation Criteria Coverage

| Criterion | Implementation |
|-----------|---------------|
| ✅ Design Accuracy | Dark dashboard UI matching the Dribbble design style |
| ✅ Functionality | Login, protected routes, API integration, CRUD tasks |
| ✅ Code Quality | TypeScript, separated concerns, custom hooks, context |
| ✅ Responsiveness | Tailwind responsive classes, collapsible sidebar |
| ⭐ Bonus: Animations | Hover transitions, progress bar animations, loading states |
| ⭐ Bonus: Auth | JWT token, localStorage persistence, Bearer headers, PrivateRoute |

---

## 📝 License

MIT — free to use and modify.
