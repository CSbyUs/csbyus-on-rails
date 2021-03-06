/**
 * Data found from link https://docs.google.com/spreadsheets/d/1reWVp8kiw6er61frUKT3h5y35zPTaDBgnlGcYltq9qE/edit#gid=0 created by CRD team
 */

module.exports = {
    lessonPlans: {
        gradeLevel: {
            kToTwo: {
                curriculum: {
                    algorithms: [],
                    impactOfComputing: [],
                    dataAnalysis: []
                }
            },
            threeToFive: {
                curriculum: {
                    algorithms: [
                        {
                            id: "a_1",
                            title: "Why CS?",
                            author: "CSbyUs",
                            description: "An intro lesson about what computer science is and why students should be studying it. ",
                            standards: [],
                            estimatedTime: 40,
                            materials: [],
                            courseUrl: "https://docs.google.com/document/d/1fh-zV9i4bXHSHNzWUzgzVafRi6gLyeMQF2Nox646NQc/edit",
                        },
                        {
                            id: "a_2",
                            title: "Instruct Teacher to Tie Shoe",
                            author: "CSbyUs",
                            description: "The goal of this lesson is to introduce students to the concept of an algorithm. The concept of an algorithm (“specific steps that accomplish a goal”) will be taught by engaging students in an activity where they can see how the idea of an algorithm physically manifests itself.",
                            standards: ["AP-01: Create multiple algorithms for the same task to determine which is the most appropriate.", 
                                        "AP-06: Decompose (break down) problems into smaller, manageable subproblems to facilitate the program development process.", 
                                        "AP-10: Identify and debug errors in an algorithm or program to ensure it runs as intended."],
                            estimatedTime: 30,
                            materials: ["Shoe with laces"],
                            courseUrl: "https://docs.google.com/document/d/1Y2hhvnb_CM9JuizpUfQ7hWyEN2XHP98dSIy-vvM60Cw/edit",
                        },
                        {
                            id: "a_3",
                            title: "If/Then Statements: Part 1",
                            author: "CSbyUs",
                            description: "Introduces students to the concept of conditionals (if/then statements) by having them create if/then statements for situations in their own lives. Includes fun, physical activity as well. ",
                            standards: ["AP-05: Construct programs that include conditionals.", 
                                        "AP-06: Decompose (break down) problems into smaller, manageable subproblems to facilitate the program development process."],
                            estimatedTime: 30,
                            materials: ["Die/Coin"],
                            courseUrl: "https://docs.google.com/document/d/1YFirPk4-EVU_BBNBLJCFGeUsVSrdaw7wb6MY4HIHznE/edit",
                        },
                        {
                            id: "a_4",
                            title: "If/Then Statements: Part 2",
                            author: "CSbyUs",
                            description: "A continuation of Algorithms: Lesson 3. Students continue to learn if/then statements by incorporating them with basic math problems. ",
                            standards: ["AP-01: Create multiple algorithms for the same task to determine which is the most appropriate.", 
                                        "AP-06: Decompose (break down) problems into smaller, manageable subproblems to facilitate the program development process.", 
                                        "AP-10: Identify and debug errors in an algorithm or program to ensure it runs as intended."],
                            estimatedTime: 30,
                            materials: ["Word problems", "Paper", "Pencil"],
                            courseUrl: "https://docs.google.com/document/d/1YFirPk4-EVU_BBNBLJCFGeUsVSrdaw7wb6MY4HIHznE/edit",
                        },
                        {
                            id: "a_5",
                            title: "Mazes",
                            author: "CSbyUs",
                            description: "Students will be able to describe what an algorithm is and create their own algorithm for solving a basic maze. ",
                            standards: ["AP-01: Create multiple algorithms for the same task to determine which is the most appropriate.", 
                                        "AP-06: Decompose (break down) problems into smaller, manageable subproblems to facilitate the program development process.", 
                                        "AP-10: Identify and debug errors in an algorithm or program to ensure it runs as intended."],
                            estimatedTime: 30,
                            materials: ["Mazes", "Pencil"],
                            courseUrl: "https://docs.google.com/document/d/1_EUxpJba7sWCCDwGom3ATEMGkF8R5FNITGcnFgTzJjM/edit",
                        },
                        {
                            id: "a_6",
                            title: "Theseus Myth/Algorithm to Solve Any Maze",
                            author: "CSbyUs",
                            description: "Students will connect algorithms to literature by reading the Theseus Myth and then working together to construct an algorithm that can solve any maze. ",
                            standards: ["AP-01: Create multiple algorithms for the same task to determine which is the most appropriate.", 
                                        "AP-06: Decompose (break down) problems into smaller, manageable subproblems to facilitate the program development process.", 
                                        "AP-10: Identify and debug errors in an algorithm or program to ensure it runs as intended.",
                                        "AP-11: Take on varying roles, with teacher guidance, when collaborating with peers during the design, implementation, and review stages of program development."],
                            estimatedTime: 30,
                            materials: ["Handout of Theseus Myth", "Maze from Lesson 5", "Pencil", "Paper"],
                            courseUrl: "https://docs.google.com/document/d/1oAX65j8ElnOaIc_9Vek56xilDIN7l77Le8508KREuU0/edit",
                        },
                        {
                            id: "a_7",
                            title: "Theseus Myth/Algorithm to Solve Any Maze",
                            author: "CSbyUs",
                            description: "(Continuation of Lesson 6) Students will connect algorithms to literature by reading the Theseus Myth and then working together to construct an algorithm that can solve any maze. ",
                            standards: ["AP-01: Create multiple algorithms for the same task to determine which is the most appropriate.", 
                                        "AP-06: Decompose (break down) problems into smaller, manageable subproblems to facilitate the program development process.", 
                                        "AP-10: Identify and debug errors in an algorithm or program to ensure it runs as intended.",],
                            estimatedTime: 30,
                            materials: ["Handout of Theseus Myth", "Maze from Lesson 5", "Pencil", "Paper"],
                            courseUrl: "https://docs.google.com/document/d/1oAX65j8ElnOaIc_9Vek56xilDIN7l77Le8508KREuU0/edit",
                        },
                        {
                            id: "a_8",
                            title: "Blockly Mazes",
                            author: "CSbyUs",
                            description: "Students will be able to apply their knowledge of using algorithms to solve mazes on a computer.",
                            standards: ["AP-03: Construct programs that include sequences.", 
                                        "AP-04: Construct programs using simple loops.", 
                                        "AP-05: Construct programs that implement conditionals.", 
                                        "AP-06: Decompose problems into smaller, manageable, subproblems to facilitate the program development process.", 
                                        "AP-10: Identify and debug errors in an algorithm or program to ensure it runs as intended."],
                            estimatedTime: 60,
                            materials: ["Computer per 2 Students", "Projector"],
                            courseUrl: "https://docs.google.com/document/d/1Brm5CgP1d7RAIrNUvfRK1Z3AvUo9jwiqTsjhhNgWSAk/edit",
                        },
                    ],
                    impactOfComputing: [
                        {
                            id: "IOC_1",
                            title: "Cybersecurity",
                            author: "CSbyUs",
                            description: "Students will be able to describe what hacking is and how some computer viruses spread after doing a physical activity together.",
                            standards: ["NI-02: Explain your digital footprint and how personal information can be protected.", ],
                            estimatedTime: 30,
                            materials: ["Website photos"],
                            courseUrl: "https://docs.google.com/document/d/1uQjg0OjkN1R4LZJd5QlRqSgdbONiudfoycbv8EV0y64/edit",
                        },
                        {
                            id: "IOC_2",
                            title: "Staying Safe Online",
                            author: "CSbyUs",
                            description: "Students will be able to identify cybersecurity issues and will have a better idea of how to stay safe online by comparing virtual security to physical security.",
                            standards: ["NI-02: Explain your digital footprint and how personal information can be protected.", ],
                            estimatedTime: 45,
                            materials: ["Large Paper", "Colored pencils/markers"],
                            courseUrl: "https://docs.google.com/document/d/1bFWhSHLsulbERDhuAIAigGyjAnJqe_TR-1RM6Fr2FOw/edit",
                        },
                        {
                            id: "IOC_3",
                            title: "Powerful Passwords",
                            author: "CSbyUs",
                            description: "Students will be able to identify what a password is and what it is used for. Students should know how to create a good password to protect their data.",
                            standards: ["NI-02: Explain your digital footprint and how personal information can be protected.", ],
                            estimatedTime: 45,
                            materials: ["Powerful Passwords Workhseet", "Index Cards", "Combination lock"],
                            courseUrl: "https://docs.google.com/document/d/18NJCZK6XA28ldS9v1LmF5wqFUgQzf8Y1ojykSzIhJL8/edit",
                        },
                        {
                            id: "IOC_4",
                            title: "Technology in Community and Culture: Part 1",
                            author: "CSbyUs",
                            description: "Students will understand how technology has shaped/changed our lives and solved many problems we face, and think of additional problems either in their personal lives or in the world as a whole that technology could help solve.",
                            standards: ["IC-01: Compare computing technologies that have changed the world and how they both influence and are influenced by cultural practices.", ],
                            estimatedTime: 30,
                            materials: ["Whiteboard", "Marker"],
                            courseUrl: "https://docs.google.com/document/d/1drdl8cy0FCm-ho6s3YMzhB9-MGT8dXJ2AO8LZnBEb_o/edit",
                        },
                        {
                            id: "IOC_5",
                            title: "Technology in Community and Culture: Part 1",
                            author: "CSbyUs",
                            description: "Students will be able to think about problems in the world that could be addressed by technology, and brainstorm an idea for an app to address a specific problem.",
                            standards: ["IC-01: Compare computing technologies that have changed the world and how they both influence and are influenced by cultural practices.", ],
                            estimatedTime: 30,
                            materials: ["Piece of paper", "Pencil"],
                            courseUrl: "https://docs.google.com/document/d/1gI4BQEUNAgtSAhPFnuANHAbtVw2n3SdVTDvDMVecJyw/edit",
                        },
                        {
                            id: "IOC_6",
                            title: "Designing an App",
                            author: "CSbyUs",
                            description: "Students will be able to successfully design an app to solve a real world issue in their community. ",
                            standards: ["IC-03: Seek diverse perspectives with collaboration for the purpose of improving computational artifacts.", ],
                            estimatedTime: 60,
                            materials: ["Large paper", "Pencil", "Markers"],
                            courseUrl: "https://docs.google.com/document/d/1ufnPqSbcXZNT6HL05WtBHzZn0B9Lm_poBXbwiZiFlCQ/edit",
                        },
                        {
                            id: "IOC_7",
                            title: "Accessibility",
                            author: "CSbyUs",
                            description: "Students will consider and learn about the ways to make apps more accessible, including the one built in lesson 5.",
                            standards: ["IC-02: Explore the tools that can be used to improve accessibility and usability of technology products for the diverse needs and wants of users.", ],
                            estimatedTime: 30,
                            materials: ["Paper", "Pencil"],
                            courseUrl: "https://docs.google.com/document/d/1CVDMgoCmQMbNPzyLPR7lWH5NRKZfWmy7hdLCZiLw54c/edit",
                        },
                        {
                            id: "IOC_8",
                            title: "Designing an App on Applab",
                            author: "CSbyUs",
                            description: "Students will code their simple app on code.org’s Applab. ",
                            standards: ["IC-03: Seek diverse perspectives with collaboration for the purpose of improving computational artifacts.", ],
                            estimatedTime: 120,
                            materials: ["Computer per group", "Projector"],
                            courseUrl: "https://docs.google.com/document/d/1SE3KCLslweuzROJpOUBsOa65nsmtiNEHtwFl6Tx87P0/edit",
                        },
                        {
                            id: "IOC_9",
                            title: "Giving Feedback",
                            author: "CSbyUs",
                            description: "Students will learn what constructive feedback is, how to do it, and why it is so important.",
                            standards: ["IC-03: Seek diverse perspectives with collaboration for the purpose of improving computational artifacts.", ],
                            estimatedTime: 30,
                            materials: ["Paper", "Pencil"],
                            courseUrl: "https://docs.google.com/document/d/1u-K69JMz9JZuQfZTykDUb-aNiUJdq_z2B1mmJetmke4/edit",
                        },
                        {
                            id: "IOC_10",
                            title: "Presenting Apps",
                            author: "CSbyUs",
                            description: "Students will present their final apps to the class (either on paper or computers depending of if you used Applab or not). ",
                            standards: ["IC-03: Seek diverse perspectives with collaboration for the purpose of improving computational artifacts.", ],
                            estimatedTime: 30,
                            materials: ["Sticky Notes"],
                            courseUrl: "https://docs.google.com/document/d/18VhesE8GUlfhbef-bsPfzbYO07-XBUI7V9j5RmJXfc4/edit",
                        },
                    ],
                    dataAnalysis: [
                        {
                            id: "D_1",
                            title: "What is Data?",
                            author: "CSbyUs",
                            description: "Students will be able to use data to predict an outcome.",
                            standards: ["DA-04: Communicate using data to highlight or predict outcomes.", ],
                            estimatedTime: 30,
                            materials: [],
                            courseUrl: "https://docs.google.com/document/d/1ISD46Tbu8-o7iNdOM_m5mkRTQ5xDADxN8XhsZNWUaF0/edit",
                        },
                        {
                            id: "D_2",
                            title: "Cause/Effect in Science",
                            author: "CSbyUs",
                            description: "Students will be able to identify the effects of an event and given a set of data, be able to identify when a certain event occurred.",
                            standards: ["DA-04: Communicate using data to highlight or predict outcomes.", ],
                            estimatedTime: 30,
                            materials: ["Graphs provided in link", "Paper", "Pencil"],
                            courseUrl: "https://docs.google.com/document/d/1chxI8f8E0j1-jzJ6LrrqNJOifRK3OGtiSld_wX0L9K8/edit",
                        },
                        {
                            id: "D_3",
                            title: "Designing Surveys",
                            author: "CSbyUs",
                            description: "Students will be able to gather data through surveying. It will help them gain a better understanding of quick, simple data collection.",
                            standards: ["DA-03: Organize and present collected data visually to highlight relationships and support a claim.", 
                                        "DA-04: Communicate using data to highlight or predict outcomes.", ],
                            estimatedTime: 30,
                            materials: ["Paper", "Pencil"],
                            courseUrl: "https://docs.google.com/document/d/1DwDltdHc_qtJoGbTY1AInpaAy2KpecD-go5k-FP_hf8/edit",
                        },
                        {
                            id: "D_4",
                            title: "Modeling and Interpreting Survey Results",
                            author: "CSbyUs",
                            description: "Students will learn how to visualize data through the use of different types of graphs such as bar charts and pie charts. They will also be able to interpret what these results mean and draw conclusions from them.",
                            standards: ["DA-03: Organize and present collected data visually to highlight relationships and support a claim.", 
                                        "DA-04: Communicate using data to highlight or predict outcomes.", ],
                            estimatedTime: 60,
                            materials: ["Poster Paper", "Colored Pencils", "Rulers"],
                            courseUrl: "https://docs.google.com/document/d/1c0UL1_KnqeajGAiZEQeVHzHc4DDE8O82n8KXYgjlh6E/edit",
                        },
                        {
                            id: "D_5",
                            title: "Collecting and Graphing Data",
                            author: "CSbyUs",
                            description: "Students will be able to create a poll and graph their data using Google Forms. ",
                            standards: ["DA-03: Organize and present collected data visually to highlight relationships and support a claim.", 
                                        "DA-04: Communicate using data to highlight or predict outcomes.", ],
                            estimatedTime: 60,
                            materials: ["Computer", "Projector", "Screen"],
                            courseUrl: "https://docs.google.com/document/d/1nScodSCMMP3rQ01DDqfQ33G-eq3JWmlxTqKgFQvIRvI/edit",
                        },
                        {
                            id: "D_6",
                            title: "Presenting Data",
                            author: "CSbyUs",
                            description: "Students will present their data collected to the class and share different forms of graphing/data collection.",
                            standards: ["DA-03: Organize and present collected data visually to highlight relationships and support a claim.", 
                                        "DA-04: Communicate using data to highlight or predict outcomes.", ],
                            estimatedTime: 30,
                            materials: ["Group Poster from Lesson 5"],
                            courseUrl: "https://docs.google.com/document/d/1aSNF935O2V7GjE5hi5ekd0icKD8ES0jx63s8ekZuR8I/edit",
                        },
                    ]
                }
            }
        }
    },
    sixToEight: {
        curriculum: {
            algorithms: [],
            impactOfComputing: [],
            dataAnalysis: []
        }
    }

};
