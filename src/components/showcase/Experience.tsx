import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Tell Media LTD</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://hover.gg/'}
                        >
                            <h4></h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Developer & Technical Specialist</h3>
                        <b>
                            <p>April 2025</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Work on a mix of software development, workflow optimisation, and 
                    hands-on production. Build internal tools (UX/front end, AI integrations, APIs), contribute 
                    to graphic operations (XML, data integration), and support live production platforms like vMix 
                    and Ross XPression.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                             Develop internal tools and dashboards to support production and operations (front end, 
                             UX, AI-driven tools).
                        </p>
                    </li>
                    <li>
                        <p>
                             Design and deploy automated API workflows to streamline internal processes and data 
                            movement.
                        </p>
                    </li>
                    <li>
                        <p>
                            Operate production tools such as vMix and Ross XPression during live and recorded 
projects. 
                        </p>
                    </li>
                    <li>
                        <p>
                            Integrate live XML data feeds into graphic systems and collaborate with Tell SEA to 
manage and maintain graphic databases.
                        </p>
                    </li>
                    <li>
                        <p>
                             Provide cross-functional technical support across global projects, working with teams in 
Southeast Asia, the Gulf, and the UK
                        </p>
                    </li>
                    {/* <li>
                        <p>
                            Travel occasionally for major live events and technical deployments. 
                        </p>
                    </li> */}
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Freelance</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://hover.gg/'}
                        >
                            <h4></h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Frontend Engineer</h3>
                        <b>
                            <p>Summer 2022</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Targeted towards online content creators and streamers
                    looking to build a brand, Hover is the home of over 150K
                    users. Written in JavaScript using React, React-Native,
                    Framer, Express, and Redux.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Architected and engineered the vertical scrolling
                            discover player which, at its daily peak, was
                            responsible for generating over 600,000 views across
                            20,000 active users.
                        </p>
                    </li>
                    <li>
                        <p>
                            Designed and implemented multiple features to
                            increase app usability and user experience while
                            ensuring the quality, maintainability and
                            scalability of the front end as the user base grew
                            by over 50,000.
                        </p>
                    </li>
                    <li>
                        <p>
                            Coordinated major refactors targeted towards app
                            optimization and performance resulting in a smoother
                            user experience and accomplished by eliminating
                            redundant re-renders and API calls by over 50%.
                        </p>
                    </li>
                    <li>
                        <p>
                            Directed and executed an internal migration of 3
                            individual repositories to a single monorepo,
                            greatly reducing overhead for developing new
                            features, fixing bugs, and managing dependencies.
                        </p>
                    </li>
                    <li>
                        <p>
                            Rebuilt the website with React and shared mobile app
                            components allowing users to access a wide variety
                            of app interactions entirely on the web, resulting
                            in over 700,000 total site visits.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>AuthenCity</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://fivem.authen.co.id/'}
                        >
                            <h4>www.authen.co.id</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Team Lead & Engineer Game Developer</h3>
                        <b>
                            <p>Fall 2022</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Supervised and developed the front end of Authen Indonesia, a
                    beautifully simple and effective bracket creation and
                    management engine. Written in JavaScript using React and
                    deployed.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Managed the project and team members by conducting
                            bi-weekly stand-ups.
                        </p>
                    </li>
                    <li>
                        <p>
                            Architected bracket view UI using React Flow and
                            custom bracket data types built from binary trees.
                        </p>
                    </li>
                    <li>
                        <p>
                            Created conversion algorithms to serialize bracket
                            tree data to allow for saving in the cloud.
                        </p>
                    </li>
                    <li>
                        <p>
                            Implemented bracket generation utilities which
                            employ gray code for proper team seeding and
                            placement.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Indotribes RolePlay</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={''}
                        >
                            <h4></h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Game Developer</h3>
                        <b>
                            <p>Fall 2022 - summer 2023</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Develop and write server-side scripts using Lua programming language
                    to create custom game mechanics, features, and functionalities.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Designed, developed and tested game software, exceeding user expectations.
                        </p>
                    </li>
                    <li>
                        <p>
                            Assessed game difficulty levels, providing enjoyable playing experience for all users.
                        </p>
                    </li>
                    <li>
                        <p>
                            Collaborate with other developers to ensure compatibility and integration of various scripts.
                        </p>
                    </li>
                    <li>
                        <p>
                            Debug and troubleshoot code to fix issues and optimize performance.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Koperasi Dadali</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://www.koperasidadali.com/'}
                        >
                            <h4>www.koperasidadali.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Web Developer</h3>
                        <b>
                            <p>Fall 2013, Summer 2023</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Applied problem solving and technical skills to operate
                    large equipment such as rain machines, fog machines, small
                    explosives and general rigging with a professional crew of
                    50+ people.
                </p>
                <br />
                {/* <h3 style={styles.indent}>Screen Credits:</h3>
                <ul>
                    <li style={styles.row}>
                        <p>• Ray Donovan</p>
                        <p>
                            [{' '}
                            <a
                                href="https://www.sho.com/ray-donovan"
                                target="_blank"
                                rel="noreferrer"
                            >
                                SHOWTIME
                            </a>{' '}
                            ]
                        </p>
                    </li>
                    <li style={styles.row}>
                        <p>• Ray Donovan: The Movie</p>
                        <p>
                            [{' '}
                            <a
                                href="https://www.sho.com/titles/3508117/ray-donovan-the-movie"
                                target="_blank"
                                rel="noreferrer"
                            >
                                SHOWTIME
                            </a>{' '}
                            ]
                        </p>
                    </li>
                    <li style={styles.row}>
                        <p>• Hightown</p>
                        <p>
                            [{' '}
                            <a
                                href="https://www.starz.com/us/en/series/hightown/57463"
                                target="_blank"
                                rel="noreferrer"
                            >
                                STARZ
                            </a>{' '}
                            ]
                        </p>
                    </li>
                    <li style={styles.row}>
                        <p>• Bull</p>
                        <p>
                            [{' '}
                            <a
                                href="https://www.cbs.com/shows/bull/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                CBS
                            </a>{' '}
                            ]
                        </p>
                    </li>
                    <li style={styles.row}>
                        <p>• At Home with Amy Sedaris</p>
                        <p>
                            [{' '}
                            <a
                                href="https://www.trutv.com/shows/at-home-with-amy-sedaris"
                                target="_blank"
                                rel="noreferrer"
                            >
                                truTV
                            </a>{' '}
                            ]
                        </p>
                    </li>
                </ul> */}
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;
