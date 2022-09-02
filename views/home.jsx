const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>REST-Rant</h1>
                <div>
                  <img src="/images/tacos.jpg" alt="Cheesy Avocado Tacos" width='40%' height='50%'/>
                  <div>
                    Photo by <a href="AUTHOR_LINK">Edgar Castrejon</a> on <a href="UNSPLASH_LINK">Unsplash</a>
                  </div>
                </div>
                <a href="/places">
                    <button className="btn btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home