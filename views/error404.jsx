const React = require('react')
const Def = require('./default')

function error404 () {
  return (
    <Def>
        <main>
            <h1>404: PAGE NOT FOUND</h1>
            <p>Oops, sorry, we can't find this page!</p>
        </main>
    </Def>
  )
}


module.exports = error404



// old code
// const React = require('react')
// const Def = require('./default')

// function error404 () {
//     return (
//         <Def>
//             <main>
//                 <h1>404: PAGE NOT FOUND</h1>
//                 <p>Excuse me, do you know what your looking for?</p>
//                 <div>
//                     <img src="/images/cliff-jump.jpg" alt="Cliff Jump" />
//                 </div>
//             </main>
//         </Def>
//     )
// }

// module.exports = error404