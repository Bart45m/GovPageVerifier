import Image from "next/image";

const Tools = () => {
    return (
        <div className="my-4 py-12">
            <div className="w-full max-w-6xl mx-auto px-7.5">
                <h2 className="mt-0 leading-tight text-2xl font-bold font-montserrat mb-12 text-black">
                    Sprawdź informacje, kwoty, terminy
                </h2>
                <div className="flex flex-wrap -mx-7.5">
                    <div className="w-full md:w-1/2 lg:w-1/3 px-7.5">
                        <h3 className="mt-0 leading-tight text-xl font-bold font-montserrat mb-12 text-black">
                            Szukaj informacji
                        </h3>
                        <div className="mb-12">
                            <div className="text-black">
                                <a
                                    href="https://www.podatki.gov.pl/wyszukiwarki/"
                                    className="block no-underline text-black">
                                    <div className="flex items-start p-3.75 -m-3.75">
                                        <Image
                                            src="https://www.podatki.gov.pl/media/1072/assets-icons-icon-search.svg"
                                            width={24}
                                            height={24}
                                            alt="Search icon"
                                            className="mr-4"
                                        />
                                        <div className="flex-1">
                                            <h4 className="mt-0 mb-2 text-base font-bold font-montserrat leading-6">
                                                Wyszukiwarki
                                            </h4>
                                            <p className="mt-0 mb-0">
                                                Szukaj organizacji pożytku publicznego (OPP), sprawdź podatnika VAT,
                                                szukaj numeru NIP i inne
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 lg:w-1/3 px-7.5">
                        <h3 className="mt-0 leading-tight text-xl font-bold font-montserrat mb-12 text-black">
                            Kalkulatory
                        </h3>
                        <div className="mb-12">
                            <div className="text-black">
                                <a
                                    href="https://www.podatki.gov.pl/kalkulatory-podatkowe/"
                                    className="block no-underline text-black">
                                    <div className="flex items-start p-3.75 -m-3.75">
                                        <Image
                                            src="https://www.podatki.gov.pl/media/1074/assets-icons-icon-calculator.svg"
                                            width={24}
                                            height={24}
                                            alt="Calculator icon"
                                            className="mr-4"
                                        />
                                        <div className="flex-1">
                                            <h4 className="mt-0 mb-2 text-base font-bold font-montserrat leading-6">
                                                Kalkulatory
                                            </h4>
                                            <p className="mt-0 mb-0">Podręczna pomoc w rozliczeniu podatku</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 lg:w-1/3 px-7.5">
                        <h3 className="mt-0 leading-tight text-xl font-bold font-montserrat mb-12 text-black">
                            Pozostałe
                        </h3>
                        <div className="mb-12">
                            <div className="text-black">
                                <a
                                    href="https://www.podatki.gov.pl/inne-narzedzia/"
                                    className="block no-underline text-black">
                                    <div className="flex items-start p-3.75 -m-3.75">
                                        <Image
                                            src="https://www.podatki.gov.pl/media/1071/assets-icons-icon-calendar.svg"
                                            width={24}
                                            height={24}
                                            alt="Calendar icon"
                                            className="mr-4"
                                        />
                                        <div className="flex-1">
                                            <h4 className="mt-0 mb-2 text-base font-bold font-montserrat leading-6">
                                                Inne narzędzia
                                            </h4>
                                            <p className="mt-0 mb-0">
                                                Kalendarium, czas oczekiwania na granicy, statystyka e-Deklaracji i inne
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tools;
