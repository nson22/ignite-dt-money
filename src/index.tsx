import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from 'miragejs';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions:
      [
        {
          id: 1,
          title: 'Processador Ryzen 5950x',
          type: 'deposit',
          category: 'Hardware',
          price:  4000,
          createdAt: new Date('2021-03-18 20:00:00')
        },
        {
          id: 2,
          title: 'Placa-mãe ASUS Max Formula XII',
          type: 'withdraw',
          category: 'Hardware',
          price:  2500,
          createdAt: new Date('2021-03-18 20:00:00')
        },
        // {
        //   id: 3,
        //   title: 'Placa de vídeo RTX 3900 MSI',
        //   type: 'deposit',
        //   category: 'Hardware',
        //   price:  9999,
        //   createdAt: new Date('2021-03-18 20:00:00')
        // },
        // {
        //   id: 4,
        //   title: 'Monitor Acer Predator X9',
        //   type: 'withdraw',
        //   category: 'Hardware',
        //   price:  3999,
        //   createdAt: new Date('2021-03-18 20:00:00')
        // },
      ]
    })
  },

  routes(){
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all('transaction');
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    });
  }
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);