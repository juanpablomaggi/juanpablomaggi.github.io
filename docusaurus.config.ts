import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
    title: "Shank Game Tools",
    tagline: "Welcome to my personal hub for Unity game development tools and resources",
    favicon: "img/favicon.ico",

    // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
    future: {
        v4: true, // Improve compatibility with the upcoming Docusaurus v4
    },

    url: "https://juanpablomaggi.github.io",
    baseUrl: "/",

    organizationName: "juanpablomaggi",
    projectName: "juanpablomaggi.github.io",

    onBrokenLinks: "throw",
    deploymentBranch: "gh-pages",

    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            {
                docs: {
                    sidebarPath: "./sidebars.ts",
                    editUrl:
                        "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ["rss", "atom"],
                        xslt: true,
                    },
                    editUrl:
                        "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                    onInlineTags: "warn",
                    onInlineAuthors: "warn",
                    onUntruncatedBlogPosts: "warn",
                },
                theme: {
                    customCss: "./src/css/custom.css",
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        image: "img/docusaurus-social-card.jpg",
        colorMode: {
            respectPrefersColorScheme: true,
        },
        navbar: {
            title: "Shank Game Tools",
            logo: {
                alt: "My Site Logo",
                src: "img/logo.svg",
            },
            items: [
                {
                    type: "docSidebar",
                    sidebarId: "mainSidebar",
                    position: "left",
                    label: "Game Packages",
                },
                { to: "docs/About/me", label: "About Me", position: "left" },
                {
                    href: "https://github.com/juanpablomaggi",
                    label: "GitHub",
                    position: "right",
                },
            ],
        },
        footer: {
            style: "dark",
            links: [
                {
                    title: "Docs",
                    items: [
                        {
                            label: "Game Packages",
                            to: "/docs/Game%20Packages/Unity/intro#available-packages",
                        },
                        {
                            label: "About me",
                            to: "/docs/About/me",
                        },
                    ],
                },
                {
                    title: "More",
                    items: [
                        {
                            label: "GitHub",
                            href: "https://github.com/juanpablomaggi",
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Juan Pablo Maggi. Built with Docusaurus.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
