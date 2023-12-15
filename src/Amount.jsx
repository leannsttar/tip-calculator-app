export function Amount ({type, amount}) {
    return (
        <>
            <div className="flex justify-between">
                <div className="text-white">
                    <p className="font-semibold text-[.9em]">{type}</p>
                    <p className="font-semibold text-[.7em] text-[#5c888f]">/ person</p>
                </div>
                <div>
                    <p className="text-[#39c1b1] text-3xl font-bold md:text-[2.7em] ">${amount === 0 ? '0.00' : amount}</p>
                </div>
            </div>
        </>
    )
}