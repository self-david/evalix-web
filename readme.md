# Documento Maestro del Proyecto — **Evalix**

---

## 1. Identidad del Proyecto

### Nombre del producto

**Evalix**

### Significado del nombre

- Raíz: **Eval** → evaluación.
- Sufijo moderno → suena tecnológico, ágil y digital.
- Objetivo: transmitir precisión académica + innovación tecnológica.
- Ventajas:
  - Corto y memorable
  - Pronunciación simple
  - Escalable como marca (Evalix Suite, Evalix Cloud, etc.)

---

## 2. Propuesta de Valor

### Qué hace el producto

Aplicación que:

- Escanea hojas de examen con cámara
- Detecta respuestas automáticamente
- Compara contra plantilla correcta
- Genera resultados y analíticas visuales

### Diferenciadores clave

1. Procesamiento local (rápido y privado)
2. Personalización de exámenes
3. No requiere formatos rígidos
4. Compatible con uso offline
5. Opciones nube/local según cliente

---

## 3. Ventajas Competitivas

### Frente a soluciones tradicionales

- No requiere lectores ópticos dedicados
- Sin hojas especiales costosas
- Implementación rápida

### Frente a plataformas modernas

- No depende completamente de internet
- Mayor flexibilidad en diseño de exámenes
- Personalización por cliente
- Menor fricción de adopción

---

## 4. Modelo Técnico

### Procesamiento

- On-device inference (~0.8s por examen)
- Sin latencia de servidor

### Almacenamiento

Dos modos:

#### Modo económico

- Base de datos local (SQL)
- Todo en dispositivo

#### Modo robusto

- Base de datos en nube
- Persistencia multiusuario
- Históricos compartidos

---

## 5. Stack Tecnológico Definido

### Frontend

- React

### Runtime

- Tauri (Rust + Web stack)
- Multiplataforma (móvil + desktop)

### Visualización de datos

- **D3.js**
  - Elegido por:
    - Alta personalización
    - Control fino del DOM
    - Escalabilidad visual

### Exportación

- Generación PDF local
- Sin necesidad de backend
- Compatible con entorno Tauri

---

## 6. Flujo Principal del Producto

### Flujo de profesor

#### Paso 1 — Crear examen base

1. Tomar hoja con respuestas correctas
2. Escanear
3. Guardar como plantilla

#### Paso 2 — Calificar

1. Seleccionar examen existente
2. Escanear hoja de alumno
3. Comparación automática
4. Generación de resultado

---

## 7. Sistema de Resultados

### Tipos de visualización

- Gráficas interactivas
- Resúmenes claros

### Tipos definidos

- Barras
- Pastel
- Líneas evolutivas

### Funcionalidades

- Filtro por alumno
- Comparación entre exámenes
- Evolución de desempeño
- Comparación con promedio

> Implementación visual detallada se posterga a fase posterior.

---

## 8. Diseño del Sitio Web

### Objetivo

Generar:

- Confianza
- Profesionalismo
- Claridad del producto
- Conversión de clientes

---

## 9. Paleta de Colores Oficial

### Paleta elegida

- Azul marino: **#0B3D91**
  - Profesionalismo
  - Confianza académica

- Gris claro: **#E0E0E0**
  - Neutralidad
  - Limpieza visual

- Blanco
  - Contraste
  - Minimalismo moderno

### Justificación

- Diferenciación de competidores
- Estética institucional
- Alto contraste UI

---

## 10. Estructura del Sitio Web

### 1. Inicio

- Hero claro
- Propuesta de valor
- CTA visible

#### Elementos

- Título directo
- Subtítulo breve
- Botón principal

---

### 2. Características

Tres pilares visuales:

- Personalización
- Velocidad
- Seguridad

Con íconos simples.

---

### 3. Demostración

Contenido visual clave:

- Screenshots
- Flujo de escaneo
- Ejemplo de resultados

Objetivo: validación inmediata.

---

### 4. Resultados

Resumen:

- Visualización de analíticas
- Gráficas interactivas
- Comparativas

---

### 5. Precios

Planes diferenciados:

- Local
- Nube
- Personalizado

---

### 6. Contacto

Debe incluir:

- Formulario simple
- Correo
- Canal directo

Objetivo: conversión.

---

### 7. Testimonios

Estado actual:

- Sección placeholder
- Texto: “Próximamente testimonios reales”

---

### 8. Recursos (fase futura)

Contenido:

- Guías
- Videos
- Buenas prácticas

Objetivo:

- Autoridad
- Retención
- Educación del mercado

---

## 11. Navegación del Sitio

### Estructura

- Header fijo
- Multipágina
- Mobile-first

### Prioridades

- Información visible en homepage
- Páginas separadas para profundidad

---

## 12. Identidad Profesional

### Posicionamiento del fundador

Modelo:

- Estudio independiente especializado

### Narrativa

- Liderazgo técnico directo
- Equipo colaborador externo

### Colaboradores

- Ventas
- Diseño
- Operaciones

### Beneficio

- Profesionalismo sin corporativismo
- Cercanía + confianza

---

## 13. Estrategia SEO

### 1. Metaetiquetas

Cada página debe tener:

- Title único
- Meta description clara
- Keywords relevantes

Ejemplos keywords:

- corrección automática de exámenes
- escaneo de exámenes
- calificación automática

---

### 2. URLs

Principios:

- Legibles
- Semánticas

Ejemplos:

- /resultados
- /precios
- /como-funciona

---

### 3. Jerarquía de encabezados

- H1: único por página
- H2: secciones
- H3: subsecciones

---

### 4. Imágenes

- Alt descriptivo
- SEO semántico

---

### 5. Estructura semántica

- HTML limpio
- Contenido jerárquico
- Accesibilidad

---

## 14. Buenas Prácticas Basadas en Competencia

Inspiración estructural (sin copiar identidad):

- Homepage fuerte
- Explicación de producto
- Casos de uso
- Seguridad
- Recursos
- Pricing claro

Aplicación en Evalix:

- Adaptación personalizada
- Simplificación estratégica

---

## 15. Estrategia de Percepción de Marca

Objetivo:

- Profesional desde primera impresión

Claves:

- Diseño limpio
- Lenguaje claro
- Visuales reales
- Cero promesas infladas

---

## 16. Estrategia de Demostración

Importancia alta.

Opciones:

- Video didáctico
- Animación desde app
- Captura real de flujo

Contenido ideal:

1. Cámara detectando examen
2. Zoom en respuestas
3. Detección automática
4. Resultado final

---

## 17. Roadmap Visual

### Ya definido

- Wireframe base
- Secciones clave
- Paleta
- Identidad

### Pendiente

- UI detallada
- Microinteracciones
- Sistema de diseño

---

## 18. Elementos No Prioritarios (post-MVP)

- Blog
- Centro de ayuda
- Testimonios reales
- Casos de éxito

---

## 19. Alcance Actual del Documento

Este documento cubre:

- Producto
- Marca
- Web
- UX
- SEO
- Posicionamiento
- Arquitectura conceptual

---

## 20. Elementos Fuera de Alcance (por ahora)

- Diseño final del logo
- Sistema de branding completo
- Manual de identidad visual

---

## 21. Estado del Proyecto

### Nivel

Pre-lanzamiento estructurado

### Fortalezas

- Base técnica sólida
- Diferenciación clara
- Enfoque práctico
- Modelo flexible

### Siguiente paso lógico

- Desarrollo del sitio
- Primeros clientes piloto
- Validación real

---

## 22. Resumen Ejecutivo

**Evalix** es una plataforma de corrección automática de exámenes enfocada en:

- Precisión
- Velocidad
- Flexibilidad

Se posiciona como:

- Alternativa ligera a soluciones enterprise
- Herramienta poderosa para instituciones pequeñas y medianas

Con:

- Procesamiento local
- Personalización de exámenes
- Analíticas visuales
- Arquitectura escalable

---

Si después quieres:

- Versión para inversores
- Versión pitch deck
- Versión roadmap técnico
- Documento de ventas

Se puede generar sobre esta base.
