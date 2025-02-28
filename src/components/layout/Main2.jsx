import React from "react";
import Smile from '../../assets/Smile.png';
import Frame2 from '../../assets/Frame2.png';
import BTP from '../../assets/BTP.png';
import StartUp from '../../assets/StartUp.png';
import Fonder from '../../assets/Fonder.png';
import Wira from '../../assets/Wira.png';
import android from '../../assets/Android.png';
import Mie2 from '../../assets/Mie2.png';
import Frame_Last from  '../../assets/Frame_Last.png';
import AI from '../../assets/AI.png';

function Main2(){
    return(
        <div className="bg-white">
            <div className="bg-[#FFF2E1] p-4">
                <div className="bg-[#FFF2E1] rounded-b-[200px]">
                    <div className=" max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row" >
                        <div>
                            <div className="rounded-full w-max p-4 md:mt-24 bg-[#FEE9DE]  ">
                                <p className="text-[#EB0029] text-[12px] font-medium font-[Poppins] inline-block mr-2">Raih Tujuan Sehat Anda </p>
                                <img className="inline-block w-[20px]"src={Smile} alt="Orang Senyum" />
                            </div>
                            <div className=" w-[280px] md:w-[580px] mt-10">
                                <p className="font-[Inter] font-extrabold text-4xl/[60px] md:text-5xl/[80px] text-[#413D66]" >Rekomendasi Makanan sesuai  kebutuhan <span className="font-[Lobster] text-[#F94917]">Protein</span> & <span className="font-[Lobster] text-[#F94917]">Kalori</span> anda</p>
                            </div>
                            <div className="w-[250px] md:w-[500px] mt-5">
                                <p className="font-[Inter] font-bold text-lg">Temukan Makanan Sesuai Kebutuhan Anda dengan Kalorize. Makanan yang Tepat, Hasil yang Maksimal </p>
                            </div>
                            <div className="rounded-full w-max p-4 bg-[#F94917]  md:mt-6 px-15 md:px-20 mt-7">
                                <p className="text-white font-medium text-2xl md:text-xl font-[Poppins] ">Get Started</p>
                            </div>
                        </div>
                        <div className="relative">
                            <img className="md:static  md:w-[100%] h-auto " src={Frame_Last} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* supported by */}
            <div>
                <div className="text-2xl text-center font-[Poppins] font-bold text-[#413D66] mt-10">
                    Supported By
                </div>
                <div className="w-full">
                    <div className="flex md:mx-10 mx-5 justify-center flex-wrap items-center md:space-x-8 gap-x-8">
                        <div className="">
                            <img src={BTP} className="w-[100px]" alt="BTP Gambar" />
                        </div>
                        <div className="">
                            <img src={StartUp} className="w-[100px]" alt="Start Up Gambar" />
                        </div>
                        <div className="">
                            <img src={Fonder} className="w-[100px]" alt="BTP Gambar" />
                        </div>
                        <div className="">
                            <img src={Wira} className="w-[100px] " alt="Wira Gambar" />
                        </div>
                    </div>
                </div>
                
             </div>
             {/* Apa itu calorize */}
             <div className="bg-[#FFF2E1] h-[1000px]">
                <div className="p-4 max-w-screen-xl mx-auto flex justify-between md:flex-row flex-col">
                    <div>
                        <div className="mx-auto md:text-left text-center md:w-full w-[250px] md:mt-[100px]">
                            <p className="text-[Inter] font-bold text-[#413D66] md:text-5xl text-3xl">Apa Itu <span className="text-[#F94917]">KALORIZE ?</span> </p>
                        </div>
                        <div className="mx-auto md:w-[450px] w-[80%] md:mt-20 mt-5 md:text-left text-center">
                            <p className="font-[Inter] font-bold text-[#413D66] md:text-2xl text-xl"> Kalorize adalah platform rekomendasi makanan yang menyediakan solusi makanan sesuai dengan kebutuhan dan preferensi gizi pengguna.</p>
                        </div>
                    </div>
                    <div className=" relative md:w-[600px] md:min-w-[400px] w-[300px] mx-auto mt-[50px]">
                        <div className="bg-[#F94917] md:w-[120px] w-[75px] border-black md:py-2 py-1 md:h-[160px] rounded-xl absolute md:left-[calc(100%-400px)] left-[60px] mx-auto md:top-[180px] top-[80px] shrink-0 ">
                            <div className="py-1">
                                <div className=" mx-auto bg-white rounded-full md:mw-[80px] md:w-[80px] w-[50px]">
                                    <img className = ""src={Mie2} alt="" />
                                </div>
                                <div className=" mx-auto mt-2">
                                    <p className="text-center md:text-xs text-[7px] font-medium text-white font-[Poppins]">Kalori & Proteinmu Terpenuhi</p>
                                </div>
                            </div>
                            
                        </div>
                        <div className="bg-white rounded-full absolute flex md:top-[390px] md:left-[calc(100%-450px)] md:p-2 p-1 left-[60px] z-10 items-center md:w-[220px] w-[110px] top-[230px] justify-around">
                                <div className="p-1 bg-[#FFF7F2] rounded-full">
                                    <img className="md:w-[30px] w-[15px]" src={AI} alt="AI" />
                                </div>
                                <div className="md:w-[130px] w-[80px]">
                                    <p className="text-center md:text-xs text-[7px] font-medium">AI Reccomendation System</p>
                                </div>
                            </div>
                        <div className="md:w-64 md:h-64 w-[150px] gap-2 right-3 absolute">
                            <img className = ""src={android} alt="HP"/>
                        </div>
                    </div>
                </div>
             </div>
             
        </div>
       
    );
}

export default Main2;