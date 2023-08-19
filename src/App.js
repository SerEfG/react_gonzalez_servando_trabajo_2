import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DataTable from 'react-data-table-component';
import Ejemplo from './componentes/ejemplo/ejemplo';

function App() {
  const columnas = [
    {
      name: 'Orden',
      selector: row => row.id
    },
    {
      name: 'Nombre',
      selector: row => row.nombre
    },
    {
      name: 'Descripción',
      selector: row => row.descripcion
    },
    {
      name: 'Precio',
      selector: row => row.precio
    },
    {
      name: 'SKU',
      selector: row => row.sku
    },
    {
      name: 'Cantidad',
      selector: row => row.cantidad
    }
  ];

  const datos = [
    {
      id: 1,
      nombre: 'Martillo',
      descripcion: 'Martillo de Pena',
      precio: '10000',
      sku: '100',
      cantidad: '1'
    },
    {
      id: 2,
      nombre: 'Destornillador',
      descripcion: 'Destornillador Philips',
      precio: '5000',
      sku: '200',
      cantidad: '3'
    },
    {
      id: 3,
      nombre: 'Mecha',
      descripcion: 'Mecha de 5mm widia',
      precio: '10000',
      sku: '100',
      cantidad: '1'
    },
    {
      id: 4,
      nombre: 'Tornillo',
      descripcion: 'Tornillo para chapa',
      precio: '500',
      sku: '1000',
      cantidad: '10'
    },
    {
      id: 5,
      nombre: 'Destornillador',
      descripcion: 'Destornillador paleta',
      precio: '4500',
      sku: '50',
      cantidad: '3'
    }
  ]
  
  return (

    <div className="App">
      <h1 className='titulo'>Mi web con React Trabajo Práctico Unidad Nº 2</h1>
      <Ejemplo/>
      <DataTable className='tablita'
      title='Detalles de productos'
        columns={columnas}
        data={datos}
      
      ></DataTable>
      
    </div>
    

  );
}

export default App;
