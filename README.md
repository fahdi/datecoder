# DateCoder

A free online tool for building PHP, Python, and JavaScript date format strings with real-time preview and 50+ country formats.

🌐 **Live Demo**: [https://fahdmurtaza.com/datecoder](https://fahdmurtaza.com/datecoder)

## Features

- **Multi-Language Support**: Build date formats for PHP `date()`, Python `strftime()`, and JavaScript
- **Interactive Format Builder**: Drag-and-drop interface for custom date formats
- **Country Formats**: 50+ pre-configured date formats used by different countries
- **Real-Time Preview**: See your formatted date output instantly
- **Search & Filter**: Quickly find country-specific formats
- **Language Switching**: Toggle between PHP, Python, and JavaScript examples

## Supported Languages

| Language | Function/Method | Example Format | Output |
|----------|----------------|----------------|--------|
| **PHP** | `date()` | `Y-m-d H:i:s` | 2025-03-01 13:45:30 |
| **Python** | `strftime()` | `%Y-%m-%d %H:%M:%S` | 2025-03-01 13:45:30 |
| **JavaScript** | Custom patterns | `YYYY-MM-DD HH:mm:ss` | 2025-03-01 13:45:30 |

## Quick Start

1. Visit [fahdmurtaza.com/datecoder](https://fahdmurtaza.com/datecoder)
2. Choose your programming language (PHP/Python/JavaScript)
3. Either:
   - Use the **Custom Format** tab to build your own format
   - Browse the **Country Formats** tab for pre-made formats
4. Copy the generated format string into your code

## Development

### Setup
```bash
# Set up environment
./setup_env.sh
```

### Deployment
```bash
# Deploy to production
python deploy.py
```

## File Structure
```
datecoder/
├── index.html          # Main application
├── favicon.ico         # Site favicon  
├── img/               # Assets
├── deploy.py          # Deployment script
├── requirements.txt   # Python dependencies
└── setup_env.sh       # Environment setup
```

## Technology Stack
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Deployment**: Python (paramiko for SFTP)
- **Hosting**: Static HTML deployment

## Contributing

This is a single-page application built with vanilla JavaScript. The main application logic is contained in `index.html` with embedded CSS and JavaScript.

## License

MIT License - feel free to use and modify for your projects.
