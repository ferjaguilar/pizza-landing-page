import { ProductButton, ProductCard, ProductDesc, ProductImg, ProductInfo, ProductPrice, ProductsContainer, ProductsHeading, ProductTitle, ProductWrapper } from "./ProductsElements"

type ProducsProps = {
  heading: string,
  data: any
}

const Products = ({heading, data}:ProducsProps) => {
  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        {data.map((product:any, index:any) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={product.img} alt={product.alt} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}</ProductDesc>
                <ProductPrice>{product.price}</ProductPrice>
                <ProductButton>{product.button}</ProductButton>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
  )
}

export default Products
