import image from '../images/img.png'
import img1 from '../images/1.png'
import star from '../images/star.png'
import img2 from '../images/2.jpg'
import img3 from '../images/3.jpg'
export default function Maincontent(){
    return(
        <>
        <img src={image}  className='main-img'/>
        <h1>Online Experiences</h1>
        <p className='para'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
<section>
        {/* cards */}
        <div className='card'>
        <img src={img1}  className='body-img'/>
        <div className='rating'>
        <img src={star}  className='star'/>
        <p>5.0(6).USA</p>
        </div>
        <p>Life lessons with Katie Zaferes</p>
        <p><strong>From $136</strong> / person</p>
        </div>

        <div className='card'>
        <img src={img2}  className='body-img'/>
        <div className='rating'>
        <img src={star}  className='star'/>
        <p>5.0(6).USA</p>
        </div>
        <p>Life lessons with Katie Zaferes</p>
        <p><strong>From $136</strong> / person</p>
        </div>

        <div className='card'>
        <img src={img3}  className='body-img'/>
        <div className='rating'>
        <img src={star}  className='star'/>
        <p>5.0(6).USA</p>
        </div>
        <p>Life lessons with Katie Zaferes</p>
        <p><strong>From $136</strong> / person</p>
        </div>

</section>
        </>
   );
}