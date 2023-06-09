import React from 'react';
import {
	ProductsContainer,
	ProductsHeading,
	ProductsWrapper,
	ProductsCard,
	ProductsImg,
	ProductsInfo,
	ProductsTitle,
	ProductsDesc,
	ProductsPrice,
} from './ProductsElements';

function Products({ heading, data }) {
	return (
		<ProductsContainer>
			<ProductsHeading>{heading}</ProductsHeading>
			<ProductsWrapper>
				{data.map((product, index) => {
					return (
						<ProductsCard key={index}>
							<ProductsImg src={product.img} alt={product.alt} />
							<ProductsInfo>
								<ProductsTitle>{product.name}</ProductsTitle>
								<ProductsDesc>{product.desc}</ProductsDesc>
								<ProductsPrice>{product.price}</ProductsPrice>
							</ProductsInfo>
						</ProductsCard>
					);
				})}
			</ProductsWrapper>
		</ProductsContainer>
	);
}

export default Products;
