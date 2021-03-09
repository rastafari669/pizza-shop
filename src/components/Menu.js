import React from 'react';
import pizza from '../img/pizza.jpg'

const Menu = () => {
    return (
        <div className='about'>
        <div className="container">
           <div className="row">
               
               

            <div className="col-6">
           <div className="about__img">
               <img src={pizza} alt="pizza"/>
           </div>
           </div>

           <div className="col-6 p-25">
               
                <h3>The Pizza Menu</h3>
                <h1>CHICAGO THIN CRUST</h1>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                </p>
                <div className="about__btn">
                    <a href="" className='btn btn-smart'>
                        VIEW MORE
                    </a>
                </div>
            </div>
               </div>
           </div>
        </div>
    )
}

export default Menu
