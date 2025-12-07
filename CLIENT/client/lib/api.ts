const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";

function generateSessionId(): string {
    return "session_" + Math.random().toString(36).substr(2, 9) + "_" + Date.now();
}

function setSessionCookie(sessionId: string): void {
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + 24 * 60 * 60 * 1000); // 24 h
    const expires = "expires=" + expirationDate.toUTCString();
    document.cookie = `_pageCookie=${sessionId}; ${expires}; path=/; SameSite=Strict`;
    console.log("Session cookie set:", sessionId);
}

// const USE_MOCK_DATA = true;

// const mockQRTexts = [
//     "https://github.com/hacknation",
//     "https://example.com/session/abc123xyz",
//     "QR-CODE-SESSION-12345",
//     "user@example.com|session|2025-12-07",
//     "https://localhost:8000/authenticate/token/xyz789",
// ];

export async function startSession() {
    try {
        const sessionId = generateSessionId();

        const response = await fetch(`${API_BASE_URL}/start-session`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                session_id: sessionId,
                created_at: new Date().toISOString(),
            }),
            credentials: "include",
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        setSessionCookie(sessionId);

        const data = await response.json();
        console.log("Session started:", data);
        return { ...data, session_id: sessionId };
    } catch (error) {
        console.error("Error starting session:", error);
    }
}

function getSessionCookie(): string | null {
    const name = "_pageCookie=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(";");

    for (let cookie of cookieArray) {
        cookie = cookie.trim();
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length);
        }
    }
    return null;
}

export function getSessionIdFromCookie(): string | null {
    return getSessionCookie();
}

export async function fetchQRCode() {
    try {
        // if (USE_MOCK_DATA) {
        //     const randomText = mockQRTexts[Math.floor(Math.random() * mockQRTexts.length)];
        //     const mockData = {
        //         text: randomText,
        //         status: "success",
        //         timestamp: new Date().toISOString(),
        //     };

        //     await new Promise((resolve) => setTimeout(resolve, 500));
        //     console.log("QR Code data mock:", mockData);
        //     return mockData;
        // }

        const sessionId = getSessionCookie();
        const response = await fetch(`${API_BASE_URL}/qr-code`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                ...(sessionId && { "X-Session-ID": sessionId }),
            },
            credentials: "include",
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("QR Code data:", data);
        return data;
    } catch (error) {
        console.error("Error fetching QR code:", error);
    }
}

export async function initialize() {
    console.log("Initializing...");

    await startSession();

    const qrData = await fetchQRCode();

    if (qrData && qrData.text) {
        console.log("QR Code data:", qrData.text);
    } else if (qrData && qrData.qr_code) {
        console.log("QR Code data:", qrData.qr_code);
    } else {
        console.error("No QR code data received");
    }
}
