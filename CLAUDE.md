# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

DateCoder is a web-based date format builder tool that helps developers create date format strings for PHP, Python, and JavaScript. The application is a single-page HTML application with embedded CSS and JavaScript that provides:

- Interactive date format builders with drag-and-drop functionality
- Support for PHP date(), Python strftime(), and JavaScript date formatting
- Pre-configured country-specific date formats (50+ formats)
- Real-time preview of formatted dates
- Language switching between PHP, Python, and JavaScript

## Architecture

### Core Structure
- **index.html** - Single-page application containing all functionality
  - Embedded CSS styles (~270 lines)
  - JavaScript logic (~600 lines)
  - Multi-language support (PHP/Python/JavaScript)
  - Two-tab interface: Custom Format Builder and Country Formats

### Key Components
- **Language Switcher** - Dynamically changes UI and format examples
- **Format Builder** - Drag-and-drop interface for custom date formats
- **Country Formats** - Pre-configured formats for different countries with search
- **Real-time Preview** - Shows formatted output as users build formats

### Data Structure
- `countryFormats` array contains 47+ predefined formats with PHP, Python, and JavaScript equivalents
- `formatParts` array manages drag-and-drop format building
- Language-specific format conversion logic for real-time previews

## Development Commands

### Environment Setup
```bash
# Set up Python virtual environment and dependencies
./setup_env.sh

# Manual activation
source venv/bin/activate
```

### Deployment
```bash
# Deploy to production server (requires SSH key authentication)
python deploy.py
```

The deployment script:
- Creates secure zip package with only datecoder files
- Uploads via SFTP to production server
- Extracts to `/datecoder/` folder only
- Includes comprehensive security checks and logging
- Performs clean deployment (removes old files first)

## File Structure
```
datecoder/
├── index.html          # Main application file
├── favicon.ico         # Site favicon
├── img/               # Image assets
│   ├── bg.jpg         # Background image
│   ├── datecoder.svg  # Logo SVG
│   ├── icon.svg       # Icon SVG  
│   └── social.png     # Social media preview image
├── deploy.py          # Production deployment script
├── requirements.txt   # Python dependencies for deployment
├── setup_env.sh       # Environment setup script
└── venv/             # Python virtual environment (gitignored)
```

## Key Features Implementation

### Multi-Language Support
The application supports three programming languages with dynamic switching:
- **PHP**: Uses `date()` function format codes (Y, m, d, H, i, s, etc.)
- **Python**: Uses `strftime()` format codes (%Y, %m, %d, %H, %M, %S, etc.)
- **JavaScript**: Uses custom format patterns (YYYY, MM, DD, HH, mm, ss, etc.)

### Format Building Logic
- Users select from dropdowns to build custom formats
- Drag-and-drop reordering of format components
- Automatic separator insertion between date/time components
- Real-time preview using JavaScript date formatting

### Country Format Database
Each country format includes:
- Country/region name
- Format strings for all three languages
- Human-readable description
- Real-time search/filter functionality

## Production Environment
- Hosted at: https://fahdmurtaza.com/datecoder/
- Server: Linux with SFTP access
- Deployment: Automated via Python script with security checks
- No build process required - direct HTML/CSS/JS deployment