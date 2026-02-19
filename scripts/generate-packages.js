const fs = require('fs');
const path = require('path');
const https = require('https');

const PACKAGES_CONFIG = [
    {
        name: 'GameTools-UnitySaveSystem',
        repo: 'juanpablomaggi/GameTools-UnitySaveSystem',
        description: 'Small save system for games',
    },
    {
        name: 'GameTools-UnityServicesSystem',
        repo: 'juanpablomaggi/GameTools-UnityServicesSystem',
        description: 'Service locator and loader with editor tools',
    },
];

async function fetchLatestRelease(repo) {
    return new Promise((resolve, reject) => {
        https.get(
            `https://api.github.com/repos/${repo}/releases/latest`,
            {
                headers: {
                    'User-Agent': 'PackageDocGenerator',
                    'Accept': 'application/vnd.github.v3+json',
                },
            },
            (res) => {
                let data = '';
                res.on('data', (chunk) => (data += chunk));
                res.on('end', () => {
                    try {
                        const release = JSON.parse(data);
                        resolve({
                            version: release.tag_name || 'v0.0.0',
                            publishedAt: release.published_at,
                            body: release.body || '',
                        });
                    } catch (e) {
                        resolve({
                            version: 'v0.0.0',
                            publishedAt: new Date().toISOString(),
                            body: '',
                        });
                    }
                });
            }
        );
    });
}

function createIntroMarkdown(pkg, release) {
    const version = release.version.replace(/^v/, '');
    const date = new Date(release.publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const changelog = release.body
        ? release.body.replace(/</g, '\\<').replace(/>/g, '\\>')
        : `See the [releases page](https://github.com/${pkg.repo}/releases) for changelog details.`;

    return `---
sidebar_position: 1
---

# ${pkg.name}

${pkg.description}

## Installation

Add this package to your Unity project using the UPM (Unity Package Manager).

### Git URL

Latest version:

\`\`\`text
https://github.com/${pkg.repo}.git
\`\`\`

Specific version:

\`\`\`text
https://github.com/${pkg.repo}.git#${release.version}
\`\`\`

### Steps

1. Open your project in Unity
2. Open **Window > Package Manager**
3. Click the **+** button and select **Add package from git URL...**
4. Paste: \`https://github.com/${pkg.repo}.git\`
5. Click **Add**

## Version Information

- **Latest Version:** \`${version}\`
- **Released:** ${date}
- **Repository:** [${pkg.repo}](https://github.com/${pkg.repo})

## Features

For a complete list of features, visit the [repository](https://github.com/${pkg.repo}).

## Documentation

For detailed documentation, guides, and examples, please visit the [official repository](https://github.com/${pkg.repo}).

## Changelog

${changelog}

## Support

If you encounter any issues or have questions:

- Open an issue on [GitHub](https://github.com/${pkg.repo}/issues)
- Check existing documentation
- Review the [README](https://github.com/${pkg.repo}/blob/main/README.md)

## License

This package is available under the license specified in the repository.
`;
}

function createUsageMarkdown() {
    return `---
sidebar_position: 2
---

# Usage

`;
}

function createMethodsMarkdown() {
    return `---
sidebar_position: 3
---

# Methods & API

`;
}

async function main() {
    try {
        console.log('🔍 Scanning packages...');

        const releases = await Promise.all(
            PACKAGES_CONFIG.map((pkg) => fetchLatestRelease(pkg.repo))
        );

        console.log('📝 Generating package documentation...');

        const docsDir = path.join(__dirname, '../docs/Game Packages/Unity/Packages');

        if (!fs.existsSync(docsDir)) {
            fs.mkdirSync(docsDir, { recursive: true });
        }

        for (let i = 0; i < PACKAGES_CONFIG.length; i++) {
            const pkg = PACKAGES_CONFIG[i];
            const release = releases[i];

            const pkgDir = path.join(docsDir, pkg.name);
            if (!fs.existsSync(pkgDir)) {
                fs.mkdirSync(pkgDir, { recursive: true });
            }

            const introContent = createIntroMarkdown(pkg, release);
            fs.writeFileSync(path.join(pkgDir, 'intro.md'), introContent, 'utf-8');

            const usagePath = path.join(pkgDir, 'usage.md');
            if (!fs.existsSync(usagePath)) {
                const usageContent = createUsageMarkdown();
                fs.writeFileSync(usagePath, usageContent, 'utf-8');
            }

            const methodsPath = path.join(pkgDir, 'methods.md');
            if (!fs.existsSync(methodsPath)) {
                const methodsContent = createMethodsMarkdown();
                fs.writeFileSync(methodsPath, methodsContent, 'utf-8');
            }

            const categoryJson = {
                label: pkg.name,
                position: i + 1,
                link: {
                    type: "doc",
                    id: `Game Packages/Unity/Packages/${pkg.name}/intro`,
                },
            };
            fs.writeFileSync(
                path.join(pkgDir, '_category_.json'),
                JSON.stringify(categoryJson, null, 2),
                'utf-8'
            );

            console.log(`✅ Generated documentation for ${pkg.name}`);
        }

        console.log('\n✨ Package documentation generated successfully!');
    } catch (error) {
        console.error('❌ Error generating packages:', error);
        process.exit(1);
    }
}

main();