# 📝 Guía Fácil para Editar el Contenido de Diariux

## ¡No necesitas saber TypeScript! Es como editar HTML pero más ordenado 😊

---

## 📍 Archivo Principal: `lib/translations.ts`

**Este archivo contiene TODO el texto de tu página web.**

---

## ✏️ Cómo Editar (Ejemplos Prácticos)

### 1️⃣ **Cambiar el Título Principal**

**Busca la línea 11:**
```typescript
title: 'Automatización Inteligente',
```

**Cámbiala por lo que quieras:**
```typescript
title: 'Tu Nuevo Título Aquí',
```

---

### 2️⃣ **Cambiar la Descripción del Hero**

**Busca la línea 13-14:**
```typescript
description: 'Transformamos tu negocio con soluciones de Inteligencia Artificial...',
```

**Edita el texto entre comillas:**
```typescript
description: 'Aquí va tu nueva descripción de la empresa...',
```

---

### 3️⃣ **Cambiar los Servicios**

**Busca la sección `services` (línea 31+):**
```typescript
items: [
  {
    title: 'Automatización Inteligente',
    description: 'Implementamos sistemas de IA...',
    icon: 'robot',
  },
```

**Edita solo el `title` y `description`:**
```typescript
items: [
  {
    title: 'Nuevo Nombre del Servicio',
    description: 'Nueva descripción del servicio aquí...',
    icon: 'robot',  // ⚠️ NO cambiar esto
  },
```

---

### 4️⃣ **Cambiar Información de Contacto**

**Busca la sección `footer` (hacia el final):**
```typescript
address: 'Buenos Aires, Argentina',
email: 'contacto@diariux.com',
phone: '+54 11 XXXX-XXXX',
```

**Edita con tus datos reales:**
```typescript
address: 'Tu Dirección Real',
email: 'tu-email@diariux.com',
phone: '+54 11 1234-5678',
```

---

## 🎨 Cómo Cambiar Colores

### Archivo: `tailwind.config.ts`

**Busca la sección `colors` (línea 12+):**
```typescript
primary: {
  500: '#0ea5e9',  // Color azul principal
  600: '#0284c7',
  700: '#0369a1',
},
```

**Cambia los códigos de color (formato HEX):**
```typescript
primary: {
  500: '#FF6B6B',  // Rojo
  600: '#EE5A5A',
  700: '#DC4949',
},
```

💡 **Usa una herramienta como [Colorhunt.co](https://colorhunt.co) para elegir colores bonitos**

---

## 🔥 Reglas Importantes para NO Romper Nada

### ✅ SÍ puedes cambiar:
- Cualquier texto entre **comillas simples** `'texto aquí'`
- Números (como estadísticas)
- URLs de enlaces

### ❌ NO cambies:
- Las palabras antes de los dos puntos `:` (son nombres de variables)
- Los símbolos: `{` `}` `[` `]` `,` (son estructura del código)
- Las palabras `icon:` y sus valores (déjalos como están)

---

## 💾 Cómo Ver tus Cambios

1. **Edita** el archivo `lib/translations.ts`
2. **Guarda** el archivo (Cmd+S o Ctrl+S)
3. **Espera 1-2 segundos** (Next.js recarga automáticamente)
4. **Refresca** tu navegador (o se actualiza solo)

---

## 🆘 Si Algo se Rompe

### Error de sintaxis:
- Probablemente olvidaste una **coma** `,` al final de una línea
- O borraste una **comilla** `'`

### Solución rápida:
1. Deshacer el último cambio (Cmd+Z o Ctrl+Z)
2. O pregúntame y te ayudo a arreglarlo

---

## 📚 Ejemplos Completos

### Cambiar un Servicio Completo:

**ANTES:**
```typescript
{
  title: 'Automatización Inteligente',
  description: 'Implementamos sistemas de IA para automatizar procesos...',
  icon: 'robot',
},
```

**DESPUÉS:**
```typescript
{
  title: 'Consultoría Empresarial',
  description: 'Analizamos tu negocio y diseñamos estrategias personalizadas con IA...',
  icon: 'robot',
},
```

---

### Cambiar un Beneficio:

**ANTES:**
```typescript
{
  title: 'Mayor Eficiencia',
  description: 'Automatiza tareas repetitivas y reduce errores humanos.',
},
```

**DESPUÉS:**
```typescript
{
  title: 'Ahorro de Tiempo',
  description: 'Reduce el tiempo de procesamiento en un 80% con automatización.',
},
```

---

## 🎯 Lista de Secciones Editables

| Sección | Qué Contiene | Línea Aprox. |
|---------|--------------|--------------|
| `nav` | Menú de navegación | 3-9 |
| `hero` | Título y descripción principal | 10-17 |
| `stats` | Estadísticas (+85%, -60%, etc.) | 18-22 |
| `about` | Sobre nosotros | 23-30 |
| `services` | 6 servicios principales | 31-70 |
| `benefits` | 6 beneficios | 71-95 |
| `methodology` | 4 fases de metodología | 96-115 |
| `cta` | Llamado a la acción | 116-122 |
| `footer` | Pie de página y contacto | 123-140 |

---

## 🚀 Consejos Pro

1. **Haz cambios pequeños:** Edita una cosa, guarda, verifica que funcione
2. **Guarda copias:** Antes de hacer cambios grandes, copia el contenido a un archivo aparte
3. **Prueba en diferentes dispositivos:** Abre en celular, tablet y computadora
4. **No tengas miedo:** Si algo se rompe, siempre puedo ayudarte a arreglarlo

---

## 📞 ¿Necesitas Ayuda?

Si algo no funciona o quieres hacer un cambio más complejo, solo pregúntame:
- "Quiero cambiar X por Y"
- "¿Cómo hago para...?"
- "Se rompió esto, ayuda!"

**¡Estoy aquí para ayudarte! 🤖**

