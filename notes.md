💾 Backend & Database Storage
Purpose

This file is specifically for backend operations, focusing on managing database storage and user-related logic.
Key Insight

    Dynamic Backend in Next.js:
        Unlike traditional backends, the Next.js backend doesn’t run continuously.
        It operates on-demand, meaning it starts up only when:
            A request is made.
            A connection is established.
        📌 Important: Always ensure the backend is up and running before making any requests.

🛡️ Validation in Frontend & Backend
Purpose

The schemas folder plays a critical role in ensuring data validation. It acts as a checkpoint to verify the integrity of data before proceeding with any actions.
Why Validation Matters

    Storing Data: Prevent invalid data from being stored in the database.
    Sending to the Server: Ensure only clean, structured data reaches the server.

Usage

    Schemas serve as the first line of defense by:
        Checking that data meets required rules and structures.
        Maintaining a robust, error-free system.
    By implementing validation early, issues are stopped before they escalate.

🚀 Quick Takeaways
For Backend:

    Use this file for managing database-related logic.
    Be mindful of how Next.js handles backend requests dynamically.

For Schemas:

    Validate data effectively on both frontend and backend.
    Stop bad data before it causes problems.

🎨 UI and Email Features
🌟 Shadcn Library

We’ll use the Shadcn library (or its equivalent) for building elegant and user-friendly interface components.
✉️ Email System
Why We Chose Resend

    Resend will replace Nodemailer for sending emails due to its seamless integration and reliability.

react-emails for Templates

    Purpose: Create beautiful and interactive email templates.
    Where They’re Stored: All templates are organized in the emails folder for easy access and maintenance.

🌐 Routing in Next.js
How Routing Works

    Next.js handles routing automatically.

Creating API Routes

    Step 1: Create an api folder inside the app directory.
    Step 2: Inside the api folder:
        Add subfolders for specific routes.
        For each route, create a route.js file to handle its logic.