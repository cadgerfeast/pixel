# Getting Started

Using this theme with `Slithe` is fast and easy, here's how:

## ⚙️ Installation

``` bash
npm install slithe @pixel/components --save
```

## 🚀 Usage

``` typescript
// Import
import { defineElements, setTheme } from 'slithe';
// Theme
import '@pixel/components/global.css';
import theme from '@pixel/components';
// Initialization
defineElements();
setTheme('light', theme);
```

``` html
<!-- Use it! -->
<sl-button primary>My Pixelized Button</sl-button>
```
