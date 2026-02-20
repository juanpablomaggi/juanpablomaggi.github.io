import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx("hero hero--primary", styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    {siteConfig.title}
                </Heading>
                <p className={styles.taglineExtended}>
                    Welcome to my personal hub for Unity game development tools and resources.
                </p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/Game Packages/Unity/intro"
                    >
                        Explore Packages →
                    </Link>
                </div>
            </div>
        </header>
    );
}

function AboutSection() {
    return (
        <section className={styles.aboutSection}>
            <div className="container">
                <div className="row">
                    <div className="col col--6">
                        <Heading as="h2">About Me</Heading>
                        <p>
                            I'm a passionate game developer focused on creating reusable, 
                            high-quality tools and packages for Unity. My goal is to streamline 
                            game development workflows and help other developers build amazing games faster.
                        </p>
                        <p>
                            Here you'll find comprehensive documentation for all my Unity packages, 
                            along with blog posts covering game development topics and package updates.
                        </p>
                    </div>
                    <div className="col col--6">
                        <Heading as="h2">What You'll Find</Heading>
                        <ul>
                            <li>
                                <strong>Game Packages:</strong> Open-source Unity packages ready to integrate into your projects via UPM
                            </li>
                            <li>
                                <strong>Documentation:</strong> Complete guides for installation, usage, and API reference
                            </li>
                            <li>
                                <strong>Blog:</strong> Articles about game development, package updates, and best practices
                            </li>
                            <li>
                                <strong>About:</strong> More information about my work and experience
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title}`}
            description="Game development tools, Unity packages, and resources by Juan Pablo Maggi"
        >
            <HomepageHeader />
            <main>
                <AboutSection />
            </main>
        </Layout>
    );
}
