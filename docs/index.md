# OverTheWire Walkthroughs

This repository contains walkthroughs for selected OverTheWire wargames (starting with **Natas** and **Bandit**).  
Purpose: document solutions, capture key takeaways, and publish as a static site using MkDocs + Material.

**Disclaimer**  
All content is for **educational purposes only**. Do not use these techniques outside authorized environments.

---

## Repository layout (top-level)
    docs/
      index.md
      natas/
        README.md
        natas0.md
        natas1.md
        ...
      bandit/
        README.md
        bandit0.md
        bandit1.md
        ...
      shared-resources/
        images/
        scripts/
      docs/
        methodology.md
        tools.md
        references.md
    mkdocs.yml
    .github/workflows/deploy.yml
    LICENSE
    README.md

---

## Quick links
- Home (site index): `docs/index.md`
- Natas: `docs/natas/README.md`
- Bandit: `docs/bandit/README.md`

---

## Preview locally
Install MkDocs and Material theme (if you haven't already):

    pip install mkdocs mkdocs-material

Serve locally:

    mkdocs serve

Open http://127.0.0.1:8000 in your browser.

---


## Local Development (Python virtual environment + MkDocs)

### 1. Clone the repository
```bash
git clone https://github.com/your-username/overTheWireWalkthroughs.git
cd overTheWireWalkthroughs
```

### 2. Create a Python virtual environment
```bash
python3 -m venv .venv
```

### 3. Activate the virtual environment

- **Linux / macOS**
```bash
source .venv/bin/activate
```

- **Windows (PowerShell)**
*** NOTE: I was required to change the execution policy first before running Activate script. You might not need this.
```powershell
Set-ExecutionPolicy Unrestricted -Scope Process
.venv\Scripts\Activate.ps1
```

### 4. Install MkDocs and Material theme
```bash
pip install mkdocs mkdocs-material
```

### 5. Run the local development server
```bash
mkdocs serve
```

Open [http://127.0.0.1:8000](http://127.0.0.1:8000) in your browser to preview the site.
---

## License
This project is licensed under the MIT License. See `LICENSE`.

