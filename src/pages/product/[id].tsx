import { useRouter } from "next/router"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"

export default function Product() {

  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer>
      </ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, odio sapiente voluptatum molestiae nemo excepturi quaerat nobis consequatur magni vero earum dolor deleniti assumenda obcaecati quod voluptas at quia. Pariatur.</p>

        <button>
          Comprar agora
        </button>
      </ProductDetails>
    </ProductContainer>
  )
}