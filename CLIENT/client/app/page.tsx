import React from "react";
import Nav from "./components/Nav";
import SelectTax from "./components/SelectTax";
import HeroButton from "./components/HeroButton";
import Tools from "./components/Tools";
import HeroTitles from "./components/HeroTitles";
import { QRCodeComponent } from "./components/QRCodeComponent";

export default function Main() {
    return (
        <>
            <Nav />
            <div className="box-border w-full mr-auto ml-auto pl-0 pr-0">
                <HeroTitles />
                <QRCodeComponent />
                <SelectTax />
                <HeroButton />
                <Tools />
            </div>
        </>
    );
}
