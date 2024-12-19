# Unhandled Database Errors in Express.js Route Handler

This repository demonstrates a common error in Express.js applications: unhandled errors during database operations within route handlers.  The `bug.js` file shows the problematic code, while `bugSolution.js` provides a corrected version with proper error handling.

## Problem

The original code lacks error handling for potential database query failures. If the database operation throws an error, the application will crash without gracefully handling the exception.  This results in a poor user experience and makes debugging difficult.

## Solution

The solution incorporates `try...catch` blocks to handle potential errors during the database operation.  If an error occurs, the application responds appropriately with an error message to the client (HTTP 500 status code), rather than crashing.