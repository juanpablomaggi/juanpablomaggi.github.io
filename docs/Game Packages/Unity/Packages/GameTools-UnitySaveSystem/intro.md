---
sidebar_position: 1
---

# GameTools-UnitySaveSystem

Small save system for games

## Installation

Add this package to your Unity project using the UPM (Unity Package Manager).

### Git URL

Latest version:

```text
https://github.com/juanpablomaggi/GameTools-UnitySaveSystem.git
```

Specific version:

```text
https://github.com/juanpablomaggi/GameTools-UnitySaveSystem.git#1.0.2
```

### Steps

1. Open your project in Unity
2. Open **Window > Package Manager**
3. Click the **+** button and select **Add package from git URL...**
4. Paste: `https://github.com/juanpablomaggi/GameTools-UnitySaveSystem.git`
5. Click **Add**

## Version Information

- **Latest Version:** `1.0.2`
- **Released:** February 16, 2026
- **Repository:** [juanpablomaggi/GameTools-UnitySaveSystem](https://github.com/juanpablomaggi/GameTools-UnitySaveSystem)

## Features

For a complete list of features, visit the [repository](https://github.com/juanpablomaggi/GameTools-UnitySaveSystem).

## Documentation

For detailed documentation, guides, and examples, please visit the [official repository](https://github.com/juanpablomaggi/GameTools-UnitySaveSystem).

## Changelog

### Changed

- Refactored ISaveable to use generics as save data.
- Made SaveRegistry an internal class to avoid it's use outside of the package.
- Register of ISaveable is now done through a method on the SaveService class. If the game was already load, it will inject the saved state automatically.
- LoadGame returns a boolean to indicate if the load was successful or not.

### Added

- Specific methods on SaveService to delete saves.
- Unit tests for SaveSystem.
- New documentation.

## Support

If you encounter any issues or have questions:

- Open an issue on [GitHub](https://github.com/juanpablomaggi/GameTools-UnitySaveSystem/issues)
- Check existing documentation
- Review the [README](https://github.com/juanpablomaggi/GameTools-UnitySaveSystem/blob/main/README.md)

## License

This package is available under the license specified in the repository.
