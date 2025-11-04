import img1 from "../assets/5.png"
import img2 from "../assets/6.png"
import img3 from "../assets/7.png"
import img4 from "../assets/8.png"
import img5 from "../assets/9.png"
import img6 from "../assets/10.png"

function Oursolution() {
    let data = [
        {
            img: img1,
            title: " Business Services ",
            decription: "The explore strange new worlds to seek fout new life and new civilizations to boldly where no man has before gone."
        },
        {
            img: img2,
            title: " Business Services ",
            decription: "The explore strange new worlds to seek fout new life and new civilizations to boldly where no man has before gone."
        },
        {
            img: img3,
            title: " Business Services ",
            decription: "The explore strange new worlds to seek fout new life and new civilizations to boldly where no man has before gone."
        },
        {
            img: img4,
            title: " Business Services ",
            decription: "The explore strange new worlds to seek fout new life and new civilizations to boldly where no man has before gone."
        },
        {
            img: img5,
            title: " Business Services ",
            decription: "The explore strange new worlds to seek fout new life and new civilizations to boldly where no man has before gone."
        },
        {
            img: img6,
            title: " Business Services ",
            decription: "The explore strange new worlds to seek fout new life and new civilizations to boldly where no man has before gone."
        },
    ];
    return (
        <>
            <h1 class="p-5"> <center><b>OUR SOLUTIONS</b></center></h1>
           
            <div className="container">
                <div className="row">
                    {
                        data.map((val, idx) => {
                            return (
                                <div key={idx} className="col-md-4 text-center p-4">
                                    <img src={val.img} alt="" />
                                    <h4>{val.title}</h4>
                                    <p>{val.decription}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>


        </>
    )
}
export default Oursolution 
