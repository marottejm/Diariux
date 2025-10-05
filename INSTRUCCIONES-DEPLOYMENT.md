# 🚀 Instrucciones para Subir Diariux a Internet

## ✅ Paso 1: Crear Repositorio en GitHub

1. Ve a [github.com](https://github.com) e inicia sesión (o crea tu cuenta si no tienes)
2. Haz clic en el botón **"New"** (o el ➕ arriba a la derecha → New repository)
3. Configura tu repositorio:
   - **Repository name**: `diariux-web`
   - **Description**: "Sitio web de Diariux - Agencia de IA y Automatización"
   - **Visibilidad**: ✅ Public (o Private si prefieres)
   - **NO marques** "Add a README file" (ya tienes uno)
   - **NO marques** "Add .gitignore" (ya tienes uno)
4. Haz clic en **"Create repository"**

## 📤 Paso 2: Subir tu Código a GitHub

GitHub te mostrará varias opciones. Como ya tienes un repositorio local, usa la opción:
**"…or push an existing repository from the command line"**

Copia y pega estos comandos en tu terminal (reemplaza `TU-USUARIO` con tu nombre de usuario de GitHub):

```bash
cd /Users/marottenacho/proyectos/diariux
git remote add origin https://github.com/TU-USUARIO/diariux-web.git
git branch -M main
git push -u origin main
```

Si te pide usuario y contraseña, es mejor usar un **Personal Access Token**:
- Ve a GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
- Generate new token → Marca "repo" → Generate
- Usa ese token como contraseña

## 🌐 Paso 3: Desplegar en Vercel

### 3.1 Crear cuenta en Vercel
1. Ve a [vercel.com](https://vercel.com)
2. Haz clic en **"Sign Up"**
3. Selecciona **"Continue with GitHub"** (más fácil)
4. Autoriza a Vercel para acceder a tus repositorios

### 3.2 Importar tu Proyecto
1. Una vez dentro de Vercel, haz clic en **"Add New..."** → **"Project"**
2. Vercel detectará automáticamente tu repositorio `diariux-web`
3. Haz clic en **"Import"** junto al nombre del repo

### 3.3 Configurar el Proyecto
1. **Framework Preset**: Next.js (se detecta automáticamente ✅)
2. **Root Directory**: `.` (dejar por defecto)
3. **Build and Output Settings**: No tocar, Next.js los configura automáticamente

### 3.4 ⚠️ IMPORTANTE: Configurar Variables de Entorno
Antes de hacer clic en "Deploy", debes agregar tu clave de Web3Forms:

1. Expande la sección **"Environment Variables"**
2. Agrega esta variable:
   - **Name**: `NEXT_PUBLIC_WEB3FORMS_KEY`
   - **Value**: `517fe19e-3b19-44f3-8d9e-6e1fb97f5b95`
3. Haz clic en **"Add"**

### 3.5 Desplegar
1. Haz clic en **"Deploy"**
2. Espera 1-3 minutos mientras Vercel construye tu sitio
3. ¡Listo! Vercel te dará una URL como: `https://diariux-web.vercel.app`

## 🎯 Paso 4: Configurar un Dominio Personalizado (Opcional)

Si compras un dominio (ej: `diariux.com`):

1. En Vercel, ve a tu proyecto → Settings → Domains
2. Agrega tu dominio personalizado
3. Vercel te dará instrucciones de cómo configurar los DNS en tu proveedor de dominios

### Proveedores de dominios recomendados en Argentina:
- [NIC Argentina](https://nic.ar) - Para dominios `.com.ar`
- [Namecheap](https://www.namecheap.com) - Internacional
- [GoDaddy](https://www.godaddy.com) - Internacional

## 🔄 Actualizar tu Sitio en el Futuro

Cada vez que quieras hacer cambios:

1. Edita tus archivos localmente
2. Prueba con `npm run dev`
3. Cuando estés conforme, ejecuta:

```bash
cd /Users/marottenacho/proyectos/diariux
git add .
git commit -m "Descripción de los cambios"
git push
```

4. ✨ Vercel detectará automáticamente los cambios y actualizará tu sitio en 1-2 minutos

## 📱 Verificar que Todo Funciona

Una vez desplegado, verifica:
- ✅ La página carga correctamente
- ✅ El formulario de contacto envía emails
- ✅ Todas las páginas de servicios funcionan
- ✅ El chatbot aparece en todas las páginas
- ✅ El botón de "Llamar Ahora" funciona

## 🆘 Problemas Comunes

### "Error: Form submission failed"
→ Verifica que agregaste la variable de entorno en Vercel

### "Page not found"
→ Asegúrate de que hiciste `git push` de todos los archivos

### Los estilos no se ven
→ Limpia el caché de Vercel: Settings → Data Cache → Purge Everything

## 📞 Próximos Pasos Recomendados

1. **Configurar el Chatbot**: Edita `CONFIGURAR-CHATBOT.md`
2. **Actualizar redes sociales**: Edita `components/Footer.tsx` con tus URLs reales
3. **Agregar un favicon personalizado**: Crea un archivo `app/favicon.ico` con tu logo
4. **Configurar Google Analytics**: Para seguir las visitas a tu sitio

---

¿Necesitas ayuda con algún paso? ¡Avísame! 🚀
