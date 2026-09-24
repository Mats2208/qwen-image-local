// UI strings. English first (public release); Spanish picked automatically from the OS language.
(() => {
  const S = {
    en: {
      openFolder: "Open folder",
      engineReady: "Engine ready", engineReadyExt: "Engine ready (external)", engineStarting: "Starting engine",
      engineError: "Engine error", engineOff: "Engine off", stopEngine: "Stop engine", startEngine: "Start engine", starting: "Starting…",
      externalTip: "Another program started this engine; close it from there.",
      setupTitle: "Set up Qwen Image Local",
      setupLead: "A one-time install. Everything runs on your GPU; nothing you generate leaves your computer.",
      yourGpu: "Your GPU", vramProfile: "VRAM profile", recommended: "recommended",
      profBalanced: "Balanced · 12 GB+", profBalancedMeta: "int8 encoder · tested on RTX 3060",
      profCompact: "Compact · ~10 GB", profCompactMeta: "w4a8 encoder · −2.5 GB · experimental",
      modelsFolder: "Models folder", change: "Change…",
      modelsHint: "Needs about 17 GB. Already have the Qwen-Image-2.1 weights? Point here to that folder and they won't download again.",
      whatInstalls: "What gets installed", details: "Details",
      licenseNote: "Qwen-Image-2.1 is released by Alibaba under the Qwen Research License (non-commercial). This app is MIT and unofficial.",
      install: (s) => `Install · ${s}`, installing: "Installing…", retry: "Retry install", startApp: "Start creating",
      toDownload: "to download", free: "free", nothingToDownload: "Nothing to download",
      noGpu: "No NVIDIA GPU detected", driver: "driver",
      stepUv: "uv (Python manager)", stepComfy: "ComfyUI engine", stepPython: "Python 3.12", stepDeps: "PyTorch CUDA 13 + packages",
      done: "done", skipped: "already there", waiting: "waiting", failed: "failed", verifying: "verifying checksum",
      modeText: "Text", modePhotos: "Photos", modeSurprise: "Surprise me",
      hintText: "Describe the image you want.", hintPhotos: "Edit or combine up to 10 photos with one instruction.",
      hintSurprise: "The app invents the whole idea. Just press Generate.",
      description: "Description", descPh: "Editorial portrait of an old fisherman at golden hour, 85mm, grazing light, real skin texture…",
      transparent: "Transparent background",
      references: "References", instruction: "Instruction",
      refsHint: "The first photo is the canvas: the result keeps its framing. Refer to them as <code>&lt;image1&gt;</code>, <code>&lt;image2&gt;</code>…",
      instrPh: "Turn it into a snowy winter night. Keep the people, signs and framing.",
      qRemoveBg: "Remove background", qSnow: "Snowy night", qWatercolor: "Watercolor", qGolden: "Golden hour", qNoPeople: "Remove people", qCombine: "Combine 1 + 2",
      theme: "Theme", optional: "(optional)", themePh: "cats, Buenos Aires, sci-fi…",
      surpriseHint: "Every run builds a different idea: subject, style, light and format. A theme is used as the starting point.",
      lastIdea: "Last idea", editAsText: "Edit as text",
      quality: "Quality", pDraft: "Draft", pStandard: "Standard", pMax: "Max",
      presetLegend: "size · steps · time on an RTX 3060",
      format: "Format", random: "Random", seed: "Seed", lock: "Lock", seedPh: "random",
      cancel: "Cancel", kbd: "Ctrl + Enter to generate · Esc to cancel",
      emptyTitle: "No image yet", emptyText: "Pick a mode on the left and press Generate. Images are saved to",
      close: "Close", copyPrompt: "Copy prompt", useSeed: "Use seed", editThis: "Edit this image", showInFolder: "Show in folder", open: "Open",
      history: "History", historyEmpty: "Your images will show up here.", dropHere: "Drop photos to use them as references",
      add: "Add", dropOrClick: "Drag photos here or click",
      gen: "Generate", genSurprise: "Surprise me", genEdit: "Edit photo", genWith: (n) => `Generate with ${n} photos`,
      generating: "Generating…", engineOffBtn: "Engine off", needPhoto: "Add at least one photo",
      needInstr: "Write an instruction", needDesc: "Write a description",
      stUpload: "Uploading references", stLoad: "Loading models on the GPU", stEncode: "Reading the prompt", stSample: "Generating",
      stDecode: "Decoding the image", stSave: "Saving", firstSlow: "The first run takes a bit longer",
      step: (v, m) => `Step ${v} / ${m}`, perStep: "s/step", left: "left",
      cancelled: "Generation cancelled.", copied: "Prompt copied.", copyFail: "Could not copy.",
      limitRefs: (a, b, m) => `Added ${a} of ${b}: the limit is ${m} references.`,
      canvas: "Canvas", remove: "Remove", refs: "refs",
      eventsFail: "Could not register events (check capabilities/default.json): ",
    },
    es: {
      openFolder: "Abrir carpeta",
      engineReady: "Motor listo", engineReadyExt: "Motor listo (externo)", engineStarting: "Encendiendo motor",
      engineError: "Motor con error", engineOff: "Motor apagado", stopEngine: "Apagar motor", startEngine: "Encender motor", starting: "Encendiendo…",
      externalTip: "Este motor lo abrió otro programa; cerralo desde ahí.",
      setupTitle: "Configurar Qwen Image Local",
      setupLead: "Se instala una sola vez. Todo corre en tu GPU; nada de lo que generes sale de tu computadora.",
      yourGpu: "Tu GPU", vramProfile: "Perfil de VRAM", recommended: "recomendado",
      profBalanced: "Equilibrado · 12 GB+", profBalancedMeta: "encoder int8 · probado en RTX 3060",
      profCompact: "Compacto · ~10 GB", profCompactMeta: "encoder w4a8 · −2.5 GB · experimental",
      modelsFolder: "Carpeta de modelos", change: "Cambiar…",
      modelsHint: "Necesita unos 17 GB. ¿Ya tenés los pesos de Qwen-Image-2.1? Elegí esa carpeta y no se vuelven a descargar.",
      whatInstalls: "Qué se instala", details: "Detalles",
      licenseNote: "Qwen-Image-2.1 lo publica Alibaba bajo la Qwen Research License (no comercial). Esta app es MIT y no oficial.",
      install: (s) => `Instalar · ${s}`, installing: "Instalando…", retry: "Reintentar", startApp: "Empezar a crear",
      toDownload: "a descargar", free: "libres", nothingToDownload: "Nada que descargar",
      noGpu: "No se detectó una GPU NVIDIA", driver: "driver",
      stepUv: "uv (gestor de Python)", stepComfy: "Motor ComfyUI", stepPython: "Python 3.12", stepDeps: "PyTorch CUDA 13 + paquetes",
      done: "listo", skipped: "ya estaba", waiting: "en espera", failed: "falló", verifying: "verificando checksum",
      modeText: "Texto", modePhotos: "Fotos", modeSurprise: "Sorpréndeme",
      hintText: "Describí la imagen que querés crear.", hintPhotos: "Editá o combiná hasta 10 fotos con una instrucción.",
      hintSurprise: "La app inventa la idea completa. Vos solo apretá Generar.",
      description: "Descripción", descPh: "Retrato editorial de un pescador patagónico al atardecer, 85mm, luz rasante, piel con textura real…",
      transparent: "Fondo transparente",
      references: "Referencias", instruction: "Instrucción",
      refsHint: "La primera foto es el lienzo: el resultado sale con su encuadre. Nombralas como <code>&lt;image1&gt;</code>, <code>&lt;image2&gt;</code>…",
      instrPh: "Cambiá la escena a una noche de invierno con nieve. Mantené personas, carteles y encuadre.",
      qRemoveBg: "Quitar fondo", qSnow: "Noche nevada", qWatercolor: "Acuarela", qGolden: "Hora dorada", qNoPeople: "Sacar gente", qCombine: "Combinar 1 + 2",
      theme: "Tema", optional: "(opcional)", themePh: "gatos, Buenos Aires, ciencia ficción…",
      surpriseHint: "Cada vez arma una idea distinta: sujeto, estilo, luz y formato. Si escribís un tema, lo usa como punto de partida.",
      lastIdea: "Última idea", editAsText: "Editar como texto",
      quality: "Calidad", pDraft: "Borrador", pStandard: "Estándar", pMax: "Máxima",
      presetLegend: "tamaño · pasos · tiempo en una RTX 3060",
      format: "Formato", random: "Azar", seed: "Semilla", lock: "Fijar", seedPh: "aleatoria",
      cancel: "Cancelar", kbd: "Ctrl + Enter para generar · Esc para cancelar",
      emptyTitle: "Todavía no hay imagen", emptyText: "Elegí un modo a la izquierda y apretá Generar. Las imágenes se guardan en",
      close: "Cerrar", copyPrompt: "Copiar prompt", useSeed: "Usar semilla", editThis: "Editar esta imagen", showInFolder: "Mostrar en carpeta", open: "Abrir",
      history: "Historial", historyEmpty: "Las imágenes que generes van a aparecer acá.", dropHere: "Soltá las fotos para usarlas como referencia",
      add: "Agregar", dropOrClick: "Arrastrá fotos acá o hacé clic",
      gen: "Generar", genSurprise: "Sorpréndeme", genEdit: "Editar foto", genWith: (n) => `Generar con ${n} fotos`,
      generating: "Generando…", engineOffBtn: "Motor apagado", needPhoto: "Agregá al menos una foto",
      needInstr: "Escribí una instrucción", needDesc: "Escribí una descripción",
      stUpload: "Subiendo referencias", stLoad: "Cargando modelos en la GPU", stEncode: "Leyendo el prompt", stSample: "Generando",
      stDecode: "Revelando la imagen", stSave: "Guardando", firstSlow: "La primera vez tarda un poco más",
      step: (v, m) => `Paso ${v} / ${m}`, perStep: "s/paso", left: "restantes",
      cancelled: "Generación cancelada.", copied: "Prompt copiado.", copyFail: "No se pudo copiar.",
      limitRefs: (a, b, m) => `Se agregaron ${a} de ${b}: el límite es ${m} referencias.`,
      canvas: "Lienzo", remove: "Quitar", refs: "ref.",
      eventsFail: "No se pudieron registrar los eventos (revisá capabilities/default.json): ",
    },
  };

  const pick = () => {
    try {
      const saved = localStorage.getItem("qil.lang");
      if (saved && S[saved]) return saved;
    } catch { /* no storage */ }
    return (navigator.language || "en").toLowerCase().startsWith("es") ? "es" : "en";
  };
  let lang = pick();

  window.i18n = {
    get lang() { return lang; },
    t(key, ...args) {
      const v = S[lang][key] ?? S.en[key] ?? key;
      return typeof v === "function" ? v(...args) : v;
    },
    set(l) {
      if (!S[l]) return;
      lang = l;
      try { localStorage.setItem("qil.lang", l); } catch { /* no storage */ }
      this.apply();
    },
    apply(root = document) {
      document.documentElement.lang = lang;
      root.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = this.t(el.dataset.i18n); });
      root.querySelectorAll("[data-i18n-html]").forEach((el) => { el.innerHTML = this.t(el.dataset.i18nHtml); });
      root.querySelectorAll("[data-i18n-ph]").forEach((el) => { el.placeholder = this.t(el.dataset.i18nPh); });
      document.querySelectorAll("[data-lang]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
      window.dispatchEvent(new Event("langchange"));
    },
  };
})();
