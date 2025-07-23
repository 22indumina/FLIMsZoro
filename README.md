<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MovieMagic - Your Ultimate Movie Destination</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header>
        <div class="container">
            <a href="#" class="logo">MovieMagic</a>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#movies">Movies</a></li>
                    <li><a href="#tv-shows">TV Shows</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div class="search-box">
                <input type="text" placeholder="Search for a movie...">
                <button type="submit">Search</button>
            </div>
        </div>
    </header>

    <main>
        <section id="hero">
            <div class="container">
                <h1>Welcome to MovieMagic</h1>
                <p>Discover and watch your favorite movies and TV shows.</p>
                <a href="#movies" class="btn">Browse Movies</a>
            </div>
        </section>

        <section id="movies" class="content-section">
            <div class="container">
                <h2>Featured Movies</h2>
                <div class="movie-grid">
                    </div>
            </div>
        </section>

        <section id="tv-shows" class="content-section">
            <div class="container">
                <h2>Popular TV Shows</h2>
                <div class="tv-show-grid">
                    </div>
            </div>
        </section>

        <section id="contact" class="content-section">
            <div class="container">
                <h2>Contact Us</h2>
                <form>
                    <input type="text" name="name" placeholder="Your Name" required>
                    <input type="email" name="email" placeholder="Your Email" required>
                    <textarea name="message" placeholder="Your Message" required></textarea>
                    <button type="submit" class="btn">Send Message</button>
                </form>
            </div>
        </section>
    </main>

    <footer>
        <div class="container">
            <p>&copy; 2025 MovieMagic. All Rights Reserved.</p>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>
