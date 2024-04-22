import { useEffect, useState } from 'react'
import './App.css'
import SingleProduct from './SingleProduct'

function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch('fakeData.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  const handleCart = (pd) =>{
    const isExists = cart.find(p => p.id == pd.id)
    if(!isExists){
      setCart([...cart, pd])
    }else{
      alert('this is exists')
    }
  }

  const handleRemove = (id) =>{
    const removeItem = cart.filter((item) => item.id != id)
    setCart(removeItem)
  } 
  return (
    <>
      <div className="main-container">
        <div className="cards-container">
          {products.map((pd, idx) =><SingleProduct key={idx} product={pd} handleCart={handleCart}></SingleProduct>)}
        </div>
        <div className="cart-container">
          <div className="cart">
            <h3>Total Added product 0</h3>

            <div className="cart-items">
              <h5>Name</h5>
              <h5>Price</h5>
            </div><div className="added-item">
            {cart.map((cp, index) => (
                <div key={index} className='name'>
                  <p>{index + 1}</p>
                  <p>{cp.title.slice(0, 25)}</p>
                  <p>{cp.price}</p>
                  <button onClick={() => handleRemove(cp.id)}>remove</button>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
