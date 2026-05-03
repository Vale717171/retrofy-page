function normalizeAddress(value) {
  const trimmedValue = String(value || "").trim();

  if (!trimmedValue) {
    return "";
  }

  try {
    return getSafeWebUrl(trimmedValue);
  } catch {
    try {
      return getSafeWebUrl(`https://${trimmedValue}`);
    } catch {
      return "";
    }
  }
}

function getSafeWebUrl(value) {
  const url = new URL(value);

  if (!["http:", "https:"].includes(url.protocol)) {
    return "";
  }

  return url.href;
}

const cases = [
  ["https://example.com/path", "https://example.com/path"],
  ["http://example.com/", "http://example.com/"],
  ["example.com", "https://example.com/"],
  ["javascript:alert(1)", ""],
  ["data:text/html,<script>alert(1)</script>", ""],
  ["file:///etc/passwd", ""],
  ["chrome://extensions", ""],
  ["", ""]
];

for (const [input, expected] of cases) {
  const actual = normalizeAddress(input);
  if (actual !== expected) {
    console.error({ input, expected, actual });
    process.exit(1);
  }
}

console.log("normalizeAddress blocks non-http(s) URLs");
