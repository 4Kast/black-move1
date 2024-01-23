import React, { memo, useCallback, useState } from 'react';
import classes from './Cardapio.module.css';
import cardapio from '../cardapio-lista/cardapio';
import ModalItemCardapio from '../components/ModalItemCardapio';

const importItemImage = (img) => require(`../assets/${img}`);

const ItemCategoria = memo(({ categoria, trocarCategoria, categoriaSelecionada }) => {
  return (
    <li key={categoria}>
      <button
        onClick={() => trocarCategoria(categoria)}
        className={categoria === categoriaSelecionada ? classes.btnAtivo : ''}
      >
        {categoria}
      </button>
    </li>
  );
});

const ItemCardapio = memo(({ item, displayModal }) => {
  const itemImage = importItemImage(item.img);

  const handleItemClick = () => {
    console.log('Clicked on item:', item);
    displayModal(item);
  };

  return (
    <div className={classes.itemCardapio} onClick={handleItemClick} tabIndex='0'>
      <img src={itemImage} alt={item.nome} />
      <div className={classes.info}>
        <p className={classes.nome}>{item.nome}</p>
        <p className={classes.descricao}>{item.descricao}</p>
        <div className={classes.preco}>R {item.preco.replace('.', ',')}</div>
      </div>
    </div>
  );
});



const Cardapio = () => {
  const categoriasCardapio = Object.keys(cardapio);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todas');
  const [pratoModal, setPratoModal] = useState(null);

  const displayModal = useCallback((prato) => {
    setPratoModal(prato);
  }, []);

  const closeModal = () => {
    setPratoModal(null);
  };

  const trocarCategoria = useCallback((categoria) => {
    setCategoriaSelecionada(categoria);
  }, []);

  let cardapioFiltrado = cardapio[categoriaSelecionada];

  if (!cardapioFiltrado) {
    const todosItensCardapio = Object.values(cardapio).flat();
    cardapioFiltrado = todosItensCardapio;
  }

  return (
    <div>
      {pratoModal && <ModalItemCardapio item={pratoModal} onClose={closeModal} />}
      <div className={classes.cardapio}>
        <h1>Menu</h1>

        <div className={classes.categorias}>
          <p>Categories</p>
          <ul className={classes.listaCategorias}>
            <li>
              <button
                onClick={() => trocarCategoria('Todas')}
                className={'Todas' === categoriaSelecionada ? classes.btnAtivo : ''}
              >
                All
              </button>
            </li>
            {categoriasCardapio.map((categoria) => (
              <ItemCategoria
                key={categoria}
                categoria={categoria}
                trocarCategoria={trocarCategoria}
                categoriaSelecionada={categoriaSelecionada}
              />
            ))}
          </ul>
        </div>

        <ul className={classes.listaCardapio}>
          {cardapioFiltrado &&
            cardapioFiltrado.map((item) => (
              <ItemCardapio key={item.id} item={item} displayModal={displayModal} />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Cardapio;
