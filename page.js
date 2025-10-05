"use client"; // required for useState

import { useState } from "react";

export default function Page() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [copied, setCopied] = useState(false);
  const [saving, setSaving] = useState(false);

  // 3. Generate password
  const generatePassword = () => {
    let chars = "abcdefghijklmnopqrstuvwxyz";
    if (includeUppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) chars += "0123456789";
    if (includeSymbols) chars += "!@#$%^&*()_+[]{}<>?/|~`-=";

    if (!chars.length) {
      setPassword("");
      return;
    }

    let newPass = "";
    for (let i = 0; i < length; i++) {
      newPass += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(newPass);
  };

  // 6. Copy password
  const copyToClipboard = async () => {
    if (!password) return;
    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 12000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  // 5. Save to Vault (placeholder)
  const saveToVault = () => {
    if (!password) return alert("Generate a password first.");
    setSaving(true);
    setTimeout(() => {
      alert("Saved to vault (placeholder)");
      setSaving(false);
    }, 500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-md p-6 space-y-6">
        <h1 className="text-2xl font-bold text-center">🔐 Password Generator & Vault</h1>

        {/* 1. Enter your password */}
        <div className="space-y-1">
          <label className="font-medium text-sm">Enter / Paste password</label>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Type or generate a password"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        {/* 2. Checkboxes */}
        <div className="flex gap-4">
          <label className="flex items-center gap-1">
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={(e) => setIncludeUppercase(e.target.checked)}
            />
            Uppercase
          </label>
          <label className="flex items-center gap-1">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
            />
            Numbers
          </label>
          <label className="flex items-center gap-1">
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
            />
            Symbols
          </label>
        </div>

        {/* Password length slider */}
        <div className="space-y-1">
          <label className="font-medium text-sm">Length: {length}</label>
          <input
            type="range"
            min={6}
            max={30}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full"
          />
        </div>

        {/* 3. Generate button */}
        <button
          onClick={generatePassword}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Generate Password
        </button>

        {/* 4. Generated password section */}
        {password && (
          <div className="bg-gray-100 p-3 rounded-md break-all text-center">
            {password}
          </div>
        )}

        {/* 5 + 6. Action buttons: Save + Copy */}
        {password && (
          <div className="flex gap-4">
            <button
              onClick={copyToClipboard}
              className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
            <button
              onClick={saveToVault}
              className="flex-1 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700"
              disabled={saving}
            >
              {saving ? "Saving..." : "Save to Vault"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
