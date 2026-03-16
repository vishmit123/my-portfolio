import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Computer Scientist 2</h4>
                <h5>Adobe</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Took ownership of enabling product globalization using Generative
              AI, designing and delivering AI-driven workflows to scale
              localization efforts. Customized and integrated LLM-based plugins
              to support multiple content modalities. Led backend and UI
              development teams, mentoring new hires and driving performance
              optimization.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Computer Scientist 1</h4>
                <h5>Adobe</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Led backend and UI development teams, driving architecture, design,
              and execution of scalable engineering initiatives. Designed and
              built globalisation enablement platforms supporting products used by
              millions of users worldwide.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Member of Technical Staff 2</h4>
                <h5>Adobe</h5>
              </div>
              <h3>2019</h3>
            </div>
            <p>
              Transitioned into an SRE role specialising in AWS and cloud
              infrastructure; automated team processes reducing turnaround time
              from 1 week to 2 minutes. Built a UI application from scratch for
              the Globalisation team, used by thousands of vendors.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Member of Technical Staff 1</h4>
                <h5>Adobe</h5>
              </div>
              <h3>2017</h3>
            </div>
            <p>
              Developed and maintained the Devices Portal using Ruby on Rails;
              later led its migration to ServiceNow. Contributed to the Adobe Hub
              app and Tech Café Android app used across Adobe.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intern</h4>
                <h5>Intel Corporation</h5>
              </div>
              <h3>2017</h3>
            </div>
            <p>
              Built an NLP-powered system to consolidate related service tickets
              into unified, trackable bugs/features, improving triage accuracy
              and reducing duplicate engineering effort.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
