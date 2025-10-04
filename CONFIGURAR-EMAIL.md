# 📧 Configurar el Formulario para Recibir Emails

## ✅ Opción 1: Web3Forms (Recomendado - GRATIS)

### Pasos para configurarlo:

1. **Ve a:** https://web3forms.com/
2. **Ingresa tu email:** info@diariux.com
3. **Recibirás un código** llamado "Access Key" (ejemplo: 12345678-abcd-1234-abcd-123456789abc)
4. **Copia ese código**

### Configuración en el proyecto:

1. Crea un archivo `.env.local` en la raíz del proyecto
2. Agrega esta línea:
```
NEXT_PUBLIC_WEB3FORMS_KEY=tu-codigo-aqui
```

3. Guarda el archivo

¡Listo! El formulario empezará a enviarte emails a info@diariux.com

---

## ✅ Opción 2: Formspree (También GRATIS)

### Pasos:

1. **Ve a:** https://formspree.io/
2. **Regístrate gratis**
3. **Crea un nuevo formulario**
4. **Te darán un ID** (ejemplo: mabcdefg)
5. Usa ese ID en la configuración

---

## ✅ Opción 3: EmailJS (Más personalizable)

### Pasos:

1. **Ve a:** https://www.emailjs.com/
2. **Regístrate gratis** (permite 200 emails/mes)
3. **Configura un servicio de email** (Gmail, Outlook, etc.)
4. **Obtén las credenciales**

---

## 🚀 ¿Cuál elegir?

- **Web3Forms:** ✅ Más fácil, 250 envíos/mes gratis, sin registros complicados
- **Formspree:** ✅ 50 envíos/mes gratis, muy confiable
- **EmailJS:** ✅ 200 envíos/mes gratis, más control

**Recomendación:** Empieza con **Web3Forms** por su simplicidad.

---

## 📝 Notas:

- Todos son servicios gratuitos profesionales
- No necesitas configurar un servidor
- Los emails llegarán a info@diariux.com
- Puedes cambiar más adelante a un servicio más robusto si creces
