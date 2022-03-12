import React,{ useState } from 'react';
import styled from './css/TabsComponentStyles.module.css';

const TabsComponent = props => {
    const information = [
        ["Regular","Regular is usually 10-12\". If you\'re talking ingredients I would have to guess regular crust (not thin or deepdish), mozzarella, tomato based sauce. Optional: 1 topping (if not specified would default to pepperoni or sausage)"],
        ["chicago","Chicago-style pizza is pizza prepared according to several different styles developed in Chicago, widely referred to simply as deep dish pizza due to its cooking style. The pan in which it is baked gives the pizza its characteristically high edge which provides ample space for large amounts of cheese and a chunky tomato sauce. Chicago-style pizza may be prepared in deep-dish style and as a stuffed pizza"],
        ["Deep Dish","It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."]
    ]

    const [ activeItems, setActiveItems ] = useState({
        title: information[0][0],
        value: information[0][1],
    });

    const changeTabsHandler = (event,i) => {
        setActiveItems({
            title: information[i][0],
            value: information[i][1]
        })
    }
    
    return(
        <div>
            <div className={ styled.tabsWrp }>
                {   
                    information.map( (item, i) => 
                        activeItems.title === item[0] ? 
                        <div className={ styled.tabsActive } key={ i } onClick={ (event) => changeTabsHandler(event,i)} ><span> { item[0] } </span></div> :
                        <div className={ styled.tabs } key={ i } onClick={ (event) => changeTabsHandler(event,i)} ><span> { item[0] } </span></div> ) 
                }
           </div>
            <div className={ styled.content }>{activeItems.value}</div>
        </div>
    );
}

export default TabsComponent;