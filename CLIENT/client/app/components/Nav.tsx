"use client";
import Image from "next/image";
import React, { useState } from "react";

const Nav = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);

    return (
        <header>
            <nav className="relative flex flex-wrap items-center justify-between px-4 py-2 bg-[#dc0032] text-white">
                <a
                    href="#content"
                    className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-2 focus:bg-white focus:text-black">
                    Przejdź do treści
                </a>
                <a
                    href="#search"
                    className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-2 focus:bg-white focus:text-black">
                    Przejdź do wyszukiwarki
                </a>
                <a
                    href="#footer"
                    className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-2 focus:bg-white focus:text-black">
                    Przejdź do stopki
                </a>

                <div className="flex items-center">
                    <Image
                        className="inline-block w-16 h-16 md:w-24 md:h-24"
                        width={96}
                        height={96}
                        src="./godlo.svg"
                        alt=""
                    />
                    <h1 className="amethysta text-2xl md:text-4xl ml-2 py-2">podatki.gov.pl</h1>
                </div>

                <div className="flex items-end lg:hidden">
                    <button
                        className="btn text-white p-2 rounded mr-2 transition-colors"
                        type="button"
                        onClick={() => setIsSearchModalOpen(true)}>
                        <Image
                            width={30}
                            height={30}
                            className="inline-block h-[30px]"
                            alt="Wyszukaj"
                            src="./search.svg"
                        />
                    </button>

                    <button
                        className="btn text-white px-3 py-2 rounded transition-colors"
                        type="button"
                        aria-label="Menu"
                        onClick={() => setIsNavOpen(!isNavOpen)}>
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h18v2H3v-2z" />
                        </svg>
                    </button>
                </div>

                {isSearchModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 bg-black/70" tabIndex={-1}>
                        <div className="bg-white rounded-lg shadow-lg w-full max-w-lg mx-2" role="document">
                            <div className="p-4">
                                <div className="flex flex-col mb-[5px]">
                                    <div className="flex w-full">
                                        <input
                                            type="text"
                                            name="query"
                                            className="form-control flex-grow border border-gray-300 p-2 rounded-l bg-white text-black placeholder-gray-500"
                                            placeholder="Wpisz szukaną frazę"
                                            required
                                            minLength={3}
                                        />
                                        <div className="flex">
                                            <button
                                                className="btn bg-[#dc0032] hover:bg-red-700 text-white px-3 py-2 border-l border-red-600"
                                                type="submit">
                                                <Image
                                                    width={30}
                                                    height={30}
                                                    className="inline-block h-[30px]"
                                                    alt="Wyszukaj"
                                                    src="./search.svg"
                                                />
                                            </button>
                                            <button
                                                className="btn bg-[#dc0032] hover:bg-red-700 text-white px-3 py-2 rounded-r border-l border-red-600"
                                                onClick={() => setIsSearchModalOpen(false)}>
                                                <span aria-hidden="true">X</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div
                    className={`${
                        isNavOpen ? "block" : "hidden"
                    } w-full lg:flex lg:w-auto lg:items-center lg:justify-end ml-auto`}
                    id="navbarNav">
                    <form
                        id="search"
                        className="hidden lg:flex items-center ml-auto pr-[20px]"
                        action="szukaj"
                        method="GET">
                        <div className="flex items-center mb-[5px]">
                            <div className="relative m-[10px]">
                                <div
                                    tabIndex={0}
                                    className="btn cursor-pointer flex items-center gap-1 font-semibold"
                                    onClick={() => setIsLangOpen(!isLangOpen)}>
                                    PL
                                    <div className="border-r-2 border-b-2 border-white w-2 h-2 transform rotate-45 mb-1 ml-1"></div>
                                </div>

                                {isLangOpen && (
                                    <ul className="absolute top-full text-black  left-0 bg-white border border-gray-200 shadow-md p-2 z-10 list-none min-w-[60px]">
                                        <li>
                                            <a href="/en/" className="block py-1 hover:underline">
                                                EN
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/uk/" className="block py-1 hover:underline">
                                                UK
                                            </a>
                                        </li>
                                    </ul>
                                )}
                            </div>

                            <div className="flex items-center m-[10px]">
                                <button type="button" onClick={() => setIsSearchModalOpen(true)}>
                                    <Image height={30} width={30} alt="Wyszukaj" src="./search.svg" />
                                </button>
                            </div>
                        </div>
                    </form>

                    <div className="hidden lg:flex items-center">
                        <a href="https://www.podatki.gov.pl/e-wizyta-w-urzedzie-skarbowym/">
                            <Image
                                alt="Umów wizytę w urzędzie skarbowym"
                                height={30}
                                width={305}
                                className="m-2.5"
                                src="./wizyta.svg"
                            />
                        </a>
                        <a className="flex gap-x-2" href="https://www.podatki.gov.pl/e-urzad-skarbowy/">
                            <Image alt="e-Urząd Skarbowy" width={164} height={30} className="m-2.5" src="./eUS.svg" />
                        </a>
                    </div>

                    <nav className="flex flex-col lg:hidden w-full">
                        <a className="block py-2 px-0 border-b border-gray-100 " href="/pit/">
                            PIT
                        </a>
                        <a className="block py-2 px-0 border-b border-gray-100 " href="/cit/">
                            CIT
                        </a>
                        <a className="block py-2 px-0 border-b border-gray-100 " href="/vat/">
                            VAT
                        </a>
                        <a className="block py-2 px-0 border-b border-gray-100 " href="/akcyza/">
                            Akcyza
                        </a>
                        <a className="block py-2 px-0 border-b border-gray-100 " href="/clo/">
                            Cło
                        </a>
                        <a className="block py-2 px-0 border-b border-gray-100 " href="/pcc-sd/">
                            PCC, SD
                        </a>
                        <a className="block py-2 px-0 border-b border-gray-100 " href="/podatki-i-oplaty-lokalne/">
                            Podatki i opłaty lokalne
                        </a>
                        <a className="block py-2 px-0 border-b border-gray-100 " href="/pozostale-podatki/">
                            Pozostałe podatki
                        </a>
                        <a className="block py-2 px-0 border-b border-gray-100 " href="/e-deklaracje/">
                            e-Deklaracje
                        </a>
                        <a className="block py-2 px-0 border-b border-gray-100 " href="/jednolity-plik-kontrolny/">
                            Jednolity Plik Kontrolny
                        </a>
                        <a className="block py-2 px-0 " href="/skontaktuj-sie-z-nami/">
                            Skontaktuj się z nami
                        </a>
                    </nav>
                </div>
            </nav>
        </header>
    );
};

export default Nav;
