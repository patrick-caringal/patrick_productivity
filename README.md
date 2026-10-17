# Tasks

A simple Jira-style task manager that runs as a phone web app (PWA). One file, no build, no backend, free to host.

## Features
- **Items:** Epic, Task, Bug, Improvement, each with status, priority, start/due dates, description, and an epic parent.
- **List:** items grouped under epics, filter by status, overdue items in red.
- **Board:** To do / Doing / Done columns, move cards with the arrow buttons.
- **Gantt:** timeline of items with dates. Drag a bar to move it, drag an edge to change start/due, tap to open.
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
