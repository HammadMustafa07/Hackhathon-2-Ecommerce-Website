


export default function Filters() {
    return (
        <div className="h-[64px] w-[1440px] flex items-center">
            <div className="flex h-[48px] w-[557px]  ml-[24px] gap-[12px]">
                <div className="h-[48px] w-[137px] px-[24px] flex py-[12px] gap-[8px] items-center">
                    <p className="">Category</p>
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#2A254B"><path d="M480-384 288-576h384L480-384Z" /></svg>
                </div>
                <div className="h-[48px] w-[137px] px-[24px] flex py-[12px] gap-[8px] items-center">
                    <p className="">productype</p>
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#2A254B"><path d="M480-384 288-576h384L480-384Z" /></svg>
                </div>
                <div className="h-[48px] w-[137px] px-[24px] flex py-[12px] gap-[8px] items-center">
                    <p className="">Price</p>
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#2A254B"><path d="M480-384 288-576h384L480-384Z" /></svg>
                </div>
                <div className="h-[48px] w-[137px] px-[24px] flex py-[12px] gap-[8px] items-center">
                    <p className="">Brand</p>
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#2A254B"><path d="M480-384 288-576h384L480-384Z" /></svg>
                </div>
            </div>
            <div className="h-[48px] w-[237px] flex gap-[6px] ml-[600px] ">
                <p className="text-[14px] text-[#2A254B] mt-[14px]">Sorting by:</p>
                <div className="h-[48px] w-[154px] flex gap-[8px] items-center">
                    <p className="text-[#2A254B]">Date added</p>
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#2A254B"><path d="M480-384 288-576h384L480-384Z" /></svg>

                </div>
            </div>
        </div>
    )
}