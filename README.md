# Tasks

A simple Jira-style task manager that runs as a phone web app (PWA). One file, no build, no backend, free to host.

## Features
- **Items:** Epic, Task, Bug, Improvement, Subtask, each with a Jira-style key (`PAT-12`), status, priority, start/due dates, description, and an epic (or, for subtasks, a parent task).
- **Layout:** bottom tab bar (Items, Board, Timeline, Time), a floating + button that opens an add sheet, light and dark mode follow the phone.
- **List:** opens on Open items grouped by epic, each epic collapsible with a progress bar. Filter Open / In progress / Done / All. An epic counts as done when it is marked done or all its tasks are done, so it leaves Open and shows under Done. Tap the status circle on a row to cycle To do / In progress / Done. Overdue dates in red. Subtasks are indented under their task with a guide line; tap the `0/3` count on a task to fold or unfold them (the epic screen shows tasks only until you expand one). A + on each epic header adds a task to that epic; the epic screen also has a quick "New task" box.
- **Board:** To do / In progress / Done columns of tasks (subtasks show as a `0/3` count on their task), a status filter (Open / In progress / Done / All, which hides the other columns and gives a single column the full width), an epic filter, and a Done column that starts folded to a count on the full board. Move cards with the arrow buttons.
- **Timeline (Gantt):** filter by status (Open / In progress / Done / All, its own setting, default Open) and by epic; wide bars carry their label pinned to the left edge. Timeline of items with dates. Drag a bar to move it, drag an edge to change start/due, tap to open. Drag an unscheduled item's grip (⠿) onto the chart to schedule it on that day.
- **Search:** the magnifier at the top right of Items, Board, Timeline and Time opens a search over every item, whatever its status. It matches titles, descriptions and epic names, ignores accents and case, needs every word to match, and finds an item by its full key (`PAT-8`). Results show the epic under each title.
- **Pomodoro:** a 25/5 timer on every item, plus a Time tab with focus time by epic, type and item.

## Run locally
```
python3 -m http.server 8000
```
Open http://localhost:8000. Add `?test` to the URL to run the built-in self-checks (see the browser console).

## Deploy (GitHub Pages)
1. Push to `main`.
2. Repo Settings, Pages, Deploy from a branch, `main` / root.
3. Open the Pages URL on your phone. iPhone: Safari, Share, Add to Home Screen. Android: Chrome, menu, Install app.

## Good to know
- Data is stored in each device's browser (`localStorage`). To sync or back up, use Time tab, Data: Export saves a `.json` file, Import replaces the device's data with one. Moving the file between phones is up to you.
- Install it to the home screen so iOS doesn't clear the data after a week of non-use.
- The timer can't ring while the phone is locked (no push notifications).
- On the Gantt, swipe the background or date header to scroll sideways, since a bar captures touch to drag.
