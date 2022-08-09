import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
} from 'mdb-react-ui-kit';


const Home = () => {
  return (
    <MDBCarousel showControls interval={3000}>
      <MDBCarouselInner>
        <MDBCarouselItem className='active'>
          <MDBCarouselElement src='https://images.squarespace-cdn.com/content/v1/5a9c54e875f9eef8f485bcfa/1610289912735-85BA1HKPJZJ9IS8NDZ1D/slaughterhouse-cow-captive-bolt.jpg?format=1000w' alt='...' />
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement src='https://images.squarespace-cdn.com/content/v1/5a9c54e875f9eef8f485bcfa/1610289981556-RNIKO5DPSENB8DREF8V3/pig-slaughterhouse-worker.jpg?format=1000w' alt='...' />
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement src='https://images.squarespace-cdn.com/content/v1/5a9c54e875f9eef8f485bcfa/1610289559794-0UNP08HU535NGK2JSF9U/hatchery-laying-hens-2018-13_46423856584_o-e1558462102435.jpg?format=1000w' alt='...' />
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  )
}
export default Home