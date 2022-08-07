import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
} from 'mdb-react-ui-kit';


const Home = () => {
  return (
    <MDBCarousel showControls interval={5000}>
      <MDBCarouselInner>
        <MDBCarouselItem className='active'>
          <MDBCarouselElement src='https://images.squarespace-cdn.com/content/v1/5a9c54e875f9eef8f485bcfa/1610289912735-85BA1HKPJZJ9IS8NDZ1D/slaughterhouse-cow-captive-bolt.jpg?format=1000w' alt='...' />
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement src='https://i.guim.co.uk/img/media/658e44aac38b6461f5347a19881d906e02aaf72b/0_192_5760_3456/master/5760.jpg?width=1010&quality=85&auto=format&fit=max&s=9b8b9ef08c342da68f3d0566ae873ee7' alt='...' />
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement src='https://images.squarespace-cdn.com/content/v1/5a9c54e875f9eef8f485bcfa/1610289300419-RLM69T0OC3TT45H7I798/VEG_AmbDairy15_SL18.jpg?format=1000w' alt='...' />
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  )
}
export default Home