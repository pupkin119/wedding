import React from 'react';
import './App.css';
import VerticalLinearStepper from "./StepperLocation";
import {Button, Container} from "@mui/material";
import ImageRow, {imageType} from "./ImageRow";
import RowText from "./RowText";
import SendIcon from '@mui/icons-material/Send';

import back1 from "./images/background/back1.jpg";
import back4 from "./images/background/back41.jpg";
import back5 from "./images/background/back5.jpg";


function App() {
    return (
        <div className="App">
            <Container maxWidth={"sm"}>
                <div className={"header"}>
                    <div className={"background"}>
                        <img src={back1} style={{width: "100%"}} alt={'background'}/>
                        <div className={"background-text"}>
                            <h2>{"Антон | Ангелина"}</h2>
                            <h2 className={"big-text"}>{"6.07.2024"}</h2>
                            <h2>{"Приглашение на свадьбу"}</h2>
                        </div>
                    </div>
                </div>

                <div className={'hello'}>
                    <h2 className={"big-text"}>{'Дорогие друзья!'}</h2>
                    <h2>{'Один день в этом году будет для нас особенным и мы хотим провести его в кругу близких людей. С большим удовольствием приглашаем вас на знаменательный праздник - нашу свадьбу!'}</h2>
                    <h2 className={"big-text"}>{'6.07.2024'}</h2>
                </div>

                <div className={'location'}>
                    <RowText text={"Локация"}/>
                    <h3>{'Мы будем рады, если вы приедете к нам на роспись!'}</h3>
                    <h3>{'Адрес: Российская Федерация, Санкт-Петербург город, г. Пушкин, ул. Садовая, д. 22 – Дворец бракосочетания.'}</h3>
                    <iframe
                        title={'location-wedding'}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2012.178558545335!2d30.408337777475474!3d59.71322198023262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469621ab36d4930d%3A0x2472851ea4c33895!2z0JTQstC-0YDQtdGGINCx0YDQsNC60L7RgdC-0YfQtdGC0LDQvdC40Y8gMw!5e0!3m2!1sru!2sru!4v1706375874915!5m2!1sru!2sru"
                        width={"100%"}
                        style={{border: 0}} allowFullScreen={true} loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"/>

                    <h3>{'Нашу свадьбу мы решили отметить в необычном месте, поэтому после регистрации, мы отправимся в отель-ресторан «Замок» по адресу: Волхонское шоссе, 7'}</h3>
                    <iframe
                        title={'location-eat'}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2011.2546026469117!2d30.350385477476234!3d59.728586478997926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469623dbebb93f8b%3A0x1b0fc9459bc0d2d0!2z0JfQsNC80L7QuiDQsiDQn9GD0YjQutC40L3QtQ!5e0!3m2!1sru!2sru!4v1706375800572!5m2!1sru!2sru"
                        width={"100%"}
                        style={{border: 0}} allowFullScreen={true} loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"/>
                </div>

                <div className={'stepper'}>
                    <RowText text={'Тайминг дня'}/>
                    <VerticalLinearStepper/>
                </div>

                <div className={'dressing'}>
                    <img width={"20%"} src={back5}/>
                    <RowText text={"Дресс - код"}/>
                    <h3>{'Нам будет очень приятно видеть вас в цветовой гамме нашей свадьбы'}</h3>
                    <ImageRow imageType={imageType.colors}/>
                    <ImageRow imageType={imageType.dress}/>
                </div>

                <div className={'wish'}>
                    <RowText text={'Наши пожелания'}/>
                    <h3>{'◦ Если вы хотите подарить ценный и нужный нам подарок, то просим уменьшить его габариты до размера почтового конверта💫'} </h3>
                    <h3>{'◦ Рис, лепестки, хлопушки и всё сыпучее – огромная просьба, на территории загса и ресторана не посыпать🪄'}</h3>
                </div>

                <div className={'telegram'}>
                    <RowText text={"Телеграмм чат"}/>
                    <h3>{'Дорогие друзья, мы создали телеграм-чат нашего праздника, где можно будет узнать дополнительную информацию,' +
                    ' поделиться фотографиями и видео со свадьбы, а также ближе познакомиться с гостями. ' +
                    'Чат будет активен в день свадьбы'}</h3>
                    <Button style={{color: '#96ac86'}} endIcon={<SendIcon/>}
                            href={'https://t.me/+GJ6uHz-mRKhjNjBi'}>Telegram</Button>
                </div>
            </Container>
            <Container className={"no-padding"} maxWidth={"sm"}>
                <div className={"header-image"}>
                    <img src={back4} style={{width: "100%"}} alt={'background'}/>
                </div>
            </Container>
        </div>
    );
}

export default App;
