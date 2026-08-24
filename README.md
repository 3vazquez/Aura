# ✨ Aura 
> *Descubre tu vibración numérica y los ciclos energéticos que rigen tu vida.*

[![Versión](https://img.shields.io/badge/versión-1.0.0-purple)](https://github.com/tuusuario/aura-cosmica)
[![Licencia](https://img.shields.io/badge/licencia-MIT-pink)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)

## ✨ Características

### 🔮 Numerología
| Módulo | Descripción |
|--------|-------------|
| **Camino de Vida** | Calculado a partir de la fecha de nacimiento. Revela el propósito esencial de tu existencia. |
| **Número del Destino** | Derivado de tu nombre completo. Indica tu misión, talentos innatos y potencial. |
| **Anhelo del Alma** | Basado en las vocales de tu nombre. Muestra tus deseos más profundos y motivaciones internas. |
| **Compatibilidad** | Compara el Camino de Vida de dos personas para determinar su armonía energética. |

### 📊 Biorritmos
| Ciclo | Duración | Indicador |
|-------|----------|-----------|
| **Físico** | 23 días | Energía corporal, resistencia y coordinación. |
| **Emocional** | 28 días | Estado de ánimo, sensibilidad y creatividad. |
| **Intelectual** | 33 días | Capacidad mental, toma de decisiones y aprendizaje. |

- **Barras de progreso animadas** con interpretación contextual.
- **Gráfico de ondas sinusoidales** interactivo que muestra la proyección de -15 a +15 días.
- **Marcador "Hoy"** para identificar tu posición exacta en el ciclo.

---

## 🚀 Demo en Vivo

👉 [Ver Demo](https://3vazquez.github.io/Aura) *(despliega en GitHub Pages)*

---

## 🔢 Algoritmos

### Numerología

Los números se reducen mediante **suma digital** hasta obtener un dígito del 1 al 9, o un número maestro (11, 22, 33).

```
Camino de Vida = reducir( día + mes + año )
Destino        = reducir( suma de valores de cada letra del nombre )
Anhelo del Alma = reducir( suma de valores de las vocales del nombre )
```

**Tabla de valores de letras (Sistema Pythagoreo):**

| 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|
| A | B | C | D | E | F | G | H | I |
| J | K | L | M | N | O | P | Q | R |
| S | T | U | V | W | X | Y | Z |   |

### Biorritmos

Los biorritmos se calculan mediante la función seno, donde el tiempo transcurrido desde el nacimiento determina la fase del ciclo:

```
Biorritmo = sin( 2π × (días vividos % duración_ciclo) / duración_ciclo )
```

| Ciclo | Fórmula |
|-------|---------|
| Físico | `sin(2π × días / 23)` |
| Emocional | `sin(2π × días / 28)` |
| Intelectual | `sin(2π × días / 33)` |

El resultado oscila entre **-1** (mínimo) y **+1** (máximo).

---

📜 Licencia
Este proyecto está licenciado bajo la Licencia MIT.
```
MIT License

Copyright (c) 2026 Aura

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

---

## 👤 Autor

**Tu Nombre** — [@3vazquez](https://github.com/3vazquez)

¿Te gusta el proyecto? ¡Dale una ⭐ en GitHub!

---

<p align="center">
  <sub>✨ Hecho con amor y energía cósmica ✨</sub>
</p>