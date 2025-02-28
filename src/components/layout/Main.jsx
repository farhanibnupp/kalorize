import React from "react";
import Smile from '../../assets/Smile.png';
import Makanan from '../../assets/Makanan.png';
import Daging from '../../assets/Daging.png';
import Spagheti from '../../assets/Spagheti.png';
import Ceklis2 from '../../assets/Ceklis2.png';
import Tinju from '../../assets/Tinju.png';
import Api from '../../assets/Api.png';
import Panah from '../../assets/Panah.png';
import Vector from '../../assets/Vector.png'

function Main(){
    return(
        <div className="bg-[#FFF2E1]">
            <div className="bg-[#FFF2E1]">
            <div className="h-[3000px] max-w-screen-xl mx-auto py-4 flex" >
                <div>
                    <div className="rounded-full w-max p-4 mt-24 bg-[#FEE9DE]  ">
                        <p className="text-[#EB0029] font-normal font-[Poppins] inline-block mr-2">Raih Tujuan Sehat Anda </p>
                        <img className="inline-block"src={Smile} alt="Orang Senyum" />
                    </div>
                    <div className="w-[580px] mt-10">
                        <p className="font-[Inter] font-extrabold text-5xl/[80px] text-[#413D66]" >Rekomendasi Makanan sesuai  kebutuhan <span className="font-[Lobster] text-[#F94917]">Protein</span> & <span className="font-[Lobster] text-[#F94917]">Kalori</span> anda</p>
                    </div>
                    <div className="w-[500px] mt-5">
                        <p className="font-[Inter] font-bold text-lg">Temukan Makanan Sesuai Kebutuhan Anda dengan Kalorize. Makanan yang Tepat, Hasil yang Maksimal </p>
                    </div>
                    <div className="rounded-full w-max p-4 bg-[#F94917] mt-6 px-20 mt-10">
                        <p className="text-white font-medium font-[Poppins] ">Get Started</p>
                    </div>
                </div>
                <div className="relative shrink-5">
                    <div className="">
                        <img className="relative z-10" src={Makanan} alt="Makanan" />
                    </div>
                    <div className="rounded-full w-max  bg-white mt-6 flex justify-between absolute p-1 items-center gap-3 top-[540px] ">
                        <div>
                            <div className="bg-[#FEE9DE] p-1 ml-2 rounded-full">
                                <img src={Daging} className = "w-6 h-6"alt="" />
                            </div>
                        </div>
                        <div className="p-1 px-2 drop-shadow-xs">  
                            <p className="font-[Poppins] font-medium text-sm  mb-1">Pilihan Makanan Beragam</p>
                            <p className="font-[Poppins] text-[#828282] text-[10px]">Makanan yang Tepat, Hasil yang Luar Biasa.</p>
                        </div>
                    </div>
                    <div className="rounded-xl w-max p-4 px-6  bg-white mt-6 flex justify-between items-center gap-3 absolute top-[580px] right-[20px]">
                        <div className=" bg-[#F94917] p-2 rounded-[50%]">
                            <img src={Spagheti} alt="" />
                        </div>
                        <div>  
                            <div>
                                <p className="font-[Poppins] font-medium mb-1 font-[Inter] font-normal text-xs">Kalori</p>
                            </div>
                            <div>
                                <p className="font-[Poppins] text-[#828282] text-lg font-normal "><span className="text-[#F94917] font-bold">1986</span> / <span className="text-[#4D555C] font-semibold">1981</span> kcal</p>
                            </div>
                            <div className="">
                                <div className="rounded-full w-24  border-4 border-[#1AB269] border-2 bg-[#E9FCF3] flex justify-center justify-items-end">
                                    <p className="text-[#1AB269] text-xs">Terpenuhi</p>
                                    <img className ="w-[17px]"src={Ceklis2} alt="" />
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="absolute top-[90px] bg-[#FEE9DE] rounded-[21px] rotate-[-20deg] p-2">
                        <img className ="rotate-[20deg] w-[55px] h-[55px]"src={Tinju} alt="" />
                    </div>
                    <div className="absolute top-[90px] right-[60px] ">
                        <img className =" w-[40px] h-[40px]"src={Api} alt="" />
                    </div>
                    <div className="absolute top-[90px] right-[75px] ">
                        <img className =" w-[60px] h-[60px]"src={Panah} alt="" />
                    </div>
                    <div className="absolute top-[140px] right-[70px] ">
                        <img className ="z-0"src={Vector} alt="" />
                    </div>
                    
                </div>
            </div>
        </div>
        </div>
        
        
    );
}

export default Main;