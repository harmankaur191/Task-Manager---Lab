# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

## Reflection:

### Unique key
Each listItem has a unqiue id which is set as a key for each item

### Considerations for filtering functionality
Few considerations that were made are:
1. When the app first loads, the no filters are selected keeping filter empty.
2. Implementing and using separate useState for filters triggered onChange of filters to avoid synchronous issues.
3. Filtering by both status and priority are chained sequentially and returning false immediately to get the tasks filtered through both.

### State updates for task status changes
. The spread operator is used with newStatus to create a new task object instead of modifying the old object directly.
. map() method loops through every task to match id of the task being changed ensuring correct task is updated.

### Challenges
1. Understanding and rendering the components was quite challenging as I first tried creating objects in TaskList which did not work well so I had to do it in App() and passing the props to the components.
2. Implementing filters was a good challenge as I used different useState for filters and rendering the taskList took a while. 