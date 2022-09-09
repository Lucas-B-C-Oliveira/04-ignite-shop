import Image from "next/future/image";
import { styled } from "../styles"
import { HomeContainer, Product } from './../styles/pages/home'

import 'keen-slider/keen-slider.min.css'

import { useKeenSlider } from 'keen-slider/react'

import tshirt1 from '../assets/shirts/1.png'
import tshirt2 from '../assets/shirts/2.png'
import tshirt3 from '../assets/shirts/3.png'



export default function Home() {

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">

      <Product className="keen-slider__slide">
        <Image src={tshirt1} width={520} height={480} alt={""} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={tshirt2} width={520} height={480} alt={""} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={tshirt3} width={520} height={480} alt={""} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={tshirt3} width={520} height={480} alt={""} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

    </HomeContainer>
  )
}
