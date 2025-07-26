// AICryptopia Investor Deck - Interactive JavaScript

// Global Variables
let currentSlide = 1;
const totalSlides = 14;
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
    
    // Generate slide indicators
    generateSlideIndicators();
    
    // Show first slide and update navigation
    showSlide(currentSlide);
    updateNavigationState();
    updateSlideIndicators();
    updateSidebarIndex();
    
    // Close sidebar on window resize for better UX
    window.addEventListener('resize', () => {
        if (sidebarOpen && window.innerWidth <= 768) {
            closeSidebar();
        }
    });
}

// Generate slide indicator dots
function generateSlideIndicators() {
    const indicatorsContainer = document.getElementById('slide-indicators');
    indicatorsContainer.innerHTML = '';
    
    for (let i = 1; i <= totalSlides; i++) {
        const indicator = document.createElement('div');
        indicator.className = 'slide-dot';
        indicator.setAttribute('data-slide', i);
        indicator.title = `Go to slide ${i}`;
        indicator.onclick = () => goToSlide(i);
        indicatorsContainer.appendChild(indicator);
    }
}

// Update slide indicators
function updateSlideIndicators() {
    const dots = document.querySelectorAll('.slide-dot');
    dots.forEach((dot, index) => {
        if (index + 1 === currentSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Slide Navigation Functions
function changeSlide(direction) {
    const newSlide = currentSlide + direction;
    
    if (newSlide >= 1 && newSlide <= totalSlides) {
        currentSlide = newSlide;
        showSlide(currentSlide);
        updateProgressBar();
        updateSlideCounter();
        updateNavigationState();
        
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
            if (!sidebarOpen) { // Only navigate if sidebar is closed
                event.preventDefault();
                changeSlide(1);
            }
            break;
        case 'ArrowLeft':
            if (!sidebarOpen) { // Only navigate if sidebar is closed
                event.preventDefault();
                changeSlide(-1);
            }
            break;
        case 'Home':
            event.preventDefault();
            goToFirstSlide();
            break;
        case 'End':
            event.preventDefault();
            goToLastSlide();
            break;
        case 'Escape':
            event.preventDefault();
            if (sidebarOpen) {
                closeSidebar(); // ESC closes sidebar if open
            } else {
                goToFirstSlide(); // Otherwise goes to first slide
            }
            break;
        case 'Tab':
            if (event.ctrlKey) { // Ctrl+Tab toggles sidebar
                event.preventDefault();
                toggleSidebar();
            }
            break;
        case 's':
        case 'S':
            if (event.ctrlKey) { // Ctrl+S toggles sidebar
                event.preventDefault();
                toggleSidebar();
            }
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
        case 6:
            initializeGrowthChart();
            break;
        case 8:
            initializeROIChart();
            break;
        case 10:
            initializeFundsChart();
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

// Slide 6: Growth Chart (Revenue Growth)
function initializeGrowthChart() {
    const ctx = document.getElementById('growthChart');
    if (!ctx || charts.growthChart) return;
    
    charts.growthChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Y1 (MVP)', 'Y2 (Scale)', 'Y3 (Growth)', 'Y5 (Mature)'],
            datasets: [{
                label: 'Revenue ($M)',
                data: [0, 0.5, 5, 50],
                borderColor: '#00ff00',
                backgroundColor: 'rgba(0, 255, 0, 0.2)',
                fill: true,
                tension: 0.4,
                pointBackgroundColor: '#00ff00',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2,
                pointRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: { color: '#ffffff', font: { size: 14 } }
                },
                title: {
                    display: true,
                    text: 'Revenue Growth from Joyful Pay Model',
                    color: '#00ffff',
                    font: { size: 16, weight: 'bold' }
                }
            },
            scales: {
                x: { ticks: { color: '#ffffff' }, grid: { color: 'rgba(255, 255, 255, 0.1)' } },
                y: { 
                    beginAtZero: true,
                    ticks: { 
                        color: '#ffffff',
                        callback: function(value) { return '$' + value + 'M'; }
                    },
                    grid: { color: 'rgba(255, 255, 255, 0.1)' }
                }
            }
        }
    });
}

// Slide 8: ROI Chart (100x Return Projection)
function initializeROIChart() {
    const ctx = document.getElementById('roiChart');
    if (!ctx || charts.roiChart) return;
    
    charts.roiChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Entry', 'Y1', 'Y2', 'Y3 Target'],
            datasets: [{
                label: '$AIC Token Multiple',
                data: [1, 5, 25, 100],
                borderColor: '#ff00ff',
                backgroundColor: 'rgba(255, 0, 255, 0.2)',
                fill: true,
                tension: 0.3,
                pointBackgroundColor: '#ff00ff',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 3,
                pointRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: { color: '#ffffff', font: { size: 14 } }
                },
                title: {
                    display: true,
                    text: '100x ROI Target ($TAO Benchmark: 1000x)',
                    color: '#ff00ff',
                    font: { size: 16, weight: 'bold' }
                }
            },
            scales: {
                x: { ticks: { color: '#ffffff' }, grid: { color: 'rgba(255, 255, 255, 0.1)' } },
                y: { 
                    beginAtZero: true,
                    ticks: { 
                        color: '#ffffff',
                        callback: function(value) { return value + 'x'; }
                    },
                    grid: { color: 'rgba(255, 255, 255, 0.1)' }
                }
            }
        }
    });
}

// Slide 10: Funds Allocation Chart
function initializeFundsChart() {
    const ctx = document.getElementById('fundsChart');
    if (!ctx || charts.fundsChart) return;
    
    charts.fundsChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Development (40%)', 'Marketing (30%)', 'Operations (20%)', 'Reserve (10%)'],
            datasets: [{
                data: [40, 30, 20, 10],
                backgroundColor: [
                    'rgba(0, 255, 255, 0.8)',
                    'rgba(255, 0, 255, 0.8)',
                    'rgba(0, 255, 0, 0.8)',
                    'rgba(255, 255, 0, 0.8)'
                ],
                borderColor: [
                    '#00ffff',
                    '#ff00ff',
                    '#00ff00',
                    '#ffff00'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: { color: '#ffffff', font: { size: 12 } },
                    position: 'bottom'
                },
                title: {
                    display: true,
                    text: '$500K Seed Fund Allocation',
                    color: '#00ffff',
                    font: { size: 16, weight: 'bold' }
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
        updateNavigationState();
        initializeSlideCharts(currentSlide);
        
        // Auto-close sidebar after navigation (helpful for mobile)
        if (sidebarOpen && window.innerWidth <= 768) {
            setTimeout(() => closeSidebar(), 300);
        }
    }
}

// Enhanced Navigation Functions
function goToFirstSlide() {
    currentSlide = 1;
    showSlide(currentSlide);
    updateProgressBar();
    updateSlideCounter();
    updateNavigationState();
    initializeSlideCharts(currentSlide);
}

function goToLastSlide() {
    currentSlide = totalSlides;
    showSlide(currentSlide);
    updateProgressBar();
    updateSlideCounter();
    updateNavigationState();
    initializeSlideCharts(currentSlide);
}

// Update navigation button states
function updateNavigationState() {
    const homeBtn = document.querySelector('.home-btn');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const endBtn = document.querySelector('.end-btn');
    
    // Highlight home button if on first slide
    if (currentSlide === 1) {
        homeBtn.classList.add('active');
    } else {
        homeBtn.classList.remove('active');
    }
    
    // Highlight end button if on last slide
    if (currentSlide === totalSlides) {
        endBtn.classList.add('active');
    } else {
        endBtn.classList.remove('active');
    }
    
    // Disable prev button on first slide
    if (currentSlide === 1) {
        prevBtn.classList.add('disabled');
    } else {
        prevBtn.classList.remove('disabled');
    }
    
    // Disable next button on last slide
    if (currentSlide === totalSlides) {
        nextBtn.classList.add('disabled');
    } else {
        nextBtn.classList.remove('disabled');
    }
    
    // Update slide indicators and sidebar
    updateSlideIndicators();
    updateSidebarIndex();
}

// Sidebar Functionality
let sidebarOpen = false;

function toggleSidebar() {
    const sidebar = document.getElementById('slide-sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const toggleBtn = document.querySelector('.sidebar-toggle');
    
    sidebarOpen = !sidebarOpen;
    
    if (sidebarOpen) {
        sidebar.classList.add('open');
        overlay.classList.add('active');
        toggleBtn.classList.add('active');
        toggleBtn.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
        toggleBtn.classList.remove('active');
        toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
}

function closeSidebar() {
    if (sidebarOpen) {
        toggleSidebar();
    }
}

function updateSidebarIndex() {
    const indexItems = document.querySelectorAll('.index-item');
    indexItems.forEach((item, index) => {
        if (index + 1 === currentSlide) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
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
    goToFirst: goToFirstSlide,
    goToLast: goToLastSlide,
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
⌨️  Navigation: Arrow keys, Space bar, Home/End, ESC
🖱️  Mouse: Home/Prev/Next/End buttons, Click slide dots
📱 Mobile: Swipe left/right, tap navigation
🎮 Controls: Use window.presentationControls for programmatic control

✨ New Features:
🏠 Home button (green) - Always get back to title slide
🏁 End button (magenta) - Jump to thank you slide  
⚪ Slide indicators - Click any dot to jump to that slide
🔴 Active states - Visual feedback for current position
📋 Sidebar Index - Toggle with button or Ctrl+S/Ctrl+Tab

📋 Sidebar Controls:
🔘 Toggle: Click sidebar button (top-left) or Ctrl+S
📖 Navigate: Click any slide title to jump instantly
🎯 Active tracking: Current slide highlighted in sidebar
📱 Auto-close: Sidebar closes after selection on mobile
⌨️  ESC key: Closes sidebar if open

Happy presenting! 💎✨
`); 