// AICryptopia Investor Deck - Interactive JavaScript

// Global Variables
let currentSlide = 1;
const totalSlides = 15;
let charts = {}; // Store chart instances

// Initialize the presentation when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializePresentation();
    initializeCharts();
    updateProgressBar();
    
    // Keyboard navigation
    document.addEventListener('keydown', handleKeyboard);
});

// Initialize presentation
function initializePresentation() {
    console.log('AICryptopia Investor Deck Loaded! 🚀');
    
    // Update slide counter
    document.getElementById('current-slide').textContent = currentSlide;
    document.getElementById('total-slides').textContent = totalSlides;
    
    // Show first slide
    showSlide(currentSlide);
}

// Slide Navigation Functions
function changeSlide(direction) {
    const newSlide = currentSlide + direction;
    
    if (newSlide >= 1 && newSlide <= totalSlides) {
        currentSlide = newSlide;
        showSlide(currentSlide);
        updateProgressBar();
        updateSlideCounter();
        
        // Initialize charts for current slide if needed
        initializeSlideCharts(currentSlide);
    }
}

function showSlide(slideNumber) {
    // Hide all slides
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Show current slide
    const currentSlideElement = document.getElementById(`slide-${slideNumber}`);
    if (currentSlideElement) {
        currentSlideElement.classList.add('active');
    }
}

function updateSlideCounter() {
    document.getElementById('current-slide').textContent = currentSlide;
}

function updateProgressBar() {
    const progressFill = document.getElementById('progress-fill');
    const progressPercentage = (currentSlide / totalSlides) * 100;
    progressFill.style.width = `${progressPercentage}%`;
}

// Keyboard Navigation
function handleKeyboard(event) {
    switch(event.key) {
        case 'ArrowRight':
        case ' ': // Spacebar
            event.preventDefault();
            changeSlide(1);
            break;
        case 'ArrowLeft':
            event.preventDefault();
            changeSlide(-1);
            break;
        case 'Home':
            event.preventDefault();
            currentSlide = 1;
            showSlide(currentSlide);
            updateProgressBar();
            updateSlideCounter();
            break;
        case 'End':
            event.preventDefault();
            currentSlide = totalSlides;
            showSlide(currentSlide);
            updateProgressBar();
            updateSlideCounter();
            break;
    }
}

// Chart.js Initialization
function initializeCharts() {
    // Initialize charts for slides that are immediately visible
    initializeSlideCharts(1);
}

function initializeSlideCharts(slideNumber) {
    switch(slideNumber) {
        case 2:
            initializeOpportunityChart();
            break;
        case 4:
            initializeBuildChart();
            break;
    }
}

// Slide 2: Opportunity Chart
function initializeOpportunityChart() {
    const ctx = document.getElementById('opportunityChart');
    if (!ctx || charts.opportunityChart) return; // Don't recreate if already exists
    
    charts.opportunityChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2024', '2026', '2028', '2030'],
            datasets: [{
                label: 'Market Size ($M)',
                data: [703, 2000, 5000, 10000],
                borderColor: '#00ffff',
                backgroundColor: 'rgba(0, 255, 255, 0.2)',
                fill: true,
                tension: 0.4,
                pointBackgroundColor: '#00ffff',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: '#ffffff',
                        font: {
                            size: 14
                        }
                    }
                },
                title: {
                    display: true,
                    text: 'AI + Web3 Market Growth Projection',
                    color: '#00ffff',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#ffffff'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: '#ffffff',
                        callback: function(value) {
                            return '$' + value + 'M';
                        }
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                }
            },
            elements: {
                line: {
                    borderWidth: 3
                }
            }
        }
    });
}

// Slide 4: Build Chart (Phase Development)
function initializeBuildChart() {
    const ctx = document.getElementById('buildChart');
    if (!ctx || charts.buildChart) return; // Don't recreate if already exists
    
    charts.buildChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Phase 1\nKnowledge Hub', 'Phase 2\nUtilities Platform', 'Phase 3\nTokenomics Layer'],
            datasets: [{
                label: 'Development Progress (%)',
                data: [30, 60, 100],
                backgroundColor: [
                    'rgba(0, 255, 255, 0.8)',
                    'rgba(255, 0, 255, 0.8)',
                    'rgba(0, 255, 0, 0.8)'
                ],
                borderColor: [
                    '#00ffff',
                    '#ff00ff',
                    '#00ff00'
                ],
                borderWidth: 2,
                borderRadius: 8,
                borderSkipped: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: '#ffffff',
                        font: {
                            size: 14
                        }
                    }
                },
                title: {
                    display: true,
                    text: 'Phased Development Timeline',
                    color: '#00ffff',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#ffffff',
                        maxRotation: 0,
                        font: {
                            size: 12
                        }
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                },
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        color: '#ffffff',
                        callback: function(value) {
                            return value + '%';
                        }
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                }
            }
        }
    });
}

// Auto-play functionality (optional)
let autoPlayInterval;
let isAutoPlaying = false;

function toggleAutoPlay() {
    if (isAutoPlaying) {
        stopAutoPlay();
    } else {
        startAutoPlay();
    }
}

function startAutoPlay() {
    isAutoPlaying = true;
    autoPlayInterval = setInterval(() => {
        if (currentSlide < totalSlides) {
            changeSlide(1);
        } else {
            stopAutoPlay();
        }
    }, 5000); // 5 seconds per slide
}

function stopAutoPlay() {
    isAutoPlaying = false;
    if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
    }
}

// Utility Functions
function goToSlide(slideNumber) {
    if (slideNumber >= 1 && slideNumber <= totalSlides) {
        currentSlide = slideNumber;
        showSlide(currentSlide);
        updateProgressBar();
        updateSlideCounter();
        initializeSlideCharts(currentSlide);
    }
}

// Touch/Swipe Support for Mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', function(event) {
    touchStartX = event.changedTouches[0].screenX;
});

document.addEventListener('touchend', function(event) {
    touchEndX = event.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - next slide
            changeSlide(1);
        } else {
            // Swipe right - previous slide
            changeSlide(-1);
        }
    }
}

// Presentation Control Functions (for development/testing)
window.presentationControls = {
    goToSlide: goToSlide,
    next: () => changeSlide(1),
    prev: () => changeSlide(-1),
    toggleAutoPlay: toggleAutoPlay,
    getCurrentSlide: () => currentSlide,
    getTotalSlides: () => totalSlides
};

// Chart.js Global Configuration
Chart.defaults.color = '#ffffff';
Chart.defaults.backgroundColor = 'rgba(0, 255, 255, 0.1)';

// Smooth scrolling prevention (for full-screen presentation)
document.addEventListener('wheel', function(event) {
    event.preventDefault();
}, { passive: false });

// Prevent context menu for cleaner presentation
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

// Console welcome message
console.log(`
🚀 AICryptopia Investor Deck Ready!
📊 Total Slides: ${totalSlides}
⌨️  Navigation: Arrow keys, Space bar, Home/End
📱 Mobile: Swipe left/right
🎮 Controls: Use window.presentationControls for programmatic control

Happy presenting! 💎✨
`); 