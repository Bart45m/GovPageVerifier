const SelectTaxCard = ({ type, description }: { type: string; description: string }) => {
    const getUrl = () => {
        const typeMap: { [key: string]: string } = {
            PIT: "pit",
            CIT: "cit",
            VAT: "vat",
            Akcyza: "akcyza",
            Cło: "clo",
            "PCC, SD": "pcc-sd",
            "Podatki i opłaty lokalne": "podatki-i-oplaty-lokalne",
            "Inne podatki": "pozostale-podatki",
        };
        const slug = typeMap[type] || type.toLowerCase().replace(/\s+/g, "-");
        return `https://www.podatki.gov.pl/${slug}/`;
    };

    return (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-3.75 my-6">
            <div className="border border-gray-300 rounded text-black h-full hover:bg-[#015497] transition-colors duration-200 group">
                <a href={getUrl()} className="block h-full no-underline text-black group-hover:text-white">
                    <div className="h-full p-6">
                        <div className="flex flex-wrap mb-4">
                            <div className="flex-1">
                                <h3 className="mt-0 mb-2 leading-tight text-xl font-bold font-montserrat">{type}</h3>
                            </div>
                            <div className="shrink-0 ml-2">
                                <p className="text-right m-0">
                                    <i className="fas fa-arrow-right text-black group-hover:text-white transition-colors duration-200" />
                                </p>
                            </div>
                        </div>
                        <p className="m-0 text-sm">{description}</p>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default SelectTaxCard;
