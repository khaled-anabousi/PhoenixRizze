<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Language Switcher</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
    }
    select {
      padding: 5px 10px;
      font-size: 16px;
    }
  </style>
</head>
<body>
  <label for="languageSwitcher">اختر اللغة:</label>
  <select id="languageSwitcher">
    <option value="en">English</option>
    <option value="ar">العربية</option>
    <option value="fr">Français</option>
    <option value="es">Español</option>
    <option value="zh">中文</option>
  </select>

  <h1 id="page-title">Welcome</h1>
  <p id="page-content">This is the page. You can modify the content as needed.</p>

  <script>
    document.addEventListener("DOMContentLoaded", function () {
      const langSelect = document.getElementById("languageSwitcher");
      const title = document.getElementById("page-title");
      const content = document.getElementById("page-content");

      const translations = {
        en: ["Welcome", "This is the page. You can modify the content as needed."],
        ar: ["مرحبًا", "هذه هي الصفحة. يمكنك تعديل المحتوى حسب الحاجة."],
        fr: ["Bienvenue", "Ceci est la page. Vous pouvez modifier le contenu si nécessaire."],
        es: ["Bienvenido", "Esta es la página. Puede modificar el contenido según sea necesario."],
        zh: ["欢迎", "这是页面。您可以根据需要修改内容。"]
      };

      // استعادة اللغة المحفوظة (إن وجدت)
      const savedLang = localStorage.getItem("preferredLang") || "en";
      langSelect.value = savedLang;
      updateLanguage(savedLang);

      langSelect.addEventListener("change", function () {
        const lang = this.value;
        localStorage.setItem("preferredLang", lang);
        updateLanguage(lang);
      });

      function updateLanguage(lang) {
        title.textContent = translations[lang][0];
        content.textContent = translations[lang][1];
        document.documentElement.lang = lang;
        document.body.dir = lang === "ar" ? "rtl" : "ltr";
      }
    });
  </script>
</body>
</html>
