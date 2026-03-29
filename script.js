// Navigation
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            this.classList.add('active');
            const sectionId = this.getAttribute('data-section');
            document.getElementById(sectionId).classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
    
    initializeCharts();
});

// EXPANDED MOCK DATA - 15 Experts
const mockExperts = [
    {
        id: 1, name: 'Priya Menon', initials: 'PM',
        role: 'Senior Manager', office: 'Mumbai', years: 8, projects: 24,
        skills: ['AI Governance (9/10)', 'Model Risk (8/10)', 'RBI Compliance (9/10)', 'Ethical AI Frameworks (8/10)'],
        certifications: ['IEEE Ethics in AI', 'CISA', 'PMP'],
        availability: 'Available', match: 97,
        keywords: ['ai', 'governance', 'risk', 'regulatory', 'compliance', 'ethics'],
        recentProjects: ['AI Model Risk Assessment - BFSI', 'Internal AI Governance Playbook'],
        department: 'Risk & Regulatory'
    },
    {
        id: 2, name: 'Arjun Shetty', initials: 'AS',
        role: 'Manager', office: 'Bengaluru', years: 6, projects: 18,
        skills: ['AI Governance (8/10)', 'Cloud Risk (9/10)', 'DPDP Act (8/10)', 'GenAI Auditing (7/10)'],
        certifications: ['AWS Security', 'CISSP', 'CISM'],
        availability: 'Available', match: 91,
        keywords: ['ai', 'governance', 'cloud', 'security', 'dpdp', 'genai'],
        recentProjects: ['Cloud AI Security Framework', 'DPDP Compliance Audit'],
        department: 'Technology Risk'
    },
    {
        id: 3, name: 'Alex Kim', initials: 'AK',
        role: 'Senior Consultant', office: 'Singapore', years: 5, projects: 15,
        skills: ['Healthcare AI (9/10)', 'HIPAA Compliance (8/10)', 'Clinical AI (8/10)', 'FDA Regulations (7/10)'],
        certifications: ['CHPS', 'HCISPP', 'AWS Healthcare'],
        availability: 'Available', match: 94,
        keywords: ['healthcare', 'ai', 'hipaa', 'clinical', 'medical', 'fda'],
        recentProjects: ['Healthcare AI Implementation', 'Clinical Decision Support System'],
        department: 'Healthcare'
    },
    {
        id: 4, name: 'Dr. James Wilson', initials: 'JW',
        role: 'Senior Manager', office: 'London', years: 10, projects: 28,
        skills: ['Generative AI (9/10)', 'AI Ethics (9/10)', 'LLM Deployment (9/10)', 'Prompt Engineering (8/10)'],
        certifications: ['OpenAI Certified', 'Google Cloud AI', 'Stanford AI Ethics'],
        availability: 'Busy', match: 92,
        keywords: ['generative', 'ai', 'genai', 'llm', 'ethics', 'gpt', 'prompt'],
        recentProjects: ['GenAI Implementation - Banking', 'AI Ethics Framework'],
        department: 'AI Innovation'
    },
    {
        id: 5, name: 'Sarah Chen', initials: 'SC',
        role: 'Senior Consultant', office: 'San Francisco', years: 6, projects: 12,
        skills: ['AI Governance (8/10)', 'Python (8/10)', 'GDPR Compliance (7/10)', 'ML Ops (7/10)'],
        certifications: ['IAPP CIPP/E', 'AWS ML Specialty', 'CDPSE'],
        availability: 'Available', match: 89,
        keywords: ['ai', 'governance', 'gdpr', 'compliance', 'eu', 'python', 'ml'],
        recentProjects: ['FinTech AI Governance', 'Healthcare Data Privacy'],
        department: 'Technology'
    },
    {
        id: 6, name: 'Maya Rodriguez', initials: 'MR',
        role: 'Manager', office: 'New York', years: 8, projects: 22,
        skills: ['AI Governance (9/10)', 'Model Risk Mgmt (9/10)', 'Banking Regulations (9/10)', 'Sox Compliance (8/10)'],
        certifications: ['CISA', 'CRISC', 'FRM', 'CFA'],
        availability: 'Booked', match: 87,
        keywords: ['ai', 'governance', 'banking', 'risk', 'financial', 'sox'],
        recentProjects: ['AI Governance - Financial Services'],
        department: 'Financial Services'
    },
    {
        id: 7, name: 'Rahul Sharma', initials: 'RS',
        role: 'Senior Consultant', office: 'Mumbai', years: 5, projects: 14,
        skills: ['Cloud Architecture (9/10)', 'AWS (9/10)', 'Azure (8/10)', 'Kubernetes (8/10)'],
        certifications: ['AWS Solutions Architect', 'Azure Architect', 'CKA'],
        availability: 'Available', match: 93,
        keywords: ['cloud', 'architecture', 'aws', 'azure', 'devops', 'kubernetes'],
        recentProjects: ['Multi-Cloud Migration', 'Serverless Architecture Design'],
        department: 'Cloud & Infrastructure'
    },
    {
        id: 8, name: 'Lisa Anderson', initials: 'LA',
        role: 'Principal Consultant', office: 'Chicago', years: 12, projects: 35,
        skills: ['Data Ethics (9/10)', 'Privacy Engineering (9/10)', 'GDPR (9/10)', 'CCPA (8/10)'],
        certifications: ['CIPP/E', 'CIPP/US', 'CIPM', 'FIP'],
        availability: 'Available', match: 88,
        keywords: ['data', 'ethics', 'privacy', 'gdpr', 'ccpa', 'compliance'],
        recentProjects: ['Global Privacy Program', 'Data Ethics Framework'],
        department: 'Privacy & Ethics'
    },
    {
        id: 9, name: 'Kenji Tanaka', initials: 'KT',
        role: 'Manager', office: 'Tokyo', years: 7, projects: 19,
        skills: ['Generative AI (8/10)', 'RAG Systems (9/10)', 'Vector DB (8/10)', 'LangChain (8/10)'],
        certifications: ['OpenAI GPT Specialist', 'AWS AI Practitioner'],
        availability: 'Available', match: 90,
        keywords: ['generative', 'ai', 'rag', 'vector', 'langchain', 'embeddings'],
        recentProjects: ['Enterprise RAG System', 'AI Chatbot Platform'],
        department: 'AI Engineering'
    },
    {
        id: 10, name: 'Elena Popov', initials: 'EP',
        role: 'Senior Consultant', office: 'Dubai', years: 6, projects: 16,
        skills: ['ESG Strategy (9/10)', 'Sustainability (8/10)', 'Carbon Accounting (8/10)', 'CSRD (7/10)'],
        certifications: ['GRI Certified', 'CDP Reporter', 'SASB'],
        availability: 'Busy', match: 85,
        keywords: ['esg', 'sustainability', 'carbon', 'climate', 'csrd'],
        recentProjects: ['ESG Data Platform', 'Carbon Footprint Analysis'],
        department: 'Sustainability'
    },
    {
        id: 11, name: 'Mohammed Al-Rashid', initials: 'MA',
        role: 'Consultant', office: 'Riyadh', years: 4, projects: 11,
        skills: ['Model Validation (8/10)', 'Statistical Modeling (8/10)', 'Basel III (7/10)', 'Stress Testing (7/10)'],
        certifications: ['FRM', 'CFA Level 2', 'PRM'],
        availability: 'Available', match: 86,
        keywords: ['model', 'validation', 'basel', 'risk', 'statistical'],
        recentProjects: ['Credit Risk Model Validation', 'Stress Testing Framework'],
        department: 'Model Risk'
    },
    {
        id: 12, name: 'Priya Sharma', initials: 'PS',
        role: 'Consultant', office: 'Mumbai', years: 4, projects: 8,
        skills: ['Prompt Engineering (9/10)', 'RAG Implementation (8/10)', 'NLP (8/10)', 'Python (9/10)'],
        certifications: ['Anthropic Claude Certified', 'DeepLearning.AI'],
        availability: 'Available', match: 92,
        keywords: ['prompt', 'engineering', 'rag', 'nlp', 'python', 'genai'],
        recentProjects: ['Retail AI Chatbot', 'Customer Analytics Platform'],
        department: 'AI Engineering'
    },
    {
        id: 13, name: 'David O\'Connor', initials: 'DO',
        role: 'Senior Manager', office: 'Dublin', years: 9, projects: 26,
        skills: ['Regulatory Risk (9/10)', 'MiFID II (9/10)', 'EMIR (8/10)', 'Compliance (9/10)'],
        certifications: ['CAMS', 'CFE', 'ICA Advanced Diploma'],
        availability: 'Booked', match: 84,
        keywords: ['regulatory', 'risk', 'mifid', 'emir', 'compliance', 'financial'],
        recentProjects: ['MiFID II Compliance Program', 'Regulatory Change Management'],
        department: 'Financial Services'
    },
    {
        id: 14, name: 'Aisha Patel', initials: 'AP',
        role: 'Manager', office: 'London', years: 7, projects: 20,
        skills: ['Cloud Architecture (8/10)', 'GCP (9/10)', 'Terraform (8/10)', 'Security (8/10)'],
        certifications: ['GCP Professional Architect', 'CCSP', 'Terraform Associate'],
        availability: 'Available', match: 91,
        keywords: ['cloud', 'gcp', 'architecture', 'terraform', 'security'],
        recentProjects: ['GCP Migration', 'Zero Trust Architecture'],
        department: 'Cloud & Infrastructure'
    },
    {
        id: 15, name: 'Carlos Mendoza', initials: 'CM',
        role: 'Principal Consultant', office: 'Madrid', years: 11, projects: 31,
        skills: ['Data Governance (9/10)', 'Master Data Mgmt (9/10)', 'Data Quality (8/10)', 'Metadata Mgmt (8/10)'],
        certifications: ['CDMP', 'DGSP', 'DAMA'],
        availability: 'Available', match: 87,
        keywords: ['data', 'governance', 'master', 'quality', 'metadata'],
        recentProjects: ['Enterprise Data Governance', 'MDM Implementation'],
        department: 'Data & Analytics'
    }
];

// Pre-defined search scenarios
const searchScenarios = {
    'ai governance': {
        query: 'AI Governance',
        results: [1, 2, 5, 6], // Priya, Arjun, Sarah, Maya
        count: 8 // Show "Found 8 experts" but display top 4
    },
    'healthcare ai': {
        query: 'Healthcare AI',
        results: [3], // Alex Kim
        count: 5
    },
    'generative ai': {
        query: 'Generative AI',
        results: [4, 9, 12], // Dr. Wilson, Kenji, Priya Sharma
        count: 6
    },
    'cloud architecture': {
        query: 'Cloud Architecture',
        results: [7, 14], // Rahul, Aisha
        count: 7
    }
};

// Quick search buttons
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
    
    // Check if it's a pre-defined scenario
    let matches = [];
    let totalCount = 0;
    
    if (searchScenarios[query]) {
        const scenario = searchScenarios[query];
        matches = scenario.results.map(id => mockExperts.find(e => e.id === id));
        totalCount = scenario.count;
    } else {
        // Regular keyword search
        matches = mockExperts.filter(expert => 
            expert.keywords.some(keyword => query.includes(keyword))
        ).sort((a, b) => b.match - a.match).slice(0, 5);
        totalCount = matches.length;
    }
    
    const resultsDiv = document.getElementById('searchResults');
    const expertsListDiv = document.getElementById('expertsList');
    const resultsCountSpan = document.getElementById('resultsCount');
    
    if (matches.length === 0) {
        resultsDiv.style.display = 'none';
        return;
    }
    
    resultsCountSpan.textContent = totalCount;
    
    expertsListDiv.innerHTML = matches.map(expert => {
        const matchColor = expert.match >= 90 ? '#10B981' : expert.match >= 80 ? '#F59E0B' : '#E87722';
        const availabilityColor = expert.availability === 'Available' ? '#10B981' : 
                                  expert.availability === 'Busy' ? '#F59E0B' : '#EF4444';
        
        return `
        <div class="expert-card">
            <div class="expert-header">
                <div style="display: flex; gap: 16px; align-items: flex-start;">
                    <div style="width: 64px; height: 64px; border-radius: 50%; background: linear-gradient(135deg, #E87722 0%, #D04A02 100%); display: flex; align-items: center; justify-content: center; color: white; font-weight: 700; font-size: 24px;">
                        ${expert.initials}
                    </div>
                    <div>
                        <h3 class="expert-name">${expert.name}</h3>
                        <p class="expert-meta">${expert.role} • ${expert.department}</p>
                        <p class="expert-meta">${expert.office} • ${expert.years} years • ${expert.projects} projects</p>
                    </div>
                </div>
                <div style="text-align: right;">
                    <div class="match-badge" style="background: ${matchColor};">${expert.match}%</div>
                    <div style="margin-top: 8px; padding: 4px 12px; border-radius: 12px; font-size: 11px; font-weight: 700; text-transform: uppercase; background: ${availabilityColor}; color: white; display: inline-block;">
                        ${expert.availability}
                    </div>
                </div>
            </div>
            <div class="expert-body">
                <div class="expert-skills">
                    <strong>Matched Skills:</strong>
                    <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 8px;">
                        ${expert.skills.slice(0, 4).map(skill => 
                            `<span style="background: #FFF4ED; color: #E87722; padding: 6px 12px; border-radius: 6px; font-size: 13px; font-weight: 600;">${skill.split(' (')[0]}</span>`
                        ).join('')}
                    </div>
                    <div style="margin-top: 12px;">
                        <strong>Recent Projects:</strong>
                        <ul style="margin-top: 4px;">
                            ${expert.recentProjects.map(project => `<li>${project}</li>`).join('')}
                        </ul>
                    </div>
                    <div style="margin-top: 12px;">
                        <strong>Certifications:</strong> ${expert.certifications.join(', ')}
                    </div>
                </div>
            </div>
            <div class="expert-footer">
                <button class="btn-secondary">View Full Profile</button>
                <button class="btn-primary">Request Consultation</button>
            </div>
        </div>
    `}).join('');
    
    resultsDiv.style.display = 'block';
}

// Initialize all charts
function initializeCharts() {
    // Skills Chart (Employee Dashboard)
    const skillsCtx = document.getElementById('skillsChart');
    if (skillsCtx) {
        new Chart(skillsCtx, {
            type: 'bar',
            data: {
                labels: ['AI Governance', 'Python', 'GDPR Compliance', 'Machine Learning'],
                datasets: [{
                    label: 'Skill Level',
                    data: [8, 7, 6, 5],
                    backgroundColor: ['rgba(232, 119, 34, 0.8)', 'rgba(232, 119, 34, 0.7)', 
                                     'rgba(232, 119, 34, 0.6)', 'rgba(232, 119, 34, 0.5)'],
                    borderColor: 'rgba(232, 119, 34, 1)',
                    borderWidth: 2
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: { x: { beginAtZero: true, max: 10, ticks: { stepSize: 2 } } }
            }
        });
    }
    
    // Learning Progress Chart (Employee Dashboard)
    const progressCtx = document.getElementById('learningProgressChart');
    if (progressCtx) {
        new Chart(progressCtx, {
            type: 'bar',
            data: {
                labels: ['EU AI Act', 'AI Bias Detection', 'Healthcare AI Regs', 'Prompt Engineering', 'GDPR Updates', 'RAG Systems'],
                datasets: [{
                    label: 'Completion %',
                    data: [100, 100, 100, 100, 65, 30],
                    backgroundColor: function(context) {
                        const value = context.parsed.y;
                        return value === 100 ? '#10B981' : value >= 50 ? '#F59E0B' : '#E87722';
                    },
                    borderRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: { y: { beginAtZero: true, max: 100, ticks: { callback: v => v + '%' } } }
            }
        });
    }
    
    // Skill Demand Heatmap
    const heatmapCtx = document.getElementById('heatmapChart');
    if (heatmapCtx) {
        new Chart(heatmapCtx, {
            type: 'line',
            data: {
                labels: Array.from({length: 12}, (_, i) => `Week ${i + 1}`),
                datasets: [
                    {
                        label: 'EU AI Act Compliance',
                        data: [15, 18, 22, 27, 33, 38, 44, 49, 55, 60, 65, 70],
                        borderColor: '#EF4444', backgroundColor: 'rgba(239, 68, 68, 0.1)', tension: 0.4
                    },
                    {
                        label: 'Generative AI',
                        data: [25, 27, 30, 33, 36, 40, 43, 46, 50, 53, 56, 60],
                        borderColor: '#E87722', backgroundColor: 'rgba(232, 119, 34, 0.1)', tension: 0.4
                    },
                    {
                        label: 'Prompt Engineering',
                        data: [20, 22, 24, 27, 29, 32, 35, 37, 40, 42, 45, 48],
                        borderColor: '#F59E0B', backgroundColor: 'rgba(245, 158, 11, 0.1)', tension: 0.4
                    },
                    {
                        label: 'AI Governance',
                        data: [10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32],
                        borderColor: '#2D3436', backgroundColor: 'rgba(45, 52, 54, 0.1)', tension: 0.4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: true, position: 'bottom' } },
                scales: { y: { beginAtZero: true, title: { display: true, text: 'Number of Searches' } } }
            }
        });
    }
    
    // Gap Analysis Chart
    const gapCtx = document.getElementById('gapChart');
    if (gapCtx) {
        new Chart(gapCtx, {
            type: 'bar',
            data: {
                labels: ['EU AI Act', 'Generative AI', 'AI Governance', 'Prompt Eng', 'Healthcare AI'],
                datasets: [
                    {
                        label: 'Demand',
                        data: [47, 38, 28, 32, 15],
                        backgroundColor: 'rgba(232, 119, 34, 0.8)',
                        borderColor: '#E87722', borderWidth: 2
                    },
                    {
                        label: 'Supply',
                        data: [12, 25, 32, 18, 8],
                        backgroundColor: 'rgba(45, 52, 54, 0.8)',
                        borderColor: '#2D3436', borderWidth: 2
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: true, position: 'top' } },
                scales: { y: { beginAtZero: true, title: { display: true, text: 'Number of People' } } }
            }
        });
    }
    
    // Department Skill Heatmap
    const deptHeatmapCtx = document.getElementById('deptHeatmapChart');
    if (deptHeatmapCtx) {
        new Chart(deptHeatmapCtx, {
            type: 'bar',
            data: {
                labels: ['Engineering', 'Risk & Compliance', 'Financial Services', 'Healthcare', 'Consulting'],
                datasets: [
                    { label: 'AI/ML Skills', data: [45, 23, 15, 18, 32], backgroundColor: '#E87722' },
                    { label: 'Cloud Skills', data: [52, 12, 8, 14, 28], backgroundColor: '#3B82F6' },
                    { label: 'Data Skills', data: [38, 28, 22, 12, 35], backgroundColor: '#10B981' },
                    { label: 'Security Skills', data: [28, 35, 32, 15, 20], backgroundColor: '#EF4444' }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: true, position: 'bottom' } },
                scales: { x: { stacked: true }, y: { stacked: true, title: { display: true, text: 'Number of Employees' } } }
            }
        });
    }
}

// Use Case Approaches
function showApproach(type) {
    document.getElementById('traditionalApproach').style.display = 'none';
    document.getElementById('aiApproach').style.display = 'none';
    
    if (type === 'traditional') {
        document.getElementById('traditionalApproach').style.display = 'block';
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
        
        setTimeout(() => {
            aiDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
        
        setTimeout(() => {
            loadingDiv.style.display = 'none';
            resultsDiv.style.display = 'block';
        }, 2000);
    }
}

// Button interactions
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn-primary') || e.target.classList.contains('btn-secondary')) {
        e.target.style.transform = 'scale(0.95)';
        setTimeout(() => { e.target.style.transform = ''; }, 100);
    }
});
