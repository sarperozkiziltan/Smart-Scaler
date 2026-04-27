# Smart Scaler - Lens Studio Plugin

Smart Scaler is a **CoreService** plugin for Lens Studio developers. It automatically calculates and applies the correct `ScreenTransform` left/right bounds for `Screen Image` objects based on their texture width and a 720px reference canvas.

## 🚀 Features
- **Right-Click Integration:** Works seamlessly via the context menu without adding cluttered UI panels.
- **Auto-Calculation:** Gets the selected object's texture width and calculates the exact ratio (`width / 720`).
- **Instant Alignment:** Automatically updates the `anchors.left` and `anchors.right` values of the ScreenTransform.

## 🛠 Installation
1. Download or clone this repository.
2. Open Lens Studio.
3. Go to **Edit > Preferences** (or **Lens Studio > Settings** on Mac).
4. Navigate to the **Plugins** tab.
5. Click the **+ (Add new Location)** button.
6. Select the downloaded plugin folder.
7. Ensure the checkbox next to the plugin is ticked.

## 🖱 Usage
1. Go to the Scene or Objects panel in Lens Studio.
2. Right-click on a `Screen Image` object.
3. Click the plugin name from the context menu.
4. Your object's horizontal bounds will be instantly updated.

---
**Author:** Sarper Özkızıltan
