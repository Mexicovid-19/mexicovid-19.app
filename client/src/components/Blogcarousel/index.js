import React from 'react';
import InfiniteCarousel from 'react-leaf-carousel';
import Button from '@material-ui/core/Button';

export const Blogcarousel= () => {
    return (
    <InfiniteCarousel
        breakpoints={[
        {
            breakpoint: 500,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            },
        },
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            },
        },
        ]}
        showSides={true}
        sidesOpacity={.1}
        sideSize={.1}
        slidesToScroll={1}
        slidesToShow={4}
        scrollOnDevice={true}
    >
        <div>
            <Button variant="contained" color="secondary">
                Todos
            </Button>
        </div>
        <div>
            <Button variant="contained" color="secondary">
                Economía
            </Button>
        </div>
        <div>
            <Button variant="contained" color="secondary">
                Salud
            </Button>
        </div>
    </InfiniteCarousel>
    );
}

export default Blogcarousel;