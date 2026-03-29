// Navigation
document.addEventListener('DOMContentLoaded', function() {
    // Navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links and sections
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Show corresponding section
            const sectionId = this.getAttribute('data-section');
            document.getElementById(sectionId).classList.add('active');
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
    
    // Initialize charts
    initializeCharts();
});

// Skills Chart
function initializeCharts() {
    // Skills Bar Chart
    const skillsCtx = document.getElementById('skillsChart');
    if (skillsCtx) {
        new Chart(skillsCtx, {
            type: 'bar',
            data: {
                labels: ['AI Governance', 'Python', 'GDPR Compliance', 'Machine Learning'],
                datasets: [{
                    label: 'Skill Level',
                    data: [8, 7, 6, 5],
                    backgroundColor: [
                        'rgba(208, 74, 2, 0.8)',
                        'rgba(208, 74, 2, 0.7)',
                        'rgba(208, 74, 2, 0.6)',
                        'rgba(208, 74, 2, 0.5)'
                    ],
                    borderColor: 'rgba(208, 74, 2, 1)',
                    borderWidth: 2
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        beginAtZero: true,
                        max: 10,
                        ticks: {
                            stepSize: 2
                        }
                    }
                }
            }
        });
    }
    
    // Heatmap Chart (Skill Demand)
    const heatmapCtx = document.getElementById('heatmapChart');
    if (heatmapCtx) {
        const weeks = Array.from({length: 12}, (_, i) => `Week ${i + 1}`);
        
        new Chart(heatmapCtx, {
            type: 'line',
            data: {
                labels: weeks,
                datasets: [
                    {
                        label: 'EU AI Act Compliance',
                        data: [15, 18, 22, 27, 33, 38, 44, 49, 55, 60, 65, 70],
                        borderColor: '#C1272D',
                        backgroundColor: 'rgba(193, 39, 45, 0.1)',
                        tension: 0.4
                    },
                    {
                        label: 'Generative AI',
                        data: [25, 27, 30, 33, 36, 40, 43, 46, 50, 53, 56, 60],
                        borderColor: '#D04A02',
                        backgroundColor: 'rgba(208, 74, 2, 0.1)',
                        tension: 0.4
                    },
                    {
                        label: 'Prompt Engineering',
                        data: [20, 22, 24, 27, 29, 32, 35, 37, 40, 42, 45, 48],
                        borderColor: '#FF991F',
                        backgroundColor: 'rgba(255, 153, 31, 0.1)',
                        tension: 0.4
                    },
                    {
                        label: 'AI Governance',
                        data: [10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32],
                        borderColor: '#1C1C1C',
                        backgroundColor: 'rgba(28, 28, 28, 0.1)',
                        tension: 0.4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Number of Searches'
                        }
                    }
                }
            }
        });
    }
    
    // Gap Analysis Chart
    const gapCtx = document.getElementById('gapChart');
    if (gapCtx) {
        new Chart(gapCtx, {
            type: 'bar',
            data: {
                labels: ['EU AI Act Compliance', 'Generative AI', 'AI Governance', 'Prompt Engineering', 'Healthcare AI'],
                datasets: [
                    {
                        label: 'Demand',
                        data: [47, 38, 28, 32, 15],
                        backgroundColor: 'rgba(208, 74, 2, 0.8)',
                        borderColor: '#D04A02',
                        borderWidth: 2
                    },
                    {
                        label: 'Supply',
                        data: [12, 25, 32, 18, 8],
                        backgroundColor: 'rgba(28, 28, 28, 0.8)',
                        borderColor: '#1C1C1C',
                        borderWidth: 2
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Number of People'
                        }
                    }
                }
            }
        });
    }
}

// Expert Search
const mockExperts = [
    {
        id: 1,
        name: 'Alex Kim',
        role: 'Senior Consultant',
        office: 'Singapore',
        years: 5,
        projects: 15,
        skills: ['Healthcare AI (8/10)', 'HIPAA Compliance (8/10)', 'Clinical AI (7/10)'],
        projects_list: ['Healthcare AI Implementation'],
        availability: 'Available next month',
        match: 94,
        keywords: ['healthcare', 'ai', 'hipaa', 'clinical']
    },
    {
        id: 2,
        name: 'Dr. James Wilson',
        role: 'Senior Manager',
        office: 'London',
        years: 10,
        projects: 28,
        skills: ['Generative AI (9/10)', 'AI Ethics (9/10)', 'LLM Deployment (8/10)'],
        projects_list: ['GenAI Implementation - Banking', 'AI Ethics Framework'],
        availability: 'Available in 2 weeks',
        match: 92,
        keywords: ['generative', 'ai', 'genai', 'llm', 'ethics']
    },
    {
        id: 3,
        name: 'Sarah Chen',
        role: 'Senior Consultant',
        office: 'San Francisco',
        years: 6,
        projects: 12,
        skills: ['AI Governance (8/10)', 'Python (7/10)', 'GDPR Compliance (6/10)'],
        projects_list: ['FinTech AI Governance', 'Healthcare Data Privacy'],
        availability: 'Available next week',
        match: 89,
        keywords: ['ai', 'governance', 'gdpr', 'compliance', 'eu']
    },
    {
        id: 4,
        name: 'Maya Rodriguez',
        role: 'Manager',
        office: 'New York',
        years: 8,
        projects: 22,
        skills: ['AI Governance (9/10)', 'Model Risk Management (8/10)', 'Banking Regulations (9/10)'],
        projects_list: ['AI Governance - Financial Services'],
        availability: 'Fully booked',
        match: 87,
        keywords: ['ai', 'governance', 'banking', 'risk', 'financial']
    }
];

function searchExample(query) {
    document.getElementById('expertSearch').value = query;
    searchExperts();
}

function searchExperts() {
    const query = document.getElementById('expertSearch').value.toLowerCase();
    
    if (!query) {
        document.getElementById('searchResults').style.display = 'none';
        return;
    }
    
    // Filter experts based on keywords
    const matches = mockExperts.filter(expert => {
        return expert.keywords.some(keyword => query.includes(keyword));
    }).sort((a, b) => b.match - a.match);
    
    // Display results
    const resultsDiv = document.getElementById('searchResults');
    const expertsListDiv = document.getElementById('expertsList');
    const resultsCountSpan = document.getElementById('resultsCount');
    
    if (matches.length === 0) {
        resultsDiv.style.display = 'none';
        return;
    }
    
    resultsCountSpan.textContent = matches.length;
    
    expertsListDiv.innerHTML = matches.map(expert => `
        <div class="expert-card">
            <div class="expert-header">
                <div>
                    <h3 class="expert-name">${expert.name} - ${expert.role}</h3>
                    <p class="expert-meta">${expert.office} • ${expert.years} years experience • ${expert.projects} projects completed</p>
                </div>
                <div class="match-badge">${expert.match}%</div>
            </div>
            <div class="expert-body">
                <div class="expert-skills">
                    <strong>Matched Skills:</strong>
                    <ul>
                        ${expert.skills.map(skill => `<li>${skill}</li>`).join('')}
                    </ul>
                </div>
                <div>
                    <strong>Availability:</strong><br>${expert.availability}
                </div>
            </div>
            <div class="expert-footer">
                <button class="btn-secondary">View Profile</button>
                <button class="btn-primary">Request Consultation</button>
            </div>
        </div>
    `).join('');
    
    resultsDiv.style.display = 'block';
}

// Use Case Approaches
function showApproach(type) {
    // Hide both approaches first
    document.getElementById('traditionalApproach').style.display = 'none';
    document.getElementById('aiApproach').style.display = 'none';
    
    if (type === 'traditional') {
        document.getElementById('traditionalApproach').style.display = 'block';
        // Scroll to results
        setTimeout(() => {
            document.getElementById('traditionalApproach').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    } else if (type === 'ai') {
        const aiDiv = document.getElementById('aiApproach');
        const loadingDiv = document.getElementById('loadingState');
        const resultsDiv = document.getElementById('aiResults');
        
        aiDiv.style.display = 'block';
        loadingDiv.style.display = 'block';
        resultsDiv.style.display = 'none';
        
        // Scroll to loading state
        setTimeout(() => {
            aiDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
        
        // Simulate loading
        setTimeout(() => {
            loadingDiv.style.display = 'none';
            resultsDiv.style.display = 'block';
        }, 2000);
    }
}

// Button interactions
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn-primary') || e.target.classList.contains('btn-secondary')) {
        // Add click animation
        e.target.style.transform = 'scale(0.95)';
        setTimeout(() => {
            e.target.style.transform = '';
        }, 100);
    }
});
