var Employee = require("../lib/Employee")

function generateHTML(data) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${data.title}</title>
    </head>

    <body>
        
    </body>
    </html>`
}

module.exports = generateHTML;