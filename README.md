<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GlobalCinema Map - Every Film Has a Place</title>
    
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
     integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
     crossorigin=""/>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">

    <style>
        /* --- General Setup & Theming --- */
        :root {
            --midnight-blue: #1B263B;
            --cinematic-gold: #FFD700;
            --steel-blue: #415A77;
            --light-slate: #778DA9;
            --pristine-white: #E0E1DD;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Poppins', sans-serif;
            background-color: var(--midnight-blue);
            color: var(--pristine-white);
            overflow: hidden; /* Prevent scrolling while map is active */
            background-image: radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
            background-size: 2rem 2rem;
        }

        /* --- Intro Loader --- */
        #loader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-color: var(--midnight-blue);
            z-index: 99999;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            transition: opacity 0.8s ease-in-out;
        }

        #loader .globe-icon {
            font-size: 80px;
            animation: spin 3s linear infinite;
        }

        #loader p {
            margin-top: 20px;
            font-size: 1.2rem;
            color: var(--cinematic-gold);
            letter-spacing: 2px;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        /* --- Header --- */
        header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            padding: 15px 30px;
            background: linear-gradient(180deg, rgba(27, 38, 59, 0.95), rgba(27, 38, 59, 0));
            z-index: 1001;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
