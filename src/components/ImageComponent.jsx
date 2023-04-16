import React from "react";
import styled from "styled-components";

const ImageComponent = ({ url, image, alt = "" }) => {
	return (
		<a href={url} target={"_blank"}>
			<Imagen src={image} alt={alt} />
		</a>
	);
};

const Imagen = styled.img`
	border-radius: 0.5rem;
	transition: scale 0.3s ease;
	aspect-ratio: 3/2;

	object-fit: cover;

	:hover {
		scale: 1.1;
		filter: saturate(130%);
	}
`;

export default ImageComponent;
