Test FrontEnd CARESTINO: 
Desarrolle una pequeña red en pantalla completa, que pueda ser utilizada para
pintar imágenes simples.
La red consiste en pequeñas celdas cuadradas. Debe haber 100 celdas
horizontales.
El número de filas no debe exceder los límites de la ventana. Es decir, la pantalla
debe estar llena de celdas, pero no deben existir barras de desplazamiento, ya que
todas las celdas caben en la ventana.
Cuando una celda sea clickeada, la misma debe “activarse” cambiando de color. Al
volver a clickear la celda, la misma debe desactivarse y removerse el color.
Cuando una celda sea clickeada con el botón derecho del mouse, debería aparecer
una ventana emergente donde usted pueda elegir un color. Se requiere un
mínimo de 5 opciones de colores. El color elegido se convierte en el color por
defecto para cada celda activada al dibujar.
● El selector de color aparece (fadeIn) cuando usted presione el botón
derecho del mouse en la posición que se encuentre el cursor.
● El menú contextual específico del navegador no aparece al hacer clic con el
botón derecho del mouse.
● El selector de color desaparece (fadeOut) cuando el cursor se desplace fuera
del mismo, o cuando un color sea seleccionado.
Para facilitar el dibujo de imágenes, debe ser posible hacerlo arrastrando el cursor
del mouse. Cuando una celda sea clickeada, se activa la dicha función. Todas las
celdas por las que pase el cursor deben seleccionarse. Cuando se suelta el mouse,
se desactiva la función de arrastre, y todas las celdas por las que pase el cursor ya
no se verán modificadas. Tener en cuenta que, de todas formas, debe continuar
siendo posible clickear cada celda individualmente.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
