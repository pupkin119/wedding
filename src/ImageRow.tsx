import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import color1 from "./images/color1.jpg";
import color2 from "./images/color2.jpg";
import color3 from "./images/color3.jpg";
import color4 from "./images/color4.jpg";
import color5 from "./images/color5.jpg";

import dress2 from "./images/dress2.jpg";
import dress3 from "./images/dress3.jpg";
import dress4 from "./images/dress4.jpg";
import dress5 from "./images/dress5.jpg";
import dress6 from "./images/dress6.jpg";
import dress7 from "./images/dress7.jpg";

export enum imageType {
    dress,
    colors
}

interface Props {
    imageType: imageType
}

const stepsDress = [
    {
        label: 'Фасон для мужчин',
        img: dress3
    },
    {
        label: 'Фасон для мужчин',
        img: dress5
    },
    {
        label: 'Фасон для мужчин',
        img: dress6
    },
    {
        label: 'Фасон для женщин',
        img: dress7
    }, {
        label: 'Фасон для женщин',
        img: dress2
    }, {
        label: 'Фасон для женщин',
        img: dress4
    },
];

const stepsColor = [
    {
        label: 'Цветовой фасон',
        img: color1
    },
    {
        label: 'Цветовой фасон',
        img: color2
    },
    {
        label: 'Цветовой фасон',
        img: color3
    },
    {
        label: 'Цветовой фасон',
        img: color4
    },
    {
        label: 'Цветовой фасон',
        img: color5
    },
];

export default function ImageRow(props: Props) {
    const steps = props.imageType === imageType.colors ? stepsColor : stepsDress;
    const cols = props.imageType === imageType.colors ? 5 : 3;


    return (
        <ImageList cols={cols} gap={8}>
            {steps.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                        srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                        src={`${item.img}?w=161&fit=crop&auto=format`}
                        alt={item.label}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}
