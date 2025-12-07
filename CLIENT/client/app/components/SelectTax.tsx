import SelectTaxCard from "./SelectTaxCard";

const TAX_CARDS_CONTENT = [
    {
        type: "PIT",
        description:
            "Tu rozliczysz podatek dochodowy od osób fizycznych. Informacje o ulgach, odliczeniach, stawkach i limitach",
    },
    {
        type: "CIT",
        description: "Tu rozliczysz podatek dochodowy od osób prawnych. Informacje o ulgach, stawkach i limitach",
    },
    {
        type: "VAT",
        description: "Tu rozliczysz podatek od towarów i usług. Informacje o ulgach, stawkach i limitach",
    },
    {
        type: "Akcyza",
        description: "Podatek od niektórych rodzajów wyrobów. Informacje o stawkach, znakach akcyzy, EMCS",
    },
    {
        type: "Cło",
        description:
            "Informacje dla osób fizycznych, przedsiębiorców, taryfy celne, ograniczenia przywozu i wywozu towaru, zwolnienia",
    },
    {
        type: "PCC, SD",
        description:
            "Tu rozliczysz podatek od czynności cywilnoprawnych oraz podatek od spadków i darowizn. Ulgi, odliczenia, stawki i limity",
    },
    {
        type: "Podatki i opłaty lokalne",
        description:
            "Podatki: od nieruchomości, środków transportowych, rolny, leśny. Opłaty: targowa, miejscowa, uzdrowiskowa, reklamowa, od posiadania psów. Stawki i zwolnienia",
    },
    {
        type: "Inne podatki",
        description:
            "Podatek od gier hazardowych, produkcji okrętowej, tonażowy, od wydobycia niektórych kopalin, od niektórych instytucji finansowych, od sprzedaży detalicznej, opłata skarbowa",
    },
];

const SelectTax = () => {
    return (
        <div className="my-4 py-12">
            <div className="w-full max-w-6xl mx-auto px-7.5">
                <h2 className="mt-0 leading-tight text-2xl font-bold font-montserrat mb-4 text-black">
                    Wybierz podatek
                </h2>
                <div className="flex flex-wrap -mx-3.75" role="list">
                    {TAX_CARDS_CONTENT.map((card) => (
                        <SelectTaxCard key={card.type} type={card.type} description={card.description} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SelectTax;
