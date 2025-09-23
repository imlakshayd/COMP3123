//loading the build in http module
const http = require("http");
const employeeModule = require("./Employee");

console.log("Lab 03 - NodeJs");

// defining a port
const port = process.env.PORT ? Number(process.env.PORT) : 8083;

// Helper to send JSON
function sendJSON(res, statusCode, data) {
    res.writeHead(statusCode, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify(data));
}
//creating web server
const server = http.createServer((req, res) => {
    if (req.method !== "GET") {
        return sendJSON(res, 405, { error: http.STATUS_CODES[405] });
    }

    switch (req.url) {
        //welcome message
        case "/":
            res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
            res.end("<h1>Welcome to Lab Exercise 03</h1>");
            break;
        //return employee details
        case "/employee":
            sendJSON(res, 200, employeeModule.getAll());
            break;
        //return employee full names in alphabetical order
        case "/employee/names":
            sendJSON(res, 200, employeeModule.getAllNamesSorted());
            break;
        //sum of all employees salary
        case "/employee/totalsalary":
            sendJSON(res, 200, { total_salary: employeeModule.getTotalSalary() });
            break;
        //if not exist send 404
        default:
            sendJSON(res, 404, { error: http.STATUS_CODES[404] });
    }
});

// Bind explicitly to IPv4 loopback to avoid IPv6/host issues
server.listen(port, "127.0.0.1", () => {
    console.log(`Server listening on http://127.0.0.1:${port}`);
});