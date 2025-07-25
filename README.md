# 🧩 API Rest en Node.JS


Servidor desarrollado con **Node.js** y **Express**, conectado a **Firebase** (Firestore), que expone una API REST para la gestión de productos.

---

## 📦 Funcionalidades

- Listado completo de productos
- Búsqueda por ID o campo personalizado
- Alta, modificación y eliminación de productos
- Autenticación con JWT


---

## 🚀 Instalación y ejecución local

1. Clonar el repositorio:

```bash
git clone https://github.com/Polaco88h/Proyect-node
cd Proyect-node
```

2. Instalar dependencias:

```bash
npm install
```

3. Configurar variables de entorno (Firebase, JWT, etc.)

4. Ejecutar el servidor en modo desarrollo:

```bash
npm run dev
```

---

## 🌐 Endpoints de la API

### 📍 Ruta base

```
GET /
```
**Respuesta:** Mensaje de bienvenida.

---

### 📋 Productos

#### ✅ Obtener todos los productos

```
GET /api/products
```
```json

  {
        "id": "4TonmgE2bfHylqvK5cbZ",
        "stock": 30,
        "price": 25990,
        "name": "Camiseta Argentina",
        "categories": [
            "Deporte",
            "Ropa"
        ],
        "description": "Camiseta oficial selección argentina"
    },
    {
        "id": "9D0yRR7QiJzSJsw2TSbu",
        "stock": 25,
        "categories": [
            "Deporte",
            "Fútbol"
        ],
        "description": "Pelota oficial de la Champions League",
        "name": "Pelota de Fútbol Adidas",
        "price": 14999
    },
    {
        "id": "G2rfpsehfnAFTtaGRWU6",
        "description": "Juego de pesas ajustables 20kg",
        "price": 75990,
        "categories": [
            "Deporte",
            "Fitness"
        ],
        "stock": 18,
        "name": "Set de Pesas"
    },
    {
        "id": "LtmUMoi1XCoKws7Ya2oj",
        "stock": 22,
        "description": "Mochila 40L impermeable con soporte agua",
        "price": 45990,
        "categories": [
            "Deporte",
            "Outdoor"
        ],
        "name": "Mochila Trekking"
    },
    {
        "id": "cFcrHb6um8RBnpydIU0D",
        "stock": 15,
        "description": "Zapatillas running con amortiguación Air",
        "price": 65990,
        "categories": [
            "Calzado",
            "Deporte"
        ],
        "name": "Zapatillas Nike Air Max"
    }





```
## ✅ Obtener productos por id

GET /api/products/:id
```
```
```json
[
    {
        "id": "4TonmgE2bfHylqvK5cbZ",
        "stock": 30,
        "price": 25990,
        "name": "Camiseta Argentina",
        "categories": [
            "Deporte",
            "Ropa"
        ],
        "description": "Camiseta oficial selección argentina"
    }
]
```

   






#### ➕ Crear producto

```
POST /api/productos
```

**Body (JSON):**

```json
{
  "id": "4TonmgE2bfHylqvK5cbZ",
        "stock": 30,
        "price": 25990,
        "name": "Camiseta Argentina",
        "categories": [
            "Deporte",
            "Ropa"
        ],
        "description": "Camiseta oficial selección argentina"
}
```

Valida los datos y guarda el producto en la base.

---

#### ✏️ Editar producto

```
PUT /api/productos/:id
```

**Body (ejemplo):**

```json
{
  	"name": "pelota",
    "price": "700",
    "categories":[
        "deporte",
        "futbol"
    ],
    "description":"Pelota de la seleccion",
    "stock":20
}
```

Modifica solo los campos enviados del producto indicado por ID.

---

#### 🗑️ Eliminar producto

```
DELETE /api/productos/:id
```

Elimina el producto con el ID especificado.
#### resultado : 204 no content

---

## 👤 Autenticación



```
GET /autenticacion/usuarios
```


---

### 🔐 Login

```
POST /autenticacion/login
```

###  jsonwebtoken 
    
   
## 🌍 Versión en GitHub

🔗 [https://github.com/Polaco88h/Proyect-node](https://github.com/Polaco88h/Proyect-node)

## 🌍 Versión en producción

🔗 [https://proyect-node-ashen.vercel.app/](https://proyect-node-ashen.vercel.app/)

---

## 📁 Estructura del proyecto

```
src/
├── Controladores/
│    ├── autenticacion.controlador.js
│    └── productos.controlador.js
│
├── Middlewares/
│    ├── auth.middleware.js
│    └── 
│
└── Models/
│    ├── data.js
│    └── products.js
│    └── products.model.js
│    └── 
│
└── routes/
    ├── auth.router.js
    └── products.router.js
   

```
    
---

## 🛠️ Tecnologías utilizadas

- Node.js
- Express.js
- Firebase Firestore
- JWT
- Vercel (deploy)

---

## ✍️ Autor:  Romañuk Claudio
 
📧  
📍 Buenos Aires, Argentina