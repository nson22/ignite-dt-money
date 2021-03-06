import { useState } from 'react';
import { TransactionsProvider } from './components/hooks/useTransactions'
import Modal from 'react-modal';

import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard'
import { NewTransactionModal } from './components/NewTransactionModal'

import { GlobalStyle } from './styles/global'

Modal.setAppElement('#root')

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen ] = useState(false)
  
  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true);
  }
  
  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider >
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      
      <Dashboard/>
      
      <GlobalStyle/>
    </TransactionsProvider>
  );
}