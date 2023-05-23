import React from "react"
import Header from "./componets/Header"
import Footer from "./componets/Footer"
import Items from "./componets/Items"
import Categories from "./componets/Categories"
import ShowFullItem from "./componets/ShowFullItem"


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      showFullItem: false,
      items: [
        {
        id: 1,
        title: 'Гостиная CITY',
        img: 'living-Sity.webp',
        desc: 'Сет шкафов CITY для вашей гостинной!',
        category: 'gostinaya',
        price: '679.00'
        },
        {
        id: 2,
        title: 'ART FAMILY COMPOSITION',
        img: 'ART-FAMILY-COMPOSITION.jpg',
        desc: 'Арт композиция для фотографий вашей любимой семьи',
        category: 'art',
        price: '500.00'
          },
          {
          id: 3,
          title: 'KITCHEN',
          img: 'KITCHEN.jpg',
          desc: 'Кухня с плитой и раковиной для вашей кухни',
          category: 'kitchen',
          price: '840.00'
          },
          {
           id: 4,
           title: 'Nightstand',
           img: 'nightstand.webp',
           desc: 'Дезайнерская тубмбочка для спальни',
           category: 'nightstand',
           price: '140.00'
          },
          {
           id: 5,
           title: 'SET DELUX BLACK',
           img: 'SET-DELUX-BLACK.jpg',
           desc: 'Белый сет спальни для отдыха',
           category: 'set',
           price: '440.00'
           },
           {
            id: 6,
            title: 'SET NEW YORK',
            img: 'SET-NEW-YORK.jpg',
            desc: 'Сет для спальни и полочками для вещей',
            category: 'set',
            price: '400.00'
            },
            {
              id: 7,
              title: 'Кровать Азия',
              img: 'asia.png',
              desc: 'Кровать Азия с полочкой для вещей под кроватью',
              category: 'bed',
              price: '350.00'
             },
             {
              id: 8,
              title: 'Гостиная Mirjan24',
              img: 'gostinaya24.jpg',
              desc: 'Производитель Mirjan24 создает современный имидж мебельной промышленности.',
              category: 'gostinaya',
              price: '380.00'
             },
             {
              id: 9,
              title: 'Kron 24',
              img: 'krov.jpg',
              desc: 'Кровать Kron с тумбочкой в комплектею',
              category: 'bed',
              price: '389.00'
             },
      ],
      fullItem: {}

    }

    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem= this.onShowItem.bind(this)
  }
  render(){
  return (
    <div className='wrapper'>
      <Header orders={this.state.orders} onDelete={this.deleteOrder} />
      <Categories chooseCategory={this.chooseCategory}/>
      <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
       
       {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
      <Footer />
    </div>
  )
 }

 onShowItem(item) {
  this.setState({fullItem: item})
  this.setState({ showFullItem: !this.state.showFullItem })

 }

 chooseCategory(category) {

  if(category === 'all') {
    this.setState({currentItems: this.state.items })
    return
  }

   this.setState({
    currentItems: this.state.items.filter(el => el.category === category)
   })
 }

 deleteOrder(id) {
  this.setState({orders: this.state.orders.filter(el => el.id !== id)})

 }

addToOrder(item) {
   let isInArray = false

  this.state.orders.forEach(el => {
    if(el.id === item.id)
        isInArray = true
  })
  if(!isInArray)
      this.setState({ orders: [...this.state.orders, item] })
   }
 }

export default App;
