// All site content lives here. Edit this file to change what the site says.
// `draft: true` marks text written from the old site that Talin still needs to confirm or rewrite.
// `todo` marks content that does not exist yet.

window.DATA = {
  profile: {
    name: "Talin Russo-Christoffelsz",
    short: "Talin",
    email: "talinphoenix@gmail.com",
    github: "https://github.com/TalinR-C",
    githubLabel: "github.com/TalinR-C",
    linkedin: "https://www.linkedin.com/in/talin-russo-christoffelsz-71967a179", // from Talin's Academy notes
    resume: null, // Talin took the résumé download off the site on 2026-10-22. Set a PDF path (e.g. "assets/Resume_TalinRusso-Christoffelsz.pdf") to bring back the links.
    facts: [
      { label: "Studying", value: "Bachelor of Computer Science, RMIT University, 2024 to 2027" },
      { label: "Focus", value: "Product development and product direction" },
      { label: "Builds with", value: "Swift, Python, FlutterFlow, C++, and AI coding tools" }
    ],
    // The About section: three numbered items.
    about: [
      { title: "Study", text: "I study Computer Science at RMIT University. The part I enjoy most is working out what a product should do and how people will use it, which is why I want to work in product development." },
      { title: "Passion", text: "I care about helping people improve themselves. Losing control of ourselves to our phones is a problem I have, and I think most people do, so I'm building Elevated to help. It's where I practise product design for real: three launches of the first version, and now a rebuild I'm testing with real users. At the Apple Developer Academy in Bali I do the same work in teams, from interviews with users to builds on TestFlight." },
      { title: "Interests", text: "Surfing, soccer (football), going to the gym and keeping fit in general." }
    ]
  },

  skillGroups: [
    { id: "languages", name: "Languages" },
    { id: "platforms", name: "Platforms and frameworks" },
    { id: "product", name: "Product and design" },
    { id: "tools", name: "Tools and methods" }
  ],

  skills: [
    { id: "python", name: "Python", mono: "Py", group: "languages" },
    { id: "swift", name: "Swift", mono: "Sw", group: "languages" },
    { id: "cpp", name: "C++", mono: "C++", group: "languages" },
    { id: "javascript", name: "JavaScript", mono: "JS", group: "languages" },
    { id: "dart", name: "Dart", mono: "Da", group: "languages" },
    { id: "java", name: "Java", mono: "Jv", group: "languages" },
    { id: "sql", name: "SQL", mono: "SQL", group: "languages" },
    { id: "htmlcss", name: "HTML and CSS", mono: "HC", group: "languages" },

    { id: "swiftui", name: "SwiftUI", mono: "SU", group: "platforms" },
    { id: "arkit", name: "ARKit and RealityKit", mono: "AR", group: "platforms" },
    { id: "flutterflow", name: "FlutterFlow", mono: "FF", group: "platforms" },
    { id: "firebase", name: "Firebase", mono: "Fb", group: "platforms" },
    { id: "pandas", name: "Pandas", mono: "Pd", group: "platforms" },
    { id: "pytorch", name: "PyTorch", mono: "PT", group: "platforms" },
    { id: "gcloud", name: "Google Cloud", mono: "GC", group: "platforms" },

    { id: "research", name: "User research", mono: "Rs", group: "product" },
    { id: "wireframing", name: "Wireframing", mono: "Wf", group: "product" },
    { id: "prototyping", name: "Prototyping", mono: "Pt", group: "product" },
    { id: "uidesign", name: "UI design", mono: "UI", group: "product" },
    { id: "figma", name: "Figma", mono: "Fg", group: "product" },
    { id: "pm", name: "Project management", mono: "PM", group: "product" },

    { id: "ml", name: "Machine learning", mono: "ML", group: "tools" },
    { id: "signal", name: "Signal processing", mono: "SP", group: "tools" },
    { id: "algorithms", name: "Algorithms", mono: "Alg", group: "tools" },
    { id: "testing", name: "Testing", mono: "Te", group: "tools" },
    { id: "apis", name: "API integration", mono: "API", group: "tools" },
    { id: "git", name: "Git and GitHub", mono: "Git", group: "tools" },
    { id: "dataviz", name: "Data visualisation", mono: "Dv", group: "tools" },
    { id: "writing", name: "Technical writing", mono: "Tw", group: "tools" },
    { id: "xcode", name: "Xcode", mono: "Xc", group: "tools" },
    { id: "jira", name: "Jira", mono: "Ji", group: "tools" },
    { id: "ai", name: "AI coding tools", mono: "AI", group: "tools" }
  ],

  projects: [
    {
      id: "elev8ed",
      title: "Elevated",
      kind: "Self-improvement app for iPhone",
      type: "Personal project",
      years: "2024 to now",
      span: "January 2024 to now",
      cover: "assets/projects/Elev8edLogo.png",
      summary: "A self-improvement app for iPhone: set a goal, do its habits each day, and review what worked every week.",
      does: "Elevated turns a goal into a campaign. You choose up to two habits for it, each with an if-then plan and something to set up the night before, and tick them off each day in the Arena. Every seven days you look back at what worked, then keep, adjust or drop each habit. Progress shows on a mountain map, and every habit done adds to the armour of the attribute it builds.",
      did: "I research, design and build it myself. The first version, made in FlutterFlow, launched publicly three times. In 2026 I rebuilt it natively in SwiftUI, from new research through paper lo-fi and Figma designs, and I'm now testing it with real users on TestFlight.",
      product: "iOS app",
      role: "Solo founder: product, design and build",
      team: "Solo",
      link: { label: "Open the Elevated site", href: "https://elev8edapp.github.io/Elev8edApp/" },
      abstract: [
        "Elevated is for young men moving into a life they run themselves, with big ambitions and a history of starting and falling off. Its rules come from that: no streaks, because a missed day should be something to learn from rather than a source of guilt, and no comparing one user with another.",
        "The first version, built in FlutterFlow and Firebase from 2024, launched publicly three times and passed 75 downloads. In March 2026 I started again with new research, then designed and prototyped the new version, partly as my solo challenge at the Apple Developer Academy, and built it in SwiftUI with home-screen widgets, reminders and analytics. It is now in testing: I watch people use it, fix what confuses them, and send each new build out on TestFlight."
      ],
      flow: {
        nodes: [
          { label: "Research", sub: "Who it's for, why they fall off" },
          { label: "Design the solution", sub: "Campaigns, habits, weekly review" },
          { label: "Prototype", sub: "Paper lo-fi, then Figma hi-fi" },
          { label: "Build", sub: "SwiftUI, widgets, analytics" },
          { label: "Watch people use it", sub: "Fix what confuses them" },
          { label: "Send a build out", sub: "TestFlight, feedback, the funnel" }
        ],
        loop: { from: 4, to: 6, label: "Each test round ends in a new build" }
      },
      media: ["Screenshot: today's habits in the Arena", "Screenshot: the Journey map", "Screenshot: Reflect and Iterate", "Screenshot: the first version, 2024"],
      problems: [
        { problem: "Streaks turn one missed day into guilt, and guilt makes people quit.", fix: "Elevated has no streaks. A missed habit is something to learn from at the weekly review, and progress marks only ever go up.", draft: true },
        { problem: "In the first watched session of the new version, people got confused in places.", fix: "Listed each confusion and fixed them, then ran two more watched sessions to check the fixes worked before sending the build out.", draft: true },
        { problem: "The app kept its game words, like Arena, Journey and Kit, but lost the character who explained them, so new users see the words with nothing saying why.", fix: "Deciding, from this round's feedback, between no character, a consistent voice, or a character.", draft: true },
        { problem: "The first version's testers got lost in the navigation and the walkthrough.", fix: "Reworked the walkthrough and onboarding, then relaunched with the refined flow and a clearer interface.", draft: true }
      ],
      findings: [
        { head: "Watching shows why; the numbers show whether.", body: "A watched session tells me why someone is confused. Sending the build out tells me whether they come back, measured as logging a habit on four of their first seven days.", draft: true },
        { head: "Each launch changed the app.", body: "The second and third launches of the first version shipped changes that came out of the feedback from the one before.", draft: true },
        { todo: "Your own words: what did Elevated teach you about product decisions that you did not know going in?" }
      ],
      skills: [
        { id: "swiftui", how: "The whole app and its three home-screen widgets" },
        { id: "swift", how: "App logic, local data and reminders" },
        { id: "firebase", how: "Analytics, from onboarding to the first habit logged; the first version's back end" },
        { id: "ai", how: "Coding agents build from my requirements and designs; I review and test every build" },
        { id: "figma", how: "Hi-fi designs and the design system" },
        { id: "research", how: "Research into who it's for, watched sessions and TestFlight feedback" },
        { id: "wireframing", how: "Paper lo-fi for every user flow" },
        { id: "uidesign", how: "A game-inspired interface, from the first version to the rebuild" },
        { id: "flutterflow", how: "The first version, 2024 to 2025" },
        { id: "xcode", how: "Builds and TestFlight releases" }
      ]
    },
    {
      id: "ecg",
      title: "Home ECG for Children",
      kind: "Heart-monitoring app for children",
      type: "Apple Developer Academy project",
      years: "2026 to now",
      span: "October 2026 to now",
      cover: null,
      coverTodo: "Cover image: a screen from the app, or the vest",
      summary: "An iPhone app that helps parents of children with heart disease take a prescribed ECG at home and know what to do next.",
      does: "It guides a parent to fit a five-electrode ECG vest on their child, checks the signal is clean, records for the time the doctor prescribed, and compares the recording with the child's own hospital baseline. If something looks off, or the model is unsure, the parent is told to contact their doctor. It is a monitoring and early-warning tool, not a diagnostic one.",
      did: "I'm doing the machine learning and signal processing: cleaning the raw ECG, the signal check that decides whether a recording is usable, and the model that flags recordings that look abnormal, with its reasons saved for doctors.",
      product: "iOS app and ECG model",
      role: "Machine learning and signal processing",
      team: "Team of six",
      abstract: [
        "In Indonesia, children aged 3 to 10 with heart disease are sent home once they are strong enough to leave, but still fragile enough that a problem could be found too late. Their doctors usually see their ECGs only in hospital, and recommend one or two short recordings at home each day. This app makes that something a worried parent can do without a nurse: a guided fit, a signal check, the prescribed length of recording, then a simple result and the next step. We are building it with a children's heart hospital in Jakarta, whose doctors approve every instruction, and the university lab that built the vest.",
        "My part is the machine learning and the signal processing. Raw recordings are filtered, cut into 10-second windows and checked for quality before anything is judged. The model learns from a public dataset of 14,190 ECGs from 11,643 children, split by child so it is never tested on a child it has already seen, and it is tuned to catch abnormal rhythms first, because a missed problem is worse than a false alarm. The work is in progress, and hand-over is planned for late November 2026."
      ],
      flow: {
        nodes: [
          { label: "Understand the data", sub: "14,190 ECGs, 11,643 children" },
          { label: "Decide the labels", sub: "Normal or abnormal" },
          { label: "Check signal quality", sub: "Before and during recording" },
          { label: "Preprocess", sub: "Filter, downsample, 10-second windows" },
          { label: "Split by child", sub: "No child in both training and test" },
          { label: "Train and test", sub: "A baseline model, then an RNN" }
        ]
      },
      media: ["Figure: a 10-second ECG window before and after filtering", "Figure: the three layers of the signal check", "Screenshot: the result a parent sees"],
      problems: [
        { problem: "Children move and cry, and a parent can't tell a bad recording from a bad heart.", fix: "A three-layer signal check runs before and during recording: is data arriving, does it look like a heartbeat, and is each electrode usable. Only clean recordings get judged.", draft: true },
        { problem: "Some children have several ECGs in the dataset, so a careless split lets the model recognise a child it has already seen and look better than it is.", fix: "Split training, validation and test by child, and kept the test set to the children the app is for: aged 3 to 10, with a long-term heart condition.", draft: true },
        { problem: "A missed problem is worse than a false alarm, but too many false alarms make parents stop trusting the device.", fix: "Set the decision threshold for high sensitivity on the target children, and every unsure result becomes a calm \"please contact your doctor\" rather than a diagnosis.", draft: true }
      ],
      findings: [
        { head: "The most common finding is often harmless.", body: "In this dataset the most common finding is a fast but regular heartbeat, which in children often comes from fever, crying or a scary hospital visit. Deciding what counts as abnormal had to start there.", draft: true },
        { todo: "Once tested: how does the model do on the children the app is for?" },
        { todo: "What did testing with parents or doctors change?" }
      ],
      skills: [
        { id: "python", how: "The data pipeline, the signal check and the experiments" },
        { id: "pytorch", how: "The RNN that flags abnormal rhythms" },
        { id: "signal", how: "Filtering, R-peak detection, windowing and signal quality checks" },
        { id: "ml", how: "Labels, a split by child, a baseline model, then an RNN tuned for sensitivity" },
        { id: "pandas", how: "Reads the dataset's metadata and diagnosis codes" },
        { id: "dataviz", how: "Plots of signals, spectra and results" }
      ]
    },
    {
      id: "bikebike",
      title: "Bike Bike",
      kind: "AR racing game for iPhone",
      type: "Apple Developer Academy project",
      years: "2026",
      span: "June to July 2026",
      cover: "assets/projects/BikeBikeIcon.png",
      coverIcon: true,
      summary: "An augmented-reality racing game for iPhone: up to six friends in one room race delivery motorbikes around a city track on a table.",
      does: "Players drop a 3D city track onto any flat surface, pick a delivery driver and bike, and race each other with drifts and a speed boost. Finishing positions earn one to five stars, and haptics mark collisions, boosts and the finish line.",
      did: "I was project manager for a team of five. I ran the idea session and the vote that chose the game, kept the team aligned through building and play testing, and designed and built screens myself, including the home page, the multiplayer banner and the nickname screen.",
      product: "iOS game",
      role: "Project manager and UI",
      team: "Team of five",
      abstract: [
        "The challenge was to make something that makes sense with at least one Apple framework, used properly. We explored ARKit, RealityKit, Object Capture and Reality Composer, narrowed it to ARKit and RealityKit, and chose a tabletop racing game: friends drop a track onto any desk, scale it to fit, and race without scanning the room first.",
        "We wrote a tech report and a game design document, built the game, changed what we didn't like after each play test, then put it on TestFlight. At the Academy exhibition, people at our booth installed it more than 80 times and gave us feedback while they played."
      ],
      flow: {
        nodes: [
          { label: "Explore the frameworks", sub: "ARKit, RealityKit, Object Capture" },
          { label: "Get the ideas out", sub: "A timed brain dump" },
          { label: "Choose one", sub: "Three votes each, then a matrix" },
          { label: "Plan", sub: "Tech report and game design document" },
          { label: "Build and play test", sub: "Change what doesn't work" },
          { label: "Ship", sub: "TestFlight and the exhibition" }
        ]
      },
      media: ["Screenshot: the track on a table", "Screenshot: the multiplayer lobby", "Photo: the exhibition booth"],
      problems: [
        { problem: "Five people had five different ideas, and a team works hardest on an idea it believes in.", fix: "Put a timer on the brain dump, gave everyone three votes, then plotted the favourites on a matrix of fun against doable in the time, so the choice started from what the team liked.", draft: true },
        { problem: "Scanning a room before a race is slow, and the fun is in starting fast with friends.", fix: "Used ARKit's plane detection, so the track drops onto any flat surface and can be scaled to fit it.", draft: true }
      ],
      findings: [
        { head: "A team works hardest on an idea it chose.", body: "Because everyone liked the idea we landed on, everyone was invested and worked hard on it.", draft: true },
        { head: "Take the lead from day one.", body: "I started out holding back as project manager and only took the lead as the challenge went on. Next time I'll step into the role from the start.", draft: true }
      ],
      skills: [
        { id: "swiftui", how: "Menus, lobby, HUD and results screens" },
        { id: "arkit", how: "Plane detection, and the 3D track and bikes" },
        { id: "uidesign", how: "The home page, multiplayer banner and nickname screen" },
        { id: "pm", how: "Ran the idea session, the vote and the team's plan" },
        { id: "git", how: "A shared GitHub repository with branches" }
      ]
    },
    {
      id: "placement",
      title: "Student Placement Algorithm",
      kind: "Matching tool for a university",
      type: "Personal project",
      years: "2025",
      span: "Second half of 2025",
      cover: "assets/projects/StudentMatching.png",
      summary: "A Python tool that matches students to placements by balancing their preferences against travel distance.",
      does: "It reads spreadsheets of student preferences and placement openings, estimates travel distance with a mapping API, and proposes who goes where.",
      did: "I talked with university staff about how allocation works, analysed their spreadsheets, then designed and built the matching tool. It was finished in 2025 but has not been used for a real allocation round yet.",
      product: "Internal tool",
      role: "Solo: discovery, algorithm and build",
      team: "Solo",
      abstract: [
        "This project automates how students are allocated to placement sites. The system takes Excel files of student details, with their ranked preferences and home location, and a list of business openings, then applies an algorithm that balances how close a placement is against how highly the student ranked it.",
        "The aim was a tool university staff could use themselves: one that raises the share of good matches, removes manual work, and lets them choose whether closeness to home or preference rank matters more. The tool is finished, but it has not been used for a real allocation round yet."
      ],
      flow: {
        nodes: [
          { label: "Talk to staff", sub: "How allocation works today" },
          { label: "Analyse the spreadsheets", sub: "Schema and edge cases" },
          { label: "Design the matching", sub: "Distance against preference" },
          { label: "Prototype", sub: "Python, Pandas, distance API" },
          { label: "Staff interface", sub: "Upload, review results" },
          { label: "Validate", sub: "Real sample data" }
        ]
      },
      media: ["Figure: a sample allocation result", "Figure: the input spreadsheets"],
      problems: [
        { problem: "Close to home and high on the preference list often pull in different directions.", fix: "The algorithm weighs both, and staff can set which one matters more for a given round.", draft: true },
        { problem: "Staff allocate by hand from spreadsheets and should not have to change how they work first.", fix: "The tool reads their existing Excel files as they are.", draft: true }
      ],
      findings: [
        { todo: "What did the conversation with staff change about your first idea?" },
        { todo: "On sample data: how many students got one of their top preferences?" }
      ],
      skills: [
        { id: "python", how: "The matching algorithm and the data pipeline" },
        { id: "pandas", how: "Reads and cleans the Excel inputs" },
        { id: "algorithms", how: "Matching that weighs distance against preference rank" },
        { id: "apis", how: "Geocoding and travel distance" },
        { id: "research", how: "Requirements conversations with university staff" }
      ]
    },
    {
      id: "maze",
      title: "Minecraft Maze Generator",
      kind: "Group project in C++",
      type: "University project",
      years: "2024",
      span: "August to November 2024",
      cover: "assets/projects/MazeGenerator.jpg",
      coverPixel: true,
      summary: "A recursive-backtracking maze generator built into a Minecraft C++ codebase with a team.",
      does: "It generates perfect mazes and builds them block by block inside Minecraft, ready for the team's solver to run through.",
      did: "I wrote the generator in C++17, integrated it with the shared codebase, added a deterministic test mode with black-box tests, and agreed the interfaces with my teammates.",
      product: "Minecraft expansion, RMIT",
      role: "Maze generation, testing and integration",
      team: "Group project",
      abstract: [
        "A team project to build a MazeRunner expansion for Minecraft using the mcpp C++ API. My part was the maze generator: a recursive-backtracking algorithm in C++17 that produces perfect mazes, integrated with the shared codebase so it worked with the build and clean-up routines and with the solver.",
        "I wrote tests for my part, worked out interface contracts with teammates, and helped produce the test cases and the demonstration video."
      ],
      flow: {
        nodes: [
          { label: "Agree interfaces", sub: "Contracts with teammates" },
          { label: "Write the generator", sub: "Recursive backtracking, C++17" },
          { label: "Make it repeatable", sub: "Deterministic test mode" },
          { label: "Test", sub: "Black-box input and output" },
          { label: "Integrate", sub: "Solver, build and clean-up" },
          { label: "Build in Minecraft", sub: "In-game visualisation" }
        ]
      },
      media: ["Screenshot: a generated maze inside Minecraft", "Figure: the generator's output in test mode"],
      problems: [
        { problem: "A random maze cannot be tested by comparing it with an expected result.", fix: "Added a deterministic mode so the same input always produces the same maze, then wrote black-box tests against it.", draft: true },
        { problem: "Several people were changing one codebase at the same time.", fix: "Defined the interfaces first and kept the generator modular, so merges stayed small and easy to review.", draft: true }
      ],
      findings: [
        { todo: "What did you learn about working in a shared codebase?" },
        { todo: "What would you do differently on the next team project?" }
      ],
      skills: [
        { id: "cpp", how: "The recursive-backtracking generator in C++17" },
        { id: "algorithms", how: "Recursive backtracking, breadth-first search on the solver side" },
        { id: "testing", how: "Deterministic mode and black-box tests" },
        { id: "git", how: "A shared repository with small, reviewed merges" },
        { id: "writing", how: "The README and usage notes" }
      ]
    }
  ],

  // Hidden from the site for now (Talin, 2026-10-22). Move a project back into `projects` to show it again.
  archived: [
    {
      id: "peak",
      title: "Peak",
      kind: "iOS focus and screen-time app",
      type: "University project",
      years: "2025 to now",
      span: "August 2025 to now",
      cover: "assets/projects/PeakLogo.png",
      coverInvert: true,
      summary: "An iOS app that turns time away from distracting apps into a climb up a mountain.",
      does: "Peak blocks the apps that distract you during a focus session and shows the time you stay focused as progress up a mountain.",
      did: "I defined the concept and the user journeys, designed the screens against Apple's Human Interface Guidelines, and am building it in SwiftUI with the Family Controls API.",
      product: "iOS app",
      role: "Product, design and development",
      team: { todo: "Solo or team?" },
      abstract: [
        "Peak is a productivity app written in Swift that helps people stay off their phones and keep their focus. Its core idea is to reframe time spent away from distracting apps as progress up a mountain, with visual milestones that reward consistency.",
        "It is built with SwiftUI and follows Apple's Human Interface Guidelines. Family Controls manages which apps are available during a focus session, and contextual touches such as weather-based themes change how the climb looks."
      ],
      flow: {
        nodes: [
          { label: "Define the metaphor", sub: "Focus as a climb" },
          { label: "Map user journeys", sub: "Start, focus, return" },
          { label: "Wireframe", sub: "Design system to Apple's guidelines" },
          { label: "Build", sub: "SwiftUI views, timer, animation" },
          { label: "Block distractions", sub: "Family Controls API" },
          { label: "Reward consistency", sub: "Milestones, progress tracking" }
        ]
      },
      media: ["Screenshot: a focus session in progress", "Screenshot: the mountain and milestones", "Screenshot: choosing apps to block"],
      problems: [
        { problem: "A focus timer on its own is easy to ignore.", fix: "Reframed focused time as altitude gained on a climb, with milestones that reward coming back every day.", draft: true },
        { problem: "The app has to actually stop distracting apps, which iOS does not allow freely.", fix: "Integrated Apple's Family Controls API to restrict the apps a person chooses for the length of a session.", draft: true }
      ],
      findings: [
        { todo: "What did building against Family Controls teach you?" },
        { todo: "What would you change about the mountain idea now that people have seen it?" }
      ],
      skills: [
        { id: "swift", how: "All app logic, including the focus timer" },
        { id: "swiftui", how: "Views, animation and progress feedback" },
        { id: "apis", how: "Family Controls for app blocking, a weather API for themes" },
        { id: "wireframing", how: "User journeys and screen wireframes" },
        { id: "uidesign", how: "A design system that follows Apple's guidelines" },
        { id: "xcode", how: "Build, debugging and device testing" },
        { id: "git", how: "Version control" }
      ]
    },
    {
      id: "knapsack",
      title: "Knapsack-Maze Solver",
      kind: "Algorithms assignment",
      type: "University project",
      years: "2025",
      span: "March to May 2025",
      cover: "assets/projects/KnapsackSolver.png",
      coverGray: true,
      summary: "Two knapsack solvers and maze pathfinding that collect the most treasure a weight limit allows.",
      does: "Given a maze scattered with treasures of different weights and values, it decides which to collect and finds the shortest route to collect them.",
      did: "I implemented a recursive solver and a dynamic-programming solver, breadth-first pathfinding between treasures, and an exploration strategy for mazes where the treasure is hidden, then benchmarked them against each other.",
      product: "Algorithms assignment, RMIT",
      role: "Design, implementation and analysis",
      team: { todo: "Individual?" },
      abstract: [
        "A university assignment for Algorithms and Analysis. I implemented and evaluated several strategies for the Knapsack-Maze challenge: a recursive backtracking solver, a dynamic-programming solver that exports its table to CSV, and a pathfinding system that uses breadth-first search to find the shortest paths between the entrance, each treasure and the exit.",
        "For the variant where treasures are hidden, I designed an exploration strategy that balances expected treasure value against the cost of exploring further. I ran experiments comparing runtimes, and wrote up the theoretical complexity alongside the measured results."
      ],
      flow: {
        nodes: [
          { label: "Model the maze", sub: "Cells and walls as a graph" },
          { label: "Find shortest paths", sub: "Breadth-first search" },
          { label: "Choose the treasure", split: ["Recursive solver", "Dynamic-programming solver"] },
          { label: "Order the route", sub: "Search the permutations" },
          { label: "Benchmark", sub: "Time, plot, compare with theory" }
        ]
      },
      media: ["Figure: runtime plot, recursive against dynamic programming", "Figure: a solved maze with the chosen route"],
      problems: [
        { problem: "When treasure locations are hidden, the full route cannot be planned up front.", fix: "Designed a heuristic that weighs the expected value of unseen treasure against the cost of exploring to find it.", draft: true },
        { problem: "Two solvers give the same answer, so which one should be used and when?", fix: "Ran timed experiments, exported the dynamic-programming table to CSV, and plotted the runtimes against the predicted complexity.", draft: true }
      ],
      findings: [
        { todo: "The headline result: where did recursion stop being usable?" },
        { todo: "What surprised you when the measured runtimes met the theory?" }
      ],
      skills: [
        { id: "python", how: "Both solvers, the pathfinding and the experiments" },
        { id: "algorithms", how: "Dynamic programming, backtracking, breadth-first search, heuristic search" },
        { id: "dataviz", how: "Runtime plots with matplotlib" },
        { id: "testing", how: "Modular, testable code and repeatable experiments" },
        { id: "writing", how: "A report with complexity analysis and results" },
        { id: "git", how: "Version control on GitHub" }
      ]
    }
  ]
};
