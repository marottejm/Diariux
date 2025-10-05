# 🚀 Comandos Finales para Subir tu Código

## Paso 1: Crear un Personal Access Token en GitHub

1. Ve a: https://github.com/settings/tokens
2. Haz clic en **"Generate new token"** → **"Generate new token (classic)"**
3. Configura el token:
   - **Note**: "Diariux Deploy"
   - **Expiration**: 90 days (o "No expiration" si prefieres)
   - **Scopes**: Marca **solo** la casilla "repo" (esto incluye todos los permisos necesarios)
4. Haz clic en **"Generate token"** al final de la página
5. **⚠️ IMPORTANTE**: Copia el token que aparece (comienza con `ghp_...`) y guárdalo temporalmente en un lugar seguro. **No podrás verlo de nuevo.**

## Paso 2: Subir el Código

Copia y pega estos comandos en tu terminal (uno por uno):

```bash
cd /Users/marottenacho/proyectos/diariux
```

```bash
git push -u origin main
```

Cuando te pida:
- **Username**: `marottejm`
- **Password**: Pega aquí tu token (el que empieza con `ghp_...`)

✅ Si todo sale bien, verás algo como:
```
Enumerating objects: 60, done.
Counting objects: 100% (60/60), done.
...
To https://github.com/marottejm/Diariux.git
 * [new branch]      main -> main
```

## Paso 3: Verificar que Subió

Ve a: https://github.com/marottejm/Diariux

Deberías ver todos tus archivos ahí 🎉

## Paso 4: Conectar con Vercel

### 4.1 Crear cuenta en Vercel
1. Ve a: https://vercel.com/signup
2. Haz clic en **"Continue with GitHub"**
3. Autoriza a Vercel

### 4.2 Importar tu Proyecto
1. Dentro de Vercel, haz clic en **"Add New..."** → **"Project"**
2. Verás tu repositorio **"Diariux"** en la lista
3. Haz clic en **"Import"**

### 4.3 Configurar Variables de Entorno ⚠️ IMPORTANTE
Antes de hacer deploy:

1. Expande **"Environment Variables"**
2. Agrega:
   - **Key**: `NEXT_PUBLIC_WEB3FORMS_KEY`
   - **Value**: `517fe19e-3b19-44f3-8d9e-6e1fb97f5b95`
   - **Environments**: Marca Production, Preview y Development
3. Haz clic en **"Add"**

### 4.4 Deploy
1. Haz clic en **"Deploy"**
2. Espera 2-3 minutos
3. ✅ ¡Listo! Tu sitio estará en vivo

Vercel te dará una URL como: `https://diariux.vercel.app` o `https://diariux-marottejm.vercel.app`

## 🔄 Para Actualizar el Sitio en el Futuro

Cada vez que hagas cambios:

```bash
cd /Users/marottenacho/proyectos/diariux
git add .
git commit -m "Descripción de los cambios"
git push
```

Vercel detectará los cambios automáticamente y actualizará tu sitio en 1-2 minutos.

## 🆘 Si Tienes Problemas

### "Authentication failed"
→ Revisa que estés usando el token correcto (comienza con `ghp_`)

### "Permission denied"
→ Verifica que el token tenga el permiso "repo" marcado

### El formulario no funciona en producción
→ Asegúrate de haber agregado la variable de entorno `NEXT_PUBLIC_WEB3FORMS_KEY` en Vercel

---

¿Algún problema? Avísame y te ayudo 🚀
