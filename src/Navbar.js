// Give the const a name.
// Notice that the SRC is using an 'Arrow Function'
const Navbar = () => {
    return (
        // inside the return element, create a template.
        // create a nav element with a class name of "navbar"
        <nav className="navbar">
            {/* inside the navbar, create a h1 tag */}
            <h1>The Dojo Blog</h1>
            {/* Then add a div tag with class name, "links"
            and nest 2 anchor tags within that div */}
            <div className="links">
                {/* Use / in the href to hyperlink to the home page */}
                <a href="/">Home</a>
                {/* Use /create in the href here to naviage to a create page,
                which will be made later */}
                <a href="/create">New Blog</a>
            </div>
        </nav>
    );
}

// next, import the Navbar component inside the app component 
// and nest it inside the App.js template.
export default Navbar;