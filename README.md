# Password Generator + Vault (Rough UI)

This is a **rough version** of the Password Generator + Vault MVP assignment.  
The UI is functional, showing password generation, checkboxes, copy, and save placeholder. Backend integration (MongoDB, encryption, auth) will be added later.

---

## 🚀 Features (Rough Version)

1. Enter / edit password  
2. Checkboxes: Include Uppercase, Numbers, Symbols  
3. Password length slider  
4. Generate button  
5. Generated password display  
6. Copy to clipboard (auto-clear in 12s)  
7. Save to Vault (placeholder alert)

---

## 💻 Tech Stack

- **Frontend:** Next.js (App Router)  
- **Styling:** Tailwind CSS  
- **Language:** JavaScript (React)

> Next: Backend (MongoDB + Auth + encrypted Vault) will be implemented in next iteration.

---

## ⚡ How to Run Locally

1. Clone the repo:
```bash
git clone <your-repo-url>
cd password-vault
```
2. Install Dependencies
```
npx create-next-app@latest
```
```
✔ Would you like to use TypeScript? … No
✔ Would you like to use ESLint? … Yes
✔ Would you like to use Tailwind CSS? … Yes  ✅
✔ Would you like to use `src/` directory? … No 
✔ App Router or Pages Router? … yes
✔ Would you like to customize the default import alias (@/*)? … No
```
```
npm run dev
```
4. Open in browser: http://localhost:3000
