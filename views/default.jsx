const React = require ('react')

function Def (html) {
  return (
      <html>
          <head>
              <title>Title</title>
          </head>
          <body>
              {html.children}
          </body>
      </html>
  )
}

// old code
// function Def (html) {
//     return (
//         <html>
//             <head>
//                 <title>Title</title>
//                 {/* BOOTSTRAP CDN LINK (long) */}
//                 <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous"></link>
//             </head>
//             <body>
//                 {html.children}
//             </body>
//         </html>
//     )
// }

module.exports = Def