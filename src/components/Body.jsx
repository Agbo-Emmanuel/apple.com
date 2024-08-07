import React from 'react';
import video from "./video/herovid.mp4";
import m3img from "./img/m3img.jpg";
import m3imgpro from "./img/m3imgpro.jpg";
import m3imgmax from "./img/m3max.jpg";




const Body =  ()=>{
    return(
        <>
            <div className='Body'>
                <div className='section1'>
                    <div className='section1up'>
                        <h3>MacBook Pro</h3>
                        <h1>Mind-blowing.<br/>Head-turning.</h1>
                    </div>
                    <div className='section1down'>
                        <video src={video} autoPlay loop muted />
                    </div>
                </div>


                <div className='section2'>
                    <button>Buy</button>
                    <p>From $1599 or $133.25/mo. for 12 mo.*</p>
                </div>


                <div className='section3'>

                </div>


                <div className='section4'>

                </div>


                <div className='section5'>
                    <div className='section5top'>
                        <h1>Explore the full story.</h1>
                    </div>
                    <div className='section5down'>
                        <h1>Three giant leaps.</h1>
                        <h3>
                            MacBook Pro blasts forward with the M3, M3 Pro, and M3 Max chips.<br/>
                            Built on <span>3‑nanometer technology</span> and featuring an <span>all-new GPU<br/>
                            architecture</span>, they’re the most advanced chips ever built for a personal<br/>
                            computer. And each one <span>brings more pro performance and capability.</span>
                        </h3>
                        <div className='m3proimgcontainer'>
                            <div className='m3proimg'>
                                <img src={m3img} alt="" />
                            </div>
                            <div className='m3proimg'>
                                <img src={m3imgpro} alt="" />
                            </div>
                            <div className='m3proimg'>
                                <img src={m3imgmax} alt="" />
                            </div>
                        </div>
                        <div className='section5memorycontainer'>
                            <div className='section5memorytext1'>
                                <h3>8-core<br/>CPU</h3>
                                <h3>10-core<br/>GPU</h3>
                                <h3>Up to 24GB<br/>unified memory</h3>
                            </div>
                            <div className='section5memorytext2'>
                                <h3>Up to<br/>12-core CPU</h3>
                                <h3>Up to<br/>18-core GPU</h3>
                                <h3>Up to 36GB<br/>unified memory</h3>
                            </div>
                            <div className='section5memorytext3'>
                                <h3>Up to<br/>16-core CPU</h3>
                                <h3>Up to<br/>40-core GPU</h3>
                                <h3>Up to 128GB<br/>unified memory</h3>
                            </div>
                        </div>
                        <h1>Game-changing<br/>graphics performance.</h1>
                    </div>

                    <div className='spreadimages'></div>

                    <div className='section5down2'>
                        <div className=''>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



export default Body