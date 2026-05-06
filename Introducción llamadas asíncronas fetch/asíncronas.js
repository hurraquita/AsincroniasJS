async function buscarProducto(id) { 
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) throw new Error(`Error: ${res.status}`); 
  const p = await res.json(); console.log(p.title, p.price);
} 
Paralelo: Promise.all([buscarProducto(1), buscarProducto(5), buscarProducto(10)]);