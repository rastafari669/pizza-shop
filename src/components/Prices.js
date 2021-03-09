import React from 'react';
import pizza1 from '../img/pizza1.png'
import pizza2 from '../img/pizza2.png'
import pizza3 from '../img/pizza3.png'
import pizza4 from '../img/pizza4.png'
import pizza5 from '../img/pizza5.png'
import pizza6 from '../img/pizza6.png'

const Prices = () => {
    return (
        <div className='prices'>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="price">
                            <div className="price__img">
                                <img src={pizza1} alt="pizza"/>
                            </div>
                            <h1 className="price__heading">
                                Pizza Margarita
                            </h1>
                            <p className="price__text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                            </p>
                            <p className="price_rs">
                                $50.00
                            </p>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="price">
                            <div className="price__img">
                                <img src={pizza2} alt="pizza"/>
                            </div>
                            <h1 className="price__heading">
                                Pizza Margarita
                            </h1>
                            <p className="price__text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                            </p>
                            <p className="price_rs">
                                $20.00
                            </p>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="price">
                            <div className="price__img">
                                <img src={pizza3} alt="pizza"/>
                            </div>
                            <h1 className="price__heading">
                                Pizza Margarita
                            </h1>
                            <p className="price__text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                            </p>
                            <p className="price_rs">
                                $30.00
                            </p>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="price">
                            <div className="price__img">
                                <img src={pizza4} alt="pizza"/>
                            </div>
                            <h1 className="price__heading">
                                Pizza Margarita
                            </h1>
                            <p className="price__text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                            </p>
                            <p className="price_rs">
                                $25.00
                            </p>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="price">
                            <div className="price__img">
                                <img src={pizza5} alt="pizza"/>
                            </div>
                            <h1 className="price__heading">
                                Pizza Margarita
                            </h1>
                            <p className="price__text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                            </p>
                            <p className="price_rs">
                                $25.00
                            </p>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="price">
                            <div className="price__img">
                                <img src={pizza6} alt="pizza"/>
                            </div>
                            <h1 className="price__heading">
                                Pizza Margarita
                            </h1>
                            <p className="price__text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                            </p>
                            <p className="price_rs">
                                $25.00
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Prices
