# 🚀 Conectar Vercel con tu Dominio diariux.com

## ✅ Paso 1: Crear cuenta en Vercel (2 minutos)

1. Ve a: **https://vercel.com/signup**
2. Haz clic en **"Continue with GitHub"**
3. Autoriza a Vercel para acceder a tus repositorios
4. ¡Listo! Ya estás dentro de Vercel

---

## 📦 Paso 2: Importar tu Proyecto (3 minutos)

1. En el dashboard de Vercel, haz clic en **"Add New..."** (botón arriba a la derecha)
2. Selecciona **"Project"**
3. Verás una lista de tus repositorios de GitHub
4. Busca **"Diariux"** en la lista
5. Haz clic en **"Import"** junto al nombre

---

## ⚙️ Paso 3: Configurar el Proyecto (2 minutos)

Vercel detectará automáticamente que es Next.js. Verás esta configuración:

### Framework Preset
- ✅ **Next.js** (detectado automáticamente)

### Root Directory
- ✅ `./` (dejar por defecto)

### Build Settings
- ✅ **Build Command**: `next build` (automático)
- ✅ **Output Directory**: `.next` (automático)
- ✅ **Install Command**: `npm install` (automático)

**⚠️ NO cambies nada aquí, Next.js lo configura todo automáticamente**

---

## 🔑 Paso 4: Agregar Variables de Entorno (CRÍTICO)

**ANTES de hacer clic en "Deploy"**, debes agregar la variable de entorno para el formulario:

1. Busca la sección **"Environment Variables"** y expándela
2. Agrega esta variable:
   - **Name**: `NEXT_PUBLIC_WEB3FORMS_KEY`
   - **Value**: `517fe19e-3b19-44f3-8d9e-6e1fb97f5b95`
   - **Environments**: Marca las 3 opciones (Production, Preview, Development)
3. Haz clic en **"Add"**

**⚠️ Sin esta variable, el formulario de contacto NO funcionará**

---

## 🚀 Paso 5: Desplegar (2 minutos)

1. Haz clic en el botón azul **"Deploy"**
2. Vercel comenzará a construir tu sitio
3. Verás un progreso con logs en tiempo real
4. Espera 1-3 minutos

### ✅ Cuando termine verás:
- Un mensaje de **"Congratulations!"** 🎉
- Una URL como: `https://diariux.vercel.app` o `https://diariux-[random].vercel.app`
- Tres botones: **Visit**, **Settings**, **Continue to Dashboard**

5. Haz clic en **"Visit"** para ver tu sitio en vivo 🌐

---

## 🌐 Paso 6: Conectar tu Dominio diariux.com (5 minutos)

Ahora vamos a cambiar la URL de `diariux.vercel.app` a `diariux.com`:

### 6.1 Agregar el dominio en Vercel

1. En tu proyecto en Vercel, ve a **Settings** (pestaña arriba)
2. En el menú lateral izquierdo, haz clic en **"Domains"**
3. Verás un campo que dice "Enter domain"
4. Escribe: `diariux.com` y presiona Enter
5. También agrega: `www.diariux.com` (repite el proceso)
6. Vercel te mostrará los registros DNS que necesitas configurar

### 6.2 Configurar DNS en Hostinger

Vercel te dará 2 tipos de registros DNS:

**Para `diariux.com`:**
- Tipo: `A`
- Nombre: `@`
- Valor: `76.76.21.21` (IP de Vercel)

**Para `www.diariux.com`:**
- Tipo: `CNAME`
- Nombre: `www`
- Valor: `cname.vercel-dns.com`

### 6.3 Ir a Hostinger y configurar DNS

1. Inicia sesión en: **https://hpanel.hostinger.com**
2. Ve a **Dominios** → Busca `diariux.com` → **Administrar DNS**
3. Busca los registros existentes de tipo `A` y `CNAME` para el dominio principal
4. **Edita o agrega** los registros que te dio Vercel:

   **Registro A:**
   - Tipo: `A`
   - Nombre/Host: `@` (o déjalo vacío, depende de Hostinger)
   - Apunta a: `76.76.21.21`
   - TTL: 3600 (o el que tenga por defecto)

   **Registro CNAME:**
   - Tipo: `CNAME`
   - Nombre/Host: `www`
   - Apunta a: `cname.vercel-dns.com`
   - TTL: 3600

5. **Guarda los cambios**

### 6.4 Verificar en Vercel

1. Vuelve a Vercel → Settings → Domains
2. Vercel verificará automáticamente los DNS (puede tardar 1-48 horas, pero usualmente 10-30 minutos)
3. Cuando esté verificado, verás un ✅ verde junto a tu dominio
4. Vercel también configurará SSL/HTTPS automáticamente

---

## 🎉 Paso 7: ¡Listo!

Tu sitio ahora está en **https://diariux.com** con:
- ✅ SSL/HTTPS automático
- ✅ CDN global
- ✅ Formulario de contacto funcionando
- ✅ Actualizaciones automáticas desde GitHub

---

## 🔄 Actualizar el Sitio en el Futuro

Cada vez que hagas cambios:

```bash
cd /Users/marottenacho/proyectos/diariux
git add .
git commit -m "Descripción de los cambios"
git push
```

Vercel detectará los cambios automáticamente y actualizará tu sitio en 1-2 minutos. ¡Sin hacer nada más!

---

## 🆘 Problemas Comunes

### El dominio no funciona después de 1 hora
→ Verifica en Hostinger que los DNS estén correctos
→ Usa https://dnschecker.org para verificar la propagación

### "Error: Form submission failed"
→ Verifica que agregaste la variable `NEXT_PUBLIC_WEB3FORMS_KEY` en Vercel

### Build Failed
→ Revisa los logs en Vercel para ver el error específico
→ Probablemente falte alguna dependencia o variable de entorno

---

## 📱 Verificar que Todo Funciona

Una vez que el dominio esté activo, verifica:
- ✅ `https://diariux.com` carga correctamente
- ✅ `https://www.diariux.com` redirige a `https://diariux.com`
- ✅ El formulario de contacto envía emails
- ✅ Todas las páginas de servicios funcionan
- ✅ El chatbot aparece (aunque aún no esté conectado a n8n)
- ✅ El certificado SSL está activo (candado verde en el navegador)

---

## 🎯 Próximo Paso: Conectar Chatbot n8n

Una vez que tu sitio esté en vivo en `diariux.com`, el siguiente paso será:
1. Configurar el webhook de n8n en tu VPS
2. Actualizar la URL del chatbot en el código
3. Hacer push de los cambios
4. ¡Chatbot funcionando!

---

¿Necesitas ayuda con algún paso? ¡Avísame! 🚀
