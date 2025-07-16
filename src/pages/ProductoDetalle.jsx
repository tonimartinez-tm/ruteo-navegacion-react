import { useParams, Link } from "react-router-dom";

const productos = [
  { id: "1", nombre: "Guitarra", descripcion: "Guitarra eléctrica profesional." },
  { id: "2", nombre: "Teclado", descripcion: "Teclado MIDI 88 teclas." },
  { id: "3", nombre: "Auriculares", descripcion: "Auriculares de estudio de alta fidelidad." },
];

function ProductoDetalle() {
  const { id } = useParams();
  const producto = productos.find((p) => p.id === id);

  if (!producto) {
    return (
      <div>
        <h2>Producto no encontrado</h2>
        <Link to="/productos">Volver a productos</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
      <Link to="/productos">← Volver a productos</Link>
    </div>
  );
}

export default ProductoDetalle;