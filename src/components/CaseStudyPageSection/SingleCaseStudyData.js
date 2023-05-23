const SingleCaseStudyData = [
  {
    key: 1,
    title: "Health Insurance Industry",
    link: "health-insurance-industry",
    desc: `<p>
    HealthInsurance is a financial bridge created between the payer, provider, and
    patient. The producers are providers (clinical business) and payers (private
    government), and the consumers are patients. The patient puts in a clinical
    request; the provider provides the clinical facility and the payer is billed
    for the transaction. The portals are used by providers to log services used by
    patients and payers to view and process transactions.
    </p>
    <p>
      The system is developed using PHP and .NET but is not limited to only this,
      there are many tools that are being developed to alter the system for
      fulfillment of specific needs of health insurance payers and clinical
      providers.
    </p>`,
    challenge: `<p>We had several challenges while developing E2E test automation 
    framework for this system, but the major challenge was the legacy application’s 
    reliance on locally and not cloud-hosted tools and the browser protocols were
    restricted</p>`,
    solution: `<p>Forthis system we had to design a framework that does not interrupt the 
    application's legacy functionalities and automates the locally available tools. A framework 
    is designed that is modified for the functionalities of the application without stopping 
    the development of new features and navigates between applications portals smoothly</p>`,
    result: `<p>As a result, the testing time and regression cycle are reduced by 2 times. 
    Automated tests are running fast and frequently and provide rapid and early 
    feedback in each cycle. This produced automated E2E tests and semi-automated 
    non-functional tests</p>`,
    image: require("../../assets/images/keyService/3.jpg"),
  },
  {
    key: 2,
    title: "Automated Testing reduces maintenance costs for Healthcare Solutions provider",
    link: "automated-testing-for-healthcare-solutions-provider",
    desc: `<p>R1RCM - as an organization, is dealing in providing healthcare solutions by revolutionizing how patients 
    receive care along with better outcomes across the primary care continuum. OF Facilitator is a web-based application consisting of client and admin site where client can schedule an order and later 
    view/print it. However, admin site is responsible to maintain data to be displayed on client site, from 
    creating doctor accounts to providing facility center information. It was demanded to develop an 
    automated framework to execute regression suite to test its management applications respectively in 
    terms of scheduled, non-scheduled & referral orders created with certain values set from Admin site.</p>`,
    challenge: `<ul>
      <li>
        The manual end to end testing of major areas like client dashboard, order
        creation and setting admin values concludes approximately 1500 test cases
        which was increasing the release time of the product with every sprint
        delivered.
      </li>
      <li>
        The continuous testing in an iterative release process was proving to be a
        challenging task.
      </li>
      <li>
        The application had to be tested in diverse environments on different
        browsers.
      </li>
      <li>
        The application performance had to be constantly maintained to meet the
        defined SLAs so that customers can have a seamless experience.
      </li>
    </ul>`,
    solution: `<p>The best option was to automate using Java as general scripting language
    combined with open source tools such as selenium and testNG that allows us to:</p>
    <ul>
      <li>Parallel execution of script</li>
      <li>Less time to create and maintain scripts.</li>
      <li>Develop page object model to handle elements and methods effectively.</li>
      <li>
        Utils class to contain methods actions, verifications, taking screenshots &
        adding of loggers
      </li>
      <li>
        Connect with Excel sheet to handle multiple user accounts and URL navigation
        for each test case
      </li>
      <li>Create an Extent report</li>
      <li>
        Implement CI/CD pipeline to achieve on-demand test execution on different
        browsers
      </li>
    </ul>`,
    result: `<h6>70% reduction in test execution time</h6>
    <p>
      We helped the client move towards a Shift-left testing approach in the
      development lifecycle which significantly reduced the testing time.
    </p>
    <h6>Better process workflows</h6>
    <p>
      The framework helped the client to quickly identify the improvement areas in
      the lifecycle and execute the tests on-demand.
    </p>
    <h6>Improvement in SLAs</h6>
    <p>
      Automation enabled end to end testing before release is deployed onto
      production environments, meeting the highest standards of quality for the
      customers which brought a major boost.
    </p>
    <h6>Early Identification of Bugs</h6>
    <p>
      Bug's screenshot attached on the extent report, enabled effective action to be
      taken after every version released.
    </p>`,
    image: require("../../assets/images/keyService/3.jpg"),
  },
  {
    key: 3,
    title: "An open directory platform that simplifies IT management.",
    link: "open-directory-platform-simplifies-IT-management",
    desc: `<p>The tool makes it simple for businesses to integrate their identity, access, and device management technology stacks in a way
    that saves money without compromising security or functionality. It allows to create, secure and manage all the Users in a 
    centralized manner wherein access can be controlled with easy to create Policies that can serve to protect company data without 
    interrupting the day-to-day work flow.</p>`,
    challenge: `<p>The Major challenge was to setup a Local Environment 
    that can easily be used to replicate the entire existing 
    Platform, and services, along with the newer changes that 
    are being introduced to make sure that the service performs 
    to its optimum. This includes replicating the Front-End (UI 
    and General User Workflow) and the Back-End (Databases 
    and APIs).</p>`,
    solution: `<p>We replicated the entire directory platform along with all its Back-End 
    services locally, using Docker and AWS; essentially setting up a local 
    workstation. It makes it easier for us to test out everything by simply 
    configuring our workstation with the relevant Pull-Request Branch from GitHub.</p>`,
    result: `<p>Businesses and organizations can use it to manage and secure all their Users, 
    Applications, Wi-Fi networks, VPNs etc. It allows easy cross-OS Device 
    Management, including Mobile Devices.</p>`,
    image: require("../../assets/images/keyService/3.jpg"),
  },
];

export default SingleCaseStudyData;
