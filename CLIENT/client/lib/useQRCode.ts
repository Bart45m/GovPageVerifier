"use client";

import { useEffect, useState } from "react";
import { startSession, fetchQRCode } from "@/lib/api";

interface QRData {
    text?: string;
    qr_code?: string;
    status?: string;
    [key: string]: unknown;
}

export function useQRCode(shouldInitialize: boolean = false) {
    const [qrData, setQrData] = useState<QRData | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!shouldInitialize) return;

        const initializeQR = async () => {
            try {
                setLoading(true);
                setError(null);
                setIsVisible(true);

                await startSession();
                const data = await fetchQRCode();
                setQrData(data);

                if (!data || (!data.text && !data.qr_code)) {
                    setError("Nie udało się wygenerować kodu QR");
                }
            } catch (err) {
                console.error("Error initializing QR code:", err);
                setError(err instanceof Error ? err.message : "Nieznany błąd");
            } finally {
                setLoading(false);
            }
        };

        initializeQR();
    }, [shouldInitialize]);

    const closeQRCode = () => {
        setIsVisible(false);
        setQrData(null);
        setError(null);
    };

    return { qrData, loading, error, isVisible, closeQRCode };
}
