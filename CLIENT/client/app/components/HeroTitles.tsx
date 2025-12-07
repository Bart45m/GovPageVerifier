"use client";

import React, { useState } from "react";
import { QRCodeComponent } from "./QRCodeComponent";

const HeroTitles = () => {
    const [showQRCode, setShowQRCode] = useState(false);

    const handleMObywatelClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setShowQRCode(true);
    };

    return (
        <>
            <div
                className="py-12 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage:
                        'url("https://www.podatki.gov.pl/media/11002/srody-z-ksef-baner-podatki_gov_pl-glowna_2160-x-460-poprawiony.png")',
                    backgroundColor: "#333",
                }}>
                <div className="w-full max-w-6xl mx-auto px-7.5">
                    <div className="flex flex-wrap">
                        <div className="w-full">
                            <div className="flex flex-col">
                                <div className="flex-1 p-0">
                                    <div className="flex flex-wrap items-center">
                                        <div className="flex-1 text-white my-4">
                                            <h2 className="mt-0 leading-tight text-2xl font-bold font-montserrat mb-3 text-white">
                                                Środy z KSeF{" "}
                                            </h2>
                                            <p className="mt-0 mb-4 font-semibold font-montserrat" />
                                            <div className="flex flex-wrap gap-4 flex-col sm:flex-row">
                                                <a
                                                    className="inline-block px-6 py-2 text-center text-white text-base font-semibold font-montserrat tracking-widest border-2 border-white bg-transparent hover:bg-white hover:text-gray-800 transition-colors"
                                                    href="https://ksef.podatki.gov.pl/srody-z-ksef"
                                                    target="_blank"
                                                    rel="noopener noreferrer">
                                                    Sprawdź
                                                </a>
                                                <button
                                                    onClick={handleMObywatelClick}
                                                    className="inline-flex items-center gap-2 px-6 py-2 text-center text-white text-base font-semibold font-montserrat tracking-widest bg-red-600 hover:bg-red-700 transition-colors no-underline cursor-pointer border-none">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="26"
                                                        height="26"
                                                        viewBox="0 0 16 16"
                                                        className="fill-white">
                                                        <path d="M8.355 2.147a.5.5 0 0 0-.708 0C6.404 3.388 5.03 4 3.5 4a.5.5 0 0 0-.5.5v3.001c0 3.219 1.641 5.407 4.842 6.473a.5.5 0 0 0 .316 0C11.358 12.908 13 10.72 13 7.501V4.5a.5.5 0 0 0-.5-.5c-1.531 0-2.905-.61-4.145-1.853m2.499 4a.5.5 0 0 1 0 .707l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 8.793l2.646-2.646a.5.5 0 0 1 .708 0" />
                                                    </svg>
                                                    <span className="hidden sm:inline">
                                                        Zweryfikuj za pomocą mObywatela
                                                    </span>
                                                    <span className="sm:hidden">Weryfikuj przez mObywatel</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {showQRCode && <QRCodeComponent shouldInitialize={true} />}
        </>
    );
};

export default HeroTitles;
