import React from 'react';
import { useLocation } from 'react-router-dom';
import classes from './NotFound.module.css';

const WhatsAppButton = () => {
  const location = useLocation();
  const { state } = location;

  const userName = state && state.nome;
  const orderedItems = state && state.cartState && state.cartState.itens;

  const phoneNumber = '+27681093013';

  const handleClick = () => {
    let message = `Customer: ${userName}\nOrdered Items:\n`;
    orderedItems.forEach(item => {
      message += `${item.nome} X ${item.quantidade}\n`;
    });
  
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  
    
    alert('Finalize Purchase On WhatsApp');
  };

  return (
    <button className={classes['whatsAppButton']} onClick={handleClick}>
      Place Order (WhatsApp)
    </button>
  );
};

const NotFound = () => {
  const location = useLocation();
  const { state } = location;

  const userName = state && state.nome;
  const orderedItems = state && state.cartState && state.cartState.itens;

  return (
    <div className={classes['notFound']}>
      <div className={classes['sub']}>Your order & information:</div>
      
      {userName && <div className={classes['userName']}>Customer: {userName}</div>}

      {orderedItems && (
        <div className={classes['orderedItems']}>
          <div className={classes['itemsHeader']}>Ordered Items:</div>
          <ul className={classes['orderList']}>
            {orderedItems.map(item => (
              <li key={item.id} className={classes['item']}>
                <span className={classes['item-name']}>{item.nome}</span> (<span className={classes['item-quantity']}>{item.quantidade})</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      <WhatsAppButton />
    </div>
  );
};

export default NotFound;
