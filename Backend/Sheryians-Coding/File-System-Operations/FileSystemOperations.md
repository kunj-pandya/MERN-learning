#  HTTP Status Code Categories

| Code Range | Category      | Meaning                                                 |
| ---------- | ------------- | ------------------------------------------------------- |
| 1xx        | Informational | Request received, continuing process                    |
| 2xx        | Success       | The request was successfully received and processed     |
| 3xx        | Redirection   | Further action needed (e.g., redirected to another URL) |
| 4xx        | Client Error  | Something is wrong with the request sent by the client  |
| 5xx        | Server Error  | The server failed to fulfill a valid request            |

## Most Common HTTP Status Codes (Grouped by Usage)

| Code  | Meaning          | When to Use                          |
| ----- | ---------------- | ------------------------------------ |
| `200` | OK               | Successful GET or general success    |
| `201` | Created          | After successful POST (new resource) |
| `204` | No Content       | After DELETE with no return data     |
| `400` | Bad Request      | Invalid input or query               |
| `401` | Unauthorized     | Token or login missing               |
| `403` | Forbidden        | No access to resource                |
| `404` | Not Found        | Resource not found                   |
| `409` | Conflict         | Duplicate or conflict state          |
| `422` | Validation Error | Form data is semantically wrong      |
| `500` | Server Error     | Code crash, DB fail, etc.            |

---


# Node.js File System Operations

Common file system operations in Node.js using the built-in `fs` module. These operations are frequently used in backend development for tasks like creating, updating, renaming, or deleting files.

## Importing the `fs` Module

To use file system operations, you first need to import the core `fs` module:

```js
const fs = require("fs");
```

# File System Operations

## *Create a File*

### Method
```js
fs.writeFile(file, data[, options], callback)
```

- `file`: The file name or path.
- `data`: The content to write into the file.
- `callback`: Function executed after writing the file.

### Example
```js
fs.writeFile("hello.txt", "hello how are you", function (err) {
    if (err) console.error(err);
    else console.log("done");
});
```


## *Append Data to a File*

### Method
```js
fs.appendFile(file, data[, options], callback)
```

- `file`: The file to append to.
- `data`: Content to append.
- `callback`: Function executed after appending.

### Example
```js
fs.appendFile("hello.txt", "\nI'm good, what about you?", function (err) {
    if (err) console.error(err);
    else console.log("done");
});
```


## *Rename a File*

### Method
```js
fs.rename(oldPath, newPath, callback)
```

- `oldPath`: Existing file name.
- `newPath`: New file name.
- `callback`: Function executed after renaming.

### Example
```js
fs.rename("hello.txt", "rename.txt", function (err) {
    if (err) console.error(err);
    else console.log("Done: File is renamed");
});
```
## *Copy a file*

### Method
```js
fs.copyFile(src, dest[, mode], callback)
```
- `src`: source filename to copy,
- `dest`: destination filename of the copy operation.
- `callback`: Function executed after renaming.

### Example
```js
fs.copyFile("rename.txt", "./copy/copy.text", function (err) {
    if (err) console.error(err);
    else console.log("Done: File is copyed");
});
```

## *delete a file*

### Method
```js
fs.unlink(path, callback)
```
- `path`: path to remove file.
- `callback`: Function executed after renaming.

### Example
```js
fs.unlink("rename.txt", function (err) {
    if (err) console.error(err);
    else console.log("Done:Unlinked renmae.txt");
})
```


## *carte a folder*

### Method
```js
fs.mkdir(path, callback)
```
- `path`: path to creat a folder.
- `callback`: Function executed after renaming.

### Example
```js
fs.mkdir("folder", function (err) {
    if (err) console.error(err);
    else console.log("Done: folder is created");
})

```

## *remove a folder*

### Method
```js
fs.rmdir(path, callback)
```
- `path`: path to remove a folder.
- `callback`: Function executed after renaming.

### Example
```js
fs.rmdir("folder", function (err) {
    if (err) console.error(err);
    else console.log("Done: folder is removed");
})
```



## Summary Table of Common FS Methods

| Operation           | Method                  | Description                          |
|---------------------|--------------------------|--------------------------------------|
| Create File         | `fs.writeFile()`         | Creates a new file                   |
| Append to File      | `fs.appendFile()`        | Appends data to an existing file     |
| Rename File         | `fs.rename()`            | Renames or moves a file              |
| Copy File           | `fs.copyFile()`          | Copy a file                          |
| Read File           | `fs.readFile()`          | Reads content of a file              |
| Delete File         | `fs.unlink()`            | Deletes a file                       |
| Create Directory    | `fs.mkdir()`             | Creates a directory                  |
| Read Directory      | `fs.readdir()`           | Reads the contents of a directory    |
| Remove Directory    | `fs.rmdir()` (legacy)    | Removes a directory                  |

---

## Notes

- The methods shown use asynchronous (non-blocking) versions.
- Node.js also provides synchronous versions (e.g., `fs.writeFileSync()`).
- Always handle errors in the callback for safety.
