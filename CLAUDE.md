# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a single-file React TypeScript component (`interactive_process_diagram.tsx`) that visualizes a three-phase software development process model for McCain/Breeze.ai. The component creates an interactive diagram showing collaboration between Agent Developers (AD), Semantic Engineers (SE), and Development Engineers (DE) across different automation phases.

## Architecture

The component is self-contained with no external dependencies beyond React and Lucide React icons. It uses:

- **State Management**: Local React state with `useState` for phase navigation and section expansion
- **Visual Design**: Tailwind CSS classes for styling and responsive layout
- **Interactive Elements**: Collapsible sections, phase navigation tabs, and arrow navigation
- **Data Structure**: Hard-coded phase data with configurable positioning via `TEAM_X_POSITIONS` and `BOX_HEIGHTS` constants

## Key Components

- `ArrowFlow`: Renders SVG arrows between teams with labels
- `SelfDirectedActivity`: Displays team-specific activity boxes positioned via absolute positioning
- Main component renders phases with expandable sections containing flows, outputs, and self-directed activities

## Configuration

Two main configuration objects control visual layout:

1. **TEAM_X_POSITIONS**: Controls horizontal positioning of team arrows and activity boxes (lines 9-13)
2. **BOX_HEIGHTS**: Controls heights of activity group containers for each phase section (lines 16-32)

## Development Notes

- The component contains extensive business logic for a three-phase development process model
- Phase data is embedded directly in the component (lines 130-347)
- Uses absolute positioning for team-aligned activities with percentage-based horizontal positioning
- No build tools, testing frameworks, or package management detected in the repository