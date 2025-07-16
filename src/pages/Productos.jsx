import { Link } from "react-router-dom";

const productos = [
  { id: "1", nombre: "Guitarra" },
  { id: "2", nombre: "Teclado" },
  { id: "3", nombre: "Auriculares" },
];

function Productos() {
  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {productos.map((prod) => (
          <li key={prod.id}>
            <Link to={`/productos/${prod.id}`}>{prod.nombre}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Productos;