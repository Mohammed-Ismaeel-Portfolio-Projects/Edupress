/**
 * EduPress Detailed Course Content (Demo Data)
 * 
 * Fictional educational demo content designed to showcase a complete,
 * production-quality LMS experience for each of the six courses.
 * All lesson totals strictly match the existing metadata in Courses.js.
 */

const courseDetails = {
  "commercial-design-basics": {
    courseId: "commercial-design-basics",
    shortDesc: "Master foundational principles of spatial planning, brand alignment, building codes, and material selection for modern commercial environments.",
    overview: "Commercial Design Basics introduces the multidisciplinary framework behind high-impact commercial interiors. Students explore how architecture, human psychology, accessibility guidelines, and brand identity coalesce in corporate, retail, and public spaces. Through rigorous case studies and step-by-step drafting exercises, you will develop the technical competence and creative fluency needed to transform empty commercial shells into high-performing, customer-centric destinations.",
    learningObjectives: [
      "Interpret commercial floor plates and structural constraints for non-residential spaces.",
      "Apply international accessibility (ADA/IBC) codes and egress safety requirements.",
      "Develop cohesive material boards balanced for heavy foot traffic, acoustics, and maintenance.",
      "Integrate corporate identity, color psychology, and sensory branding into built environments.",
      "Coordinate mechanical, electrical, and lighting schedules with core architectural designs."
    ],
    targetAudience: "Aspiring interior designers, junior architects, space planners, and property developers seeking foundational mastery of commercial design standards.",
    prerequisites: "Basic familiarity with architectural drawings and drafting terminology. No advanced CAD license required.",
    learningOutcomes: [
      "Produce compliant schematic space plans for corporate and hospitality facilities.",
      "Evaluate commercial grade textiles, finishes, and hard surfacing materials.",
      "Formulate lighting and acoustic specifications tailored to employee wellness.",
      "Present professional client design concepts and schematic documentation."
    ],
    skills: ["Spatial Planning", "Building Code Compliance", "Commercial Materials", "Architectural Lighting", "Brand Integration", "Space Programming"],
    faqs: [
      {
        question: "Does this course focus on residential or commercial architecture?",
        answer: "This course is strictly centered on commercial environments including retail, enterprise workspaces, and hospitality venues."
      },
      {
        question: "Are CAD software licenses provided with this course?",
        answer: "Software licenses are not provided. The exercises are software-agnostic and can be completed using AutoCAD, Revit, SketchUp, or physical drafting."
      },
      {
        question: "Is prior commercial design experience required?",
        answer: "No prior commercial experience is required. A general understanding of design principles and scale will help you get started smoothly."
      },
      {
        question: "What is the expected weekly study commitment?",
        answer: "Expect to invest approximately 4 to 6 hours per week over the 2-week course duration."
      }
    ],
    instructorProfile: {
      name: "Kenny White",
      title: "Commercial Architectural Designer & Design Educator",
      bio: "Kenny White is an interior designer and architectural educator specializing in large-scale commercial space planning and workplace strategy. He has consulted on corporate headquarters, retail rollouts, and experiential hospitality projects across North America.",
      expertise: ["Workplace Strategy", "Building Codes & Life Safety", "Sustainable Material Specification", "Commercial Construction Documents"],
      teachingFocus: "Demystifying technical building standards and helping students bridge the gap between creative visual concepts and constructible architectural drawings."
    },
    // Total lessons: 20 (Course 1 metadata: lessons: 20, weeks: 2)
    curriculum: [
      {
        moduleNumber: 1,
        title: "Module 1: Principles of Commercial Space Planning",
        duration: "1 Week • 10 Lessons",
        lessons: [
          { title: "Introduction to Commercial Interiors vs Residential", duration: "18m", desc: "Key differences in scale, code compliance, durability, and user flow." },
          { title: "Programming and Client Needs Analysis", duration: "24m", desc: "Techniques for interviewing stakeholders and compiling spatial briefs." },
          { title: "Analyzing Shell Space and Building Cores", duration: "22m", desc: "Understanding structural columns, riser shafts, and core facilities." },
          { title: "Circulation Arteries and Primary Egress", duration: "30m", desc: "Designing primary, secondary, and tertiary circulation corridors." },
          { title: "Universal Design and Accessibility Compliance", duration: "28m", desc: "Clearances, ramps, turning radii, and inclusive spatial access." },
          { title: "Occupancy Loads and Life Safety Standards", duration: "35m", desc: "Calculating occupant loads, exit path widths, and fire ratings." },
          { title: "Zoning Public, Semi-Private, and Private Realms", duration: "20m", desc: "Creating spatial transitions between client-facing and back-of-house areas." },
          { title: "Acoustical Zoning and Noise Attenuation", duration: "25m", desc: "Sound transmission classes, acoustic baffles, and ceiling assemblies." },
          { title: "Daylighting and Architectural Orientation", duration: "22m", desc: "Harnessing natural light while mitigating glare and solar thermal gain." },
          { title: "Schematic Space Plan Workshop", duration: "40m", desc: "Practical exercise: Drafting your first commercial bubble diagram and layout." }
        ]
      },
      {
        moduleNumber: 2,
        title: "Module 2: Materials, Finishes, and Technical Integration",
        duration: "1 Week • 10 Lessons",
        lessons: [
          { title: "Commercial Flooring Systems and Traffic Ratings", duration: "26m", desc: "Carpet tile, polished concrete, terrazzo, and resilient flooring." },
          { title: "Wall Coverings, Millwork, and Hard Surfaces", duration: "24m", desc: "Durable wall protections, architectural woodwork, and corner guards." },
          { title: "Commercial Textile Ratings (Wyzenbeek and ACT)", duration: "20m", desc: "Abrasion resistance, flame retardance, and antimicrobial coatings." },
          { title: "Ceiling Systems: Open Plenum vs Suspended Grids", duration: "22m", desc: "Coordinating ductwork, sprinklers, and acoustic ceiling tiles." },
          { title: "Architectural Lighting Design for Workspaces", duration: "30m", desc: "Ambient, task, and accent lighting layers; Kelvin and CRI standards." },
          { title: "Power Distribution and Data Pathways", duration: "28m", desc: "Core drills, poke-throughs, raised access flooring, and wall drops." },
          { title: "HVAC Integration and Air Distribution", duration: "25m", desc: "Diffusers, return air paths, and thermal comfort considerations." },
          { title: "Brand Identity Translation in Physical Space", duration: "32m", desc: "Environmental graphics, signage, and branded sensory touchpoints." },
          { title: "Compiling a Complete Commercial Finish Schedule", duration: "35m", desc: "Formatting professional FF&E specifications for contractors." },
          { title: "Final Commercial Capstone Presentation", duration: "45m", desc: "Reviewing complete commercial floor plans and finish schedules." }
        ]
      }
    ]
  },

  "office-interior-layouts": {
    courseId: "office-interior-layouts",
    shortDesc: "Design modern, productive, and flexible hybrid workplace environments tailored for contemporary organizational cultures.",
    overview: "Office Interior Layouts provides an in-depth exploration of corporate workplace strategy, activity-based working (ABW), and modern office planning methodologies. You will analyze how shifts toward hybrid schedules, agile collaboration, and focus-intensive tasks dictate workstation densities, ergonomic interventions, and partition geometries. Learn how to craft layouts that elevate worker health, foster organic connection, and optimize commercial square footage.",
    learningObjectives: [
      "Formulate activity-based workplace ratios based on headcount and hybrid working patterns.",
      "Design diverse zones supporting collaboration, quiet focus, privacy, and social rejuvenation.",
      "Implement advanced ergonomic guidelines for sit-stand desking and display ergonomics.",
      "Integrate acoustic privacy solutions in open-plan corporate work floors.",
      "Produce comprehensive office furniture, fixture, and equipment (FF&E) floor layouts."
    ],
    targetAudience: "Interior architects, facility managers, workplace strategists, and commercial interior design students wanting specialized expertise in office design.",
    prerequisites: "General understanding of floor plans and commercial construction terms.",
    learningOutcomes: [
      "Calculate modern desk-sharing ratios and space programming allocations.",
      "Draft modular workstation clusters and collaborative meeting hubs.",
      "Specify privacy phone booths, acoustic dividers, and sound masking systems.",
      "Develop sustainable office layouts adhering to WELL and LEED environmental benchmarks."
    ],
    skills: ["Workplace Strategy", "Hybrid Office Planning", "Ergonomic Systems", "Acoustic Partitioning", "Space Optimization", "FF&E Specification"],
    faqs: [
      {
        question: "Does this course address post-pandemic hybrid office models?",
        answer: "Yes, contemporary hybrid attendance, shared desking ratios, and flexible conference facilities form the core curriculum."
      },
      {
        question: "Will I learn about ergonomic standards?",
        answer: "Yes, ergonomic requirements for task seating, monitor arms, desk heights, and sightlines are examined in detail."
      },
      {
        question: "Are office technology requirements covered?",
        answer: "Video conferencing meeting room dimensions, cable management, and AV equipment clearances are integrated into the space planning modules."
      },
      {
        question: "How is student progress assessed?",
        answer: "Progress is demonstrated through three milestone space-planning submissions culminating in a complete corporate floor plate proposal."
      }
    ],
    instructorProfile: {
      name: "John Doe",
      title: "Senior Workplace Architect & Space Planner",
      bio: "John Doe brings two decades of international workplace planning experience, having led major corporate headquarters redevelopments across global tech, finance, and professional service sectors.",
      expertise: ["Activity-Based Workplace Design", "Ergonomics & Human Factors", "Acoustic Optimization", "Corporate Space Planning"],
      teachingFocus: "Guiding learners through data-driven space programming, flexible desking geometries, and evidence-based workplace wellness."
    },
    // Total lessons: 30 (Course 2 metadata: lessons: 30, weeks: 4)
    curriculum: [
      {
        moduleNumber: 1,
        title: "Module 1: Workplace Strategy & Space Programming",
        duration: "1 Week • 8 Lessons",
        lessons: [
          { title: "Evolution of Office Layouts: Cubicle to Hybrid", duration: "20m", desc: "Historical context and drivers shaping today's corporate spaces." },
          { title: "Activity-Based Working (ABW) Fundamentals", duration: "25m", desc: "Defining task-oriented environments for focus, collaboration, and learning." },
          { title: "Headcount Studies and Desk-Sharing Ratios", duration: "28m", desc: "Mathematical models for unassigned desking and peak day utilization." },
          { title: "Departmental Adjacencies and Stacking Diagrams", duration: "30m", desc: "Organizing vertical and horizontal relationships across teams." },
          { title: "Core Circulation vs Secondary Department Flow", duration: "22m", desc: "Maintaining clear paths of travel without cutting through focus areas." },
          { title: "Support Space Ratios: Pantries, Print, and Storage", duration: "24m", desc: "Calculating secondary amenity square footages per employee." },
          { title: "Wellness Standards (WELL and Fitwel) in Office Planning", duration: "32m", desc: "Biophilic elements, active design, and hydration stations." },
          { title: "Space Programming Spreadsheet Workshop", duration: "35m", desc: "Building a dynamic Excel programming model for client inputs." }
        ]
      },
      {
        moduleNumber: 2,
        title: "Module 2: Open-Plan Desking & Ergonomics",
        duration: "1 Week • 8 Lessons",
        lessons: [
          { title: "Bench Desking vs 120-Degree Workstations", duration: "26m", desc: "Comparing layout footprint, cable routing, and visual privacy." },
          { title: "Height-Adjustable Sit-to-Stand Furniture Integration", duration: "24m", desc: "Clearance requirements, anti-collision safety, and electrical load." },
          { title: "Task Seating Ergonomics and Human Factors", duration: "22m", desc: "BIFMA standards, lumbar support, and armrest adjustability." },
          { title: "Monitor Arm Layouts and Visual Fatigue Mitigation", duration: "20m", desc: "Sightline distances, dual monitor setups, and window glare." },
          { title: "Cable Management Systems: Spine, Umbilicals, and Troughs", duration: "25m", desc: "Hiding data and power runs in open bench configurations." },
          { title: "Desktop Privacy Screens and Demountable Partitions", duration: "23m", desc: "Acoustic fabric screens, glass dividers, and modesty panels." },
          { title: "Storage Towers and Personal Locker Banks", duration: "21m", desc: "Allocating end-of-bench lockers for hot-desking offices." },
          { title: "Open Office Layout Lab", duration: "40m", desc: "Drafting a 50-person modular benching floor section." }
        ]
      },
      {
        moduleNumber: 3,
        title: "Module 3: Collaborative Hubs & Meeting Architecture",
        duration: "1 Week • 7 Lessons",
        lessons: [
          { title: "Meeting Room Typologies: Huddle, Medium, and Boardroom", duration: "28m", desc: "Standard room proportions and capacity formulas." },
          { title: "Video Conferencing Sightlines and Camera Geometries", duration: "30m", desc: "Trapezoidal tables, microphone positioning, and acoustic wall panels." },
          { title: "Phone Booths and Micro-Privacy Pods", duration: "22m", desc: "Prefabricated pods, air ventilation rates, and placement strategy." },
          { title: "Casual Collaboration Lounges and Soft Seating", duration: "25m", desc: "Integrating power-equipped banquettes and modular ottomans." },
          { title: "Townhall and All-Hands Multipurpose Spaces", duration: "27m", desc: "Reconfigurable furniture, mobile whiteboards, and AV staging." },
          { title: "Demountable Glass Wall Systems and Acoustic Seals", duration: "26m", desc: "STC ratings, sliding glass doors, and drop seals." },
          { title: "Meeting Suite Schematic Design Review", duration: "35m", desc: "Critique of conference and collaborative layout plans." }
        ]
      },
      {
        moduleNumber: 4,
        title: "Module 4: Technical Coordination & Comprehensive Capstone",
        duration: "1 Week • 7 Lessons",
        lessons: [
          { title: "Acoustic Planning: Ceiling Baffles and Sound Masking", duration: "28m", desc: "Pink noise emitters, NRC ratings, and reverberation control." },
          { title: "Emergency Egress Pathways in High-Density Offices", duration: "25m", desc: "Travel distance limits, illuminated exit signage, and door swings." },
          { title: "Pantry and Breakroom Plumbing Infrastructure", duration: "22m", desc: "Wet column access, grease traps, and waste line slope requirements." },
          { title: "Wayfinding and Corporate Signage Integration", duration: "20m", desc: "Room numbering, digital scheduling displays, and directional cues." },
          { title: "Compiling the Complete Furniture Schedule and Plan", duration: "34m", desc: "Keying furniture codes, vendor specs, and finishes." },
          { title: "Value Engineering without Sacrificing Layout Quality", duration: "26m", desc: "Cost-reduction strategies in finishes and workstation systems." },
          { title: "Final Comprehensive Corporate Layout Presentation", duration: "45m", desc: "Walkthrough of a complete, compliant 20,000 sq ft office plan." }
        ]
      }
    ]
  },

  "shop-renovation-guide": {
    courseId: "shop-renovation-guide",
    shortDesc: "Plan and execute retail store renovations that optimize visual merchandising, foot-traffic conversion, and commercial ROI.",
    overview: "Shop Renovation Guide walks learners through the technical, operational, and commercial demands of retail boutique and storefront renovations. Covering everything from sightline optimization and customer pathing (decompression zones, loop layouts, and power walls) to fixture engineering, permit logistics, and lighting temperatures, this course arms commercial renovators and retail owners with practical tools to deliver profitable retail transformations on schedule and within budget.",
    learningObjectives: [
      "Analyze retail customer traffic flow patterns and identify high-conversion visual zones.",
      "Design effective decompression zones, focal points, and checkout point-of-sale areas.",
      "Select high-durability commercial retail fixtures, vitrines, and display hardware.",
      "Plan lighting schemes that dramatize merchandise without distorting product color fidelity.",
      "Manage contractor timelines, landlord work letters, and retail permit milestones."
    ],
    targetAudience: "Retail store owners, commercial contractors, visual merchandisers, and interior designers focusing on brick-and-mortar storefronts.",
    prerequisites: "Basic understanding of retail operations and basic spatial measurements.",
    learningOutcomes: [
      "Develop retail customer journey floor plans with optimized merchandise density.",
      "Specify commercial display systems and custom architectural cash wraps.",
      "Design retail storefront windows and facade signage compliant with local bylaws.",
      "Formulate a renovation phasing schedule minimizing store downtime."
    ],
    skills: ["Retail Spatial Planning", "Visual Merchandising", "Storefront Architecture", "Commercial Renovation Budgeting", "Retail Lighting", "Permit Logistics"],
    faqs: [
      {
        question: "Is this course applicable to both small boutiques and large retail stores?",
        answer: "Yes, the principles scale from 500 sq ft specialty boutiques to 10,000 sq ft department floors."
      },
      {
        question: "Does the course cover building permits and landlord negotiations?",
        answer: "Yes, Module 3 covers landlord work letters, tenant improvement allowances, and municipal permit submittals."
      },
      {
        question: "What lighting concepts will be taught?",
        answer: "You will master Color Rendering Index (CRI > 90), beam spreads, track lighting accents, and display cabinet backlighting."
      },
      {
        question: "Are real renovation budget templates included?",
        answer: "Sample budget breakdowns, timeline Gantt templates, and fixture checklists are walked through during the lessons."
      }
    ],
    instructorProfile: {
      name: "Kenny White",
      title: "Commercial Architectural Designer & Design Educator",
      bio: "Kenny White has planned, renovated, and delivered over 40 retail shopfronts ranging from bespoke luxury jewelers to fast-casual apparel rollouts, with a focus on retail efficiency and brand impact.",
      expertise: ["Retail Architecture", "Visual Merchandising Strategies", "Storefront Restoration", "Commercial Tenant Improvements"],
      teachingFocus: "Empowering designers and store proprietors to maximize revenue per square foot through strategic architectural interventions."
    },
    // Total lessons: 25 (Course 3 metadata: lessons: 25, weeks: 3)
    curriculum: [
      {
        moduleNumber: 1,
        title: "Module 1: Retail Store Anatomy & Customer Pathing",
        duration: "1 Week • 8 Lessons",
        lessons: [
          { title: "Retail Psychology: The Anatomy of a Successful Store", duration: "22m", desc: "Understanding customer emotions, dwell times, and impulse triggers." },
          { title: "The Decompression Zone: First Impressions at the Entrance", duration: "20m", desc: "Preventing customer cognitive overload within the first 10 feet." },
          { title: "Grid vs Loop vs Free-Flow Retail Layouts", duration: "28m", desc: "Selecting the ideal layout typology for your retail merchandise type." },
          { title: "The 'Turn to the Right' Rule and The Power Wall", duration: "24m", desc: "Capitalizing on natural shopper eye movement and traffic flow." },
          { title: "Aisle Widths, Sightlines, and Product Visibility", duration: "25m", desc: "Balancing product stock density with comfortable shopping clearances." },
          { title: "Cash Wrap and Point of Sale (POS) Optimization", duration: "30m", desc: "Checkout ergonomics, queue management, and impulse add-on displays." },
          { title: "Fitting Room Architecture and Privacy Standards", duration: "26m", desc: "Spacious cubicle design, flattering mirror angles, and service buzzers." },
          { title: "Customer Journey Flow Mapping Lab", duration: "35m", desc: "Diagramming heat maps and circulation flow for a boutique floor plan." }
        ]
      },
      {
        moduleNumber: 2,
        title: "Module 2: Storefronts, Fixtures & Retail Illumination",
        duration: "1 Week • 9 Lessons",
        lessons: [
          { title: "Storefront Facades and Window Display Architecture", duration: "28m", desc: "Pedestrian sightlines, window staging platforms, and threshold design." },
          { title: "Retail Signage, Logos, and Illumination Bylaws", duration: "22m", desc: "Halo-lit letters, blade signs, and municipal outdoor signage permits." },
          { title: "Standard vs Custom Millwork and Display Fixtures", duration: "30m", desc: "Evaluating durability, modular flexibility, and manufacturing cost." },
          { title: "Slatwall, Gridwall, and Outrigger Wall Display Systems", duration: "24m", desc: "Technical specifications, shelf brackets, and face-out hanging arms." },
          { title: "Mid-Floor Gondolas, Tables, and Nesting Risers", duration: "21m", desc: "Creating vertical variation without blocking cross-store sightlines." },
          { title: "Lighting for Merchandise: CRI, Kelvin, and Lux Levels", duration: "32m", desc: "Why high-CRI 3000K-3500K lighting drives higher sales conversion." },
          { title: "Track Lighting, Accent Spots, and Showcase Backlighting", duration: "26m", desc: "Highlight ratios (3:1 and 5:1) to direct shopper gaze to hero products." },
          { title: "Security Integration: EAS Antennas, CCTV, and Glass Cases", duration: "25m", desc: "Loss prevention engineering disguised within aesthetic millwork." },
          { title: "Store Fixture and Lighting Schedule Workshop", duration: "35m", desc: "Creating a contractor-ready specification list for shop hardware." }
        ]
      },
      {
        moduleNumber: 3,
        title: "Module 3: Project Execution, Permitting & Renovation Phasing",
        duration: "1 Week • 8 Lessons",
        lessons: [
          { title: "Reviewing Landlord Work Letters and Tenant Guidelines", duration: "28m", desc: "Demising walls, HVAC tonnage, submeters, and landlord sign-off." },
          { title: "Retail Building Permits and Health/Safety Approvals", duration: "25m", desc: "Submitting drawings for architectural review and fire marshal approval." },
          { title: "Demolition and Hazardous Materials in Older Shops", duration: "22m", desc: "Lead paint, asbestos abatement, and legacy electrical remediation." },
          { title: "HVAC Balancing for High-Dwell Retail Spaces", duration: "24m", desc: "Maintaining customer comfort under heavy display lighting heat loads." },
          { title: "Flooring Selection: Heavy Foot-Traffic Durability", duration: "26m", desc: "Commercial luxury vinyl tile (LVT), engineered hardwood, and stone." },
          { title: "Night Work Phasing vs Full Store Shutdown Strategy", duration: "30m", desc: "Minimizing lost sales revenue during structural renovation phases." },
          { title: "Final Punch List, Merchandising Handover, and Soft Launch", duration: "27m", desc: "Ensuring zero defects before opening day trade." },
          { title: "Comprehensive Retail Renovation Capstone", duration: "45m", desc: "Reviewing a complete retail renovation plan, budget, and schedule." }
        ]
      }
    ]
  },

  "modern-classroom-designs": {
    courseId: "modern-classroom-designs",
    shortDesc: "Design innovative, flexible, and inclusive educational spaces that foster student engagement, collaboration, and pedagogical success.",
    overview: "Modern Classroom Designs explores the frontier of educational architecture and learning space planning. Moving beyond traditional industrial-age rows of desks, this course equips educators, educational administrators, and architects with research-backed strategies to configure dynamic, active-learning environments. Students will analyze natural acoustic treatment, daylighting optimization, mobile furniture layouts, maker-space integration, and neurodiverse-friendly sensory zoning.",
    learningObjectives: [
      "Evaluate how physical learning environments directly correlate with student cognitive performance.",
      "Design flexible classroom layouts supporting both collaborative team projects and independent focus.",
      "Specify agile, mobile school furniture adaptable to varying age groups and pedagogical modes.",
      "Implement acoustic and lighting standards that enhance speech intelligibility and reduce fatigue.",
      "Incorporate universal accessibility and sensory-friendly zones for neurodiverse students."
    ],
    targetAudience: "School administrators, institutional interior designers, K-12 and university educators, and institutional space planners.",
    prerequisites: "General interest in education and learning space design. No specialized software prerequisites.",
    learningOutcomes: [
      "Produce flexible educational floor plan schematics with rapid reconfiguration options.",
      "Formulate acoustic and lighting improvement plans for existing institutional facilities.",
      "Select safe, durable, and non-toxic educational finishes and ergonomic seating.",
      "Design specialized learning extensions including STEM maker-spaces and sensory pods."
    ],
    skills: ["Educational Space Planning", "Pedagogical Layouts", "Acoustics for Learning", "Biophilic Educational Design", "Inclusive Classrooms", "Agile Furniture"],
    faqs: [
      {
        question: "Is this course aimed at K-12 or higher education settings?",
        answer: "The design principles apply across K-12 classrooms, higher education active learning halls, and vocational training facilities."
      },
      {
        question: "Does the course cover budget-conscious classroom retrofits?",
        answer: "Yes, Module 2 focuses specifically on phased retrofits and flexible furniture upgrades for schools with limited capital budgets."
      },
      {
        question: "How do learning spaces impact neurodiverse learners?",
        answer: "We examine sensory regulation, tactile calming zones, daylight control, and quiet alcoves tailored for neurodiverse students."
      },
      {
        question: "What is the completion time for this course?",
        answer: "This intensive course spans 2 weeks with 18 high-impact video lectures and guided layout workshops."
      }
    ],
    instructorProfile: {
      name: "Alice Smith",
      title: "Educational Facility Architect & Pedagogical Design Specialist",
      bio: "Alice Smith has spent 15 years designing award-winning public schools, higher-education STEM centers, and active-learning university campuses that empower students and teachers.",
      expertise: ["Active Learning Environments", "Universal Design for Education", "Acoustic Engineering for Classrooms", "Sustainable Institutional Architecture"],
      teachingFocus: "Creating humane, daylight-filled learning environments that inspire curiosity, collaboration, and inclusive educational achievement."
    },
    // Total lessons: 18 (Course 4 metadata: lessons: 18, weeks: 2)
    curriculum: [
      {
        moduleNumber: 1,
        title: "Module 1: Pedagogical Shifts & Agile Classroom Geometries",
        duration: "1 Week • 9 Lessons",
        lessons: [
          { title: "The Death of the Traditional Rows: Modern Learning Models", duration: "20m", desc: "Why passive lecture layouts fail modern collaborative curricula." },
          { title: "Active Learning Classrooms (ALC) and Pod Geometries", duration: "25m", desc: "Configuring 4-6 student collaborative table groupings." },
          { title: "Zoning the Classroom: Presentation, Collaboration, and Quiet", duration: "24m", desc: "Creating multi-functional zones within a standard 800 sq ft room." },
          { title: "Agile, Mobile Furniture: Castors, Nesting, and Flip-Tops", duration: "26m", desc: "Enabling complete classroom reconfiguration in under 3 minutes." },
          { title: "Ergonomics for Children and Young Adults", duration: "22m", desc: "Wobble stools, standing desks, floor cushions, and postural health." },
          { title: "Wall Space as Learning Surfaces: Writable and Magnetic Walls", duration: "20m", desc: "Maximizing vertical whiteboard surfaces for active student problem-solving." },
          { title: "Technology Integration: Distributed Monitors and Wireless Sharing", duration: "28m", desc: "Screen sharing per pod without messy power cords or trip hazards." },
          { title: "Universal Design for Learning (UDL) and Sensory Considerations", duration: "30m", desc: "Designing calm corners, sensory regulation tools, and wheelchair routes." },
          { title: "Agile Classroom Schematic Drafting Exercise", duration: "35m", desc: "Designing a modular 28-student active learning classroom layout." }
        ]
      },
      {
        moduleNumber: 2,
        title: "Module 2: Environmental Health, Materials & Specialized Spaces",
        duration: "1 Week • 9 Lessons",
        lessons: [
          { title: "Classroom Daylighting and Circadian Rhythm Optimization", duration: "24m", desc: "Natural light, automated shading, and improved attention spans." },
          { title: "Acoustics in Schools: Noise Reduction and Speech Intelligibility", duration: "28m", desc: "Tackling echo, HVAC background hum, and acoustic wall panels." },
          { title: "Indoor Air Quality, CO2 Monitoring, and Cognitive Performance", duration: "22m", desc: "Ventilation rates, outdoor air delivery, and student alertness." },
          { title: "Non-Toxic Materials: Low-VOC Paints, Linoleum, and Sealants", duration: "20m", desc: "Eliminating off-gassing and asthma triggers in learning facilities." },
          { title: "STEM Labs, Maker-Spaces, and Wet Areas", duration: "32m", desc: "Floor drains, utility drop cords, safety showers, and 3D printing stations." },
          { title: "Outdoor Learning Environments and Courtyard Classrooms", duration: "25m", desc: "Shade sails, weather-resistant seating, and nature-integrated education." },
          { title: "Budget-Friendly Retrofits: Upgrading Older Schools on a Shoestring", duration: "26m", desc: "High-impact, low-cost modifications using paint, rugs, and mobile screens." },
          { title: "Teacher Workstations and Classroom Storage Solutions", duration: "23m", desc: "De-cluttering pedagogical spaces with integrated cabinetry." },
          { title: "Final Modern Learning Space Capstone Review", duration: "40m", desc: "Presentation of a complete, inclusive school learning wing project." }
        ]
      }
    ]
  },

  "minimalist-home-projects": {
    courseId: "minimalist-home-projects",
    shortDesc: "Master the art of minimalist residential architecture, concealed joinery, restrained material palettes, and purposeful living spaces.",
    overview: "Minimalist Home Projects is an advanced exploration of architectural simplicity, intentional materiality, and functional spatial purification. Students learn that true minimalism is not barren emptiness, but the deliberate subtraction of noise to reveal quality, light, and proportions. From mastering floor-to-ceiling concealed cabinetry and shadowline architectural trims to curating tactile natural finishes and sculptural focal points, this course guides you through executing serene residential masterpieces.",
    learningObjectives: [
      "Apply the core philosophical and architectural principles of intentional minimalism.",
      "Design custom concealed joinery, pocket doors, and seamless storage walls.",
      "Detail clean architectural shadowline reveals, flush baseboards, and frameless openings.",
      "Curate restrained material palettes featuring lime wash, natural oak, micro-cement, and raw stone.",
      "Engineer subtle, glare-free architectural lighting schemes with zero ceiling clutter."
    ],
    targetAudience: "Experienced interior designers, residential architects, bespoke joinery craftsmen, and design aficionados who admire Japandi and European minimalist architecture.",
    prerequisites: "Intermediate interior drafting knowledge and understanding of residential construction assemblies.",
    learningOutcomes: [
      "Draft custom full-height flush cabinetry and hidden utility compartments.",
      "Detail architectural shadowlines, frameless interior doors, and pocket tracks.",
      "Formulate cohesive tactile material specifications celebrating natural grain and patina.",
      "Deliver whole-house minimalist space plans balancing aesthetic restraint with daily storage."
    ],
    skills: ["Minimalist Architecture", "Concealed Joinery", "Shadowline Detailing", "Natural Material Palettes", "Recessed Lighting Design", "Spatial Purification"],
    faqs: [
      {
        question: "Is this course focused solely on modern white-box minimalism?",
        answer: "No, we emphasize warm, textured minimalism including Japandi, Mediterranean wabi-sabi, and Nordic architectural traditions."
      },
      {
        question: "How technical are the joinery detailing lessons?",
        answer: "Lessons examine precise millwork cross-sections, push-latch hardware, pocket door tracks, and shadowline reveals."
      },
      {
        question: "How do minimalist homes handle everyday family clutter?",
        answer: "Module 2 is entirely dedicated to 'hidden infrastructure'—deep integrated pantries, coat garages, and appliance closets."
      },
      {
        question: "What is the duration of this course?",
        answer: "This is a 5-week expert masterclass featuring 35 detailed instructional lessons."
      }
    ],
    instructorProfile: {
      name: "John Doe",
      title: "Senior Workplace Architect & Space Planner",
      bio: "John Doe brings extensive expertise in custom residential minimalist renovations, specializing in micro-cement detailing, bespoke concealed cabinetry, and architectural light wells.",
      expertise: ["Residential Minimalism", "Concealed Architectural Millwork", "Natural Patinas & Materials", "Architectural Detailing"],
      teachingFocus: "Teaching designers how to master the fine line between rigorous architectural purity and comfortable, livable residential warmth."
    },
    // Total lessons: 35 (Course 5 metadata: lessons: 35, weeks: 5)
    curriculum: [
      {
        moduleNumber: 1,
        title: "Module 1: The Philosophy & Spatial Geometry of Minimalism",
        duration: "1 Week • 7 Lessons",
        lessons: [
          { title: "Origins of Architectural Minimalism: Mies to Wabi-Sabi", duration: "25m", desc: "Understanding restraint, negative space, and intentionality in homes." },
          { title: "The Concept of 'Ma' (Negative Space) in Floor Planning", duration: "28m", desc: "Giving rooms room to breathe through purposeful spatial proportion." },
          { title: "Eliminating Visual Friction: Sightline Alignment", duration: "30m", desc: "Aligning door heads, window transoms, and cabinetry reveals." },
          { title: "Flow of Light: Windows, Atriums, and Light Wells", duration: "24m", desc: "Channeling daylight as the primary sculptural element in living areas." },
          { title: "Threshold Transitions: Flush Floors and Seamless Surfacing", duration: "26m", desc: "Eliminating transition strips between living, kitchen, and outdoor zones." },
          { title: "Indoor-Outdoor Continuity with Frameless Glazing", duration: "27m", desc: "Recessed floor tracks and oversized pivot doors." },
          { title: "Minimalist Space Planning Studio", duration: "40m", desc: "Simplifying a cluttered 3-bedroom residential floor plan." }
        ]
      },
      {
        moduleNumber: 2,
        title: "Module 2: Concealed Storage & Hidden Infrastructure",
        duration: "1 Week • 7 Lessons",
        lessons: [
          { title: "The Art of the Invisible Storage Wall", duration: "30m", desc: "Floor-to-ceiling touch-latch cabinetry that appears as paneled walls." },
          { title: "Hidden Pantries and Integrated Kitchen Appliance Garages", duration: "28m", desc: "Concealing coffee bars, blenders, and refrigeration behind pocket doors." },
          { title: "Drop Zones and Hidden Mudrooms", duration: "24m", desc: "Organizing daily coats, shoes, and packages behind flush panels." },
          { title: "Appliance Integration: Flush Induction and Invisible Extraction", duration: "26m", desc: "Under-counter cooktops and stealth ceiling range hoods." },
          { title: "Concealed HVAC Grilles and Linear Diffusers", duration: "22m", desc: "Hiding return air grills within architectural shadow gaps." },
          { title: "Flush Electrical Outlets and Wireless Switching", duration: "20m", desc: "Plaster-in sockets and minimalist keypad controls." },
          { title: "Concealed Millwork Detailing Workshop", duration: "38m", desc: "Drafting cross-sections of a 12-foot concealed storage wall." }
        ]
      },
      {
        moduleNumber: 3,
        title: "Module 3: Architectural Details & Shadowlines",
        duration: "1 Week • 7 Lessons",
        lessons: [
          { title: "The Anatomy of a Shadowline Reveal", duration: "28m", desc: "Detailing 1/2-inch reveals at ceilings, baseboards, and door frames." },
          { title: "Frameless Interior Doors and Secret Pivot Hinges", duration: "32m", desc: "Concealed aluminum sub-frames and flush-to-wall plaster finishes." },
          { title: "Zero-Edge Baseboards: Recessed and Flush Skirting", duration: "25m", desc: "Installing aluminum reveal channels before drywall application." },
          { title: "Floating Architectural Stairs and Cantilevered Treads", duration: "30m", desc: "Concealed steel stringers and frameless structural glass balustrades." },
          { title: "Monolithic Fireplaces: Plaster, Concrete, and Flueless Burners", duration: "24m", desc: "Designing seamless focal fireplaces without mantels or trim." },
          { title: "Curtain Pockets and Recessed Window Track Channels", duration: "22m", desc: "Hiding motorized drapery tracks in dropped ceiling pockets." },
          { title: "Architectural Detailing Sheet Workshop", duration: "42m", desc: "Compiling a construction detail sheet for minimalist trim." }
        ]
      },
      {
        moduleNumber: 4,
        title: "Module 4: Restrained Materiality & Tactile Warmth",
        duration: "1 Week • 7 Lessons",
        lessons: [
          { title: "The Warm Minimalist Palette: Tones, Not Colors", duration: "24m", desc: "Layering bone, chalk, ecru, and warm gray for organic depth." },
          { title: "Lime Wash, Roman Clay, and Micro-Cement Finishes", duration: "30m", desc: "Achieving cloudy, handcrafted movement on vertical and horizontal planes." },
          { title: "Raw and Matte Timber: Wire-Brushed Oak and Ash", duration: "26m", desc: "Selecting low-luster polyurethane and natural oil finishes." },
          { title: "Natural Stone Selection: Honed vs Polished Finishes", duration: "28m", desc: "Why honed limestone and quartzite outshine glossy polished marbles." },
          { title: "Linen, Bouclé, and Raw Wool Textile Selection", duration: "22m", desc: "Introducing textural richness in soft furnishings to avoid sterility." },
          { title: "Aged Metals: Bronzes, Unlacquered Brass, and Gunmetal", duration: "25m", desc: "Allowing hardware and tapware to develop authentic character." },
          { title: "Material Board Curation Lab", duration: "35m", desc: "Assembling a cohesive, sensory-rich minimalist material board." }
        ]
      },
      {
        moduleNumber: 5,
        title: "Module 5: Minimalist Lighting, Curation & Final Masterpiece",
        duration: "1 Week • 7 Lessons",
        lessons: [
          { title: "Eliminating 'Ceiling Swiss Cheese': Recessed Downlight Strategy", duration: "28m", desc: "Trimming downlight counts in favor of concealed cove light." },
          { title: "Indirect Architectural Lighting: Cove, Skirting, and Step Washes", duration: "30m", desc: "Detailing LED channels that wash plaster surfaces with soft radiance." },
          { title: "Sculptural Lighting as Functional Art", duration: "25m", desc: "Selecting one statement pendant as the focal soul of a minimalist room." },
          { title: "Minimalist Wet Rooms: Curbless Showers and Concealed Drains", duration: "32m", desc: "Wall-hung vanities, hidden bottle traps, and tile-in linear drains." },
          { title: "Curating Art and Objects: The Power of the Single Sculpture", duration: "22m", desc: "Why one substantial piece holds more presence than a gallery wall." },
          { title: "Living with Less: Post-Occupancy Realities and Client Coaching", duration: "24m", desc: "Helping homeowners maintain pristine minimalist order over time." },
          { title: "Final Minimalist Residential Capstone Presentation", duration: "48m", desc: "Presenting a full whole-house minimalist architectural transformation." }
        ]
      }
    ]
  },

  "campus-planning-essentials": {
    courseId: "campus-planning-essentials",
    shortDesc: "Plan sustainable, pedestrian-friendly institutional campuses balancing civic architecture, infrastructure, and green landscapes.",
    overview: "Campus Planning Essentials delivers a comprehensive foundation in large-scale master planning for university, corporate, and healthcare institutional campuses. You will examine the complex interplay between civic architecture, pedestrian mobility, transit corridors, environmental stormwater management, and digital campus infrastructure. Learn how to draft flexible long-term master plans that accommodate institutional growth while nurturing community connection and ecological resilience.",
    learningObjectives: [
      "Analyze historical and contemporary campus planning typologies and master plans.",
      "Design safe, walkable pedestrian spines that link diverse academic and residential quads.",
      "Integrate multimodal transit access, parking structures, and perimeter loop roads.",
      "Implement sustainable site civil engineering, bioswales, and carbon-reduction strategies.",
      "Formulate long-range capital improvement frameworks for university and healthcare campuses."
    ],
    targetAudience: "Urban planners, institutional facilities directors, landscape architects, civil engineers, and master planning consultants.",
    prerequisites: "Basic understanding of site plans, zoning guidelines, and large-scale spatial organization.",
    learningOutcomes: [
      "Draft comprehensive campus master plan bubble diagrams and future land-use frameworks.",
      "Design active campus quads, ceremonial gathering lawns, and outdoor amphitheaters.",
      "Plan micro-mobility bike lanes, shuttle loops, and centralized logistics docks.",
      "Develop phased capital construction plans that prevent disruption to ongoing academic operations."
    ],
    skills: ["Campus Master Planning", "Urban Design", "Pedestrian Walkability", "Stormwater Infrastructure", "Transit Integration", "Phased Development"],
    faqs: [
      {
        question: "Does this course cover corporate and hospital campuses or only universities?",
        answer: "The planning methodologies apply to higher education colleges, corporate innovation campuses, and large medical centers."
      },
      {
        question: "How much civil engineering and landscape architecture is included?",
        answer: "We cover civil infrastructure at a master-planning level—utility corridors, drainage basins, soil preservation, and plant palettes."
      },
      {
        question: "Are real university campus case studies explored?",
        answer: "Yes, we analyze classic collegiate Gothic quads, modern urban high-rise campuses, and suburban tech corporate campuses."
      },
      {
        question: "What is the course schedule and duration?",
        answer: "The course runs over 6 weeks with 40 comprehensive video modules and planning workshops."
      }
    ],
    instructorProfile: {
      name: "Alice Smith",
      title: "Educational Facility Architect & Pedagogical Design Specialist",
      bio: "Alice Smith has consulted on regional institutional campus master plans, sustainable university expansions, and civic health science developments over a distinguished 15-year career.",
      expertise: ["Campus Master Planning", "Sustainable Site Development", "Pedestrian Flow Engineering", "Institutional Expansion Phasing"],
      teachingFocus: "Synthesizing civic landscape design, building placement, and sustainable transit to create memorable, human-scale institutional places."
    },
    // Total lessons: 40 (Course 6 metadata: lessons: 40, weeks: 6)
    curriculum: [
      {
        moduleNumber: 1,
        title: "Module 1: Campus Planning Typologies & Historical Evolution",
        duration: "1 Week • 7 Lessons",
        lessons: [
          { title: "The Idea of the Campus: From Oxford Cloisters to Jefferson's Lawn", duration: "26m", desc: "Historical precedents of dedicated institutional academic communities." },
          { title: "Campus Typologies: Rural Enclave vs Urban Embedded Grid", duration: "28m", desc: "Contrasting secluded college towns with bustling metropolitan institutions." },
          { title: "The Quadrangle and the Green: Ceremonial Centerpieces", duration: "24m", desc: "Designing open green spaces that serve as collective community hearts." },
          { title: "Building Density and Floor Area Ratio (FAR) in Master Planning", duration: "30m", desc: "Balancing built square footage against preserved open natural landscape." },
          { title: "Institutional Mission Alignment and Vision Statements", duration: "22m", desc: "Translating university strategic plans into physical master plan goals." },
          { title: "Demographic Projections and Student Enrollment Forecasts", duration: "25m", desc: "Forecasting housing, lab, and dining capacity needs over 20-year horizons." },
          { title: "Campus Historical Precedent Analysis Studio", duration: "38m", desc: "Deconstructing the spatial framework of iconic historical campuses." }
        ]
      },
      {
        moduleNumber: 2,
        title: "Module 2: Pedestrian Networks, Transit & Mobility",
        duration: "1 Week • 7 Lessons",
        lessons: [
          { title: "The Pedestrian-First Core: Restricting Motor Vehicles", duration: "28m", desc: "Pushing vehicle traffic to perimeter loop roads to safeguard pedestrian life." },
          { title: "Desire Paths and Walkability Isochrones (5-to-10 Minute Walk)", duration: "30m", desc: "Mapping class change passing periods and natural foot traffic paths." },
          { title: "Bicycle and Micro-Mobility Corridors and Parking Hubs", duration: "24m", desc: "Integrating bike paths, scooter drop zones, and skateboard circulation." },
          { title: "Campus Shuttles and Regional Transit Intermodal Hubs", duration: "26m", desc: "Connecting municipal light rail and regional bus loops into campus gateways." },
          { title: "Perimeter Parking Structures vs Surface Lots", duration: "25m", desc: "Consolidating vehicular parking to reclaim green surface space." },
          { title: "Universal Accessibility (ADA) across Topographical Terrain", duration: "27m", desc: "Designing barrier-free routes across hills, bridges, and multi-level plazas." },
          { title: "Pedestrian Circulation Mapping Workshop", duration: "40m", desc: "Drafting an integrated mobility plan for an expanding campus." }
        ]
      },
      {
        moduleNumber: 3,
        title: "Module 3: Land-Use Zoning & Building Typology Distribution",
        duration: "1 Week • 7 Lessons",
        lessons: [
          { title: "Zoning Academic, Residential, and Research Sectors", duration: "28m", desc: "Minimizing travel distances between student dormitories and lecture halls." },
          { title: "Student Life Hubs: Student Unions, Recreation, and Dining", duration: "32m", desc: "Placing social gravitational centers that promote student well-being." },
          { title: "Athletic Complexes and Stadium Integration", duration: "25m", desc: "Managing game-day visitor crowds without paralyzing academic operations." },
          { title: "Central Utilities, Central Plants, and Back-of-House Docks", duration: "26m", desc: "Hiding service vehicle docks, waste compactors, and steam generation plants." },
          { title: "Health Science, Medical Clinics, and Emergency Access", duration: "24m", desc: "Balancing clinical ambulance routes with peaceful healing gardens." },
          { title: "Public Interface: The Town-Gown Gateway Edge", duration: "27m", desc: "Designing inviting campus boundaries that welcome the surrounding city." },
          { title: "Land-Use Master Plan Drafting Lab", duration: "42m", desc: "Creating a comprehensive programmatic sector zoning diagram." }
        ]
      },
      {
        moduleNumber: 4,
        title: "Module 4: Sustainable Infrastructure & Landscape Ecology",
        duration: "1 Week • 7 Lessons",
        lessons: [
          { title: "Campus Stormwater Management: Bioswales and Retention Ponds", duration: "30m", desc: "Treating rainwater as a visible landscape amenity rather than underground waste." },
          { title: "District Energy Systems: Geothermal and Micro-Grids", duration: "28m", desc: "Decarbonizing campus heating and power with centralized renewable systems." },
          { title: "Native Flora, Pollinator Habitats, and Turf Reduction", duration: "24m", desc: "Lowering water and pesticide consumption with indigenous landscaping." },
          { title: "The Campus as an Arboretum: Living Educational Laboratories", duration: "22m", desc: "Integrating tree inventories and botanical education into groundskeeping." },
          { title: "Outdoor Comfort: Micro-Climates, Wind Buffers, and Shade Canopy", duration: "26m", desc: "Extending seasonal outdoor usability of courtyards and plazas." },
          { title: "Light Pollution and Dark-Sky Compliant Campus Lighting", duration: "25m", desc: "Balancing nighttime pedestrian safety with ecological preservation." },
          { title: "Landscape Ecology Master Plan Studio", duration: "38m", desc: "Drafting a green infrastructure overlay for a university campus." }
        ]
      },
      {
        moduleNumber: 5,
        title: "Module 5: Digital Infrastructure, Security & Smart Campuses",
        duration: "1 Week • 6 Lessons",
        lessons: [
          { title: "Smart Campus Infrastructure: IoT, Sensor Networks, and Space Analytics", duration: "28m", desc: "Utilizing occupancy sensors to optimize heating, cooling, and room booking." },
          { title: "High-Density Campus-Wide Fiber and Wi-Fi Mesh", duration: "24m", desc: "Delivering seamless high-speed internet across indoor and outdoor spaces." },
          { title: "Campus Safety Design (CPTED): Sightlines, Call Boxes, and Lighting", duration: "30m", desc: "Preventing crime through environmental design and visible security presence." },
          { title: "Wayfinding, Digital Signage, and Mobile Navigation Apps", duration: "25m", desc: "Guiding visitors and freshmen effortlessly across complex facilities." },
          { title: "Emergency Operations, Egress Assemblies, and Evacuation Staging", duration: "27m", desc: "Designating emergency rally points and disaster response staging areas." },
          { title: "Smart Infrastructure Planning Workshop", duration: "36m", desc: "Developing a digital and physical security overlay for campus pathways." }
        ]
      },
      {
        moduleNumber: 6,
        title: "Module 6: Capital Phasing, Stakeholder Engagement & Final Capstone",
        duration: "1 Week • 6 Lessons",
        lessons: [
          { title: "Multi-Decadal Phasing Strategy: Managing Ongoing Operations", duration: "32m", desc: "Constructing new facilities without disrupting ongoing lectures and exams." },
          { title: "Swing Spaces and Decanting Logistics during Building Renovations", duration: "28m", desc: "Relocating faculty offices and labs smoothly into temporary facilities." },
          { title: "Stakeholder Engagement: Faculty, Students, Trustees, and Neighbors", duration: "30m", desc: "Conducting town halls and charrettes to build community consensus." },
          { title: "Capital Campaign Marketing and Architectural Visualization", duration: "26m", desc: "Generating compelling renderings that inspire major alumni donations." },
          { title: "The Living Master Plan: Governance and 5-Year Regulatory Reviews", duration: "25m", desc: "Establishing campus design committees and maintaining architectural coherence." },
          { title: "Comprehensive Campus Master Plan Capstone Defense", duration: "50m", desc: "Presenting a complete 20-year institutional campus master plan." }
        ]
      }
    ]
  }
};

export default courseDetails;

