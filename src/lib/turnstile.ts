const SITEVERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

type SiteverifyResult = {
  success: boolean;
  action?: string;
  hostname?: string;
  "error-codes"?: string[];
};

/**
 * Validates a Turnstile token server-side. Tokens are single-use, so call this
 * exactly once per submission. Requires TURNSTILE_SECRET and TURNSTILE_HOSTNAMES.
 */
export async function verifyTurnstile(token: FormDataEntryValue | null, expectedAction: string, remoteIp?: string | null) {
  const secret = process.env.TURNSTILE_SECRET;
  const expectedHostnames = new Set(
    (process.env.TURNSTILE_HOSTNAMES ?? "")
      .split(",")
      .map((hostname) => hostname.trim())
      .filter(Boolean)
  );

  if (!secret || expectedHostnames.size === 0) {
    console.error("Turnstile is not configured: set TURNSTILE_SECRET and TURNSTILE_HOSTNAMES.");
    return false;
  }

  if (typeof token !== "string" || token.length === 0 || token.length > 2048) {
    return false;
  }

  const body = new URLSearchParams({ secret, response: token });
  if (remoteIp) body.set("remoteip", remoteIp);

  let result: SiteverifyResult;
  try {
    const response = await fetch(SITEVERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      signal: AbortSignal.timeout(10_000),
      body,
    });
    if (!response.ok) throw new Error(`siteverify ${response.status}`);
    result = (await response.json()) as SiteverifyResult;
  } catch {
    return false;
  }

  return result.success === true && result.action === expectedAction && expectedHostnames.has(result.hostname ?? "");
}
