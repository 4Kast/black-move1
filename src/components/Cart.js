import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { alertVisibility } from '../store/alertStore';
import { cartActions } from '../store/cartStore';
import classes from './Cart.module.css';
import ItemCart from './ItemCart';

const Cart = ({ itensNoCarrinho, closeCart, isCartShown }) => {


  const valorTotal = useSelector(state => state.cart.valorTotal);
  const dispatch = useDispatch()

  const fixValorTotal = Math.abs(valorTotal).toLocaleString('pt-br', { style: 'currency', currency: 'BRL', currencyDisplay: 'narrowSymbol' }).replace('R$', 'R');


  const navigate = useNavigate();

  const finalizarCompra = () => {
    closeCart();
    navigate('/finalizar-compra')
  }

  const removerTudo = () => {
    dispatch(cartActions.removeAll());
    dispatch(alertVisibility('Cart Cleared', 'bad'));
  }

  let carrinhoContent = <>
    <ul className={classes.listaCarrinho}>
      {itensNoCarrinho.map(item =>
        <ItemCart item={item} key={item.id} />
      )}
    </ul>

    <div className={classes.finalizar}>
      <span className={classes.total}>
        Total: <br /><span>{fixValorTotal}</span>
      </span>
      <button className='btn-style' onClick={finalizarCompra}>Purchase</button>
    </div>
  </>

  if (!itensNoCarrinho.length) {
    carrinhoContent = <p className={classes.semItens}>Nothing has been added yet<br />Add an item!</p>
  }

  return (
    <section className={`${classes.carrinho} ${isCartShown ? classes.shown : ''}`}>
      <div className={classes.header}>
        <p>Cart</p>
        {itensNoCarrinho.length ? <button onClick={removerTudo}>Clear Cart</button> : ''}
      </div>

      {carrinhoContent}

    </section>
  )
}

export default Cart