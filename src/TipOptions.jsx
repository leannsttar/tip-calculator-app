export function TipOptions({ percentage, tipValue }) {

  return (
    <>
   
        {tipValue === percentage ? (
          <div className="bg-[#26c2ad] text-[#004643] rounded-md py-2 cursor-pointer">
            <p className="text-2xl text-center font-medium">{percentage}%</p>
          </div>
        ) : (
          <div className="bg-[#00494d] hover:bg-[#9fe8df] text-white hover:text-[#004643] rounded-md py-2 cursor-pointer">
            <p className="text-2xl text-center font-medium">{percentage}%</p>
          </div>
        )}
     
    </>
  );
}
