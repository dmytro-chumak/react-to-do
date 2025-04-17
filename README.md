# React Todo App

A clean, minimalist todo application built with React and Next.js that helps you organize your daily tasks efficiently.

![Todo App Screenshot](/public/images/intro.png)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Future Improvements](#future-improvements)

## Introduction

This project is a modern, responsive Todo application that helps users manage their tasks with different views and organization options. The app includes features like task categorization (Today, Important, Planned), search functionality, and task date management.

The primary goal of this project was to implement and validate my React knowledge in a practical setting. It served as a hands-on exercise to solidify my understanding of React concepts, state management, and component architecture while building something useful.

## Features

- Different task views:
  - Today's tasks
  - Important tasks
  - Planned tasks with dates
  - All tasks
- Task searching
- Mark tasks as important
- Add due dates to tasks
- Task completion tracking
- Responsive design with dark theme

## Technologies

Project is created with:

- React 19.0.0
- Next.js 15.1.6
- React DatePicker 8.0.0
- Context API for state management

## Installation

```text
# Clone the repository
git clone https://github.com/dmytro-chumak/react-to-do.git

# Navigate to project directory
cd react-to-do

# Install dependencies
npm install

# Build the application
npm run build

# Start development server
npm run start
```

The application will be available at `http://localhost:3000`

## Usage

### Adding Tasks

Type your task in the input field at the bottom of the screen and press Enter.

**Quick Commands:**

- Add `!` in your task text to mark it as important
- Add a date in format `DD.MM.YYYY` in your task text to set a due date
- Use the Calendar button to select dates

### Managing Tasks

- Click the circle button to mark a task as complete
- Click the exclamation mark button to toggle task importance
- Use the sidebar to navigate between different views

## Project Structure

```text
src/
├── app/                    # Next.js pages
├── components/             # Reusable UI components
│   ├── add-todo/           # Task creation component
│   ├── calendar/           # Date picker component
│   ├── sidebar/            # Navigation sidebar
│   ├── todo-item/          # Individual task component
│   └── todo-list/          # List of tasks
├── context/                # React Context for state management
│   ├── SearchContext/      # Search functionality
│   └── TasksContext/       # Tasks state and reducer
```

## Future Improvements

- Task categories/tags
- User accounts and cloud sync
- Subtasks support
- Light/dark theme toggle
- Mobile application
- Task statistics and insights
