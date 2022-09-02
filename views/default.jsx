const React = require ('react')

// LAYOUTS PAGE
function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous"></link>
                <link rel="stylesheet" href='/css/style.css'/>
            </head>
            <body>
                {/* BONUS: Sticky Footer */}
                <div class="wrapper">

                    Thanks for the visit

                    <div class="push"></div>
                </div>
                <footer class="footer"></footer>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def

