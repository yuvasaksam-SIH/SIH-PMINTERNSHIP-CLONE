import React from 'react';
function App() {
  return (
    <>
      {/* TOP NAV */}
      <header className="topbar">
        <div className="topbar-left">
          {/* Corrected image path */}
          <img className="gov-logo" src="/mca-logo.png"alt="Ministry of Corporate Affairs Logo" />
        </div>
        <div className="topbar-left">
          {/* Corrected image path */}
          <img className="gov-logo" src="/pm-internship-logo.png"alt="Prime Minister Internship Scheme Logo" />
        </div>
       
        <nav className="topnav">
          <ul>
            <li><strong>�FAQs</strong></li>
            <li><strong>📜Guidelines</strong></li>
            <li><strong>🤝Partner Companies</strong></li>
            <li><strong>📒Manuals</strong></li>
            <li><strong>👨🏼‍💻Tutorials / Videos</strong></li>
          </ul>
        </nav>
        
        <div className="top-actions">
          <button className="btn btn-outline">Apply Insurance</button>
          <button className="btn btn-primary">My Bharat Portal</button>
           <img className="lan-logo" src="/language logo.png" alt="Language Logo" />

        </div>
                 

      </header>

      {/* MAIN GRID */}
      <main className="container">
        {/* LEFT SIDEBAR */}
        <aside className="sidebar">
          <div className="card profile-card">
            
             <img className="avatar-logo" src="/candidate logo2.png" alt="candidateLogo" />
            <div className="candidate-id">Candidate ID</div>
            <div className="profile-completed">Profile Completed: <strong>0%</strong></div>
            <nav className="profile-links">
              <a href="#">View Profile / CV</a>
              <a href="#">Change Password</a>
              <a href="#" className="logout">Sign Out</a>
            </nav>
          </div>
          <div className="card grievance">
            <h4>File a Grievance</h4>
            <button className="btn btn-danger w-full">New Grievance</button>
            <div className="griev-status">
              <div className="label">Grievance Status</div>
              <div className="value">Pending: <strong>0️⃣</strong></div>
              <div className="value">Disposed: <strong>🅾️</strong></div>
              <div className="value">Clarification Asked: <strong>🅾️</strong></div>
              <div className="value">Document(s)Asked: <strong>🅾️</strong></div>
              <div className="value">Interim Reply: <strong>🅾️</strong></div>
              <div className="value">Re-Submitted: <strong>🅾️</strong></div>
              <div className="value">Raised Appeal: <strong>🅾️</strong></div>
               <div className="value">Final Disposed: <strong>🅾️</strong></div>
            </div>
          </div>
        </aside>

        {/* CENTER CONTENT */}
        <section className="content">
          <div className="nav-links">
           <a href="" class="active">My Current Status</a>
             <a href="">Internship Oppertunities</a>
             <a href="">My Internship</a>
               <a href="">News&Events</a>
               <a href="">Refer A Friend</a>
                </div>
<div>
            <div className="progressbar">
              <div className="progress-step completed"><p>Registration</p></div>
              <div className="progress-step completed"><p>Profile</p></div>
              <div className="progress-step completed"><p>My Application</p></div>
              <div className="progress-step completed"><p>Offer Received</p></div>
              <div className="progress-step completed"><p>Offer Accepted</p></div>
              <div className="progress-step completed"><p>Physically Joined</p></div>
              <div className="progress-step active"><p>Internship Started</p></div>
              <div className="progress-step"><p>Internship Completed</p></div>
            </div>
          </div>

          <div className="card profile-steps-card">
            <h3>Candidate Profile</h3>
            <ol className="profile-steps">
              <li className="ps active">1 <span>e-KYC</span></li>
              <li className="ps">2 <span>Personal Details</span></li>
              <li className="ps">3 <span>Contact Details</span></li>
              <li className="ps">4 <span>Education Details</span></li>
              <li className="ps">5 <span>Bank Details</span></li>
              <li className="ps">6 <span>Skills & Languages</span></li>
              <li className="ps">7 <span>Profile Completed</span></li>
            </ol>
            <div className="ekyc-box">
              <h4>Aadhaar based e-KYC</h4>
              <div className="ekyc-options">
                <button className="btn btn-outline">Aadhaar e-KYC</button>
                <button className="btn btn-purple">Digilocker</button>
              </div>
              <label className="field-label">Aadhaar Number / Virtual ID *</label>
              <input className="field" type="text" placeholder="Enter Aadhaar number or VID" />

            </div>
            
            
          </div>
               
               

        </section>

        {/* RIGHT NOTIFICATIONS */}
        <aside className="notifications">
          <div className="card">
            <h3>Notifications🔔</h3>   
            <div className="note">
              <div className="note-date">May 28, 2025 at 11:25</div>
              <div className="note-title">Action Required: Confirm Your Internship Joining on the PMIS</div>
            </div>
            <div className="note">
              <div className="note-date">May 23, 2025 at 19:00</div>
              <div className="note-title">PMIS Internship Selection Process – Action RequiredAction Required – How to Accept Your PM Internship Offer

Dear Candidate, To accept your internship offer, please fol...

June 2, 2025 at 14:42

Now check the status of your Aadhaar-seeded bank account dir...

Dear Candidate, You can now check the status of your Aadhaa...

May 28, 2025 at 11:25

Action Required: Confirm Your Internship Joining on the PMIS...

Dear Intern, Kindly log in to the PMIS Portal to confirm yo...

May 23, 2025 at 19:00

PMIS Internship Selection Process – Action Required

Dear Candidates, We are pleased to inform you that the scree...

April 24, 2025 at 23:37</div>
            </div>
          </div>
          <img className="help-logo" src="/need help logo.png" alt=" Need Help Logo" />
          <img className="d2-logo" src="/do's dont's logo.png" alt=" Need Help Logo" />
        </aside>
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <div>© PM Internship Scheme, MCA. All Rights Reserved.</div>
        <div>Technical collaboration with <strong>BISAG-N</strong></div>
      </footer>
    </>
  );
}

export default App;