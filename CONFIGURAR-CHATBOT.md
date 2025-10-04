# 🤖 Configurar Chatbot con n8n

## ✅ El botón ya está agregado a tu página

El botón de chatbot flotante ya está visible en todas las páginas en la esquina inferior derecha.

---

## 📋 Cuando tengas tu chatbot de n8n listo:

### Paso 1: Obtén la URL de tu webhook de n8n

1. En n8n, crea o abre tu flujo de chatbot
2. Agrega un nodo **Webhook**
3. Copia la URL del webhook (ejemplo: `https://tu-instancia.n8n.cloud/webhook/chat-diariux`)

---

### Paso 2: Configura la URL en tu código

Abre el archivo: `components/ChatbotButton.tsx`

**Busca la línea 9:**
```typescript
const CHATBOT_URL = 'https://tu-webhook-n8n.com/chat'; // ← Reemplaza con tu URL de n8n
```

**Cámbiala por tu URL real:**
```typescript
const CHATBOT_URL = 'https://tu-instancia.n8n.cloud/webhook/chat-diariux';
```

---

### Paso 3: Activa el iframe

En el mismo archivo `components/ChatbotButton.tsx`, busca las líneas 79-92:

**Comenta el mensaje temporal (líneas 69-86):**
```typescript
{/* Mientras no tengas el chatbot configurado, muestro un mensaje
<div className="h-full flex flex-col items-center justify-center...">
  ...todo el contenido...
</div>
*/}
```

**Descomenta el iframe (líneas 88-93):**
```typescript
<iframe
  src={CHATBOT_URL}
  className="w-full h-full border-0 rounded-lg"
  title="Chatbot Diariux"
  allow="microphone; camera"
/>
```

---

### Paso 4: Guarda y prueba

1. Guarda los cambios
2. El servidor de Next.js recargará automáticamente
3. Haz clic en el botón de chat en tu página
4. ¡Deberías ver tu chatbot funcionando!

---

## 🎨 Características del botón:

✅ **Flotante** - Siempre visible en la esquina inferior derecha  
✅ **Responsive** - En móvil se abre en pantalla completa  
✅ **Animado** - Con efectos suaves de apertura/cierre  
✅ **Badge rojo** - Indicador de "nuevo" cuando está cerrado  
✅ **Fácil de cerrar** - Botón X visible y accesible  

---

## ⚙️ Personalizaciones opcionales:

### Cambiar colores del botón:

Busca la línea 15-19 en `ChatbotButton.tsx`:
```typescript
bg-gradient-to-br from-primary-600 to-accent-600
```

### Cambiar posición del botón:

Busca la línea 13:
```typescript
className="fixed bottom-6 right-6..."
```

Cambia `bottom-6` o `right-6` por:
- `bottom-4` - Más cerca del borde
- `left-6` - Lado izquierdo
- Etc.

### Cambiar tamaño de la ventana:

Busca la línea 33:
```typescript
className="...w-96 h-[500px]..."
```

Cambia:
- `w-96` → `w-[450px]` (más ancho)
- `h-[500px]` → `h-[600px]` (más alto)

---

## 🔧 Configuración avanzada de n8n:

### Para un chatbot web completo:

1. **Opción 1: Webhook + HTML**
   - Crea una interfaz HTML en n8n
   - Devuelve el HTML desde el webhook
   - El iframe lo mostrará directamente

2. **Opción 2: Usar n8n Chat**
   - Configura n8n con el nodo de Chat
   - Usa la URL del chat widget
   - Más fácil y con UI incluida

3. **Opción 3: Integración personalizada**
   - Usa la API de n8n
   - Envía mensajes con fetch/axios
   - Control total sobre la UI

---

## 📱 Ejemplo de n8n workflow básico:

```
1. Webhook (POST)
   ↓
2. Set variables (extraer mensaje del usuario)
   ↓
3. HTTP Request (llamar a OpenAI/Claude)
   ↓
4. Function (formatear respuesta)
   ↓
5. Respond to Webhook
```

---

## 🆘 Problemas comunes:

### El iframe no carga:
- Verifica que la URL sea accesible públicamente
- Revisa CORS en n8n (debe permitir tu dominio)
- Verifica que el webhook esté activo

### El chatbot no responde:
- Revisa los logs de n8n
- Verifica que el workflow esté activado
- Confirma que estés enviando los datos correctos

---

## 💡 Próximos pasos:

Una vez que funcione:
1. Agrega analytics para ver cuántas conversaciones tienes
2. Personaliza el avatar del bot
3. Agrega mensajes de bienvenida automáticos
4. Configura respuestas rápidas

---

¿Necesitas ayuda con la configuración? ¡Pregúntame! 🚀
