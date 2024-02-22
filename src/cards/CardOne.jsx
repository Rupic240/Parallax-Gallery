const CardOne = ({ title, client, year, children }) => {
    return (
        <div className="w-full h-auto text-white px-5">
            <div className="grid gap-3 mb-10">
                <h1 className="text-6xl">{title}</h1>
                <div>
                    <h2 className="text-xl">Client:</h2>
                    <p>{client}</p>
                </div>
                <div>
                    <h2 className="text-xl">Year:</h2>
                    <p>{year}</p>
                </div>
            </div>
            <div className="grid gap-10">
                {children}
            </div>
        </div>
    )
}

export default CardOne; 