"use client";

import { useQRCode } from "@/lib/useQRCode";
import { QRCodeSVG } from "qrcode.react";

interface QRCodeComponentProps {
    shouldInitialize?: boolean;
}

export function QRCodeComponent({ shouldInitialize = false }: QRCodeComponentProps) {
    const { qrData, loading, error, isVisible, closeQRCode } = useQRCode(shouldInitialize);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-2.5 right-2.5 z-50 bg-white rounded-lg shadow-xl p-6 border border-gray-200 max-w-sm">
            <button
                onClick={closeQRCode}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 font-bold text-xl w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
                ✕
            </button>

            <div className="flex flex-col items-center justify-center">
                {loading && <div className="text-sm text-gray-600">Generowanie QR kodu...</div>}
                {error && <div className="text-sm text-red-600 text-center">Błąd: {error}</div>}
                {!loading && !error && qrData && (qrData.text || qrData.qr_code) && (
                    <div className="text-center">
                        <QRCodeSVG
                            value={qrData.text || qrData.qr_code || ""}
                            size={200}
                            level="H"
                            bgColor="#ffffff"
                            fgColor="#000000"
                        />
                        <p className="text-xs text-gray-500 mt-3">
                            {(qrData.text || qrData.qr_code || "").substring(0, 30)}...
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
