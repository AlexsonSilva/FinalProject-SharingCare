import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  

  constructor() { }

  foodDetails = [
    {
      id:1,
      foodName:"Sandwich",
      foodDetails:"Bread| Ham| Cheese| Tomato| Lettuce",
      foodPrice:200,
      foodImg:"https://static3.depositphotos.com/1006775/228/i/950/depositphotos_2281835-stock-photo-bread-and-butter.jpg"
    },
    {
      id:2,
      foodName:"Chicken Rice",
      foodDetails:"Onion| Chicken| Rice |Broccoli",
      foodPrice:369,
      foodImg:"https://minuterice.com/wp-content/uploads/2019/03/15-Min-Chicken-Rice-Dinner_-052-V2-1536x864.jpg"
    },
    {
      id:3,
      foodName:"Veggie Soup",
      foodDetails:"Carrot| Sweet Corn| Broccoli| Tomato| Potato",
      foodPrice:149,
      foodImg:"https://thecozyapron.com/wp-content/uploads/2018/07/vegetable-soup_thecozyapron_1.jpg"
    },
    {
      id:4,
      foodName:"Pizza",
      foodDetails:"Sausage| Red Onions| Self-raising flour| Cheese| Oregano",
      foodPrice:140,
      foodImg:"https://img.jamieoliver.com/jamieoliver/recipe-database/105232682.jpg?tr=w-800,h-1066"
    },
    {
      id:5,
      foodName:"Fried Rice",
      foodDetails:"Rice| Salt| Garlic| Onion| Pepper| Chives| Sesame Oil",
      foodPrice:105,
      foodImg:"https://media.newyorker.com/photos/5f2c85539a557880d973a759/1:1/w_1823,h_1823,c_limit/Buford-FrenchRice.jpg"
    },
    {
      id:6,
      foodName:"Meatball",
      foodDetails:"Lean beef mince| Oregano| Parmesan| Egg| Carrot| Tomato Purée| Spaghetti",
      foodPrice:219,
      foodImg:"https://images.immediate.co.uk/production/volatile/sites/30/2013/05/easy-meatballs-798e118.jpg?quality=90&resize=300,272"
    }
  ]
}
