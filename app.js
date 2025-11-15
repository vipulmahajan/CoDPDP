// Data Storage
const appData = {
  dpdpChapters: [
    {
      chapterNum: 1,
      title: "Preliminary",
      sections: [
        { num: 1, title: "Short title and commencement", keyPoint: "Act received Presidential assent August 11, 2023" },
        { num: 2, title: "Definitions", keyPoint: "Defines 34 key terms including Data Principal, Data Fiduciary, Processing, etc." },
        { num: 3, title: "Application of Act", keyPoint: "Applies to digital personal data within India and outside India if offering services to Indian Data Principals" }
      ]
    },
    {
      chapterNum: 2,
      title: "Obligations of Data Fiduciary",
      sections: [
        { num: 4, title: "Grounds for processing personal data", keyPoint: "Only with consent OR for certain legitimate uses" },
        { num: 5, title: "Notice", keyPoint: "Must notify Data Principal with purpose, rights, complaint mechanism" },
        { num: 6, title: "Consent", keyPoint: "Must be free, specific, informed, unambiguous; easy withdrawal" },
        { num: 7, title: "Certain legitimate uses", keyPoint: "8 categories where consent not required (state functions, medical emergency, etc.)" },
        { num: 8, title: "General obligations of Data Fiduciary", keyPoint: "Security, breach notification, erasure, DPO publication, grievance mechanism" },
        { num: 9, title: "Processing of personal data of children", keyPoint: "Verifiable parental consent required; no tracking/behavioral monitoring/targeted ads" },
        { num: 10, title: "Additional obligations of Significant Data Fiduciary", keyPoint: "Appoint DPO, data auditor, conduct DPIA, periodic audits" }
      ]
    },
    {
      chapterNum: 3,
      title: "Rights and Duties of Data Principal",
      sections: [
        { num: 11, title: "Right to access information about personal data", keyPoint: "Get summary of processing and identities of other recipients" },
        { num: 12, title: "Right to correction and erasure of personal data", keyPoint: "Correct inaccurate data and erase after purpose fulfilled" },
        { num: 13, title: "Right of grievance redressal", keyPoint: "Accessible mechanism; escalate to Board if not satisfied" },
        { num: 14, title: "Right to nominate", keyPoint: "Appoint nominee to exercise rights after death/incapacity" },
        { num: 15, title: "Duties of Data Principal", keyPoint: "Comply with law, no impersonation, accurate information" }
      ]
    },
    {
      chapterNum: 4,
      title: "Special Provisions",
      sections: [
        { num: 16, title: "Processing of personal data outside India", keyPoint: "Government can restrict transfers to certain countries" },
        { num: 17, title: "Exemptions", keyPoint: "Legal enforcement, court proceedings, crime investigation, research" }
      ]
    },
    {
      chapterNum: 5,
      title: "Data Protection Board of India",
      sections: [
        { num: "18-26", title: "Board establishment, composition, powers", keyPoint: "Independent body with Chairperson and Members to enforce DPDP" }
      ]
    },
    {
      chapterNum: 6,
      title: "Powers, Functions and Procedure",
      sections: [
        { num: "27-28", title: "Board powers and procedures", keyPoint: "Inquire into breaches, impose penalties, issue directions, digital office" }
      ]
    },
    {
      chapterNum: 7,
      title: "Penalties",
      sections: [
        { num: "29-33", title: "Penalty provisions", keyPoint: "Up to ₹500 crore or 5% turnover for serious violations" }
      ]
    }
  ],

  rbiSections: [
    { paraNum: 1, title: "Preamble", keyPoint: "Addresses concerns in digital lending: unbridled third parties, mis-selling, data privacy breach, unfair conduct" },
    { paraNum: "2-4", title: "Definitions and Applicability", keyPoint: "Applies to all commercial banks, co-operative banks, NBFCs, All-India FIs" },
    { paraNum: "5-6", title: "RE-LSP Arrangements", keyPoint: "Contractual agreements, enhanced due diligence, multi-lender digital views, disclosure requirements" },
    { paraNum: "7-11", title: "Conduct and Customer Protection", keyPoint: "Creditworthiness assessment, disclosures, KFS, fund flow controls, cooling-off period, grievance redressal" },
    { paraNum: "12-15", title: "Technology and Data Requirements", keyPoint: "Data collection with consent, no biometric data, India storage, 24-hour deletion if processed outside" },
    { paraNum: "16-17", title: "Reporting Requirements", keyPoint: "Report to CICs and RBI CIMS portal by June 15, 2025" },
    { paraNum: "18-28", title: "Default Loss Guarantee (DLG)", keyPoint: "Maximum 5% cap, 120-day invocation deadline, Board-approved policy required" }
  ],

  overlappingTopics: [
    { topicId: 1, name: "Data Consent and Collection", dpdpReq: "Free, specific, informed, unconditional consent required (Section 6)", rbiReq: "Need-based data collection with prior explicit consent and audit trail (Para 12)", similarity: "Both require explicit informed consent", contradiction: "None", alignmentStatus: "green" },
    { topicId: 2, name: "Data Protection Officer / Nodal Officer", dpdpReq: "SDFs must appoint DPO based in India (Section 10)", rbiReq: "Designate nodal grievance redressal officers (Para 11)", similarity: "Both require dedicated oversight officers", contradiction: "Roles differ: DPO compliance vs Nodal grievance", alignmentStatus: "yellow" },
    { topicId: 3, name: "Data Storage and Localization", dpdpReq: "India-focused, no explicit localization (Section 3)", rbiReq: "All data in India; if processed outside, delete within 24 hours (Para 13)", similarity: "Both recognize India as primary location", contradiction: "RBI more prescriptive with 24-hour rule", alignmentStatus: "yellow" },
    { topicId: 4, name: "Data Sharing with Third Parties", dpdpReq: "Explicit consent required (Section 12)", rbiReq: "Explicit consent except statutory cases (Para 12)", similarity: "Both require consent for third-party sharing", contradiction: "None", alignmentStatus: "green" },
    { topicId: 5, name: "Data Breach Notification", dpdpReq: "Notify Board and Data Principals (Section 8)", rbiReq: "Standards mentioned; less prescriptive timeline", similarity: "Both require breach notification", contradiction: "DPDP more prescriptive on Board notification", alignmentStatus: "yellow" },
    { topicId: 6, name: "Privacy Policy", dpdpReq: "Implied through consent notices", rbiReq: "Comprehensive privacy policy required, prominently disclosed (Para 14)", similarity: "Both recognize privacy policy importance", contradiction: "RBI more explicit on requirements", alignmentStatus: "yellow" },
    { topicId: 7, name: "Grievance Redressal", dpdpReq: "Two-tier: RE then Data Protection Board (Section 13)", rbiReq: "Two-tier: RE/LSP then RB-IOS or RBI (Para 11)", similarity: "Both have tiered escalation", contradiction: "Different escalation bodies", alignmentStatus: "yellow" },
    { topicId: 8, name: "Right to Erasure", dpdpReq: "Data Principal can request erasure after consent withdrawal (Section 12)", rbiReq: "Clear data destruction protocol required by RE (Para 13)", similarity: "Both recognize data deletion importance", contradiction: "DPDP individual right vs RBI institutional policy", alignmentStatus: "yellow" },
    { topicId: 9, name: "Data Processors / LSPs Accountability", dpdpReq: "Data Fiduciary liable for Data Processor acts (Section 8)", rbiReq: "RE liable for LSP acts and omissions (Para 5)", similarity: "Both hold primary entity accountable", contradiction: "None", alignmentStatus: "green" },
    { topicId: 10, name: "Biometric Data", dpdpReq: "No specific restrictions; regular treatment", rbiReq: "No biometric data unless statutorily allowed (Para 13)", similarity: "Both recognize sensitive nature", contradiction: "RBI restricts; DPDP silent", alignmentStatus: "red" },
    { topicId: 11, name: "Data Quality for Decisions", dpdpReq: "Data must be complete, accurate, consistent (Section 8)", rbiReq: "Obtain sufficient economic data for assessment (Para 7)", similarity: "Both require adequate data quality", contradiction: "DPDP accuracy focus vs RBI sufficiency", alignmentStatus: "yellow" },
    { topicId: 12, name: "Special Protection for Children", dpdpReq: "Parental consent, no tracking/behavioral ads (Section 9)", rbiReq: "No specific provisions for children", similarity: "Both recognize need for enhanced protection", contradiction: "DPDP specific; RBI silent", alignmentStatus: "red" },
    { topicId: 13, name: "Consent Withdrawal Ease", dpdpReq: "Withdrawal as easy as giving consent (Section 6)", rbiReq: "Options to restrict/revoke consent available (Para 12)", similarity: "Both allow withdrawal", contradiction: "DPDP specifies ease parity requirement", alignmentStatus: "yellow" },
    { topicId: 14, name: "Legitimate Uses Without Consent", dpdpReq: "Broad exceptions (state, legal, medical, employment, security) (Section 7)", rbiReq: "Narrow exception (statutory/regulatory sharing only) (Para 12)", similarity: "Both allow regulatory exceptions", contradiction: "DPDP broad vs RBI narrow", alignmentStatus: "red" }
  ],

  implementationPhases: [
    { phaseNum: 1, title: "Assessment & Planning", duration: "0-3 months", activities: ["Data Audit - Identify all personal data, storage, purposes", "Process Mapping - Document data flows and third-party sharing", "Legal Assessment - Review practices against DPDP", "Consent Review - Audit existing consent mechanisms", "Third-party Contracts Review - LSP/Processor agreements", "Gap Analysis Report - Document compliance gaps"] },
    { phaseNum: 2, title: "Policy Development", duration: "3-6 months", activities: ["Data Protection Impact Assessment (SDFs)", "Privacy Policy Development", "Data Retention Policy", "Consent Request Templates", "Grievance Redressal SOP", "Data Breach Response Plan", "DPO Appointment (SDFs)", "Third-party Audit Framework"] },
    { phaseNum: 3, title: "Technical Implementation", duration: "6-9 months", activities: ["Data Localization - Servers in India", "Consent Management System", "Data Access Controls & Encryption", "Data Subject Rights Portal", "Breach Detection & Monitoring", "Automated Notification System", "LSP Integration Updates", "Technology Standards Compliance"] },
    { phaseNum: 4, title: "Process Alignment", duration: "9-12 months", activities: ["Consent Management Training", "Data Minimization Process", "Purpose Limitation Enforcement", "Borrower Disclosure Update", "Website & App Updates", "KFS & Disclosure Document Updates", "Company-wide Training"] },
    { phaseNum: 5, title: "Ongoing Monitoring", duration: "12+ months", activities: ["Regular Audits", "DPA Execution", "Consent Renewal", "Data Subject Requests Processing", "Breach Monitoring", "DLA Reporting to RBI", "Policy Updates", "Third-party Compliance Checks"] }
  ],

  criticalActions: [
    { actionId: 1, action: "Determine Significant Data Fiduciary Status", impact: "Determines enhanced obligations (DPO, Auditor, DPIA)", deadline: "Immediate", section: "Section 10" },
    { actionId: 2, action: "Audit All Consent Mechanisms", impact: "Must provide notice for pre-DPDP consents", deadline: "Upon commencement", section: "Section 5" },
    { actionId: 3, action: "Implement Data Localization", impact: "Non-compliance leads to penalties", deadline: "Before commencement", section: "Section 3, RBI Para 13" },
    { actionId: 4, action: "Create Data Processing Agreements", impact: "Legal requirement; RE liable for LSP", deadline: "Before commencement", section: "Section 8(2)" },
    { actionId: 5, action: "Establish Breach Notification", impact: "Mandatory notification requirement", deadline: "Before commencement", section: "Section 8(6)" },
    { actionId: 6, action: "Create Consent Request Templates", impact: "Non-compliance invalidates consent", deadline: "3 months", section: "Section 5, 6" },
    { actionId: 7, action: "Implement Data Subject Rights Portal", impact: "Enables Data Principals to enforce rights", deadline: "6 months", section: "Section 11, 12, 13" },
    { actionId: 8, action: "Publish Privacy Policy", impact: "Mandatory disclosure requirement", deadline: "Immediate", section: "Section 8(9), RBI Para 14" }
  ],

  penalties: [
    { violation: "Processing without lawful basis/consent", penaltyAmount: "Up to ₹500 crore or 5% turnover", section: "Section 31" },
    { violation: "Unauthorized disclosure", penaltyAmount: "Up to ₹500 crore or 5% turnover", section: "Section 32" },
    { violation: "Failure to protect against breaches", penaltyAmount: "Up to ₹100 crore or 2% turnover", section: "Section 33" },
    { violation: "Failure to honor data subject rights", penaltyAmount: "Up to ₹100 crore or 2% turnover", section: "Section 33" }
  ],

  commonQuestions: [
    { qId: 1, question: "When does DPDP come into force?", answer: "Exact date to be notified by Central Government. Different provisions may have different commencement dates." },
    { qId: 2, question: "Am I a Significant Data Fiduciary?", answer: "If you process large volumes/sensitive data with potential national security impact, you may be notified as SDF by government." },
    { qId: 3, question: "What is a data processing agreement?", answer: "A contract between Data Fiduciary and Data Processor defining roles, rights, and compliance obligations." },
    { qId: 4, question: "How do I get consent from borrowers?", answer: "Use clear, plain-language consent forms giving specific, informed, unconditional, unambiguous consent with easy withdrawal option." },
    { qId: 5, question: "What is data localization?", answer: "All personal data must be stored in India. If processed outside, must be deleted within 24 hours." },
    { qId: 6, question: "What should my privacy policy include?", answer: "Data collected, purposes, storage, retention, third-party sharing, rights, grievance process, DPO contact." },
    { qId: 7, question: "How quickly must I respond to data subject requests?", answer: "No specific timeline in DPDP; should establish reasonable SLAs (suggest 30 days)." },
    { qId: 8, question: "What happens if I have a data breach?", answer: "Must notify Data Protection Board and affected individuals within timeframe to be prescribed in rules." }
  ]
};

// Navigation
function initNavigation() {
  const navBtns = document.querySelectorAll('.nav-btn');
  const views = document.querySelectorAll('.view');

  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetView = btn.getAttribute('data-view');
      
      navBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      views.forEach(v => v.classList.remove('active'));
      document.getElementById(`${targetView}-view`).classList.add('active');
    });
  });
}

// Navigate to specific section
function navigateToSection(view, sectionId) {
  const navBtn = document.querySelector(`[data-view="${view}"]`);
  if (navBtn) navBtn.click();
  
  setTimeout(() => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, 100);
}

// Dashboard - Card navigation
function initDashboardCards() {
  const cards = document.querySelectorAll('.card-clickable');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const target = card.getAttribute('data-navigate');
      const navBtn = document.querySelector(`[data-view="${target}"]`);
      if (navBtn) navBtn.click();
    });
  });
}

// Render Critical Actions on Dashboard
function renderCriticalActions() {
  const container = document.getElementById('critical-actions-list');
  if (!container) return;

  const html = appData.criticalActions.slice(0, 4).map(action => `
    <div class="card">
      <div class="card__body">
        <h4>${action.action}</h4>
        <p style="font-size: var(--font-size-sm); color: var(--color-text-secondary); margin: var(--space-8) 0;">${action.impact}</p>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: var(--space-12);">
          <span class="status status--error">Deadline: ${action.deadline}</span>
          <span style="font-size: var(--font-size-sm); color: var(--color-text-secondary);">${action.section}</span>
        </div>
      </div>
    </div>
  `).join('');

  container.innerHTML = html;
}

// Render DPDP Chapters
function renderDPDPChapters() {
  const container = document.getElementById('dpdp-chapters');
  if (!container) return;

  const html = appData.dpdpChapters.map(chapter => `
    <div class="accordion-item" id="chapter-${chapter.chapterNum}">
      <div class="accordion-header" onclick="toggleAccordion(this)">
        <div>
          <div class="accordion-title">Chapter ${chapter.chapterNum}: ${chapter.title}</div>
        </div>
        <span class="accordion-icon">▼</span>
      </div>
      <div class="accordion-content">
        <div class="accordion-body">
          ${chapter.sections.map(section => `
            <div class="section-item">
              <div class="section-num">Section ${section.num}: ${section.title}</div>
              <p style="margin-top: var(--space-8); color: var(--color-text-secondary);">${section.keyPoint}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');

  container.innerHTML = html;
}

// Render Penalties Table
function renderPenaltiesTable() {
  const container = document.getElementById('penalties-table');
  if (!container) return;

  const html = `
    <table class="comparison-table">
      <thead>
        <tr>
          <th>Violation</th>
          <th>Penalty Amount</th>
          <th>Section Reference</th>
        </tr>
      </thead>
      <tbody>
        ${appData.penalties.map(penalty => `
          <tr>
            <td>${penalty.violation}</td>
            <td><strong>${penalty.penaltyAmount}</strong></td>
            <td>${penalty.section}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;

  container.innerHTML = html;
}

// Render RBI Sections
function renderRBISections() {
  const container = document.getElementById('rbi-sections');
  if (!container) return;

  const html = appData.rbiSections.map((section, idx) => `
    <div class="accordion-item" id="para-${section.paraNum}">
      <div class="accordion-header" onclick="toggleAccordion(this)">
        <div>
          <div class="accordion-title">Para ${section.paraNum}: ${section.title}</div>
        </div>
        <span class="accordion-icon">▼</span>
      </div>
      <div class="accordion-content">
        <div class="accordion-body">
          <p>${section.keyPoint}</p>
        </div>
      </div>
    </div>
  `).join('');

  container.innerHTML = html;
}

// Toggle Accordion
function toggleAccordion(header) {
  const item = header.parentElement;
  const isOpen = item.classList.contains('open');
  
  // Close all accordions in the same container
  const container = item.parentElement;
  container.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('open'));
  
  // Toggle current
  if (!isOpen) {
    item.classList.add('open');
  }
}

// Render Comparison Topics
function renderComparisonTopics() {
  const container = document.getElementById('comparison-container');
  if (!container) return;

  const html = appData.overlappingTopics.map(topic => `
    <div class="comparison-card" data-alignment="${topic.alignmentStatus}" id="topic-${topic.topicId}">
      <div class="comparison-header">
        <div class="comparison-title">${topic.topicId}. ${topic.name}</div>
        <span class="alignment-badge ${topic.alignmentStatus}">
          ${topic.alignmentStatus === 'green' ? 'Aligned' : topic.alignmentStatus === 'yellow' ? 'Different Focus' : 'Contradiction'}
        </span>
      </div>
      <div class="comparison-body">
        <div class="comparison-row">
          <div class="comparison-column">
            <h4>DPDP Requirement</h4>
            <p>${topic.dpdpReq}</p>
          </div>
          <div class="comparison-column">
            <h4>RBI Requirement</h4>
            <p>${topic.rbiReq}</p>
          </div>
        </div>
        <div class="comparison-footer">
          <strong>Similarity:</strong> ${topic.similarity}<br>
          ${topic.contradiction !== 'None' ? `<strong style="color: var(--color-error);">⚠️ Contradiction:</strong> ${topic.contradiction}` : ''}
        </div>
      </div>
    </div>
  `).join('');

  container.innerHTML = html;
}

// Render Comparison Matrix
function renderComparisonMatrix() {
  const container = document.getElementById('comparison-matrix');
  if (!container) return;

  const html = `
    <thead>
      <tr>
        <th>Topic</th>
        <th>DPDP Requirement</th>
        <th>RBI Requirement</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      ${appData.overlappingTopics.map(topic => `
        <tr>
          <td><strong>${topic.name}</strong></td>
          <td>${topic.dpdpReq}</td>
          <td>${topic.rbiReq}</td>
          <td><span class="alignment-badge ${topic.alignmentStatus}">
            ${topic.alignmentStatus === 'green' ? '✓ Aligned' : topic.alignmentStatus === 'yellow' ? '◐ Different' : '✗ Conflict'}
          </span></td>
        </tr>
      `).join('')}
    </tbody>
  `;

  container.innerHTML = html;
}

// Filter Comparison Topics
function setupComparisonFilter() {
  const filter = document.getElementById('alignment-filter');
  if (!filter) return;

  filter.addEventListener('change', (e) => {
    const value = e.target.value;
    const cards = document.querySelectorAll('.comparison-card');
    
    cards.forEach(card => {
      if (value === 'all' || card.getAttribute('data-alignment') === value) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
}

// Render Implementation Timeline
function renderTimeline() {
  const container = document.getElementById('timeline-container');
  if (!container) return;

  const colors = ['var(--color-bg-1)', 'var(--color-bg-2)', 'var(--color-bg-3)', 'var(--color-bg-6)', 'var(--color-bg-5)'];

  const html = appData.implementationPhases.map((phase, idx) => `
    <div class="phase-card" id="phase-${phase.phaseNum}">
      <div class="phase-header" style="background: ${colors[idx % colors.length]};">
        <h3>Phase ${phase.phaseNum}: ${phase.title}</h3>
        <div class="phase-duration">Duration: ${phase.duration}</div>
      </div>
      <div class="phase-body">
        ${phase.activities.map(activity => `
          <div class="activity-item">
            <span style="margin-right: var(--space-8);">•</span>${activity}
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  container.innerHTML = html;
}

// Render Critical Actions Checklist
function renderChecklist() {
  const container = document.getElementById('checklist-container');
  if (!container) return;

  const html = appData.criticalActions.map(action => `
    <div class="checklist-item">
      <input type="checkbox" id="check-${action.actionId}" data-action="${action.actionId}">
      <div class="checklist-content">
        <div class="checklist-action">${action.action}</div>
        <div class="checklist-meta">
          <strong>Impact:</strong> ${action.impact} | 
          <strong>Deadline:</strong> ${action.deadline} | 
          <strong>Reference:</strong> ${action.section}
        </div>
      </div>
    </div>
  `).join('');

  container.innerHTML = html;
}

// Render FAQ
function renderFAQ() {
  const container = document.getElementById('faq-container');
  if (!container) return;

  const html = appData.commonQuestions.map(q => `
    <div class="faq-item">
      <div class="faq-question" onclick="toggleFAQ(this)">
        ${q.question}
        <span class="accordion-icon">▼</span>
      </div>
      <div class="faq-answer" style="display: none;">
        ${q.answer}
      </div>
    </div>
  `).join('');

  container.innerHTML = html;
}

function toggleFAQ(element) {
  const answer = element.nextElementSibling;
  const icon = element.querySelector('.accordion-icon');
  
  if (answer.style.display === 'none') {
    answer.style.display = 'block';
    icon.style.transform = 'rotate(180deg)';
  } else {
    answer.style.display = 'none';
    icon.style.transform = 'rotate(0deg)';
  }
}

// Setup Topic Filters
function setupTopicFilters() {
  const container = document.getElementById('topic-filters');
  if (!container) return;

  const topics = ['consent', 'storage', 'grievance', 'penalties', 'lsp', 'children', 'breach', 'rights'];
  const html = topics.map(topic => `
    <button class="filter-chip" data-topic="${topic}" onclick="filterByCategory('${topic}')">
      ${topic.charAt(0).toUpperCase() + topic.slice(1)}
    </button>
  `).join('');

  container.innerHTML = html;
}

// Search Functionality
function performSearch() {
  const input = document.getElementById('search-input');
  const query = input.value.toLowerCase().trim();
  const resultsContainer = document.getElementById('search-results');

  if (!query) {
    resultsContainer.innerHTML = '<p style="color: var(--color-text-secondary);">Enter a search query to find relevant information.</p>';
    return;
  }

  const results = [];

  // Search DPDP chapters
  appData.dpdpChapters.forEach(chapter => {
    chapter.sections.forEach(section => {
      if (section.title.toLowerCase().includes(query) || section.keyPoint.toLowerCase().includes(query)) {
        results.push({
          title: `DPDP Section ${section.num}: ${section.title}`,
          snippet: section.keyPoint,
          source: 'DPDP Act',
          link: `chapter-${chapter.chapterNum}`
        });
      }
    });
  });

  // Search RBI sections
  appData.rbiSections.forEach(section => {
    if (section.title.toLowerCase().includes(query) || section.keyPoint.toLowerCase().includes(query)) {
      results.push({
        title: `RBI Para ${section.paraNum}: ${section.title}`,
        snippet: section.keyPoint,
        source: 'RBI Guidelines',
        link: `para-${section.paraNum}`
      });
    }
  });

  // Search overlapping topics
  appData.overlappingTopics.forEach(topic => {
    if (topic.name.toLowerCase().includes(query) || topic.dpdpReq.toLowerCase().includes(query) || topic.rbiReq.toLowerCase().includes(query)) {
      results.push({
        title: topic.name,
        snippet: `DPDP: ${topic.dpdpReq} | RBI: ${topic.rbiReq}`,
        source: 'Comparison Analysis',
        link: `topic-${topic.topicId}`
      });
    }
  });

  if (results.length === 0) {
    resultsContainer.innerHTML = '<p style="color: var(--color-text-secondary);">No results found. Try different keywords.</p>';
    return;
  }

  const html = `
    <h3>Search Results (${results.length})</h3>
    ${results.map(result => `
      <div class="search-result-item">
        <div class="result-title">${result.title}</div>
        <div class="result-snippet">${result.snippet}</div>
        <div class="result-meta">
          <span class="status status--info">${result.source}</span>
        </div>
      </div>
    `).join('')}
  `;

  resultsContainer.innerHTML = html;
}

// Filter by Category
function filterByCategory(category) {
  const input = document.getElementById('search-input');
  input.value = category;
  performSearch();
  
  // Highlight active filter
  document.querySelectorAll('.filter-chip').forEach(chip => {
    if (chip.getAttribute('data-topic') === category) {
      chip.classList.add('active');
    } else {
      chip.classList.remove('active');
    }
  });
}

// Initialize search on Enter key
function initSearchInput() {
  const input = document.getElementById('search-input');
  if (input) {
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        performSearch();
      }
    });
  }
}

// Initialize Application
function init() {
  initNavigation();
  initDashboardCards();
  renderCriticalActions();
  renderDPDPChapters();
  renderPenaltiesTable();
  renderRBISections();
  renderComparisonTopics();
  renderComparisonMatrix();
  setupComparisonFilter();
  renderTimeline();
  renderChecklist();
  renderFAQ();
  setupTopicFilters();
  initSearchInput();
}

// Run on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}