💾 Backend & Database Storage
Purpose

This file is dedicated to the backend and manages database storage.
Key Insight

    In Next.js, the backend doesn’t run continuously like traditional servers. Instead, it:
        Operates on-demand, starting up only when a request or connection is made.
    📌 Important: Ensure the backend is up and running before making any requests.

🛡️ Validation in Frontend & Backend
Purpose

The schemas folder focuses on data validation, ensuring everything is in order before:

    Storing the data in the database.
    Sending it to the server.

Usage

    These schemas act as the first line of defense, verifying data structure and rules to maintain a robust, error-free system.

🚀 Quick Takeaways
Backend:

    Manage database interactions here.
    Always consider the dynamic nature of Next.js backends.

Schemas:

    Validate data effectively on both frontend and backend.
    Stop invalid data before it causes issues.

🎨 UI and Email Features
🌟 Shadcn Library

We’ll leverage the Shadcn library (or an equivalent) for user interface components.
✉️ Email System

    Resend will replace Nodemailer for a seamless email-sending experience.
    For email templates, we’re using react-emails:
        Templates allow us to create beautiful and interactive emails.
        All templates are stored in the emails folder for easy access and management.