# 📧 Configurar Formulario de Contacto - PASO A PASO

## ⚡ Opción Recomendada: Web3Forms (5 minutos, GRATIS)

### Paso 1: Obtener tu Access Key

1. **Abre tu navegador** y ve a: https://web3forms.com/
2. **Verás un campo que dice "Enter your email"**
3. **Escribe:** `info@diariux.com`
4. **Haz clic en** "Create Access Key" (botón azul)
5. **Revisa tu email** (info@diariux.com)
6. **Verifica tu email** haciendo clic en el enlace que te enviaron
7. **Te mostrarán un código** (algo como: `12abc345-def6-7890-gh12-ij3456klm789`)
8. **Copia ese código** (es tu Access Key)

---

### Paso 2: Configurar en tu proyecto

1. **Abre el proyecto Diariux** en tu editor de código
2. **Busca el archivo** `.env.example` en la raíz del proyecto
3. **Crea una copia** de ese archivo y nómbralo `.env.local`
4. **Abre** `.env.local`
5. **Reemplaza** `tu-access-key-aqui` por el código que copiaste
6. **Debería verse así:**
   ```
   NEXT_PUBLIC_WEB3FORMS_KEY=12abc345-def6-7890-gh12-ij3456klm789
   ```
7. **Guarda el archivo** (Cmd+S o Ctrl+S)

---

### Paso 3: Reiniciar el servidor

1. **Detén el servidor** (en la terminal, presiona Ctrl+C)
2. **Inicia nuevamente:**
   ```bash
   npm run dev
   ```
3. **Espera** a que inicie (unos segundos)

---

### Paso 4: Probar el formulario

1. **Abre tu navegador** en http://localhost:3004
2. **Haz clic** en el botón "Contacto" del menú
3. **Completa el formulario** de prueba
4. **Haz clic** en "Solicitar Consultoría Gratis"
5. **Deberías ver** un mensaje de éxito ✅
6. **Revisa** info@diariux.com - deberías recibir el email

---

## ✅ ¿Qué obtienes?

- ✉️ **Emails directos** a info@diariux.com
- 📊 **250 envíos/mes gratis**
- 🔒 **Protección anti-spam**
- 📱 **Notificaciones instantáneas**
- 📈 **Panel de estadísticas** en web3forms.com
- 🚫 **Sin publicidad ni marca de agua**

---

## 🎯 Características del formulario:

- ✅ Validación de campos (email, teléfono, etc.)
- ✅ Mensaje de "Enviando..." mientras procesa
- ✅ Confirmación visual cuando se envía
- ✅ Se limpia automáticamente después de enviar
- ✅ Manejo de errores si algo falla
- ✅ Botón deshabilitado mientras envía (evita duplicados)

---

## 📧 Email que recibirás:

```
De: Formulario Diariux <noreply@web3forms.com>
Para: info@diariux.com
Asunto: Nueva consultoría desde Diariux

Nombre: Juan Pérez
Email: juan@empresa.com
Teléfono: +54 11 1234-5678
Interés: Automatización de Procesos
```

---

## 🔧 Personalización opcional:

### Cambiar el asunto del email:

Abre `components/CTA.tsx` y busca la línea:
```typescript
<input type="hidden" name="subject" value="Nueva consultoría desde Diariux" />
```

Cámbialo por lo que quieras:
```typescript
<input type="hidden" name="subject" value="🚀 Nueva solicitud - Diariux" />
```

---

## 🆘 Problemas comunes:

### ❌ "Error al enviar"
- Verifica que copiaste bien el Access Key
- Asegúrate de que el archivo se llame `.env.local` (no `.env.example`)
- Reinicia el servidor después de crear el archivo

### ❌ No llegan los emails
- Revisa la carpeta de SPAM en info@diariux.com
- Verifica que verificaste tu email en Web3Forms
- Revisa el panel de Web3Forms para ver el estado

### ❌ "YOUR_ACCESS_KEY_HERE"
- Olvidaste configurar el archivo `.env.local`
- Sigue los pasos 1 y 2 de arriba

---

## 🎉 ¡Eso es todo!

Una vez configurado, el formulario funcionará automáticamente y recibirás todos los mensajes en **info@diariux.com**.

---

## 📊 Panel de control:

Puedes ver estadísticas de tus formularios en:
https://web3forms.com/dashboard

(Necesitas iniciar sesión con el email que registraste)

---

## 💡 Siguiente nivel (opcional):

Si en el futuro quieres más funcionalidades:
- Integrar con tu CRM (HubSpot, Salesforce, etc.)
- Auto-responder personalizado
- Webhooks para notificaciones en Slack/Discord
- Base de datos propia

¡Pregúntame y te ayudo a configurarlo!
