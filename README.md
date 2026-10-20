# Tasks

A simple Jira-style task manager that runs as a web app (PWA) on phone and desktop. One HTML file, no build, no backend, free to host. Light and dark mode follow the device.

## Features
- **Items:** Epic, Task, Bug, Improvement, Subtask, each with a Jira-style key (`PAT-12`), status, priority, start/due dates, description, and an epic (or, for a subtask, a parent task).
- **Items list:** opens on Open items grouped by epic (collapsible, with progress). Filter Open / In progress / Done / All. Sorted in progress first, then by due date, then priority, with done last. An overdue / due today banner filters the list when tapped. An epic counts as done when it is marked done or all its tasks are done. A + on each epic header adds a task to it; tap the status circle on a row to cycle the status.
- **Subtasks:** indented under their task with a guide line; the `0/3` count on a task folds and unfolds them. The epic screen shows tasks only until you expand one.
- **Board:** To do / In progress / Done columns of tasks, a status filter, an epic filter, and a Done column that starts folded on the full board. On wide screens the three columns sit side by side.
- **Timeline (Gantt):** filter by status and by epic. Titles stay in a fixed column while the chart scrolls, with week numbers in the header. Drag a bar to move it, drag an edge to resize, tap to open. Drag an unscheduled item's grip (⠿) onto the chart to schedule it on that day.
- **Activity log:** every status change is recorded with the time; add a note to any entry from the item screen.
- **Search:** the magnifier at the top right searches every item by title, description, epic and full key (`PAT-8`), ignoring accents and case.
- **Pomodoro:** a timer on every item, with focus and break length set on the Time tab, plus focus time by epic, type and item.
- **Offline:** a service worker caches the app (network first, so updates show up as soon as you are online).
- **Desktop:** from 820px wide the tab bar becomes a top bar and the add sheet a centred dialog. Enter adds, Esc closes.

## Run locally
```
python3 -m http.server 8000
```
Open http://localhost:8000. Add `?test` to the URL to run the built-in self-checks (see the browser console; `ok` means they passed).

## Deploy (GitHub Pages)
1. Push to `main`.
2. Repo Settings, Pages, Deploy from a branch, `main` / root.
3. Open the Pages URL. iPhone: Safari, Share, Add to Home Screen. Android: Chrome, menu, Install app.

## Files
- `index.html`: the whole app (HTML, CSS, JS).
- `sw.js`: offline cache.
- `manifest.webmanifest`, `icon.png`, `icon-512.png`: make it installable.

## Good to know
- Data is stored in each device's browser (`localStorage`). To back up or sync, use Time tab, Data: Export saves a `.json` file. Moving the file between devices is up to you. The Time tab warns when your last backup is a week old.
- Import asks **Merge** or **Replace**. Merge adds new items; for an item on both devices the most recently edited copy wins, activity logs are combined, focus sessions are deduplicated, and your own item keys never change (a key another device handed out twice is renumbered). Merge never deletes: an item you deleted on one device comes back if the other still has it. Replace overwrites the device with the file.
- Older exports import cleanly: old `PP-` keys become `PAT-`, items without a key get one, and a task with a parent becomes a subtask.
- Deleting an item makes its subtasks and tasks loose rather than deleting them.
- Install it to the home screen so iOS doesn't clear the data after a week of non-use.
- The timer can't ring while the phone is locked (no push notifications).
- After an update, the offline cache may show the old version once; reopen the app or clear site data.
- On the Timeline, swipe the background or date header to scroll sideways, since a bar captures touch to drag.
