---
sidebar_position: 1
hide_table_of_contents: true
---

# Unity Packages

Welcome to the Unity Packages hub. Here you'll find all my open-source packages designed to enhance your game development workflow.

## What are Unity Packages?

These packages are distributed as UPM (Unity Package Manager) packages, making them easy to install and update in your projects. Each package is independently versioned and documented.

You can find more information about UPM in the official Unity documentation: [Unity Package Manager](https://docs.unity3d.com/Manual/Packages.html).

---

## Installation via UPM

All packages can be installed directly from Git URLs using the Unity Package Manager. Follow these steps:

1. Open your project in Unity
2. Open **Window > Package Manager**
3. Click the **+** button and select **Add package from git URL...**
4. Paste the Git URL for the package you want to install
5. Click **Add**

### General Git URL Format

You can install any package using the following Git URL format:

```text
https://github.com/juanpablomaggi/<package-name>.git
```

Doing this will always install the latest version of the package, and you can update it later using `Update` button.

You can also install an specific version specifying the version tag in the Git URL like this:

```text
https://github.com/juanpablomaggi/<package-name>.git#<version-tag>
```

Doing this will disable the update button fuctionality, so you will need to update the package manually by changing the version tag in the Git URL.

---

## Available Packages

Below is an index of all currently available packages with their latest versions:

| Package | Latest Version | Repository | Description |
|---------|---|---|---|
| Save System | v1.0.2 | [View on GitHub](https://github.com/juanpablomaggi/GameTools-UnitySaveSystem) | Small save system for games |
| Services System | v1.0.1 | [View on GitHub](https://github.com/juanpablomaggi/GameTools-UnityServicesSystem) | Service locator and loader with editor tools |

---

## Getting Help

- **Documentation**: Each package has detailed documentation covering installation, usage, and API reference
- **Issues & Bugs**: Report issues on the respective package's GitHub repository
- **Feature Requests**: Feel free to open discussions on GitHub

---

**Note**: All packages are open-source and available under appropriate licenses. Check each package's LICENSE file for details.
