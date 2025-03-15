// Q) What is is the difference between LocalStorage and Cookies in JavaScript?
// A) Cookies and LocalStorage are both methods of storing data in a user's browser, but they serve different purposes
//    and have distinct characteristics.

//    1. Cookies: Small pieces of data that are sent to the server with every HTTP request.
//       Size Limit: Approximately 4 KB per cookie.
//       Expiration: Cookies can have an expiration date. Without it, they expire when the browser is closed (session cookies).
//       Scope: Accessible on both the client (via JavaScript) and the server (sent with HTTP headers).
//       Security:
//          Can be marked as HttpOnly to prevent client-side JavaScript access (better for sensitive data).
//          Can be set as Secure to ensure they are only sent over HTTPS.
//       Use Case:
//          Session management (e.g., user authentication).
//          Tracking user behavior (e.g., analytics).

//    2. LocalStorage: A storage mechanism that allows saving data in the browser's memory, persisting across sessions.
//       Size Limit: Typically 5-10 MB per origin.
//       Expiration: Data persists indefinitely until explicitly cleared by the application or the user.
//       Scope: Only accessible via client-side JavaScript; not sent to the server with HTTP requests.
//       Security:
//          Not suitable for sensitive data as it's accessible via client-side JavaScript.
//          Needs additional security measures to protect against XSS attacks.
//       Use Case:
//          Storing large data that doesn’t need to be sent to the server (e.g., user preferences, offline data).
//          Caching data to improve performance.

// When to Use What?
// Cookies:
//    When you need the server to access the data (e.g., authentication tokens).
//    For small amounts of data that need to persist across sessions.
// LocalStorage:
//    When storing larger amounts of data that don’t need to be sent to the server (e.g., app settings, temporary data).
