import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { useTransactions } from '../hooks/useTransactions'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

import { Container, TransactionTypeContainer, RadioBox } from './style'

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose }: NewTransactionModalProps) {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState(0)
  const [category, setCategorie] = useState('')
  const [type, setType] = useState('deposit')

  const { createTransaction } = useTransactions();

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      price,
      category,
      type
    });

    setTitle('')
    setPrice(0)
    setCategorie('')
    setType('deposit')

    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      >
        <button 
          type="button" 
          onClick={onRequestClose}
          className="react-modal-close"
        >
          <img src={closeImg} alt="Fechar modal de cadastro"/>
        </button>

      <Container
        onSubmit={handleCreateNewTransaction}
      >

        <h2>Cadastrar Transação</h2>

        <input 
          value={title}
          onChange={event => setTitle(event.target.value)}
          placeholder="Título" 
          type="text"/>
        
        <input 
         value={price}
         onChange={event => setPrice(Number(event.target.value))}
         placeholder="Valor" 
         type="number"/>

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            isActive={type === 'deposit'}
            activeColor="green"
            onClick={() => {
              setType('deposit')
            }}
            >
            <img src={incomeImg} alt="Entrada"/>
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            isActive={type === 'withdraw'}
            activeColor="red"
            onClick={() => {
              setType('withdraw')
            }}
            >
            <img src={outcomeImg} alt="Saída"/>
            <span>Saída</span>
          </RadioBox>

        </TransactionTypeContainer>
        
        <input
          value={category} 
          onChange={event => setCategorie(event.target.value)}
          placeholder="Categoria" 
          type="text"/>
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};