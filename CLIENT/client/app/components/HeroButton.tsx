import React from "react";

const HeroButton = () => {
    return (
        <div
            className="my-4 py-12 bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: 'url("https://www.podatki.gov.pl/media/4537/sg_e-deklaracje.png")',
                backgroundColor: "#333",
            }}>
            <div className="w-full max-w-6xl mx-auto px-7.5">
                <div className="flex flex-wrap -mx-7.5">
                    <div className="w-full px-7.5">
                        <div className="flex flex-col">
                            <div className="flex-1 p-0">
                                <div className="flex flex-wrap -mx-7.5 items-center">
                                    <div className="flex-1 px-7.5 text-white my-4">
                                        <h2 className="mt-0 leading-tight text-2xl font-bold font-montserrat mb-3">
                                            Wyślij e-deklarację
                                        </h2>
                                        <p className="mt-0 mb-0 font-semibold font-montserrat">
                                            Dowiedz się, jak złożyć dokument elektronicznie. Pobierz aplikację i inne
                                            narzędzia służące do wysyłania dokumentów
                                        </p>
                                    </div>
                                    <div className="shrink-0 px-7.5">
                                        <a
                                            href="https://www.podatki.gov.pl/e-deklaracje/"
                                            className="inline-block px-6 py-2 text-center text-white text-base font-semibold font-montserrat tracking-widest border-2 border-white bg-transparent hover:bg-white hover:text-gray-800 transition-colors">
                                            Przejdź do e-Deklaracji
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroButton;
