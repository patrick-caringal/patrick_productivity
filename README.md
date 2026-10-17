# Tasks

A simple Jira-style task manager that runs as a web app (PWA) on phone and desktop. One HTML file, no build, no backend, free to host. Blue, iOS-style design with light and dark mode.

## Features
- **Items:** Epic, Task, Bug, Improvement, each with status, priority, start/due dates, description and an epic.
- **Subtasks:** any task can have a parent task (pick it in the Parent field, or add subtasks from the parent). One level deep. A subtask is a full task with its own status, dates, notes and timer.
- **Links:** Jira-style Blocks, Blocked by and Relates to. A task shows "blocked" in the list until its blockers are done.
- **List:** items grouped under epics, sorted doing, then due date, then priority, with done last. Search, filter (All, Open, Todo, Doing, Done) and an overdue / due today banner. Epics show progress; epics and parents expand and collapse.
- **Board:** Todo / Doing / Done columns, move cards with the buttons.
- **Gantt:** timeline with week numbers and a fixed title column. Drag a bar to move it, drag an edge to resize, tap to open. Drag across empty days on the bottom row to add a task. Filter by epic. Follows the List's expand/collapse.
- **Activity log:** every status change is recorded with the time and an optional note. Changing a status asks for confirmation first.
- **Pomodoro:** a timer on every item with adjustable focus and break length, plus a Time tab with focus time by epic, type and item.
- **Settings:** light / dark / system theme and timer lengths (Time tab).
- **Desktop:** wider layout with a top navigation bar, a 3-column board and hover states. Enter adds, Esc cancels.

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
- `sw.js`: offline cache. Network first, so updates show up as soon as you are online.
- `manifest.webmanifest`, `icon.png`, `icon-512.png`: make it installable.

## Good to know
- Data is stored in each device's browser (`localStorage`). To back up or sync, use Time tab, Data: Export saves a `.json` file. Moving the file between devices is up to you. The Time tab warns when your last backup is a week old.
- Import asks **Merge** or **Replace**. Merge adds new items; for an item on both devices the most recently edited copy wins, activity logs are combined and focus sessions are deduplicated. Replace overwrites the device with the file.
- Merge never deletes: an item you deleted on one device comes back if the other device still has it. Settings are not merged. Items edited before merge support existed have no timestamp, so on those the device you import into wins.
- Install it to the home screen so iOS doesn't clear the data after a week of non-use.
- The timer can't ring while the phone is locked (no push notifications).
- After an update, the offline cache may show the old version once; reopen the app or clear site data.
- Deleting an item also deletes its subtasks.
- On the Gantt, swipe the background or date header to scroll sideways, since a bar captures touch to drag.
