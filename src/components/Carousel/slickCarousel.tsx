import * as React from "react";
import { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
// styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlickWrapper } from "./slick.styles";

export const SlickSlider = () => {
	const slider1 = useRef<any | null>(null);

	const settings = {
		autoplay: true,
		dots: true,
		infinite: true,
		pauseOnHover: true,
		slidesToScroll: 1,
		slidesToShow: 1,
		speed: 500,
	};

	return (
		<SlickWrapper style={{ padding: "0 30px", background: "#ccc" }}>
			<Slider {...settings}>
				<div>
					<h3>1</h3>
				</div>
				<div>
					<h3>2</h3>
				</div>
				<div>
					<h3>3</h3>
				</div>
				<div>
					<h3>4</h3>
				</div>
				<div>
					<h3>5</h3>
				</div>
				<div>
					<h3>6</h3>
				</div>
			</Slider>
		</SlickWrapper>
	);
};

export const SlickCarousel = () => {
	const slider2 = useRef<any | null>(null);

	return (
		<SlickWrapper style={{ padding: "0 30px", background: "#ccc" }}>
			<Slider
				ref={slider2}
				slidesToShow={3}
				swipeToSlide={true}
				focusOnSelect={true}
			>
				<div>
					<h3>1</h3>
				</div>
				<div>
					<h3>2</h3>
				</div>
				<div>
					<h3>3</h3>
				</div>
				<div>
					<h3>4</h3>
				</div>
				<div>
					<h3>5</h3>
				</div>
				<div>
					<h3>6</h3>
				</div>
			</Slider>
		</SlickWrapper>
	);
};
