# todo-list

# restaurant-page
A modular Todo List web app built with **vanilla JavaScript** and bundled using **Webpack**.  
The application manages projects and tasks with local persistence and dynamic DOM rendering.

## Live Demo
[View on GitHub Pages](https://sai-eshwar-supreet.github.io/todo-list/)

## Overview
Core capabilities:
- Multiple projects
- Project-scoped tasks
- Task editing and deletion
- Persistent storage via localStorage

Only a minimal HTML shell is present at load time.  
All dynamic content is rendered via JavaScript.

## Implementation Details
### Data Modeling
- Tasks and Projects implemented as classes
- Unique IDs generated using `crypto.randomUUID`
- Explicit serialization/deserialization layer for persistence

### State Management
- Centralized application state object
- Controllers coordinate mutations and rendering
- Full re-render on state change

### Persistence
- Entire app state stored as a JSON snapshot in localStorage
- Safe loading with fallback seed data

### Rendering
- DOM nodes created via reusable factory helpers
- UI built from object blueprints
- Sections re-rendered based on selected project/task

### Task Features
- Title
- Notes
- Due date
- Priority (P0–P4)
- Status (S0–S4)
- Automatic sorting by due date

## Technologies Used
- JavaScript
- Webpack
- date-fns
- HTML
- CSS

## Usage

### Setup
```bash
git clone https://github.com/Sai-Eshwar-Supreet/todo-list.git
cd todo-list
npm install
```

### Development
```bash
npm run dev
```
Open: http://localhost:8080

### Production Build
```bash
npm run build
```

### Deployment
```bash
npm run deploy
```
Deploys the /dist folder to GitHub Pages via subtree.

## Acknowledgements
- This project was completed as part of **[The Odin Project – JavaScript Course](https://www.theodinproject.com/)**