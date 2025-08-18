# 📌 API Response & Error Handling Notes

##  1. `ApiResponse` – Success Response Format

### Purpose
- This ApiResponse class is used to standardize API responses in a MERN backend.
- Whenever you send a response to the frontend, you can create an object from this class so all responses follow the same format.

### Code
```javascript
class ApiResponse {
    constructor(statusCode, data, message = "Success") {
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.success = statusCode < 400; // true if status code is below 400
    }
}
export { ApiResponse };

```

### Example From code


```javascript
// controllers/helthCheck.Controller.js
const healthCheck = asyncHandler(async (req, res) => {
    res.status(200).json(
        new ApiResponse(200, { message: "Server is running" })
    )
});

export { healthCheck };

```



### Example

```javascript
app.get("/user", (req, res) => {
    const user = { id: 1, name: "Kunj" };

    // Sending a successful response
    const response = new ApiResponse(200, user, "User fetched successfully");
    res.status(response.statusCode).json(response);
});

app.get("/error", (req, res) => {
    // Sending an error response
    const response = new ApiResponse(404, null, "User not found");
    res.status(response.statusCode).json(response);
});

```
### Output Example

```json
// Success case (GET /user)
{
    "statusCode": 200,
    "data": { "id": 1, "name": "Kunj" },
    "message": "User fetched successfully",
    "success": true
}
```

```json
// Error case (GET /error)
{
    "statusCode": 404,
    "data": null,
    "message": "User not found",
    "success": false
}
```



## 2. `ApiError` – Standard Error Handling

### Purpose
- To create structured error responses for APIs.
- Prevents sending raw unstructured errors to clients.
- Ensures every error follows the same response shape.
- It inherits all the features of JavaScript’s built-in Error object, like the .message and .stack.

### Code
```javascript
class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        stack = "",
    ) {
        super(message);
        this.statusCode = statusCode;
        this.data = null; //data is null because errors don’t return real data.
        this.message = message;
        this.success = false; //Always sets success to false (since it’s an error).
        this.errors = errors; //errors can contain an array of error details.

        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export { ApiError };

```
### super(message)
- Calls the Error constructor so this object behaves like an actual error.
- This is what makes err.message work.



### Example

```javascript
app.get("/error", (req, res, next) => {
    // Example: throwing a custom API error
    return next(new ApiResponse(404, "User not found", ["No user in DB"]));
});

// Error handling middleware
app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).json({
        statusCode: err.statusCode || 500,
        data: err.data,
        message: err.message,
        success: err.success,
        errors: err.errors,
        stack: process.env.NODE_ENV === "development" ? err.stack : undefined
    });
});
```
### Output Example
```JSON
{
    "statusCode": 404,
    "data": null,
    "message": "User not found",
    "success": false,
    "errors": ["No user in DB"],
    "stack": "Error: User not found\n    at app.get..."
}
```

---

# 📌 Constants File Notes

This is just an object used as an enum (“enumeration”) to store fixed constant values for user roles.
- Instead of hardcoding "admin" or "member" everywhere, you store them in one place.
- Reduces typos and makes it easier to update later.

```javascript
// UserRolesEnum defines different types of roles a user can have in the system.
export const UserRolesEnum = {
    ADMIN: "admin",              
    PROJECT_ADMIN: "project_admin", 
    MEMBER: "member"               
};

// AvailableUserRole contains all possible user roles as an `array`.
// This can be used for validations, dropdowns, or role assignments.

export const AvailableUserRole = Object.values(UserRolesEnum);

// TaskStatusEnum defines the various states a task can be in.
export const TaskStatusEnum = {
    TODO: "todo",                  
    IN_PROGRESS: "in_progress",    
    DONE: "done"                  
};
```

// AvailableTaskStatues contains all possible task statuses as an `array`.
// Useful for validations, UI filters, and status updates.
export const AvailableTaskStatues = Object.values(TaskStatusEnum);


# 🔐 Password Handling in User Model

## 1. Password Hashing Before Save

```javascript
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10);
    next();
});
```

### Explanation

- `!this.isModified("password")` → Prevents re-hashing if the password field was not changed (e.g., when updating      profile info).
- pre("save") → This is a Mongoose middleware that runs before a document is saved to MongoDB.
- bcrypt.hash(password, 10) → Hashes the plain text password with a salt factor of 10.
- The hashed password replaces the plain one before storing in the database.
- Ensures passwords are never saved in plain text.

## 2. Password Verification Method

```javascript
userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
}
```

### Explanation 
- userSchema.methods → Lets us add custom methods to all user documents.
- isPasswordCorrect → Checks if a given plain text password matches the stored hashed password.
- bcrypt.compare(plainPassword, hashedPassword) → Returns true if they match, false otherwise.
- Used during login to validate credentials.