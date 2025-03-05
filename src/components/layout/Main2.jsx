import React from "react";
import Smile from '../../assets/Smile.png';
import Frame2 from '../../assets/Frame2.png';
import Api from '../../assets/Api.png';
import BTP from '../../assets/BTP.png';
import StartUp from '../../assets/StartUp.png';
import Fonder from '../../assets/Fonder.png';
import Wira from '../../assets/Wira.png';
import android from '../../assets/Android.png';
import Mie2 from '../../assets/Mie2.png';
import Makanan from '../../assets/Makanan2.png';
import Daging from '../../assets/Daging.png';
import Ceklis2 from  '../../assets/Ceklis2.png';
import Spagheti from '../../assets/Spagheti.png';
import AI from '../../assets/AI.png';
import Tinju from '../../assets/Tinju.png';
import Panah from '../../assets/Panah.png';
import Vector from '../../assets/Vector.png';
import Daun from '../../assets/Daun.png';
import Food from '../../assets/Food.png';
import Verification from '../../assets/verification.png';
import Tech from '../../assets/Tech.png';

function Main2(){
    return(
        <div className="bg-white">
            <div className="">
                <div className="bg-[#FFF2E1] md:[clip-path:ellipse(110%_680px_at_50%_0%)] md:h-[690px] ">
                    <div className="max-w-screen-xl mx-auto flex flex-between flex-col-reverse md:flex-row" >
                        <div className="md:w-full md:pb-0 pb-20 md:pl-0 pl-3">
                            <div className="rounded-full w-max p-4 md:mt-[80px] mt-[420px] bg-[#FEE9DE]  ">
                                <p className="text-[#EB0029] text-[12px] font-medium font-[Poppins] inline-block mr-2">Raih Tujuan Sehat Anda </p>
                                <img className="inline-block w-[20px]"src={Smile} alt="Orang Senyum" />
                            </div>
                            <div className="md:max-w-[700px] mt-10">
                                <p className="font-[Inter] font-extrabold text-4xl/[60px] md:text-[3vw]/[60px] text-[#413D66]" >Rekomendasi Makanan sesuai kebutuhan <span className="font-[Lobster] text-[#F94917]">Protein</span> & <span className="font-[Lobster] text-[#F94917]">Kalori</span> anda</p>
                            </div>
                            <div className="md:max-w-[500px] mt-5">
                                <p className="font-[Inter] font-bold text-lg">Temukan Makanan Sesuai Kebutuhan Anda dengan Kalorize. Makanan yang Tepat, Hasil yang Maksimal </p>
                            </div>
                            <div className="rounded-full w-max p-4 bg-[#F94917]  md:mt-6 px-15 md:px-20 mt-7 ">
                                <p className="text-white font-medium text-2xl md:text-xl font-[Poppins] ">Get Started</p>
                            </div>
                        </div>
                        <div className="relative md:w-full md:min-w-[530px] w-[300px] md:mx-0 mx-auto mt-[50px]">
                            <div className="md:right-[35px] md:w-[540px] w-[260px] top-[30px] absolute right-[10px] z-10">
                                <img className =""src={Makanan} alt="Makanan" />
                            </div>
                            <div className="rounded-full md:w-max w-[150px] bg-white mt-6 flex md:justify-between absolute md:p-1 items-center md:gap-3 md:top-[410px] top-[220px] ">
                                <div>
                                    <div className="bg-[#FEE9DE] p-1 ml-2 rounded-full">
                                        <img src={Daging} className = "md:w-6 w-[15px]"alt="" />
                                    </div>
                                </div>
                                <div className="p-1 md:px-2 py-2 drop-shadow-xs">  
                                    <p className="font-[Poppins] font-medium md:text-sm text-[7px] mb-1">Pilihan Makanan Beragam</p>
                                    <p className="font-[Poppins] text-[#828282] md:text-[8px] text-[5px]">Makanan yang Tepat, Hasil yang Luar Biasa.</p>
                                </div>
                            </div>
                            <div className="rounded-xl  p-4 md:px-6 px-3 py-2 bg-white mt-6 flex justify-between items-center md:gap-3 gap-2 absolute md:top-[425px] top-[250px]  right-[0px]">
                                <div className=" bg-[#F94917] md:p-2 p-1 rounded-[50%] md:w-[100px] w-[50px]">
                                    <img src={Spagheti} alt="" />
                                </div>
                                <div>  
                                    <div>
                                        <p className="font-[Poppins] font-medium mb-1 font-[Inter] font-normal text-[10px]">Kalori</p>
                                    </div>
                                    <div className="mt-[3px]">
                                        <p className="font-[Poppins] text-[#828282] md:text-[13px] text-[8px] font-normal "><span className="text-[#F94917] font-bold">1986</span> / <span className="text-[#4D555C] font-semibold">1981</span> kcal</p>
                                    </div>
                                    <div className="mt-[4px]">
                                        <div className="rounded-full md:w-24 w-[70px]  border-1.5 border-[#1AB269] border-2 bg-[#E9FCF3] flex justify-around items-center justify-items-end">
                                            <p className="text-[#1AB269] md:text-xs text-[8px]">Terpenuhi</p>
                                            <img className ="md:w-[17px] w-[7px]"src={Ceklis2} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute md:top-[40px] top-[10px] md:right-[510px] right-[230px] bg-[#FEE9DE] rounded-[21px] md:w-[70px] w-[50px] rotate-[-20deg] md:p-2 p-1">
                                <img className ="rotate-[20deg]"src={Tinju} alt="" />
                            </div>
                            <div className="absolute top-[40px] md:w-[30px] w-[15px] md:right-[95px] right-[40px] ">
                                <img className =""src={Api} alt=""/>
                            </div>
                            <div className="absolute top-[50px] md:w-[40px] w-[20px] md:right-[63px] right-[10px]">
                                <img className =" "src={Panah} alt="" />
                            </div>
                            <div className="absolute md:top-[380px] top-[220px] md:w-[50px] w-[20px] md:right-[600px] right-[260px]">
                                <img className =""src={Daun} alt="" />
                            </div>
                            <div className="absolute md:top-[90px] top-[60px] md:w-[80px] w-[40px] md:right-[50px] right-[10px] z-0">
                                <img className =""src={Vector} alt="" />
                            </div>
                            <div className=" absolute md:w-[11px] w-[6px] md:h-[11px] h-[6px] md:rounded-[3.43px]  rounded-[1.5px] bg-[#EB0029] md:top-[370px] top-[230px] md:right-[0px] right-[0px]  rotate-45">
                          
                            </div>
                            <div className=" absolute md:w-[11px] w-[6px] md:h-[11px] h-[6px] md:rounded-[3.43px] rounded-[1.5px] bg-[#EB0029] md:top-[340px] top-[210px] md:right-[80px] right-[45px] rotate-45">
                          
                            </div>
                            <div className=" absolute md:w-[11px] w-[6px] md:h-[11px] h-[6px]  md:rounded-[3.43px] rounded-[1.5px] bg-[#EB0029] md:top-[530px] top-[350px] md:right-[300px] right-[130px] rotate-45">
                          
                            </div>
                            <div className=" absolute md:w-[11px] w-[6px] md:h-[11px] h-[6px] md:rounded-[3.43px] rounded-[1.5px] bg-[#EB0029] md:top-[340px] top-[200px] md:right-[550px] right-[210px] rotate-45">
                          
                            </div>
                            <div className=" absolute md:w-[11px] w-[6px] md:h-[11px] h-[6px] md:rounded-[3.43px] rounded-[1.5px] bg-[#EB0029] md:top-[140px] top-[100px] md:right-[550px] right-[240px] rotate-45">
                          
                            </div>
                            <div className=" absolute md:w-[11px] w-[5px] md:h-[11px] h-[5px] rounded-full bg-[#F2C94C] md:top-[180px] top-[130px] md:right-[550px] right-[265px]">
                          
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* supported by */}
            <div className="my-20">
                <div className="text-2xl text-center font-[Poppins] font-bold text-[#413D66]  ">
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
             <div className="bg-[#FFF2E1] h-[610px] md:h-[770px]">
                <div className="p-4 md:pr-0 max-w-screen-xl mx-auto flex justify-between md:flex-row flex-col">
                    <div className="md:w-full">
                        <div className="mx-auto md:text-left text-center md:w-full w-[250px] md:mt-[300px]">
                            <p className="text-[Inter] font-bold text-[#413D66] md:text-5xl text-3xl">Apa Itu <span className="text-[#F94917]">KALORIZE ?</span> </p>
                        </div>
                        <div className=" md:max-w-[540px] md:mt-15 mt-5 md:text-left text-center">
                            <p className="font-[Inter] font-extrabold text-[#413D66] md:text-2xl/[40px] text-xl"> Kalorize adalah platform rekomendasi makanan yang menyediakan solusi makanan sesuai dengan kebutuhan dan preferensi gizi pengguna.</p>
                        </div>
                    </div>
                    <div className=" relative md:w-full md:min-w-[530px] w-[300px] md:mx-0 mx-auto mt-[50px]">
                        <div className="bg-[#F94917] md:w-[120px] w-[75px] border-black md:py-2 py-1 md:h-[160px] rounded-xl absolute md:left-[calc(100%-530px)] left-[0px]  md:top-[250px] top-[130px] ">
                            <div className="py-1">
                                <div className=" mx-auto bg-white rounded-full md:mw-[80px] md:w-[80px] w-[50px]">
                                    <img className = ""src={Mie2} alt="" />
                                </div>
                                <div className=" mx-auto mt-2">
                                    <p className="text-center md:text-xs text-[7px] font-medium text-white font-[Poppins]">Kalori & Proteinmu Terpenuhi</p>
                                </div>
                            </div>
                            
                        </div>
                        <div className="absolute md:top-[530px] top-[250px] md:right-[430px] right-[230px]">
                            <img className =" md:w-[40px] w-[20px]"src={Api} alt="" />
                        </div>
                        <div className="bg-white rounded-full absolute flex md:top-[590px] md:right-[290px] right-[180px] md:p-2 md:py-2 py-2 p-1 z-10 items-center md:w-[250px] w-[150px] top-[306px] justify-around">
                            <div className="p-1 bg-[#FFF7F2] rounded-full">
                                <img className="md:w-[45px] w-[20px]" src={AI} alt="AI" />
                            </div>
                            <div className="md:w-[160px] w-[80px]">
                                <p className="text-center md:text-sm text-[7px] font-medium">AI Recomendation System</p>
                            </div>
                        </div>
                        <div className=" absolute md:w-[10px] md:h-[10px] w-[5px] h-[5px] rounded-full bg-[#EB0029] md:top-[130px] top-[80px] md:right-[460px] right-[250px]">
                          
                        </div>
                        <div className=" absolute w-[10px] h-[10px] rounded-full bg-[#EB0029] top-[370px] md:right-[0px]">
                          
                        </div>
                        <div className="md:w-[380px] w-[200px] right-[20px] absolute shrink">
                            <img className = ""src={android} alt="HP"/>
                        </div>
                    </div>
                </div>
             </div>
             <div className="mt-[100px] w-full">
                <div className="text-center">
                    <p className="text-[Inter] font-bold text-[#413D66] md:text-3xl text-3xl">Mengapa <span className="text-[#F94917]">Kalorize ?</span> </p>
                </div>
                <div className="md:mx-[150px] ">
                    <div className="flex justify-between md:mt-[30px] mt-[10px] md:flex-row flex-col" >
                        <div className="w-[300px] md:mx-0 mx-auto">
                            <div className="w-[300px] mx-auto mt-[100px] mb-[70px]">
                                <img src={Food} alt="Food"/>
                            </div>
                            <div className="text-center font-[Poppins] font-bold mt-[0px]">
                                <p className="text-2xl">Makanan Bervariasi</p>
                            </div>
                            <div className="text-center w-[250px] mx-auto ">
                                <p className="font-[Poppins] text-sm mt-[20px]" >Terdapat lebih dari 43 ribu variasi menu makanan yang tersedia di database kami</p>
                            </div>
                        </div>

                        <div className="w-[280px] md:mx-0 mx-auto">
                            <div className="w-[180px] mx-auto mt-[60px] mb-[70px]">
                                <img className="" src={Verification} alt="Verification"/>
                            </div>
                            <div className="text-center font-[Poppins] font-bold mt-[40px]">
                                <p className="text-2xl">Terferifikasi Nutrionis</p>
                            </div>
                            <div className="text-center w-[250px] mx-auto">
                                <p className="font-[Poppins] text-sm mt-[20px]">Bekerjasama dengan nutrisionis untuk verifikasi data makanan dan teknologi yang digunakan</p>
                            </div>
                        </div>

                        <div className="w-[260px] md:mx-0 mx-auto">
                            <div className="w-[260px] mt-[60px] mb-[70px]">
                                <img className="" src={Tech} alt="Tech"/>
                            </div>
                            <div className="text-center font-[Poppins] font-bold mt-[50px]">
                                <p className="text-2xl">Berbasis Teknologi</p>
                            </div>
                            <div className="text-center w-[260px] mx-auto">
                                <p className="font-[Poppins] text-sm mt-[20px]">Menggunakan AI untuk memberikan rekomendasi terbaik sesuai dengan kebutuhan tubuh</p>
                            </div>
                        </div>
                    </div>
                </div>
                
             </div>
        </div>
       
    );
}

export default Main2;
