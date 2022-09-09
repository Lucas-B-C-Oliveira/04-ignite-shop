import Image from "next/future/image";
import { styled } from "../styles"
import { HomeContainer, Product } from './../styles/pages/home'

import tshirt1 from '../assets/shirts/1.png'
import tshirt2 from '../assets/shirts/2.png'
import tshirt3 from '../assets/shirts/3.png'


export default function Home() {
  return (
    <HomeContainer>

      <Product>
        <Image src={tshirt1} width={520} height={480} alt={""} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product>
        <Image src={tshirt2} width={520} height={480} alt={""} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

    </HomeContainer>
  )
}
