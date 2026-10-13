/* STREAMING_CHUNK:Configuring Base Styles and Custom Fonts... */
body {
    font-family: 'Gowun Dodum', sans-serif;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
}

.font-jua {
    font-family: 'Jua', sans-serif;
}

/* Glassmorphism Card Style */
.glass-card {
    background: rgba(255, 255, 255, 0.92);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.7);
}

/* STREAMING_CHUNK:Configuring Scrollbars and Animations... */
/* Custom Scrollbar for Modal Panels */
::-webkit-scrollbar {
    width: 6px;
}

::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb {
    background: #0284c7;
    border-radius: 10px;
}

/* Custom Slow Bounce Animation */
@keyframes bounce-slow {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-8px);
    }
}

.animate-bounce-slow {
    animation: bounce-slow 2s infinite ease-in-out;
}

/* Responsive Touch Target Sizes */
button {
    touch-action: manipulation;
}