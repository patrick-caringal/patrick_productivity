# Handover

## What this is
A Jira-style task manager as a phone web app (PWA). Pomodoro is an extra feature on each item. One file, no build, no backend, no dependencies. Built for iPhone 14 / Samsung A56; the user is trying Android first.

Live URL (once Pages is on): https://patrick-caringal.github.io/patrick_productivity/

## Files
- `index.html`: the whole app (HTML, CSS, JS).
- `manifest.webmanifest`, `icon.png`: make it installable (Add to Home Screen).
- `README.md`: features, run, deploy, limits.

## Features
- **Items:** epic / task / bug / improvement / subtask. Fields: key (`PAT-n`, one global counter `seq`, never reused; `fixItems()` renames older `PP-n` keys to `PAT-n`, adds missing keys, and turns a task that has a `parent` into a subtask, on load and on import), title, description, status (todo/doing/done), priority, start, due, type, epic, parent (subtasks only, one level deep; a subtask takes its parent's epic via `epicId()`).
- **Drag to schedule:** in Gantt, the Unscheduled list has a grip (⠿) per item; drag it onto the chart to set start = due = that day. Pointer events, so it works on touch. Items saved before keys existed get keys on load (`ensureKeys`).
- **Shell:** Linear-style look (neutral tokens in `:root`, indigo accent, light/dark via `prefers-color-scheme`), bottom tab bar, floating + that opens a bottom sheet (`sheetHtml`, `adding`, `newType`), timer pill above the tab bar, item screen with a back/Delete header.
- **Views:** List (defaults to Open; epics are collapsible sections with progress, fold state in `localStorage` key `collapsed`; tap the status circle to cycle status; the `n/m` subtask count on a task is a fold toggle: in the list it hides subtasks via task ids in `collapsed`, on an epic screen subtasks are hidden until expanded via the in-memory `peek` set), Board (3 columns, arrow buttons to move), Timeline (the Gantt), Time (pomodoro stats + Data).
- **Gantt:** bars from start/due; epic without dates spans its children. Drag a bar to move, drag an edge to resize, tap to open; snaps to days. Unscheduled items listed below.
- **Search:** `view = 'search'` (header magnifier on the four main views; `searchHtml()`, `norm()` strips accents). Typing only redraws `#main` via `document.oninput`, so the field keeps focus. `home` remembers the last main view so Back from search returns there; opening an item from a result sets `prev = 'search'`, so Back returns to the same query.
- **Pomodoro:** 25/5 timer per item, end-timestamp based so it survives backgrounding. Finished focus sessions are logged to the item.
- **Data:** Export downloads `tasks-<date>.json`; Import replaces the device's data after confirm.

## How it works
- State in `localStorage`: `items`, `sessions`, `pomodoro-state`. Sessions store only the item id; epic and type are looked up through the item.
- Rendering: each view is a function returning an HTML string; `render()` swaps `#main` and redraws the header, tab bar, pill and sheet (the sheet is only built when it opens, so typing is not wiped). Clicks are delegated through `data-act` on `document.onclick`; field edits through `data-f` on `document.onchange`.
- Gantt dragging uses pointer events (`document.onpointerdown/move/up`) and `data-bar` on bars.
- Self-check: open the page with `?test` and see the console (`ok` = asserts passed).

## Status of the work
- The working branch is `main`. Last commit `c532b84` (Add JSON export and import); subtasks, keys, drag-to-schedule, the redesign (bottom nav, sheet, new List) and PAT keys are uncommitted.
- The user's `git push origin main` was waiting at a username prompt (needs a GitHub token, no `gh` installed). Not confirmed pushed.
- The repo was renamed to `patrick_productivity`; local `origin` may still point at the old name (`git remote set-url origin https://github.com/patrick-caringal/patrick_productivity.git`).
- GitHub Pages: not confirmed enabled. Needs Settings, Pages, Deploy from branch `main` / root. Free only for a public repo.

## Not verified
- Nothing tested on a real phone: touch dragging on the Gantt, the Export download and Import picker on Android, the timer after a screen lock.
- The pushed site and its URL.

## Known limits and decisions
- Data is per device, no sync. The user plans to export JSON and move it to their own cloud by hand, so no repo-based sync.
- No push notifications, so the timer can't ring while the phone is locked. No service worker or offline mode.
- Import replaces rather than merges, so edits on two phones can be overwritten.
- Dragging an epic's bar gives it its own dates; its children don't move with it.
- Dragging in the Gantt blocks scrolling on a bar; swipe the background or date header to scroll.
- A very far-off date (such as the year 2000) makes the Gantt very wide.
- Skipped on purpose: dependencies, comments, assignees, sprints, search, custom pomodoro lengths, edit/delete of sessions.

## Likely next steps
1. Push `main` and enable Pages, then test on the Samsung (instructions are in `README.md`).
2. Fix whatever the phone test shows (Gantt touch, layout, export/import).
3. Possible additions: Gantt dependencies or zoom, merging import, a service worker for offline, custom timer length.

## Preferences from this session
- The user wants it as simple and cheap as possible and builds step by step.
- Commit or push only when asked.
- Reply style: plain and short.
